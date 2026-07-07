import { SEC_LAYERS } from '../data/content';
import './SecuritySection.css';

export default function SecuritySection() {
  return (
    <section className="section dark" data-screen-label="Security">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="section-label">Security architecture</div>
            <h2 className="section-title">
              Lose your phone. <em>Keep your business.</em>
            </h2>
          </div>
          <p className="section-sub">
            Most local competitors rely on phone-number-only login. APSIMS layers five
            independent recovery paths so a stolen phone, lost SIM, or platform outage
            can't separate you from your data.
          </p>
        </div>

        <div className="sec-grid">
          {SEC_LAYERS.map((l, i) => (
            <div key={i} className="sec-card">
              <div className="sec-lyr">{l.n}</div>
              <div className="sec-icon"><i className={`ti ${l.icon}`} /></div>
              <h4>{l.title}</h4>
              <p>{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
