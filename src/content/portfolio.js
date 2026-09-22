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
        "I worked on investment banking go-to-market, sell-side and buy-side mandates. My job was to make the pipeline readable and get outreach performing at volume.",
      blocks: [
        {
          h: "The problem",
          body: [
            "The deal teams worked out of spreadsheets and memory. Lists went stale, personalization was all manual, and nobody could say which campaign produced which conversation.",
          ],
        },
        {
          h: "What I built",
          body: [
            "The internal tooling: AI-assisted tools and React dashboards on top of our CRM data. Pipeline tracking, campaign orchestration and the analytics the team opened every day.",
          ],
          list: [
            "Lead-list scoring and validation pipelines, with a written reason behind every score.",
            "Email and LinkedIn sequences run side by side, with personalization that stayed cheap at volume.",
            "Signal pipelines for M&A and competitor acquisitions, built off government filings, plus Crunchbase scrapers for the companies those miss.",
            "A personalization agent that wrote from what we knew about an account rather than from mail-merge fields.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Everything started with the source - government filings, Crunchbase, Apollo, LinkedIn - then went through Clay for waterfall enrichment, dedupe and validation before it was allowed near the CRM. Only records that cleared the scoring bar went into a sequence, and sequences branched on signal type, so a company that had just announced a deal got a different opener than one that had gone quiet.",
            "Replies got routed as soon as they landed, and every step wrote back to the CRM. That kept the dashboards accurate instead of turning them into a second, prettier version of the truth.",
          ],
        },
        {
          h: "What came out",
          body: [],
          list: [
            "Flagship campaign: 2,376 sends, 95 replies (8.42%), 52 of them positive - bounces under 1%.",
            "Volume campaigns: 4,000+ sends each, still landing 6-10% reply rates.",
            "LinkedIn: 356 HeyReach requests, 51% accepted, 62% of messages answered.",
            "PlusVibe: 18,000+ leads contacted at a 1.7% bounce rate.",
            "The dashboards ended up in the team's daily routine, and the scoring model shipped with documentation so it kept working after I left.",
          ],
        },
      ],
    },
  },
  {
    slug: "gushwork",
    company: "Gushwork",
    role: "Growth Engineer",
    summary: "Built outbound from zero, and handled everything the 15-person SDR floor needed - onboarding, fixes and a lot.",
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
        "When I joined, outbound was starting from scratch. I built the email, calling and data layer that 15 SDRs and 2 AEs worked from, and dealt with everything else the floor ran into - onboarding new hires, fixing whatever broke mid-day.",
      blocks: [
        {
          h: "The problem",
          body: [
            "The problem was not the reps. The system was basic and not optimized for scale - fine for a small team, with no room for the volume the business was heading toward.",
          ],
        },
        {
          h: "What I built",
          body: [
            "I built the outbound engine - email, calling and the data underneath both - plus the n8n and Slack layer that made it usable by the whole floor.",
          ],
          list: [
            "Calling data handled end to end in Clay: list building, dedupe, waterfall enrichment, validation. Enough depth that I could rebuild most of it outside the tool.",
            "Email taken from zero: I set up the domains and mailboxes for 10,000 sends a day of volume, wrote the copy, managed deliverability and domain reputation, built the lead lists, and scaled when the market called for it, about 300k a month at peak. I built the dashboards for it too.",
            "LinkedIn outreach to the same ICPs, running next to email and calls instead of on its own.",
            "The cold-call system: JustCall and SalesDialer connected to Clay and HubSpot, with the next account's info ready before the current call ended.",
            "All of our n8n: fixing bugs, extending workflows, building new ones as needs came in. JavaScript and JSON did the glue work, and the important stuff posted into Slack - demos as they were booked, enrichment handed to SDRs in the channel they were already working in.",
            "Python for scraping and the one-off automations that come up constantly, plus the supporting tools - FullEnrich, LeadMagic, Apollo, Zapmail, Namecheap, scraping extensions.",
            "I was also part of the other side of growth: the company newsletter and influencer outreach.",
            "Outside the tooling, I onboarded new SDRs, answered whatever technical questions came up, and handled the call and sales ops that kept the reps dialing. One person to ask instead of a ticket queue.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Every record went through the same steps - source, dedupe, enrich, score, tier - and then into a sequence or a call block. Dispositions went into HubSpot as the call ended. Log it later and it never gets logged right.",
            "When an SDR booked a demo, the prospect immediately got an email showing what the product would do for them, sent from our in-house tools, and it moved the show-up rate. Give someone something useful for free and they tend to show up. That is also why we switched the main metric from demos booked to show-ups: a demo nobody attends is not a result.",
            "n8n did the orchestration and I owned all of it, fixing and extending workflows as needs surfaced, usually the same day. Everything reported into Slack. Python handled the scraping and the small temporary automations that did not deserve a full workflow.",
          ],
        },
        {
          h: "Running the numbers",
          body: [
            "I put tracking on everything - all fifteen SDRs, every call, list and campaign - and ran the analytics the way a bigger revenue org would, not the way a team this size usually does. The default setup at this scale is a CRM dashboard counting demos booked, plus activity numbers nobody has defined. I sat in on the CEO's meetings with the data analytics team and brought that thinking down to the dialer: every test had a hypothesis, and every result led to one of two decisions, keep going or kill it.",
          ],
          list: [
            "Different metrics for different channels - calling and cold email do not succeed on the same numbers - and we picked them before the test ran, not after.",
            "One agreed definition for every stage: dials, connects, conversations, meetings booked, shows, held. If a number means two different things, it is not a number.",
            "Week-over-week numbers per rep and per list, so we could see who was improving, which lists were carrying pipeline, and which scripts held up in real conversations.",
            "The two numbers I was responsible for, show-up rate and demos booked, both went up. Reminders and better pre-call context lifted shows; better lists and talk tracks lifted bookings.",
            "One dashboard over the CRM, the dialer and the campaigns, so management and the reps looked at the same numbers instead of arguing over different spreadsheets.",
          ],
        },
        {
          h: "What came out",
          body: [
            "The core build was the cold-calling infrastructure - the data layer 15 SDRs and 2 AEs dialed from, wired into JustCall, SalesDialer, Clay and HubSpot - and the team booked 100+ demos in a quarter on it. Email went from zero to 300k sends a month, and the analytics told us where to push: show-up rate and demos booked both climbed as volume scaled. The rest: fifteen SDRs on one system instead of fifteen spreadsheets, and a few product features I suggested from the floor that shipped.",
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
    "What I'm building, what I think, and what I'm learning as I go. I update this when something changes, which is most weeks.",
  sections: [
    {
      h: "What I'm working on",
      body: [
        "Signal-based GTM is my main project, and the most fun I have had building anything. Instead of guessing who to contact, you watch for changes and reach out while they still matter.",
      ],
      list: [
        "MCP servers that wrap our internal APIs, so agents can read and write the warehouse, the CRM and the dialer through one interface. The first time an agent updated the CRM on its own, it felt like cheating.",
        "Agents that watch for a trigger, enrich it, score it, and draft the first message. The send button stays with a human, and that is what keeps the output trustworthy.",
        "A personal brain: everything I learn, read and decide goes into this vault, connected to Claude Code and opencode, so I keep my context instead of losing it. It has changed how I think.",
        "Deterministic engines where accuracy matters. allie-events-engine is the one I shipped as proof: Python, six Claude Code skills, seventeen passing tests.",
      ],
    },
    {
      h: "Harness, AI skills and orchestration",
      body: [
        "The same three ideas sit under most of what I build: put the knowledge in files, give the agent real tools, then split the work across agents and check the output.",
      ],
      list: [
        "Harness: Hormozi Harness started as a map of everything Alex Hormozi has posted online - 7 modules, 55 frameworks, 200 rules - and now runs locally as an advisor. Three layers: a skill that loads the voice and routes the question, an MCP server with real tools (offer scoring, offer audit, money math, framework lookup, vault reading and writing), and the framework notes themselves in my vault. It triggers on its own when the task is about offers, leads, pricing or sales.",
        "AI skills: I write down how I work as skills that an agent loads when a task matches. Writing rules, research steps, review checks. When I fix a mistake, the fix goes into a skill so it stays fixed. Around forty live in my archive and load on demand, not all at once.",
        "Orchestration: agents run the work as a team. One plans and splits the job, others build, and a checker reviews the output before anything ships. Claude Code subagents and MCP servers do most of it, with Orca for longer multi-agent runs, and every run leaves a record I can read.",
      ],
    },
    {
      h: "How I think about a system",
      body: [
        "Every GTM system I have built has the same shape: source, enrich, reason, act. The idea is simple, but the reasoning part is new, and that is why these systems are worth building now.",
      ],
      list: [
        "Source: a data provider, the CRM, inbound, or product usage. Something has to tell you who to look at.",
        "Enrich: fill in the gaps, then shape the data so the next step can use it.",
        "Reason: a model reads everything together and makes connections you could never write as a formula. This is my favourite part to build.",
        "Act: a Slack message, a sequence, a CRM update. Delivered where the rep already works.",
        "The real failure is when nobody uses it. A system nobody opens is worse than no system, so the output has to land in front of the rep, not wait to be found.",
        "Build for the model that will exist six months from now. If a system cannot adapt, it is already out of date.",
      ],
    },
    {
      h: "Scoring, signals and noise",
      body: [
        "Two scores, not one. Fit and timing are different things, and you act on them differently. Separating them changed how I build scoring.",
      ],
      list: [
        "Firmographic score: the things that barely move - industry, headcount, location. Used to decide who is worth targeting.",
        "Signal score: the things that change fast - a hire, a funding round, a pricing-page visit, a new tool in the stack. Used to decide when to reach out.",
        "Weight signals by where the buyer is. A pricing-page visit is not the same as a funding round, and a job post that names your category beats one that only hints at it.",
        "Job listings are underrated. The text gives away the roadmap: which tools, which regions, which projects. I could read them all day.",
        "Champion tracking is the pipeline I trust most: people who already liked your product, now working somewhere new.",
        "The best signals are the ones you build yourself. If everyone in your market watches the same thing, nobody gets a reply.",
        "Too much noise kills a signal program. Ten alerts a day with no ranking, and the rep stops opening the channel.",
      ],
    },
    {
      h: "Where AI GTM actually is",
      body: [
        "Most of what is sold as AI GTM is volume with better grammar. The genuinely new parts are narrower than the pitch, and they are the parts I care about.",
      ],
      list: [
        "AI SDRs solved drafting, not trust. Tools like Artisan, 11x and AiSDR write a solid first email, but it goes wrong when nobody reads it first. The problem is rarely the model. It is domain reputation and personalization nobody asked for.",
        "Signals beat lists. Everyone has the same company data, so the only edge left is timing: who moved today. Athra, Common Room, UserGems and Fibbler all chase this, and it is the same idea I build against.",
        "Deliverability is the real limit. Google and Yahoo bulk-sender rules, DMARC alignment, send limits per mailbox. No amount of good prompting fixes a burnt domain, so infrastructure comes before copy.",
        "Answer engines are a GTM channel now. Buyers ask ChatGPT and Perplexity before they ask a vendor, which is why Profound, Peec AI and Otterly exist. Getting cited is the new getting shortlisted, and it is a fun problem to work on.",
        "MCP is becoming the integration layer. One server an agent can read and write beats twelve tools with twelve APIs, and it is why this job turned into a builder's job.",
        "Deterministic where it matters. LLM for judgment, code for numbers: scores, clocks, costs. A checker agent reviews the output before a human ever sees it.",
      ],
    },
    {
      h: "How I would run it",
      body: [
        "Same shape every time, whether the company sells to plants or to security teams. Once you see the pattern, you cannot unsee it.",
      ],
      list: [
        "One warehouse as the source of truth. If a number lives in two places, one of them is wrong.",
        "Every agent run leaves a record: input, output, model, cost, verdict, and what the human decided. If I cannot explain why a lead got contacted, I do not trust the lead.",
        "Nothing client-facing sends on its own. Automation handles volume; a human makes the final call.",
        "Track show-ups and pipeline per unit of cost, not sends and opens.",
        "Every workflow ships with a runbook, so it survives the person who built it.",
      ],
    },
    {
      h: "How I run the numbers",
      body: [
        "This is the kind of analytics a much bigger revenue team runs, pointed at fifteen SDRs and every call they made, because 'the campaign feels slow' is not a diagnosis.",
      ],
      list: [
        "Track everything, define everything: dials, connects, conversations, meetings booked, shows, held. One definition per stage, written down with an owner, or two people quote two numbers and trust neither.",
        "Break it down per rep and per list, week over week. Who is improving, which list brings pipeline, which script holds a conversation. The same cuts a big RevOps team makes, at a scale where I can act on them the same day.",
        "Own the numbers that matter: show-up rate and demos booked. Reminders and better pre-call context lift shows; better lists and scripts lift bookings. Bookings build on themselves; activity does not.",
        "One dashboard over the CRM, the dialer and the campaigns, so leadership and the floor read the same numbers. No vanity metrics, no stray spreadsheets.",
        "One change at a time, same list, weeks compared, result written down. Decisions start from facts instead of whoever is loudest in the room.",
      ],
    },
    {
      h: "What I think",
      body: [
        "A few things I keep coming back to. They are how I decide what to build and what to ignore.",
      ],
      list: [
        "Build, do not just run the tools. The plumbing should be code; the human should bring judgment.",
        "Speed wins. Shorten the time from first touch to payment, and track the number that actually moves: show-ups, not demos booked.",
        "Honest evidence. No fake personalization, no invented numbers. Deterministic output a human approves.",
        "Focus on the channel that works. Ideas need data behind them, and do not rebuild something that already runs.",
        "Systematize getting better. Plan first, write down the lesson after every correction, and review the whole thing once a year.",
      ],
    },
    {
      h: "What lives in Clay, what lives in code",
      body: [
        "200+ hours inside Clay, and I can rebuild most of it in-house. The more useful question is not whether I can, but what should live where. Data integrity decides.",
      ],
      list: [
        "In Clay: anything that writes CRM data. Enrichment, scoring, waterfalls, list work. It stays in the platform so one system stays authoritative and records do not split.",
        "In code: everything custom. Agents, logic, small internal tools, versioned and testable in Claude Code and Railway, calling Clay's API where it helps.",
        "The line is the CRM. A workflow that writes to the record of truth lives where the record lives; one that only reads and drafts can live in code.",
        "Two versions of the same customer is the fastest way to lose a team's trust, so the split is a rule, not a preference.",
      ],
    },
    {
      h: "What I work with",
      body: [
        "The stack changes as the job changes, but this is what is open on my machine.",
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
        "Guitar, slowly working through JustinGuitar's Grade 1, plus martial arts and a light biohacking habit: nootropics, 40Hz focus experiments, whatever rabbit hole is open that week. I read Paul Graham, Kevin Kelly and Steph Ango, and more science fiction than is probably good for me. Games on rotation: Cyberpunk 2077, Zelda BOTW, Persona 5, and Catan with anyone who will sit still. Once a year I sit down with the same forty questions to decide what changes next, with a longer set every decade: the same system instinct, pointed at my own life.",
      ],
    },
  ],
};

export const closer = {
  statement: "People move. I build the systems that catch them.",
  sub: "Built, run, and documented - all of it mine. If any of it is useful, say hello.",
};
