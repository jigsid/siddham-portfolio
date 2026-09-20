import Link from "next/link";
import { moreProjects } from "@/content/portfolio";

export const metadata = {
  title: "More projects",
  description:
    "Other things I have built - the Hormozi Harness and whatever comes next.",
};

export default function MoreProjects() {
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
          <h1>More projects</h1>

          {moreProjects.map((project) => (
            <div key={project.title}>
              <h3>
                <a
                  className="project-link"
                  href={project.links[0]?.href}
                  target="_blank"
                  rel="noopener"
                >
                  {project.title}
                </a>
              </h3>
              <h4>Project summary</h4>
              <p>{project.body}</p>
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
              </div>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}
