import Link from "next/link";
import { projects } from "@/content/portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <p className="eyebrow">Projects</p>
      </Reveal>
      <div className="jobs">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <article className="job">
              <div>
                <h3>
                  <Link className="job-co" href={project.detailHref}>
                    {project.title}
                  </Link>
                </h3>
                <span className="job-role">{project.kicker}</span>
              </div>
              <p className="job-summary">{project.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="more-cta">
          <Link className="more-link" href="/more-projects">
            see more projects
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
