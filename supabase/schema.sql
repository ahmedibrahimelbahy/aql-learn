-- ============================================================
-- AQL Learn — Supabase Schema
-- Run this ONCE in your Supabase project → SQL Editor → New Query
-- ============================================================

-- ---------- Extensions ----------
create extension if not exists "pgcrypto";

-- ---------- Tables ----------

-- Admins (teachers) — a row here grants admin privileges
create table if not exists public.admins (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text,
  created_at timestamptz not null default now()
);

-- Classes (cohorts)
create table if not exists public.classes (
  id         uuid primary key default gen_random_uuid(),
  code       text unique not null,
  name       text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- Students — one row per registered learner
create table if not exists public.students (
  id            uuid primary key default gen_random_uuid(),
  auth_user_id  uuid unique references auth.users(id) on delete cascade,
  class_id      uuid not null references public.classes(id) on delete cascade,
  name          text not null,
  created_at    timestamptz not null default now(),
  last_seen_at  timestamptz not null default now()
);
create index if not exists idx_students_class on public.students(class_id);
create unique index if not exists uq_students_class_name
  on public.students(class_id, lower(name));

-- Progress — one row per completed resource per student
create table if not exists public.progress (
  id            uuid primary key default gen_random_uuid(),
  student_id    uuid not null references public.students(id) on delete cascade,
  resource_id   text not null,
  completed_at  timestamptz not null default now(),
  unique(student_id, resource_id)
);
create index if not exists idx_progress_student on public.progress(student_id);

-- ---------- Helper: is the current auth user an admin? ----------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins where user_id = auth.uid()
  );
$$;

-- ---------- Trigger: auto-promote whitelisted emails to admins ----------
-- Edit the whitelist below when you want to add/remove admins.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email in (
    'ahmed.ibrahim.elbahy@gmail.com',
    'ahmed.abmagd@gmail.com'
  ) then
    insert into public.admins (user_id, email)
    values (new.id, new.email)
    on conflict (user_id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------- Row-Level Security ----------
alter table public.admins   enable row level security;
alter table public.classes  enable row level security;
alter table public.students enable row level security;
alter table public.progress enable row level security;

-- ADMINS: only admins can read the admins table
drop policy if exists "admins read" on public.admins;
create policy "admins read"
  on public.admins for select
  using (public.is_admin());

-- CLASSES:
-- Anyone (even anonymous) can look up a class by its code (for the student join flow).
drop policy if exists "anyone can read classes" on public.classes;
create policy "anyone can read classes"
  on public.classes for select
  using (true);

drop policy if exists "admins insert classes" on public.classes;
create policy "admins insert classes"
  on public.classes for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "admins update classes" on public.classes;
create policy "admins update classes"
  on public.classes for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "admins delete classes" on public.classes;
create policy "admins delete classes"
  on public.classes for delete
  to authenticated
  using (public.is_admin());

-- STUDENTS:
-- A student can read their own row; admins can read all.
drop policy if exists "students read self or admin" on public.students;
create policy "students read self or admin"
  on public.students for select
  to authenticated
  using (auth_user_id = auth.uid() or public.is_admin());

-- A student creates their own row (auth_user_id must equal current user).
drop policy if exists "students insert self" on public.students;
create policy "students insert self"
  on public.students for insert
  to authenticated
  with check (auth_user_id = auth.uid());

-- A student can update their own last_seen_at / name; admins can update any.
drop policy if exists "students update self or admin" on public.students;
create policy "students update self or admin"
  on public.students for update
  to authenticated
  using (auth_user_id = auth.uid() or public.is_admin())
  with check (auth_user_id = auth.uid() or public.is_admin());

-- Admins can delete students (e.g. prune a class).
drop policy if exists "admins delete students" on public.students;
create policy "admins delete students"
  on public.students for delete
  to authenticated
  using (public.is_admin());

-- PROGRESS:
-- Read your own progress; admins read all.
drop policy if exists "progress read self or admin" on public.progress;
create policy "progress read self or admin"
  on public.progress for select
  to authenticated
  using (
    exists (
      select 1 from public.students s
      where s.id = progress.student_id
        and (s.auth_user_id = auth.uid() or public.is_admin())
    )
  );

-- Insert progress only for your own student row.
drop policy if exists "progress insert own" on public.progress;
create policy "progress insert own"
  on public.progress for insert
  to authenticated
  with check (
    exists (
      select 1 from public.students s
      where s.id = progress.student_id and s.auth_user_id = auth.uid()
    )
  );

-- Delete your own progress (un-marking resources).
drop policy if exists "progress delete own" on public.progress;
create policy "progress delete own"
  on public.progress for delete
  to authenticated
  using (
    exists (
      select 1 from public.students s
      where s.id = progress.student_id and s.auth_user_id = auth.uid()
    )
  );

-- ---------- Aggregate view for the admin dashboard ----------
create or replace view public.v_student_progress as
select
  s.id            as student_id,
  s.name          as student_name,
  s.class_id,
  c.code          as class_code,
  c.name          as class_name,
  s.last_seen_at,
  s.created_at    as joined_at,
  count(p.id)     as completed_count
from public.students s
join public.classes c on c.id = s.class_id
left join public.progress p on p.student_id = s.id
group by s.id, s.name, s.class_id, c.code, c.name, s.last_seen_at, s.created_at;

-- Done. Run this, then:
-- 1) Supabase → Authentication → Users → "Add user"
--    Create admin users with emails:
--       ahmed.ibrahim.elbahy@gmail.com
--       ahmed.abmagd@gmail.com
--    Set passwords manually.  The trigger will auto-insert them into admins.
-- 2) Refresh the site and sign in at #admin.
