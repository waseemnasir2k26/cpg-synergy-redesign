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
      <a href="#main-content" className="d5-skip-link">
        Skip to main content
      </a>
      <header
        className={`d5-header ${scrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="d5-header-inner">
          <Link
            to="/"
            className="d5-logo"
            aria-label={siteContent.meta.siteName}
          >
            {siteContent.meta.siteName}
          </Link>

          <nav aria-label="Main navigation">
            <ul className="d5-nav">
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

          <div className="d5-header-actions">
            <Link
              to="/contact"
              className="d5-btn-primary"
              style={{ padding: '8px 20px', fontSize: '0.8125rem' }}
            >
              Get Started
            </Link>
            <button
              className="d5-mobile-toggle"
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
        className={`d5-mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="d5-btn-primary"
          style={{ marginTop: 32, textAlign: 'center' }}
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Header;
