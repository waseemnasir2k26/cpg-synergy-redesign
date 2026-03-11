import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiPhone,
  HiMail,
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
  HiShieldCheck,
  HiCheckCircle,
  HiStar,
  HiClock,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
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
      className={`d2-section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const { contactPage, meta, homepage, agencyPage } = siteContent;

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="d2-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 72 }}>
        {/* ── HERO + FORM ── */}
        <Section style={{ paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
          <div className="d2-hero-glow" style={{ top: '-150px', right: '-100px' }} aria-hidden="true" />
          <div className="d2-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: 64,
                alignItems: 'start',
              }}
            >
              {/* Left: Info */}
              <motion.div variants={fadeUp} style={{ position: 'relative', zIndex: 1 }}>
                <span className="d2-badge">
                  <HiMail style={{ fontSize: 14 }} aria-hidden="true" />
                  Contact
                </span>
                <h1
                  className="d2-h1"
                  style={{ marginTop: 24, fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {contactPage.hero.headline}
                </h1>
                <p className="d2-body-lg" style={{ marginTop: 16 }}>
                  {contactPage.hero.subtitle}
                </p>

                {/* ── Trust indicators ── */}
                <div
                  style={{
                    marginTop: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div className="d2-trust-item">
                    <HiShieldCheck style={{ color: 'var(--d2-accent)', fontSize: 18 }} aria-hidden="true" />
                    <span>Trusted by hundreds of brands</span>
                  </div>
                  <div className="d2-trust-item">
                    <HiClock style={{ color: 'var(--d2-primary)', fontSize: 18 }} aria-hidden="true" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="d2-trust-item">
                    <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 18 }} aria-hidden="true" />
                    <span>No commitment required</span>
                  </div>
                </div>

                <div style={{ marginTop: 40 }}>
                  <h3
                    className="d2-h3"
                    style={{ fontSize: '1.25rem', marginBottom: 8 }}
                  >
                    {contactPage.demoSection.headline}
                  </h3>
                  <p className="d2-body">{contactPage.demoSection.description}</p>
                </div>

                <div
                  style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <a
                    href={`tel:${meta.phone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      color: 'var(--d2-text-secondary)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.2s',
                    }}
                    aria-label={`Call us at ${meta.phone}`}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: 'var(--d2-gradient-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(37, 99, 235, 0.1)',
                      }}
                    >
                      <HiPhone style={{ color: 'var(--d2-primary)', fontSize: 20 }} aria-hidden="true" />
                    </div>
                    {meta.phone}
                  </a>
                  <a
                    href={`mailto:${meta.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      color: 'var(--d2-text-secondary)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.2s',
                    }}
                    aria-label={`Email us at ${meta.email}`}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: 'var(--d2-gradient-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(37, 99, 235, 0.1)',
                      }}
                    >
                      <HiMail style={{ color: 'var(--d2-primary)', fontSize: 20 }} aria-hidden="true" />
                    </div>
                    {meta.email}
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={scaleUp}>
                {submitted ? (
                  <div
                    className="d2-card"
                    style={{
                      padding: 48,
                      textAlign: 'center',
                      boxShadow: 'var(--d2-shadow-lg)',
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.1)',
                        margin: '0 auto 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 32 }} />
                    </div>
                    <h3 className="d2-h3" style={{ marginBottom: 12 }}>Thank You!</h3>
                    <p className="d2-body">
                      Your demo request has been received. Our team will reach out within 24 hours.
                    </p>
                    <Link
                      to="/"
                      className="d2-btn-secondary"
                      style={{ marginTop: 24 }}
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="d2-card"
                    style={{
                      padding: 40,
                      boxShadow: 'var(--d2-shadow-lg)',
                      border: '1px solid var(--d2-border)',
                    }}
                    aria-label="Book a demo form"
                  >
                    <h3 className="d2-h3" style={{ marginBottom: 8 }}>
                      {contactPage.form.submitButton}
                    </h3>
                    <p
                      className="d2-body"
                      style={{ fontSize: '0.875rem', marginBottom: 28 }}
                    >
                      Fill out the form and we will be in touch shortly.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      {contactPage.form.fields.map((field) => (
                        <div key={field.name}>
                          <label className="d2-label" htmlFor={`d2-${field.name}`}>
                            {field.label}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              id={`d2-${field.name}`}
                              className="d2-select"
                              value={formData[field.name]}
                              onChange={(e) =>
                                setFormData({ ...formData, [field.name]: e.target.value })
                              }
                              required
                              aria-required="true"
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
                              id={`d2-${field.name}`}
                              type={field.type}
                              className="d2-input"
                              placeholder={field.label}
                              value={formData[field.name]}
                              onChange={(e) =>
                                setFormData({ ...formData, [field.name]: e.target.value })
                              }
                              required
                              aria-required="true"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <p
                      style={{
                        marginTop: 20,
                        fontSize: '0.75rem',
                        color: 'var(--d2-text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {contactPage.form.consent}
                    </p>
                    <button
                      type="submit"
                      className="d2-btn-primary"
                      style={{ width: '100%', marginTop: 24 }}
                    >
                      {contactPage.form.submitButton} <HiArrowRight aria-hidden="true" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ── PERFORMANCE PROOF ── */}
        <Section className="d2-section-alt" style={{ padding: '64px 0' }}>
          <div className="d2-container">
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 20,
              }}
            >
              {agencyPage.performanceMetrics.map((metric, i) => (
                <motion.div key={i} variants={scaleUp} className="d2-stat-card">
                  <div className="d2-stat-value">{metric.value}</div>
                  <div className="d2-stat-label">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── TESTIMONIAL ── */}
        <Section className="d2-section-white">
          <div className="d2-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">
                <HiStar style={{ fontSize: 14 }} aria-hidden="true" />
                What Clients Say
              </span>
            </motion.div>
            {homepage.testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                className="d2-testimonial-card"
              >
                <p
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: 'var(--d2-text-secondary)',
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'var(--d2-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'var(--d2-font-display)',
                      fontWeight: 700,
                    }}
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--d2-text)' }}>{t.author}</div>
                    <div style={{ color: 'var(--d2-text-muted)', fontSize: '0.8125rem' }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section className="d2-section-alt">
          <div className="d2-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d2-section-header">
              <h2 className="d2-h2">
                Frequently Asked <span className="d2-gradient-text">Questions</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} role="list">
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp} role="listitem">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      background: 'var(--d2-bg-white)',
                      border: '1px solid var(--d2-border)',
                      borderRadius: openFaq === i ? '16px 16px 0 0' : 16,
                      color: 'var(--d2-text)',
                      fontFamily: 'var(--d2-font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'var(--d2-transition)',
                      boxShadow: 'var(--d2-shadow-sm)',
                    }}
                    aria-expanded={openFaq === i}
                    aria-controls={`d2-contact-faq-${i}`}
                  >
                    {item.question}
                    {openFaq === i ? (
                      <HiChevronUp style={{ flexShrink: 0, fontSize: 20, color: 'var(--d2-primary)' }} aria-hidden="true" />
                    ) : (
                      <HiChevronDown style={{ flexShrink: 0, fontSize: 20, color: 'var(--d2-text-muted)' }} aria-hidden="true" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      id={`d2-contact-faq-${i}`}
                      role="region"
                      aria-label={item.question}
                      style={{
                        padding: '16px 24px 20px',
                        background: 'var(--d2-bg-white)',
                        border: '1px solid var(--d2-border)',
                        borderTop: 'none',
                        borderRadius: '0 0 16px 16px',
                        color: 'var(--d2-text-secondary)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        boxShadow: 'var(--d2-shadow-sm)',
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CTA ── */}
        <Section className="d2-section-white">
          <div className="d2-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d2-h2">{homepage.cta.headline}</h2>
              <p className="d2-body-lg" style={{ marginTop: 16 }}>
                {homepage.cta.description}
              </p>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
