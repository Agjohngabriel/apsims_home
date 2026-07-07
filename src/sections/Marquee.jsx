import { TICKER } from '../data/content';
import './Marquee.css';

export default function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <div className="marquee-item" key={i}>
            <span className="m-tag">{m.tag}</span>
            <span>{m.text}</span>
            <b>{m.amt}</b>
            <span className="m-check">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
