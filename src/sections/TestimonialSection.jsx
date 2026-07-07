import { TESTI_SMALL } from '../data/content';
import './TestimonialSection.css';

export default function TestimonialSection() {
  return (
    <section className="section alt" data-screen-label="Testimonials">
      <div className="shell">
        <div className="testi">
          <div className="testi-main">
            <div className="section-label">From the beta</div>
            <p className="testi-quote">
              <span className="testi-mark">"</span>
              The bank wanted a monthly report. I just asked the bot. Two minutes later
              I had a PDF — and the loan.
            </p>
            <div className="testi-who">
              <div className="testi-photo" />
              <div>
                <div className="testi-name">Adaeze N.</div>
                <div className="testi-role">Boutique owner · Onitsha</div>
              </div>
            </div>
          </div>

          <div className="testi-list">
            {TESTI_SMALL.map((t, i) => (
              <div key={i} className="testi-small">
                <q>{t.q}</q>
                <div className="testi-small-who">
                  <div className={`ts-ph ${t.color === 'b' ? 'b' : ''}`} />
                  <div>
                    <div className="ts-name">{t.name}</div>
                    <div className="ts-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
