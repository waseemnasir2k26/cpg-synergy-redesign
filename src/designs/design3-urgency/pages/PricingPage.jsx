import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiLightningBolt,
  HiCheckCircle,
  HiChevronDown,
  HiChevronUp,
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

const { pricingPage, homepage } = siteContent;

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d3-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 118 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="d3-container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d3-badge-urgency">
                <HiLightningBolt /> {pricingPage.billingToggle.saveBadge} on Annual
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d3-h1" style={{ marginTop: 24 }}>
              Stop Overpaying.{' '}
              <span className="d3-gradient-text">Start Scaling.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="d3-body-lg" style={{ marginTop: 20, maxWidth: 580, margin: '20px auto 0' }}>
              {pricingPage.subtitle}
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginTop: 36,
              }}
            >
              <span
                style={{
                  fontWeight: !isYearly ? 700 : 500,
                  color: !isYearly ? 'var(--d3-text)' : 'var(--d3-text-muted)',
                  fontSize: '0.9375rem',
                  transition: 'var(--d3-transition)',
                }}
              >
                {pricingPage.billingToggle.monthly}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
                style={{
                  width: 56,
                  height: 30,
                  borderRadius: 15,
                  background: isYearly ? 'var(--d3-gradient)' : 'var(--d3-border-strong)',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'var(--d3-transition)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: 3,
                    left: isYearly ? 29 : 3,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    transition: 'var(--d3-transition)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  }}
                />
              </button>
              <span
                style={{
                  fontWeight: isYearly ? 700 : 500,
                  color: isYearly ? 'var(--d3-text)' : 'var(--d3-text-muted)',
                  fontSize: '0.9375rem',
                  transition: 'var(--d3-transition)',
                }}
              >
                {pricingPage.billingToggle.yearly}
              </span>
              {isYearly && (
                <span
                  style={{
                    background: 'var(--d3-gradient)',
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: 100,
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

        {/* ── PRICING CARDS ── */}
        <Section style={{ paddingTop: 0 }}>
          <div className="d3-container">
            <div className="d3-grid-3" style={{ alignItems: 'stretch' }}>
              {pricingPage.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`d3-plan-card ${plan.highlighted ? 'highlighted' : ''}`}
                >
                  {plan.badge && (
                    <div className="d3-plan-popular">{plan.badge}</div>
                  )}
                  <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8 }}>
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      color: 'var(--d3-text-secondary)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      marginBottom: 24,
                      minHeight: 48,
                    }}
                  >
                    {plan.tagline}
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800,
                        color: plan.highlighted ? 'var(--d3-primary)' : 'var(--d3-text)',
                      }}
                    >
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span style={{ color: 'var(--d3-text-muted)', fontSize: '0.875rem', marginLeft: 4 }}>
                        /month
                      </span>
                    )}
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      marginBottom: 32,
                      flex: 1,
                    }}
                  >
                    {plan.features.map((feat, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          fontSize: '0.9375rem',
                          color: 'var(--d3-text-secondary)',
                        }}
                      >
                        <HiCheckCircle
                          style={{
                            color: plan.highlighted ? 'var(--d3-primary)' : '#22C55E',
                            fontSize: '1.25rem',
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={plan.highlighted ? 'd3-btn-primary' : 'd3-btn-secondary'}
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      justifyContent: 'center',
                      animation: plan.highlighted ? 'd3-pulse 2.5s ease-in-out infinite' : 'none',
                    }}
                  >
                    {plan.cta} <HiArrowRight />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Inline CTA ── */}
        <Section style={{ padding: '0 0' }}>
          <div className="d3-container" style={{ paddingBottom: 0 }}>
            <motion.div variants={fadeUp} className="d3-cta-strip">
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  Not sure which plan fits?
                </h3>
                <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', marginTop: 4 }}>
                  Book a free demo and our team will recommend the perfect plan for your needs.
                </p>
              </div>
              <Link to="/contact" className="d3-btn-primary" style={{ flexShrink: 0, animation: 'none' }}>
                Claim Your Free Demo <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── INCLUDED FEATURES ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">{pricingPage.includedFeatures.headline}</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Everything You Get,{' '}
                <span className="d3-gradient-text">No Hidden Fees</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {pricingPage.includedFeatures.description}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="d3-grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div
                  key={i}
                  className="d3-card"
                  style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
                >
                  <HiCheckCircle style={{ fontSize: '2rem', color: 'var(--d3-primary)' }} />
                  <h4 style={{ fontWeight: 700 }}>{feat}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section>
          <div className="d3-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">FAQ</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Common <span className="d3-gradient-text">Objections Answered</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      background: 'var(--d3-bg-card)',
                      border: '1px solid var(--d3-border)',
                      borderRadius: openFaq === i ? '16px 16px 0 0' : 16,
                      color: 'var(--d3-text)',
                      fontFamily: 'var(--d3-font)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'var(--d3-transition)',
                      boxShadow: 'var(--d3-shadow-sm)',
                    }}
                    aria-expanded={openFaq === i}
                    aria-controls={`d3-pricing-faq-${i}`}
                  >
                    {item.question}
                    {openFaq === i ? (
                      <HiChevronUp style={{ flexShrink: 0, fontSize: 20, color: 'var(--d3-primary)' }} />
                    ) : (
                      <HiChevronDown style={{ flexShrink: 0, fontSize: 20 }} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      id={`d3-pricing-faq-${i}`}
                      role="region"
                      style={{
                        padding: '16px 24px 20px',
                        background: 'var(--d3-bg-card)',
                        border: '1px solid var(--d3-border)',
                        borderTop: 'none',
                        borderRadius: '0 0 16px 16px',
                        color: 'var(--d3-text-secondary)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
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
                <HiLightningBolt /> Don't Wait
              </span>
              <h2 className="d3-h2" style={{ color: '#FFFFFF', marginTop: 16 }}>
                Every Day You Wait, Your Competitors{' '}
                <span style={{ color: 'var(--d3-accent)' }}>Pull Further Ahead</span>
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  className="d3-btn-primary"
                  style={{
                    padding: '18px 52px',
                    fontSize: '1.0625rem',
                    background: '#FFFFFF',
                    color: 'var(--d3-primary)',
                    boxShadow: '0 8px 32px rgba(255,255,255,0.2)',
                  }}
                >
                  Claim Your Free Demo <HiArrowRight />
                </Link>
              </div>
              <p style={{ marginTop: 14, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                No credit card required. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
