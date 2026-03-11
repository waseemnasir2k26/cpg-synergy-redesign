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

  const navLinks = [
    { label: 'Platform', path: '/platform' },
    { label: 'Agency', path: '/agency' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="d1-skip-link">
        Skip to main content
      </a>
      <header className={`d1-header ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="d1-header-inner">
          <Link to="/" className="d1-logo" aria-label={siteContent.meta.siteName}>
            <span className="d1-logo-mark">CS</span>
            <span>CPG Synergy</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="d1-nav">
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

          <div className="d1-header-actions">
            <Link to="/contact" className="d1-btn-secondary" style={{ padding: '10px 20px', fontSize: '0.8125rem' }}>
              Login
            </Link>
            <Link to="/contact" className="d1-btn-primary" style={{ padding: '10px 20px', fontSize: '0.8125rem' }}>
              {siteContent.homepage.hero.cta_primary}
            </Link>
            <button
              className="d1-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      <div className={`d1-mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="d1-btn-primary" style={{ marginTop: 16, textAlign: 'center' }}>
          {siteContent.homepage.hero.cta_primary}
        </Link>
      </div>

      <div className="d1-mobile-cta-bar">
        <Link to="/contact" className="d1-btn-primary">
          {siteContent.homepage.hero.cta_primary}
        </Link>
      </div>
    </>
  );
};

export default Header;
