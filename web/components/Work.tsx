import Reveal from "./Reveal";

const CASES = [
  {
    name: "SASTHA EARTH MOVERS",
    tags: "Brand Strategy · Identity · Campaign · Digital",
    line: "Building a stronger tomorrow.",
    img: "/art/sastha.svg",
  },
  {
    name: "MASTER FIX",
    tags: "Brand · Digital · Social · Growth",
    line: "Fixing things. Every day.",
    img: "/art/masterfix.svg",
  },
  {
    name: "EDUWORLD INTERNATIONAL",
    tags: "Content · YouTube · Brand · Communication",
    line: "Global learning. Brighter futures.",
    img: "/art/eduworld.svg",
  },
  {
    name: "FOCUZFIVE",
    tags: "Brand · Performance · CRO · Digital",
    line: "Focused brands. Greater momentum.",
    img: "/art/focuzfive.svg",
  },
];

export default function Work() {
  return (
    <section className="work section-dark" id="work">
      <div className="container">
        <Reveal className="work-head">
          <p className="eyebrow gold">Selected Work</p>
          <h2 className="headline light">
            REAL BRANDS.
            <br />
            <strong>REAL RESULTS.</strong>
          </h2>
          <p className="muted">
            From local businesses to international campaigns, we help brands find their voice, reach the
            right audience and grow with purpose.
          </p>
          <a href="#work" className="link-arrow gold">
            View All Work <span className="arr">&rarr;</span>
          </a>
        </Reveal>

        <div className="work-grid">
          {CASES.map((c, i) => (
            <Reveal as="a" key={c.name} className="case" delay={i * 90} href="#work">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={`${c.name} — concept visual`} className="case-img" loading="lazy" />
              <div className="case-top">
                <h3>{c.name}</h3>
                <p className="tags">{c.tags}</p>
              </div>
              <div className="case-bottom">
                <p className="case-line">{c.line}</p>
                <span className="case-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
