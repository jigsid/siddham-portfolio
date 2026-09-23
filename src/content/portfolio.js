export const profile = {
  name: "Siddham Mishra",
  role: "GTM Engineer",
  roleDetail: "revenue systems, built and run",
  sub: "Growth engineer. Clay pipelines, outbound infrastructure and the AI layer on top of both, all of it running in production.",
  location: "India · overlaps US & EU hours",
  email: "siddhammishra@gmail.com",
  phone: "+91 7385269840",
  links: {
    linkedin: "https://www.linkedin.com/in/siddham-mishra-611437247/",
    github: "https://github.com/jigsid",
    x: "https://x.com/OXOJigsaw",
    cal: "https://cal.com/siddhammishra/30min",
  },
};

export const about = {
  paragraphs: [
    "Started my career in coding - learning things like data structures and algorithms, computer networks, databases, etc. Along with that, I was learning about Facebook ads, funnels, copywriting as a fun side-by-side.",
    "Eventually, I stumbled into a gtm role, which is exactly what I liked working on, and started learning n8n, Clay, cold email, inbound, the whole LinkedIn ecosystem, crms - and eventually, from feb 2026, went heavy into combining AI into GTM (when OpenClaw went viral), and nowadays working with Hermes, MCPs, AI skills, and orchestration.",
    "As an individual, I have a bias towards action, am aware of the latest AI stuff, and also have good taste (designs/songs).",
  ],
  pull: '"put me on the hardest team working the hardest problems. i\'ll struggle for a few weeks, then i\'ll thrive."',
};

export const experience = [
  {
    slug: "capvance",
    company: "Capvance",
    role: "Growth Engineer",
    summary: "Internal tools and outreach systems for an investment-banking GTM motion.",
    points: [
      "Built AI tools and React dashboards so pipeline, campaigns and CRM data lived in one place.",
      "Scored and validated lead lists before anyone contacted them, then ran email and LinkedIn sequences with personalization that held up at volume.",
    ],
    proof: {
      kind: "image",
      images: [
        { src: "/proofs/capvance-proof.webp", width: 1400, height: 736 },
        { src: "/proofs/capvance-proof-2.webp", width: 1400, height: 910 },
      ],
      trigger: "Show me the proof",
      title: "Campaign performance, in Smartlead",
      caption:
        "RE - Capvance Outreach: 2,376 sent, 95 replies (8.42%), 52 of them positive. Bounces stayed under 1%.",
    },
    detail: {
      intro:
        "At Capvance I was on the go-to-market side of investment banking, working on sell-side and buy-side mandates. My job came down to two things: make the pipeline easy to read, and keep outreach performing once the volume went up.",
      blocks: [
        {
          h: "What wasn't working",
          body: [
            "The deal teams were running on spreadsheets and memory. Lists went stale fast, every personalized line was written by hand, and if you asked which campaign had started a conversation, nobody could really tell you.",
          ],
        },
        {
          h: "What I built",
          body: [
            "Mostly internal tooling. I built AI-assisted tools and React dashboards on top of our CRM data, covering pipeline tracking, campaign orchestration and the analytics the team checked every day.",
          ],
          list: [
            "Lead list scoring and validation. Every score came with a written reason, so anyone could see why a company made the cut.",
            "Email and LinkedIn sequences running side by side, with personalization that didn't get expensive as the volume grew.",
            "Signal pipelines that picked up M&A activity and competitor acquisitions from government filings, plus Crunchbase scrapers for the companies the filings missed.",
            "A personalization agent that wrote from what we actually knew about the account, instead of dropping a first name and a company name into a template.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Data came in from government filings, Crunchbase, Apollo and LinkedIn, and went through Clay for waterfall enrichment, dedupe and validation. Nothing reached the CRM until it had been through all of that. Only records above the scoring bar went into a sequence, and the sequence depended on the signal: a company that had just announced a deal got a different opener than one that had gone quiet.",
            "Replies were routed as soon as they came in, and every step wrote back to the CRM. That's the reason the dashboards stayed accurate - they were reading from a CRM that was actually up to date.",
          ],
        },
        {
          h: "Results",
          body: [],
          list: [
            "The flagship campaign: 2,376 emails sent, 95 replies (8.42%), 52 of them positive, with bounces under 1%.",
            "The volume campaigns went past 4,000 sends each and still got 6-10% reply rates.",
            "On LinkedIn: 356 connection requests through HeyReach, 51% accepted, and 62% of the messages got a reply.",
            "PlusVibe: over 18,000 leads contacted at a 1.7% bounce rate.",
            "The team kept opening the dashboards every day, and I documented the scoring model so it kept running after I left.",
          ],
        },
      ],
    },
  },
  {
    slug: "gushwork",
    company: "Gushwork",
    role: "Growth Engineer",
    summary: "Built outbound from zero for a floor of 15 SDRs, and looked after whatever else they needed - onboarding, fixes, the lot.",
    points: [
      "Took cold email from zero to 300k sends a month, ran the cold-call system for 15 SDRs and 2 AEs, and kept LinkedIn outreach going alongside both, all on calling data I handled end to end in Clay.",
      "Owned all of our n8n work - fixing what broke, building what was needed, with everything posting into Slack - plus the Python scrapers and enrichment tools (FullEnrich, LeadMagic, Apollo) behind the data.",
      "Was the person the floor came to: I onboarded new SDRs, answered their technical questions, and ran the call and sales ops. Show-up rate was the number we watched.",
    ],
    proof: {
      kind: "image",
      images: [{ src: "/proofs/gushwork-proof.webp", width: 1100, height: 666 }],
      trigger: "Show me the proof",
      title: "100+ demos booked off my calling data",
      caption:
        "I built the data system the SDRs called from, and the team went on to book 100+ demos and pass 30 a week. This is the post that announced it.",
    },
    detail: {
      intro:
        "Outbound at Gushwork was starting from scratch when I joined. I built the email, calling and data setup that 15 SDRs and 2 AEs worked from every day, and I was also the person they came to when something broke mid-day or a new hire needed onboarding.",
      blocks: [
        {
          h: "What wasn't working",
          body: [
            "The reps were fine. The setup behind them was basic - it worked for a small team, but it had no way of handling the volume the business was heading toward.",
          ],
        },
        {
          h: "What I built",
          body: [
            "Email, calling and the data underneath both, and then the n8n and Slack layer that let the whole floor actually use it.",
          ],
          list: [
            "Calling data, built end to end in Clay: list building, dedupe, waterfall enrichment, validation. I know it well enough that I could rebuild most of it outside Clay.",
            "Cold email from zero. I set up the domains and mailboxes to handle 10,000 sends a day, wrote the copy, looked after deliverability and domain reputation, built the lead lists and the dashboards to track it all. When the market called for it we scaled up, to about 300k sends a month at peak.",
            "LinkedIn outreach to the same ICPs, run alongside email and calls rather than as its own separate thing.",
            "The cold calling system. JustCall and SalesDialer were hooked into Clay and HubSpot, so the next account's details were already on screen before the current call ended.",
            "All of our n8n. I fixed bugs, extended workflows and built new ones as requests came in, with JavaScript and JSON doing the glue. Anything important posted to Slack: demos the moment they were booked, and enrichment dropped straight into the channel the SDRs were already working in.",
            "Python for scraping and the small one-off automations that kept coming up, plus the rest of the toolkit: FullEnrich, LeadMagic, Apollo, Zapmail, Namecheap and a few scraping extensions.",
            "I also helped on the other side of growth, with the company newsletter and influencer outreach.",
            "Outside the tooling, I onboarded new SDRs, answered their technical questions and handled the call and sales ops that kept everyone dialing. If something was stuck, they messaged me instead of raising a ticket.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Every record went through the same steps: source, dedupe, enrich, score, tier. Then it went into either an email sequence or a call block. Call outcomes were logged in HubSpot the moment the call ended, because anything logged later usually gets logged wrong.",
            "When an SDR booked a demo, the prospect got an email right away showing what the product would do for them, sent from our in-house tools. It moved the show-up rate, since people are more likely to turn up when you've already given them something useful. It's also why we changed our main metric from demos booked to show-ups. A demo nobody attends doesn't count for much.",
            "I owned all of the n8n orchestration and usually fixed or extended things the same day someone asked. Everything reported into Slack, and Python took care of scraping and the small, temporary automations that weren't worth a full workflow.",
          ],
        },
        {
          h: "Tracking the numbers",
          body: [
            "I tracked everything: all fifteen SDRs, every call, list and campaign. At a team this size, the usual setup is a CRM dashboard counting demos booked, plus a few activity numbers nobody has properly defined. I sat in on the CEO's meetings with the data analytics team and brought that way of thinking down to the dialer. Every test started with a hypothesis and ended with a decision: keep going, or kill it.",
          ],
          list: [
            "Each channel had its own success metrics, since calling and cold email don't win on the same numbers. We picked them before a test started, not after.",
            "Every stage had one agreed definition - dials, connects, conversations, meetings booked, shows, held - so two people quoting the same number meant the same thing.",
            "Week over week numbers for each rep and each list, so we could see who was improving, which lists were bringing in pipeline, and which scripts held up on real calls.",
            "I was responsible for two numbers, show-up rate and demos booked, and both went up. Reminders and better pre-call context lifted shows. Better lists and talk tracks lifted bookings.",
            "One dashboard across the CRM, the dialer and the campaigns, so management and the reps looked at the same numbers instead of arguing over separate spreadsheets.",
          ],
        },
        {
          h: "Results",
          body: [
            "The main thing I built was the cold calling setup: the data layer 15 SDRs and 2 AEs dialed from, connected to JustCall, SalesDialer, Clay and HubSpot. The team booked 100+ demos in a quarter on it.",
            "Email went from zero to 300k sends a month, and the tracking showed us where to push, so show-up rate and demos booked kept climbing as the volume grew. All fifteen SDRs ended up working from one system instead of fifteen spreadsheets, and a few product features I suggested from the floor got shipped.",
          ],
        },
      ],
      stack: "HubSpot · Clay · Smartlead · JustCall · SalesDialer · Slack · n8n · Python · FullEnrich · LeadMagic · Apollo",
    },
  },
  {
    slug: "conek",
    company: "Conek",
    role: "Growth Engineer",
    summary: "Client-acquisition systems for an agency, built per client.",
    points: [
      "Built funnels, forms, calendars and CRM workflows in GoHighLevel for each client, with dashboards tracking lead quality, appointments and conversion.",
      "Shipped an agent that builds landing pages, and automated onboarding with SMS and email sequences.",
    ],
    proof: null,
    detail: {
      intro:
        "The same acquisition problem, rebuilt for every client - 20 of them running at once at the busiest. Mostly it taught me to build things I could deploy again, rather than clever one-offs.",
      blocks: [
        {
          h: "What I built",
          body: [
            "Funnels, forms, calendars and CRM workflows in GoHighLevel, with n8n connecting Facebook Lead Ads and whatever else the client was already paying for.",
          ],
          list: [
            "Dashboards for lead quality, appointments and conversion, so 'is this working?' had an actual answer.",
            "An agent that builds a finished landing page from a client's offer, which removed the slowest part of onboarding.",
            "Automated onboarding: SMS and email sequences for each client account, nothing sent by hand.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "There were up to 20 clients running at once, and every one got the same skeleton - capture, qualify, route, follow up - with the pieces swapped out for their channels. Keeping that shape constant meant the dashboards stayed comparable, and a new client was not a new project every time.",
          ],
        },
        {
          h: "What it taught me",
          body: [
            "The pattern paid off. The second client took a fraction of the effort of the first, and by the fourth, the only new work was figuring out the offer.",
          ],
        },
      ],
      stack: "GoHighLevel · n8n · Facebook Lead Ads · Make · dashboards",
    },
  },
  {
    slug: "holisticon",
    company: "Holisticon",
    role: "Frontend Developer",
    summary: "Frontend work inside a real engineering team.",
    points: [
      "Built frontend components against an existing unit-test suite, and worked through bugs across the product.",
    ],
    proof: null,
    detail: {
      intro:
        "My first job inside a real engineering team, before GTM and before Clay, back when shipping meant someone else had already written the tests.",
      blocks: [
        {
          h: "What I did",
          body: [
            "React components built against an existing unit-test suite, plus a long run of bug backlog cleanup across the product.",
          ],
        },
        {
          h: "What the work was like",
          body: [],
          list: [
            "Building components to match an existing design system - props, states, edge cases, responsive behaviour.",
            "Wiring the frontend to APIs: fetching, forms, validation, loading and error states.",
            "Writing and fixing unit tests, then getting the PR through review.",
            "Working down the bug backlog - layout glitches, state bugs, cross-browser quirks.",
            "Picking up small features end to end, with a senior reviewing every diff.",
            "The team rituals: standups, ticket grooming, code reviews.",
          ],
        },
        {
          h: "What it taught me",
          body: [
            "How to work inside a team, mostly, and inside a large codebase I had not written a line of. Learning other people's patterns, matching the design system, changing code without breaking what surrounds it: that is a skill you only build in a codebase bigger than you are.",
            "The other half was collaboration. Picking up tickets, asking questions in the right place, taking feedback on a diff without taking it personally: that part carried into every role since.",
          ],
        },
      ],
      stack: "React · JavaScript · unit tests · Git",
    },
  },
];

export const projects = [
  {
    title: "ABM workflow",
    kicker: "A GTM system, written down",
    body: "Account-based targeting, signal tracking, demand generation and the loops that keep them honest - the system on paper before the system in production.",
    proof: null,
    detailHref: "/abm-workflow",
    links: [],
  },
  {
    title: "Coding projects",
    kicker: "Two products, shipped end to end",
    body: "SmartRep AI (multi-tenant chatbot and email platform) and Boostly (Instagram comment and DM automation) - both mine, both running.",
    proof: null,
    detailHref: "/coding-projects",
    links: [],
  },
];

export const moreProjects = [
  {
    title: "Hormozi Harness",
    body: "A map of everything Alex Hormozi has posted online, built as one interactive tree on a single page. Scan the body of work, then drill into whatever topic matters to you - 7 modules, 55 frameworks and 200 rules.",
    links: [{ label: "Live", href: "https://hormozi-brain-tree.vercel.app/" }],
  },
];

export const codingProjects = [
  {
    title: "SmartRep AI",
    kicker: "Multi-tenant chatbot and email platform",
    body: "Embeddable AI chat with lead capture, live-agent handoff over Pusher, appointment booking, Stripe billing, email campaigns and optional voice through Vapi. Next.js · Prisma · Gemini.",
    detail: {
      intro:
        "A multi-tenant SaaS: a business embeds an AI chat widget on its site and runs the entire customer conversation - bot, human, bookings, payments - from one dashboard.",
      blocks: [
        {
          h: "What it does",
          body: [
            "The widget answers from the business's own content, captures the lead while the conversation is warm, and hands the thread to a human when one is needed. It books appointments, takes payment through Stripe, runs email campaigns, and can take the conversation to voice.",
          ],
        },
        {
          h: "How it works",
          body: [
            "Next.js on the front and back, Prisma as the data layer, Gemini for the conversation. Pusher carries the real-time channel that makes handoff feel live: the agent sees the thread as it happens and takes over without the visitor noticing a seam. Clerk handles auth and keeps tenants separated; Vapi covers the voice path.",
          ],
        },
        {
          h: "The hard part",
          body: [
            "Multi-tenancy is the whole problem. Every query is scoped by tenant, every webhook is verified before it is trusted, and the handoff has to let a bot and a human write into the same thread without duplicating or dropping a message. The AI was the easy half.",
          ],
        },
      ],
      stack: "Next.js · Prisma · PostgreSQL · Gemini · Pusher · Stripe · Vapi · Clerk",
    },
    proof: {
      kind: "youtube",
      id: "F6V6PVLQlWk",
      trigger: "Show me the walkthrough",
      title: "SmartRep AI, end to end",
      caption:
        "A tour of the product: embeddable chat, lead capture, human handoff, booking, payments and campaigns, all managed from one dashboard.",
    },
    links: [
      { label: "Live", href: "https://chatbot-jigsid.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jigsid/chatbot" },
    ],
  },
  {
    title: "Boostly",
    kicker: "Instagram comment and DM automation",
    body: "Keyword triggers on comments and DMs with instant or AI-driven replies through Gemini, built on Meta webhooks with Clerk auth and a Prisma data layer. Next.js · TypeScript · PostgreSQL.",
    detail: {
      intro:
        "An Instagram automation product: connect an account, define what to listen for, and it answers, either straight away or by holding a real conversation.",
      blocks: [
        {
          h: "What it does",
          body: [
            "Users connect an Instagram account and set keyword triggers on comments and DMs. A match sends a reply straight away, or hands the thread to Gemini to continue as a conversation. Built for agencies running many accounts at once, not one profile.",
          ],
        },
        {
          h: "How it works",
          body: [
            "Meta webhooks push events in real time. The matcher checks each event against the account's triggers, then either sends a fixed reply through the Graph API or opens an AI conversation. Clerk handles auth, Prisma is the data layer, PostgreSQL holds the state.",
          ],
        },
        {
          h: "The hard part",
          body: [
            "Meta's webhook rules, not the AI. Signature verification, retries, duplicate deliveries and per-account rate limits all have to be handled, so every event is idempotent and a redelivered webhook never sends a second DM. Get that wrong and the product annoys the customer's customers.",
          ],
        },
      ],
      stack: "Next.js · TypeScript · PostgreSQL · Prisma · Meta Graph API · Gemini · Clerk",
    },
    proof: {
      kind: "youtube",
      id: "TknWLJJ581A",
      trigger: "Show me the build",
      title: "Boostly, running",
      caption:
        "Users connect an account, define triggers on comments and DMs, and the system answers instantly or holds an AI conversation.",
    },
    links: [
      { label: "Live", href: "https://papiauto.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jigsid/papiauto" },
    ],
  },
];

export const now = {
  heading: "The operator's stack I'm building.",
  lede: "Live work, not a roadmap. Agents do the work; a human owns the judgment.",
  items: [
    {
      title: "Signal-based GTM",
      body: "MCP servers wrapping internal APIs, and agents that watch for movement and draft the first touch. A human still presses send.",
    },
    {
      title: "A personal brain",
      body: "Everything I learn, read and decide lands in an Obsidian vault wired to Claude Code and opencode, so context compounds instead of leaking.",
    },
    {
      title: "Autonomous GTM systems",
      body: "Claude Code and MCP servers running the whole loop - signals in, enrichment, drafts out, every run logged for review. Built to operate, not to demo.",
    },
  ],
  flowLabel: "The stack, as a system",
  flow: [
    {
      n: "01",
      title: "Detect movement",
      body: "Job changes, hiring posts, intent signals - the moment someone moves.",
      tools: "Clay · Apollo · Sales Navigator · Apify",
    },
    {
      n: "02",
      title: "Enrich & score",
      body: "Waterfall enrichment, validation, tiering. No unexplained numbers.",
      tools: "Clay · FullEnrich · LeadMagic",
    },
    {
      n: "03",
      title: "Sequence everywhere",
      body: "Email, LinkedIn and calls, branched by signal type rather than by template.",
      tools: "Smartlead · HeyReach · JustCall · SalesDialer",
    },
    {
      n: "04",
      title: "Draft with AI",
      body: "Personalization that stays cheap at volume, with a human pressing send.",
      tools: "Claude Code · OpenRouter · MCP",
    },
  ],
};

export const more = {
  intro:
    "What I'm building, what I think about GTM, and what I'm picking up along the way. I update this whenever something changes, which is most weeks.",
  sections: [
    {
      h: "What I'm working on",
      body: [
        "Signal-based GTM is my main project right now, and honestly the most fun I've had building anything. Instead of guessing who to contact, you watch for something to change at a company and reach out while it still matters.",
      ],
      list: [
        "MCP servers that wrap our internal APIs, so an agent can read and write the warehouse, the CRM and the dialer through one interface. The first time an agent updated the CRM by itself, it felt a bit like cheating.",
        "Agents that watch for a trigger, enrich it, score it and draft the first message. A human still presses send, and that's what keeps the output trustworthy.",
        "A personal brain. Everything I learn, read and decide goes into one vault that's connected to Claude Code and opencode, so I don't lose context between projects. It's changed how I think more than I expected.",
        "Deterministic engines for the parts where accuracy matters. allie-events-engine is the one I shipped to prove it out: Python, six Claude Code skills, seventeen passing tests.",
      ],
    },
    {
      h: "Harness, AI skills and orchestration",
      body: [
        "Most of what I build sits on the same three ideas: keep the knowledge in files, give the agent real tools, and split the work across agents with something checking the output.",
      ],
      list: [
        "Harness: Hormozi Harness started as a map of everything Alex Hormozi has posted online (7 modules, 55 frameworks, 200 rules), and now it runs locally as an advisor. It has three layers. A skill loads the voice and routes the question, an MCP server gives it real tools (offer scoring, offer audits, money math, framework lookup, reading and writing the vault), and the framework notes live in my vault. It kicks in on its own whenever a task is about offers, leads, pricing or sales.",
        "AI skills: I write down how I work as skills, and an agent loads the right one when a task matches. Writing rules, research steps, review checks. When I fix a mistake, the fix goes into a skill so I don't have to fix it again. There are around forty in my archive, and they load when needed instead of all at once.",
        "Orchestration: agents work as a team. One plans and splits the job, a few build, and a checker reviews everything before it ships. Claude Code subagents and MCP servers do most of it, Orca handles the longer multi-agent runs, and every run leaves a record I can go back and read.",
      ],
    },
    {
      h: "How I think about a system",
      body: [
        "Every GTM system I've built has had the same shape: source, enrich, reason, act. None of that is new except the reasoning step, and that step is why these systems are worth building now.",
      ],
      list: [
        "Source: a data provider, the CRM, inbound or product usage. Something has to tell you who to look at.",
        "Enrich: fill in what's missing and shape the data so the next step can actually use it.",
        "Reason: a model reads everything together and spots connections you'd never manage to write as a formula. This is my favourite part to build.",
        "Act: a Slack message, a sequence, a CRM update, delivered where the rep already works.",
        "The way these systems usually fail is that nobody uses them. So the output has to land in front of the rep. If they have to go looking for it, they won't.",
        "I build for the model that'll exist six months from now. A system that can't adapt to better models goes out of date fast.",
      ],
    },
    {
      h: "Scoring, signals and noise",
      body: [
        "I use two scores instead of one, because fit and timing are different things and you act on them differently. Splitting them changed how I build scoring.",
      ],
      list: [
        "Firmographic score: the stuff that barely moves, like industry, headcount and location. It decides who's worth targeting at all.",
        "Signal score: the stuff that changes fast, like a new hire, a funding round, a pricing page visit or a new tool in their stack. It decides when to reach out.",
        "Signals should be weighted by where the buyer is. A pricing page visit isn't the same as a funding round, and a job post that names your category beats one that only hints at it.",
        "Job listings are underrated. The text gives away a lot of the roadmap: which tools, which regions, which projects. I could read them all day.",
        "Champion tracking is the pipeline I trust most. These are people who already liked your product and have just moved somewhere new.",
        "The best signals are usually ones you build yourself. If everyone in your market is watching the same thing, the prospect gets the same email from all of them.",
        "Noise kills a signal program. Send a rep ten unranked alerts a day and they'll stop opening the channel.",
      ],
    },
    {
      h: "Where AI GTM actually is",
      body: [
        "A lot of what gets sold as AI GTM is just more volume with better grammar. The parts that are actually new are narrower than the pitch, and those are the parts I care about.",
      ],
      list: [
        "AI SDRs solved drafting, but not trust. Tools like Artisan, 11x and AiSDR write a decent first email, and things go wrong when nobody reads it before it goes out. It's rarely the model's fault. Usually it's domain reputation, or personalization nobody asked for.",
        "Signals beat lists. Everyone has access to the same company data, so the edge left is timing: who changed something today. Athra, Common Room, UserGems and Fibbler are all going after this, and it's the same idea I build around.",
        "Deliverability is the real ceiling. Google and Yahoo's bulk sender rules, DMARC alignment, per-mailbox send limits. Good prompts can't save a burnt domain, so I sort out infrastructure before I touch copy.",
        "Answer engines are a GTM channel now. Buyers ask ChatGPT and Perplexity before they talk to a vendor, which is why Profound, Peec AI and Otterly exist. Getting cited there is starting to matter as much as getting shortlisted, and I find it a really fun problem.",
        "MCP is turning into the integration layer. One server an agent can read and write is a lot easier to work with than twelve tools with twelve APIs, and it's a big part of why this job has become a builder's job.",
        "I keep things deterministic where it matters: the LLM makes judgment calls, and code handles the numbers, like scores, timers and costs. A checker agent reviews the output before a human ever sees it.",
      ],
    },
    {
      h: "How I would run it",
      body: [
        "I'd set it up the same way whether the company sells to manufacturing plants or to security teams. The pattern repeats a lot more than people expect.",
      ],
      list: [
        "One warehouse as the source of truth. When the same number lives in two places, they drift apart and people stop trusting both.",
        "Every agent run leaves a record: input, output, model, cost, verdict and what the human decided. If I can't explain why a lead got contacted, I don't trust that lead.",
        "Nothing client-facing goes out on its own. Automation handles the volume, and a person makes the final call.",
        "Track show-ups and pipeline per unit of cost, not sends and opens.",
        "Every workflow ships with a runbook, so it keeps working after the person who built it moves on.",
      ],
    },
    {
      h: "How I run the numbers",
      body: [
        "At Gushwork I ran the kind of analytics a much bigger revenue team would, across fifteen SDRs and every call they made. \"The campaign feels slow\" doesn't tell you what to fix.",
      ],
      list: [
        "Track everything and define everything: dials, connects, conversations, meetings booked, shows, held. Each stage gets one written definition and an owner. Otherwise two people quote two different numbers and nobody believes either.",
        "Break it down by rep and by list, week over week. Who's improving, which list is bringing in pipeline, which script actually holds a conversation. These are the same cuts a big RevOps team makes, just at a size where I can act on them the same day.",
        "Own the numbers that matter, which for me were show-up rate and demos booked. Reminders and better pre-call context lifted shows, and better lists and scripts lifted bookings. More bookings lead to more pipeline. More activity on its own doesn't.",
        "One dashboard over the CRM, the dialer and the campaigns, so leadership and the floor are reading the same numbers. No vanity metrics, and no side spreadsheets.",
        "Change one thing at a time, keep the same list, compare the weeks and write down what happened. That way decisions come from the data and not from whoever's loudest in the room.",
      ],
    },
    {
      h: "What I think",
      body: [
        "A few beliefs I keep coming back to. They're mostly how I decide what to build and what to ignore.",
      ],
      list: [
        "Build things, don't just operate tools. The plumbing should be code, and the person should bring the judgment.",
        "Speed wins. Shorten the time from first touch to payment, and track the number that really moves, which is show-ups, not demos booked.",
        "Be honest about evidence. No fake personalization and no made-up numbers. The output should be predictable, and a human should sign off on it.",
        "Put your effort into the channel that's working. Ideas need data behind them, and there's no point rebuilding something that already runs.",
        "Make getting better a system. Plan first, write down the lesson every time I get corrected, and review the whole thing once a year.",
      ],
    },
    {
      h: "What lives in Clay, what lives in code",
      body: [
        "I've spent 200+ hours in Clay and could rebuild most of it in-house. The more useful question is what should live where, and for me data integrity decides that.",
      ],
      list: [
        "In Clay: anything that writes CRM data. Enrichment, scoring, waterfalls, list work. Keeping it in one platform means one system stays in charge and records don't split into duplicates.",
        "In code: everything custom. Agents, logic and small internal tools, versioned and tested in Claude Code and Railway, calling Clay's API when that helps.",
        "The CRM is where I draw the line. If a workflow writes to the record of truth, it lives where that record lives. If it only reads and drafts, it can live in code.",
        "Nothing loses a team's trust faster than two versions of the same customer, so I stick to this split every time.",
      ],
    },
    {
      h: "What I work with",
      body: [
        "The stack changes as the work changes, but this is what's open on my machine right now.",
      ],
      list: [
        "Agents and code: Claude Code, opencode, Codex, Cursor, Grok CLI, Ollama, whisper.cpp, Playwright.",
        "GTM: Clay, Apollo, LinkedIn Sales Navigator, Apify, HubSpot, Smartlead, HeyReach, Instantly.",
        "Data and build: Python, Next.js, PostgreSQL and Supabase, Prisma, n8n for jobs that need to run with the laptop closed, and Railway for the things I ship.",
      ],
    },
    {
      h: "Off the clock",
      body: [
        "Guitar (slowly working through JustinGuitar's Grade 1), martial arts, and a light biohacking habit: nootropics, 40Hz focus experiments, whatever rabbit hole I'm down that week. I read Paul Graham, Kevin Kelly and Steph Ango, and probably more science fiction than is good for me. Games on rotation are Cyberpunk 2077, Zelda BOTW, Persona 5, and Catan with anyone who'll sit still long enough. Once a year I go through the same forty questions to decide what to change next, with a longer set every decade. It's the same habit I use for GTM systems, just pointed at my own life.",
      ],
    },
  ],
};

export const closer = {
  statement: "People move. I build the systems that catch them.",
  sub: "Built, run, and documented - all of it mine. If any of it is useful, say hello.",
};
