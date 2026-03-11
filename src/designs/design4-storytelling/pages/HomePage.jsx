import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
  HiUserGroup,
  HiCog,
  HiLightningBolt,
  HiChartBar,
  HiTrendingUp,
  HiBookOpen,
  HiGlobe,
  HiSparkles,
} from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteContent } from '../../../data/content';
import '../styles/theme.css';

/* ── Gentle editorial animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Section = ({ children, className = '', id, ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      id={id}
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

const { homepage } = siteContent;

const stepIcons = [HiUserGroup, HiCog, HiLightningBolt, HiChartBar, HiTrendingUp];

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="d4-page">
      <Header />

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* ═══ CHAPTER 1: THE HERO — Scene Setting ═══ */}
        <Section style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div className="d4-container" style={{ maxWidth: 920, margin: '0 auto' }}>
            <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
              <span className="d4-chapter-label">{homepage.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="d4-h1"
              style={{ marginTop: 28, textAlign: 'center' }}
            >
              {homepage.hero.headline.split('Influencer Marketing').map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="d4-gradient-text">Influencer Marketing</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="d4-body-lg"
              style={{
                marginTop: 28,
                textAlign: 'center',
                maxWidth: 640,
                margin: '28px auto 0',
              }}
            >
              {homepage.hero.subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{
                marginTop: 44,
                display: 'flex',
                gap: 16,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/contact"
                className="d4-btn-primary"
                style={{ padding: '16px 44px', fontSize: '1rem' }}
              >
                Begin Your Journey <HiArrowRight />
              </Link>
              <Link
                to="/agency"
                className="d4-btn-secondary"
                style={{ padding: '16px 44px', fontSize: '1rem' }}
              >
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ TRUSTED INTEGRATIONS BAR ═══ */}
        <Section style={{ padding: '40px 0' }}>
          <div className="d4-container">
            <motion.p
              variants={fadeIn}
              style={{
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--d4-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 600,
                marginBottom: 24,
                fontFamily: 'var(--d4-font-body)',
              }}
            >
              Trusted Integrations
            </motion.p>
            <motion.div
              variants={fadeIn}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 48,
                flexWrap: 'wrap',
                opacity: 0.35,
              }}
            >
              {homepage.platformLogos.map((logo) => (
                <span
                  key={logo}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'var(--d4-font-display)',
                    letterSpacing: '0.02em',
                    color: 'var(--d4-text)',
                  }}
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </Section>

        <div className="d4-container">
          <div className="d4-divider-ornament">
            <span aria-hidden="true">&sect;</span>
          </div>
        </div>

        {/* ═══ CHAPTER 2: THE STORY — Why CPG Synergy Exists ═══ */}
        <Section>
          <div className="d4-container-narrow">
            <motion.div variants={fadeUp}>
              <span className="d4-chapter-label">Our Story</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="d4-h2" style={{ marginTop: 20 }}>
              Empowering Brands to{' '}
              <span className="d4-gradient-text">Tell Their Story</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="d4-body-lg d4-drop-cap" style={{ marginTop: 28 }}>
              {homepage.cta.description}
            </motion.p>
            <motion.div variants={fadeUp}>
              <div className="d4-pull-quote">
                {homepage.testimonials[0]?.quote}
                <div style={{ marginTop: 20, fontStyle: 'normal' }}>
                  <span
                    style={{
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--d4-text)',
                    }}
                  >
                    {homepage.testimonials[0]?.author}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--d4-font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--d4-text-muted)',
                      marginLeft: 8,
                    }}
                  >
                    {homepage.testimonials[0]?.role}, {homepage.testimonials[0]?.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ═══ CHAPTER 3: THE LANDSCAPE — Problem + Case Studies ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">Real Results</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Stories of <span className="d4-accent-text">Transformation</span>
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                Every great brand has a journey. Here are chapters from some of ours.
              </p>
            </motion.div>

            <div className="d4-grid-2">
              {homepage.caseStudies.map((study, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: '3px solid var(--d4-primary)',
                  }}
                >
                  <p
                    className="d4-overline"
                    style={{ marginBottom: 8 }}
                  >
                    Case Study {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="d4-h3" style={{ marginBottom: 28 }}>
                    {study.name}
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 24,
                    }}
                  >
                    {study.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="d4-stat-value">{stat.value}</div>
                        <div className="d4-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              style={{ textAlign: 'center', marginTop: 56 }}
            >
              <Link to="/contact" className="d4-btn-primary">
                Begin Your Journey <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ CHAPTER 4: THE JOURNEY — How It Works as Chapters ═══ */}
        <Section>
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">The Journey</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Five Chapters to{' '}
                <span className="d4-gradient-text">Marketing Mastery</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {homepage.howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i] || HiLightningBolt;
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={i} variants={fadeUp}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: 64,
                        alignItems: 'center',
                        padding: '56px 0',
                        borderBottom:
                          i < homepage.howItWorks.steps.length - 1
                            ? '1px solid var(--d4-border-light)'
                            : 'none',
                      }}
                    >
                      <div style={{ order: isEven ? 0 : 1 }}>
                        <p className="d4-overline" style={{ marginBottom: 12 }}>
                          Chapter {step.number}
                        </p>
                        <h3 className="d4-h2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                          {step.title}
                        </h3>
                        <ul className="d4-feature-list" style={{ marginTop: 24 }}>
                          {step.features.map((feat, j) => (
                            <li key={j}>{feat.title}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        style={{
                          order: isEven ? 1 : 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            background: 'var(--d4-gradient-subtle)',
                            borderRadius: 'var(--d4-radius-lg)',
                            border: '1px solid var(--d4-border-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--d4-font-display)',
                              fontSize: '7rem',
                              fontWeight: 900,
                              color: 'var(--d4-primary)',
                              opacity: 0.06,
                              position: 'absolute',
                            }}
                          >
                            {step.number}
                          </span>
                          <Icon
                            style={{
                              fontSize: 56,
                              color: 'var(--d4-primary)',
                              opacity: 0.25,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ═══ CHAPTER 5: THE ECOSYSTEM — Integrations ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">
                <HiGlobe style={{ marginRight: 4 }} /> Ecosystem
              </span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                A World of{' '}
                <span className="d4-gradient-text">Seamless Integrations</span>
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                Connect with all the platforms your audience lives on.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="d4-grid-4"
              style={{ maxWidth: 860, margin: '0 auto' }}
            >
              {homepage.integrations.platforms.map((platform, i) => (
                <div
                  key={i}
                  className="d4-card"
                  style={{
                    textAlign: 'center',
                    padding: '28px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'var(--d4-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                    }}
                  >
                    {platform.charAt(0)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--d4-font-display)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: 'var(--d4-text)',
                    }}
                  >
                    {platform}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ═══ CHAPTER 6: VOICES — Testimonials as Pull Quotes ═══ */}
        <Section>
          <div className="d4-container-narrow">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">
                <HiBookOpen style={{ marginRight: 4 }} /> Voices
              </span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                What Our <span className="d4-accent-text">Partners</span> Say
              </h2>
            </motion.div>

            {homepage.testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <blockquote className="d4-pull-quote" style={{ margin: '0 0 32px' }}>
                  {t.quote}
                  <footer
                    style={{
                      marginTop: 24,
                      fontStyle: 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'var(--d4-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'var(--d4-font-display)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--d4-font-display)',
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'var(--d4-text)',
                        }}
                      >
                        {t.author}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--d4-font-body)',
                          fontSize: '0.875rem',
                          color: 'var(--d4-text-muted)',
                        }}
                      >
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ═══ CHAPTER 7: PRICING PREVIEW ═══ */}
        <Section className="d4-section-muted">
          <div className="d4-container" style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">
                <HiSparkles style={{ marginRight: 4 }} /> Choose Your Chapter
              </span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Plans That <span className="d4-gradient-text">Grow With You</span>
              </h2>
              <p className="d4-body" style={{ marginTop: 16 }}>
                {siteContent.pricingPage.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="d4-grid-3">
              {siteContent.pricingPage.plans.map((plan, i) => (
                <div
                  key={i}
                  className="d4-card"
                  style={{
                    textAlign: 'left',
                    border: plan.highlighted
                      ? '2px solid var(--d4-primary)'
                      : '1px solid var(--d4-border-light)',
                    position: 'relative',
                  }}
                >
                  {plan.badge && (
                    <span
                      className="d4-badge"
                      style={{
                        position: 'absolute',
                        top: -14,
                        right: 20,
                        background: 'var(--d4-primary)',
                        color: '#FFFFFF',
                        border: 'none',
                        fontSize: '0.75rem',
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="d4-h4" style={{ marginBottom: 8 }}>
                    {plan.name}
                  </h3>
                  <p
                    className="d4-body"
                    style={{ fontSize: '0.875rem', marginBottom: 20 }}
                  >
                    {plan.tagline}
                  </p>
                  <div style={{ marginBottom: 20 }}>
                    <span
                      style={{
                        fontFamily: 'var(--d4-font-display)',
                        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                        fontWeight: 900,
                        color: 'var(--d4-text)',
                      }}
                    >
                      {plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Contact Sales' && (
                      <span
                        style={{
                          color: 'var(--d4-text-muted)',
                          fontSize: '0.875rem',
                          marginLeft: 4,
                        }}
                      >
                        /mo
                      </span>
                    )}
                  </div>
                  <Link
                    to="/pricing"
                    className={
                      plan.highlighted ? 'd4-btn-primary' : 'd4-btn-secondary'
                    }
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
              <Link
                to="/pricing"
                className="d4-btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                Explore Full Pricing <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ CHAPTER 8: RESOURCES ═══ */}
        <Section>
          <div className="d4-container">
            <motion.div variants={fadeUp} className="d4-section-header">
              <span className="d4-chapter-label">From the Editors</span>
              <h2 className="d4-h2" style={{ marginTop: 16 }}>
                Latest <span className="d4-accent-text">Insights</span>
              </h2>
            </motion.div>
            <div className="d4-grid-2">
              {homepage.resources.map((post, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className="d4-card"
                  style={{
                    borderLeft: '3px solid var(--d4-accent)',
                  }}
                >
                  <p
                    className="d4-overline"
                    style={{ color: 'var(--d4-accent)', marginBottom: 12 }}
                  >
                    {post.date} &middot; {post.author}
                  </p>
                  <h3
                    className="d4-h3"
                    style={{ fontSize: '1.25rem', marginBottom: 12 }}
                  >
                    {post.title}
                  </h3>
                  <p className="d4-body" style={{ fontSize: '0.9375rem' }}>
                    {post.excerpt}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ CHAPTER 9: FAQ — Common Questions on the Journey ═══ */}
        <Section className="d4-section-muted" id="faq">
          <div
            className="d4-container-narrow"
            style={{ maxWidth: 760, margin: '0 auto' }}
          >
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
                    aria-controls={`d4-faq-${i}`}
                  >
                    <span>{item.question}</span>
                    {openFaq === i ? (
                      <HiChevronUp
                        style={{
                          flexShrink: 0,
                          fontSize: 20,
                          color: 'var(--d4-primary)',
                        }}
                      />
                    ) : (
                      <HiChevronDown
                        style={{
                          flexShrink: 0,
                          fontSize: 20,
                          color: 'var(--d4-text-muted)',
                        }}
                      />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      id={`d4-faq-${i}`}
                      role="region"
                      className="d4-faq-answer"
                    >
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ CHAPTER 10: FINAL CTA — Begin Your Story ═══ */}
        <Section className="d4-section-dark">
          <div className="d4-container" style={{ textAlign: 'center' }}>
            <motion.div
              variants={fadeUp}
              style={{ maxWidth: 640, margin: '0 auto' }}
            >
              <span
                className="d4-chapter-label"
                style={{ color: 'rgba(255,255,255,0.5)', justifyContent: 'center' }}
              >
                Begin Your Story
              </span>
              <h2
                className="d4-h2"
                style={{ marginTop: 20, color: '#FFFFFF' }}
              >
                {homepage.cta.headline}
              </h2>
              <p
                className="d4-body-lg"
                style={{
                  marginTop: 20,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                {homepage.cta.description}
              </p>
              <div
                style={{
                  marginTop: 40,
                  display: 'flex',
                  gap: 16,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  to="/contact"
                  className="d4-btn-primary"
                  style={{
                    padding: '18px 52px',
                    fontSize: '1.0625rem',
                    background: '#FFFFFF',
                    color: 'var(--d4-bg-dark)',
                    borderColor: '#FFFFFF',
                  }}
                >
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
