import { STEPS } from '../data/content';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section id="how" className="section" data-screen-label="How it works">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="section-label">How it works</div>
            <h2 className="section-title">
              From <em>"sold a bag"</em> to a banked profit report — in three messages.
            </h2>
          </div>
          <p className="section-sub">
            No dashboards to learn. No forms to fill. The bot does the bookkeeping; you do the selling.
            Same data, same brain, on WhatsApp or Telegram.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">0{i + 1}</div>
              <div className="step-tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="mini-chat">
                {s.chat.map((c, j) => (
                  <div key={j} className={`mb ${c.side}`}>{c.text}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
