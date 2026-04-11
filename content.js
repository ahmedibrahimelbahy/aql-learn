// ============================================================
// AQL Learn — Content Database
// Edit this file to add, update, or remove learning resources.
//
// HOW TO ADD A RESOURCE:
//   1. Find the correct pillar → subtrack → phase
//   2. Add an object to the "resources" array
//   3. For YouTube: set type:"youtube" and paste the full URL
//   4. For articles: set type:"article" and paste the URL
//   5. Every resource needs a unique "id" string
//
// STILL MISSING: Resources marked with "ADD_VIDEO_HERE" need
// real YouTube URLs — search for the topic and paste the link.
// ============================================================

const CONTENT = {
  pillars: [

    // =========================================================
    // PILLAR 1 — AUTOMATION
    // =========================================================
    {
      id: "automation",
      name: "Automation",
      icon: "⚡",
      description: "Build powerful automated workflows and AI agents that work for you — using n8n and modern agent frameworks.",
      color: "#7c3aed",
      subtracks: [
        {
          id: "n8n",
          name: "n8n Workflow Automation",
          icon: "🔄",
          description: "Master n8n to build no-code automation workflows that connect apps, trigger actions, and integrate AI into your business processes.",
          estimatedTime: "5 weeks",
          phases: [
            {
              id: "n8n-phase-1",
              name: "n8n Fundamentals",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "n8n-1-1",
                  type: "youtube",
                  title: "n8n Masterclass: Build AI Agents & Automate Workflows (Beginner to Pro)",
                  url: "https://www.youtube.com/watch?v=ZHH3sr234zY",
                  duration: "92 min",
                  description: "The complete n8n course by Nate Herk — from zero to building real AI-powered automation workflows."
                },
                {
                  id: "n8n-1-2",
                  type: "youtube",
                  title: "Understanding APIs in n8n (as a beginner)",
                  url: "https://www.youtube.com/watch?v=ju9xk_QX990",
                  duration: "20 min",
                  description: "Learn how APIs work inside n8n so you can connect any tool or service to your workflows."
                },
                {
                  id: "n8n-1-3",
                  type: "article",
                  title: "n8n Official Documentation",
                  url: "https://docs.n8n.io",
                  description: "Official n8n docs — nodes, credentials, expressions, and self-hosting guide."
                }
              ]
            },
            {
              id: "n8n-phase-2",
              name: "Connecting Apps & AI",
              timeline: "Week 3–4",
              resources: [
                {
                  id: "n8n-2-1",
                  type: "youtube",
                  title: "I Tested Claude's New Managed Agents... What You Need To Know",
                  url: "https://www.youtube.com/watch?v=27Y44JYXZJ8",
                  duration: "18 min",
                  description: "Nate Herk tests Claude's managed agents inside n8n — what works, what doesn't, and how to use them."
                },
                {
                  id: "n8n-2-2",
                  type: "youtube",
                  title: "I Built the Ultimate Team of AI Agents in n8n With No Code",
                  url: "https://www.youtube.com/watch?v=9FuNtfsnRNo",
                  duration: "35 min",
                  description: "Build a multi-agent team inside n8n — email, calendar, content, and contact agents working together."
                },
                {
                  id: "n8n-2-3",
                  type: "youtube",
                  title: "I Built an AI Agent that Automated my Inbox with n8n (No Code)",
                  url: "https://www.youtube.com/watch?v=JUx2ZfNfD64",
                  duration: "28 min",
                  description: "Full build walkthrough: an AI inbox manager that reads, categorizes, and replies to emails automatically."
                },
                {
                  id: "n8n-2-4",
                  type: "article",
                  title: "n8n Community Templates Library",
                  url: "https://n8n.io/workflows",
                  description: "500+ ready-made workflow templates you can import and customize immediately."
                }
              ]
            },
            {
              id: "n8n-phase-3",
              name: "Real-World Projects",
              timeline: "Week 5",
              resources: [
                {
                  id: "n8n-3-1",
                  type: "youtube",
                  title: "I Built a Personal Assistant AI Agent with No Code in n8n",
                  url: "https://www.youtube.com/watch?v=omw1MEvMCo0",
                  duration: "40 min",
                  description: "Build a personal AI assistant in n8n that handles tasks, research, and scheduling — no code needed."
                },
                {
                  id: "n8n-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: n8n lead generation or sales workflow project",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a Nick Saraev or Nate Herk video on building a lead gen or sales automation project in n8n."
                },
                {
                  id: "n8n-3-3",
                  type: "article",
                  title: "n8n Self-Hosting Guide",
                  url: "https://docs.n8n.io/hosting/",
                  description: "Host your own n8n instance for unlimited workflows and full data ownership."
                }
              ]
            }
          ]
        },
        {
          id: "ai-agents",
          name: "AI Agents",
          icon: "🤖",
          description: "Build autonomous AI agents that handle lead generation, customer support, research, social media, and internal ops without human input.",
          estimatedTime: "7 weeks",
          phases: [
            {
              id: "agent-phase-1",
              name: "Agent Fundamentals",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "agent-1-1",
                  type: "youtube",
                  title: "Everything I Learned About AI Agents in 2024 in 19 Minutes",
                  url: "https://www.youtube.com/watch?v=pYelCIqkm5Y",
                  duration: "19 min",
                  description: "Nate Herk distills everything about AI agents — what they are, how they reason, and how to start building them."
                },
                {
                  id: "agent-1-2",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents in 2026: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=AYQtRqW1xX4",
                  duration: "45 min",
                  description: "Liam Ottley's complete guide — understand agents, build your first one, and learn how to turn it into a business."
                },
                {
                  id: "agent-1-3",
                  type: "article",
                  title: "LangChain Agents — Official Docs",
                  url: "https://python.langchain.com/docs/modules/agents/",
                  description: "The go-to framework for building AI agents — concepts, tools, and memory explained."
                }
              ]
            },
            {
              id: "agent-phase-2",
              name: "Lead Gen & Outreach Agents",
              timeline: "Week 3",
              resources: [
                {
                  id: "agent-2-1",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=w0H1-b044KY",
                  duration: "1 hr",
                  description: "Liam Ottley builds a lead qualification agent, sales co-pilot, and outreach system step by step."
                },
                {
                  id: "agent-2-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI lead generation agent build",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building an AI agent that finds prospects and drafts personalized outreach automatically."
                },
                {
                  id: "agent-2-3",
                  type: "article",
                  title: "Clay — AI-Powered Lead Enrichment",
                  url: "https://www.clay.com",
                  description: "The leading tool for AI lead enrichment and automated outreach workflows."
                }
              ]
            },
            {
              id: "agent-phase-3",
              name: "Customer Support Agents",
              timeline: "Week 4",
              resources: [
                {
                  id: "agent-3-1",
                  type: "youtube",
                  title: "How To Use AI Agents To Do ALL Your Work — Full CrewAI Course for Beginners",
                  url: "https://www.youtube.com/watch?v=ONKOXwucLvE",
                  duration: "2 hrs",
                  description: "Full CrewAI course — build multi-agent teams that handle customer support, research, and complex tasks."
                },
                {
                  id: "agent-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI customer support chatbot build",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on training an AI chatbot on your business data to handle support tickets automatically."
                },
                {
                  id: "agent-3-3",
                  type: "article",
                  title: "Voiceflow — Build No-Code AI Chatbots",
                  url: "https://www.voiceflow.com",
                  description: "No-code platform to design and deploy AI support agents on any channel."
                }
              ]
            },
            {
              id: "agent-phase-4",
              name: "Research & Data Agents",
              timeline: "Week 5",
              resources: [
                {
                  id: "agent-4-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI web research agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building an agent that browses the web, collects data, and writes structured reports."
                },
                {
                  id: "agent-4-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI data extraction workflow",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on automatically extracting and cleaning data from websites and documents with AI."
                },
                {
                  id: "agent-4-3",
                  type: "article",
                  title: "Perplexity API — Real-Time Research for Agents",
                  url: "https://docs.perplexity.ai",
                  description: "Use Perplexity's API to give your agent up-to-date web search capabilities."
                }
              ]
            },
            {
              id: "agent-phase-5",
              name: "Social Media Agents",
              timeline: "Week 6",
              resources: [
                {
                  id: "agent-5-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI social media content agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on an agent that monitors trends, drafts posts, and schedules content automatically."
                },
                {
                  id: "agent-5-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Auto-repurpose content across platforms",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on turning one piece of content into posts for Instagram, LinkedIn, X, and TikTok automatically."
                },
                {
                  id: "agent-5-3",
                  type: "article",
                  title: "Buffer API — Programmatic Social Scheduling",
                  url: "https://buffer.com/developers/api",
                  description: "Use Buffer's API to connect your agent to social media scheduling."
                }
              ]
            },
            {
              id: "agent-phase-6",
              name: "Internal Ops Agents",
              timeline: "Week 7",
              resources: [
                {
                  id: "agent-6-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI meeting summarizer agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on automatically transcribing meetings and extracting action items with AI."
                },
                {
                  id: "agent-6-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Internal knowledge base agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building an agent that answers team questions from your company's internal documents."
                },
                {
                  id: "agent-6-3",
                  type: "article",
                  title: "Notion AI Integration Guide",
                  url: "https://www.notion.so/help/guides/notion-ai-faq",
                  description: "Use Notion AI to automate summaries, task creation, and knowledge management."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // PILLAR 2 — CONTENT CREATION
    // =========================================================
    {
      id: "content-creation",
      name: "Content Creation",
      icon: "✨",
      description: "Create content with AI — marketing copy and campaigns, stunning visuals, and full AI-generated videos.",
      color: "#ec4899",
      subtracks: [
        {
          id: "marketing",
          name: "AI Marketing",
          icon: "📣",
          description: "Use AI to write better copy, run smarter campaigns, generate content at scale, and analyze your results.",
          estimatedTime: "6 weeks",
          phases: [
            {
              id: "mkt-phase-1",
              name: "AI Fundamentals for Marketers",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "mkt-1-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: ChatGPT for marketing beginners",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a beginner guide on using ChatGPT or Claude to write marketing copy, emails, and social media posts."
                },
                {
                  id: "mkt-1-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Best AI marketing tools overview",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find an overview of the top AI marketing tools — Jasper, Copy.ai, and others."
                },
                {
                  id: "mkt-1-3",
                  type: "article",
                  title: "The Complete Guide to AI in Marketing",
                  url: "https://blog.hubspot.com/marketing/ai-marketing",
                  description: "HubSpot's comprehensive guide covering AI marketing strategies and tools."
                },
                {
                  id: "mkt-1-4",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI copywriting for ads and landing pages",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a practical walkthrough of AI-assisted copywriting for ads, landing pages, and emails."
                }
              ]
            },
            {
              id: "mkt-phase-2",
              name: "Content at Scale",
              timeline: "Week 3–4",
              resources: [
                {
                  id: "mkt-2-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Generate a month of content with AI",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building a content pipeline that produces blogs, captions, and newsletters automatically."
                },
                {
                  id: "mkt-2-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI SEO content strategy",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on using AI tools to research keywords, write optimized content, and build links."
                },
                {
                  id: "mkt-2-3",
                  type: "article",
                  title: "Best AI Marketing Automation Platforms 2024",
                  url: "https://zapier.com/blog/ai-marketing-automation/",
                  description: "Comparison of top marketing automation platforms with AI features."
                }
              ]
            },
            {
              id: "mkt-phase-3",
              name: "Campaigns & Analytics",
              timeline: "Week 5–6",
              resources: [
                {
                  id: "mkt-3-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI-powered ad campaigns",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using AI to create, optimize, and scale advertising campaigns."
                },
                {
                  id: "mkt-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Google Analytics + AI insights",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on combining GA4 with AI tools to extract actionable marketing insights."
                },
                {
                  id: "mkt-3-3",
                  type: "article",
                  title: "How to Use AI for A/B Testing at Scale",
                  url: "https://www.optimizely.com/optimization-glossary/ab-testing/",
                  description: "Leverage AI to run faster, smarter marketing experiments."
                }
              ]
            }
          ]
        },
        {
          id: "image-gen",
          name: "Image Generation",
          icon: "🎨",
          description: "Create stunning visuals with AI — master Midjourney, DALL-E, Stable Diffusion, and Flux for marketing and branding.",
          estimatedTime: "5 weeks",
          phases: [
            {
              id: "img-phase-1",
              name: "Prompt Engineering Basics",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "img-1-1",
                  type: "youtube",
                  title: "Midjourney AI Tutorial: How to Use Midjourney to Create Stunning Art",
                  url: "https://www.youtube.com/watch?v=9WVZbitXbck",
                  duration: "25 min",
                  description: "Kevin Stratvert's complete Midjourney guide — account setup, prompting, parameters, and advanced techniques."
                },
                {
                  id: "img-1-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI image prompt engineering deep dive",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on the principles behind writing prompts that consistently generate great images."
                },
                {
                  id: "img-1-3",
                  type: "article",
                  title: "Midjourney Official Prompt Guide",
                  url: "https://docs.midjourney.com/docs/prompts",
                  description: "Official Midjourney prompting documentation with examples and parameters."
                }
              ]
            },
            {
              id: "img-phase-2",
              name: "Tool Deep-Dives",
              timeline: "Week 3–4",
              resources: [
                {
                  id: "img-2-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: DALL-E 3 complete tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using DALL-E 3 inside ChatGPT for marketing and content creation."
                },
                {
                  id: "img-2-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Stable Diffusion beginner guide",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on setting up and using Stable Diffusion locally for unlimited free image generation."
                },
                {
                  id: "img-2-3",
                  type: "youtube",
                  title: "Flux 1.1 UPDATE: Create CONSISTENT AI Influencers With BEST Image Generator",
                  url: "https://www.youtube.com/watch?v=CGPCjazydK0",
                  duration: "20 min",
                  description: "Learn Flux 1.1 — currently the most photorealistic AI image generator — and how to create consistent characters."
                },
                {
                  id: "img-2-4",
                  type: "article",
                  title: "Midjourney vs DALL-E vs Stable Diffusion: Full Comparison",
                  url: "https://www.tomsguide.com/ai/ai-image-generation/midjourney-vs-dall-e-3-vs-stable-diffusion",
                  description: "Detailed side-by-side comparison of the top image generation tools."
                }
              ]
            },
            {
              id: "img-phase-3",
              name: "Advanced Workflows",
              timeline: "Week 5",
              resources: [
                {
                  id: "img-3-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: ComfyUI advanced image workflows",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building complex image generation pipelines using ComfyUI's node system."
                },
                {
                  id: "img-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Batch image generation for teams",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on scaling your visual production workflow for consistent brand output."
                },
                {
                  id: "img-3-3",
                  type: "article",
                  title: "AI Image Generation for Commercial Use: Legal Guide",
                  url: "https://creativecommons.org/2023/08/18/cc-and-generative-ai/",
                  description: "Understand copyright and licensing when using AI-generated images commercially."
                }
              ]
            }
          ]
        },
        {
          id: "video-gen",
          name: "Video Generation",
          icon: "🎬",
          description: "Create AI-generated videos from text and images — master Sora, Runway, Kling, Pika, and more.",
          estimatedTime: "5 weeks",
          phases: [
            {
              id: "vid-phase-1",
              name: "AI Video Fundamentals",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "vid-1-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI video generation overview 2024",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find an overview of all major AI video tools and what each one is best at."
                },
                {
                  id: "vid-1-2",
                  type: "youtube",
                  title: "Runway AI — Tutorial for Beginners [FULL GUIDE]",
                  url: "https://www.youtube.com/watch?v=c38vtLw1nSk",
                  duration: "13 min",
                  description: "Complete beginner's guide to Runway — the leading AI video generation platform used by professionals."
                },
                {
                  id: "vid-1-3",
                  type: "article",
                  title: "Best AI Video Generators: 2024 Comparison",
                  url: "https://www.tomsguide.com/ai/ai-video-generators",
                  description: "Side-by-side comparison of Sora, Runway, Kling, Pika, and more."
                }
              ]
            },
            {
              id: "vid-phase-2",
              name: "Tool Deep-Dives",
              timeline: "Week 3–4",
              resources: [
                {
                  id: "vid-2-1",
                  type: "youtube",
                  title: "Create Cinematic AI Videos with Runway Gen-3",
                  url: "https://www.youtube.com/watch?v=gyCg0yv3Njw",
                  duration: "30 min",
                  description: "Curious Refuge shows how to get cinematic quality from Runway Gen-3 with advanced prompting techniques."
                },
                {
                  id: "vid-2-2",
                  type: "youtube",
                  title: "Generate Video from ANY Photo! │KLING AI Tutorial",
                  url: "https://www.youtube.com/watch?v=_CyBXbuDth0",
                  duration: "20 min",
                  description: "Full Kling AI tutorial — image-to-video, text-to-video, tips for getting the best results."
                },
                {
                  id: "vid-2-3",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Pika AI video tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using Pika to generate and edit short-form AI video content."
                },
                {
                  id: "vid-2-4",
                  type: "youtube",
                  title: "Midjourney + Runway Gen 3 Turbo Full Course — Create Lifelike Cinematic AI Videos",
                  url: "https://www.youtube.com/watch?v=qQVDTX4qDbM",
                  duration: "1 hr",
                  description: "Combine Midjourney images with Runway Gen-3 to produce cinematic AI videos from scratch."
                }
              ]
            },
            {
              id: "vid-phase-3",
              name: "Production Workflows",
              timeline: "Week 5",
              resources: [
                {
                  id: "vid-3-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Full AI video production pipeline",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial combining image gen + video gen + voiceover AI to produce complete videos."
                },
                {
                  id: "vid-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI video for social media (Reels, TikTok, Shorts)",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on creating scroll-stopping short-form video content using AI tools."
                },
                {
                  id: "vid-3-3",
                  type: "article",
                  title: "AI Video Copyright & Platform Policies Guide",
                  url: "https://creativecommons.org/2023/08/18/cc-and-generative-ai/",
                  description: "What you need to know about rights and monetization for AI-generated videos."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // PILLAR 3 — DEVELOPMENT
    // =========================================================
    {
      id: "development",
      name: "Development",
      icon: "💻",
      description: "Build websites and applications faster using AI as your coding partner and creative collaborator.",
      color: "#3b82f6",
      subtracks: [
        {
          id: "web-dev",
          name: "Web Development",
          icon: "🌐",
          description: "Build modern websites and web apps using AI-powered tools like Cursor, Claude Code, and Bolt.new.",
          estimatedTime: "8 weeks",
          phases: [
            {
              id: "web-phase-1",
              name: "AI-Assisted Coding Fundamentals",
              timeline: "Week 1–3",
              resources: [
                {
                  id: "web-1-1",
                  type: "youtube",
                  title: "Cursor Tutorial for Beginners (AI Code Editor)",
                  url: "https://www.youtube.com/watch?v=ocMOZpuAMw4",
                  duration: "30 min",
                  description: "Tech With Tim's complete Cursor tutorial — set up the AI code editor and start building faster immediately."
                },
                {
                  id: "web-1-2",
                  type: "youtube",
                  title: "Claude Code + Karpathy's Obsidian = New Meta",
                  url: "https://www.youtube.com/watch?v=eglVxLaWRUU",
                  duration: "15 min",
                  description: "Jack Roberts shows a powerful workflow combining Claude Code with Karpathy's Obsidian system."
                },
                {
                  id: "web-1-3",
                  type: "youtube",
                  title: "How To Build Web Apps using V0 + Claude AI + Cursor AI",
                  url: "https://www.youtube.com/watch?v=grc0YSEdUQY",
                  duration: "40 min",
                  description: "Combine V0, Claude, and Cursor to build full web apps — the modern AI dev stack in action."
                },
                {
                  id: "web-1-4",
                  type: "article",
                  title: "MDN: Getting Started with the Web",
                  url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
                  description: "Mozilla's beginner guide to HTML & CSS — required foundations before going deeper."
                }
              ]
            },
            {
              id: "web-phase-2",
              name: "Full-Stack with Claude",
              timeline: "Week 4–6",
              resources: [
                {
                  id: "web-2-1",
                  type: "youtube",
                  title: "CLAUDE CODE FULL COURSE 4 HOURS: Build & Sell (2026)",
                  url: "https://www.youtube.com/watch?v=QoQBzR1NIqI",
                  duration: "4 hrs",
                  description: "Nick Saraev's comprehensive Claude Code course — build real projects and learn how to sell AI development services."
                },
                {
                  id: "web-2-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Supabase + AI build a SaaS",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using Supabase for backend and AI for the frontend logic and UI generation."
                },
                {
                  id: "web-2-3",
                  type: "article",
                  title: "Bolt.new — AI Full-Stack Dev in the Browser",
                  url: "https://bolt.new",
                  description: "Build full-stack apps directly in the browser with AI — no setup required."
                }
              ]
            },
            {
              id: "web-phase-3",
              name: "Deployment & Scaling",
              timeline: "Week 7–8",
              resources: [
                {
                  id: "web-3-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Deploy to Vercel tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on deploying your web app to Vercel with a custom domain and automatic CI/CD."
                },
                {
                  id: "web-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Web performance optimization with AI",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using AI tools to analyze and fix performance bottlenecks in your site."
                },
                {
                  id: "web-3-3",
                  type: "article",
                  title: "Vercel Documentation",
                  url: "https://vercel.com/docs",
                  description: "Official Vercel docs — deployment, environment variables, domains, and scaling."
                }
              ]
            }
          ]
        },
        {
          id: "app-dev",
          name: "App Development",
          icon: "📱",
          description: "Build mobile and desktop applications with AI tools, no-code platforms, and AI APIs.",
          estimatedTime: "8 weeks",
          phases: [
            {
              id: "app-phase-1",
              name: "No-Code AI Tools",
              timeline: "Week 1–2",
              resources: [
                {
                  id: "app-1-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Bubble.io full tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a complete Bubble.io tutorial for building apps without writing code."
                },
                {
                  id: "app-1-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: FlutterFlow no-code mobile app",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on creating native iOS and Android apps visually with FlutterFlow."
                },
                {
                  id: "app-1-3",
                  type: "article",
                  title: "Best No-Code App Builders in 2024",
                  url: "https://www.nocode.tech/tools/app-builder",
                  description: "Comprehensive comparison of no-code app development platforms and their AI features."
                }
              ]
            },
            {
              id: "app-phase-2",
              name: "Building with Claude & AI APIs",
              timeline: "Week 3–6",
              resources: [
                {
                  id: "app-2-1",
                  type: "youtube",
                  title: "كورس تعلم كلود من الصفر || Claude 101 in Arabic",
                  url: "https://www.youtube.com/watch?v=oz44Wp22iCU",
                  duration: "Full course",
                  description: "Ghareeb Elshaikh's complete Claude 101 course in Arabic — learn Claude from scratch and start building with it."
                },
                {
                  id: "app-2-2",
                  type: "youtube",
                  title: "EVERYTHING You Need to Know About Claude in 2024",
                  url: "https://www.youtube.com/watch?v=XKX1C65W1EE",
                  duration: "30 min",
                  description: "Full breakdown of Claude's capabilities — what makes it different from ChatGPT and how to use it effectively."
                },
                {
                  id: "app-2-3",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Build an app with Claude API",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a step-by-step guide to integrating Anthropic's Claude API into a real application."
                },
                {
                  id: "app-2-4",
                  type: "article",
                  title: "Anthropic API Documentation",
                  url: "https://docs.anthropic.com",
                  description: "Official Claude API docs — models, pricing, parameters, and code examples."
                }
              ]
            },
            {
              id: "app-phase-3",
              name: "Publishing & Monetization",
              timeline: "Week 7–8",
              resources: [
                {
                  id: "app-3-1",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Submit app to App Store",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a walkthrough of the Apple App Store submission process."
                },
                {
                  id: "app-3-2",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Monetize your AI app",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on how to price and monetize AI-powered apps effectively."
                },
                {
                  id: "app-3-3",
                  type: "article",
                  title: "Stripe Payments Integration Guide",
                  url: "https://stripe.com/docs/payments/quickstart",
                  description: "Add subscription and one-time payments to your app with Stripe."
                }
              ]
            }
          ]
        }
      ]
    }

  ]
};
