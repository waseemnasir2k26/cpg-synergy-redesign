import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const { agencyPage, homepage } = siteContent;

const AgencyPage = () => {
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
                Agency
              </span>
            </motion.div>
            <motion.h1
              variants={fade}
              className="d5-h1"
              style={{
                marginTop: 16,
                maxWidth: 680,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {agencyPage.hero.headline}
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
              {agencyPage.hero.subheadline}
            </motion.p>
            <motion.div variants={fade} style={{ marginTop: 32 }}>
              <Link
                to="/contact"
                className="d5-btn-primary"
                style={{ padding: '14px 40px' }}
              >
                {agencyPage.hero.cta_primary}
              </Link>
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── PERFORMANCE METRICS ── */}
        <Section className="d5-section-sm">
          <div className="d5-container">
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
              {agencyPage.performanceMetrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--d5-bg)',
                    padding: '40px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div className="d5-stat-value">{metric.value}</div>
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
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── CASE STUDIES ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">
                {agencyPage.caseStudiesSection.headline}
              </h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                {agencyPage.caseStudiesSection.subtitle}
              </p>
            </motion.div>
            <div className="d5-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.div key={i} variants={fade} className="d5-card">
                  <h3
                    className="d5-h3"
                    style={{ marginBottom: 24, fontSize: '1.125rem' }}
                  >
                    {study.name}
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 20,
                    }}
                  >
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div
                          style={{
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            color: 'var(--d5-text)',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--d5-text-secondary)',
                            marginTop: 2,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
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
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── SERVICES ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{agencyPage.services.headline}</h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                {agencyPage.services.subtitle}
              </p>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {agencyPage.services.items.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: 24,
                    padding: '32px 0',
                    borderBottom:
                      i < agencyPage.services.items.length - 1
                        ? '1px solid var(--d5-border)'
                        : 'none',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--d5-accent)',
                      fontFamily: 'var(--d5-font)',
                    }}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="d5-h3" style={{ fontSize: '1rem', marginBottom: 8 }}>
                      {service.title}
                    </h3>
                    <p
                      className="d5-body"
                      style={{ fontSize: '0.875rem', maxWidth: 560 }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── INFLUENCERS ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{agencyPage.influencers.headline}</h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                {agencyPage.influencers.subtitle}
              </p>
            </motion.div>
            <motion.div
              variants={fade}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 1,
                background: 'var(--d5-border)',
                border: '1px solid var(--d5-border)',
              }}
            >
              {agencyPage.influencers.items.map((inf, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--d5-bg)',
                    padding: '32px 20px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '1px solid var(--d5-border)',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--d5-text-secondary)',
                    }}
                  >
                    {inf.name.charAt(0)}
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '0.8125rem',
                      color: 'var(--d5-text)',
                    }}
                  >
                    {inf.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--d5-text-secondary)',
                      marginTop: 2,
                    }}
                  >
                    {inf.role}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d5-divider" />

        {/* ── SOLUTIONS ── */}
        <Section>
          <div className="d5-container">
            <motion.div variants={fade} className="d5-section-header">
              <h2 className="d5-h2">{agencyPage.solutions.headline}</h2>
              <p className="d5-body" style={{ marginTop: 8 }}>
                {agencyPage.solutions.subtitle}
              </p>
            </motion.div>
            <div className="d5-grid-2">
              {agencyPage.solutions.items.map((sol, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  className="d5-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      className="d5-h3"
                      style={{ fontSize: '1.125rem', marginBottom: 12 }}
                    >
                      {sol.title}
                    </h3>
                    <p className="d5-body" style={{ fontSize: '0.875rem' }}>
                      {sol.description}
                    </p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <Link to="/contact" className="d5-btn-secondary">
                      {sol.cta}
                    </Link>
                  </div>
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
                  {agencyPage.hero.cta_primary}
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

export default AgencyPage;
