import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Platform', path: '/platform' },
    { label: 'Agency', path: '/agency' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="d3-skip-link">
        Skip to main content
      </a>

      {/* Urgency Banner */}
      <div className="d3-urgency-banner" role="status" aria-live="polite">
        Limited spots available for Q1 onboarding — {siteContent.homepage.hero.cta_primary}
      </div>

      <header
        className={`d3-header ${scrolled ? 'scrolled' : ''}`}
        role="banner"
        style={{ top: 38 }}
      >
        <div className="d3-header-inner">
          <Link to="/" className="d3-logo" aria-label={siteContent.meta.siteName}>
            <span className="d3-logo-mark">CS</span>
            <span>{siteContent.meta.siteName}</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="d3-nav">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="d3-header-actions">
            <Link
              to="/contact"
              className="d3-btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.8125rem' }}
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="d3-btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.8125rem', animation: 'none' }}
            >
              Claim Your Free Demo
            </Link>
            <button
              className="d3-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`d3-mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        style={{ top: 38 }}
      >
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="d3-btn-primary"
          style={{ marginTop: 16, textAlign: 'center' }}
        >
          Claim Your Free Demo
        </Link>
      </div>

      {/* Mobile Bottom CTA Bar */}
      <div className="d3-mobile-cta-bar" style={{ bottom: 0 }}>
        <Link to="/contact" className="d3-btn-primary">
          Claim Your Free Demo
        </Link>
      </div>
    </>
  );
};

export default Header;
