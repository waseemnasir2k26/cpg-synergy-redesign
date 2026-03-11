import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { siteContent } from '../../../data/content';

const Footer = () => {
  const { footer, meta } = siteContent;

  const socialIcons = {
    Facebook: FaFacebookF,
    X: FaXTwitter,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    TikTok: FaTiktok,
    YouTube: FaYoutube,
  };

  return (
    <footer className="d3-footer" role="contentinfo">
      <div className="d3-container">
        {/* Pre-footer CTA */}
        <div
          style={{
            background: 'var(--d3-gradient)',
            borderRadius: 'var(--d3-radius-lg)',
            padding: '48px 40px',
            textAlign: 'center',
            marginBottom: 64,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: 12,
              position: 'relative',
            }}
          >
            {siteContent.homepage.cta.headline}
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 500,
              margin: '0 auto 24px',
              position: 'relative',
            }}
          >
            {siteContent.homepage.cta.description}
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 36px',
              background: '#FFFFFF',
              color: 'var(--d3-primary)',
              fontWeight: 700,
              borderRadius: 14,
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'var(--d3-transition)',
              position: 'relative',
            }}
          >
            Claim Your Free Demo
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="d3-footer-grid">
          <div className="d3-footer-brand">
            <Link
              to="/"
              className="d3-logo"
              aria-label={meta.siteName}
              style={{ color: '#FFFFFF' }}
            >
              <span className="d3-logo-mark">CS</span>
              <span>{meta.siteName}</span>
            </Link>
            <p>{footer.description}</p>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                <a
                  href={`tel:${meta.phone}`}
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  {meta.phone}
                </a>
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                <a
                  href={`mailto:${meta.email}`}
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  {meta.email}
                </a>
              </p>
            </div>
          </div>

          <div className="d3-footer-col">
            <h4>Home</h4>
            <ul>
              {footer.homeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d3-footer-col">
            <h4>Resources</h4>
            <ul>
              {footer.resourceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d3-footer-col">
            <h4>Legal</h4>
            <ul>
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="d3-footer-bottom">
          <span>{footer.copyright}</span>
          <div className="d3-footer-social">
            {footer.socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return Icon ? (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
