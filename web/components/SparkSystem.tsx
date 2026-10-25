import Reveal from "./Reveal";

const STEPS = [
  { n: "01", t: "DISCOVER", d: "Research & intelligence" },
  { n: "02", t: "DEFINE", d: "Positioning & strategy" },
  { n: "03", t: "DESIGN", d: "Identity & experience" },
  { n: "04", t: "DEPLOY", d: "Campaign & execution" },
  { n: "05", t: "DRIVE", d: "Growth & performance" },
  { n: "06", t: "EVOLVE", d: "Analytics & optimization" },
];

export default function SparkSystem() {
  return (
    <section className="system section-dark alt" id="insights">
      <div className="container system-grid">
        <Reveal className="system-intro">
          <p className="eyebrow gold">The Spark System™</p>
          <h2 className="headline light">
            A CLEARER
            <br />
            PATH TO
            <br />
            <strong>WHAT&apos;S NEXT.</strong>
          </h2>
          <p className="muted">A structured, end-to-end approach that turns insight into impact.</p>
          <a href="#contact" className="link-arrow gold">
            Our Methodology <span className="arr">&rarr;</span>
          </a>
        </Reveal>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70}>
              <span className="step-dot">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
