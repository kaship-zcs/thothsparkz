import Image from "next/image";
import { ArrowRightIcon } from "../icons";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-art" aria-hidden="true">
        <div className="hero-photo">
          {/* pre-sized, pre-compressed webp — served as-is so the optimizer doesn't re-encode it */}
          <Image src="/hero-portal.webp" alt="" width={1680} height={1348} priority unoptimized />
          <span className="hero-door-glow" />
        </div>
      </div>
      <div className="hero-ridge" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow gold">Brands for a brighter tomorrow</p>
          <h1 className="hero-title">
            INTELLIGENCE
            <br />
            THAT <span className="gold">SPARKS</span>
            <br />
            <span className="ivory">TRANS</span>
            <span className="gold-grad-text">FORMATION</span>.
          </h1>
          <p className="hero-sub">
            We build brands, digital experiences and growth systems that move businesses forward.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">
              Build Your Brand <ArrowRightIcon className="arr" />
            </a>
            <a href="#work" className="btn btn-ghost">
              Explore Our Work
            </a>
          </div>
          <p className="hero-pillars">
            STRATEGY <i>&times;</i> CREATIVITY <i>&times;</i> TECHNOLOGY <i>&times;</i> GROWTH
          </p>
        </div>

        <div className="hero-side" aria-hidden="true">
          <ul className="hero-stack">
            <li>IDEAS</li>
            <li>STRATEGY</li>
            <li>CREATION</li>
            <li>ACTION</li>
            <li className="gold">TRANSFORMATION</li>
          </ul>
          <p className="hero-choice">
            A BRIGHTER
            <br />
            TOMORROW
            <br />
            IS A CHOICE.
          </p>
        </div>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}
