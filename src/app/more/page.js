import Link from "next/link";
import { more, profile } from "@/content/portfolio";

export const metadata = {
  title: "More about me",
  description: more.intro,
};

export default function More() {
  return (
    <div className="docpage">
      <div className="wrap">
        <section className="doc">
          <Link className="doc-back" href="/#top">
            <span className="arr" aria-hidden="true">
              ←
            </span>{" "}
            Back
          </Link>
          <h1>More about me</h1>
          <p className="sub">{more.intro}</p>

          {more.sections.map((section) => (
            <div key={section.h}>
              <h2 className="doc-h2">{section.h}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
