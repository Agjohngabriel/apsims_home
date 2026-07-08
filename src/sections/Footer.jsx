import { Link } from 'react-router-dom';
import './Footer.css';
import apsimsLogo from '../assets/apsims-logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="brand">
              <img src={apsimsLogo} alt="APSIMS" className="brand-logo" />
            </div>
            <p className="footer-blurb">
              Inventory management on WhatsApp and Telegram.
              Built for the way Nigerian traders actually work.
            </p>
          </div>

          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#try">Try it live</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/investors">For investors</Link></li>
              <li><a href="#">Privacy policy</a></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h5>Get APSIMS</h5>
            <ul>
              <li><a href="#"><i className="ti ti-brand-whatsapp" /> WhatsApp</a></li>
              <li><a href="#"><i className="ti ti-brand-telegram" /> Telegram</a></li>
              <li><Link to="/apps"><i className="ti ti-device-mobile" /> iOS app</Link></li>
              <li><Link to="/apps"><i className="ti ti-brand-android" /> Android app</Link></li>
              <li><Link to="/apps"><i className="ti ti-device-desktop" /> Desktop app</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Nacoderiel Limited. All rights reserved.</div>
          <div className="made-in">
            <span className="ng-flag" />
            Made for Nigeria's markets.
          </div>
        </div>
      </div>
    </footer>
  );
}
