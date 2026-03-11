import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiChevronDown,
  HiChevronUp,
  HiLightningBolt,
  HiUserGroup,
  HiChartBar,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

/* Subtle fade only — no sliding, no flashy motion */
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

const { homepage, pricingPage } = siteContent;

const featureIcons = [HiUserGroup, HiLightningBolt, HiChartBar];

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [yearly, setYearly] = useState(false);

  /* Pick the first 3 features from howItWorks for minimal display */
  const featureSteps = homepage.howItWorks.steps.slice(0, 3);

  /* Pick the first case study */
  const featuredCase = homepage.caseStudies[0];

  /* Pick the first testimonial */
  const testimonial = homepage.testimonials[0];

  /* Key stats pulled from case studies */
  const statBar = [
    homepage.caseStudies[0].stats[0],
    homepage.caseStudies[1].stats[0],
    homepage.caseStudies[1].stats[1],
  ];

  return (
    <div className="d5-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 60 }}>
        {/* ═══ 1. HERO — single headline, single sub, one CTA ═══ */}
        <Section style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div className="d5-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fade}>
              <span className="d5-accent-line" />
            </motion.div>
            <motion.h1
              variants={fade}
              className="d5-h1"
              style={{ marginTop: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
            >
              {homepage.hero.headline}
            </motion.h1>
            <motion.p
              variants={fade}
              className="d5-body-lg"
              style={{
                marginTop: 20,
                maxWidth: 560,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {homepage.hero.subheadline}
            </motion.p>
            <motion.div variants={fade} style={{ marginTop: 40 }}>
              <Link to="/contact" className="d5-btn-primary" style={{ padding: '14px 40px' }}>
                Get Started
              </Link>
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 2. THREE FEATURE BLOCKS ═══ */}
        <Section>
          <div className="d5-container">
            <div className="d5-grid-3">
              {featureSteps.map((step, i) => {
                const Icon = featureIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={fade}
                    className="d5-card"
                    style={{ textAlign: 'center' }}
                  >
                    <Icon
                      style={{
                        fontSize: 24,
                        color: 'var(--d5-accent)',
                        marginBottom: 20,
                      }}
                      aria-hidden="true"
                    />
                    <h3
                      className="d5-h3"
                      style={{ marginBottom: 12, fontSize: '1.125rem' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="d5-body"
                      style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      {step.features.map((f) => f.title).join('. ')}.
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 3. STAT BAR ═══ */}
        <Section className="d5-section-sm">
          <div className="d5-container">
            <motion.div
              variants={fade}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 48,
                textAlign: 'center',
              }}
            >
              {statBar.map((stat, i) => (
                <div key={i}>
                  <div className="d5-stat-value">{stat.value}</div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--d5-text-secondary)',
                      marginTop: 4,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 4. CASE STUDY HIGHLIGHT ═══ */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{featuredCase.name}</h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                Results that speak for themselves.
              </p>
            </motion.div>
            <motion.div
              variants={fade}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 1,
                background: 'var(--d5-border)',
                border: '1px solid var(--d5-border)',
              }}
            >
              {featuredCase.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--d5-bg)',
                    padding: '40px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div className="d5-stat-value" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--d5-text-secondary)',
                      marginTop: 6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 5. PRODUCT SCREENSHOT PLACEHOLDER ═══ */}
        <Section>
          <div className="d5-container">
            <motion.div
              variants={fade}
              style={{
                border: '1px solid var(--d5-border)',
                aspectRatio: '16 / 9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FAFAFA',
              }}
              role="img"
              aria-label="Platform dashboard preview"
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--d5-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 500,
                }}
              >
                Platform Preview
              </span>
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 6. TESTIMONIAL ═══ */}
        <Section>
          <div className="d5-container" style={{ textAlign: 'center' }}>
            <motion.div
              variants={fade}
              style={{ maxWidth: 640, margin: '0 auto' }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.7,
                  color: 'var(--d5-secondary)',
                  fontWeight: 400,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div style={{ marginTop: 32 }}>
                <span className="d5-accent-line" />
                <div
                  style={{
                    marginTop: 16,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--d5-text)',
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--d5-text-secondary)',
                    marginTop: 2,
                  }}
                >
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ═══ 7. PRICING — simple 3-column ═══ */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{pricingPage.headline}</h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                {pricingPage.subtitle}
              </p>
              {/* Billing Toggle */}
              <div
                style={{
                  marginTop: 24,
                  display: 'inline-flex',
                  gap: 0,
                  border: '1px solid var(--d5-border)',
                }}
              >
                <button
                  onClick={() => setYearly(false)}
                  style={{
                    padding: '8px 20px',
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
                    padding: '8px 20px',
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
              </div>
              {yearly && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--d5-accent)',
                  }}
                >
                  {pricingPage.billingToggle.saveBadge}
                </div>
              )}
            </motion.div>

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
                    style={{ fontSize: '0.8125rem', margin: '8px 0 20px' }}
                  >
                    {plan.tagline}
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <span
                      style={{
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
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
                          alignItems: 'baseline',
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: 'var(--d5-accent)',
                            flexShrink: 0,
                            marginTop: 6,
                          }}
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

        {/* ═══ 8. FAQ ACCORDION ═══ */}
        <Section>
          <div
            className="d5-container"
            style={{ maxWidth: 640, margin: '0 auto' }}
          >
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">FAQ</h2>
            </motion.div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
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
                    aria-controls={`d5-faq-${i}`}
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
                      id={`d5-faq-${i}`}
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

        {/* ═══ 9. FINAL CTA — same as hero ═══ */}
        <Section>
          <div className="d5-container" style={{ textAlign: 'center' }}>
            <motion.div
              variants={fade}
              style={{ maxWidth: 560, margin: '0 auto' }}
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
                  Get Started
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

export default HomePage;
