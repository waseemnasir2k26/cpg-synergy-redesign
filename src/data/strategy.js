// CPG Synergy — 5 Design Strategies with Funnel Maps
// Each design has unique branding, funnel flow, and CTA strategy

export const designStrategies = {
  // ═══════════════════════════════════════════════════════
  // DESIGN 1: "THE AUTHORITY" — Dark Luxury Power Funnel
  // ═══════════════════════════════════════════════════════
  design1: {
    name: "The Authority",
    funnelType: "Authority → Social Proof → Demo Booking",
    concept:
      "Position CPG Synergy as the premium, enterprise-grade platform. Dark sophisticated aesthetic communicates power and exclusivity. Every section builds authority before asking for the demo.",

    branding: {
      primaryColor: "#FF6B00",
      secondaryColor: "#1A1A2E",
      accentColor: "#FFB800",
      backgroundColor: "#0B0B14",
      textPrimary: "#FFFFFF",
      textSecondary: "rgba(255,255,255,0.55)",
      gradients: ["linear-gradient(135deg, #FF6B00, #FFB800)"],
      displayFont: "'Clash Display', sans-serif",
      bodyFont: "'Satoshi', sans-serif",
      aesthetic: "Dark luxury / editorial SaaS",
    },

    funnelFlow: [
      "Hero with bold stat + primary CTA (Book a Demo)",
      "Logo bar (trust strip)",
      "Case studies with real metrics (social proof)",
      "How it works (3-step simplification)",
      "Feature deep-dive with dashboard preview",
      "ROI calculator or stats section",
      "Testimonial with video placeholder",
      "Integration ecosystem",
      "Pricing preview / CTA",
      "FAQ",
      "Final CTA with urgency element",
    ],

    ctaStrategy: {
      primary: "Book a Demo",
      secondary: "Start Free Trial",
      placement:
        "Hero, after case studies, after features, sticky header, final section",
      style: "High-contrast gradient buttons with hover animation",
    },

    pages: ["Home", "Platform (features)", "Agency", "Pricing", "Contact"],

    responsiveStrategy: {
      mobile: "Single column, collapsible sections, bottom-sticky CTA bar",
      tablet: "2-column grid, side-by-side case studies",
      desktop: "Full asymmetric layouts, parallax effects, hover states",
    },
  },

  // ═══════════════════════════════════════════════════════
  // DESIGN 2: "THE TRUST BUILDER" — Light Social-Proof Funnel
  // ═══════════════════════════════════════════════════════
  design2: {
    name: "The Trust Builder",
    funnelType: "Social Proof → Pain Point → Solution → Demo",
    concept:
      "Lead with overwhelming social proof. Light, clean, trustworthy aesthetic. Show results before features. Let the numbers do the selling.",

    branding: {
      primaryColor: "#2563EB",
      secondaryColor: "#7C3AED",
      accentColor: "#10B981",
      backgroundColor: "#FAFBFF",
      textPrimary: "#0F172A",
      textSecondary: "#64748B",
      gradients: ["linear-gradient(135deg, #2563EB, #7C3AED)"],
      displayFont: "'Outfit', sans-serif",
      bodyFont: "'Inter Tight', sans-serif",
      aesthetic: "Clean / trustworthy / light corporate",
    },

    funnelFlow: [
      "Hero with customer count + primary CTA",
      "Scrolling testimonial ticker",
      "Case study cards with before/after metrics",
      "Pain point section (problems they solve)",
      "Solution walkthrough with screenshots",
      "Feature grid with icons",
      "Integration partners",
      "Pricing with social proof badges",
      "FAQ",
      "Final CTA with guarantee",
    ],

    ctaStrategy: {
      primary: "See It In Action",
      secondary: "View Case Studies",
      placement: "Hero, after testimonials, after features, pricing, footer",
      style: "Rounded solid buttons with subtle shadow, blue-to-purple gradient",
    },

    pages: ["Home", "Platform", "Agency", "Pricing", "Contact"],

    responsiveStrategy: {
      mobile:
        "Card-based layout, horizontal scroll testimonials, sticky bottom CTA",
      tablet: "2-column feature grid, inline testimonials",
      desktop: "3-column grids, floating testimonial sidebar, smooth scroll",
    },
  },

  // ═══════════════════════════════════════════════════════
  // DESIGN 3: "THE CLOSER" — Bold Urgency-Driven Funnel
  // ═══════════════════════════════════════════════════════
  design3: {
    name: "The Closer",
    funnelType: "Problem Agitation → Urgency → Immediate Action",
    concept:
      "Aggressive conversion-focused design. Bold colors, high contrast, every scroll position has a CTA. Use urgency, scarcity, and FOMO to drive immediate bookings.",

    branding: {
      primaryColor: "#EF4444",
      secondaryColor: "#F97316",
      accentColor: "#FBBF24",
      backgroundColor: "#FFFDF7",
      textPrimary: "#1C1917",
      textSecondary: "#78716C",
      gradients: ["linear-gradient(135deg, #EF4444, #F97316)"],
      displayFont: "'Cabinet Grotesk', sans-serif",
      bodyFont: "'Plus Jakarta Sans', sans-serif",
      aesthetic: "Bold / high-energy / conversion-optimized",
    },

    funnelFlow: [
      "Hero with pain-point headline + urgent CTA",
      "Problem agitation section (what they're losing)",
      "Stats bar (hours saved, ROI increase, etc.)",
      "Solution reveal with platform screenshot",
      "Feature comparison (before vs after)",
      "Case studies as proof",
      "ROI calculator interactive",
      "Limited time offer / early adopter CTA",
      "Testimonials with results focus",
      "FAQ addressing objections",
      "Final urgency CTA with countdown or limited spots",
    ],

    ctaStrategy: {
      primary: "Claim Your Free Demo",
      secondary: "Calculate Your ROI",
      placement:
        "Every 2 scroll-lengths, sticky header, exit intent modal concept",
      style:
        "Large red/orange gradient buttons with pulse animation, high visibility",
    },

    pages: ["Home", "Platform", "Agency", "Pricing", "Contact"],

    responsiveStrategy: {
      mobile: "Full-width CTAs, collapsible features, progress indicator",
      tablet: "Split hero, side-by-side comparisons",
      desktop:
        "Dynamic scroll animations, interactive ROI section, sticky side CTA",
    },
  },

  // ═══════════════════════════════════════════════════════
  // DESIGN 4: "THE STORYTELLER" — Editorial Narrative Funnel
  // ═══════════════════════════════════════════════════════
  design4: {
    name: "The Storyteller",
    funnelType: "Narrative Journey → Emotional Connection → Conversion",
    concept:
      "Tell the brand story through editorial design. Magazine-like layouts with rich typography. Guide visitors through a narrative that builds emotional investment before conversion.",

    branding: {
      primaryColor: "#059669",
      secondaryColor: "#0D9488",
      accentColor: "#D97706",
      backgroundColor: "#F8FAF5",
      textPrimary: "#1A2E1A",
      textSecondary: "#5F7A5F",
      gradients: ["linear-gradient(135deg, #059669, #0D9488)"],
      displayFont: "'Fraunces', serif",
      bodyFont: "'Source Serif 4', serif",
      aesthetic: "Editorial / magazine / organic storytelling",
    },

    funnelFlow: [
      "Hero with narrative headline + scene-setting",
      "Brand story section (why CPG Synergy exists)",
      "The problem landscape (editorial style)",
      "Customer journey showcase (storytelling through case studies)",
      "Feature walkthrough as chapters",
      "The ecosystem (integrations as a connected story)",
      "Voices section (testimonials as pull quotes)",
      "The roadmap (what's next / vision)",
      "Pricing as 'Choose Your Chapter'",
      "FAQ as 'Common Questions on the Journey'",
      "Final CTA as 'Begin Your Story'",
    ],

    ctaStrategy: {
      primary: "Begin Your Journey",
      secondary: "Read Our Story",
      placement: "End of each 'chapter', gentle persistent not aggressive",
      style:
        "Elegant bordered buttons with serif font, subtle hover transitions",
    },

    pages: ["Home", "Platform", "Agency", "Pricing", "Contact"],

    responsiveStrategy: {
      mobile:
        "Long-scroll editorial with large type, image-text alternating",
      tablet:
        "Magazine spreads, pull quotes, asymmetric image placement",
      desktop:
        "Full editorial layouts, parallax images, scroll-triggered type reveals",
    },
  },

  // ═══════════════════════════════════════════════════════
  // DESIGN 5: "THE MINIMALIST" — Clean Direct-Response Funnel
  // ═══════════════════════════════════════════════════════
  design5: {
    name: "The Minimalist",
    funnelType: "Clear Value → Quick Proof → Frictionless Conversion",
    concept:
      "Strip everything to essentials. Maximum white space, zero clutter. Every element earns its place. The design itself communicates efficiency — exactly what the product promises.",

    branding: {
      primaryColor: "#18181B",
      secondaryColor: "#3F3F46",
      accentColor: "#F59E0B",
      backgroundColor: "#FFFFFF",
      textPrimary: "#09090B",
      textSecondary: "#A1A1AA",
      gradients: ["none"],
      displayFont: "'Inter Tight', sans-serif",
      bodyFont: "'Inter Tight', sans-serif",
      aesthetic: "Swiss minimalist / functional / zen-like clarity",
    },

    funnelFlow: [
      "Hero: One line headline + one line sub + one CTA button",
      "Three feature blocks (icon + one sentence each)",
      "Single stat bar (3 key numbers)",
      "One case study highlight",
      "Product screenshot (clean, no decoration)",
      "One testimonial",
      "Pricing (simple 3-column)",
      "One FAQ accordion",
      "Final CTA (same as hero)",
    ],

    ctaStrategy: {
      primary: "Get Started",
      secondary: "Learn More",
      placement: "Hero and footer only — no CTA spam",
      style:
        "Black solid buttons with amber hover state, no gradients, no shadows",
    },

    pages: ["Home", "Platform", "Agency", "Pricing", "Contact"],

    responsiveStrategy: {
      mobile: "Already minimal — scales perfectly, generous padding",
      tablet: "Subtle 2-column where needed",
      desktop: "Maximal whitespace, centered content column, dramatic scale",
    },
  },
};
