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
// HOW TO ADD A PHASE:
//   Add an object to the "phases" array with id, name, timeline, resources
//
// PLACEHOLDER YOUTUBE URLs: Replace "PLACEHOLDER_XX" with the real
// YouTube video ID (the part after ?v= in the URL).
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
                  title: "n8n Full Beginner Course — Zero to First Workflow",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_1",
                  duration: "45 min",
                  description: "Install n8n, understand nodes and triggers, and build your first working workflow."
                },
                {
                  id: "n8n-1-2",
                  type: "youtube",
                  title: "n8n vs Make vs Zapier — Which Should You Use?",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_2",
                  duration: "18 min",
                  description: "Understand why n8n is the best choice for power users who want full control."
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
                  title: "n8n + OpenAI: Build AI-Powered Workflows",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_3",
                  duration: "40 min",
                  description: "Connect n8n to ChatGPT and Claude to add AI into any automation."
                },
                {
                  id: "n8n-2-2",
                  type: "youtube",
                  title: "n8n Webhooks & HTTP Requests — Full Guide",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_4",
                  duration: "32 min",
                  description: "Trigger workflows from external apps and call any API with n8n."
                },
                {
                  id: "n8n-2-3",
                  type: "youtube",
                  title: "Automate Gmail, Sheets & Notion with n8n",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_5",
                  duration: "28 min",
                  description: "Real-world workflow: connect Gmail, Google Sheets, and Notion automatically."
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
                  title: "Build a Lead Generation Machine with n8n",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_6",
                  duration: "50 min",
                  description: "Full project: scrape leads, enrich data, and push to CRM automatically."
                },
                {
                  id: "n8n-3-2",
                  type: "youtube",
                  title: "Auto Social Media Posting Workflow in n8n",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_7",
                  duration: "35 min",
                  description: "Generate AI content and post to Instagram, LinkedIn, and X automatically."
                },
                {
                  id: "n8n-3-3",
                  type: "youtube",
                  title: "n8n Self-Hosting on a VPS — Full Setup",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_8",
                  duration: "25 min",
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
                  title: "What Are AI Agents? A Clear Explanation",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_9",
                  duration: "20 min",
                  description: "Understand what agents are, how they reason, use tools, and take actions."
                },
                {
                  id: "agent-1-2",
                  type: "youtube",
                  title: "Build Your First AI Agent in 30 Minutes",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_10",
                  duration: "30 min",
                  description: "Hands-on intro: build a simple agent that browses the web and answers questions."
                },
                {
                  id: "agent-1-3",
                  type: "article",
                  title: "LangChain Agents — Official Docs",
                  url: "https://python.langchain.com/docs/modules/agents/",
                  description: "The go-to framework for building AI agents — concepts, tools, and memory."
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
                  title: "Build an AI Lead Generation Agent",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_11",
                  duration: "45 min",
                  description: "Agent that finds prospects, researches them, and drafts personalized outreach."
                },
                {
                  id: "agent-2-2",
                  type: "youtube",
                  title: "Automate Cold Email Outreach with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_12",
                  duration: "38 min",
                  description: "AI-powered email sequences that feel personal and convert at scale."
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
                  title: "Build an AI Customer Support Chatbot",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_13",
                  duration: "50 min",
                  description: "Train a chatbot on your business data to handle support tickets automatically."
                },
                {
                  id: "agent-3-2",
                  type: "youtube",
                  title: "RAG Explained: Give AI Your Business Knowledge",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_14",
                  duration: "25 min",
                  description: "Use Retrieval-Augmented Generation so your agent answers from your own docs."
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
                  title: "Build a Web Research Agent with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_15",
                  duration: "42 min",
                  description: "Agent that browses the web, collects information, and writes structured reports."
                },
                {
                  id: "agent-4-2",
                  type: "youtube",
                  title: "AI Data Extraction & Scraping Workflows",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_16",
                  duration: "35 min",
                  description: "Automatically extract, clean, and analyze data from websites and documents."
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
                  title: "Build an AI Social Media Agent",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_17",
                  duration: "48 min",
                  description: "Agent that monitors trends, drafts posts, and schedules content automatically."
                },
                {
                  id: "agent-5-2",
                  type: "youtube",
                  title: "Auto-Repurpose Content Across All Platforms",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_18",
                  duration: "30 min",
                  description: "Turn one piece of content into posts for Instagram, LinkedIn, X, and TikTok."
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
                  title: "AI Meeting Summarizer & Action Item Agent",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_19",
                  duration: "28 min",
                  description: "Automatically transcribe meetings and extract action items with AI."
                },
                {
                  id: "agent-6-2",
                  type: "youtube",
                  title: "Build an Internal Knowledge Base Agent",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_20",
                  duration: "40 min",
                  description: "Agent that answers team questions using your company's internal documents."
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
                  title: "ChatGPT for Marketing: Complete Beginner Guide",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_21",
                  duration: "18 min",
                  description: "How to use ChatGPT to write copy, emails, and social media posts."
                },
                {
                  id: "mkt-1-2",
                  type: "youtube",
                  title: "AI Tools Every Marketer Should Know in 2024",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_22",
                  duration: "22 min",
                  description: "Overview of top AI marketing tools including Jasper, Copy.ai, and more."
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
                  title: "Writing High-Converting Copy with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_23",
                  duration: "15 min",
                  description: "Practical walkthrough of AI-assisted copywriting for ads, landing pages, and emails."
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
                  title: "Generate a Month of Content in 1 Hour with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_24",
                  duration: "35 min",
                  description: "Build a content pipeline that produces blogs, captions, and newsletters automatically."
                },
                {
                  id: "mkt-2-2",
                  type: "youtube",
                  title: "AI SEO Strategy: Rank Faster with AI Content",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_25",
                  duration: "40 min",
                  description: "Use AI tools to research keywords, write optimized content, and build links."
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
                  title: "AI-Powered Ad Campaigns That Convert",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_26",
                  duration: "32 min",
                  description: "Using AI to create, optimize, and scale advertising campaigns."
                },
                {
                  id: "mkt-3-2",
                  type: "youtube",
                  title: "Google Analytics + AI: Advanced Insights",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_27",
                  duration: "40 min",
                  description: "Combine GA4 with AI tools to extract actionable marketing insights."
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
                  title: "Midjourney Beginner to Advanced Guide",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_9",
                  duration: "45 min",
                  description: "Complete Midjourney tutorial covering all core features and settings."
                },
                {
                  id: "img-1-2",
                  type: "youtube",
                  title: "The Art of AI Prompting for Images",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_10",
                  duration: "25 min",
                  description: "Learn the principles behind writing prompts that generate great images."
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
                  title: "DALL-E 3 Complete Tutorial",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_11",
                  duration: "20 min",
                  description: "Using DALL-E 3 inside ChatGPT for marketing and content creation."
                },
                {
                  id: "img-2-2",
                  type: "youtube",
                  title: "Stable Diffusion: Free Local Image Generation",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_12",
                  duration: "55 min",
                  description: "Set up and use Stable Diffusion locally for unlimited image generation."
                },
                {
                  id: "img-2-3",
                  type: "youtube",
                  title: "Flux AI — The New Image Generation Standard",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_13",
                  duration: "18 min",
                  description: "Review and tutorial of Flux, one of the latest and most powerful models."
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
                  title: "ComfyUI: Advanced AI Image Workflows",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_14",
                  duration: "1 hr 10 min",
                  description: "Build complex image generation pipelines using ComfyUI's node system."
                },
                {
                  id: "img-3-2",
                  type: "youtube",
                  title: "Batch Image Generation for Marketing Teams",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_15",
                  duration: "30 min",
                  description: "Scale your visual production workflow for consistent brand output."
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
                  title: "AI Video Generation in 2024: Complete Overview",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_30",
                  duration: "20 min",
                  description: "Overview of all major AI video tools and what each one is best at."
                },
                {
                  id: "vid-1-2",
                  type: "youtube",
                  title: "Runway Gen-3: Beginner to Advanced",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_31",
                  duration: "35 min",
                  description: "Complete guide to Runway Gen-3 — the leading AI video generation platform."
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
                  title: "OpenAI Sora: What It Can Do & How to Use It",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_32",
                  duration: "25 min",
                  description: "Hands-on guide to Sora — OpenAI's text-to-video model."
                },
                {
                  id: "vid-2-2",
                  type: "youtube",
                  title: "Kling AI: Full Tutorial for Beginners",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_33",
                  duration: "30 min",
                  description: "Step-by-step Kling tutorial — image-to-video and text-to-video workflows."
                },
                {
                  id: "vid-2-3",
                  type: "youtube",
                  title: "Pika Labs Tutorial: Create Stunning AI Videos",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_34",
                  duration: "22 min",
                  description: "Using Pika to generate and edit short-form AI video content."
                },
                {
                  id: "vid-2-4",
                  type: "youtube",
                  title: "Luma Dream Machine: AI Video Generation",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_35",
                  duration: "18 min",
                  description: "Luma's Dream Machine for realistic AI video — tips and prompting techniques."
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
                  title: "Full AI Video Production Pipeline",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_36",
                  duration: "50 min",
                  description: "Combine image gen + video gen + voiceover AI to produce complete videos."
                },
                {
                  id: "vid-3-2",
                  type: "youtube",
                  title: "AI Video for Social Media: Reels, TikTok & YouTube Shorts",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_37",
                  duration: "28 min",
                  description: "Create scroll-stopping short-form video content using AI tools."
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
          description: "Build modern websites and web apps using AI-powered tools like Cursor, GitHub Copilot, and Bolt.new.",
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
                  title: "Cursor AI: The Future of Code Editing",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_16",
                  duration: "30 min",
                  description: "Get started with Cursor, the AI-first code editor that rewrites how you code."
                },
                {
                  id: "web-1-2",
                  type: "youtube",
                  title: "GitHub Copilot Full Tutorial",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_17",
                  duration: "42 min",
                  description: "Master GitHub Copilot to dramatically increase your coding speed."
                },
                {
                  id: "web-1-3",
                  type: "youtube",
                  title: "Build a Website in 1 Hour with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_18",
                  duration: "58 min",
                  description: "Complete project: design and deploy a website using AI assistance from start to finish."
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
              name: "Full-Stack with AI",
              timeline: "Week 4–6",
              resources: [
                {
                  id: "web-2-1",
                  type: "youtube",
                  title: "Build a Full-Stack App with Claude AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_19",
                  duration: "1 hr 20 min",
                  description: "End-to-end project: design, build, and ship a full-stack web app using Claude."
                },
                {
                  id: "web-2-2",
                  type: "youtube",
                  title: "Supabase + AI: Build a SaaS in a Weekend",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_20",
                  duration: "2 hrs",
                  description: "Use Supabase for backend and AI for the frontend logic and UI generation."
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
                  title: "Deploy to Vercel: Zero to Production",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_21",
                  duration: "25 min",
                  description: "Deploy your web app to Vercel with a custom domain and automatic CI/CD."
                },
                {
                  id: "web-3-2",
                  type: "youtube",
                  title: "Web Performance Optimization with AI",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_22",
                  duration: "35 min",
                  description: "Use AI tools to analyze and fix performance bottlenecks in your site."
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
                  title: "Bubble.io Full Tutorial: Build Apps Without Code",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_23",
                  duration: "1 hr",
                  description: "Build a complete web app using Bubble.io's visual development platform."
                },
                {
                  id: "app-1-2",
                  type: "youtube",
                  title: "FlutterFlow: No-Code Mobile App Development",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_24",
                  duration: "48 min",
                  description: "Create native iOS and Android apps visually with FlutterFlow."
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
              name: "Building with AI APIs",
              timeline: "Week 3–6",
              resources: [
                {
                  id: "app-2-1",
                  type: "youtube",
                  title: "Integrate Claude API Into Your App",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_25",
                  duration: "45 min",
                  description: "Step-by-step guide to integrating Anthropic's Claude API into a real app."
                },
                {
                  id: "app-2-2",
                  type: "youtube",
                  title: "OpenAI API Crash Course",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_26",
                  duration: "1 hr 30 min",
                  description: "Complete guide to using the OpenAI API — completions, embeddings, and fine-tuning."
                },
                {
                  id: "app-2-3",
                  type: "youtube",
                  title: "Build an AI Chatbot App from Scratch",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_27",
                  duration: "2 hrs",
                  description: "Full project: design, build, and deploy an AI-powered chat application."
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
                  title: "How to Submit Your App to the App Store",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_28",
                  duration: "38 min",
                  description: "Complete walkthrough of the Apple App Store submission process."
                },
                {
                  id: "app-3-2",
                  type: "youtube",
                  title: "Monetize Your AI App: Pricing Strategies",
                  url: "https://www.youtube.com/watch?v=PLACEHOLDER_29",
                  duration: "22 min",
                  description: "How to price and monetize AI-powered apps effectively."
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
