import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import apsimsLogo from '../assets/apsims-logo.svg';

const TOPICS = [
  { value: 'general',   label: 'General enquiry' },
  { value: 'support',   label: 'Support / my account' },
  { value: 'sales',     label: 'Pricing & plans' },
  { value: 'partner',   label: 'Partnership or integration' },
  { value: 'press',     label: 'Press & media' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'general', message: '' });

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="ct-page">
      <nav className="ct-nav">
        <div className="ct-nav-inner">
          <Link to="/" className="brand">
            <img src={apsimsLogo} alt="APSIMS" className="brand-logo" />
          </Link>
        </div>
      </nav>

      <div className="ct-body">
        <div className="ct-left">
          <div className="section-label" style={{ color: 'var(--ap-green)' }}>Get in touch</div>
          <h1>We're here to help.</h1>
          <p>
            Got a question about your account, pricing, or how APSIMS works?
            Fill out the form and we'll reply within one business day. For faster
            help, message us directly on WhatsApp or Telegram.
          </p>

          <div className="ct-channels">
            <a href="https://wa.me/2348000000000" className="ct-channel">
              <span className="ct-ch-icon wa"><i className="ti ti-brand-whatsapp" /></span>
              <div>
                <div className="ct-ch-title">WhatsApp</div>
                <div className="ct-ch-sub">Fastest response · usually &lt; 1 hr</div>
              </div>
            </a>
            <a href="https://t.me/apsims_support" className="ct-channel">
              <span className="ct-ch-icon tg"><i className="ti ti-brand-telegram" /></span>
              <div>
                <div className="ct-ch-title">Telegram</div>
                <div className="ct-ch-sub">@apsims_support</div>
              </div>
            </a>
            <a href="mailto:apsims@nacoderiel.com" className="ct-channel">
              <span className="ct-ch-icon em"><i className="ti ti-mail" /></span>
              <div>
                <div className="ct-ch-title">Email</div>
                <div className="ct-ch-sub">apsims@nacoderiel.com</div>
              </div>
            </a>
          </div>
        </div>

        <div className="ct-right">
          {sent ? (
            <div className="ct-success">
              <div className="ct-success-icon"><i className="ti ti-circle-check" /></div>
              <h2>Message received.</h2>
              <p>We'll reply to <strong>{form.email}</strong> within one business day. Check your spam folder if you don't hear from us.</p>
              <button className="ct-reset" onClick={() => { setSent(false); setForm({ name: '', email: '', topic: 'general', message: '' }); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-field">
                <label htmlFor="ct-name">Your name</label>
                <input
                  id="ct-name"
                  type="text"
                  placeholder="Adaeze Nwosu"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  required
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-email">Email address</label>
                <input
                  id="ct-email"
                  type="email"
                  placeholder="adaeze@example.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  required
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-topic">What's this about?</label>
                <select
                  id="ct-topic"
                  value={form.topic}
                  onChange={e => set('topic', e.target.value)}
                >
                  {TOPICS.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div className="ct-field">
                <label htmlFor="ct-message">Message</label>
                <textarea
                  id="ct-message"
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="ct-submit">
                Send message <i className="ti ti-send" />
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="ct-footer">
        <div className="ct-footer-inner">
          <Link to="/" className="ct-back">
            <i className="ti ti-arrow-left" /> Back to home
          </Link>
          <span>© 2026 Nacoderiel Limited.</span>
        </div>
      </footer>
    </div>
  );
}
