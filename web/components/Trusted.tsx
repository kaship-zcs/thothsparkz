const BRANDS = [
  { name: "SASTHA", sub: "Earth Movers" },
  { name: "MASTER FIX" },
  { name: "EDUWORLD", sub: "International" },
  { name: "FOCUZFIVE" },
  { name: "POGO SHAWAYA" },
  { name: "ADAAR", sub: "Properties" },
];

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
            <span key={b.name} className="logo">
              {b.name}
              {b.sub && <small>{b.sub}</small>}
            </span>
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
