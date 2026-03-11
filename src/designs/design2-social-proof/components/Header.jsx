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
      <a href="#main-content" className="d2-skip-link">
        Skip to main content
      </a>

      <header
        className={`d2-header ${scrolled ? 'scrolled' : ''}`}
        role="banner"
        aria-label="Site header"
      >
        <div className="d2-header-inner">
          <Link to="/" className="d2-logo" aria-label={`${siteContent.meta.siteName} - Home`}>
            <span className="d2-logo-mark" aria-hidden="true">CS</span>
            <span>{siteContent.meta.siteName}</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="d2-nav">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="d2-header-actions">
            <Link
              to="/contact"
              className="d2-btn-secondary"
              style={{ padding: '10px 22px', fontSize: '0.8125rem' }}
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="d2-btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.8125rem' }}
            >
              See It In Action
            </Link>
            <button
              className="d2-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="d2-mobile-nav"
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="d2-mobile-nav"
        className={`d2-mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <nav aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="d2-btn-primary"
            style={{ marginTop: 24, textAlign: 'center', borderRadius: 100 }}
          >
            See It In Action
          </Link>
        </nav>
      </div>

      <div className="d2-mobile-cta-bar" aria-hidden="true">
        <Link to="/contact" className="d2-btn-primary">
          See It In Action
        </Link>
      </div>
    </>
  );
};

export default Header;
