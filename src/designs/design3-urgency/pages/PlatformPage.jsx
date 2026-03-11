import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiLightningBolt,
  HiUserGroup,
  HiChartBar,
  HiCog,
  HiTrendingUp,
  HiCheckCircle,
  HiGlobe,
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

const { homepage, pricingPage, agencyPage } = siteContent;
const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const PlatformPage = () => {
  return (
    <div className="d3-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 118 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="d3-container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d3-badge-urgency">
                <HiLightningBolt /> Platform
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d3-h1" style={{ marginTop: 24 }}>
              Stop Losing Time.{' '}
              <span className="d3-gradient-text">Start Scaling Results.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="d3-body-lg" style={{ marginTop: 20, maxWidth: 660, margin: '20px auto 0' }}>
              {pricingPage.includedFeatures.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ marginTop: 36, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/contact" className="d3-btn-primary" style={{ padding: '18px 48px', fontSize: '1.0625rem' }}>
                Claim Your Free Demo <HiArrowRight />
              </Link>
              <Link to="/pricing" className="d3-btn-secondary" style={{ padding: '18px 48px', fontSize: '1.0625rem' }}>
                Calculate Your ROI
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── STATS BAR ── */}
        <div className="d3-stats-bar" role="region" aria-label="Platform performance metrics">
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

        {/* ── CORE FEATURES — Alternating Layout ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Core Features</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Everything You Need to{' '}
                <span className="d3-gradient-text">Dominate Your Market</span>
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
                            borderRadius: 12,
                            background: 'var(--d3-gradient-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon style={{ fontSize: 22, color: 'var(--d3-primary)' }} />
                        </div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            color: 'var(--d3-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="d3-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>
                        {step.title}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {step.features.map((feat, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <HiCheckCircle style={{ color: 'var(--d3-primary)', fontSize: '1.125rem', flexShrink: 0 }} />
                            <span style={{ color: 'var(--d3-text-secondary)', fontSize: '1rem' }}>
                              {feat.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ order: isEven ? 1 : 0 }}>
                      <div
                        className="d3-card"
                        style={{
                          aspectRatio: '16/10',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--d3-gradient-subtle)',
                          border: '1px solid rgba(239, 68, 68, 0.1)',
                        }}
                      >
                        <Icon style={{ fontSize: 64, color: 'var(--d3-primary)', opacity: 0.2 }} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── Inline CTA ── */}
        <Section style={{ padding: '0 0', background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <motion.div variants={fadeUp} className="d3-cta-strip">
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  Don't let another quarter slip by.
                </h3>
                <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', marginTop: 4 }}>
                  Your competitors are already using these tools. Catch up before it's too late.
                </p>
              </div>
              <Link to="/contact" className="d3-btn-primary" style={{ flexShrink: 0, animation: 'none' }}>
                Claim Your Free Demo <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── ALL FEATURES LIST ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <h2 className="d3-h2">
                Included in <span className="d3-gradient-text">Every Plan</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {pricingPage.includedFeatures.description}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="d3-grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div key={i} className="d3-card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'var(--d3-gradient)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h4 style={{ fontWeight: 700 }}>{feat}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── INTEGRATIONS ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Ecosystem</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                Connect With <span className="d3-gradient-text">Every Platform</span>
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}
            >
              {homepage.integrations.platforms.map((p, i) => (
                <div key={i} className="d3-card" style={{ padding: '20px 36px', textAlign: 'center' }}>
                  <HiGlobe style={{ fontSize: '1.5rem', color: 'var(--d3-primary)', marginBottom: 6 }} />
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{p}</div>
                </div>
              ))}
            </motion.div>
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
                <HiLightningBolt /> Act Now
              </span>
              <h2 className="d3-h2" style={{ color: '#FFFFFF', marginTop: 16 }}>
                {homepage.cta.headline}
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>
                {homepage.cta.description}
              </p>
              <Link
                to="/contact"
                className="d3-btn-primary"
                style={{
                  marginTop: 32,
                  padding: '18px 52px',
                  fontSize: '1.0625rem',
                  background: '#FFFFFF',
                  color: 'var(--d3-primary)',
                  boxShadow: '0 8px 32px rgba(255,255,255,0.2)',
                }}
              >
                Claim Your Free Demo <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlatformPage;
