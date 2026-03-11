import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
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

const { agencyPage, homepage } = siteContent;

const AgencyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d4-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ═══ HERO ═══ */}
        <Section style={{ paddingTop: 100, paddingBottom: 60 }}>
          <div className="d4-container" style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <motion.div variants={fadeUp}>
              <span className="d4-chapter-label">The Agency</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d4-h1" style={{ marginTop: 24 }}>
              {agencyPage.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d4-body-lg" style={{ marginTop: 24, maxWidth: 640, margin: '24px auto 0' }}>
              {agencyPage.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
              <Link to="/contact" className="d4-btn-primary" style={{ padding: '16px 44px' }}>
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ PERFORMANCE METRICS — Editorial stat spread ═══ */}
        <Section style={{ padding: '48px 0 56px' }}>
          <div className="d4-container">
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 24,
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              {agencyPage.performanceMetrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    padding: '32px 16px',
                    borderRight: i < agencyPage.performanceMetrics.length - 1 ? '1px solid var(--d4-border-light)' : 'none',
                  }}
                >
                  <div className="d4-stat-value">{metric.value}</div>
                  <div className="d4-stat-label">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        <div className="d4-container">
          <div className="d4-divider-ornament">
            <span aria-hidden="true">&sect;</span>
          </div>
        </div>

        {/* ═══ CASE STUDIES ═══ */}
        <Section>
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Case Studies</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                {agencyPage.caseStudiesSection.headline}
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {agencyPage.caseStudiesSection.subtitle}
              </p>
            </motion.div>

            <div className="d4-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{
                    borderTop: '3px solid var(--d4-primary)',
                    position: 'relative',
                  }}
                >
                  <p className="d4-overline" style={{ marginBottom: 8 }}>
                    Featured Story
                  </p>
                  <h3 className="d4-h3" style={{ marginBottom: 28 }}>
                    {study.name}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="d4-stat-value" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                          {stat.value}
                        </div>
                        <div className="d4-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ SERVICES — Editorial numbered list ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Our Services</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                {agencyPage.services.headline}
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {agencyPage.services.subtitle}
              </p>
            </motion.div>

            <div className="d4-grid-3">
              {agencyPage.services.items.map((service, i) => (
                <motion.div key={i} variants={fadeUp} className="d4-card" style={{ position: 'relative', paddingTop: 48 }}>
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 20,
                      fontFamily: 'var(--d4-font-display)',
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: 'var(--d4-primary)',
                      opacity: 0.08,
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="d4-h4" style={{ marginBottom: 12 }}>
                    {service.title}
                  </h3>
                  <p className="d4-body" style={{ fontSize: '0.9375rem' }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 56 }}>
              <Link to="/contact" className="d4-btn-primary">
                {agencyPage.services.cta} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ INFLUENCERS — Editorial profiles ═══ */}
        <Section>
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">The Network</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                {agencyPage.influencers.headline}
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {agencyPage.influencers.subtitle}
              </p>
            </motion.div>

            <div className="d4-grid-3" style={{ maxWidth: 1040, margin: '0 auto' }}>
              {agencyPage.influencers.items.map((inf, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'var(--d4-gradient)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                    }}
                  >
                    {inf.name.charAt(0)}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 600,
                      fontSize: '1.0625rem',
                    }}
                  >
                    {inf.name}
                  </h4>
                  <p
                    style={{
                      color: 'var(--d4-text-muted)',
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--d4-font-body)',
                      marginBottom: 20,
                      marginTop: 4,
                    }}
                  >
                    {inf.role}
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 10,
                      borderTop: '1px solid var(--d4-border-light)',
                      paddingTop: 16,
                    }}
                  >
                    {Object.entries(inf.stats).map(([key, val]) => (
                      <div key={key}>
                        <div
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            fontFamily: 'var(--d4-font-display)',
                            color: 'var(--d4-primary)',
                          }}
                        >
                          {val}
                        </div>
                        <div
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--d4-text-muted)',
                            textTransform: 'capitalize',
                            letterSpacing: '0.03em',
                          }}
                        >
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ SOLUTIONS — Magazine spread ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Solutions</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                {agencyPage.solutions.headline}
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {agencyPage.solutions.subtitle}
              </p>
            </motion.div>

            <div className="d4-grid-2">
              {agencyPage.solutions.items.map((sol, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderLeft: '3px solid var(--d4-accent)',
                  }}
                >
                  <div>
                    <h3 className="d4-h3" style={{ marginBottom: 16 }}>{sol.title}</h3>
                    <p className="d4-body">{sol.description}</p>
                  </div>
                  <div style={{ marginTop: 28 }}>
                    <span
                      className="d4-btn-secondary"
                      style={{ cursor: 'pointer', padding: '10px 24px', fontSize: '0.875rem' }}
                    >
                      {sol.cta} <HiArrowRight />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ NEWSLETTER ═══ */}
        <Section>
          <div className="d4-container-narrow" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp}>
              <span className="d4-chapter-label" style={{ justifyContent: 'center' }}>Stay Connected</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                {agencyPage.newsletter.headline}
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {agencyPage.newsletter.subtitle}
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{
                  marginTop: 32,
                  display: 'flex',
                  gap: 12,
                  maxWidth: 480,
                  margin: '32px auto 0',
                  flexWrap: 'wrap',
                }}
              >
                <input
                  type="email"
                  className="d4-input"
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                  style={{ flex: 1, minWidth: 200 }}
                />
                <button type="submit" className="d4-btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Subscribe <HiArrowRight />
                </button>
              </form>
              <p style={{ marginTop: 16, fontSize: '0.75rem', color: 'var(--d4-text-muted)', lineHeight: 1.5 }}>
                {agencyPage.newsletter.legalNotice}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* ═══ FAQ ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container-narrow" style={{ maxWidth: 760, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Common Questions</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Questions on the{' '}
                <span className="d4-gradient-text">Journey</span>
              </h2>
            </motion.div>

            <div>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="d4-faq-item">
                  <button
                    className="d4-faq-button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`d4-agency-faq-${i}`}
                  >
                    <span>{item.question}</span>
                    {openFaq === i ? (
                      <HiChevronUp style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-primary)' }} />
                    ) : (
                      <HiChevronDown style={{ flexShrink: 0, fontSize: 20, color: 'var(--d4-text-muted)' }} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div id={`d4-agency-faq-${i}`} role="region" className="d4-faq-answer">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
                Begin Your Story
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
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default AgencyPage;
