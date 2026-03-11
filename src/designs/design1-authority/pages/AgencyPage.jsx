import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi';
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

const { agencyPage, homepage } = siteContent;

const AgencyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d1-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80 }}>
          <div className="d1-container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d1-badge">Agency</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d1-h1" style={{ marginTop: 24 }}>
              {agencyPage.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d1-body-lg" style={{ marginTop: 20, color: 'var(--d1-text-secondary)' }}>
              {agencyPage.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
              <Link to="/contact" className="d1-btn-primary" style={{ padding: '16px 40px' }}>
                {agencyPage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── PERFORMANCE METRICS ── */}
        <Section style={{ padding: '48px 0' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
              {agencyPage.performanceMetrics.map((metric, i) => (
                <div key={i} className="d1-card" style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, fontFamily: 'var(--d1-font-display)', color: 'var(--d1-primary)' }} className="d1-stat-glow">
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--d1-text-muted)', marginTop: 6 }}>{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── CASE STUDIES ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Case Studies</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>{agencyPage.caseStudiesSection.headline}</h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{agencyPage.caseStudiesSection.subtitle}</p>
            </motion.div>
            <div className="d1-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--d1-gradient)' }} />
                  <h3 className="d1-h3" style={{ marginBottom: 20 }}>{study.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--d1-font-display)', color: 'var(--d1-primary)' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--d1-text-muted)', marginTop: 2 }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── SERVICES ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Services</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>{agencyPage.services.headline}</h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{agencyPage.services.subtitle}</p>
            </motion.div>
            <div className="d1-grid-3">
              {agencyPage.services.items.map((service, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card">
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--d1-gradient)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700, fontSize: '0.875rem' }}>
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="d1-h3" style={{ fontSize: '1.125rem', marginBottom: 12 }}>{service.title}</h3>
                  <p className="d1-body" style={{ fontSize: '0.875rem' }}>{service.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="d1-btn-primary">
                {agencyPage.services.cta} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── INFLUENCERS ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Network</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>{agencyPage.influencers.headline}</h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{agencyPage.influencers.subtitle}</p>
            </motion.div>
            <div className="d1-grid-3" style={{ maxWidth: 1000, margin: '0 auto' }}>
              {agencyPage.influencers.items.map((inf, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--d1-gradient-subtle)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, color: 'var(--d1-primary)' }}>
                    {inf.name.charAt(0)}
                  </div>
                  <h4 style={{ fontFamily: 'var(--d1-font-display)', fontWeight: 600, fontSize: '1rem' }}>{inf.name}</h4>
                  <p style={{ color: 'var(--d1-text-muted)', fontSize: '0.8125rem', marginBottom: 16 }}>{inf.role}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {Object.entries(inf.stats).map(([key, val]) => (
                      <div key={key} style={{ padding: '8px 0' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--d1-primary)' }}>{val}</div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--d1-text-muted)', textTransform: 'capitalize' }}>{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── SOLUTIONS ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Solutions</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>{agencyPage.solutions.headline}</h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{agencyPage.solutions.subtitle}</p>
            </motion.div>
            <div className="d1-grid-2">
              {agencyPage.solutions.items.map((sol, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="d1-h3" style={{ marginBottom: 16 }}>{sol.title}</h3>
                    <p className="d1-body">{sol.description}</p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <span className="d1-btn-secondary" style={{ cursor: 'pointer' }}>{sol.cta} <HiArrowRight /></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d1-section-header">
              <h2 className="d1-h2">Frequently Asked <span className="d1-gradient-text">Questions</span></h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'var(--d1-bg-card)', border: '1px solid var(--d1-border)', borderRadius: openFaq === i ? '16px 16px 0 0' : 16, color: 'var(--d1-text)', fontFamily: 'var(--d1-font-body)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left' }} aria-expanded={openFaq === i}>
                    {item.question}
                    {openFaq === i ? <HiChevronUp style={{ flexShrink: 0 }} /> : <HiChevronDown style={{ flexShrink: 0 }} />}
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '16px 24px 20px', background: 'var(--d1-bg-card)', border: '1px solid var(--d1-border)', borderTop: 'none', borderRadius: '0 0 16px 16px', color: 'var(--d1-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CTA ── */}
        <Section>
          <div className="d1-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d1-h2">{homepage.cta.headline}</h2>
              <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>{homepage.cta.description}</p>
              <Link to="/contact" className="d1-btn-primary" style={{ marginTop: 32, padding: '16px 48px' }}>
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
