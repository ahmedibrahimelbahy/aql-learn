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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "n8n Masterclass: Build AI Agents & Automate Workflows (Beginner to Pro)",
                  url: "https://www.youtube.com/watch?v=ZHH3sr234zY",
                  duration: "92 min",
                  description: "The complete n8n course by Nate Herk — from zero to building real AI-powered automation workflows."
                },
                {
                  id: "n8n-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Understanding APIs in n8n (as a beginner)",
                  url: "https://www.youtube.com/watch?v=ju9xk_QX990",
                  duration: "20 min",
                  description: "Learn how APIs work inside n8n so you can connect any tool or service to your workflows."
                },
                {
                  id: "n8n-1-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "I Tested Claude's New Managed Agents... What You Need To Know",
                  url: "https://www.youtube.com/watch?v=27Y44JYXZJ8",
                  duration: "18 min",
                  description: "Nate Herk tests Claude's managed agents inside n8n — what works, what doesn't, and how to use them."
                },
                {
                  id: "n8n-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "I Built the Ultimate Team of AI Agents in n8n With No Code",
                  url: "https://www.youtube.com/watch?v=9FuNtfsnRNo",
                  duration: "35 min",
                  description: "Build a multi-agent team inside n8n — email, calendar, content, and contact agents working together."
                },
                {
                  id: "n8n-2-3",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "I Built an AI Agent that Automated my Inbox with n8n (No Code)",
                  url: "https://www.youtube.com/watch?v=JUx2ZfNfD64",
                  duration: "28 min",
                  description: "Full build walkthrough: an AI inbox manager that reads, categorizes, and replies to emails automatically."
                },
                {
                  id: "n8n-2-4",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "I Built a Personal Assistant AI Agent with No Code in n8n",
                  url: "https://www.youtube.com/watch?v=omw1MEvMCo0",
                  duration: "40 min",
                  description: "Build a personal AI assistant in n8n that handles tasks, research, and scheduling — no code needed."
                },
                {
                  id: "n8n-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "N8N Complete Guide (AI Agents + Workflow Automation)",
                  url: "https://www.youtube.com/watch?v=r6uX3btBgvw",
                  duration: "3 hrs",
                  description: "Nick Saraev's complete n8n guide — covers AI agents, workflows, and real-world automation projects from scratch."
                },
                {
                  id: "n8n-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Everything I Learned About AI Agents in 2024 in 19 Minutes",
                  url: "https://www.youtube.com/watch?v=pYelCIqkm5Y",
                  duration: "19 min",
                  description: "Nate Herk distills everything about AI agents — what they are, how they reason, and how to start building them."
                },
                {
                  id: "agent-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents in 2026: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=AYQtRqW1xX4",
                  duration: "45 min",
                  description: "Liam Ottley's complete guide — understand agents, build your first one, and learn how to turn it into a business."
                },
                {
                  id: "agent-1-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Build & Sell AI Agents: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=w0H1-b044KY",
                  duration: "1 hr",
                  description: "Liam Ottley builds a lead qualification agent, sales co-pilot, and outreach system step by step."
                },
                {
                  id: "agent-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "[Apollo.io] B2B Lead Generation Tutorial For Beginners",
                  url: "https://www.youtube.com/watch?v=nXc13tFrMUY",
                  duration: "25 min",
                  description: "Ravi Abuvala walks through the full Apollo.io workflow — find prospects, filter by ICP, and launch automated outreach sequences."
                },
                {
                  id: "agent-2-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How To Use AI Agents To Do ALL Your Work — Full CrewAI Course for Beginners",
                  url: "https://www.youtube.com/watch?v=ONKOXwucLvE",
                  duration: "2 hrs",
                  description: "Full CrewAI course — build multi-agent teams that handle customer support, research, and complex tasks."
                },
                {
                  id: "agent-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Build AI ChatBot with Custom Knowledge Base in 10 mins",
                  url: "https://www.youtube.com/watch?v=6hQF80_xMkQ",
                  duration: "10 min",
                  description: "Build an AI chatbot trained on your own data — documents, PDFs, or website — and embed it anywhere in minutes."
                },
                {
                  id: "agent-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI web research agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building an agent that browses the web, collects data, and writes structured reports."
                },
                {
                  id: "agent-4-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI data extraction workflow",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on automatically extracting and cleaning data from websites and documents with AI."
                },
                {
                  id: "agent-4-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI social media content agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on an agent that monitors trends, drafts posts, and schedules content automatically."
                },
                {
                  id: "agent-5-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "THIS AI Automation Lets You Repurpose Youtube Videos Into Social Media Posts!",
                  url: "https://www.youtube.com/watch?v=KBGYMGWyL04",
                  duration: "20 min",
                  description: "Build a no-code automation that takes a YouTube video and generates ready-to-post content for every social platform automatically."
                },
                {
                  id: "agent-5-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI meeting summarizer agent",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on automatically transcribing meetings and extracting action items with AI."
                },
                {
                  id: "agent-6-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "The Best RAG System On YouTube (Steal This!)",
                  url: "https://www.youtube.com/watch?v=Kvf-Pr1LRe4",
                  duration: "35 min",
                  description: "Nate Herk builds the most powerful RAG system — connect it to your company docs and let AI answer questions from your knowledge base."
                },
                {
                  id: "agent-6-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Beginner to Pro with ChatGPT in One Video!",
                  url: "https://www.youtube.com/watch?v=bkf3XBOj2PE",
                  duration: "30 min",
                  description: "Jeff Su's complete ChatGPT guide — cover prompting frameworks, marketing copy, emails, and productivity workflows all in one shot."
                },
                {
                  id: "mkt-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "13 AI Tools I Use to Make $480,000/Month",
                  url: "https://www.youtube.com/watch?v=-XbfmhGk4r0",
                  duration: "25 min",
                  description: "Liam Ottley runs through his full AI marketing and business stack — the real tools that drive revenue in an AI agency."
                },
                {
                  id: "mkt-1-3",
                  dateAdded: "2025-01-01",
                  type: "article",
                  title: "The Complete Guide to AI in Marketing",
                  url: "https://blog.hubspot.com/marketing/ai-marketing",
                  description: "HubSpot's comprehensive guide covering AI marketing strategies and tools."
                },
                {
                  id: "mkt-1-4",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Copy This Perfect Landing Page To Double Your Leads Instantly",
                  url: "https://www.youtube.com/watch?v=V2_LNtV95jM",
                  duration: "18 min",
                  description: "Wes McDowell breaks down the exact landing page structure that converts — use AI to write each section in minutes."
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Generate a month of content with AI",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on building a content pipeline that produces blogs, captions, and newsletters automatically."
                },
                {
                  id: "mkt-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI SEO content strategy",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on using AI tools to research keywords, write optimized content, and build links."
                },
                {
                  id: "mkt-2-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "The BEST Facebook Ads Campaign Structure",
                  url: "https://www.youtube.com/watch?v=cqNsMJPoM7c",
                  duration: "20 min",
                  description: "Ben Heath's proven Facebook/Meta ads structure — test creatives, structure campaigns, and scale what works."
                },
                {
                  id: "mkt-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Google Analytics + AI insights",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on combining GA4 with AI tools to extract actionable marketing insights."
                },
                {
                  id: "mkt-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Midjourney AI Tutorial: How to Use Midjourney to Create Stunning Art",
                  url: "https://www.youtube.com/watch?v=9WVZbitXbck",
                  duration: "25 min",
                  description: "Kevin Stratvert's complete Midjourney guide — account setup, prompting, parameters, and advanced techniques."
                },
                {
                  id: "img-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Write Great Prompts for AI Image Generators",
                  url: "https://www.youtube.com/watch?v=6RAStep_3OI",
                  duration: "20 min",
                  description: "Learn the universal prompt principles that work across Midjourney, Stable Diffusion, DALL-E 3, and any image AI — style, composition, lighting, and more."
                },
                {
                  id: "img-1-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: DALL-E 3 complete tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using DALL-E 3 inside ChatGPT for marketing and content creation."
                },
                {
                  id: "img-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Install & Use Stable Diffusion on Windows",
                  url: "https://www.youtube.com/watch?v=onmqbI5XPH8",
                  duration: "25 min",
                  description: "Kevin Stratvert's step-by-step guide — install Stable Diffusion locally, load models, and start generating unlimited images for free."
                },
                {
                  id: "img-2-3",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Flux 1.1 UPDATE: Create CONSISTENT AI Influencers With BEST Image Generator",
                  url: "https://www.youtube.com/watch?v=CGPCjazydK0",
                  duration: "20 min",
                  description: "Learn Flux 1.1 — currently the most photorealistic AI image generator — and how to create consistent characters."
                },
                {
                  id: "img-2-4",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ComfyUI Starter Guide: How and Why to Use It",
                  url: "https://www.youtube.com/watch?v=5dBAIhx28ow",
                  duration: "22 min",
                  description: "Olivio Sarikas introduces ComfyUI's node-based workflow system — unlock full control over image generation pipelines and advanced techniques."
                },
                {
                  id: "img-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Batch image generation for teams",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on scaling your visual production workflow for consistent brand output."
                },
                {
                  id: "img-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "The Best AI Video Generators of 2025!",
                  url: "https://www.youtube.com/watch?v=qblrpjsJb3I",
                  duration: "25 min",
                  description: "Curious Refuge tests and ranks every major AI video tool — Runway, Kling, Pika, Luma, and more — so you know exactly where to start."
                },
                {
                  id: "vid-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Runway AI — Tutorial for Beginners [FULL GUIDE]",
                  url: "https://www.youtube.com/watch?v=c38vtLw1nSk",
                  duration: "13 min",
                  description: "Complete beginner's guide to Runway — the leading AI video generation platform used by professionals."
                },
                {
                  id: "vid-1-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Create Cinematic AI Videos with Runway Gen-3",
                  url: "https://www.youtube.com/watch?v=gyCg0yv3Njw",
                  duration: "30 min",
                  description: "Curious Refuge shows how to get cinematic quality from Runway Gen-3 with advanced prompting techniques."
                },
                {
                  id: "vid-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Generate Video from ANY Photo! │KLING AI Tutorial",
                  url: "https://www.youtube.com/watch?v=_CyBXbuDth0",
                  duration: "20 min",
                  description: "Full Kling AI tutorial — image-to-video, text-to-video, tips for getting the best results."
                },
                {
                  id: "vid-2-3",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Pika AI video tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using Pika to generate and edit short-form AI video content."
                },
                {
                  id: "vid-2-4",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Full AI video production pipeline",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial combining image gen + video gen + voiceover AI to produce complete videos."
                },
                {
                  id: "vid-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: AI video for social media (Reels, TikTok, Shorts)",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on creating scroll-stopping short-form video content using AI tools."
                },
                {
                  id: "vid-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Cursor Tutorial for Beginners (AI Code Editor)",
                  url: "https://www.youtube.com/watch?v=ocMOZpuAMw4",
                  duration: "30 min",
                  description: "Tech With Tim's complete Cursor tutorial — set up the AI code editor and start building faster immediately."
                },
                {
                  id: "web-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "Claude Code + Karpathy's Obsidian = New Meta",
                  url: "https://www.youtube.com/watch?v=eglVxLaWRUU",
                  duration: "15 min",
                  description: "Jack Roberts shows a powerful workflow combining Claude Code with Karpathy's Obsidian system."
                },
                {
                  id: "web-1-3",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How To Build Web Apps using V0 + Claude AI + Cursor AI",
                  url: "https://www.youtube.com/watch?v=grc0YSEdUQY",
                  duration: "40 min",
                  description: "Combine V0, Claude, and Cursor to build full web apps — the modern AI dev stack in action."
                },
                {
                  id: "web-1-4",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "CLAUDE CODE FULL COURSE 4 HOURS: Build & Sell (2026)",
                  url: "https://www.youtube.com/watch?v=QoQBzR1NIqI",
                  duration: "4 hrs",
                  description: "Nick Saraev's comprehensive Claude Code course — build real projects and learn how to sell AI development services."
                },
                {
                  id: "web-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "How to Use AI to Build Your SaaS Startup (Lovable, Supabase)",
                  url: "https://www.youtube.com/watch?v=mJwPvyc4-rk",
                  duration: "35 min",
                  description: "Greg Isenberg walks through building a complete SaaS product using Lovable for the frontend and Supabase for the backend — zero manual coding."
                },
                {
                  id: "web-2-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Deploy to Vercel tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on deploying your web app to Vercel with a custom domain and automatic CI/CD."
                },
                {
                  id: "web-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Web performance optimization with AI",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on using AI tools to analyze and fix performance bottlenecks in your site."
                },
                {
                  id: "web-3-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Bubble.io full tutorial",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a complete Bubble.io tutorial for building apps without writing code."
                },
                {
                  id: "app-1-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: FlutterFlow no-code mobile app",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a tutorial on creating native iOS and Android apps visually with FlutterFlow."
                },
                {
                  id: "app-1-3",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "كورس تعلم كلود من الصفر || Claude 101 in Arabic",
                  url: "https://www.youtube.com/watch?v=oz44Wp22iCU",
                  duration: "Full course",
                  description: "Ghareeb Elshaikh's complete Claude 101 course in Arabic — learn Claude from scratch and start building with it."
                },
                {
                  id: "app-2-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "EVERYTHING You Need to Know About Claude in 2024",
                  url: "https://www.youtube.com/watch?v=XKX1C65W1EE",
                  duration: "30 min",
                  description: "Full breakdown of Claude's capabilities — what makes it different from ChatGPT and how to use it effectively."
                },
                {
                  id: "app-2-3",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Build an app with Claude API",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a step-by-step guide to integrating Anthropic's Claude API into a real application."
                },
                {
                  id: "app-2-4",
                  dateAdded: "2025-01-01",
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
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Submit app to App Store",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a walkthrough of the Apple App Store submission process."
                },
                {
                  id: "app-3-2",
                  dateAdded: "2025-01-01",
                  type: "youtube",
                  title: "ADD_VIDEO_HERE: Monetize your AI app",
                  url: "https://www.youtube.com/watch?v=ADD_VIDEO_HERE",
                  duration: "",
                  description: "Find a guide on how to price and monetize AI-powered apps effectively."
                },
                {
                  id: "app-3-3",
                  dateAdded: "2025-01-01",
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
    },

    // =========================================================
    // PILLAR 4 — BY CREATOR
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
          avatar: "https://nateherk.com/images/pfp.png",
          description: "AI automation expert helping non-technical people build AI agents and n8n workflows. Posts 3–5× per week on the latest Claude, n8n, and automation tools.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "nate-latest",
              name: "Latest Drops",
              timeline: "April 2026",
              resources: [
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
          avatar: "https://beehiiv-images-production.s3.amazonaws.com/uploads/user/profile_picture/6a22f3df-8de7-401d-ab0b-7c1cac183256/WhatsApp_Image_2025-05-05_at_18.51.27.jpeg",
          description: "Top-100 UK entrepreneur who built a 7-figure AI automation business. Teaches Claude Code, Cowork, and real systems that run actual businesses — posts daily.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "jack-latest",
              name: "Latest Drops",
              timeline: "April 2026",
              resources: [
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
                  title: "Claude Code + Pinecone 2.0 = UNSTOPPABLE Memory",
                  url: "https://www.youtube.com/watch?v=TXcr0x9SIXA",
                  duration: "~18 min",
                  description: "Add persistent long-term memory to Claude Code using Pinecone's vector database — full walkthrough."
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
                  title: "7 Claude Cowork Skills I Use Every Day (steal them)",
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
          avatar: "https://yt3.googleusercontent.com/QlE3Bn2UDZv2aRF5Slz2E5BoFscjFhJ8sDBJbGa93gbx5aMuuFdDSPX8SdgYSzybPPjlThrx8g=s176-c-k-c0x00ffffff-no-rj",
          description: "NZ entrepreneur who invented the AI Automation Agency model. Teaches how to build, sell, and scale AI agent businesses — 290,000+ community members.",
          estimatedTime: "Self-paced",
          phases: [
            {
              id: "liam-latest",
              name: "Latest Drops",
              timeline: "Feb–Mar 2026",
              resources: [
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
                  id: "lo-6",
                  dateAdded: "2026-02-23",
                  type: "youtube",
                  title: "My Plan to Automate 70% of my Business w/ Claude Code (in 30 Days)",
                  url: "https://www.youtube.com/watch?v=O_VBdNrX0PM",
                  duration: "~30 min",
                  description: "Liam's 30-day roadmap for automating the majority of his business operations using Claude Code."
                },
                {
                  id: "lo-7",
                  dateAdded: "2026-02-12",
                  type: "youtube",
                  title: "How to Automate Your Life & Work w/ Claude Code: Ultimate Beginner's Guide",
                  url: "https://www.youtube.com/watch?v=2bsfQThGXxc",
                  duration: "~60 min",
                  description: "Complete beginner's guide to using Claude Code for life and business automation — start here if you're new."
                }
              ]
            }
          ]
        }

      ]
    }

  ]
};
