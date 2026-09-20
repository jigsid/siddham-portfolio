import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ABM workflow",
  description:
    "Account-based GTM, end to end: TAM mapping, research, CRM enrichment, signal tracking, awareness scoring, demand generation, and reporting.",
};

export default function AbmWorkflow() {
  return (
    <div className="docpage">
      <div className="wrap">
        <section className="doc">
        <Link className="doc-back" href="/#projects">
          <span className="arr" aria-hidden="true">
            ←
          </span>{" "}
          All work
        </Link>
        <h1>ABM workflow</h1>
        <p className="sub">
          The system on paper before the system in production - from TAM
          mapping to pipeline reporting, with every handoff defined.
        </p>
        <figure className="doc-fig">
          <Image
            src="/abm-flow.webp"
            alt="ABM workflow diagram: from TAM mapping to the GTM flywheel"
            width={1000}
            height={3676}
            sizes="(max-width: 820px) 92vw, 700px"
            unoptimized
            priority
            fetchPriority="high"
          />
        </figure>

        <h3>Step 1: TAM and stakeholder mapping</h3>
        <p>
          The goal of step one is to create a{" "}
          <b>target account list (TAL)</b> that captures 90 percent or more of
          your TAM.
        </p>
        <p>
          Start by building a data-supported ICP (ideal customer profile)
          model. Many GTM teams don&apos;t actually have their ICP written
          down in an agreed-upon document.
        </p>
        <p>
          Once your ICP is locked in, pull lists from multiple data sources to
          hit full TAM coverage. There are four main categories.
        </p>
        <ol>
          <li>
            <b>General prospecting databases.</b> Like{" "}
            <a
              href="https://get.apollo.io/workflows"
              target="_blank"
              rel="noopener"
            >
              Apollo
            </a>{" "}
            and ZoomInfo. Best for companies with a LinkedIn presence.
          </li>
          <li>
            <b>Lookalike databases.</b> Like{" "}
            <a href="http://ocean.io/" target="_blank" rel="noopener">
              Ocean.io
            </a>{" "}
            and Discolike. Good for hyper-specific searches that include
            companies missing from LinkedIn.
          </li>
          <li>
            <b>Specialized databases.</b> Like Storeleads or{" "}
            <a href="http://influencers.club/" target="_blank" rel="noopener">
              influencers.club
            </a>
            . Useful for niche verticals.
          </li>
          <li>
            <b>Web scraping.</b> Using Apify or Claude Code. Necessary to map
            TAMs that public databases don&apos;t cover well.
          </li>
        </ol>
        <p>
          Once the company list is qualified, repeat the process for contacts.
          Map titles to decision-makers, champions, influencers, and end-users.
          Pull contacts from Apollo, AI Ark, and Clay. Verify emails through{" "}
          <a
            href="https://www.findymail.com/?via=workflows"
            target="_blank"
            rel="noopener"
          >
            Findymail
          </a>{" "}
          and{" "}
          <a
            href="https://bettercontact.rocks/?fpr=workflows"
            target="_blank"
            rel="noopener"
          >
            BetterContact
          </a>
          .
        </p>

        <h3>Step 2: Account research</h3>
        <p>
          After the list is built, you collect the data points that personalize
          outreach and help reps research accounts without leaving the CRM.
        </p>
        <p>
          For most clients, this works out to 30+ custom data points, which
          means 30+ custom CRM properties to configure. Use a spreadsheet to
          map every data point with its official HubSpot property name and any
          overwrite rules.
        </p>
        <p>Real examples from clients, in order of simple to complex:</p>
        <ul>
          <li>Engineering headcount</li>
          <li>Custom sub-industry classification</li>
          <li>E-commerce hosting platform</li>
          <li>Competitor tech usage</li>
          <li>Closest coffee spot to the prospect&apos;s office</li>
          <li>Recent clinical trials</li>
          <li>Parent-child company relationships</li>
          <li>Composite media-buying score</li>
        </ul>
        <p>
          Use two main tools for research: <b>Claygent</b> (web research agents
          in Clay) and <b>Clay&apos;s 150+ data providers</b>.
        </p>

        <h3>Step 3: CRM cleanup and enrichment</h3>
        <p>
          Once the static research is done, you turn it into a continuous
          workflow. Every new record in HubSpot or Salesforce should
          automatically run through the same enrichment process.
        </p>
        <p>The setup is straightforward:</p>
        <ol>
          <li>Duplicate the TAM workflow.</li>
          <li>
            Set the trigger to list enrollment (24-hour cadence) or webhooks
            (instant, requires HubSpot Data Hub Pro).
          </li>
          <li>
            Change the final action to &ldquo;Update record&rdquo; instead of
            &ldquo;Create record&rdquo;.
          </li>
          <li>Enroll the backfill of companies and contacts.</li>
        </ol>
        <p>
          Typically add an &ldquo;Enriched by Clay&rdquo; date field on company
          and contact records, which makes it easy to re-enrich on a 12-month
          freshness cycle.
        </p>
        <p>
          Before pushing any new data, do a CRM cleanup. At a minimum: remove
          hard domain and email duplicates, and audit existing properties to
          prevent redundancies. Three tools cover 99 percent of CRM hygiene use
          cases.
        </p>
        <ul>
          <li>Clay + HubSpot integration or API</li>
          <li>HubSpot Data Hub</li>
          <li>Claude Code plus the HubSpot MCP</li>
        </ul>
        <p>After cleanup, add quality-of-life improvements:</p>
        <ul>
          <li>
            Customize company and contact views to surface the most important
            research
          </li>
          <li>Create segments by tier and category</li>
          <li>
            Add on-demand enrichment buttons inside HubSpot so reps can click
            &ldquo;Find additional stakeholders&rdquo; without leaving the CRM
          </li>
        </ul>

        <h3>Step 4: Signal tracking</h3>
        <p>
          Signals are the part of an ABM engine that removes the silo between
          sales and marketing. A signal is any data point that suggests buying
          intent. When marketing drives 50 ad impressions to an ICP account,
          that signal can be sent to the sales team, and both teams stay
          aligned on the only stat that matters: ICP pipeline progression.
        </p>
        <p>Signals split into three categories.</p>
        <ul>
          <li>
            <b>1st-party signals.</b> Your internal data from your own tools.
            CRM activity, website visitors (Warmly, RB2B, Vector), gated
            content, product usage. Usually free and the highest-intent.
          </li>
          <li>
            <b>2nd-party signals.</b> Exclusive data from external tools. Social
            engagement (Clay, Jungler, Teamfluence), champion tracking (Clay,
            Champify, UserGems), ad engagement (ZenABM, Fibbler,{" "}
            <a href="http://factors.ai/" target="_blank" rel="noopener">
              Factors.ai
            </a>
            ).
          </li>
          <li>
            <b>3rd-party signals.</b> Public data from external sources. News
            and fundraising (Clay, PredictLeads), job openings (LinkedIn Sales
            Nav, TheirStack), competitor tech usage (BuiltWith, HG Insights).
          </li>
        </ul>
        <p>Use a 13-step process for every signal workflow:</p>
        <ol>
          <li>
            <b>Capture.</b> Pull signals from all sources via webhooks, APIs,
            or native integrations.
          </li>
          <li>
            <b>Aggregate.</b> Route everything into one orchestration layer.
          </li>
          <li>
            <b>Normalize.</b> Standardize key fields like company domain,
            LinkedIn URL, and job title.
          </li>
          <li>
            <b>Enrich.</b> Add basic enrichment for qualification.
          </li>
          <li>
            <b>CRM lookup.</b> Check if the account already exists and pull the
            assigned owner.
          </li>
          <li>
            <b>Qualify.</b> Use enrichment data to qualify net-new companies
            and add to the CRM if missing.
          </li>
          <li>
            <b>Score.</b> Pull tier scores (Tier 1, 2, 3, Unqualified) from the
            CRM.
          </li>
          <li>
            <b>Segment.</b> Group accounts by size, industry, location, or
            business type.
          </li>
          <li>
            <b>Route.</b> Assign signals to the right rep using a live rep
            assignment table.
          </li>
          <li>
            <b>Sync to CRM.</b> Push assigned signal data back into HubSpot or
            Salesforce.
          </li>
          <li>
            <b>Activate.</b> Tier 1 gets a Slack alert plus manual outreach.
            Tier 2 gets retargeting plus automated outbound via{" "}
            <a
              href="https://instantly.ai/?via=workflows"
              target="_blank"
              rel="noopener"
            >
              Instantly
            </a>{" "}
            and{" "}
            <a href="https://heyreach.io/?fpr=daniel96" target="_blank" rel="noopener">
              HeyReach
            </a>
            . Tier 3 gets automated email.
          </li>
          <li>
            <b>Track.</b> Roll up signals into awareness stages.
          </li>
          <li>
            <b>Enablement.</b> Build custom sequences, call scripts, weekly
            digests, and dashboards per rep.
          </li>
        </ol>
        <p>
          In best cases, 20 to 40 percent of active pipeline is attributed to
          signal activation (using a 7-day deal creation window).
        </p>

        <h3>Step 5: Awareness scoring</h3>
        <p>
          Awareness scoring is a strategy I learned from Growth Unhinged,
          particularly the case studies with{" "}
          <a
            href="https://www.growthunhinged.com/p/from-random-to-unified-gtm"
            target="_blank"
            rel="noopener"
          >
            Parabola
          </a>{" "}
          and{" "}
          <a
            href="https://www.growthunhinged.com/p/a-very-tactical-guide-to-abm"
            target="_blank"
            rel="noopener"
          >
            Emilia Korczynska
          </a>
          .
        </p>
        <p>The five awareness stages:</p>
        <ol>
          <li>
            <b>Identified.</b> Part of the qualified TAL, no engagement yet.
            Default state.
          </li>
          <li>
            <b>Aware.</b> Showed surface-level engagement. One website visit,
            50+ ad impressions.
          </li>
          <li>
            <b>Interested.</b> Repeated or high-intent engagement. A positive
            outbound reply, event attendance.
          </li>
          <li>
            <b>Considering / Evaluating.</b> Bottom-funnel stage just before
            the biggest conversion drop-off, usually right before the first
            meeting.
          </li>
          <li>
            <b>Selecting.</b> In an active deal cycle with an opportunity in
            the CRM.
          </li>
        </ol>
        <p>When an account moves stages, you have a few activation options:</p>
        <ul>
          <li>Tasks and Slack notifications for high-intent signals</li>
          <li>Lists that reps prospect from (e.g. Tier 1 + 2 in Interested)</li>
          <li>
            AI signal summaries added to the task description every time the
            stage changes
          </li>
        </ul>
        <p>
          Awareness stages solve a real shortcoming of lifecycle stages.
          Lifecycle stages start after an opt-in, which means you miss a big
          chunk of warm market activity that happens before the form fill.
        </p>

        <h3>Step 6: Demand generation</h3>
        <p>
          By step six, the core ABM infrastructure is in place. Demand
          generation becomes the focus. After implementing the earlier
          components:
        </p>
        <ul>
          <li>Awareness score segments become ad retargeting audiences</li>
          <li>SDRs stop list-building outside the CRM entirely</li>
          <li>
            Sales naturally focuses on Interested and Aware accounts (which
            convert 3x higher)
          </li>
          <li>Sales starts using marketing-generated signals to fill pipeline</li>
        </ul>
        <p>ABM demand gen channels split into two groups.</p>
        <ul>
          <li>
            <b>1:1 demand generation.</b> ABM gifting campaigns, warm intros,
            event invites, and manual outreach for dream accounts.
          </li>
          <li>
            <b>1:many demand generation.</b> Automated outbound through{" "}
            <a
              href="https://instantly.ai/?via=workflows"
              target="_blank"
              rel="noopener"
            >
              Instantly
            </a>{" "}
            and{" "}
            <a href="https://heyreach.io/?fpr=daniel96" target="_blank" rel="noopener">
              HeyReach
            </a>
            , parallel dialing through Nooks or Orum, LinkedIn social content,
            on-site lead magnets, video outreach, targeted ads, public event
            campaigns, and connection request waves.
          </li>
        </ul>
        <p>
          One ABM channel worth highlighting: targeted LinkedIn ads. Because
          your TAM is small, you can upload company and contact lists to
          LinkedIn ads and guarantee 100 percent of your spend lands on ICP
          accounts.
        </p>

        <h3>Step 7: ICP pipeline progression reporting</h3>
        <p>
          Reporting is straightforward, but the right six reports make or break
          an ABM program.
        </p>
        <ol>
          <li>
            <b>ICP pipeline created (month over month).</b> The most accurate
            read on ABM program success. This should grow from baseline if the
            system is working.
          </li>
          <li>
            <b>Signal influence by category.</b> Model each signal category
            against pipeline and closed-won, using 7-day and 30-day
            attribution windows.
          </li>
          <li>
            <b>Overdue signal tasks by rep.</b> Tasks are the most effective
            way to assign work to reps, but only if they action them.
            Percentage of overdue tasks tells you who needs more enablement.
          </li>
          <li>
            <b>Awareness stage progression and regression by tier.</b> Accounts
            moving forward predict future pipeline. Accounts moving backward
            expose leaks before they show up in revenue.
          </li>
          <li>
            <b>Accounts by tier broken down by awareness stage.</b> The
            high-level market penetration view.
          </li>
          <li>
            <b>Tier 1 accounts with no activity in the last 30 days.</b>{" "}
            Accountability metric. This number should be as close to zero as
            possible.
          </li>
        </ol>
        </section>
      </div>
    </div>
  );
}
