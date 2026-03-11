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
    <footer className="d1-footer" role="contentinfo">
      <div className="d1-container">
        <div className="d1-footer-grid">
          <div className="d1-footer-brand">
            <Link to="/" className="d1-logo" aria-label={meta.siteName}>
              <span className="d1-logo-mark">CS</span>
              <span>CPG Synergy</span>
            </Link>
            <p>{footer.description}</p>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: 'var(--d1-text-secondary)', fontSize: '0.875rem' }}>
                <a href={`tel:${meta.phone}`} style={{ color: 'var(--d1-text-secondary)', textDecoration: 'none' }}>
                  {meta.phone}
                </a>
              </p>
              <p style={{ color: 'var(--d1-text-secondary)', fontSize: '0.875rem' }}>
                <a href={`mailto:${meta.email}`} style={{ color: 'var(--d1-text-secondary)', textDecoration: 'none' }}>
                  {meta.email}
                </a>
              </p>
            </div>
          </div>

          <div className="d1-footer-col">
            <h4>Home</h4>
            <ul>
              {footer.homeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d1-footer-col">
            <h4>Resources</h4>
            <ul>
              {footer.resourceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d1-footer-col">
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

        <div className="d1-footer-bottom">
          <span>{footer.copyright}</span>
          <div className="d1-footer-social">
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
