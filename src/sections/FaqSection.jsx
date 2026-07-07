import { useState } from 'react';
import { FAQS } from '../data/content';
import './FaqSection.css';

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" data-screen-label="FAQ">
      <div className="shell">
        <div className="section-head center">
          <div>
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Questions, <em>answered.</em></h2>
          </div>
        </div>

        <div className="faq">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-ic"><i className="ti ti-plus" /></span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
