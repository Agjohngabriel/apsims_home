import './InvestorSection.css';

export default function InvestorSection({ showBar }) {
  return (
    <>
      {showBar && (
        <div className="invest-bar">For investors &amp; partners ↓</div>
      )}
      <section id="investors" className="section dark" data-screen-label="Investors">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="section-label">Market opportunity</div>
              <h2 className="section-title">
                A first-mover position in a <em>$200B</em> informal market.
              </h2>
            </div>
            <p className="section-sub">
              Nigerian SMEs are the largest underserved business-software market in West Africa.
              80% still keep books on paper. 95% of internet users open WhatsApp daily.
              The product that lives there wins.
            </p>
          </div>

          <div className="invest-grid">
            {[
              { big: '40M+',  label: 'Nigerian SMEs — 80% manage inventory on paper' },
              { big: '95%',   label: "of Nigeria's internet users on WhatsApp daily" },
              { big: '₦200B', label: 'Annual informal retail revenue in Nigeria' },
              { big: '$0',    label: 'Cost per user-initiated message — the core product loop is free' },
            ].map((s, i) => (
              <div key={i} className="invest-stat">
                <div className="invest-big">{s.big}</div>
                <div className="invest-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="invest-cta">
            <a href="#" className="btn-amber">
              <i className="ti ti-file-download" /> Read the whitepaper
            </a>
            <a href="mailto:founders@nacoderiel.com" className="btn-ghost-light">
              Talk to the founders <i className="ti ti-arrow-right" />
            </a>
            <div className="invest-note">v1.1 · May 2026 · Confidential</div>
          </div>
        </div>
      </section>
    </>
  );
}
