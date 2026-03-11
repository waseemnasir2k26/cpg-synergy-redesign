import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiLightningBolt,
  HiStar,
  HiUsers,
  HiCursorClick,
  HiEye,
  HiHeart,
  HiTrendingUp,
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

const { agencyPage } = siteContent;

const statIcons = [HiCursorClick, HiEye, HiHeart, HiTrendingUp];

const AgencyPage = () => {
  return (
    <div className="d3-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 118 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="d3-container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d3-badge-urgency">
                <HiLightningBolt /> Full-Service Agency
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d3-h1" style={{ marginTop: 24 }}>
              {agencyPage.hero.headline.split('Real Results').map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="d3-gradient-text">Real Results</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="d3-body-lg" style={{ marginTop: 20, maxWidth: 660, margin: '20px auto 0' }}>
              {agencyPage.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 36, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="d3-btn-primary" style={{ padding: '18px 48px', fontSize: '1.0625rem' }}>
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
              <Link to="/pricing" className="d3-btn-secondary" style={{ padding: '18px 48px', fontSize: '1.0625rem' }}>
                Calculate Your ROI
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── PERFORMANCE STATS ── */}
        <div className="d3-stats-bar" role="region" aria-label="Agency performance metrics">
          <div className="d3-container">
            <div className="d3-grid-4" style={{ textAlign: 'center' }}>
              {agencyPage.performanceMetrics.map((stat, i) => {
                const Icon = statIcons[i] || HiTrendingUp;
                return (
                  <div key={i}>
                    <Icon style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }} />
                    <div className="d3-stat-value">{stat.value}</div>
                    <div className="d3-stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CASE STUDIES ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Proof</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                {agencyPage.caseStudiesSection.headline} —{' '}
                <span className="d3-gradient-text">See the Numbers</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {agencyPage.caseStudiesSection.subtitle}
              </p>
            </motion.div>
            <div className="d3-grid-2">
              {siteContent.homepage.caseStudies.map((study, i) => (
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
                  <h3 className="d3-h3" style={{ marginBottom: 20 }}>{study.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div
                          style={{
                            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                            fontWeight: 800,
                            background: 'var(--d3-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--d3-text-muted)', marginTop: 2, fontWeight: 500 }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
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
                  Want results like these for your brand?
                </h3>
                <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', marginTop: 4 }}>
                  Limited agency spots available this quarter.
                </p>
              </div>
              <Link to="/contact" className="d3-btn-primary" style={{ flexShrink: 0, animation: 'none' }}>
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── SERVICES ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">What We Do</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                {agencyPage.services.headline}:{' '}
                <span className="d3-gradient-text">Built for Growth</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {agencyPage.services.subtitle}
              </p>
            </motion.div>
            <div className="d3-grid-3">
              {agencyPage.services.items.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d3-card"
                  style={{
                    borderTop: '4px solid transparent',
                    borderImage: 'var(--d3-gradient) 1',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'var(--d3-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.875rem',
                      marginBottom: 16,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: 12 }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="d3-btn-primary" style={{ padding: '16px 48px' }}>
                {agencyPage.services.cta} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── TOP INFLUENCERS ── */}
        <Section>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Network</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                {agencyPage.influencers.headline} —{' '}
                <span className="d3-gradient-text">Ready to Work</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {agencyPage.influencers.subtitle}
              </p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
              {agencyPage.influencers.items.map((inf, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d3-card"
                  style={{ textAlign: 'center', padding: '28px 20px' }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'var(--d3-gradient)',
                      margin: '0 auto 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <HiUsers style={{ fontSize: '1.5rem', color: '#FFFFFF' }} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem' }}>{inf.name}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--d3-primary)', fontWeight: 600, marginTop: 2 }}>
                    {inf.role}
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                      marginTop: 14,
                      fontSize: '0.75rem',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--d3-text)' }}>{inf.stats.subscribers}</div>
                      <div style={{ color: 'var(--d3-text-muted)' }}>Subscribers</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--d3-text)' }}>{inf.stats.engagements}</div>
                      <div style={{ color: 'var(--d3-text-muted)' }}>Engagements</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── SOLUTIONS ── */}
        <Section style={{ background: 'var(--d3-bg-elevated)' }}>
          <div className="d3-container">
            <motion.div variants={fadeUp} className="d3-section-header">
              <span className="d3-badge">Resources</span>
              <h2 className="d3-h2" style={{ marginTop: 16 }}>
                {agencyPage.solutions.headline}:{' '}
                <span className="d3-gradient-text">Your Competitive Edge</span>
              </h2>
              <p className="d3-body" style={{ marginTop: 12 }}>
                {agencyPage.solutions.subtitle}
              </p>
            </motion.div>
            <div className="d3-grid-2">
              {agencyPage.solutions.items.map((sol, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d3-card"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'var(--d3-gradient-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <HiStar style={{ fontSize: '1.25rem', color: 'var(--d3-primary)' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 12 }}>{sol.title}</h3>
                  <p style={{ color: 'var(--d3-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7, flex: 1 }}>
                    {sol.description}
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <span className="d3-btn-ghost">
                      {sol.cta} <HiArrowRight />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── NEWSLETTER ── */}
        <Section>
          <div className="d3-container" style={{ maxWidth: 700, margin: '0 auto' }}>
            <motion.div
              variants={fadeUp}
              className="d3-card"
              style={{
                textAlign: 'center',
                padding: '48px 40px',
                borderTop: '4px solid transparent',
                borderImage: 'var(--d3-gradient) 1',
              }}
            >
              <h3 className="d3-h3">{agencyPage.newsletter.headline}</h3>
              <p style={{ color: 'var(--d3-text-secondary)', marginTop: 8, fontSize: '0.9375rem' }}>
                {agencyPage.newsletter.subtitle}
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="d3-input"
                  style={{ maxWidth: 320, flex: 1 }}
                  aria-label="Email address"
                />
                <button type="submit" className="d3-btn-primary" style={{ animation: 'none' }}>
                  Subscribe <HiArrowRight />
                </button>
              </form>
              <p style={{ marginTop: 12, fontSize: '0.75rem', color: 'var(--d3-text-muted)' }}>
                {agencyPage.newsletter.legalNotice}
              </p>
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
                <HiLightningBolt /> Limited Spots
              </span>
              <h2 className="d3-h2" style={{ color: '#FFFFFF', marginTop: 16 }}>
                Ready to Drive <span style={{ color: 'var(--d3-accent)' }}>Real Results?</span>
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>
                Our agency team takes on a limited number of clients each quarter. Secure your spot now.
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
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgencyPage;
