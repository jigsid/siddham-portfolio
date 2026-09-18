import Link from "next/link";
import { codingProjects, profile } from "@/content/portfolio";
import ProofButton from "@/components/ProofButton";

export const metadata = {
  title: "Coding projects",
  description:
    "SmartRep AI and Boostly - two SaaS products built end to end: Next.js, Prisma, Gemini, Stripe, Meta webhooks.",
};

export default function CodingProjects() {
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
          <p className="eyebrow">Projects</p>
          <h1>Coding projects</h1>
          <p className="sub">
            Two products I built end to end - architecture, payments, the
            deployment, and the boring parts after launch.
          </p>

          {codingProjects.map((project) => {
            const live = project.links.find((link) => link.label === "Live");

            return (
              <div key={project.title}>
                <h3>
                  <a
                    className="project-link"
                    href={live?.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.detail.intro}</p>
                <div className="prow-foot">
                  <div className="linkrow">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                      >
                        {link.label} <span className="ext">↗</span>
                      </a>
                    ))}
                  </div>
                  <ProofButton proof={project.proof} />
                </div>
              {project.detail.blocks.map((block) => (
                <div key={block.h}>
                  <h4>{block.h}</h4>
                  {block.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              ))}
              <p className="stackline">{project.detail.stack}</p>
              </div>
            );
          })}

          <p className="src">
            {profile.email} · {profile.location}
          </p>
        </section>
      </div>
    </div>
  );
}
