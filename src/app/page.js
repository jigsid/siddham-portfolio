import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Closer from "@/components/Closer";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <Hero />
      </div>
      <div className="wrap">
        <hr className="hr" />
        <Work />
        <hr className="hr" />
        <Projects />
      </div>
      <Closer />
    </>
  );
}
