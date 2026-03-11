import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
  HiShieldCheck,
  HiStar,
  HiCheckCircle,
  HiMail,
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

const { agencyPage, homepage } = siteContent;

const AgencyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d2-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 72 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
          <div className="d2-hero-glow" style={{ top: '-200px', right: '-100px' }} aria-hidden="true" />
          <div
            className="d2-container"
            style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}
          >
            <motion.div variants={fadeUp}>
              <span className="d2-badge">
                <HiStar style={{ fontSize: 14 }} aria-hidden="true" />
                Full-Service Agency
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d2-h1" style={{ marginTop: 24 }}>
              {agencyPage.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d2-body-lg" style={{ marginTop: 20 }}>
              {agencyPage.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 36 }}>
              <Link
                to="/contact"
                className="d2-btn-primary"
                style={{ padding: '16px 40px', fontSize: '1rem' }}
              >
                {agencyPage.hero.cta_primary} <HiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── PERFORMANCE METRICS ── */}
        <Section style={{ padding: '24px 0 48px' }}>
          <div className="d2-container">
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 20,
              }}
            >
              {agencyPage.performanceMetrics.map((metric, i) => (
                <motion.div key={i} variants={scaleUp} className="d2-stat-card">
                  <div className="d2-stat-value">{metric.value}</div>
                  <div className="d2-stat-label">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── CASE STUDIES ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">
                <HiShieldCheck style={{ fontSize: 14 }} aria-hidden="true" />
                Case Studies
              </span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                {agencyPage.caseStudiesSection.headline}
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                {agencyPage.caseStudiesSection.subtitle}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, marginTop: 8 }}>
                    <HiCheckCircle style={{ color: 'var(--d2-accent)', fontSize: 18 }} aria-hidden="true" />
                    <h3 className="d2-h3" style={{ margin: 0 }}>{study.name}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="d2-stat-value" style={{ fontSize: '1.5rem' }}>
                          {stat.value}
                        </div>
                        <div className="d2-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── SERVICES ── */}
        <Section className="d2-section-white">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Services</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                {agencyPage.services.headline}
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                {agencyPage.services.subtitle}
              </p>
            </motion.div>
            <div className="d2-grid-3">
              {agencyPage.services.items.map((service, i) => (
                <motion.div key={i} variants={scaleUp} className="d2-card">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'var(--d2-gradient)',
                      marginBottom: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.875rem',
                      fontFamily: 'var(--d2-font-display)',
                    }}
                    aria-hidden="true"
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="d2-h3" style={{ fontSize: '1.125rem', marginBottom: 12 }}>
                    {service.title}
                  </h3>
                  <p className="d2-body" style={{ fontSize: '0.875rem' }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="d2-btn-primary">
                {agencyPage.services.cta} <HiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── INFLUENCERS ── */}
        <Section className="d2-section-alt">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Network</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                {agencyPage.influencers.headline}
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                {agencyPage.influencers.subtitle}
              </p>
            </motion.div>
            <div className="d2-grid-3" style={{ maxWidth: 1000, margin: '0 auto' }}>
              {agencyPage.influencers.items.map((inf, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className="d2-card"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'var(--d2-gradient)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      fontFamily: 'var(--d2-font-display)',
                    }}
                    aria-hidden="true"
                  >
                    {inf.name.charAt(0)}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--d2-font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--d2-text)',
                    }}
                  >
                    {inf.name}
                  </h4>
                  <p style={{ color: 'var(--d2-text-muted)', fontSize: '0.8125rem', marginBottom: 16 }}>
                    {inf.role}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {Object.entries(inf.stats).map(([key, val]) => (
                      <div
                        key={key}
                        style={{
                          padding: '8px 0',
                          borderRadius: 8,
                          background: 'var(--d2-gradient-subtle)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            color: 'var(--d2-primary)',
                          }}
                        >
                          {val}
                        </div>
                        <div
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--d2-text-muted)',
                            textTransform: 'capitalize',
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

        {/* ── SOLUTIONS ── */}
        <Section className="d2-section-white">
          <div className="d2-container">
            <motion.div variants={fadeUp} className="d2-section-header">
              <span className="d2-badge">Solutions</span>
              <h2 className="d2-h2" style={{ marginTop: 16 }}>
                {agencyPage.solutions.headline}
              </h2>
              <p className="d2-body" style={{ marginTop: 12 }}>
                {agencyPage.solutions.subtitle}
              </p>
            </motion.div>
            <div className="d2-grid-2">
              {agencyPage.solutions.items.map((sol, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  className="d2-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3 className="d2-h3" style={{ marginBottom: 16 }}>{sol.title}</h3>
                    <p className="d2-body">{sol.description}</p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <Link
                      to="/contact"
                      className="d2-btn-secondary"
                      style={{ padding: '10px 24px', fontSize: '0.875rem' }}
                    >
                      {sol.cta} <HiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── NEWSLETTER ── */}
        <Section className="d2-section-alt">
          <div className="d2-container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={scaleUp}>
              <div className="d2-newsletter">
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <HiMail
                    style={{ fontSize: 32, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}
                    aria-hidden="true"
                  />
                  <h2
                    className="d2-h2"
                    style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    {agencyPage.newsletter.headline}
                  </h2>
                  <p
                    style={{
                      marginTop: 12,
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '1rem',
                      maxWidth: 440,
                      margin: '12px auto 0',
                    }}
                  >
                    {agencyPage.newsletter.subtitle}
                  </p>
                  <div className="d2-newsletter-input-wrap">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email address for newsletter"
                    />
                    <button type="button">Subscribe</button>
                  </div>
                  <p
                    style={{
                      marginTop: 16,
                      fontSize: '0.6875rem',
                      color: 'rgba(255,255,255,0.45)',
                      maxWidth: 400,
                      margin: '16px auto 0',
                    }}
                  >
                    {agencyPage.newsletter.legalNotice}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section className="d2-section-white">
          <div className="d2-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d2-section-header">
              <h2 className="d2-h2">
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
                      background: 'var(--d2-bg)',
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
                    aria-controls={`d2-agency-faq-${i}`}
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
                      id={`d2-agency-faq-${i}`}
                      role="region"
                      aria-label={item.question}
                      style={{
                        padding: '16px 24px 20px',
                        background: 'var(--d2-bg)',
                        border: '1px solid var(--d2-border)',
                        borderTop: 'none',
                        borderRadius: '0 0 16px 16px',
                        color: 'var(--d2-text-secondary)',
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

        {/* ── CTA ── */}
        <Section className="d2-section-alt">
          <div className="d2-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d2-h2">{homepage.cta.headline}</h2>
              <p className="d2-body-lg" style={{ marginTop: 16 }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link
                  to="/contact"
                  className="d2-btn-primary"
                  style={{ padding: '16px 48px', fontSize: '1rem' }}
                >
                  {agencyPage.hero.cta_primary} <HiArrowRight aria-hidden="true" />
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
