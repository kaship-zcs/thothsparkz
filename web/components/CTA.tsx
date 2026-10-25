import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="cta section-dark" id="contact">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container cta-grid">
        <p className="eyebrow gold">
          Let&apos;s create
          <br />
          what&apos;s next.
        </p>
        <Reveal className="cta-center">
          <h2 className="cta-title">
            READY TO SPARK
            <br />
            <strong>A BRIGHTER TOMORROW?</strong>
          </h2>
          <a href="mailto:hello@thothsparkz.com" className="btn btn-gold btn-lg">
            Start a Conversation <span className="arr">&rarr;</span>
          </a>
        </Reveal>
        <p className="cta-note">
          Tell us where your brand is today. We&apos;ll help define where it should go next.
        </p>
      </div>
    </section>
  );
}
