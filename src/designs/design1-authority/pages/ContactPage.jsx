import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiMail, HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi';
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
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={`d1-section ${className}`} {...props}>
      {children}
    </motion.section>
  );
};

const { contactPage, meta, homepage } = siteContent;

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d1-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ── HERO + FORM ── */}
        <Section style={{ paddingTop: 80 }}>
          <div className="d1-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 64, alignItems: 'start' }}>
              {/* Left: Info */}
              <motion.div variants={fadeUp}>
                <span className="d1-badge">Contact</span>
                <h1 className="d1-h1" style={{ marginTop: 24, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {contactPage.hero.headline}
                </h1>
                <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>
                  {contactPage.hero.subtitle}
                </p>

                <div style={{ marginTop: 40 }}>
                  <h3 className="d1-h3" style={{ fontSize: '1.25rem', marginBottom: 8 }}>
                    {contactPage.demoSection.headline}
                  </h3>
                  <p className="d1-body">{contactPage.demoSection.description}</p>
                </div>

                <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <a href={`tel:${meta.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--d1-text-secondary)', textDecoration: 'none', fontSize: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--d1-gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <HiPhone style={{ color: 'var(--d1-primary)', fontSize: 18 }} />
                    </div>
                    {meta.phone}
                  </a>
                  <a href={`mailto:${meta.email}`} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--d1-text-secondary)', textDecoration: 'none', fontSize: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--d1-gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <HiMail style={{ color: 'var(--d1-primary)', fontSize: 18 }} />
                    </div>
                    {meta.email}
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={fadeUp}>
                <form onSubmit={handleSubmit} className="d1-card" style={{ padding: 40 }}>
                  <h3 className="d1-h3" style={{ marginBottom: 32 }}>
                    {contactPage.form.submitButton}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {contactPage.form.fields.map((field) => (
                      <div key={field.name}>
                        <label className="d1-label" htmlFor={`d1-${field.name}`}>{field.label}</label>
                        {field.type === 'select' ? (
                          <select
                            id={`d1-${field.name}`}
                            className="d1-select"
                            value={formData[field.name]}
                            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                            required
                          >
                            <option value="">Select one...</option>
                            {field.options.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={`d1-${field.name}`}
                            type={field.type}
                            className="d1-input"
                            placeholder={field.label}
                            value={formData[field.name]}
                            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p style={{ marginTop: 20, fontSize: '0.75rem', color: 'var(--d1-text-muted)', lineHeight: 1.5 }}>
                    {contactPage.form.consent}
                  </p>
                  <button type="submit" className="d1-btn-primary" style={{ width: '100%', marginTop: 24 }}>
                    {contactPage.form.submitButton} <HiArrowRight />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d1-section-header">
              <h2 className="d1-h2">Frequently Asked <span className="d1-gradient-text">Questions</span></h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'var(--d1-bg-card)', border: '1px solid var(--d1-border)', borderRadius: openFaq === i ? '16px 16px 0 0' : 16, color: 'var(--d1-text)', fontFamily: 'var(--d1-font-body)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left' }} aria-expanded={openFaq === i}>
                    {item.question}
                    {openFaq === i ? <HiChevronUp style={{ flexShrink: 0 }} /> : <HiChevronDown style={{ flexShrink: 0 }} />}
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '16px 24px 20px', background: 'var(--d1-bg-card)', border: '1px solid var(--d1-border)', borderTop: 'none', borderRadius: '0 0 16px 16px', color: 'var(--d1-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CTA ── */}
        <Section>
          <div className="d1-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d1-h2">{homepage.cta.headline}</h2>
              <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>{homepage.cta.description}</p>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
