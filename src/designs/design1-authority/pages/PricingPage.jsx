import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiCheck, HiChevronDown, HiChevronUp, HiStar } from 'react-icons/hi';
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

const { pricingPage, homepage } = siteContent;

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d1-page">
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ── HERO ── */}
        <Section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="d1-container" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <motion.div variants={fadeUp}>
              <span className="d1-badge">Pricing</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="d1-h1" style={{ marginTop: 24 }}>
              {pricingPage.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>
              {pricingPage.subtitle}
            </motion.p>
            {/* Billing Toggle */}
            <motion.div variants={fadeUp} style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '6px', background: 'var(--d1-bg-card)', borderRadius: 100, border: '1px solid var(--d1-border)' }}>
              <button
                onClick={() => setYearly(false)}
                style={{ padding: '10px 24px', borderRadius: 100, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'var(--d1-font-body)', background: !yearly ? 'var(--d1-gradient)' : 'transparent', color: !yearly ? '#000' : 'var(--d1-text-secondary)', transition: 'var(--d1-transition)' }}
              >
                {pricingPage.billingToggle.monthly}
              </button>
              <button
                onClick={() => setYearly(true)}
                style={{ padding: '10px 24px', borderRadius: 100, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'var(--d1-font-body)', background: yearly ? 'var(--d1-gradient)' : 'transparent', color: yearly ? '#000' : 'var(--d1-text-secondary)', transition: 'var(--d1-transition)' }}
              >
                {pricingPage.billingToggle.yearly}
              </button>
              {yearly && (
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--d1-accent)', padding: '4px 10px', background: 'rgba(255, 184, 0, 0.1)', borderRadius: 100 }}>
                  {pricingPage.billingToggle.saveBadge}
                </span>
              )}
            </motion.div>
          </div>
        </Section>

        {/* ── PRICING CARDS ── */}
        <Section style={{ paddingTop: 0 }}>
          <div className="d1-container">
            <div className="d1-grid-3">
              {pricingPage.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="d1-card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: plan.highlighted ? '2px solid var(--d1-primary)' : '1px solid var(--d1-border)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {plan.highlighted && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--d1-gradient)' }} />
                  )}
                  {plan.badge && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                      <HiStar style={{ color: 'var(--d1-accent)' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--d1-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="d1-h3" style={{ fontSize: '1.25rem' }}>{plan.name}</h3>
                  <p className="d1-body" style={{ fontSize: '0.875rem', margin: '12px 0 24px' }}>{plan.tagline}</p>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, fontFamily: 'var(--d1-font-display)' }}>
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span style={{ color: 'var(--d1-text-muted)', fontSize: '0.875rem' }}>/mo</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                    {plan.features.map((feat, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                        <HiCheck style={{ color: 'var(--d1-primary)', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                        <span style={{ color: 'var(--d1-text-secondary)', fontSize: '0.875rem' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={plan.highlighted ? 'd1-btn-primary' : 'd1-btn-secondary'}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── INCLUDED FEATURES ── */}
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container">
            <motion.div variants={fadeUp} className="d1-section-header">
              <h2 className="d1-h2">
                Included in <span className="d1-gradient-text">All Plans</span>
              </h2>
              <p className="d1-body" style={{ marginTop: 12 }}>{pricingPage.includedFeatures.description}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="d1-grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
              {pricingPage.includedFeatures.items.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--d1-bg-card)', borderRadius: 12, border: '1px solid var(--d1-border)' }}>
                  <HiCheck style={{ color: 'var(--d1-primary)', fontSize: 20, flexShrink: 0 }} />
                  <span style={{ fontWeight: 500, fontSize: '0.9375rem' }}>{feat}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section>
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
        <Section style={{ background: 'var(--d1-bg-elevated)' }}>
          <div className="d1-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="d1-h2">{homepage.cta.headline}</h2>
              <p className="d1-body-lg" style={{ marginTop: 16, color: 'var(--d1-text-secondary)' }}>{homepage.cta.description}</p>
              <Link to="/contact" className="d1-btn-primary" style={{ marginTop: 32, padding: '16px 48px' }}>
                {homepage.cta.button} <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
