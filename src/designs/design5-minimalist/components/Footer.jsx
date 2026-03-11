import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { siteContent } from '../../../data/content';

const Footer = () => {
  const { footer, meta, homepage } = siteContent;

  const socialIcons = {
    Facebook: FaFacebookF,
    X: FaXTwitter,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    TikTok: FaTiktok,
    YouTube: FaYoutube,
  };

  return (
    <footer className="d5-footer" role="contentinfo">
      <div className="d5-container">
        {/* Footer CTA */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <h2 className="d5-h2">{homepage.cta.headline}</h2>
          <p
            className="d5-body"
            style={{ marginTop: 12, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}
          >
            {homepage.cta.description}
          </p>
          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="d5-btn-primary">
              {homepage.cta.button}
            </Link>
          </div>
        </div>

        <hr className="d5-divider" style={{ maxWidth: '100%', marginBottom: 48 }} />

        <div className="d5-footer-grid">
          <div className="d5-footer-brand">
            <Link to="/" className="d5-logo" aria-label={meta.siteName}>
              {meta.siteName}
            </Link>
            <p>{footer.description}</p>
            <div style={{ marginTop: 16 }}>
              <p style={{ color: 'var(--d5-text-secondary)', fontSize: '0.8125rem' }}>
                <a
                  href={`tel:${meta.phone}`}
                  style={{ color: 'var(--d5-text-secondary)', textDecoration: 'none' }}
                >
                  {meta.phone}
                </a>
              </p>
              <p style={{ color: 'var(--d5-text-secondary)', fontSize: '0.8125rem' }}>
                <a
                  href={`mailto:${meta.email}`}
                  style={{ color: 'var(--d5-text-secondary)', textDecoration: 'none' }}
                >
                  {meta.email}
                </a>
              </p>
            </div>
          </div>

          <div className="d5-footer-col">
            <h4>Pages</h4>
            <ul>
              {footer.homeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d5-footer-col">
            <h4>Resources</h4>
            <ul>
              {footer.resourceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d5-footer-col">
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

        <div className="d5-footer-bottom">
          <span>{footer.copyright}</span>
          <div className="d5-footer-social">
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
