import { Link } from 'react-router-dom';
import './Investors.css';
import apsimsLogo from '../assets/apsims-logo.svg';

const STATS = [
  { big: '40M+',  label: 'Nigerian SMEs, 80% still manage inventory on paper' },
  { big: '95%',   label: "of Nigeria's internet users open WhatsApp daily" },
  { big: '₦200B', label: 'Annual informal retail revenue in Nigeria' },
  { big: '$0',    label: 'Cost per user-initiated message — the core product loop is free' },
];

const REASONS = [
  {
    icon: 'ti-target',
    title: 'First-mover in the channel',
    body: 'No inventory management product of this kind exists natively inside WhatsApp or Telegram at scale in Nigeria. The distribution channel — a messaging app already open on every trader\'s phone — requires zero acquisition spend to reach.',
  },
  {
    icon: 'ti-coin-naira',
    title: 'Capital-efficient model',
    body: 'The product runs on AI-parsed messages and a lightweight backend. No physical logistics, no hardware. Customer acquisition happens via word of mouth inside the same WhatsApp groups traders already use.',
  },
  {
    icon: 'ti-chart-line',
    title: 'Clear path to monetisation',
    body: 'Freemium → Basic (₦1,500/mo) → Pro (₦3,500/mo). Expansion revenue through credit tracking, multi-location, and future microfinance partnerships. Low churn expected — switching cost is losing your entire sales history.',
  },
  {
    icon: 'ti-world',
    title: 'Scalable to West Africa',
    body: 'The same model applies across Ghana, Kenya, and francophone West Africa where WhatsApp and Telegram penetration is similarly high. The AI layer handles multilingual input with minimal retraining.',
  },
];

export default function Investors() {
  return (
    <div className="inv-page">
      <nav className="inv-nav">
        <div className="inv-nav-inner">
          <Link to="/" className="brand">
            <img src={apsimsLogo} alt="APSIMS" className="brand-logo" />
          </Link>
          <a href="mailto:founders@nacoderiel.com" className="inv-nav-cta">
            Talk to us <i className="ti ti-arrow-right" />
          </a>
        </div>
      </nav>

      <header className="inv-hero">
        <div className="inv-shell">
          <div className="inv-eyebrow">For investors &amp; partners</div>
          <h1>
            A first-mover position<br />in a <em>$200B</em> informal market.
          </h1>
          <p>
            Nigerian SMEs are the largest underserved business-software market in West Africa.
            80% still keep books on paper. 95% of internet users open WhatsApp daily.
            The product that lives there wins.
          </p>
          <div className="inv-cta-row">
            <a href="mailto:founders@nacoderiel.com" className="inv-btn-primary">
              <i className="ti ti-mail" /> Talk to the founders
            </a>
          </div>
        </div>
      </header>

      <section className="inv-stats-section">
        <div className="inv-shell">
          <div className="inv-stats">
            {STATS.map((s, i) => (
              <div key={i} className="inv-stat">
                <div className="inv-stat-big">{s.big}</div>
                <div className="inv-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-reasons-section">
        <div className="inv-shell">
          <h2>Why APSIMS, why now</h2>
          <div className="inv-reasons">
            {REASONS.map((r, i) => (
              <div key={i} className="inv-reason">
                <div className="inv-reason-icon">
                  <i className={`ti ${r.icon}`} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-contact-section">
        <div className="inv-shell">
          <div className="inv-contact-box">
            <h2>Get in touch</h2>
            <p>
              We're currently raising a pre-seed round. If you're a founder-friendly investor
              or an operator with distribution in Nigerian or West African markets, we'd like to talk.
            </p>
            <div className="inv-contact-actions">
              <a href="mailto:founders@nacoderiel.com" className="inv-btn-primary">
                <i className="ti ti-mail" /> founders@nacoderiel.com
              </a>
            </div>
            <div className="inv-note">Deck and financials available under NDA.</div>
          </div>
        </div>
      </section>

      <footer className="inv-footer">
        <div className="inv-shell">
          <Link to="/" className="inv-back">
            <i className="ti ti-arrow-left" /> Back to APSIMS
          </Link>
          <span>© 2026 Nacoderiel Limited.</span>
        </div>
      </footer>
    </div>
  );
}
