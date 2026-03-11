import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiCheck,
  HiChevronDown,
  HiChevronUp,
  HiSparkles,
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

const { pricingPage, homepage } = siteContent;

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d4-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ═══ HERO ═══ */}
        <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
          <div className="d4-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d4-chapter-label" style={{ justifyContent: 'center' }}>
                <HiSparkles style={{ marginRight: 4 }} /> Choose Your Chapter
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d4-h1" style={{ marginTop: 24 }}>
              {pricingPage.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d4-body-lg" style={{ marginTop: 20 }}>
              {pricingPage.subtitle}
            </motion.p>

            {/* Billing Toggle */}
            <motion.div variants={fadeUp} style={{ marginTop: 36, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <div className="d4-toggle-wrap">
                <button
                  className={`d4-toggle-btn ${!yearly ? 'active' : ''}`}
                  onClick={() => setYearly(false)}
                  aria-pressed={!yearly}
                >
                  {pricingPage.billingToggle.monthly}
                </button>
                <button
                  className={`d4-toggle-btn ${yearly ? 'active' : ''}`}
                  onClick={() => setYearly(true)}
                  aria-pressed={yearly}
                >
                  {pricingPage.billingToggle.yearly}
                </button>
              </div>
              {yearly && (
                <span
                  className="d4-badge"
                  style={{
                    background: 'rgba(217, 119, 6, 0.1)',
                    color: 'var(--d4-accent)',
                    border: '1px solid rgba(217, 119, 6, 0.2)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {pricingPage.billingToggle.saveBadge}
                </span>
              )}
            </motion.div>
          </div>
        </Section>

        {/* ═══ PRICING CARDS ═══ */}
        <Section style={{ paddingTop: 0 }}>
          <div className="d4-container">
            <div className="d4-grid-3">
              {pricingPage.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: plan.highlighted
                      ? '2px solid var(--d4-primary)'
                      : '1px solid var(--d4-border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {plan.highlighted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: 'var(--d4-gradient)',
                      }}
                    />
                  )}

                  {plan.badge && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 16,
                      }}
                    >
                      <HiSparkles style={{ color: 'var(--d4-accent)', fontSize: 14 }} />
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--d4-accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontFamily: 'var(--d4-font-body)',
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="d4-h3" style={{ fontSize: '1.25rem' }}>
                    {plan.name}
                  </h3>
                  <p
                    className="d4-body"
                    style={{ fontSize: '0.9375rem', margin: '12px 0 28px' }}
                  >
                    {plan.tagline}
                  </p>

                  <div style={{ marginBottom: 28 }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 900,
                        fontFamily: 'var(--d4-font-display)',
                        color: 'var(--d4-text)',
                      }}
                    >
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span
                        style={{
                          color: 'var(--d4-text-muted)',
                          fontSize: '0.9375rem',
                          fontFamily: 'var(--d4-font-body)',
                          marginLeft: 4,
                        }}
                      >
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
                      <div
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 12,
                          alignItems: 'flex-start',
                        }}
                      >
                        <HiCheck
                          style={{
                            color: 'var(--d4-primary)',
                            fontSize: 18,
                            marginTop: 3,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: 'var(--d4-text-secondary)',
                            fontSize: '0.9375rem',
                            fontFamily: 'var(--d4-font-body)',
                            lineHeight: 1.6,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={plan.highlighted ? 'd4-btn-primary' : 'd4-btn-secondary'}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ INCLUDED FEATURES ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">What's Included</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Included in <span className="d4-gradient-text">Every Plan</span>
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {pricingPage.includedFeatures.description}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="d4-grid-3"
              style={{ maxWidth: 920, margin: '0 auto' }}
            >
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div
                  key={i}
                  className="d4-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '20px 24px',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'var(--d4-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <HiCheck style={{ color: '#FFFFFF', fontSize: 16 }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                    }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ═══ FAQ ═══ */}
        <Section>
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
                    aria-controls={`d4-pricing-faq-${i}`}
                  >
                    <span>{item.question}</span>
                    {openFaq === i ? (
                      <HiChevronUp style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-primary)' }} />
                    ) : (
                      <HiChevronDown style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-text-muted)' }} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div id={`d4-pricing-faq-${i}`} role="region" className="d4-faq-answer">
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
                Your Next Chapter
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
              <Link
                to="/contact"
                className="d4-btn-primary"
                style={{
                  marginTop: 36,
                  padding: '18px 52px',
                  background: '#FFFFFF',
                  color: 'var(--d4-bg-dark)',
                  borderColor: '#FFFFFF',
                }}
              >
                {homepage.cta.button} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
