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
      "Built AI tools and React dashboards so pipeline, campaigns and CRM data all lived in one place.",
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
        "RE - Capvance Outreach: 2,376 sent, 95 replies (8.42%), 52 of them positive. An above-average reply rate without hurting deliverability.",
    },
    detail: {
      intro:
        "I worked on investment banking go-to-market, sell-side and buy-side mandates. My job was to make the pipeline readable and get outreach performing at volume.",
      blocks: [
        {
          h: "The problem",
          body: [
            "The deal teams worked out of spreadsheets and memory. Lists went stale, personalization was all manual, and nobody could really say which campaign produced which conversation.",
          ],
        },
        {
          h: "What I built",
          body: [
            "The internal tooling: AI-assisted tools and React dashboards on top of our CRM data, covering pipeline tracking, campaign orchestration and the analytics we used every day.",
          ],
          list: [
            "Lead-list scoring and validation pipelines, where every score came with a reason written down.",
            "Email and LinkedIn sequences run side by side, with personalization that scaled without the cost running away.",
            "Signal pipelines for M&A and competitor acquisitions, built off government filings, plus Crunchbase scrapers for the companies those miss.",
            "A personalization agent that wrote from what we actually knew about an account, not mail-merge fields.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Everything started with the source - government filings, Crunchbase, Apollo, LinkedIn - then went through Clay for waterfall enrichment, dedupe and validation before it was allowed near the CRM. Only records that cleared the scoring bar went into a sequence, and sequences branched on signal type, so a company that had just announced a deal got a different opener than one that had gone quiet.",
            "Replies got routed as soon as they landed, and every step wrote back to the CRM so the dashboards stayed accurate instead of turning into a second, prettier version of the truth.",
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
            "The dashboards became part of the team's daily routine, and the scoring model shipped documented so it kept working after I left.",
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
    summary: "Built outbound from zero at a $20M-funded company, and handled everything the 15-person SDR floor needed - onboarding, fixes, the lot.",
    points: [
      "Took cold email from zero to 300k sends a month, ran the cold-call system for 15 SDRs and 2 AEs, and kept LinkedIn outreach going alongside both, all on calling data I handled end to end in Clay.",
      "Owned all of our n8n work - fixing what broke, building what was needed, with everything posting into Slack - plus the Python scrapers and enrichment tools (FullEnrich, LeadMagic, Apollo) behind the data.",
      "Was the person the floor came to: I onboarded new SDRs, answered their technical questions, and ran the call and sales ops. We measured show-up rate, not just demos booked.",
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
        "When I joined, the company had raised $20M and outbound was basically starting from scratch. I built the email, calling and data layer that 15 SDRs and 2 AEs worked from, and dealt with everything else the floor ran into - onboarding new hires, fixing whatever broke mid-day.",
      blocks: [
        {
          h: "The problem",
          body: [
            "There wasn't really a system in place. SDRs built their own lists, dialed from whatever they had, and logged outcomes when they remembered to. When the inputs are that inconsistent, nothing you look at later can be trusted.",
          ],
        },
        {
          h: "What I built",
          body: [
            "I built the outbound engine - email, calling and the data underneath both - plus the n8n and Slack layer that made it usable by the whole floor.",
          ],
          list: [
            "Calling data handled end to end in Clay: list building, dedupe, waterfall enrichment, validation. I put 200+ hours into Clay, enough that I could rebuild most of it outside the tool.",
            "Email taken from zero: I wrote the copy, managed deliverability and domain reputation, built the lead lists, and scaled to 10,000 sends a day when the market called for it - about 300k a month at peak. I built the dashboards for all of it too.",
            "LinkedIn outreach to the same ICPs, running next to email and calls instead of on its own.",
            "The cold-call system: JustCall and SalesDialer connected to Clay and HubSpot, with the next account's info ready before the current call ended.",
            "All of our n8n: fixing bugs, extending workflows, building new ones as needs came in. JavaScript and JSON did the glue work, and the important stuff posted into Slack - demos as they were booked, enrichment handed to SDRs in the channel they were already working in.",
            "Python for scraping and the one-off automations that come up constantly, plus the supporting tools - FullEnrich, LeadMagic, Apollo, Zapmail, scraping extensions.",
            "I was also part of the other side of growth: the company newsletter and influencer outreach.",
            "Outside the tooling, I onboarded new SDRs, answered whatever technical questions came up, and handled the call and sales ops that kept the reps dialing. One person to ask instead of a ticket queue.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Every record went through the same steps - source, dedupe, enrich, score, tier - and then into a sequence or a call block. Dispositions went into HubSpot as the call ended. Log it later and it never gets logged right.",
            "When an SDR booked a demo, the prospect immediately got an email showing what the product would do for them, sent from our in-house tools, and it moved the show-up rate. Give someone something useful for free and they tend to show up. That's also why we switched the main metric from demos booked to show-ups - a demo nobody attends isn't a result.",
            "n8n did the orchestration and I owned all of it, fixing and extending workflows as needs surfaced, usually the same day. Everything reported into Slack. Python handled the scraping and the small temporary automations that didn't deserve a full workflow.",
          ],
        },
        {
          h: "Running the numbers",
          body: [
            "I put tracking on everything - all fifteen SDRs, every call, list and campaign - and ran the analytics more seriously than companies this size usually do. The usual setup at this scale is a default CRM dashboard counting demos booked, plus activity numbers nobody has actually defined. I sat in on the CEO's meetings with the data analytics team and brought that thinking down to the dialer: every test had a hypothesis, and every result led to one of two decisions - keep going or kill it.",
          ],
          list: [
            "Different metrics for different channels - calling and cold email don't succeed on the same numbers - and we picked them before the test ran, not after.",
            "One agreed definition for every stage: dials, connects, conversations, meetings booked, shows, held. If a number means two different things, it's not a number.",
            "Week-over-week numbers per rep and per list, so we could see who was improving, which lists were carrying pipeline, and which scripts held up in real conversations.",
            "The two numbers I was responsible for, show-up rate and demos booked, both went up. Reminders and better pre-call context lifted shows; better lists and talk tracks lifted bookings.",
            "One dashboard over the CRM, the dialer and the campaigns, so management and the reps looked at the same numbers instead of arguing over different spreadsheets.",
          ],
        },
        {
          h: "What came out",
          body: [
            "Outbound went from zero to 300k emails a month, and the team booked 100+ demos in a quarter off the calling data I built. Show-up rate went up as volume scaled, because the analytics told us where to push. Fifteen SDRs worked from one system instead of fifteen spreadsheets, and a few product features I suggested from the floor actually shipped.",
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
        "Agency work: the same acquisition problem, rebuilt for every client. Mostly it taught me to build things I could deploy again, rather than clever one-offs.",
      blocks: [
        {
          h: "What I built",
          body: [
            "Funnels, forms, calendars and CRM workflows in GoHighLevel, with n8n connecting Facebook Lead Ads and whatever else the client was already paying for.",
          ],
          list: [
            "Dashboards for lead quality, appointments and conversion, so 'is this working?' had an actual answer.",
            "An agent that puts landing pages together on request, which took out the slowest part of onboarding.",
            "Automated onboarding: SMS and email sequences for each client account, nothing sent by hand.",
          ],
        },
        {
          h: "How it worked",
          body: [
            "Every client got the same skeleton - capture, qualify, route, follow up - with the pieces swapped out for their channels. Keeping that shape constant meant the dashboards stayed comparable, and a new client wasn't a new project every time.",
          ],
        },
        {
          h: "What it taught me",
          body: [
            "This is where systems paid off. The second client took a fraction of the effort of the first, and by the fourth, the only genuinely new work was figuring out the offer.",
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
          h: "What it taught me",
          body: [
            "Tests are a spec written by someone who thought about the problem longer than you have. Working inside them taught me to build for the contract instead of the happy path - the same instinct I use on pipelines now, where the schema is the contract and the happy path is usually a lie.",
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
    "What I'm building, what I think, and what's going on in my head while I do it. I update this when something actually changes - which, lately, is most weeks.",
  sections: [
    {
      h: "What I'm working on",
      body: [
        "Signal-based GTM is the thread everything else hangs off, and honestly it's the most fun I've had building anything. Instead of guessing who to contact, you watch for movement and show up while it still matters.",
      ],
      list: [
        "MCP servers wrapping internal APIs, so agents can read and write the warehouse, the CRM and the dialer through one interface. The first time an agent filed a real CRM update on its own, it felt like cheating.",
        "Agents that watch for a trigger, enrich it, score it, and draft the first touch. A human still presses send - that's the point, and it's the part that keeps the whole thing trustworthy.",
        "A personal brain: everything I learn, read and decide lands in an Obsidian vault wired to Claude Code and opencode, so context compounds instead of leaking. It's quietly changed how I think.",
        "Deterministic engines where accuracy matters, and I'm a little obsessed with making them bulletproof. allie-events-engine is the one I shipped as proof - Python, six Claude Code skills, seventeen passing tests.",
      ],
    },
    {
      h: "How I think about a system",
      body: [
        "Every GTM system I have built has the same shape: source, enrich, reason, act. It's a simple idea, but the reasoning layer is the part that's genuinely new - and it's why right now is the best time to be building these systems.",
      ],
      list: [
        "Source: a data provider, the CRM, inbound, or product usage. Something has to tell you who to look at.",
        "Enrich and orchestrate: fill the gaps, then structure the data so it's usable downstream.",
        "Reason: a model reads the aggregate and makes inferences you could never write as a formula. This is the part that still amazes me.",
        "Act: a Slack message, a sequence, a CRM update. Delivered where the rep already works.",
        "Adoption is the real failure mode. A system nobody uses is worse than no system, so the output has to be spoon-fed, not discovered.",
        "Build for the model six months from now. If a system isn't flexible, it's already on the clock.",
      ],
    },
    {
      h: "Scoring, signals and noise",
      body: [
        "Two scores, not one. Fit and timing are different facts, and they get acted on differently. Getting that split right was one of my favourite 'aha' moments.",
      ],
      list: [
        "Firmographic score: the things that barely move - industry, headcount, location. Used for tiering.",
        "Signal score: the things that change fast - a hire, a funding round, a pricing-page visit, a new tool in the stack. Used for triggering.",
        "Weight by funnel position. A pricing-page visit isn't equivalent to a funding announcement, and a job listing that names your category beats one that merely implies it.",
        "Job listings are underrated - the text leaks the roadmap: which tools, which regions, which initiatives. I could read them all day.",
        "Champion tracking is the best pipeline there is - people who already liked you, landing somewhere new.",
        "Custom signals carry the alpha. If everyone in your market uses the same signal, nobody gets a reply.",
        "Noise kills signal programs. Ten unweighted alerts a day and the rep stops opening the channel.",
      ],
    },
    {
      h: "Where AI GTM actually is",
      body: [
        "Most of what's sold as AI GTM is volume with better grammar. The genuinely new parts are narrower than the pitch - and they're exactly the parts I care about.",
      ],
      list: [
        "AI SDRs solved drafting, not trust. Tools like Artisan, 11x and AiSDR are great at a competent first touch and dangerous when nobody reads it. The failure mode is rarely the model - it's domain reputation and personalization no recipient asked for.",
        "Signals beat lists. Everyone has the same firmographic data, so the only edge left is timing: who moved today. Athra, Common Room, UserGems and Fibbler are all chasing that, and it's the same thesis I build against.",
        "Deliverability is the real ceiling. Google and Yahoo bulk-sender rules, DMARC alignment, per-mailbox send ceilings. You can't out-prompt a burnt domain, so infrastructure comes before copy.",
        "Answer engines are a GTM channel now. Buyers ask ChatGPT and Perplexity before they ask a vendor, which is why Profound, Peec AI and Otterly exist. Being cited is the new being shortlisted, and it's a fun problem to work on.",
        "MCP is becoming the integration layer. One server an agent can read and write beats twelve tools with twelve APIs, and it's the reason this job turned into a builder's job.",
        "Deterministic where it matters. LLM for judgment, code for arithmetic: scores, clocks, costs. A verifier agent checks the output before a human ever sees it.",
      ],
    },
    {
      h: "How I would run it",
      body: [
        "Same shape every time, whether the company sells to plants or to security teams. Once you see the pattern, you can't unsee it.",
      ],
      list: [
        "One warehouse as the source of truth. If a number lives in two places, one of them is wrong.",
        "Every agent run writes an audit row: input, output, model, cost, verdict, human decision. If I can't explain why a lead got sequenced, I don't trust the lead.",
        "Nothing client-facing auto-sends. Automation buys volume; judgment is the last mile.",
        "Instrument around show-ups and pipeline per unit of cost, not sends and opens.",
        "Every workflow ships with a runbook, so it survives the person who built it.",
      ],
    },
    {
      h: "How I run the numbers",
      body: [
        "I love this part more than I probably should. It's the analytics a much bigger revenue org runs on its floor, pointed at fifteen SDRs and every call they made - because 'the campaign feels slow' isn't a diagnosis.",
      ],
      list: [
        "Instrument everything, define everything: dials, connects, conversations, meetings booked, shows, held. One definition per stage, written down with an owner - otherwise two people quote two numbers and trust neither.",
        "Analyze per rep and per list, week over week. Who's improving, which list carries pipeline, which talk track holds a conversation - the same cuts an enterprise RevOps team makes, at a scale where I can act on them the same day.",
        "Own the numbers that matter: show-up rate and demos booked. Reminder cadences and pre-call context move shows; list and script iteration move bookings. Total demos booked is the output that compounds, not the activity that feels busy.",
        "One dashboard over the CRM, the dialer and the campaigns, so leadership and the floor read the same truth. No hero numbers, no orphaned spreadsheets.",
        "One variable per change, the list held constant, weeks compared as cohorts, the result written down. Decisions start from facts instead of the loudest claim in the room.",
      ],
    },
    {
      h: "What I think",
      body: [
        "A few things I keep coming back to. They're how I decide what to build and what to ignore.",
      ],
      list: [
        "Builder, not doer. The integration layer should be code, and the human should be judgment.",
        "Speed is the moat. Compress first touch to payment, and instrument around the number that actually moves - show-ups, not demos booked.",
        "Honest evidence. No fake personalization, no invented numbers. Deterministic output a human approves.",
        "Concentrate on the channel that works. Assumptions need data behind them, and don't reinvent a wheel that's already turning.",
        "Systematize self-improvement. Plan first, capture the lesson after every correction, and review the whole thing once a year.",
      ],
    },
    {
      h: "What lives in Clay, what lives in code",
      body: [
        "200+ hours inside Clay, and I can rebuild most of it in-house. But the more useful question isn't whether I can - it's what should live where. Data integrity decides, and I love a clean rule.",
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
        "The stack changes as the job changes, but this is what's actually open on my machine.",
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
        "Guitar - slowly working through JustinGuitar's Grade 1 - plus martial arts, and a light biohacking habit: nootropics, 40Hz focus experiments, whatever rabbit hole is open that week. I read Paul Graham, Kevin Kelly and Steph Ango, and more science fiction than is probably good for me. Games on rotation: Cyberpunk 2077, Zelda BOTW, Persona 5, and Catan with anyone who'll sit still. Once a year I sit down with the same forty questions to decide what changes next, with a longer set every decade - the same system instinct, pointed at my own life.",
      ],
    },
  ],
};

export const closer = {
  statement: "People move. I build the systems that catch them.",
  sub: "Built, run, and documented - all of it mine. If any of it is useful, say hello.",
};
