import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiChevronDown, HiChevronUp, HiLightningBolt, HiUserGroup, HiChartBar, HiCog, HiTrendingUp } from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Section = ({ children, className = '', ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={`d1-section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const { homepage } = siteContent;

const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d1-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="d1-container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d1-badge">{homepage.hero.badge}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d1-h1" style={{ marginTop: 24 }}>
              {homepage.hero.headline.split('Influencer Marketing').map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="d1-gradient-text">Influencer Marketing</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="d1-body-lg" style={{ marginTop: 24, color: 'var(--d1-text-secondary)', maxWidth: 680, margin: '24px auto 0' }}>
              {homepage.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="d1-btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                {homepage.hero.cta_primary} <HiArrowRight />
              </Link>
              <Link to="/platform" className="d1-btn-secondary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                {homepage.hero.cta_secondary}
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── LOGO BAR ── */}
        <Section style={{ padding: '40px 0' }}>
          <div className="d1-container">
            <motion.p variants={fadeUp} style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--d1-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 24 }}>
              Trusted Integrations
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', opacity: 0.4 }}>
              {homepage.platformLogos.map((logo) => (
                <span key={logo} style={{ fontSize: '1.125rem', fontWeight: 600, fontFamily: 'var(--d1-font-display)', letterSpacing: '0.05em' }}>
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </Section>

        <hr className="d1-divider" style={{ maxWidth: 'var(--d1-container)', margin: '0 auto' }} />

        {/* ── CASE STUDIES ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Proven Results</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Real Brands. <span className="d1-gradient-text">Real Results.</span>
              </h2>
            </motion.div>
            <div className="d1-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--d1-gradient)' }} />
                  <h3 className="d1-h3" style={{ marginBottom: 24 }}>{study.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, fontFamily: 'var(--d1-font-display)', color: 'var(--d1-primary)' }} className="d1-stat-glow">
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--d1-text-muted)', marginTop: 4 }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="d1-btn-primary">
                {homepage.hero.cta_primary} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ── HOW IT WORKS ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">How It Works</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Five Steps to <span className="d1-gradient-text">Marketing Success</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                return (
                  <motion.div key={i} variants={fadeUp} className="d1-card" style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, alignItems: 'start' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--d1-gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ fontSize: 24, color: 'var(--d1-primary)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--d1-primary)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step {step.number}</div>
                      <h3 className="d1-h3">{step.title}</h3>
                      <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
                        {step.features.map((feat, j) => (
                          <span key={j} style={{ padding: '6px 14px', borderRadius: 100, border: '1px solid var(--d1-border)', fontSize: '0.8125rem', color: 'var(--d1-text-secondary)' }}>
                            {feat.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── TESTIMONIALS ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Testimonials</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                What Our <span className="d1-gradient-text">Clients Say</span>
              </h2>
            </motion.div>
            {homepage.testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="d1-card" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                <div style={{ fontSize: '4rem', lineHeight: 1, color: 'var(--d1-primary)', opacity: 0.3, fontFamily: 'serif', marginBottom: 16 }}>&ldquo;</div>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--d1-text-secondary)', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{t.author}</div>
                  <div style={{ color: 'var(--d1-text-muted)', fontSize: '0.875rem' }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── INTEGRATIONS ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Ecosystem</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Seamless <span className="d1-gradient-text">Integrations</span>
              </h2>
              <p className="d1-body" style={{ marginTop: 12 }}>
                Connect with all the platforms your audience lives on.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="d1-grid-4" style={{ maxWidth: 800, margin: '0 auto' }}>
              {homepage.integrations.platforms.map((p, i) => (
                <div key={i} className="d1-card" style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--d1-font-display)', background: 'var(--d1-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {p.charAt(0)}
                  </div>
                  <div style={{ marginTop: 8, fontSize: '0.875rem', fontWeight: 500 }}>{p}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── RESOURCES ── */}
        <Section>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">Resources</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Latest <span className="d1-gradient-text">Insights</span>
              </h2>
            </motion.div>
            <div className="d1-grid-2">
              {homepage.resources.map((post, i) => (
                <motion.div key={i} variants={fadeUp} className="d1-card">
                  <div style={{ fontSize: '0.75rem', color: 'var(--d1-primary)', fontWeight: 600, marginBottom: 12 }}>
                    {post.date} &middot; {post.author}
                  </div>
                  <h3 className="d1-h3" style={{ fontSize: '1.25rem', marginBottom: 12 }}>{post.title}</h3>
                  <p className="d1-body" style={{ fontSize: '0.875rem' }}>{post.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div variants={fadeUp} className="d1-section-header">
              <span className="d1-badge">FAQ</span>
              <h2 className="d1-h2" style={{ marginTop: 16 }}>
                Frequently Asked <span className="d1-gradient-text">Questions</span>
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {homepage.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      background: 'var(--d1-bg-card)',
                      border: '1px solid var(--d1-border)',
                      borderRadius: openFaq === i ? '16px 16px 0 0' : 16,
                      color: 'var(--d1-text)',
                      fontFamily: 'var(--d1-font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'var(--d1-transition)',
                    }}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-${i}`}
                  >
                    {item.question}
                    {openFaq === i ? <HiChevronUp style={{ flexShrink: 0, fontSize: 20 }} /> : <HiChevronDown style={{ flexShrink: 0, fontSize: 20 }} />}
                  </button>
                  {openFaq === i && (
                    <div
                      id={`faq-${i}`}
                      role="region"
                      style={{
                        padding: '16px 24px 20px',
                        background: 'var(--d1-bg-card)',
                        border: '1px solid var(--d1-border)',
                        borderTop: 'none',
                        borderRadius: '0 0 16px 16px',
                        color: 'var(--d1-text-secondary)',
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

        {/* ── FINAL CTA ── */}
        <Section>
          <div className="d1-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d1-h2">{homepage.cta.headline}</h2>
              <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>
                {homepage.cta.description}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/contact" className="d1-btn-primary" style={{ padding: '16px 48px', fontSize: '1rem' }}>
                  {homepage.cta.button} <HiArrowRight />
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

export default HomePage;
