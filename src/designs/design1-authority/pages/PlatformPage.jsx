import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp } from 'react-icons/hi';
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
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={`d1-section ${className}`} {...props}>
      {children}
    </motion.section>
  );
};

const { homepage, pricingPage } = siteContent;
const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const PlatformPage = () => {
  return (
    <div className="d1-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80 }}>
          <div className="d1-container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d1-badge">Platform</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d1-h1" style={{ marginTop: 24 }}>
              The All-in-One <span className="d1-gradient-text">Influencer Marketing</span> Platform
            </motion.h1>
            <motion.p variants={fadeUp} className="d1-body-lg" style={{ marginTop: 20, color: 'var(--d1-text-secondary)' }}>
              {pricingPage.includedFeatures.description}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="d1-btn-primary" style={{ padding: '16px 40px' }}>
                Book a Demo <HiArrowRight />
              </Link>
              <Link to="/pricing" className="d1-btn-secondary" style={{ padding: '16px 40px' }}>
                View Pricing
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── CORE FEATURES ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Core Features</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Everything You Need to <span className="d1-gradient-text">Win</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={i} variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
                    <div style={{ order: isEven ? 0 : 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--d1-gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon style={{ fontSize: 22, color: 'var(--d1-primary)' }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--d1-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step {step.number}</span>
                      </div>
                      <h3 className="d1-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>{step.title}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {step.features.map((feat, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--d1-gradient)', flexShrink: 0 }} />
                            <span style={{ color: 'var(--d1-text-secondary)', fontSize: '1rem' }}>{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ order: isEven ? 1 : 0 }}>
                      <div className="d1-card" style={{ aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--d1-gradient-subtle)' }}>
                        <Icon style={{ fontSize: 64, color: 'var(--d1-primary)', opacity: 0.3 }} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── ALL FEATURES LIST ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <h2 className="d1-h2">
                Included in <span className="d1-gradient-text">All Plans</span>
              </h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{pricingPage.includedFeatures.description}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="d1-grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div key={i} className="d1-card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--d1-gradient)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700 }}>
                    {i + 1}
                  </div>
                  <h4 style={{ fontFamily: 'var(--d1-font-display)', fontWeight: 600 }}>{feat}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── INTEGRATIONS ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <h2 className="d1-h2">
                Works With Your <span className="d1-gradient-text">Favorite Platforms</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {homepage.integrations.platforms.map((p, i) => (
                <div key={i} className="d1-card" style={{ padding: '20px 32px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 600 }}>{p}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── CTA ── */}
        <Section>
          <div className="d1-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d1-h2">{homepage.cta.headline}</h2>
              <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>
                {homepage.cta.description}
              </p>
              <Link to="/contact" className="d1-btn-primary" style={{ marginTop: 32, padding: '16px 48px' }}>
                Book a Demo <HiArrowRight />
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
