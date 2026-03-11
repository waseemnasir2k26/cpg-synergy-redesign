import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiMail } from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const Section = ({ children, className = '', ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={`d5-section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const { contactPage, meta } = siteContent;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d5-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 60 }}>
        {/* ── HERO + FORM ── */}
        <Section style={{ paddingTop: 120 }}>
          <div className="d5-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 80,
                alignItems: 'start',
              }}
            >
              {/* Left: Info */}
              <motion.div variants={fade}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'var(--d5-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Contact
                </span>
                <h1
                  className="d5-h1"
                  style={{
                    marginTop: 12,
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  }}
                >
                  {contactPage.hero.headline}
                </h1>
                <p
                  className="d5-body-lg"
                  style={{ marginTop: 12, maxWidth: 400 }}
                >
                  {contactPage.hero.subtitle}
                </p>

                <div style={{ marginTop: 48 }}>
                  <span className="d5-accent-line" />
                  <h3
                    className="d5-h3"
                    style={{
                      fontSize: '1rem',
                      marginTop: 16,
                      marginBottom: 8,
                    }}
                  >
                    {contactPage.demoSection.headline}
                  </h3>
                  <p
                    className="d5-body"
                    style={{ fontSize: '0.875rem', maxWidth: 360 }}
                  >
                    {contactPage.demoSection.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: 48,
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
                      gap: 12,
                      color: 'var(--d5-text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                  >
                    <HiPhone
                      style={{ fontSize: 16, color: 'var(--d5-text)' }}
                      aria-hidden="true"
                    />
                    {meta.phone}
                  </a>
                  <a
                    href={`mailto:${meta.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      color: 'var(--d5-text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                  >
                    <HiMail
                      style={{ fontSize: 16, color: 'var(--d5-text)' }}
                      aria-hidden="true"
                    />
                    {meta.email}
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={fade}>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    border: '1px solid var(--d5-border)',
                    padding: '48px 40px',
                  }}
                  aria-label="Contact form"
                >
                  <h3
                    className="d5-h3"
                    style={{
                      fontSize: '1rem',
                      marginBottom: 36,
                    }}
                  >
                    {contactPage.form.submitButton}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 28,
                    }}
                  >
                    {contactPage.form.fields.map((field) => (
                      <div key={field.name}>
                        <label
                          className="d5-label"
                          htmlFor={`d5-${field.name}`}
                        >
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            id={`d5-${field.name}`}
                            className="d5-select"
                            value={formData[field.name]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [field.name]: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select</option>
                            {field.options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={`d5-${field.name}`}
                            type={field.type}
                            className="d5-input"
                            placeholder={field.label}
                            value={formData[field.name]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [field.name]: e.target.value,
                              })
                            }
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: 24,
                      fontSize: '0.6875rem',
                      color: 'var(--d5-text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {contactPage.form.consent}
                  </p>
                  <button
                    type="submit"
                    className="d5-btn-primary"
                    style={{ width: '100%', marginTop: 28 }}
                  >
                    {contactPage.form.submitButton}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
