import { closer, profile } from "@/content/portfolio";
import CopyEmail from "./CopyEmail";

export default function Closer() {
  return (
    <section className="closer">
      <div className="wrap">
        <div className="cbox">
          <div className="cin">
            <h2 className="cstatement">{closer.statement}</h2>
            <div className="cta">
              <CopyEmail email={profile.email} />
            </div>
            <div className="ccontact">
              <a href={profile.links.linkedin} target="_blank" rel="noopener">
                LinkedIn <span className="ext">↗</span>
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener">
                GitHub <span className="ext">↗</span>
              </a>
              <a href={profile.links.x} target="_blank" rel="noopener">
                X <span className="ext">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
