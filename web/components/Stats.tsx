import Reveal from "./Reveal";

const STATS = [
  { n: "150+", l: "Projects" },
  { n: "10+", l: "Industries" },
  { n: "10+", l: "Team Members" },
  { n: "5+", l: "International Markets" },
  { n: "35%+", l: "Campaign Performance Improvement" },
  { n: "2.5×", l: "Conversion Growth" },
  { n: "113K+", l: "Single-Video Views" },
];

export default function Stats() {
  return (
    <section className="stats section-light">
      <div className="container stats-wrap">
        <p className="side-label gold">
          BUILT TO
          <br />
          CREATE IMPACT.
        </p>
        <div className="stats-row">
          {STATS.map((s, i) => (
            <Reveal className="stat" key={s.l} delay={i * 60}>
              <b>{s.n}</b>
              <span>{s.l}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
