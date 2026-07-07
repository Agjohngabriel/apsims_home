import { useState } from 'react';
import './Nav.css';
import apsimsLogo from '../assets/apsims-logo.svg';

export default function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="shell nav-inner">
        <a href="#" className="brand">
          <img src={apsimsLogo} alt="APSIMS" className="brand-logo" />
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#try" onClick={() => setMenuOpen(false)}>Try it live</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#compare" onClick={() => setMenuOpen(false)}>vs Others</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        </div>

        <div className="nav-right">
          <a href="#waitlist" className="nav-cta">
            <i className="ti ti-brand-whatsapp" />
            Join waitlist
          </a>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
