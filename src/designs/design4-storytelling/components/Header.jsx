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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
      <a href="#main-content" className="d4-skip-link">
        Skip to main content
      </a>

      <header
        className={`d4-header ${scrolled ? 'scrolled' : ''}`}
        role="banner"
        aria-label="Site header"
      >
        <div className="d4-header-inner">
          <Link to="/" className="d4-logo" aria-label={siteContent.meta.siteName}>
            <span className="d4-logo-mark">CS</span>
            <span>{siteContent.meta.siteName}</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="d4-nav">
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

          <div className="d4-header-actions">
            <Link
              to="/contact"
              className="d4-btn-secondary"
              style={{ padding: '9px 20px', fontSize: '0.8125rem' }}
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="d4-btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.8125rem' }}
            >
              Begin Your Journey
            </Link>
            <button
              className="d4-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`d4-mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="d4-btn-primary"
          style={{ marginTop: 24, textAlign: 'center', borderRadius: 4 }}
        >
          Begin Your Journey
        </Link>
      </div>

      <div className="d4-mobile-cta-bar" aria-hidden="true">
        <Link to="/contact" className="d4-btn-primary">
          Begin Your Journey
        </Link>
      </div>
    </>
  );
};

export default Header;
