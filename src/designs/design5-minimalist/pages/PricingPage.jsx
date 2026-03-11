import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheck, HiChevronDown, HiChevronUp } from 'react-icons/hi';
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

const { pricingPage, homepage } = siteContent;

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d5-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 60 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 120, paddingBottom: 40 }}>
          <div
            className="d5-container"
            style={{
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
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
                Pricing
              </span>
            </motion.div>
            <motion.h1
              variants={fade}
              className="d5-h1"
              style={{ marginTop: 16 }}
            >
              {pricingPage.headline}
            </motion.h1>
            <motion.p
              variants={fade}
              className="d5-body-lg"
              style={{ marginTop: 12 }}
            >
              {pricingPage.subtitle}
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={fade}
              style={{
                marginTop: 32,
                display: 'inline-flex',
                gap: 0,
                border: '1px solid var(--d5-border)',
              }}
            >
              <button
                onClick={() => setYearly(false)}
                style={{
                  padding: '10px 24px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--d5-font)',
                  background: !yearly ? 'var(--d5-primary)' : 'transparent',
                  color: !yearly ? '#FFFFFF' : 'var(--d5-text-secondary)',
                  transition: 'var(--d5-transition)',
                }}
                aria-pressed={!yearly}
              >
                {pricingPage.billingToggle.monthly}
              </button>
              <button
                onClick={() => setYearly(true)}
                style={{
                  padding: '10px 24px',
                  border: 'none',
                  borderLeft: '1px solid var(--d5-border)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--d5-font)',
                  background: yearly ? 'var(--d5-primary)' : 'transparent',
                  color: yearly ? '#FFFFFF' : 'var(--d5-text-secondary)',
                  transition: 'var(--d5-transition)',
                }}
                aria-pressed={yearly}
              >
                {pricingPage.billingToggle.yearly}
              </button>
            </motion.div>
            {yearly && (
              <motion.div
                variants={fade}
                style={{
                  marginTop: 8,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--d5-accent)',
                }}
              >
                {pricingPage.billingToggle.saveBadge}
              </motion.div>
            )}
          </div>
        </Section>

        {/* ── PRICING CARDS ── */}
        <Section style={{ paddingTop: 40 }}>
          <div className="d5-container">
            <div className="d5-grid-3">
              {pricingPage.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  className="d5-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: plan.highlighted
                      ? '2px solid var(--d5-accent)'
                      : 'none',
                  }}
                >
                  {plan.badge && (
                    <div
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: 'var(--d5-accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: 12,
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="d5-h3" style={{ fontSize: '1.125rem' }}>
                    {plan.name}
                  </h3>
                  <p
                    className="d5-body"
                    style={{
                      fontSize: '0.8125rem',
                      margin: '8px 0 20px',
                    }}
                  >
                    {plan.tagline}
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span
                        style={{
                          color: 'var(--d5-text-secondary)',
                          fontSize: '0.8125rem',
                          marginLeft: 2,
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
                      gap: 12,
                      marginBottom: 32,
                      flex: 1,
                    }}
                  >
                    {plan.features.map((feat, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 10,
                          alignItems: 'start',
                        }}
                      >
                        <HiCheck
                          style={{
                            color: 'var(--d5-text)',
                            fontSize: 14,
                            marginTop: 3,
                            flexShrink: 0,
                          }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            color: 'var(--d5-text-secondary)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={
                      plan.highlighted ? 'd5-btn-primary' : 'd5-btn-secondary'
                    }
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── INCLUDED FEATURES ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{pricingPage.includedFeatures.headline}</h2>
              <p className="d5-body" style={{ marginTop: 12 }}>
                {pricingPage.includedFeatures.description}
              </p>
            </motion.div>
            <motion.div
              variants={fade}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                maxWidth: 560,
                margin: '0 auto',
              }}
            >
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 0',
                    borderBottom:
                      i < pricingPage.includedFeatures.items.length - 1
                        ? '1px solid var(--d5-border)'
                        : 'none',
                  }}
                >
                  <HiCheck
                    style={{
                      color: 'var(--d5-accent)',
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontWeight: 500,
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

        <hr className="d5-divider" />

        {/* ── FAQ ── */}
        <Section>
          <div
            className="d5-container"
            style={{ maxWidth: 640, margin: '0 auto' }}
          >
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">FAQ</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {homepage.faq.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  style={{ borderBottom: '1px solid var(--d5-border)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 0',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--d5-text)',
                      fontFamily: 'var(--d5-font)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 16,
                    }}
                    aria-expanded={openFaq === i}
                    aria-controls={`d5-pricing-faq-${i}`}
                  >
                    <span>{item.question}</span>
                    {openFaq === i ? (
                      <HiChevronUp
                        style={{ flexShrink: 0, fontSize: 18 }}
                        aria-hidden="true"
                      />
                    ) : (
                      <HiChevronDown
                        style={{ flexShrink: 0, fontSize: 18 }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      id={`d5-pricing-faq-${i}`}
                      role="region"
                      style={{
                        paddingBottom: 20,
                        color: 'var(--d5-text-secondary)',
                        fontSize: '0.875rem',
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

        <hr className="d5-divider" />

        {/* ── CTA ── */}
        <Section>
          <div className="d5-container" style={{ textAlign: 'center' }}>
            <motion.div
              variants={fade}
              style={{ maxWidth: 480, margin: '0 auto' }}
            >
              <h2 className="d5-h2">{homepage.cta.headline}</h2>
              <p className="d5-body-lg" style={{ marginTop: 12 }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link
                  to="/contact"
                  className="d5-btn-primary"
                  style={{ padding: '14px 40px' }}
                >
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

export default PricingPage;
