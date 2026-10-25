const BRANDS = ["SASTHA", "MASTER FIX", "EDUWORLD", "FOCUZFIVE", "POGO SHAWAYA", "ADAAR"];

export default function Trusted() {
  return (
    <section className="trusted section-light">
      <div className="container trusted-wrap">
        <p className="side-label gold">
          TRUSTED BY
          <br />
          VISIONARY BRANDS
        </p>
        <div className="logos">
          {BRANDS.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <p className="trusted-more">
          AND 100+
          <br />
          MORE BRANDS
          <br />
          ACROSS 10+ INDUSTRIES
        </p>
      </div>
    </section>
  );
}
