import Link from "next/link";
import { experience } from "@/content/portfolio";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work">
      <Reveal>
        <p className="eyebrow">Experience</p>
      </Reveal>
      <div className="jobs">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="job">
              <div>
                <h3>
                  <Link className="job-co" href={`/work/${job.slug}`}>
                    {job.company}
                  </Link>
                </h3>
                <span className="job-role">{job.role}</span>
              </div>
              <p className="job-summary">{job.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
