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
    <footer className="d4-footer" role="contentinfo">
      <div className="d4-container">
        <div className="d4-footer-grid">
          <div className="d4-footer-brand">
            <Link
              to="/"
              className="d4-logo"
              aria-label={meta.siteName}
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              <span className="d4-logo-mark">CS</span>
              <span>{meta.siteName}</span>
            </Link>
            <p>{footer.description}</p>
            <div style={{ marginTop: 24 }}>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem' }}>
                <a
                  href={`tel:${meta.phone}`}
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.25s ease' }}
                  aria-label={`Call us at ${meta.phone}`}
                >
                  {meta.phone}
                </a>
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', marginTop: 4 }}>
                <a
                  href={`mailto:${meta.email}`}
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.25s ease' }}
                  aria-label={`Email us at ${meta.email}`}
                >
                  {meta.email}
                </a>
              </p>
            </div>
          </div>

          <div className="d4-footer-col">
            <h4>Navigate</h4>
            <ul>
              {footer.homeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d4-footer-col">
            <h4>Resources</h4>
            <ul>
              {footer.resourceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d4-footer-col">
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

        <div className="d4-footer-bottom">
          <span>{footer.copyright}</span>
          <div className="d4-footer-social" role="list" aria-label="Social media links">
            {footer.socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return Icon ? (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={`Follow us on ${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
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
