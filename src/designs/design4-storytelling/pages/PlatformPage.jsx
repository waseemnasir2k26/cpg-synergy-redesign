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
  HiCheck,
  HiGlobe,
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

const { homepage, pricingPage } = siteContent;
const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const PlatformPage = () => {
  return (
    <div className="d4-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ═══ HERO ═══ */}
        <Section style={{ paddingTop: 100, paddingBottom: 60 }}>
          <div className="d4-container" style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <motion.div variants={fadeUp}>
              <span className="d4-chapter-label">The Platform</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d4-h1" style={{ marginTop: 24 }}>
              The All-in-One{' '}
              <span className="d4-gradient-text">Influencer Marketing</span> Platform
            </motion.h1>
            <motion.p variants={fadeUp} className="d4-body-lg" style={{ marginTop: 24, maxWidth: 620, margin: '24px auto 0' }}>
              {pricingPage.includedFeatures.description}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="d4-btn-primary" style={{ padding: '16px 44px' }}>
                Begin Your Journey <HiArrowRight />
              </Link>
              <Link to="/pricing" className="d4-btn-secondary" style={{ padding: '16px 44px' }}>
                View Pricing
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ CORE FEATURES AS EDITORIAL CHAPTERS ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Core Capabilities</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Everything You Need to{' '}
                <span className="d4-gradient-text">Succeed</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={i} variants={fadeUp}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 56,
                        alignItems: 'center',
                        padding: '52px 0',
                        borderBottom: i < homepage.howItWorks.steps.length - 1
                          ? '1px solid var(--d4-border-light)'
                          : 'none',
                      }}
                    >
                      <div style={{ order: isEven ? 0 : 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                          <div
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: '50%',
                              background: 'var(--d4-gradient-subtle)',
                              border: '1px solid rgba(5,150,105,0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon style={{ fontSize: 20, color: 'var(--d4-primary)' }} />
                          </div>
                          <p className="d4-overline">Chapter {step.number}</p>
                        </div>
                        <h3 className="d4-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 20 }}>
                          {step.title}
                        </h3>
                        <ul className="d4-feature-list">
                          {step.features.map((feat, j) => (
                            <li key={j}>{feat.title}</li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ order: isEven ? 1 : 0 }}>
                        <div
                          style={{
                            width: '100%',
                            aspectRatio: '16/11',
                            background: 'var(--d4-gradient-subtle)',
                            borderRadius: 'var(--d4-radius-lg)',
                            border: '1px solid var(--d4-border-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--d4-font-display)',
                              fontSize: '8rem',
                              fontWeight: 900,
                              color: 'var(--d4-primary)',
                              opacity: 0.05,
                              position: 'absolute',
                            }}
                          >
                            {step.number}
                          </span>
                          <Icon style={{ fontSize: 64, color: 'var(--d4-primary)', opacity: 0.2 }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ═══ INCLUDED FEATURES ═══ */}
        <Section>
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">What's Included</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Included in <span className="d4-gradient-text">Every Plan</span>
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>{pricingPage.includedFeatures.description}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="d4-grid-3" style={{ maxWidth: 920, margin: '0 auto' }}>
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div
                  key={i}
                  className="d4-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '20px 24px',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'var(--d4-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <HiCheck style={{ color: '#FFFFFF', fontSize: 18 }} />
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

        {/* ═══ INTEGRATIONS ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">
                <HiGlobe style={{ marginRight: 4 }} /> Integrations
              </span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Works With Your{' '}
                <span className="d4-accent-text">Favorite Platforms</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 20,
                flexWrap: 'wrap',
                maxWidth: 800,
                margin: '0 auto',
              }}
            >
              {homepage.integrations.platforms.map((platform, i) => (
                <div
                  key={i}
                  className="d4-card"
                  style={{
                    padding: '18px 32px',
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
                      borderRadius: '50%',
                      background: 'var(--d4-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                    }}
                  >
                    {platform.charAt(0)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                    }}
                  >
                    {platform}
                  </span>
                </div>
              ))}
            </motion.div>
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
                Next Chapter
              </span>
              <h2 className="d4-h2" style={{ marginTop: 20, color: '#FFFFFF' }}>
                {homepage.cta.headline}
              </h2>
              <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--d4-font-body)', fontSize: '1.125rem', lineHeight: 1.8 }}>
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
                Begin Your Journey <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default PlatformPage;
