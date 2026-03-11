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
  HiLocationMarker,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Section = ({ children, className = '', ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={`d4-section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const { contactPage, meta, homepage } = siteContent;

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d4-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ═══ HERO + FORM ═══ */}
        <Section style={{ paddingTop: 100 }}>
          <div className="d4-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: 72,
                alignItems: 'start',
              }}
            >
              {/* Left: Editorial Info */}
              <motion.div variants={fadeUp}>
                <span className="d4-chapter-label">Get in Touch</span>
                <h1
                  className="d4-h1"
                  style={{
                    marginTop: 24,
                    fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
                  }}
                >
                  {contactPage.hero.headline}
                </h1>
                <p
                  className="d4-body-lg"
                  style={{ marginTop: 20 }}
                >
                  {contactPage.hero.subtitle}
                </p>

                <div
                  className="d4-divider-ornament"
                  style={{ margin: '36px 0' }}
                >
                  <span aria-hidden="true">&sect;</span>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <h3 className="d4-h3" style={{ marginBottom: 10 }}>
                    {contactPage.demoSection.headline}
                  </h3>
                  <p className="d4-body">{contactPage.demoSection.description}</p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                  }}
                >
                  <a
                    href={`tel:${meta.phone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      color: 'var(--d4-text)',
                      textDecoration: 'none',
                      fontFamily: 'var(--d4-font-body)',
                      fontSize: '1rem',
                      transition: 'color 0.25s ease',
                    }}
                    aria-label={`Call us at ${meta.phone}`}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'var(--d4-gradient-subtle)',
                        border: '1px solid rgba(5,150,105,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <HiPhone style={{ color: 'var(--d4-primary)', fontSize: 20 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--d4-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 2 }}>
                        Phone
                      </div>
                      <div style={{ fontWeight: 600 }}>{meta.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${meta.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      color: 'var(--d4-text)',
                      textDecoration: 'none',
                      fontFamily: 'var(--d4-font-body)',
                      fontSize: '1rem',
                      transition: 'color 0.25s ease',
                    }}
                    aria-label={`Email us at ${meta.email}`}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'var(--d4-gradient-subtle)',
                        border: '1px solid rgba(5,150,105,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <HiMail style={{ color: 'var(--d4-primary)', fontSize: 20 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--d4-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 2 }}>
                        Email
                      </div>
                      <div style={{ fontWeight: 600 }}>{meta.email}</div>
                    </div>
                  </a>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      color: 'var(--d4-text)',
                      fontFamily: 'var(--d4-font-body)',
                      fontSize: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'var(--d4-gradient-subtle)',
                        border: '1px solid rgba(5,150,105,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <HiLocationMarker style={{ color: 'var(--d4-primary)', fontSize: 20 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--d4-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 2 }}>
                        Website
                      </div>
                      <div style={{ fontWeight: 600 }}>{meta.url}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={fadeUp}>
                <form
                  onSubmit={handleSubmit}
                  className="d4-card"
                  style={{
                    padding: '44px 40px',
                    border: '1px solid var(--d4-border)',
                    boxShadow: '0 8px 40px rgba(26, 46, 26, 0.06)',
                  }}
                >
                  <h3 className="d4-h3" style={{ marginBottom: 8 }}>
                    {contactPage.form.submitButton}
                  </h3>
                  <p className="d4-body" style={{ fontSize: '0.9375rem', marginBottom: 32 }}>
                    {contactPage.demoSection.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {contactPage.form.fields.map((field) => (
                      <div key={field.name}>
                        <label className="d4-label" htmlFor={`d4-${field.name}`}>
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            id={`d4-${field.name}`}
                            name={field.name}
                            className="d4-select"
                            value={formData[field.name]}
                            onChange={handleChange}
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
                            id={`d4-${field.name}`}
                            name={field.name}
                            type={field.type}
                            className="d4-input"
                            placeholder={field.label}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <p
                    style={{
                      marginTop: 24,
                      fontSize: '0.75rem',
                      color: 'var(--d4-text-muted)',
                      lineHeight: 1.6,
                      fontFamily: 'var(--d4-font-body)',
                    }}
                  >
                    {contactPage.form.consent}
                  </p>

                  <button
                    type="submit"
                    className="d4-btn-primary"
                    style={{ width: '100%', marginTop: 28 }}
                  >
                    {contactPage.form.submitButton} <HiArrowRight />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ═══ FAQ ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container-narrow" style={{ maxWidth: 760, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Common Questions</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Questions on the{' '}
                <span className="d4-gradient-text">Journey</span>
              </h2>
            </motion.div>

            <div>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="d4-faq-item">
                  <button
                    className="d4-faq-button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`d4-contact-faq-${i}`}
                  >
                    <span>{item.question}</span>
                    {openFaq === i ? (
                      <HiChevronUp style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-primary)' }} />
                    ) : (
                      <HiChevronDown style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-text-muted)' }} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div id={`d4-contact-faq-${i}`} role="region" className="d4-faq-answer">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ CTA ═══ */}
        <Section className="d4-section-dark">
          <div className="d4-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <span
                className="d4-chapter-label"
                style={{ color: 'rgba(255,255,255,0.5)', justifyContent: 'center' }}
              >
                Begin Your Story
              </span>
              <h2 className="d4-h2" style={{ marginTop: 20, color: '#FFFFFF' }}>
                {homepage.cta.headline}
              </h2>
              <p
                style={{
                  marginTop: 20,
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--d4-font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                }}
              >
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/contact" className="d4-btn-primary" style={{ background: '#FFFFFF', color: 'var(--d4-primary)' }}>
                  {homepage.cta.button}
                </Link>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
