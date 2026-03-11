import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiLightningBolt,
  HiCheckCircle,
  HiPhone,
  HiMail,
  HiClock,
  HiShieldCheck,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Section = ({ children, className = '', ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={`d3-section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const { contactPage, meta, agencyPage, homepage } = siteContent;

const trustSignals = [
  { icon: HiClock, text: 'Demo in under 30 minutes' },
  { icon: HiShieldCheck, text: 'No credit card required' },
  { icon: HiCheckCircle, text: 'Cancel anytime, no lock-in' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="d3-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 118 }}>
        {/* ── HERO + FORM ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="d3-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: 64,
                alignItems: 'start',
              }}
            >
              {/* Left — Messaging */}
              <motion.div variants={fadeUp}>
                <span className="d3-badge-urgency" style={{ marginBottom: 20, display: 'inline-flex' }}>
                  <HiLightningBolt /> Limited Spots Available
                </span>
                <h1 className="d3-h1" style={{ marginTop: 8 }}>
                  {contactPage.hero.headline.split('Experts').map((part, i) =>
                    i === 0 ? (
                      <React.Fragment key={i}>
                        {part}
                        <span className="d3-gradient-text">Experts</span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment key={i}>{part}</React.Fragment>
                    )
                  )}
                </h1>
                <p className="d3-body-lg" style={{ marginTop: 20 }}>
                  {contactPage.hero.subtitle}
                </p>

                {/* Trust Signals */}
                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {trustSignals.map((signal, i) => {
                    const Icon = signal.icon;
                    return (
                      <div
                        key={i}
                        style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'var(--d3-gradient-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon style={{ color: 'var(--d3-primary)', fontSize: '1rem' }} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{signal.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <div style={{ marginTop: 40, padding: '24px', background: 'var(--d3-gradient-subtle)', borderRadius: 'var(--d3-radius)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: 14 }}>
                    Prefer to reach us directly?
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <a
                      href={`tel:${meta.phone}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        color: 'var(--d3-text)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '0.9375rem',
                      }}
                    >
                      <HiPhone style={{ color: 'var(--d3-primary)' }} /> {meta.phone}
                    </a>
                    <a
                      href={`mailto:${meta.email}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        color: 'var(--d3-text)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '0.9375rem',
                      }}
                    >
                      <HiMail style={{ color: 'var(--d3-primary)' }} /> {meta.email}
                    </a>
                  </div>
                </div>

                {/* Performance Proof */}
                <div style={{ marginTop: 32 }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--d3-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
                    Our clients see results like:
                  </p>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {agencyPage.performanceMetrics.slice(0, 3).map((stat, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            background: 'var(--d3-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--d3-text-muted)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div variants={fadeUp}>
                <div
                  className="d3-card"
                  style={{
                    padding: '40px 36px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid var(--d3-border)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: 'var(--d3-gradient)',
                    }}
                  />

                  <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 4 }}>
                    {contactPage.demoSection.headline}
                  </h2>
                  <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.875rem', marginBottom: 28, lineHeight: 1.6 }}>
                    {contactPage.demoSection.description}
                  </p>

                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <HiCheckCircle style={{ fontSize: '3rem', color: '#22C55E', marginBottom: 16 }} />
                      <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8 }}>
                        You're In!
                      </h3>
                      <p style={{ color: 'var(--d3-text-secondary)' }}>
                        Our team will reach out within 24 hours to schedule your personalized demo.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                        {contactPage.form.fields.map((field) => (
                          <div key={field.name}>
                            <label htmlFor={`d3-${field.name}`} className="d3-label">
                              {field.label}
                            </label>
                            {field.type === 'select' ? (
                              <select
                                id={`d3-${field.name}`}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="d3-select"
                                required
                              >
                                <option value="">Select one...</option>
                                {field.options.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                id={`d3-${field.name}`}
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="d3-input"
                                placeholder={field.label}
                                required
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className="d3-btn-primary"
                        style={{
                          width: '100%',
                          marginTop: 28,
                          padding: '16px 24px',
                          fontSize: '1rem',
                          justifyContent: 'center',
                        }}
                      >
                        {contactPage.form.submitButton} <HiArrowRight />
                      </button>

                      <p
                        style={{
                          marginTop: 14,
                          fontSize: '0.75rem',
                          color: 'var(--d3-text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        {contactPage.form.consent}
                      </p>
                    </form>
                  )}
                </div>

                {/* Urgency nudge below form */}
                <div
                  style={{
                    marginTop: 16,
                    padding: '14px 20px',
                    background: 'var(--d3-gradient-subtle)',
                    borderRadius: 'var(--d3-radius-sm)',
                    border: '1px solid rgba(239, 68, 68, 0.1)',
                    textAlign: 'center',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--d3-primary)',
                  }}
                >
                  <HiLightningBolt style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  Join hundreds of brands already saving hundreds of hours per month
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ── TESTIMONIAL PROOF ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">What Clients Say</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Brands Trust {meta.siteName} to{' '}
                <span className="d3-gradient-text">Deliver Results</span>
              </h2>
            </motion.div>
            {homepage.testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="d3-card"
                style={{
                  maxWidth: 700,
                  margin: '0 auto',
                  textAlign: 'center',
                  borderTop: '4px solid transparent',
                  borderImage: 'var(--d3-gradient) 1',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                    background: 'var(--d3-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.4,
                    fontFamily: 'serif',
                    marginBottom: 12,
                  }}
                >
                  &ldquo;
                </div>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--d3-text-secondary)', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontWeight: 700, color: 'var(--d3-text)' }}>{t.author}</div>
                  <div style={{ color: 'var(--d3-text-muted)', fontSize: '0.875rem' }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <section className="d3-cta-section">
          <div className="d3-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: 650, margin: '0 auto' }}
            >
              <span className="d3-badge-urgency" style={{ marginBottom: 16, display: 'inline-flex' }}>
                <HiLightningBolt /> Act Now
              </span>
              <h2 className="d3-h2" style={{ color: '#FFFFFF', marginTop: 16 }}>
                {homepage.cta.headline}
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${meta.phone}`}
                  className="d3-btn-primary"
                  style={{
                    padding: '18px 44px',
                    fontSize: '1.0625rem',
                    background: '#FFFFFF',
                    color: 'var(--d3-primary)',
                    boxShadow: '0 8px 32px rgba(255,255,255,0.2)',
                  }}
                >
                  <HiPhone /> Call Us Now
                </a>
                <a
                  href={`mailto:${meta.email}`}
                  className="d3-btn-secondary"
                  style={{
                    padding: '18px 44px',
                    fontSize: '1.0625rem',
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                  }}
                >
                  <HiMail /> Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
