import { CHANNELS } from '../data/content';
import './RoadmapSection.css';

export default function RoadmapSection() {
  return (
    <section className="section tight" data-screen-label="Channels">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="section-label">Available now</div>
            <h2 className="section-title">
              Use APSIMS wherever <em>you</em> work.
            </h2>
          </div>
          <p className="section-sub">
            Pick the channel that fits your workflow. WhatsApp, Telegram, web portal, and mobile
            — all live today, all running the same AI engine and the same data behind the scenes.
          </p>
        </div>

        <div className="channels-grid">
          {CHANNELS.map((c, i) => (
            <div key={i} className={`channel-card ${c.color === 'blue' ? 'tg' : ''}`}>
              <div className="channel-icon">
                <i className={`ti ${c.icon}`} />
              </div>
              <div className="channel-tag">{c.tag}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
