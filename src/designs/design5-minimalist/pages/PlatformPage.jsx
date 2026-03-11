import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiUserGroup,
  HiCog,
  HiLightningBolt,
  HiChartBar,
  HiTrendingUp,
} from 'react-icons/hi';
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

const { homepage, pricingPage } = siteContent;
const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const PlatformPage = () => {
  return (
    <div className="d5-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 60 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div className="d5-container" style={{ textAlign: 'center' }}>
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
                Platform
              </span>
            </motion.div>
            <motion.h1
              variants={fade}
              className="d5-h1"
              style={{
                marginTop: 16,
                maxWidth: 640,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {homepage.hero.headline}
            </motion.h1>
            <motion.p
              variants={fade}
              className="d5-body-lg"
              style={{
                marginTop: 16,
                maxWidth: 520,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {pricingPage.includedFeatures.description}
            </motion.p>
            <motion.div
              variants={fade}
              style={{
                marginTop: 32,
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/contact"
                className="d5-btn-primary"
                style={{ padding: '14px 40px' }}
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="d5-btn-secondary"
                style={{ padding: '14px 40px' }}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── HOW IT WORKS — alternating layout ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{homepage.howItWorks.headline}</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                return (
                  <motion.div
                    key={i}
                    variants={fade}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: 48,
                      alignItems: 'center',
                      padding: '64px 0',
                      borderBottom:
                        i < homepage.howItWorks.steps.length - 1
                          ? '1px solid var(--d5-border)'
                          : 'none',
                    }}
                  >
                    <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                      <div
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          color: 'var(--d5-accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          marginBottom: 8,
                        }}
                      >
                        Step {step.number}
                      </div>
                      <h3 className="d5-h3" style={{ marginBottom: 16 }}>
                        {step.title}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 8,
                        }}
                      >
                        {step.features.map((feat, j) => (
                          <div
                            key={j}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                            }}
                          >
                            <span
                              style={{
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                background: 'var(--d5-accent)',
                                flexShrink: 0,
                              }}
                            />
                            <span
                              style={{
                                color: 'var(--d5-text-secondary)',
                                fontSize: '0.875rem',
                              }}
                            >
                              {feat.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                      <div
                        style={{
                          border: '1px solid var(--d5-border)',
                          aspectRatio: '4 / 3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#FAFAFA',
                        }}
                        role="img"
                        aria-label={`${step.title} illustration`}
                      >
                        <Icon
                          style={{
                            fontSize: 40,
                            color: 'var(--d5-border)',
                          }}
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

        <hr className="d5-divider" />

        {/* ── ALL FEATURES ── */}
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 1,
                background: 'var(--d5-border)',
                border: '1px solid var(--d5-border)',
              }}
            >
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--d5-bg)',
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'var(--d5-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 8,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--d5-font)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                    }}
                  >
                    {feat}
                  </h4>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── INTEGRATIONS ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{homepage.integrations.headline}</h2>
            </motion.div>
            <motion.div
              variants={fade}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 40,
                flexWrap: 'wrap',
              }}
            >
              {homepage.integrations.platforms.map((p, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--d5-text-secondary)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {p}
                </span>
              ))}
            </motion.div>
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

export default PlatformPage;
