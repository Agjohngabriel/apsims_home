import { trackWaitlistJoin } from '../analytics';
import './FinalCta.css';

export default function FinalCta() {
  return (
    <section className="section tight" data-screen-label="Final CTA">
      <div className="shell">
        <div className="final-cta">
          <h2>Get in early. <em>Start free.</em></h2>
          <p>
            Join the waitlist. We're onboarding 200 traders a week, starting with Lagos and Aba.
            You'll get a WhatsApp message when it's your turn — usually within 7–14 days.
          </p>
          <form
            className="waitlist"
            onSubmit={e => { e.preventDefault(); trackWaitlistJoin('final_cta'); alert('On the list — talk soon.'); }}
          >
            <input type="tel" placeholder="+234 800 000 0000" required />
            <button type="submit">
              <i className="ti ti-brand-whatsapp" /> Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
