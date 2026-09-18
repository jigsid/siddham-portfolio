import Link from "next/link";
import { profile, about } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="stag" style={{ "--i": 0 }}>
        Hey, I&apos;m {profile.name.split(" ")[0]}
      </h1>
      <p className="role stag" style={{ "--i": 1 }}>
        {profile.role} <span>·</span> {profile.roleDetail}
      </p>
      {about.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph.slice(0, 24)}
          className="sub stag"
          style={{ "--i": 2 + index }}
        >
          {paragraph}
        </p>
      ))}
      <p className="pull stag" style={{ "--i": 4 }}>
        {about.pull}
      </p>
      <div className="hero-cta stag" style={{ "--i": 5 }}>
        <Link className="more-link" href="/more">
          know more about me
        </Link>
      </div>
    </section>
  );
}
