import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiUserGroup,
  HiCog,
  HiLightningBolt,
  HiChartBar,
  HiTrendingUp,
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

const { homepage, pricingPage } = siteContent;
const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const PlatformPage = () => {
  return (
    <div className="d2-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 72 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
          <div className="d2-hero-glow" style={{ top: '-200px', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true" />
          <div className="d2-container" style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div variants={fadeUp}>
              <span className="d2-badge">
                <HiLightningBolt style={{ fontSize: 14 }} aria-hidden="true" />
                Platform
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d2-h1" style={{ marginTop: 24 }}>
              The All-in-One{' '}
              <span className="d2-gradient-text">Influencer Marketing</span>{' '}
              Platform
            </motion.h1>
            <motion.p variants={fadeUp} className="d2-body-lg" style={{ marginTop: 20 }}>
              {pricingPage.includedFeatures.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ marginTop: 36, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link
                to="/contact"
                className="d2-btn-primary"
                style={{ padding: '16px 40px' }}
              >
                See It In Action <HiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/pricing"
                className="d2-btn-secondary"
                style={{ padding: '16px 40px' }}
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="d2-trust-bar"
              style={{ marginTop: 48 }}
            >
              <div className="d2-trust-item">
                <HiShieldCheck style={{ color: 'var(--d2-accent)', fontSize: 16 }} aria-hidden="true" />
                <span>Trusted by <strong>hundreds</strong> of brands</span>
              </div>
              <div className="d2-trust-item">
                <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 16 }} aria-hidden="true" />
                <span><strong>8+</strong> platform integrations</span>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── CORE FEATURES (Alternating Layout) ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Core Features</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                Everything You Need to <span className="d2-gradient-text">Succeed</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 48,
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ order: isEven ? 0 : 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 14,
                            background: 'var(--d2-gradient-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          aria-hidden="true"
                        >
                          <Icon style={{ fontSize: 22, color: 'var(--d2-primary)' }} />
                        </div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--d2-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="d2-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>
                        {step.title}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {step.features.map((feat, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <HiCheckCircle
                              style={{ color: 'var(--d2-accent)', fontSize: 18, flexShrink: 0 }}
                              aria-hidden="true"
                            />
                            <span style={{ color: 'var(--d2-text-secondary)', fontSize: '1rem' }}>
                              {feat.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ order: isEven ? 1 : 0 }}>
                      <div
                        className="d2-card"
                        style={{
                          aspectRatio: '16/10',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--d2-gradient-subtle)',
                          border: '1px solid rgba(37, 99, 235, 0.1)',
                        }}
                      >
                        <Icon
                          style={{ fontSize: 64, color: 'var(--d2-primary)', opacity: 0.2 }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── ALL FEATURES LIST ── */}
        <Section className="d2-section-white">
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
                  className="d2-card"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'var(--d2-gradient)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontFamily: 'var(--d2-font-display)',
                      fontSize: '1rem',
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--d2-font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--d2-text)',
                    }}
                  >
                    {feat}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── INTEGRATIONS ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <h2 className="d2-h2">
                Works With Your <span className="d2-gradient-text">Favorite Platforms</span>
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                Connect with all the platforms your audience uses.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}
            >
              {homepage.integrations.platforms.map((p, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className="d2-card"
                  style={{
                    padding: '20px 36px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: 'var(--d2-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--d2-font-display)',
                    }}
                    aria-hidden="true"
                  >
                    {p.charAt(0)}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{p}</div>
                </motion.div>
              ))}
            </motion.div>
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
                    See It In Action <HiArrowRight aria-hidden="true" />
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

export default PlatformPage;
