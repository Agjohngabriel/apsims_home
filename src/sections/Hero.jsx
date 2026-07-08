import HeroChatScene from '../components/HeroChatScene';
import { HEADLINES } from '../data/content';
import { trackWaitlistJoin } from '../analytics';
import './Hero.css';

function onWaitlist(e) {
  e.preventDefault();
  trackWaitlistJoin('hero');
  alert("You're on the waitlist — we'll WhatsApp you when it's your turn.");
}

export default function Hero({ tweaks }) {
  const head = HEADLINES[tweaks.headline] || HEADLINES.ledger;

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pip" />
            Built for Nigerian SMEs · Live in beta
          </div>

          <h1 className="hero-h1">{head.h1}</h1>
          <p className="hero-lede">{head.lede}</p>

          <form id="waitlist" className="waitlist" onSubmit={onWaitlist}>
            <input type="tel" placeholder="+234 800 000 0000" required />
            <button type="submit">
              Join waitlist <i className="ti ti-arrow-right" />
            </button>
          </form>

          <div className="waitlist-meta">
            <span className="stat">2,400+ on waitlist</span>
            <span className="dot-sep" />
            <span>Free to start · ₦1,500/mo Basic</span>
            <span className="dot-sep" />
            <a href="#pricing" style={{ color: 'var(--ap-green)', fontWeight: 600 }}>Full pricing →</a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="blob blob-1" />
          <div className="blob blob-2" />

          {tweaks.floatCards && (
            <>
              <div className="float-card fc-1">
                <div className="fc-label">Today's revenue</div>
                <div className="fc-num">₦184k</div>
                <div className="fc-delta up">↑ +12.4% vs last week</div>
              </div>
              <div className="float-card fc-2">
                <div className="fc-label">Stock alert</div>
                <div className="fc-num" style={{ color: 'var(--ap-amber-deep)' }}>Rice · 12 bags</div>
                <div className="fc-delta warn">⚠ Reorder threshold hit</div>
              </div>
              <div className="float-card fc-3">
                <div className="fc-label">Credit owed to you</div>
                <div className="fc-num">₦47,500</div>
                <div className="fc-delta" style={{ color: 'var(--ap-ink-mid)' }}>5 customers · 2 overdue</div>
              </div>
            </>
          )}

          <HeroChatScene />
        </div>
      </div>
    </section>
  );
}
