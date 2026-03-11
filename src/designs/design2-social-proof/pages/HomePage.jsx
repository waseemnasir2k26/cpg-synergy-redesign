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
  HiShieldCheck,
  HiStar,
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

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

const { homepage, meta } = siteContent;

const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d2-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 72 }}>
        {/* ── SOCIAL PROOF BAR ── */}
        <Section style={{ padding: '16px 0 0' }}>
          <motion.div variants={fadeIn} className="d2-trust-bar">
            <div className="d2-trust-item">
              <HiShieldCheck style={{ color: 'var(--d2-accent)', fontSize: 18 }} aria-hidden="true" />
              <span>Trusted by <strong>hundreds</strong> of brands</span>
            </div>
            <div className="d2-trust-item">
              <HiStar style={{ color: 'var(--d2-primary)', fontSize: 18 }} aria-hidden="true" />
              <span><strong>3.5x</strong> average ROAS</span>
            </div>
            <div className="d2-trust-item">
              <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 18 }} aria-hidden="true" />
              <span><strong>16.2M+</strong> views generated</span>
            </div>
          </motion.div>
        </Section>

        {/* ── HERO ── */}
        <Section style={{ paddingTop: 48, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
          <div className="d2-hero-glow" style={{ top: '-200px', right: '-200px' }} aria-hidden="true" />
          <div className="d2-hero-glow" style={{ bottom: '-300px', left: '-200px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)' }} aria-hidden="true" />
          <div className="d2-container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div variants={fadeUp}>
              <span className="d2-badge">
                <HiLightningBolt style={{ fontSize: 14 }} aria-hidden="true" />
                {homepage.hero.badge}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d2-h1" style={{ marginTop: 28 }}>
              {homepage.hero.headline.split('Influencer Marketing').map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="d2-gradient-text">Influencer Marketing</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="d2-body-lg"
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
                className="d2-btn-primary"
                style={{ padding: '16px 40px', fontSize: '1rem' }}
              >
                See It In Action <HiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/agency"
                className="d2-btn-secondary"
                style={{ padding: '16px 40px', fontSize: '1rem' }}
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── LOGO BAR ── */}
        <Section style={{ padding: '32px 0 48px' }}>
          <div className="d2-container">
            <motion.p
              variants={fadeUp}
              style={{
                textAlign: 'center',
                fontSize: '0.8125rem',
                color: 'var(--d2-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Integrates with the platforms you trust
            </motion.p>
            <motion.div variants={fadeUp} className="d2-logo-ticker" aria-label="Supported platforms">
              {homepage.platformLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d2-divider" style={{ maxWidth: 'var(--d2-container)', margin: '0 auto' }} />

        {/* ── CASE STUDIES (Social Proof) ── */}
        <Section className="d2-section-white">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">
                <HiShieldCheck style={{ fontSize: 14 }} aria-hidden="true" />
                Proven Results
              </span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Real Brands. <span className="d2-gradient-text">Real Results.</span>
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                See how leading brands use {meta.siteName} to drive measurable outcomes.
              </p>
            </motion.div>
            <div className="d2-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className="d2-card"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: 'var(--d2-gradient)',
                      borderRadius: '16px 16px 0 0',
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="d2-h3" style={{ marginBottom: 24, marginTop: 8 }}>{study.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="d2-stat-value" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                          {stat.value}
                        </div>
                        <div className="d2-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/agency" className="d2-btn-secondary">
                View Case Studies <HiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── TESTIMONIALS ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">
                <HiStar style={{ fontSize: 14 }} aria-hidden="true" />
                Testimonials
              </span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Trusted by <span className="d2-gradient-text">Marketing Leaders</span>
              </h2>
            </motion.div>
            {homepage.testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                className="d2-testimonial-card"
                style={{ maxWidth: 800, margin: '0 auto' }}
              >
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: 'var(--d2-text-secondary)',
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'var(--d2-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'var(--d2-font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--d2-text)' }}>{t.author}</div>
                    <div style={{ color: 'var(--d2-text-muted)', fontSize: '0.875rem' }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── HOW IT WORKS ── */}
        <Section className="d2-section-white">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">How It Works</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Five Steps to <span className="d2-gradient-text">Marketing Success</span>
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                From discovery to ROI tracking, our platform streamlines every step.
              </p>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900, margin: '0 auto' }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="d2-card"
                    style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'start' }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 16,
                        background: 'var(--d2-gradient-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <Icon style={{ fontSize: 26, color: 'var(--d2-primary)' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--d2-primary)',
                          marginBottom: 4,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontFamily: 'var(--d2-font-body)',
                        }}
                      >
                        Step {step.number}
                      </div>
                      <h3 className="d2-h3">{step.title}</h3>
                      <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
                        {step.features.map((feat, j) => (
                          <span
                            key={j}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              padding: '6px 16px',
                              borderRadius: 100,
                              background: 'var(--d2-gradient-subtle)',
                              border: '1px solid rgba(37, 99, 235, 0.08)',
                              fontSize: '0.8125rem',
                              color: 'var(--d2-text-secondary)',
                              fontWeight: 500,
                            }}
                          >
                            <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 14 }} aria-hidden="true" />
                            {feat.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link
                to="/contact"
                className="d2-btn-primary"
                style={{ padding: '16px 40px', fontSize: '1rem' }}
              >
                See It In Action <HiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── INTEGRATIONS ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Ecosystem</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Seamless <span className="d2-gradient-text">{homepage.integrations.headline}</span>
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                Connect with all the platforms your audience lives on.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="d2-grid-4"
              style={{ maxWidth: 800, margin: '0 auto' }}
            >
              {homepage.integrations.platforms.map((platform, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className="d2-card"
                  style={{ textAlign: 'center', padding: 28 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'var(--d2-gradient)',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      fontFamily: 'var(--d2-font-display)',
                    }}
                    aria-hidden="true"
                  >
                    {platform.charAt(0)}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--d2-text)' }}>
                    {platform}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── RESOURCES ── */}
        <Section className="d2-section-white">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Resources</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Latest <span className="d2-gradient-text">Insights</span>
              </h2>
            </motion.div>
            <div className="d2-grid-2">
              {homepage.resources.map((post, i) => (
                <motion.div key={i} variants={scaleUp} className="d2-card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.75rem',
                      color: 'var(--d2-primary)',
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        padding: '4px 10px',
                        background: 'var(--d2-gradient-subtle)',
                        borderRadius: 100,
                        fontSize: '0.6875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Blog
                    </span>
                    <span style={{ color: 'var(--d2-text-muted)' }}>{post.date}</span>
                  </div>
                  <h3
                    className="d2-h3"
                    style={{ fontSize: '1.125rem', marginBottom: 12, lineHeight: 1.4 }}
                  >
                    {post.title}
                  </h3>
                  <p className="d2-body" style={{ fontSize: '0.875rem' }}>{post.excerpt}</p>
                  <div
                    style={{
                      marginTop: 20,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.8125rem',
                      color: 'var(--d2-text-muted)',
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: 'var(--d2-gradient-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--d2-primary)',
                      }}
                      aria-hidden="true"
                    >
                      {post.author.charAt(0)}
                    </div>
                    <span>{post.author}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section className="d2-section-alt" id="faq">
          <div className="d2-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">FAQ</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
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
                    aria-controls={`d2-faq-${i}`}
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
                      id={`d2-faq-${i}`}
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

        {/* ── FINAL CTA ── */}
        <Section className="d2-section-white">
          <div className="d2-container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={scaleUp}>
              <div className="d2-newsletter">
                <h2
                  className="d2-h2"
                  style={{ color: '#FFFFFF', position: 'relative', zIndex: 1 }}
                >
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
                    className="d2-btn-secondary"
                    style={{
                      background: '#FFFFFF',
                      color: 'var(--d2-primary)',
                      border: 'none',
                      padding: '16px 48px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
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

export default HomePage;
