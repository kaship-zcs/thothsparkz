import Reveal from "./Reveal";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";

const CASES = [
  {
    name: "SASTHA EARTH MOVERS",
    tags: "Brand Strategy · Identity · Campaign · Digital",
    line: "Building a stronger tomorrow.",
    img: "/art/sastha.webp",
    pos: "30% center",
  },
  {
    name: "MASTER FIX",
    tags: "Brand · Digital · Social · Growth",
    line: "Fixing things. Every day.",
    img: "/art/masterfix.webp",
    pos: "center",
  },
  {
    name: "EDUWORLD INTERNATIONAL",
    tags: "Content · YouTube · Brand · Communication",
    line: "Global learning. Brighter futures.",
    img: "/art/eduworld.webp",
    pos: "40% center",
  },
  {
    name: "FOCUZFIVE",
    tags: "Brand · Performance · CRO · Digital",
    line: "Focused brands. Greater momentum.",
    img: "/art/focuzfive.webp",
    pos: "85% center",
  },
];

export default function Work() {
  return (
    <section className="work section-dark" id="work">
      <div className="container work-layout">
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
            View All Work <ArrowRightIcon className="arr" />
          </a>
        </Reveal>

        <div className="work-grid">
          {CASES.map((c, i) => (
            <Reveal as="a" key={c.name} className="case" delay={i * 90} href="#work">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" className="case-img" loading="lazy" style={{ objectPosition: c.pos }} />
              <div className="case-top">
                <h3>{c.name}</h3>
                <p className="tags">{c.tags}</p>
              </div>
              <div className="case-bottom">
                <p className="case-line">{c.line}</p>
                <span className="case-arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
