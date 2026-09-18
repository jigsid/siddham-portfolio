import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap notfound">
      <div>
        <p className="big mono">404</p>
        <h2 style={{ margin: "12px auto 0" }}>
          This page moved somewhere I did not build.
        </h2>
        <div className="cta">
          <Link className="pill" href="/">
            Back home <b>→</b>
          </Link>
        </div>
      </div>
    </div>
  );
}
