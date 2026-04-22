// ============================================================
// AQL Learn — Content Database
// 4 pillars, video-only, refreshed for 2026.
//
// Structure:
//   Pillar 1 — Start Here   (onramp, 3 videos)
//   Pillar 2 — By Creator   (Nate Herk · Jack Roberts · Liam Ottley)
//   Pillar 3 — Official     (Anthropic Skilljar courses)
//   Pillar 4 — By Topic     (Agents · Claude Code · Content)
//
// HOW TO ADD:
//   type:"youtube" → paste full YouTube URL
//   type:"course"  → official course link
//   Every resource needs a unique "id" string.
// ============================================================

const CONTENT = {
  pillars: [

    // =========================================================
    // PILLAR 1 — START HERE
    // =========================================================
    {
      id: "start-here",
      name: "Start Here",
      icon: "🚀",
      description: "Your first 80 minutes. Three curated beginner videos — one from each creator — to get oriented fast. Finish these, then pick any path.",
      color: "#00e5ff",
      subtracks: [
        {
          id: "onramp",
          name: "The Onramp",
          icon: "🚀",
          description: "Three back-to-back videos that teach you what's possible, how Claude Code works, and why the game has changed.",
          estimatedTime: "~80 min",
          phases: [
            {
              id: "onramp-phase-1",
              name: "First Transmission",
              timeline: "Watch in order",
              resources: [
                {
                  id: "start-1",
                  dateAdded: "2026-04-22",
                  type: "youtube",
                  title: "How to Automate Your Work with Claude Code (Beginner Breakdown)",
                  url: "https://www.youtube.com/watch?v=oC0mPBSmzfQ",
                  duration: "~25 min",
                  description: "Liam Ottley's beginner-friendly starting point — what Claude Code actually is and how to start automating real work from zero."
                },
                {
                  id: "start-2",
                  dateAdded: "2026-04-22",
                  type: "youtube",
                  title: "Master 95% of Claude Code in 36 Mins (as a beginner)",
                  url: "https://www.youtube.com/watch?v=saggDHHnmtQ",
                  duration: "36 min",
                  description: "Nate Herk's ultimate beginner guide to Claude Code — everything you need to start building, compressed into 36 minutes."
                },
                {
                  id: "start-3",
                  dateAdded: "2026-04-22",
                  type: "youtube",
                  title: "I Replaced n8n With Claude Code (AI Agents Got 10x Easier)",
                  url: "https://www.youtube.com/watch?v=Vmb1FtsgdjU",
                  duration: "~20 min",
                  description: "Jack Roberts explains why he abandoned n8n for Claude Code and how agent building became dramatically simpler overnight — the modern mindset."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // PILLAR 2 — BY CREATOR
    // =========================================================
    {
      id: "by-channel",
      name: "By Creator",
      icon: "📺",
      description: "Follow the top AI educators on YouTube — curated playlists organized by creator so you can stay current as AI moves fast.",
      color: "#f59e0b",
      subtracks: [

        // ── Nate Herk ─────────────────────────────────────────
        {
          id: "nate-herk-channel",
          name: "Nate Herk",
          icon: "⚡",
          description: "AI automation expert helping non-technical people build AI agents and n8n workflows. Posts 3–5× per week on the latest Claude, n8n, and automation tools.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "nate-latest",
              name: "Latest Drops",
              timeline: "Jan–Apr 2026",
              resources: [
                {
                  id: "nh-9",
                  dateAdded: "2026-04-20",
                  type: "youtube",
                  title: "Claude Just Destroyed Every Video Editing Tool",
                  url: "https://www.youtube.com/watch?v=ZNbgOhxhzXg",
                  duration: "~15 min",
                  description: "Motion graphics that took professionals hours can now be done in minutes with natural language — Nate's breakdown of Claude Design and Claude Code with Hyperframes for video editing."
                },
                {
                  id: "nh-10",
                  dateAdded: "2026-04-20",
                  type: "youtube",
                  title: "How to Never Hit Your Claude Session Limit Again",
                  url: "https://www.youtube.com/watch?v=_qZvORxGqI0",
                  duration: "~12 min",
                  description: "Nate's techniques for managing Claude session limits so your workflows never get interrupted mid-build."
                },
                {
                  id: "nh-11",
                  dateAdded: "2026-04-17",
                  type: "youtube",
                  title: "Claude Design Just Became Unstoppable",
                  url: "https://www.youtube.com/watch?v=gAoZ95kqG7w",
                  duration: "~15 min",
                  description: "The latest Claude Design update that changes everything — what's new and how to use it right now."
                },
                {
                  id: "nh-12",
                  dateAdded: "2026-04-17",
                  type: "youtube",
                  title: "I Turned Claude Opus 4.7 Into a 24/7 Trader",
                  url: "https://www.youtube.com/watch?v=6MC1XqZSltw",
                  duration: "~18 min",
                  description: "Nate builds a fully autonomous AI trading agent using Claude Opus 4.7 that runs around the clock."
                },
                {
                  id: "nh-13",
                  dateAdded: "2026-04-16",
                  type: "youtube",
                  title: "Claude Opus 4.7 Just Dropped... Or Did It Really?",
                  url: "https://www.youtube.com/watch?v=NiMc2PoTiXo",
                  duration: "~14 min",
                  description: "Nate digs into what Claude Opus 4.7 actually is — what changed, what's hype, and what it means for builders."
                },
                {
                  id: "nh-14",
                  dateAdded: "2026-04-15",
                  type: "youtube",
                  title: "Claude + HeyGen Just Changed Content Creation Forever",
                  url: "https://www.youtube.com/watch?v=EbJu9T30nfI",
                  duration: "~16 min",
                  description: "Combining Claude with HeyGen's AI video platform for a fully automated content creation pipeline."
                },
                {
                  id: "nh-15",
                  dateAdded: "2026-04-14",
                  type: "youtube",
                  title: "Claude Code Just Dropped Routines. 24/7 Agents.",
                  url: "https://www.youtube.com/watch?v=ehg4fhydTgs",
                  duration: "~15 min",
                  description: "The new Claude Code Routines feature that lets your agents run on schedules — 24/7 automation is now trivial."
                },
                {
                  id: "nh-16",
                  dateAdded: "2026-04-13",
                  type: "youtube",
                  title: "100 Hours Testing Claude Code vs Antigravity (honest results)",
                  url: "https://www.youtube.com/watch?v=99VHENEKA9o",
                  duration: "~20 min",
                  description: "After 100 hours of real testing — the honest head-to-head between Claude Code and Antigravity for builders."
                },
                {
                  id: "nh-17",
                  dateAdded: "2026-04-12",
                  type: "youtube",
                  title: "This One Plugin Just 10x'd Claude Code",
                  url: "https://www.youtube.com/watch?v=4XqVR6xI6Kw",
                  duration: "~14 min",
                  description: "The single Claude Code plugin that dramatically multiplies what you can build — Nate's full breakdown."
                },
                {
                  id: "nh-1",
                  dateAdded: "2026-04-11",
                  type: "youtube",
                  title: "Seedance 2.0 + Claude Code Creates $10k Websites in Minutes",
                  url: "https://www.youtube.com/watch?v=NvxiSG34mPU",
                  duration: "~15 min",
                  description: "Nate combines Seedance 2.0 with Claude Code to build premium websites at record speed."
                },
                {
                  id: "nh-2",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "Claude Just Told Us to Stop Using Their Best Model",
                  url: "https://www.youtube.com/watch?v=1EPsUXSManU",
                  duration: "~15 min",
                  description: "Anthropic's surprising recommendation on which Claude model to actually use — and why it matters for your workflows."
                },
                {
                  id: "nh-3",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "I Gave OpenClaw $10,000 to Trade Stocks",
                  url: "https://www.youtube.com/watch?v=eu8UJtuIi-E",
                  duration: "~20 min",
                  description: "Nate puts real money on the line to test OpenClaw's autonomous trading capabilities."
                },
                {
                  id: "nh-4",
                  dateAdded: "2026-04-08",
                  type: "youtube",
                  title: "I Tested Claude's New Managed Agents... What You Need To Know",
                  url: "https://www.youtube.com/watch?v=27Y44JYXZJ8",
                  duration: "18 min",
                  description: "What Claude's managed agents actually do inside n8n — the honest breakdown of what works and what doesn't."
                },
                {
                  id: "nh-5",
                  dateAdded: "2026-04-07",
                  type: "youtube",
                  title: "Claude's New AI Just Changed the Internet Forever",
                  url: "https://www.youtube.com/watch?v=DG1wRgEpdO4",
                  duration: "~15 min",
                  description: "Nate breaks down the latest Claude release and what it means for automators and builders."
                },
                {
                  id: "nh-6",
                  dateAdded: "2026-04-06",
                  type: "youtube",
                  title: "Andrej Karpathy Just 10x'd Everyone's Claude Code",
                  url: "https://www.youtube.com/watch?v=p9mgmKhUz_4",
                  duration: "~20 min",
                  description: "How Karpathy's Obsidian memory system dramatically improves Claude Code outputs — Nate's full breakdown."
                },
                {
                  id: "nh-7",
                  dateAdded: "2026-04-06",
                  type: "youtube",
                  title: "Planning In Claude Code Just Got a Huge Upgrade",
                  url: "https://www.youtube.com/watch?v=T4fXb3sbJIo",
                  duration: "~12 min",
                  description: "The new planning workflow in Claude Code that saves hours and avoids wasted tokens."
                },
                {
                  id: "nh-8",
                  dateAdded: "2026-04-04",
                  type: "youtube",
                  title: "How to Use Claude Code for 99% CHEAPER",
                  url: "https://www.youtube.com/watch?v=F3nYY3N2wgw",
                  duration: "~18 min",
                  description: "Smart token management tricks that cut your Claude Code costs dramatically without sacrificing quality."
                },
                {
                  id: "nh-18",
                  dateAdded: "2026-04-04",
                  type: "youtube",
                  title: "Anthropic Quietly Cut Claude Code Limits - And Banned Open Claw...",
                  url: "https://www.youtube.com/watch?v=mdneMu5rniI",
                  duration: "~14 min",
                  description: "What Anthropic's under-the-radar policy changes mean for Claude Code users and the OpenClaw ecosystem."
                },
                {
                  id: "nh-19",
                  dateAdded: "2026-04-02",
                  type: "youtube",
                  title: "Claude Code + Paperclip Just Destroyed OpenClaw",
                  url: "https://www.youtube.com/watch?v=HJ-dwefABss",
                  duration: "~15 min",
                  description: "The Paperclip tool integration that makes Claude Code more powerful than OpenClaw for complex agent builds."
                },
                {
                  id: "nh-20",
                  dateAdded: "2026-03-21",
                  type: "youtube",
                  title: "Stop Learning n8n in 2026...Learn THIS Instead",
                  url: "https://www.youtube.com/watch?v=ZeJXI2MAhj0",
                  duration: "~18 min",
                  description: "Nate makes the case for what automation builders should be learning instead of n8n in 2026 — and why."
                },
                {
                  id: "nh-21",
                  dateAdded: "2026-01-21",
                  type: "youtube",
                  title: "Master 95% of Claude Code in 36 Mins (as a beginner)",
                  url: "https://www.youtube.com/watch?v=saggDHHnmtQ",
                  duration: "36 min",
                  description: "Nate's ultimate beginner guide to Claude Code — everything you need to start building, compressed into 36 minutes."
                },
                {
                  id: "nh-22",
                  dateAdded: "2026-01-16",
                  type: "youtube",
                  title: "Build ANYTHING with Claude Code & n8n (Beginner's Guide)",
                  url: "https://www.youtube.com/watch?v=OCO3aq3G0mk",
                  duration: "~30 min",
                  description: "How to combine Claude Code with n8n to build any automation you can imagine — the complete beginner workflow."
                }
              ]
            }
          ]
        },

        // ── Jack Roberts ──────────────────────────────────────
        {
          id: "jack-roberts-channel",
          name: "Jack Roberts",
          icon: "🧠",
          description: "Top-100 UK entrepreneur who built a 7-figure AI automation business. Teaches Claude Code, Cowork, and real systems that run actual businesses — posts daily.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "jack-latest",
              name: "Latest Drops",
              timeline: "Jan–Apr 2026",
              resources: [
                {
                  id: "jr-10",
                  dateAdded: "2026-04-20",
                  type: "youtube",
                  title: "Claude Design just dropped... Unlock Superpowers",
                  url: "https://www.youtube.com/watch?v=2vWVGIQF5S0",
                  duration: "~16 min",
                  description: "Jack's first look at Claude Design — the new capabilities and how to unlock them for your business."
                },
                {
                  id: "jr-11",
                  dateAdded: "2026-04-18",
                  type: "youtube",
                  title: "Claude Code just changed NotebookLM Forever (Tutorial)",
                  url: "https://www.youtube.com/watch?v=PkOlfB3RY5Q",
                  duration: "~18 min",
                  description: "Full tutorial: use Claude Code to supercharge Google NotebookLM for research, knowledge management, and automation."
                },
                {
                  id: "jr-8",
                  dateAdded: "2026-04-16",
                  type: "youtube",
                  title: "Is Claude Getting Dumber?",
                  url: "https://www.youtube.com/watch?v=ULKEyTxRZ5s",
                  duration: "~15 min",
                  description: "Jack investigates whether Claude's reasoning has actually declined — what's happening under the hood and what it means for builders and automation workflows."
                },
                {
                  id: "jr-12",
                  dateAdded: "2026-04-16",
                  type: "youtube",
                  title: "Claude Code 2.0 Is Here... Automate Anything",
                  url: "https://www.youtube.com/watch?v=efGXZselN64",
                  duration: "~20 min",
                  description: "What's new in Claude Code 2.0 and how to automate any business process with it — Jack's full breakdown."
                },
                {
                  id: "jr-13",
                  dateAdded: "2026-04-14",
                  type: "youtube",
                  title: "Claude Code Design just became UNSTOPPABLE",
                  url: "https://www.youtube.com/watch?v=z9CwM-DAe5Q",
                  duration: "~15 min",
                  description: "The Claude Code + Design combination that Jack says is the most powerful creative tool he's ever used."
                },
                {
                  id: "jr-14",
                  dateAdded: "2026-04-12",
                  type: "youtube",
                  title: "Claude Code + SeedDance 2.0 = Cinematic $10k Websites",
                  url: "https://www.youtube.com/watch?v=ExL35N8RPjA",
                  duration: "~18 min",
                  description: "How to combine Claude Code with SeedDance 2.0 to produce cinematic, high-value websites that clients pay $10k for."
                },
                {
                  id: "jr-15",
                  dateAdded: "2026-04-11",
                  type: "youtube",
                  title: "Claude Code just changed Website Design Forever (Relume)",
                  url: "https://www.youtube.com/watch?v=zTuV3chQCus",
                  duration: "~17 min",
                  description: "Full tutorial: Claude Code + Relume for instant professional website design — the workflow that's changing agency work."
                },
                {
                  id: "jr-1",
                  dateAdded: "2026-04-10",
                  type: "youtube",
                  title: "Claude Code + Karpathy's Obsidian = New Meta",
                  url: "https://www.youtube.com/watch?v=eglVxLaWRUU",
                  duration: "23 min",
                  description: "Jack shows how combining Claude Code with Karpathy's Obsidian creates the most powerful AI coding setup available right now."
                },
                {
                  id: "jr-2",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "Claude Code just dropped Managed Agents... It Destroys No Code",
                  url: "https://www.youtube.com/watch?v=eQ_RxS_fh64",
                  duration: "~20 min",
                  description: "Why Claude Code's managed agents change everything — and what it means for the future of no-code tools."
                },
                {
                  id: "jr-3",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "Claude Code just changed Memory Forever (Tutorial)",
                  url: "https://www.youtube.com/watch?v=TXcr0x9SIXA",
                  duration: "~18 min",
                  description: "Add persistent long-term memory to Claude Code using Pinecone's vector database — full walkthrough."
                },
                {
                  id: "jr-9",
                  dateAdded: "2026-04-07",
                  type: "youtube",
                  title: "Claude Just 10x'd How Fast You Build Agents",
                  url: "https://www.youtube.com/watch?v=udOqE90ckiI",
                  duration: "~18 min",
                  description: "The new Claude capability that dramatically speeds up agent development — Jack's full breakdown of what changed and how to use it."
                },
                {
                  id: "jr-4",
                  dateAdded: "2026-04-07",
                  type: "youtube",
                  title: "Gemma 4 + Ollama = FREE Claude Code",
                  url: "https://www.youtube.com/watch?v=eehsSUlXZN4",
                  duration: "~15 min",
                  description: "Run Claude Code-level workflows completely free and locally using Gemma 4 and Ollama."
                },
                {
                  id: "jr-5",
                  dateAdded: "2026-04-06",
                  type: "youtube",
                  title: "Claude Cowork just changed Marketing Forever (Tutorial)",
                  url: "https://www.youtube.com/watch?v=Vachtj-xjXI",
                  duration: "~20 min",
                  description: "Jack's daily Claude Cowork skills that run his 7-figure business — battle-tested and ready to copy."
                },
                {
                  id: "jr-6",
                  dateAdded: "2026-04-03",
                  type: "youtube",
                  title: "5 INSANE Claude Cowork Use Cases... steal them",
                  url: "https://www.youtube.com/watch?v=isjOj4QSaO8",
                  duration: "~18 min",
                  description: "Five wild real-world Claude Cowork use cases that most people aren't doing yet."
                },
                {
                  id: "jr-7",
                  dateAdded: "2026-04-01",
                  type: "youtube",
                  title: "Claude Code + NoteBookLM = Infinite Memory",
                  url: "https://www.youtube.com/watch?v=6t32nPxeJb8",
                  duration: "~16 min",
                  description: "Combine Claude Code with Google's NotebookLM to give your AI an unlimited, searchable knowledge base."
                },
                {
                  id: "jr-16",
                  dateAdded: "2026-03-13",
                  type: "youtube",
                  title: "AI Will Take Your Job, But The Next Phase Is Much WORSE",
                  url: "https://www.youtube.com/watch?v=xDbNvfiHy9M",
                  duration: "~16 min",
                  description: "Jack's frank analysis of where AI is heading and what it means for jobs, businesses, and those who adapt now."
                },
                {
                  id: "jr-17",
                  dateAdded: "2026-03-02",
                  type: "youtube",
                  title: "I Replaced n8n With Claude Code (AI Agents Got 10x Easier)",
                  url: "https://www.youtube.com/watch?v=Vmb1FtsgdjU",
                  duration: "~20 min",
                  description: "Why Jack abandoned n8n for Claude Code — and how agent building became dramatically simpler overnight."
                },
                {
                  id: "jr-18",
                  dateAdded: "2026-02-19",
                  type: "youtube",
                  title: "The NEW Way to Build AI Automations in 2026 (Antigravity)",
                  url: "https://www.youtube.com/watch?v=8MVRda34vjQ",
                  duration: "~18 min",
                  description: "Jack's deep dive into Antigravity as the new standard for AI automation in 2026 — why it beats the old tools."
                },
                {
                  id: "jr-19",
                  dateAdded: "2026-01-18",
                  type: "youtube",
                  title: "DON'T Build workflows, Build AI Systems (AntiGravity)",
                  url: "https://www.youtube.com/watch?v=2IBN7ArkAkU",
                  duration: "~22 min",
                  description: "Jack's paradigm shift: stop thinking in workflows, start building AI systems — the AntiGravity approach explained."
                }
              ]
            }
          ]
        },

        // ── Liam Ottley ───────────────────────────────────────
        {
          id: "liam-ottley-channel",
          name: "Liam Ottley",
          icon: "🚀",
          description: "NZ entrepreneur who invented the AI Automation Agency model. Teaches how to build, sell, and scale AI agent businesses — 290,000+ community members.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "liam-latest",
              name: "Latest Drops",
              timeline: "Jan–Apr 2026",
              resources: [
                {
                  id: "lo-9",
                  dateAdded: "2026-04-17",
                  type: "youtube",
                  title: "keeping up with AI is making you fall behind (just focus on this one thing)",
                  url: "https://www.youtube.com/watch?v=3LqntdbOWts",
                  duration: "~15 min",
                  description: "Liam's counter-intuitive take on AI content overload — why staying current on every release is hurting your results."
                },
                {
                  id: "lo-10",
                  dateAdded: "2026-04-13",
                  type: "youtube",
                  title: "how to sell $5,000 Claude Code AIOS to SMBs (full breakdown)",
                  url: "https://www.youtube.com/watch?v=yd9tr0xqg-Y",
                  duration: "~30 min",
                  description: "Liam's complete playbook for packaging Claude Code as an AI Operating System and selling it to small businesses for $5,000."
                },
                {
                  id: "lo-1",
                  dateAdded: "2026-03-22",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents in 2026: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=AYQtRqW1xX4",
                  duration: "3 hrs 5 min",
                  description: "Liam's flagship 2026 guide — understand AI agents, build your first one, and learn how to turn it into a real business."
                },
                {
                  id: "lo-2",
                  dateAdded: "2026-03-18",
                  type: "youtube",
                  title: "I Set Up a Claude Code Operating System for 6 Founders in 8 Hours",
                  url: "https://www.youtube.com/watch?v=OCs0WJ5VoOc",
                  duration: "~35 min",
                  description: "Liam installs his Claude Code OS for six business founders — watch the full implementation in real time."
                },
                {
                  id: "lo-3",
                  dateAdded: "2026-03-08",
                  type: "youtube",
                  title: "What Is an AI Operating System? (And Why Every Business Will Need One)",
                  url: "https://www.youtube.com/watch?v=DXcVT07bQ6g",
                  duration: "~25 min",
                  description: "The concept of an AI OS for your business explained — why it's the next major shift in how companies run."
                },
                {
                  id: "lo-4",
                  dateAdded: "2026-03-05",
                  type: "youtube",
                  title: "The Biggest Shift in Business Since the Internet Just Happened",
                  url: "https://www.youtube.com/watch?v=oC1h922cDoY",
                  duration: "~20 min",
                  description: "Liam's analysis of the current AI moment and what it means for entrepreneurs and business owners right now."
                },
                {
                  id: "lo-5",
                  dateAdded: "2026-03-02",
                  type: "youtube",
                  title: "Your Phone Can Now Run Your Entire Business. Here's How It Runs Mine.",
                  url: "https://www.youtube.com/watch?v=_He58Zi8NQg",
                  duration: "~30 min",
                  description: "How Liam runs his entire 7-figure business from his phone using AI automation and Claude Code."
                },
                {
                  id: "lo-11",
                  dateAdded: "2026-02-25",
                  type: "youtube",
                  title: "I've been called crazy before…",
                  url: "https://www.youtube.com/watch?v=ykRToEkWvpA",
                  duration: "~12 min",
                  description: "Liam's candid take on the bold predictions he's making about AI and business — and why he's doubling down on them."
                },
                {
                  id: "lo-12",
                  dateAdded: "2026-02-24",
                  type: "youtube",
                  title: "OpenClaw Will Never Actually Run Your Business… Try This Instead.",
                  url: "https://www.youtube.com/watch?v=qJg3CuqEvek",
                  duration: "~18 min",
                  description: "Why Liam thinks OpenClaw falls short for real business operations — and the alternative he recommends instead."
                },
                {
                  id: "lo-6",
                  dateAdded: "2026-02-23",
                  type: "youtube",
                  title: "My Plan to Automate 70% of my Business w/ Claude Code (in 30 Days)",
                  url: "https://www.youtube.com/watch?v=O_VBdNrX0PM",
                  duration: "~30 min",
                  description: "Liam's 30-day roadmap for automating the majority of his business operations using Claude Code."
                },
                {
                  id: "lo-8",
                  dateAdded: "2026-02-23",
                  type: "youtube",
                  title: "The Easiest Software Business to Start in 2026",
                  url: "https://www.youtube.com/watch?v=KAufsCas_F4",
                  duration: "~25 min",
                  description: "Liam breaks down the simplest path to a profitable software business with AI in 2026 — host a 24/7 agent on Hostinger and start selling immediately."
                },
                {
                  id: "lo-13",
                  dateAdded: "2026-02-21",
                  type: "youtube",
                  title: "AGI Is Here. It's Real. And It Changes Everything — Here's My Plan",
                  url: "https://www.youtube.com/watch?v=GyCNs5AymRw",
                  duration: "~20 min",
                  description: "Liam's response to the AGI moment — his personal plan for what to build, sell, and position for in 2026."
                },
                {
                  id: "lo-14",
                  dateAdded: "2026-02-18",
                  type: "youtube",
                  title: "3 years into the AI Agency model. Where it's all going…",
                  url: "https://www.youtube.com/watch?v=8JLyq_-3n58",
                  duration: "~25 min",
                  description: "Liam reflects on three years of building AI agencies — what's working, what's changing, and where the model is heading."
                },
                {
                  id: "lo-15",
                  dateAdded: "2026-02-13",
                  type: "youtube",
                  title: "AI Just Had It's iPhone Moment...(Here's How to WIN)",
                  url: "https://www.youtube.com/watch?v=qNtDxuLfFE8",
                  duration: "~18 min",
                  description: "The AI inflection point Liam says rivals the iPhone launch — and exactly how to position yourself to win in this moment."
                },
                {
                  id: "lo-7",
                  dateAdded: "2026-02-12",
                  type: "youtube",
                  title: "How to Automate Your Life & Work w/ Claude Code: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=2bsfQThGXxc",
                  duration: "~60 min",
                  description: "Complete beginner's guide to using Claude Code for life and business automation — start here if you're new."
                },
                {
                  id: "lo-16",
                  dateAdded: "2026-01-26",
                  type: "youtube",
                  title: "Clawdbot Will Make New Millionaires in 2026, here how (INSANE)",
                  url: "https://www.youtube.com/watch?v=PrWZe0VmnGg",
                  duration: "~20 min",
                  description: "Liam breaks down the ClawdBot opportunity and exactly how early movers can build life-changing businesses with it in 2026."
                },
                {
                  id: "lo-17",
                  dateAdded: "2026-01-24",
                  type: "youtube",
                  title: "Did Claude Just Replace Video Editors? (Remotion Breakdown)",
                  url: "https://www.youtube.com/watch?v=Tt-hpp87pd0",
                  duration: "~15 min",
                  description: "Liam tests Claude + Remotion for AI video editing — can it actually replace professional video editors?"
                },
                {
                  id: "lo-18",
                  dateAdded: "2026-01-14",
                  type: "youtube",
                  title: "How to Turn LinkedIn into a Personal Brand Lead Magnet with AI",
                  url: "https://www.youtube.com/watch?v=3iR3kHxCwfo",
                  duration: "~20 min",
                  description: "Liam's system for using AI to build a LinkedIn presence that generates consistent inbound leads for your agency."
                },
                {
                  id: "lo-19",
                  dateAdded: "2026-01-08",
                  type: "youtube",
                  title: "How to Automate Your Work with Claude Code (Beginner Breakdown)",
                  url: "https://www.youtube.com/watch?v=oC0mPBSmzfQ",
                  duration: "~25 min",
                  description: "Liam's beginner-friendly breakdown of how to start automating real work with Claude Code — the first video to watch if you're starting from zero."
                }
              ]
            }
          ]
        }

      ]
    },

    // =========================================================
    // PILLAR 3 — OFFICIAL CLAUDE COURSES
    // =========================================================
    {
      id: "official-courses",
      name: "Official Claude Courses",
      icon: "🎓",
      description: "Structured learning paths built by Anthropic — video lessons, quizzes, and certifications covering Claude usage, Claude Code, the API, and MCP.",
      color: "#10b981",
      subtracks: [

        // ── AI Fluency ────────────────────────────────────────
        {
          id: "ai-fluency",
          name: "AI Fluency",
          icon: "💡",
          description: "Master AI collaboration and learn to work effectively with Claude — courses for professionals, students, educators, and nonprofits.",
          estimatedTime: "3–4 hrs",
          phases: [
            {
              id: "fluency-phase-1",
              name: "Core Foundations",
              timeline: "Start here",
              resources: [
                {
                  id: "cl-101",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Claude 101",
                  url: "https://anthropic.skilljar.com/claude-101",
                  duration: "1 hr · 12 lectures",
                  description: "Anthropic's official intro to Claude.ai — learn how to use Claude effectively for real work. 12 lectures covering core features, prompting, and workflows."
                },
                {
                  id: "cl-ai-fluency-foundations",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "AI Fluency: Framework & Foundations",
                  url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
                  duration: "1.1 hrs · 14 lectures · 1 quiz",
                  description: "The definitive foundation course for working with AI — a structured framework and mindset shift for professionals entering the AI era."
                }
              ]
            },
            {
              id: "fluency-phase-2",
              name: "By Audience",
              timeline: "Pick your path",
              resources: [
                {
                  id: "cl-fluency-students",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "AI Fluency for Students",
                  url: "https://anthropic.skilljar.com/ai-fluency-for-students",
                  duration: "30 min · 5 lectures",
                  description: "How students can use Claude to research, write, study, and learn faster — without compromising academic integrity."
                },
                {
                  id: "cl-fluency-educators",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "AI Fluency for Educators",
                  url: "https://anthropic.skilljar.com/ai-fluency-for-educators",
                  duration: "24 min · 4 lectures",
                  description: "A course for teachers and professors on integrating AI into the classroom — lesson planning, assessments, and student engagement."
                },
                {
                  id: "cl-teaching-fluency",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Teaching AI Fluency",
                  url: "https://anthropic.skilljar.com/teaching-ai-fluency",
                  duration: "36 min · 7 lectures · 1 quiz",
                  description: "For educators who want to teach AI fluency to others — frameworks, curriculum design, and classroom strategies."
                },
                {
                  id: "cl-fluency-nonprofits",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "AI Fluency for Nonprofits",
                  url: "https://anthropic.skilljar.com/ai-fluency-for-nonprofits",
                  duration: "54 min · 9 lectures · 1 quiz",
                  description: "Purpose-built for nonprofit teams — use Claude for grant writing, communications, volunteer coordination, and impact reporting."
                }
              ]
            }
          ]
        },

        // ── Claude Code ───────────────────────────────────────
        {
          id: "claude-code-courses",
          name: "Claude Code",
          icon: "💻",
          description: "Official courses for developers using Claude Code — from first steps to autonomous subagents and custom skills.",
          estimatedTime: "4–5 hrs",
          phases: [
            {
              id: "cc-phase-1",
              name: "Getting Started",
              timeline: "Beginner",
              resources: [
                {
                  id: "cl-code-101",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Claude Code 101",
                  url: "https://anthropic.skilljar.com/claude-code-101",
                  duration: "1 hr · 12 lectures",
                  description: "Everything you need to start shipping with Claude Code — installation, core commands, project setup, and your first AI-assisted codebase."
                },
                {
                  id: "cl-code-in-action",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Claude Code in Action",
                  url: "https://anthropic.skilljar.com/claude-code-in-action",
                  duration: "1 hr · 15 lectures · 1 quiz",
                  description: "Real-world Claude Code workflows — build features, debug codebases, write tests, and automate dev tasks with Claude as your pair programmer."
                },
                {
                  id: "cl-cowork",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Introduction to Claude Cowork",
                  url: "https://anthropic.skilljar.com/introduction-to-claude-cowork",
                  duration: "Self-paced",
                  description: "Get up to speed with Claude Cowork — Anthropic's collaborative AI workspace for teams. Learn to work alongside Claude on shared projects."
                }
              ]
            },
            {
              id: "cc-phase-2",
              name: "Agents & Skills",
              timeline: "Advanced",
              resources: [
                {
                  id: "cl-subagents",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Introduction to Subagents",
                  url: "https://anthropic.skilljar.com/introduction-to-subagents",
                  duration: "20 min · 4 lectures",
                  description: "Learn how Claude Code spawns and coordinates subagents — parallel task execution, agent delegation, and multi-agent workflows."
                },
                {
                  id: "cl-agent-skills",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Introduction to Agent Skills",
                  url: "https://anthropic.skilljar.com/introduction-to-agent-skills",
                  duration: "30 min · 6 lectures",
                  description: "Build and deploy custom agent skills that extend Claude Code's capabilities — create reusable tools for your specific workflows."
                }
              ]
            }
          ]
        },

        // ── Claude Platform & MCP ─────────────────────────────
        {
          id: "claude-platform-courses",
          name: "Claude API & MCP",
          icon: "🔌",
          description: "Build production-grade AI apps with the Claude API, deploy on Amazon Bedrock or Google Vertex AI, and master the Model Context Protocol.",
          estimatedTime: "18+ hrs",
          phases: [
            {
              id: "platform-phase-1",
              name: "Claude API",
              timeline: "Core",
              resources: [
                {
                  id: "cl-api-course",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Building with the Claude API",
                  url: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
                  duration: "8.1 hrs · 84 lectures · 10 quizzes",
                  description: "The most comprehensive Claude API course from Anthropic — covers authentication, messages API, tool use, streaming, embeddings, and production best practices."
                },
                {
                  id: "cl-bedrock",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Claude with Amazon Bedrock",
                  url: "https://anthropic.skilljar.com/claude-in-amazon-bedrock",
                  duration: "8 hrs · 85 lectures · 10 quizzes",
                  description: "Deploy Claude on AWS using Amazon Bedrock — IAM, inference, fine-tuning, model evaluation, and enterprise-grade scaling on AWS infrastructure."
                },
                {
                  id: "cl-vertex",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Claude with Google Cloud's Vertex AI",
                  url: "https://anthropic.skilljar.com/claude-with-google-vertex",
                  duration: "8 hrs · 85 lectures · 10 quizzes",
                  description: "Run Claude on Google Cloud via Vertex AI — authentication, API integration, scaling, and building production AI apps on GCP."
                }
              ]
            },
            {
              id: "platform-phase-2",
              name: "Model Context Protocol",
              timeline: "Advanced",
              resources: [
                {
                  id: "cl-mcp-intro",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Introduction to Model Context Protocol",
                  url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
                  duration: "1 hr · 16 lectures · 1 quiz",
                  description: "Learn MCP from Anthropic — understand the protocol, build your first MCP server, connect Claude to external tools and data sources."
                },
                {
                  id: "cl-mcp-advanced",
                  dateAdded: "2026-04-13",
                  type: "course",
                  title: "Model Context Protocol: Advanced Topics",
                  url: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
                  duration: "1.1 hrs · 15 lectures · 2 quizzes",
                  description: "Go deeper into MCP — advanced server patterns, authentication, resource management, and deploying MCP servers to production."
                }
              ]
            }
          ]
        }

      ]
    },

    // =========================================================
    // PILLAR 4 — BY TOPIC
    // =========================================================
    {
      id: "by-topic",
      name: "By Topic",
      icon: "🎯",
      description: "Curated 2026 playlists by theme — every video pulled from the creators you already trust. No articles, no outdated tutorials.",
      color: "#ff2bd6",
      subtracks: [

        // ── Build AI Agents ───────────────────────────────────
        {
          id: "build-agents",
          name: "Build AI Agents",
          icon: "🤖",
          description: "Design, build, and sell AI agents that actually run businesses. Modern 2026 stack — Claude Code, managed agents, and real agency monetization.",
          estimatedTime: "5–6 hrs",
          phases: [
            {
              id: "agents-p1",
              name: "Foundations",
              timeline: "Start",
              resources: [
                {
                  id: "bt-agents-1",
                  dateAdded: "2026-03-22",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents in 2026: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=AYQtRqW1xX4",
                  duration: "3 hrs 5 min",
                  description: "Liam's flagship 2026 guide — the single most complete beginner-to-professional walkthrough for agents in 2026."
                },
                {
                  id: "bt-agents-2",
                  dateAdded: "2026-03-02",
                  type: "youtube",
                  title: "I Replaced n8n With Claude Code (AI Agents Got 10x Easier)",
                  url: "https://www.youtube.com/watch?v=Vmb1FtsgdjU",
                  duration: "~20 min",
                  description: "Jack Roberts on why Claude Code makes agent building dramatically simpler than traditional no-code tools."
                }
              ]
            },
            {
              id: "agents-p2",
              name: "Build & Deploy",
              timeline: "Core",
              resources: [
                {
                  id: "bt-agents-3",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "Claude Code just dropped Managed Agents... It Destroys No Code",
                  url: "https://www.youtube.com/watch?v=eQ_RxS_fh64",
                  duration: "~20 min",
                  description: "Jack's breakdown of Claude Code's managed agents — what they do and why they change agent building."
                },
                {
                  id: "bt-agents-4",
                  dateAdded: "2026-04-14",
                  type: "youtube",
                  title: "Claude Code Just Dropped Routines. 24/7 Agents.",
                  url: "https://www.youtube.com/watch?v=ehg4fhydTgs",
                  duration: "~15 min",
                  description: "Nate Herk shows how Routines let your agents run on schedules — true 24/7 automation is now trivial."
                },
                {
                  id: "bt-agents-5",
                  dateAdded: "2026-04-09",
                  type: "youtube",
                  title: "Claude Code just changed Memory Forever (Tutorial)",
                  url: "https://www.youtube.com/watch?v=TXcr0x9SIXA",
                  duration: "~18 min",
                  description: "Jack's full tutorial on giving Claude Code persistent memory via Pinecone — essential for agents that need to remember."
                }
              ]
            },
            {
              id: "agents-p3",
              name: "Scale & Sell",
              timeline: "Monetize",
              resources: [
                {
                  id: "bt-agents-6",
                  dateAdded: "2026-02-23",
                  type: "youtube",
                  title: "My Plan to Automate 70% of my Business w/ Claude Code (in 30 Days)",
                  url: "https://www.youtube.com/watch?v=O_VBdNrX0PM",
                  duration: "~30 min",
                  description: "Liam's 30-day playbook for automating most of a real business — the blueprint to copy."
                },
                {
                  id: "bt-agents-7",
                  dateAdded: "2026-04-13",
                  type: "youtube",
                  title: "How to Sell $5,000 Claude Code AIOS to SMBs (Full Breakdown)",
                  url: "https://www.youtube.com/watch?v=yd9tr0xqg-Y",
                  duration: "~30 min",
                  description: "Liam's complete sales playbook — package Claude Code as an AI Operating System and sell it to small businesses for $5,000 a pop."
                }
              ]
            }
          ]
        },

        // ── Build with Claude Code ────────────────────────────
        {
          id: "build-code",
          name: "Build with Claude Code",
          icon: "💻",
          description: "Ship real websites, apps, and tools with Claude Code as your pair programmer. From first prompt to $10k sites.",
          estimatedTime: "6–7 hrs",
          phases: [
            {
              id: "code-p1",
              name: "Fundamentals",
              timeline: "Start",
              resources: [
                {
                  id: "bt-code-1",
                  dateAdded: "2026-01-16",
                  type: "youtube",
                  title: "Build ANYTHING with Claude Code & n8n (Beginner's Guide)",
                  url: "https://www.youtube.com/watch?v=OCO3aq3G0mk",
                  duration: "~30 min",
                  description: "Nate Herk's complete beginner workflow for combining Claude Code with n8n to build anything."
                },
                {
                  id: "bt-code-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "CLAUDE CODE FULL COURSE 4 HOURS: Build & Sell (2026)",
                  url: "https://www.youtube.com/watch?v=QoQBzR1NIqI",
                  duration: "4 hrs",
                  description: "Nick Saraev's comprehensive Claude Code course — build real projects from scratch and learn how to sell AI development services."
                }
              ]
            },
            {
              id: "code-p2",
              name: "Design & Ship Websites",
              timeline: "Apply",
              resources: [
                {
                  id: "bt-code-3",
                  dateAdded: "2026-04-11",
                  type: "youtube",
                  title: "Seedance 2.0 + Claude Code Creates $10k Websites in Minutes",
                  url: "https://www.youtube.com/watch?v=NvxiSG34mPU",
                  duration: "~15 min",
                  description: "Nate Herk combines Seedance 2.0 with Claude Code to build premium websites at record speed."
                },
                {
                  id: "bt-code-4",
                  dateAdded: "2026-04-11",
                  type: "youtube",
                  title: "Claude Code just changed Website Design Forever (Relume)",
                  url: "https://www.youtube.com/watch?v=zTuV3chQCus",
                  duration: "~17 min",
                  description: "Jack Roberts' tutorial: Claude Code + Relume for instant professional website design — the workflow changing agency work."
                },
                {
                  id: "bt-code-5",
                  dateAdded: "2026-04-14",
                  type: "youtube",
                  title: "Claude Code Design just became UNSTOPPABLE",
                  url: "https://www.youtube.com/watch?v=z9CwM-DAe5Q",
                  duration: "~15 min",
                  description: "The Claude Code + Design combination Jack calls the most powerful creative tool he's ever used."
                }
              ]
            },
            {
              id: "code-p3",
              name: "Optimize & Automate",
              timeline: "Advanced",
              resources: [
                {
                  id: "bt-code-6",
                  dateAdded: "2026-04-12",
                  type: "youtube",
                  title: "This One Plugin Just 10x'd Claude Code",
                  url: "https://www.youtube.com/watch?v=4XqVR6xI6Kw",
                  duration: "~14 min",
                  description: "The single Claude Code plugin that dramatically multiplies what you can build — Nate's full breakdown."
                },
                {
                  id: "bt-code-7",
                  dateAdded: "2026-04-04",
                  type: "youtube",
                  title: "How to Use Claude Code for 99% CHEAPER",
                  url: "https://www.youtube.com/watch?v=F3nYY3N2wgw",
                  duration: "~18 min",
                  description: "Nate's token-management tricks that cut your Claude Code costs dramatically without sacrificing quality."
                }
              ]
            }
          ]
        },

        // ── Create Content with AI ────────────────────────────
        {
          id: "create-content",
          name: "Create Content with AI",
          icon: "🎨",
          description: "Generate stunning images and cinematic video with the best 2026 AI tools — Nano Banana, Higgsfield, and Claude-powered editing.",
          estimatedTime: "3–4 hrs",
          phases: [
            {
              id: "content-p1",
              name: "Images",
              timeline: "Week 1",
              resources: [
                {
                  id: "bt-content-1",
                  dateAdded: "2025-08-20",
                  type: "youtube",
                  title: "This will replace Photoshop... And it's FREE!",
                  url: "https://www.youtube.com/watch?v=9eYKbppNbk8",
                  duration: "17 min",
                  description: "Matt Wolfe's hands-on intro to Nano Banana (Google Gemini Image) — the free AI image editor that rivals Photoshop."
                },
                {
                  id: "bt-content-2",
                  dateAdded: "2025-10-26",
                  type: "youtube",
                  title: "50+ INSANE Ways To Use Nano Banana (For FREE)",
                  url: "https://www.youtube.com/watch?v=exWEkRHmhKU",
                  duration: "27 min",
                  description: "Matt Wolfe demonstrates 50+ creative uses — headshots, magazine covers, character consistency, thumbnails, and more, all free."
                },
                {
                  id: "bt-content-3",
                  dateAdded: "2025-12-16",
                  type: "youtube",
                  title: "Higgsfield AI Ultimate Tutorial (2026)",
                  url: "https://www.youtube.com/watch?v=cksEVv1tArI",
                  duration: "~30 min",
                  description: "Complete 2026 guide to Higgsfield — 50+ models (Nano Banana 2, Kling, Veo, Sora), Soul ID character consistency, and Cinema Studio."
                }
              ]
            },
            {
              id: "content-p2",
              name: "Video",
              timeline: "Week 2",
              resources: [
                {
                  id: "bt-content-4",
                  dateAdded: "2026-03-12",
                  type: "youtube",
                  title: "AI Short Film: Full Process from Idea to Final Cut",
                  url: "https://www.youtube.com/watch?v=tW40b122Rbs",
                  duration: "~20 min",
                  description: "Higgsfield's official walkthrough of producing a complete cinematic AI short film — character building, scene generation, Soul ID consistency, final cut."
                },
                {
                  id: "bt-content-5",
                  dateAdded: "2026-04-15",
                  type: "youtube",
                  title: "Claude + HeyGen Just Changed Content Creation Forever",
                  url: "https://www.youtube.com/watch?v=EbJu9T30nfI",
                  duration: "~16 min",
                  description: "Nate Herk combines Claude with HeyGen's AI video platform for a fully automated content creation pipeline."
                },
                {
                  id: "bt-content-6",
                  dateAdded: "2026-04-20",
                  type: "youtube",
                  title: "Claude Just Destroyed Every Video Editing Tool",
                  url: "https://www.youtube.com/watch?v=ZNbgOhxhzXg",
                  duration: "~15 min",
                  description: "Motion graphics in minutes with natural language — Nate's breakdown of Claude Design and Claude Code with Hyperframes for video editing."
                }
              ]
            }
          ]
        }

      ]
    }

  ]
};
