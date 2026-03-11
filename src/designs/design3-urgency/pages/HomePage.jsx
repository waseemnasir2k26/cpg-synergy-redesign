import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
  HiLightningBolt,
  HiUserGroup,
  HiChartBar,
  HiCog,
  HiTrendingUp,
  HiExclamationCircle,
  HiClock,
  HiCurrencyDollar,
  HiEmojiSad,
  HiCheckCircle,
  HiXCircle,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

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

const { homepage, meta, agencyPage } = siteContent;

const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const painPoints = [
  { icon: HiClock, title: 'Wasting Hours', desc: 'on manual outreach and spreadsheets' },
  { icon: HiCurrencyDollar, title: 'Burning Budget', desc: 'on influencers who don\'t convert' },
  { icon: HiEmojiSad, title: 'Missing Trends', desc: 'while competitors move faster' },
  { icon: HiExclamationCircle, title: 'No Attribution', desc: 'zero visibility into real ROI' },
];

const beforeItems = [
  'Manual influencer outreach via DMs',
  'Spreadsheets for campaign tracking',
  'No way to measure real ROI',
  'Hours wasted on content approvals',
  'Guessing which influencers work',
];

const afterItems = [
  'AI-powered influencer discovery',
  'Centralized campaign dashboard',
  'Full conversion tracking & ROAS',
  'Streamlined content approval flow',
  'Data-driven partnership decisions',
];

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d3-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 118 }}>
        {/* ── 1. HERO — Pain-Point Headline + Urgent CTA ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="d3-container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d3-badge-urgency">
                <HiLightningBolt /> {homepage.hero.badge}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d3-h1" style={{ marginTop: 24 }}>
              {homepage.hero.headline.split('Influencer Marketing').map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="d3-gradient-text">Influencer Marketing</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="d3-body-lg"
              style={{ marginTop: 24, maxWidth: 680, margin: '24px auto 0' }}
            >
              {homepage.hero.subheadline}
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link
                to="/contact"
                className="d3-btn-primary"
                style={{ padding: '18px 48px', fontSize: '1.0625rem' }}
              >
                Claim Your Free Demo <HiArrowRight />
              </Link>
              <Link
                to="/pricing"
                className="d3-btn-secondary"
                style={{ padding: '18px 48px', fontSize: '1.0625rem' }}
              >
                Calculate Your ROI
              </Link>
            </motion.div>
            <motion.p
              variants={fadeUp}
              style={{
                marginTop: 16,
                fontSize: '0.8125rem',
                color: 'var(--d3-text-muted)',
                fontWeight: 500,
              }}
            >
              No credit card required. Setup in under 5 minutes.
            </motion.p>
          </div>
        </Section>

        {/* ── 2. PROBLEM AGITATION ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">The Problem</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Every Day Without Automation, You're{' '}
                <span className="d3-gradient-text">Leaving Money on the Table</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 16 }}>
                Your competitors are already using data-driven influencer marketing. Here is what you are losing without it.
              </p>
            </motion.div>
            <div className="d3-grid-4">
              {painPoints.map((pain, i) => {
                const Icon = pain.icon;
                return (
                  <motion.div key={i} variants={fadeUp} className="d3-pain-card">
                    <div className="d3-pain-icon">
                      <Icon />
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: 6 }}>
                      {pain.title}
                    </h4>
                    <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.875rem' }}>
                      {pain.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── Inline CTA Strip ── */}
        <Section style={{ padding: '0 0', background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container" style={{ paddingBottom: 80 }}>
            <motion.div variants={fadeUp} className="d3-cta-strip">
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  Stop guessing. Start growing.
                </h3>
                <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', marginTop: 4 }}>
                  See exactly how {meta.siteName} can transform your marketing in a live demo.
                </p>
              </div>
              <Link to="/contact" className="d3-btn-primary" style={{ flexShrink: 0, animation: 'none' }}>
                Claim Your Free Demo <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── 3. STATS BAR ── */}
        <div className="d3-stats-bar" role="region" aria-label="Key performance metrics">
          <div className="d3-container">
            <div className="d3-grid-4" style={{ textAlign: 'center' }}>
              {agencyPage.performanceMetrics.map((stat, i) => (
                <div key={i}>
                  <div className="d3-stat-value">{stat.value}</div>
                  <div className="d3-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. SOLUTION REVEAL ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">The Solution</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                {homepage.howItWorks.headline}:{' '}
                <span className="d3-gradient-text">Five Steps to Results</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="d3-card"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 1fr',
                      gap: 24,
                      alignItems: 'start',
                      borderLeft: '4px solid',
                      borderImage: 'var(--d3-gradient) 1',
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: 'var(--d3-gradient-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ fontSize: 24, color: 'var(--d3-primary)' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: 'var(--d3-primary)',
                          marginBottom: 4,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}
                      >
                        Step {step.number}
                      </div>
                      <h3 className="d3-h3">{step.title}</h3>
                      <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
                        {step.features.map((feat, j) => (
                          <span
                            key={j}
                            style={{
                              padding: '6px 16px',
                              borderRadius: 100,
                              background: 'var(--d3-gradient-subtle)',
                              border: '1px solid rgba(239, 68, 68, 0.1)',
                              fontSize: '0.8125rem',
                              color: 'var(--d3-text)',
                              fontWeight: 500,
                            }}
                          >
                            {feat.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── 5. BEFORE vs AFTER COMPARISON ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Transformation</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Before vs. After <span className="d3-gradient-text">{meta.siteName}</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="d3-comparison">
              <div className="d3-comparison-before">
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--d3-primary)',
                    marginBottom: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Without {meta.siteName}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {beforeItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: '0.9375rem',
                        color: 'var(--d3-text-secondary)',
                      }}
                    >
                      <HiXCircle
                        style={{ color: 'var(--d3-primary)', fontSize: '1.25rem', flexShrink: 0, marginTop: 2 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d3-comparison-divider">
                <div className="d3-comparison-arrow">
                  <HiArrowRight />
                </div>
              </div>

              <div className="d3-comparison-after">
                <div
                  style={{
                    position: 'absolute',
                    top: -1,
                    right: 24,
                    background: '#22C55E',
                    color: '#FFFFFF',
                    padding: '4px 14px',
                    borderRadius: '0 0 8px 8px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  With {meta.siteName}
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#16A34A',
                    marginBottom: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  With {meta.siteName}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {afterItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: '0.9375rem',
                        color: 'var(--d3-text)',
                        fontWeight: 500,
                      }}
                    >
                      <HiCheckCircle
                        style={{ color: '#22C55E', fontSize: '1.25rem', flexShrink: 0, marginTop: 2 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── Inline CTA Strip ── */}
        <Section style={{ padding: '0 0' }}>
          <div className="d3-container" style={{ paddingTop: 80, paddingBottom: 0 }}>
            <motion.div variants={fadeUp} className="d3-cta-strip">
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  Ready to see the difference?
                </h3>
                <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', marginTop: 4 }}>
                  Join hundreds of brands already saving hundreds of hours per month.
                </p>
              </div>
              <Link to="/pricing" className="d3-btn-secondary" style={{ flexShrink: 0 }}>
                Calculate Your ROI <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── 6. CASE STUDIES (PROOF) ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Proven Results</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Don't Take Our Word For It —{' '}
                <span className="d3-gradient-text">See the Numbers</span>
              </h2>
            </motion.div>
            <div className="d3-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d3-card"
                  style={{ position: 'relative', overflow: 'hidden' }}
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
                  <h3 className="d3-h3" style={{ marginBottom: 24 }}>
                    {study.name}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div
                          style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                            fontWeight: 800,
                            background: 'var(--d3-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: '0.8125rem',
                            color: 'var(--d3-text-muted)',
                            marginTop: 4,
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link
                to="/contact"
                className="d3-btn-primary"
                style={{ padding: '16px 48px' }}
              >
                Get Results Like These <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── 7. TESTIMONIALS ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Success Stories</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Real Results from <span className="d3-gradient-text">Real Brands</span>
              </h2>
            </motion.div>
            {homepage.testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="d3-card"
                style={{
                  maxWidth: 800,
                  margin: '0 auto',
                  textAlign: 'center',
                  position: 'relative',
                  borderTop: '4px solid',
                  borderImage: 'var(--d3-gradient) 1',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    lineHeight: 1,
                    background: 'var(--d3-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.4,
                    fontFamily: 'serif',
                    marginBottom: 16,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: 'var(--d3-text-secondary)',
                    fontStyle: 'italic',
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--d3-text)' }}>
                    {t.author}
                  </div>
                  <div style={{ color: 'var(--d3-text-muted)', fontSize: '0.875rem' }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── 8. FAQ — Addressing Objections ── */}
        <Section>
          <div className="d3-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">FAQ</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Still Have <span className="d3-gradient-text">Questions?</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                Get the answers you need to make a confident decision.
              </p>
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
                    aria-controls={`d3-faq-${i}`}
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
                      id={`d3-faq-${i}`}
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

        {/* ── 9. FINAL URGENCY CTA ── */}
        <section className="d3-cta-section">
          <div className="d3-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: 700, margin: '0 auto' }}
            >
              <span className="d3-badge-urgency" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <HiLightningBolt /> Limited Availability
              </span>
              <h2 className="d3-h2" style={{ color: '#FFFFFF', marginTop: 16 }}>
                {homepage.cta.headline}
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 36, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
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

export default HomePage;
