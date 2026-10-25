import Reveal from "./Reveal";

const COLS = [
  { num: "01", title: "BRAND", items: ["Strategy", "Positioning", "Identity", "Messaging", "Creative Direction"] },
  { num: "02", title: "DIGITAL", items: ["Websites", "UX/UI", "Digital Experience", "SEO", "Content", "Social"] },
  { num: "03", title: "GROWTH", items: ["Performance Marketing", "Lead Generation", "CRO", "Paid Media", "Analytics", "CRM"] },
  {
    num: "04",
    title: "TRANSFORMATION",
    highlight: true,
    items: ["Business Strategy", "Go-to-Market", "Technology", "Automation", "Integrated Campaigns", "Growth Systems"],
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities section-dark" id="capabilities">
      <div className="container cap-grid">
        <Reveal className="cap-intro">
          <p className="eyebrow gold">What We Do</p>
          <h2 className="headline light">
            CONNECTED
            <br />
            FOR GREATER
            <br />
            IMPACT.
          </h2>
          <p className="muted">
            Brand. Digital. Growth. Transformation. Together, they create possibilities that last.
          </p>
          <a href="#capabilities" className="link-arrow gold">
            Explore Capabilities <span className="arr">&rarr;</span>
          </a>
        </Reveal>

        <div className="cap-cols">
          {COLS.map((c, i) => (
            <Reveal as="article" key={c.num} className={`cap-col ${c.highlight ? "highlight" : ""}`} delay={i * 80}>
              <span className={`cap-num ${c.highlight ? "gold" : ""}`}>{c.num}</span>
              <h3 className={c.highlight ? "gold" : ""}>{c.title}</h3>
              <ul>
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
