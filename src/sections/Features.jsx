import { FEATURES } from '../data/content';
import './Features.css';

export default function Features() {
  return (
    <section id="features" className="section" data-screen-label="Features">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="section-label">What you get</div>
            <h2 className="section-title">
              Everything a small shop owner actually needs. <em>Nothing</em> they don't.
            </h2>
          </div>
          <p className="section-sub">
            No charts that look impressive but never get used. No menus eight levels deep.
            Just the six jobs APSIMS does every day, on the channel you already check every hour.
          </p>
        </div>

        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className={`feat ${f.cls}`}>
              <div className="feat-icon">
                <i className={`ti ${f.icon}`} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              {f.mock && (
                <div className="feat-mock">
                  <div><span className="you">you →</span> sold 30 bags rice ₦48k</div>
                  <div><span className="bot">apsims ←</span> Logged ✓ · Stock: 70</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
