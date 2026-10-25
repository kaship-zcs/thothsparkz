import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="philosophy section-light" id="about">
      <div className="container philo-grid">
        <Reveal as="p" className="side-label gold">
          MORE
          <br />
          THAN
          <br />
          MARKETING.
        </Reveal>
        <Reveal className="philo-head">
          <h2 className="headline">
            IDEAS ARE EVERYWHERE.
            <br />
            <strong>TRANSFORMATION IS NOT.</strong>
          </h2>
          <span className="rule-gold" />
        </Reveal>
        <Reveal className="philo-body">
          <p>
            At Thoth Sparkz, we combine the intelligence of Thoth with the creative energy of Sparkz — to
            build brands, create opportunities and drive meaningful growth.
          </p>
          <a href="#capabilities" className="link-arrow">
            Our Philosophy <span className="arr">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
