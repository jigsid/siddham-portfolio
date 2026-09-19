export const profile = {
  name: "Siddham Mishra",
  role: "GTM Engineer",
  roleDetail: "revenue systems, built and run",
  sub: "Growth engineer working where systems meet revenue. Clay, outbound infrastructure, and AI automation - all of it running in production.",
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
    "I'm a technical person who fell for marketing - I started out writing code, and go-to-market turned out to be the sweet spot: systems thinking on one side, people on the other.",
    "I do my best work alongside people sharper than me, in places that would rather bet on me than half-watch me. Off the clock: guitar, martial arts, and an annual 40-question review that decides what I change next.",
  ],
  pull: "Anything I do twice by hand is a bug against my own tooling, not a good week.",
};

export const experience = [
  {
    slug: "capvance",
    company: "Capvance",
    role: "Growth Engineer",
    summary: "Internal tools and outreach systems for an investment-banking GTM motion.",
    points: [
      "Built AI-powered internal tools and React dashboards that put pipeline, campaigns and CRM data on one operating surface.",
      "Designed lead-list scoring and validation pipelines, then ran multi-channel email and LinkedIn sequences with high-volume, cost-optimized personalization.",
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
        "RE - Capvance Outreach: 2,376 sent, 95 replies at 8.42%, 52 of them positive. Above-average reply rate while holding deliverability - exactly what the page behind these screenshots says.",
    },
    detail: {
      intro:
        "Investment banking go-to-market: sell-side and buy-side mandates. My job was to make the pipeline legible and make outreach cheap at volume.",
      blocks: [
        {
          h: "The problem",
          body: [
            "Deal teams were working off spreadsheets and memory. Lists went stale, personalization was manual, and nobody could answer the only question that mattered: which campaign produced which conversation.",
          ],
        },
        {
          h: "What I built",
          body: [
            "AI-powered internal tools and React dashboards sitting on top of CRM data - pipeline tracking, campaign orchestration, and operational analytics in one surface.",
          ],
          list: [
            "Lead-list scoring and validation pipelines, with a written reason attached to every score.",
            "Multi-channel email and LinkedIn sequences with high-volume, cost-optimized personalization.",
            "M&A and competitor acquisition-signal pipelines, plus Crunchbase scrapers for the long tail.",
            "A personalization agent that drafts from the account's own record instead of mail-merge fields.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Sources first - Crunchbase, Apollo, LinkedIn - then dedupe and validation before anything entered the CRM. Records were enriched and scored, and only what cleared the bar moved into a sequence. Sequences branched by signal type, so a company that had just announced a deal did not get the same opener as one that had simply gone quiet.",
            "Replies were routed the moment they landed, and every step wrote back to the CRM so the dashboards stayed honest instead of becoming a second, prettier spreadsheet.",
          ],
        },
        {
          h: "What came out",
          body: [
            "The flagship campaign ran 2,376 sends with 95 replies at 8.42%, 52 of them positive - above-average reply rate while holding deliverability. More useful than the number: the dashboards became the surface the team worked from daily, and the scoring model shipped documented so it survived me.",
          ],
        },
      ],
      stack: "Clay · HubSpot · Smartlead · HeyReach · React · Next.js · Python · Claude Code · OpenRouter",
    },
  },
  {
    slug: "gushwork",
    company: "Gushwork",
    role: "Growth Engineer",
    summary: "Scaled outbound from zero for a $20M-funded company.",
    points: [
      "Built the automation spine across HubSpot, Clay, Smartlead and internal APIs, scaling outbound from 800 to 10,000 emails a day depending on the TAM and where the business was.",
      "Built and ran the cold-call system for 15 SDRs and 2 AEs across JustCall, SalesDialer, Clay and HubSpot, plus Slack automations that turned SDR requests into shipped tooling.",
      "Ran analytics across every call, list and rep - show-up rate and demos booked were the numbers I owned, and both moved.",
    ],
    proof: {
      kind: "image",
      images: [{ src: "/proofs/gushwork-proof.webp", width: 1100, height: 666 }],
      trigger: "Show me the proof",
      title: "100+ demos booked off my calling data",
      caption:
        "I built the backend system behind the SDR calling data. The team went on to book 100+ demos and scale past 30 a week - this is the post that announced it, with my name on the crew.",
    },
    detail: {
      intro:
        "A $20M-funded company starting outbound from zero. I owned the data layer, the calling system and the analytics that 15 SDRs and 2 AEs worked from every day.",
      blocks: [
        {
          h: "The problem",
          body: [
            "There was no system. SDRs built their own lists, dialed from whatever they had, and logged outcomes when they remembered. Nothing downstream could be trusted because nothing upstream was consistent.",
          ],
        },
        {
          h: "What I built",
          body: [
            "The automation spine across HubSpot, Clay, Smartlead and internal APIs - and the tooling around it that made the spine usable by fifteen people at once.",
          ],
          list: [
            "Enrichment pipelines: list building, dedupe, waterfalls, validation - 200+ hours in Clay alone, enough that I can rebuild most of it in-house.",
            "Campaign automation that scaled from 800 emails a day to 10,000 when the TAM and the business called for it - roughly 300k a month at peak.",
            "LinkedIn campaigns across 8 sending accounts - about 10k connection requests to date - run alongside email.",
            "The cold-call system: JustCall and SalesDialer wired to Clay and HubSpot, with the next account's context pre-staged before the current call ended.",
            "Slack automations that fired on reply in seconds, because a positive answer is worth most in its first five minutes.",
            "Slack request channels where SDRs and other teams filed asks and got tooling back instead of tickets.",
            "Analytics on every dial, list and rep - show-ups and demos booked included - plus SDR onboarding and daily troubleshooting.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Every record moved the same way: source, dedupe, enrich, score, tier, then into a sequence or a dial block. Dispositions wrote to the CRM in the same second the call ended - there was no 'I'll log it later,' because later is where pipeline truth goes to die.",
            "Replies hit Slack instantly with the account attached, so the rep answered inside minutes rather than at end of day - in the channel the team already lived in.",
            "Where a workflow lived was a decision, not a default. Anything that writes to the CRM stayed inside Clay - enrichment, scoring, waterfalls - so one system keeps the record authoritative and nothing forks. Everything custom - agents, logic, small internal tools - I built in Claude Code and shipped on Railway, versioned and testable, calling Clay's API where it helped.",
          ],
        },
        {
          h: "Running the numbers",
          body: [
            "I instrumented the whole motion - fifteen SDRs, every call, every list, every campaign - and ran it the way a revenue org several times the size would. Same math, smaller company, and I could act on what it said the same day.",
          ],
          list: [
            "One definition per stage - dials, connects, conversations, meetings booked, shows, held - written down and owned. A number with two meanings is not a number.",
            "Cuts per rep and per list, week over week: who was improving, which list carried pipeline, which script actually held a conversation.",
            "The two numbers I owned: show-up rate and demos booked. Reminder cadences and pre-call context moved shows; list and talk-track iteration moved bookings - and a booked demo nobody attends is not a result.",
            "One dashboard over CRM, dialer and campaign data, so leadership and the floor read the same truth.",
            "Every test changed one variable and every result was written down - that discipline is most of what 'data-driven' actually means.",
          ],
        },
        {
          h: "What came out",
          body: [
            "Outbound went from nothing to 300k emails a month, and the team booked 100+ demos in a quarter off the calling data I built. Fifteen SDRs ran on one system instead of fifteen spreadsheets, and show-up rate and total demos booked both climbed as volume scaled - the analytics said where to push, and we pushed there.",
          ],
        },
      ],
      stack: "HubSpot · Clay · Smartlead · JustCall · SalesDialer · Slack · Python · n8n · Claude Code · Railway",
    },
  },
  {
    slug: "conek",
    company: "Conek",
    role: "Growth Engineer",
    summary: "Client-acquisition machinery for an agency, built per client.",
    points: [
      "Built client funnels, forms, calendars and CRM workflows in GoHighLevel, plus the dashboards tracking lead quality, appointments and conversion.",
      "Shipped an agent that builds landing pages, and automated onboarding with SMS and email sequences for each client's accounts.",
    ],
    proof: null,
    detail: {
      intro:
        "Agency work: the same acquisition problem, rebuilt per client. This is where I learned that a system you can re-deploy beats a system that is clever.",
      blocks: [
        {
          h: "What I built",
          body: [
            "Funnels, forms, calendars and CRM workflows in GoHighLevel, with n8n stitching in Facebook Lead Ads and whatever else the client was already paying for.",
          ],
          list: [
            "Dashboards tracking lead quality, appointments and conversion - so 'is this working' had an answer.",
            "An agent that assembles landing pages on request, which removed the slowest step in onboarding.",
            "Onboarding flows: SMS and email sequences fired per client account, automatically.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Each client got the same skeleton - capture, qualify, route, follow up - with the pieces swapped for their channels. Because the shape stayed constant, the dashboards stayed comparable, and a new client stopped being a new project.",
          ],
        },
        {
          h: "What it taught me",
          body: [
            "Volume work is where systems pay. The second client took a fraction of the first one's effort, and by the fourth the only genuinely new work was the offer.",
          ],
        },
      ],
      stack: "GoHighLevel · n8n · Facebook Lead Ads · Make · dashboards",
    },
  },
  {
    slug: "holisticon",
    company: "Holisticon",
    role: "Frontend Developer, contract",
    summary: "Frontend work inside an engineering team.",
    points: [
      "Designed and shipped frontend components against a pre-built unit-test suite, resolving bugs across the product.",
    ],
    proof: null,
    detail: {
      intro:
        "My first seat inside a real engineering team - before GTM, before Clay, when 'shipping' meant someone else had already written the tests.",
      blocks: [
        {
          h: "What I did",
          body: [
            "React components built against a pre-existing unit-test suite, plus a long stretch of bug backlog cleanup across the product.",
          ],
        },
        {
          h: "What it taught me",
          body: [
            "Tests are a spec written by someone who thought harder than you did. Working inside them taught me to design for the contract rather than the happy path - the same instinct I now apply to pipelines, where the contract is the schema and the happy path is a lie.",
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
            "The widget answers from the business's own content, captures the lead while the conversation is warm, and hands off to a human the moment a person is needed. It books appointments, takes payment through Stripe, runs email campaigns, and can take the conversation to voice.",
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
        "An Instagram automation product: connect an account, define what to listen for, and it answers - instantly, or by holding a real conversation.",
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
            "Meta's webhook contract, not the AI. Signature verification, retries, duplicate deliveries, and per-account rate limits all have to be handled - so every event is idempotent, and a redelivered webhook never sends a second DM. Get that wrong and the product annoys the customer's customers.",
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
      body: "MCP servers wrapping internal APIs, agents that watch for movement and draft the first touch. A human still presses send - that is the point.",
    },
    {
      title: "A personal brain",
      body: "Everything I learn, read and decide lands in an Obsidian system wired to Claude Code, so context compounds instead of leaking.",
    },
    {
      title: "Autonomous GTM systems",
      body: "Claude Code and MCP servers running the whole loop - signals in, enrichment, drafts out, everything logged for review. Built to operate, not to demo.",
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
      body: "Email, LinkedIn, and calls - branched by signal type, not by template.",
      tools: "Smartlead · HeyReach · JustCall · SalesDialer",
    },
    {
      n: "04",
      title: "Draft with AI",
      body: "Personalization that stays cheap at volume. A human still presses send.",
      tools: "Claude Code · OpenRouter · MCP",
    },
  ],
};

export const more = {
  intro:
    "What I'm building, what I think, and what's going on in my head while I do it. Updated when something actually changes.",
  sections: [
    {
      h: "What I'm working on",
      body: [
        "Signal-based GTM is the thread everything else hangs off: instead of guessing who to contact, watch for movement and react while it still matters.",
      ],
      list: [
        "MCP servers wrapping internal APIs, so agents can read and write the warehouse, the CRM and the dialer through one interface.",
        "Agents that watch for a trigger, enrich it, score it, and draft the first touch. A human still presses send - that is the point.",
        "A personal brain: everything I learn, read and decide lands in an Obsidian vault wired to Claude Code and opencode, so context compounds instead of leaking.",
        "Deterministic engines where accuracy matters. allie-events-engine is the one I shipped as proof - Python, six Claude Code skills, seventeen passing tests.",
      ],
    },
    {
      h: "How I think about a system",
      body: [
        "Every GTM system I have built has the same shape: source, enrich, reason, act. Only one part is genuinely new - the reasoning layer - and that is the reason these systems are worth building now.",
      ],
      list: [
        "Source: a data provider, the CRM, inbound, or product usage. Something has to tell you who to look at.",
        "Enrich and orchestrate: fill the gaps, then structure the data so it is usable downstream.",
        "Reason: a model reads the aggregate and makes inferences you could never encode in a formula.",
        "Act: a Slack message, a sequence, a CRM update. Delivered where the rep already works.",
        "Adoption is the real failure mode. A system nobody uses is worse than no system, so the output has to be spoon-fed, not discovered.",
        "Build for the model six months from now. If a system is not flexible, it is already on the clock.",
      ],
    },
    {
      h: "Scoring, signals and noise",
      body: [
        "Two scores, not one. Fit and timing are different facts, and they get acted on differently.",
      ],
      list: [
        "Firmographic score: the things that barely move - industry, headcount, location. Used for tiering.",
        "Signal score: the things that change fast - a hire, a funding round, a pricing-page visit, a new tool in the stack. Used for triggering.",
        "Weight by funnel position. A pricing-page visit is not equivalent to a funding announcement, and a job listing that names your category beats one that merely implies it.",
        "Job listings are underrated. The text leaks the roadmap: which tools, which regions, which initiatives.",
        "Champion tracking is the cheapest pipeline there is - people who already liked you, landing somewhere new.",
        "Custom signals carry the alpha. If everyone in your market uses the same signal, nobody gets a reply.",
        "Noise kills signal programs. Ten unweighted alerts a day and the rep stops opening the channel.",
      ],
    },
    {
      h: "Where AI GTM actually is",
      body: [
        "Most of what is sold as AI GTM is volume with better grammar. The parts that are genuinely new are narrower than the pitch, and they are the parts I care about.",
      ],
      list: [
        "AI SDRs solved drafting, not trust. Tools like Artisan, 11x and AiSDR are good at a competent first touch and dangerous when nobody reads it. The failure mode is rarely the model - it is domain reputation and personalization that no recipient asked for.",
        "Signals beat lists. Everyone has the same firmographic data, so the only edge left is timing: who moved today. Athra, Common Room, UserGems and Fibbler are all chasing that, and it is the same thesis I build against.",
        "Deliverability is the real ceiling. Google and Yahoo bulk-sender rules, DMARC alignment, per-mailbox send ceilings. You cannot out-prompt a burnt domain, so the infrastructure comes before the copy.",
        "Answer engines are a GTM channel now. Buyers ask ChatGPT and Perplexity before they ask a vendor, which is why Profound, Peec AI and Otterly exist. Being cited is the new being shortlisted.",
        "MCP is becoming the integration layer. One server an agent can read and write is cheaper than twelve tools with twelve APIs, and it is the reason this job turned into a builder's job.",
        "Deterministic where it matters. LLM for judgment, code for arithmetic: scores, clocks, costs. A verifier agent checks the output before a human ever sees it.",
      ],
    },
    {
      h: "How I would run it",
      body: [
        "The same shape every time, whether the company sells to plants or to security teams.",
      ],
      list: [
        "One warehouse as the source of truth. If a number lives in two places, one of them is wrong.",
        "Every agent run writes an audit row: input, output, model, cost, verdict, human decision. If I cannot explain why a lead got sequenced, I do not trust the lead.",
        "Nothing client-facing auto-sends. Automation buys volume; judgment is the last mile.",
        "Instrument around show-ups and pipeline per unit of cost, not sends and opens.",
        "Every workflow ships with a runbook, so it survives the person who built it.",
      ],
    },
    {
      h: "How I run the numbers",
      body: [
        "The analytics a much larger revenue org runs on its floor, pointed at fifteen SDRs and every call they made - because 'the campaign feels slow' is not a diagnosis.",
      ],
      list: [
        "Instrument everything, define everything: dials, connects, conversations, meetings booked, shows, held. One definition per stage, written down with an owner - otherwise two people quote two numbers and trust neither.",
        "Analyze per rep and per list, week over week. Who is improving, which list carries pipeline, which talk track holds a conversation - the same cuts an enterprise RevOps team makes, at a scale where I can act on them the same day.",
        "Own the numbers that matter: show-up rate and demos booked. Reminder cadences and pre-call context move shows; list and script iteration move bookings. Total demos booked is the output that compounds, not the activity that feels busy.",
        "One dashboard over the CRM, the dialer and the campaigns, so leadership and the floor read the same truth. No hero numbers, no orphaned spreadsheets.",
        "One variable per change, the list held constant, weeks compared as cohorts, the result written down. Decisions start from facts instead of the loudest claim in the room.",
      ],
    },
    {
      h: "What I think",
      body: [
        "A few things I keep coming back to. They are how I decide what to build and what to ignore.",
      ],
      list: [
        "Builder, not doer. The integration layer should be code, and the human should be judgment.",
        "Speed is the moat. Compress first touch to payment, and instrument around the number that actually moves - show-ups, not demos booked.",
        "Honest evidence. No fake personalization, no invented numbers. Deterministic output a human approves.",
        "Concentrate on the channel that works. Assumptions need data behind them, and do not reinvent a wheel that is already turning.",
        "Systematize self-improvement. Plan first, capture the lesson after every correction, and review the whole thing once a year.",
      ],
    },
    {
      h: "What lives in Clay, what lives in code",
      body: [
        "200+ hours inside Clay, and I can rebuild most of it in-house. The more useful question is not whether I can - it is what should live where. Data integrity decides.",
      ],
      list: [
        "Inside Clay: anything that writes CRM data. Enrichment, scoring, waterfalls, list operations - it stays in the platform so one system keeps the record authoritative and nothing forks.",
        "In code: everything custom. Agents, logic, small internal tools - Claude Code and Railway, versioned and testable, calling Clay's API where it helps.",
        "The line is the CRM. A workflow that writes to the record of truth lives where the record lives; one that only reads and drafts can live in code.",
        "Two versions of the same customer is the fastest way to lose a team's trust, so the split is a rule, not a preference.",
      ],
    },
    {
      h: "What I work with",
      body: [
        "The stack changes as the job changes, but this is what is actually open on my machine.",
      ],
      list: [
        "Agents and code: Claude Code, opencode, Codex, Cursor, Grok CLI, Ollama, whisper.cpp, Playwright.",
        "GTM: Clay, Apollo, LinkedIn Sales Navigator, Apify, HubSpot, Smartlead, HeyReach, Instantly.",
        "Data and build: Python, Next.js, PostgreSQL and Supabase, Prisma, n8n when a job has to run with the laptop closed, Railway for the things I ship.",
      ],
    },
    {
      h: "Off the clock",
      body: [
        "Guitar, martial arts, and the reading that keeps me honest - Paul Graham, Kevin Kelly, Steph Ango, and more science fiction than is probably good for me. Every year I sit down with the same forty questions and decide what changes next.",
      ],
    },
  ],
};

export const closer = {
  statement: "People move. I build the systems that catch them.",
  sub: "Built, run, and documented - all of it mine. If any of it is useful, say hello.",
};
