import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './ComingSoon.css';
import apsimsLogo from '../assets/apsims-logo.svg';

export default function ComingSoon() {
  return (
    <div className="cs-page">
      <SEO
        title="Mobile & Desktop Apps — Coming Soon"
        description="APSIMS native apps for iOS, Android, and desktop are in development. In the meantime, get started right now inside WhatsApp or Telegram — no download needed."
        path="/apps"
        noIndex={true}
      />
      <nav className="cs-nav">
        <Link to="/" className="brand">
          <img src={apsimsLogo} alt="APSIMS" className="brand-logo" />
        </Link>
      </nav>

      <div className="cs-body">
        <div className="cs-icon-row">
          <div className="cs-icon">
            <i className="ti ti-device-mobile" />
          </div>
          <div className="cs-icon">
            <i className="ti ti-brand-android" />
          </div>
          <div className="cs-icon desktop">
            <i className="ti ti-device-desktop" />
          </div>
        </div>

        <div className="cs-tag">Coming soon</div>

        <h1>Native apps are on the way.</h1>
        <p>
          iOS, Android, and desktop apps are in development. In the meantime,
          APSIMS works right now — fully featured — inside WhatsApp or Telegram.
          No download needed.
        </p>

        <div className="cs-channels">
          <a href="https://wa.me/2348000000000" className="cs-channel-btn wa">
            <i className="ti ti-brand-whatsapp" />
            Start on WhatsApp
          </a>
          <a href="https://t.me/apsims_bot" className="cs-channel-btn tg">
            <i className="ti ti-brand-telegram" />
            Start on Telegram
          </a>
        </div>

        <Link to="/" className="cs-back">
          <i className="ti ti-arrow-left" /> Back to home
        </Link>
      </div>
    </div>
  );
}
