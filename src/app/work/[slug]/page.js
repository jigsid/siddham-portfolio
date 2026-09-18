import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experience } from "@/content/portfolio";

export function generateStaticParams() {
  return experience.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = experience.find((item) => item.slug === slug);
  if (!job) return { title: "Work" };
  return {
    title: `${job.company} - ${job.role}`,
    description: job.summary,
  };
}

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const job = experience.find((item) => item.slug === slug);
  if (!job || !job.detail) notFound();

  const images = job.proof?.images || [];

  return (
    <div className="docpage">
      <div className="wrap">
        <section className="doc">
          <Link className="doc-back" href="/#work">
            <span className="arr" aria-hidden="true">
              ←
            </span>{" "}
            All work
          </Link>
          <p className="eyebrow">{job.company}</p>
          <h1>{job.role}</h1>
          <p className="sub">{job.detail.intro}</p>

          {images.length ? (
            <div className="doc-figs">
              {images.map((image, index) => (
                <figure className="doc-fig" key={image.src}>
                  <Image
                    src={image.src}
                    alt={`${job.company} proof`}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 820px) 92vw, 700px"
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? undefined : "eager"}
                  />
                </figure>
              ))}
            </div>
          ) : null}

          {job.detail.blocks.map((block) => (
            <div key={block.h}>
              <h3>{block.h}</h3>
              {block.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              {block.list ? (
                <ul>
                  {block.list.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <p className="src">{job.detail.stack}</p>
        </section>
      </div>
    </div>
  );
}
