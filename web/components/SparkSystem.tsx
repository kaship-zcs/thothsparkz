import Reveal from "./Reveal";
import { DiscoverIcon, DefineIcon, DesignIcon, DeployIcon, DriveIcon, EvolveIcon, ArrowRightIcon } from "./icons";

const STEPS = [
  { n: "01", t: "DISCOVER", d: "Research & intelligence", Icon: DiscoverIcon },
  { n: "02", t: "DEFINE", d: "Positioning & strategy", Icon: DefineIcon },
  { n: "03", t: "DESIGN", d: "Identity & experience", Icon: DesignIcon },
  { n: "04", t: "DEPLOY", d: "Campaign & execution", Icon: DeployIcon },
  { n: "05", t: "DRIVE", d: "Growth & performance", Icon: DriveIcon },
  { n: "06", t: "EVOLVE", d: "Analytics & optimization", Icon: EvolveIcon },
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
            Our Methodology <ArrowRightIcon className="arr" />
          </a>
        </Reveal>

        <ol className="steps">
          {STEPS.map(({ n, t, d, Icon }, i) => (
            <Reveal as="li" key={n} delay={i * 70}>
              <span className="step-dot">
                <Icon />
              </span>
              <span className="step-num">{n}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </Reveal>
          ))}
        </ol>

        <p className="system-note">
          SAME
          <br />
          BIGGER
          <br />
          BRIGHTER
          <br />
          BOLDER
        </p>
      </div>
    </section>
  );
}
