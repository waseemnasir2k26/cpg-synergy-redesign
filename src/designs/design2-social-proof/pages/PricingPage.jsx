import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiCheck,
  HiChevronDown,
  HiChevronUp,
  HiStar,
  HiShieldCheck,
  HiCheckCircle,
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

const { pricingPage, homepage } = siteContent;

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d2-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 72 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div className="d2-hero-glow" style={{ top: '-200px', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true" />
          <div
            className="d2-container"
            style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}
          >
            <motion.div variants={fadeUp}>
              <span className="d2-badge">
                <HiStar style={{ fontSize: 14 }} aria-hidden="true" />
                Pricing
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d2-h1" style={{ marginTop: 24 }}>
              {pricingPage.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d2-body-lg" style={{ marginTop: 16 }}>
              {pricingPage.subtitle}
            </motion.p>

            {/* ── Social proof under headline ── */}
            <motion.div variants={fadeUp} className="d2-trust-bar" style={{ marginTop: 24 }}>
              <div className="d2-trust-item">
                <HiShieldCheck style={{ color: 'var(--d2-accent)', fontSize: 16 }} aria-hidden="true" />
                <span>No hidden fees</span>
              </div>
              <div className="d2-trust-item">
                <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 16 }} aria-hidden="true" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* ── Billing Toggle ── */}
            <motion.div
              variants={fadeUp}
              style={{ marginTop: 32, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}
            >
              <div className="d2-toggle-wrapper">
                <button
                  onClick={() => setYearly(false)}
                  className={`d2-toggle-btn ${!yearly ? 'active' : ''}`}
                  aria-pressed={!yearly}
                >
                  {pricingPage.billingToggle.monthly}
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`d2-toggle-btn ${yearly ? 'active' : ''}`}
                  aria-pressed={yearly}
                >
                  {pricingPage.billingToggle.yearly}
                </button>
              </div>
              {yearly && (
                <span className="d2-save-badge">
                  {pricingPage.billingToggle.saveBadge}
                </span>
              )}
            </motion.div>
          </div>
        </Section>

        {/* ── PRICING CARDS ── */}
        <Section style={{ paddingTop: 0 }}>
          <div className="d2-container">
            <div className="d2-grid-3">
              {pricingPage.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className={`d2-card ${plan.highlighted ? 'd2-card-highlighted' : ''}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  {plan.badge && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 16,
                      }}
                    >
                      <HiStar style={{ color: 'var(--d2-primary)', fontSize: 16 }} aria-hidden="true" />
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--d2-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="d2-h3" style={{ fontSize: '1.25rem' }}>
                    {plan.name}
                  </h3>
                  <p className="d2-body" style={{ fontSize: '0.875rem', margin: '12px 0 24px' }}>
                    {plan.tagline}
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800,
                        fontFamily: 'var(--d2-font-display)',
                        color: 'var(--d2-text)',
                      }}
                    >
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span style={{ color: 'var(--d2-text-muted)', fontSize: '0.875rem' }}>
                        /mo
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      marginBottom: 32,
                      flex: 1,
                    }}
                  >
                    {plan.features.map((feat, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                        <div className="d2-check-icon" aria-hidden="true">
                          <HiCheck style={{ fontSize: 12 }} />
                        </div>
                        <span style={{ color: 'var(--d2-text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={plan.highlighted ? 'd2-btn-primary' : 'd2-btn-secondary'}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── INCLUDED FEATURES ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <h2 className="d2-h2">
                Included in <span className="d2-gradient-text">All Plans</span>
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                {pricingPage.includedFeatures.description}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="d2-grid-3"
              style={{ maxWidth: 900, margin: '0 auto' }}
            >
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '18px 22px',
                    background: 'var(--d2-bg-white)',
                    borderRadius: 14,
                    border: '1px solid var(--d2-border)',
                    boxShadow: 'var(--d2-shadow-sm)',
                  }}
                >
                  <HiCheckCircle
                    style={{ color: 'var(--d2-accent)', fontSize: 20, flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      color: 'var(--d2-text)',
                    }}
                  >
                    {feat}
                  </span>
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
                      fontSize: '0.9375rem',
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
                    aria-controls={`d2-pricing-faq-${i}`}
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
                      id={`d2-pricing-faq-${i}`}
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
          <div className="d2-container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={scaleUp}>
              <div className="d2-newsletter">
                <h2 className="d2-h2" style={{ color: '#FFFFFF', position: 'relative', zIndex: 1 }}>
                  {homepage.cta.headline}
                </h2>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: '1.125rem',
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: 500,
                    margin: '16px auto 0',
                    position: 'relative',
                    zIndex: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {homepage.cta.description}
                </p>
                <div style={{ marginTop: 32, position: 'relative', zIndex: 1 }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: '#FFFFFF',
                      color: 'var(--d2-primary)',
                      border: 'none',
                      padding: '16px 48px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: 100,
                      textDecoration: 'none',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                      transition: 'var(--d2-transition)',
                      fontFamily: 'var(--d2-font-body)',
                    }}
                  >
                    {homepage.cta.button} <HiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
