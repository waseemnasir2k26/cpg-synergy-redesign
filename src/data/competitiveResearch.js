/**
 * Competitive Research Data for CPG Influencer Marketing Platform Redesign
 * Research Date: March 2026
 *
 * Sources:
 * - Direct homepage analysis of all 8 competitors
 * - Grand View Research, Fortune Business Insights, MarketsandMarkets
 * - Influencer Marketing Hub Benchmark Report 2026
 * - First Page Sage SaaS Conversion Benchmarks 2026
 * - SAP/Emarsys CPG Marketing Trends 2026
 * - Kellanova/Shopify CPG Industry Reports
 */

export const competitors = [
  {
    name: "GRIN",
    url: "https://grin.co",
    positioning:
      "The #1 Creator Marketing Platform — positions as the industry-standard solution for DTC e-commerce brands, offering both AI-automated (Gia) and hands-on control paths for managing creator partnerships.",
    heroHeadline: "GRIN is the #1 Creator Marketing Platform",
    subHeadline:
      "Choose your path — Gia's AI-powered automation or GRIN Platform's hands-on control.",
    primaryCTA: "Get Started Free",
    colorScheme: {
      primary: "#696eff", // Deep purple/indigo
      accent: "#e8fd95", // Bright yellow-green
      secondary: "#f4fe28", // Neon yellow
      background: "#1e1e1e", // Dark navy/black
      text: "#ffffff",
      style: "Dark mode dominant with vibrant neon accents",
    },
    designStyle:
      "Modern, tech-forward dark mode design. Bold aesthetic with vibrant accent colors on dark backgrounds. Minimalist layout with strong visual hierarchy and animated elements.",
    funnelType: "freemium",
    funnelDetails:
      "Free trial / Get Started Free approach — low barrier to entry, self-serve onboarding with upgrade path.",
    uniqueFeatures: [
      "Dual offering: Gia AI automation vs. GRIN Platform manual control",
      "38M+ influencer recruitment suite",
      "Integrated email inbox for creator communication",
      "E-commerce integrations (Shopify-native) for inventory sync",
      "Affiliate links and discount code generation",
      "Automated product seeding workflows",
      "Campaign workrooms with live ROI reporting",
      "Content management and social listening",
      "Influencer payment processing",
    ],
    socialProof: {
      type: "awards-and-logos",
      details: [
        "G2 Summer 2025 Grid Leader badge",
        "Customer case studies: Uber, MVMT, Boiron, Superfeet",
        "Creator testimonials with profile images",
      ],
    },
    pricingModel: {
      type: "custom-quote",
      startingPrice: "Custom (no public pricing)",
      billing: "Month-to-month flexible plans",
      notes:
        "Pricing entirely customized based on org size, current influencer program maturity, and goals. Free trial available.",
    },
    targetMarket: "DTC e-commerce brands of all sizes",
    strengths: [
      "Freemium/free trial lowers barrier to entry",
      "Best-in-class automated product seeding",
      "Strong Shopify and e-commerce native integration",
      "Sales attribution and content library management",
      "Dual AI + manual control appeals to different user maturity levels",
      "Month-to-month flexibility (no annual lock-in required)",
    ],
    weaknesses: [
      "Discovery tools criticized for weaker built-in cross-platform search",
      "Some brands resort to importing creator lists or external research",
      "Polarized user reviews on Reddit/Trustpilot around reliability and contracts",
      "Dark-mode-heavy design may feel niche or exclusive",
      "No explicit CPG industry positioning",
    ],
  },
  {
    name: "CreatorIQ",
    url: "https://creatoriq.com",
    positioning:
      "The operating system for creator-led growth — enterprise-grade SaaS infrastructure for influencer marketing at scale. Serves brands, agencies, and large enterprises.",
    heroHeadline: "The operating system for creator-led growth.",
    subHeadline:
      "Your data. Your workflows. Your teams. All in one seamless ecosystem.",
    primaryCTA: "Request a demo",
    colorScheme: {
      primary: "#FF8C2E", // Orange
      accent: "#49A9DE", // Light blue
      secondary: "#B5DEF2", // Soft blue
      background: "#051730", // Dark navy
      text: "#ffffff",
      style: "Corporate-tech with warm orange primary and cool blue accents on dark navy",
    },
    designStyle:
      "Corporate-tech with modern minimalism. Clean layouts, bold typography, strategic whitespace, professional imagery. Premium enterprise feel.",
    funnelType: "demo-first",
    funnelDetails:
      "Enterprise sales-led funnel. Request a Demo is the primary conversion action. No self-serve or free trial option.",
    uniqueFeatures: [
      "Creator Graph — proprietary intelligence database",
      "SafeIQ — brand safety via multimodal AI",
      "AI-powered creator discovery (3x faster)",
      "BenchmarkIQ — competitive reporting across 37 markets",
      "CreatorIQ Pay — payments in 60+ currencies, 80+ markets",
      "CreatorIQ Recruit and Convert modules",
      "Global governance and compliance tools",
      "Enterprise integrations and API access",
      "ISO 27001 certified",
    ],
    socialProof: {
      type: "enterprise-logos-and-awards",
      details: [
        "Trusted by 1,300+ of the world's most innovative brands",
        "Client logos: Nestlé, Unilever, Google, Sephora, Delta, YETI, Disney, Airbnb, CVS, Ralph Lauren, Salesforce",
        "IDC MarketScape Leader 2025-2026",
        "Forrester New Wave Leader",
        "G2 Leader badges in multiple categories",
        "ISO 27001 certification",
        "Testimonial from Moose Toys",
      ],
    },
    pricingModel: {
      type: "enterprise-custom",
      startingPrice: "$2,350/month (~$30k-$36k/year)",
      billing: "Annual commitment required",
      notes:
        "No public pricing. Enterprise-only custom quotes. High price point positions as premium enterprise solution.",
    },
    targetMarket:
      "Large enterprises, global brands, agencies (Dentsu, Omnicom, Edelman)",
    industries: [
      "Beauty",
      "Fashion & Retail",
      "Gaming",
      "Sports",
      "Media",
      "Consumer Goods",
      "D2C/eCommerce",
    ],
    strengths: [
      "Strongest enterprise positioning and brand trust",
      "Top-notch analytics and reporting tools",
      "Best-in-class brand safety with SafeIQ",
      "Strong integrations with other marketing platforms",
      "Global compliance and governance for multinational brands",
      "Industry analyst recognition (IDC, Forrester, G2)",
      "Impressive client roster builds massive credibility",
    ],
    weaknesses: [
      "Small database (~20M influencers vs competitors with more)",
      "Search functionality criticized as producing irrelevant results",
      "Steep learning curve — complexity is top complaint",
      "Very high price point excludes SMBs and mid-market",
      "No self-serve option or free trial",
      "Sales-heavy funnel may deter exploratory buyers",
    ],
  },
  {
    name: "Aspire",
    url: "https://aspire.io",
    positioning:
      "The world's first word-of-mouth commerce platform — focuses on social commerce, leveraging ambassadors, influencers, affiliates, customers, UGC, and social ads for e-commerce brands.",
    heroHeadline: "Influencer marketing for social commerce",
    subHeadline:
      "Word-of-mouth commerce — for affiliate sales, for 3x+ ROAS, for sourcing UGC for ads, for generating reviews, for influence marketing",
    primaryCTA: "Request a demo",
    colorScheme: {
      primary: "#E3F1BB", // Lime green (buttons)
      accent: "#79A595", // Teal green
      secondary: "#1E4945", // Dark green
      background: "#FFFFFF", // White/off-white
      text: "#16282D", // Dark text
      style: "Clean white backgrounds with nature-inspired green palette, premium organic feel",
    },
    designStyle:
      "Modern, clean, corporate with premium aesthetic. Minimalist layouts, large hero imagery, smooth animations. White-dominant with green accents.",
    funnelType: "demo-first",
    funnelDetails:
      "Request a Demo primary CTA. Also offers agency services alongside DIY platform — dual revenue model.",
    uniqueFeatures: [
      "Highest automation level in category — automates 90% of manual tasks",
      "Campaign briefings, contract generation, content approvals automated",
      "Affiliate link creation and payment processing automated",
      "UGC-to-ads conversion (40% more efficient CPM, 4x lower CPC)",
      "Native TikTok Spark Ads integration",
      "Instagram Partnership Ads permission requests",
      "Inbound and outbound influencer discovery",
      "Attributable ROI tracking",
      "Agency services option alongside DIY platform",
    ],
    socialProof: {
      type: "logos-stats-testimonials",
      details: [
        "13+ brand logos: Samsung, Dyson, Walmart, Hello Fresh, M&Ms",
        "Stats: 88% trust recommendations, $5.78 earned per $1 spent, 73% confidence from UGC",
        "Testimonials from Mars, Kettle & Fire, Outer with specific metrics",
        "Case study results: 29% engagement increase, 2,100% affiliate sales growth",
      ],
    },
    pricingModel: {
      type: "custom-quote",
      startingPrice: "$2,000/month",
      billing: "Annual commitment",
      notes:
        "Starting at $2,000/month with annual commitment. No free plan. Custom pricing for enterprise tiers.",
    },
    targetMarket: "E-commerce brands, CPG companies, consumer brands",
    strengths: [
      "Best-in-class workflow automation (90% of manual tasks)",
      "Strong UGC-to-paid-ads pipeline",
      "Native TikTok and Instagram ads integration",
      "Word-of-mouth commerce positioning is unique and compelling",
      "Great social proof with specific ROI metrics",
      "Dual platform + agency services model",
      "Strong e-commerce and CPG client roster",
    ],
    weaknesses: [
      "Steep learning curve acknowledged even in positive reviews",
      "Platform can create roadblocks for new users",
      "No free trial or self-serve option",
      "Demo-gated funnel slows acquisition",
      "Green/nature color scheme may not convey tech power",
    ],
  },
  {
    name: "Upfluence",
    url: "https://upfluence.com",
    positioning:
      "All-in-one influencer and affiliate marketing platform infused with Jaice AI — focused on e-commerce and DTC brands, emphasizing finding creators within your own customer base.",
    heroHeadline:
      "Build valuable partnerships to grow your business",
    subHeadline:
      "Influencer marketing, affiliate programs, creator management, UGC, and brand ambassadors — all powered by Jaice AI.",
    primaryCTA: "Book a Demo",
    colorScheme: {
      primary: "#4A6CF7", // Blue
      accent: "#FF6B35", // Orange
      secondary: "#2D2D2D", // Dark gray
      background: "#FFFFFF", // White
      text: "#2D2D2D",
      style:
        "Clean blue primary with orange accents on white — professional SaaS aesthetic",
    },
    designStyle:
      "Professional SaaS design. Clean, modern interface with product screenshots and platform mockups. Data-forward visual approach.",
    funnelType: "demo-first",
    funnelDetails:
      "Book a Demo primary CTA. Custom pricing requires sales conversation. Annual commitment typically required.",
    uniqueFeatures: [
      "Jaice AI — first AI campaign co-pilot (3x faster, 10x more clarity)",
      "12M+ verified creator database",
      "Industry-leading 20+ search filters for creator discovery",
      "Only influencer platform natively integrated with Amazon",
      "Customer-as-influencer discovery (find influencers in your own customer base)",
      "Shopify, WooCommerce, Amazon Attribution integrations",
      "Zero fees on generated sales (no commission take)",
      "Automated outreach and campaign management",
      "Real-time ROI, AOV, and commission tracking",
    ],
    socialProof: {
      type: "logos-and-stats",
      details: [
        "Brand logos displayed on homepage",
        "Saves 20+ hours per week on influencer ops (user-reported)",
        "Platform used by 3,500+ brands",
      ],
    },
    pricingModel: {
      type: "custom-quote",
      startingPrice: "~$478/month (entry-level)",
      billing: "Annual commitment required",
      notes:
        "No public pricing page. Entry-level ~$478/mo. Significant price jumps between tiers. Add-ons for seats, API, premium integrations can double cost. 12-month minimum contract.",
    },
    targetMarket: "E-commerce and DTC brands",
    strengths: [
      "Jaice AI co-pilot is a strong differentiator",
      "Best discovery filters in the category (20+ filters across 8 platforms)",
      "Unique customer-as-influencer identification",
      "Native Amazon integration (only platform with this)",
      "Zero commission on generated sales maximizes ROI",
      "Strong e-commerce platform integrations",
    ],
    weaknesses: [
      "403 error on homepage (accessibility/bot-blocking issues)",
      "Limited influencer pool outside US, Canada, UK",
      "Micro-influencer discovery is weak",
      "Annual commitments are top complaint",
      "Price jumps between tiers frustrate users",
      "Features locked to higher plans push costs up",
    ],
  },
  {
    name: "Traackr",
    url: "https://traackr.com",
    positioning:
      "AI-powered influencer marketing platform that turns creator intelligence into a strategic growth engine — emphasizes data, benchmarking, and forecasting for sophisticated enterprise programs.",
    heroHeadline: "Unlock the value of your creator data.",
    subHeadline:
      "Turn creator intelligence into a strategic growth engine with Traackr's AI-powered influencer marketing platform.",
    primaryCTA: "Book a discovery call",
    colorScheme: {
      primary: "#7B2D8E", // Purple/plum
      accent: "#00B4D8", // Teal
      secondary: "#FF6B6B", // Magenta/coral
      background: "#FFFFFF", // White
      text: "#1A1A2E",
      style:
        "Vibrant multi-color system with teal, purple, magenta, blue, green — rotating hues across sections with bold color blocking",
    },
    designStyle:
      "Modern, bold, and playful with vibrant color blocking. Animated elements, carousel sliders, interactive hover states. Corporate yet approachable.",
    funnelType: "discovery-call",
    funnelDetails:
      "Book a Discovery Call primary CTA. No free trial, no free plan. Enterprise-focused sales process.",
    uniqueFeatures: [
      "Creator data organization and optimization tools",
      "Predictive strategy and forecasting (Envision module)",
      "Multi-region campaign management with unified KPIs",
      "Attribution tracking from creator to checkout",
      "Global benchmarking across 70+ countries",
      "15+ years defining the influencer marketing category (since 2009)",
      "Industry-specific vertical solutions",
    ],
    socialProof: {
      type: "enterprise-logos-and-case-studies",
      details: [
        "100+ global brands as clients",
        "Logos: L'Oréal, Sephora, Samsung, Laneige, Pandora, Lacoste, ASICS",
        "Case study: Laneige +951% VIT growth",
        "Case study: Groupe SEB 50+ creators activated",
        "Case study: Pierre Fabre 2X engagement rates",
        "Client testimonials from L'Oréal, Meliá, Groupe SEB",
        "15+ years defining the category (founded 2009)",
      ],
    },
    pricingModel: {
      type: "tiered-enterprise",
      plans: [
        {
          name: "Growth",
          price: "From $25,000/year ($33,000 with Benchmarking)",
          users: "Minimum 3 users",
        },
        {
          name: "Standard",
          price: "From $32,500/year ($40,500 with Benchmarking)",
          users: "Minimum 5 users",
        },
        {
          name: "Plus",
          price: "From $55,000/year ($63,000 with Benchmarking)",
          users: "Minimum 10 users",
        },
      ],
      billing: "Annual only — no monthly plans",
      notes:
        "Most transparent pricing in the enterprise tier. Benchmarking is a paid add-on. No free trial or free plan.",
    },
    targetMarket:
      "Mid-size to large enterprises with sophisticated influencer programs",
    industries: [
      "Beauty & Personal Care",
      "Fashion & Apparel",
      "Food & Beverage",
      "Consumer Electronics",
      "Media & Entertainment",
      "Retail",
      "Travel & Hospitality",
    ],
    strengths: [
      "Strongest data and forecasting capabilities",
      "Best global benchmarking (70+ countries)",
      "Most transparent enterprise pricing",
      "Deep beauty and CPG vertical expertise",
      "Longest track record (15+ years, founded 2009)",
      "Impressive case studies with specific metrics",
      "Multi-region campaign management excels",
    ],
    weaknesses: [
      "High price floor ($25k/year minimum) excludes small brands",
      "Annual commitment only — no monthly or flexible options",
      "No free trial makes it risky for exploration",
      "Playful design may undermine enterprise credibility",
      "Smaller creator database than some competitors",
    ],
  },
  {
    name: "Later",
    url: "https://later.com",
    positioning:
      "Enterprise leader in influencer marketing AND social media management — building the world's first Social Revenue Platform. Merged Mavrck + Later + Mavely into unified platform.",
    heroHeadline:
      "Influencer marketing built for creators, trusted by brands, and designed for results.",
    subHeadline:
      "Plan, schedule, and analyze all your content in one place. Launch data-informed campaigns with the right creators.",
    primaryCTA: "Get Started",
    colorScheme: {
      primary: "#5124C1", // Purple (viralcrush)
      accent: "#FFAE73", // Coral/peach
      secondary: "#FF9C9C", // Salmon pink
      background: "#F8F2EA", // Warm off-white (gridglow)
      text: "#1A1A1A",
      style:
        "Vibrant purple primary with warm coral/peach accents on warm off-white — playful, creator-friendly aesthetic",
    },
    designStyle:
      "Modern, bold, playful consumer-focused design. Vibrant accents, smooth animations, rounded corners, generous spacing. More creator/consumer feel than enterprise.",
    funnelType: "freemium-plus-demo",
    funnelDetails:
      "Dual funnel: Social media tools have tiered self-serve pricing (Starter $25/mo, Advanced $80/mo). Influencer marketing requires demo request with custom pricing.",
    uniqueFeatures: [
      "Combined social media management + influencer marketing (unique in market)",
      "Visual content calendar with drag-and-drop scheduling",
      "AI-driven influencer matching engine",
      "Link in Bio tool for shoppable posts",
      "Pre-vetted influencer database with Similar Creators feature",
      "Mavely integration for creator-driven commerce",
      "Cross-platform scheduling (Instagram, TikTok, LinkedIn, etc.)",
      "Hashtag suggestions and best-time-to-post analytics",
      "$2.4 billion creator engine",
    ],
    socialProof: {
      type: "awards-and-enterprise-clients",
      details: [
        "G2 Winter 2026 Leader in influencer platforms",
        "Enterprise clients including Southwest Airlines",
        "$2.4 billion creator engine",
        "Built from merger of Mavrck + Later + Mavely",
      ],
    },
    pricingModel: {
      type: "tiered-hybrid",
      socialMediaPlans: [
        {
          name: "Starter",
          price: "$25/month",
          features: "1 social set, 1 user, 30 posts/profile, limited analytics",
        },
        {
          name: "Advanced",
          price: "$80/month",
          features:
            "6 social sets, 6 users, unlimited posts, full analytics, 50 AI credits",
        },
      ],
      influencerPricing: "Custom — request required",
      billing: "Monthly and annual options for social tools",
      notes:
        "Previously had a free plan, discontinued in 2025. Influencer marketing pricing is separate and requires demo. Unlimited users and campaigns on influencer plans.",
    },
    targetMarket:
      "Brands, agencies, and social media managers needing both social scheduling and influencer marketing",
    strengths: [
      "Only platform combining social media management + influencer marketing",
      "Low entry price point ($25/mo for social tools)",
      "Strong creator-first brand positioning",
      "Visual content calendar is industry-leading",
      "Mavely commerce integration adds unique value",
      "Broad platform coverage for scheduling",
      "G2 Leader recognition",
    ],
    weaknesses: [
      "Jack-of-all-trades risk — may not excel at either social or influencer",
      "Free plan discontinued may lose entry-level users",
      "Influencer marketing pricing is opaque and separate",
      "Complex product from 3-company merger may feel disjointed",
      "Homepage renders poorly for bots (CSS-only) — possible SEO/accessibility issue",
      "Not specifically positioned for CPG",
    ],
  },
  {
    name: "impact.com",
    url: "https://impact.com",
    positioning:
      "The unified AI-powered partnership management platform — goes beyond influencer marketing to manage creators, affiliates, and referrals all in one platform, powered by $100B+ in partnership data.",
    heroHeadline: "One platform. All partnerships. AI-powered.",
    subHeadline:
      "The unified platform to manage creators, affiliates, and referrals — powered by $100B+ in partnership data and AI that turns discovery into performance.",
    primaryCTA: "Request a demo / Get started now",
    colorScheme: {
      primary: "#298DDA", // Deep blue
      accent: "#D73184", // Magenta/pink
      secondary: "#F5333F", // Red
      highlight: "#FCCC38", // Golden yellow
      background: "#FFFFFF", // White
      text: "#667082", // Gray
      style:
        "Bold gradient animations cycling blue-to-pink-to-red-to-gold. Modern SaaS with dynamic color transitions.",
    },
    designStyle:
      "Modern corporate SaaS with bold gradients. Minimalist navigation paired with animated visual elements. Premium tech aesthetic with dynamic color transitions.",
    funnelType: "hybrid-freemium-and-demo",
    funnelDetails:
      "Dual path: Starter plan at $30/mo (self-serve) and Request a Demo for enterprise. Progressive pricing with transaction fees.",
    uniqueFeatures: [
      "Unified dashboard for affiliates + influencers + referrals",
      "TrueLink cross-device tracking technology",
      "AI-powered partner discovery and optimization",
      "Fraud detection and brand protection",
      "Performance-based attribution (conversions, not vanity metrics)",
      "Multi-channel ROI measurement",
      "$100B+ partnership data powering AI",
      "Publisher/creator marketplace (free for creators)",
    ],
    socialProof: {
      type: "stats-and-case-studies",
      details: [
        "Case studies: 160% revenue growth, 3,755% ROI, 10+ ROAS",
        "$100B+ in partnership data",
        "8 of top 10 reference (likely top brands or retailers)",
        "G2 award badge",
        "Client logos in scrolling carousel",
      ],
    },
    pricingModel: {
      type: "tiered-with-transaction-fees",
      plans: [
        {
          name: "Starter",
          price: "$30/month or 3% of monthly revenue (whichever is higher)",
          notes: "First 30 days: no minimum fees unless partners drive sales",
        },
        {
          name: "Essential",
          price: "Custom (contact sales)",
          notes: "For brands scaling partnerships, large influencer campaigns",
        },
        {
          name: "Pro",
          price: "Starting at $2,500/month",
          notes: "For enterprises, agencies, advanced marketers",
        },
      ],
      transactionFee: "2.5% on partner-driven transactions",
      billing: "Monthly",
      notes:
        "Most accessible pricing in the market for starters. Transaction fee model aligns cost with results. Free for publishers/creators.",
    },
    targetMarket: "E-commerce, SaaS, retail brands managing multi-type partnerships",
    strengths: [
      "Broadest partnership scope (affiliates + influencers + referrals)",
      "Most accessible entry pricing ($30/mo starter)",
      "Performance-based pricing aligns with brand goals",
      "TrueLink cross-device tracking is a strong differentiator",
      "Massive data advantage ($100B+ partnership data)",
      "Fraud detection adds trust layer",
      "Free for creators/publishers drives supply-side growth",
    ],
    weaknesses: [
      "Broad partnership focus may dilute influencer-specific depth",
      "Transaction fees can add up for high-volume brands",
      "Not positioned as influencer-first — may lose to specialists",
      "Complex pricing with multiple fee structures",
      "Enterprise Pro tier pricing is opaque",
      "Gradient-heavy design may feel generic",
    ],
  },
  {
    name: "Captiv8 (now part of Influential / Publicis Groupe)",
    url: "https://captiv8.io",
    positioning:
      "End-to-end influencer marketing platform — now integrated into Influential under Publicis Groupe, creating the world's most powerful connected influencer platform. Enterprise agency-backed.",
    heroHeadline: "Captiv8 has been integrated into Influential",
    subHeadline:
      "By combining Influential's industry-leading expertise with Captiv8's award-winning platform, we're strengthening our ability to deliver impactful solutions through creator-first storytelling.",
    primaryCTA: "Work With Us / Get a Demo",
    colorScheme: {
      primary: "#7A00DF", // Vibrant purple
      accent: "#FFFFFF", // White
      secondary: "#000000", // Black
      background: "#FFFFFF", // White
      text: "#000000",
      style: "Vibrant purple primary with clean black/white — modern tech-forward with gradient elements",
    },
    designStyle:
      "Modern, tech-forward corporate design with clean typography and organized product sections. Emphasis on clarity through structured navigation and visual hierarchy.",
    funnelType: "contact-sales",
    funnelDetails:
      "Enterprise agency model. Work With Us / Get a Demo CTAs. No self-serve option. Now routed through Publicis Groupe's enterprise sales process.",
    uniqueFeatures: [
      "Social insights and discovery tools",
      "Workflow management systems",
      "Paid media amplification",
      "Creator Commerce (branded storefronts, TikTok Shop integration)",
      "Affiliate management at scale",
      "Creator Hub and Talent Management Portal",
      "Payment processing",
      "Proprietary AI-powered social listening",
      "15M creator network covering 95% of influencers with 5000+ followers",
      "Epsilon CoreID integration for identity-based targeting",
      "Full-funnel measurement across platforms and media channels",
      "Operations in 120 countries",
    ],
    socialProof: {
      type: "acquisition-and-scale",
      details: [
        "Acquired by Publicis Groupe for $150M (May 2025)",
        "Part of combined $500M+ Influential + Captiv8 entity",
        "15M creator network globally",
        "95% coverage of influencers with 5,000+ followers",
        "90% coverage of influencers with 1M+ followers",
        "Operates in 120 countries",
        "Publicis Connected Media backing",
      ],
    },
    pricingModel: {
      type: "enterprise-custom",
      startingPrice: "Custom enterprise pricing (through Publicis Groupe)",
      billing: "Custom contracts",
      notes:
        "No public pricing. Enterprise-only. Now part of Publicis Groupe's agency offering, likely bundled with media buying services.",
    },
    targetMarket:
      "Large enterprise brands working with or through Publicis Groupe agency network",
    strengths: [
      "Largest creator network (15M, 95% coverage of 5K+ influencers)",
      "Publicis Groupe backing provides massive enterprise credibility",
      "Epsilon CoreID enables identity-based creator-to-consumer attribution",
      "Full-funnel measurement is most comprehensive in market",
      "TikTok Shop and social commerce integration",
      "Global scale (120 countries)",
      "Combined Influential + Captiv8 resources",
    ],
    weaknesses: [
      "Homepage in transition state — merger messaging replaces product messaging",
      "Independence lost — now agency-owned, may deter non-Publicis brands",
      "No self-serve option eliminates SMB market entirely",
      "Pricing completely opaque",
      "Merger integration risks — product consolidation uncertain",
      "Competitors may position against agency ownership as conflict of interest",
    ],
  },
];

export const industryTrends = {
  marketSize: {
    current: "$34.25 billion (2025)",
    projected2026: "$40.51 billion (2026)",
    cagr: "23.3% to 35.19% depending on source",
    northAmericaShare: "29% of global market (2024)",
    fastestGrowingRegion: "Asia Pacific at 27% CAGR",
    fastestGrowingSegment: "Influencer management platforms",
  },

  commonPatterns: [
    "All platforms emphasize AI-powered creator discovery as table stakes",
    "Demo-first / sales-led funnels dominate (6 of 8 competitors)",
    "Dark/bold color schemes trending — purple is the dominant primary color (4 of 8)",
    "Enterprise positioning is overcrowded — nearly every player claims enterprise-grade",
    "UGC-to-paid-ads pipeline is becoming a standard feature",
    "Creator payment processing is now expected, not differentiating",
    "Social commerce integration (TikTok Shop, shoppable content) is the newest battleground",
    "Benchmarking and competitive intelligence emerging as premium add-ons",
    "Annual commitments are the norm — monthly flexibility is rare and valuable",
    "No competitor has a strong, specific CPG vertical landing page or positioning",
  ],

  gaps: [
    "No platform specifically built for CPG brands — all are horizontal",
    "Mid-market pricing gap — most are either $25/mo starter or $25K+/year enterprise",
    "Freemium options are rare — only GRIN and impact.com offer low-barrier entry",
    "CPG-specific features missing: retail media integration, in-store attribution, shelf-data correlation",
    "No competitor highlights grocery/retail distribution channel partnerships",
    "Limited sampling/product-trial automation specific to CPG (vs generic product seeding)",
    "Seasonal campaign templates for CPG (holiday, back-to-school, summer) are absent",
    "No platform offers retailer co-op marketing integration",
    "Sustainability-focused creator matching is not offered despite CPG sustainability trends",
    "Recipe/tutorial content workflow automation for food & beverage CPG is missing",
  ],

  opportunities: [
    "Build the first CPG-specific influencer marketing platform",
    "Bridge the mid-market pricing gap ($500-$2,000/mo range is underserved)",
    "Integrate retail media data with influencer attribution",
    "Offer CPG-specific campaign templates (product sampling, recipe content, in-store)",
    "Build sustainability-focused creator matching for eco-conscious CPG brands",
    "Create retailer partnership module (Walmart, Target, Kroger co-op marketing)",
    "Freemium or free trial approach differentiates vs demo-gated competitors",
    "Focus on nano/micro-influencer discovery for local/regional CPG campaigns",
    "Offer in-store sales lift measurement integrated with influencer campaigns",
    "Build seasonal campaign planning tools specific to CPG calendar",
  ],

  bestPractices: {
    design: [
      "Dark mode with vibrant accents is trending but not required",
      "Clean, minimal layouts with strong typographic hierarchy",
      "Product screenshots and platform mockups build credibility",
      "Social proof above the fold (logos, stats, awards)",
      "Animated elements and smooth transitions signal modernity",
    ],
    funnel: [
      "Dual CTAs (primary: demo/trial, secondary: learn more) outperform single CTA",
      "Free trial/freemium significantly lowers barrier to entry",
      "Case studies with specific metrics (%, $, x ROAS) convert better than generic testimonials",
      "Industry-specific landing pages increase relevance and conversion",
      "Progressive disclosure — show value before asking for commitment",
    ],
    messaging: [
      "Lead with outcomes, not features (ROI, growth, efficiency)",
      "Quantified claims outperform vague promises",
      "AI positioning is table stakes — differentiate HOW AI is used",
      "Creator-first language resonates more than brand-first",
      "Social proof should include recognizable brand logos AND specific metrics",
    ],
  },
};

export const usMarketInsights = {
  targetDemographics: {
    primaryBuyers: [
      "VP/Director of Marketing at CPG brands (decision maker)",
      "Brand Managers responsible for specific product lines",
      "Digital Marketing Managers executing campaigns",
      "Social Media Directors managing creator relationships",
      "CMOs at mid-market CPG companies ($50M-$500M revenue)",
    ],
    companySize: {
      sweet_spot: "Mid-market CPG brands ($50M-$500M revenue)",
      underserved: "Emerging CPG brands ($5M-$50M) priced out of enterprise tools",
      enterprise: "Top 50 CPG companies already locked into CreatorIQ/Traackr",
    },
    industries: [
      "Food & Beverage (largest CPG segment)",
      "Beauty & Personal Care (highest influencer adoption)",
      "Health & Wellness (fastest growing)",
      "Household Products",
      "Pet Care (emerging high-growth)",
      "Baby & Child Care",
    ],
  },

  buyingBehavior: {
    researchPhase: [
      "67% of B2B buyers start with online research before contacting sales",
      "G2 and Capterra reviews heavily influence platform selection",
      "Case studies from same-industry peers are most persuasive",
      "Free trials preferred over demo-only funnels for initial evaluation",
    ],
    decisionCriteria: [
      "ROI measurement and attribution capabilities (top priority)",
      "Ease of use and onboarding speed",
      "Creator database size and quality",
      "E-commerce and retail integration depth",
      "Pricing alignment with budget cycles",
      "Customer support responsiveness",
      "Platform scalability as program grows",
    ],
    purchaseCycle: "45-90 days for mid-market, 3-6 months for enterprise",
  },

  painPoints: [
    "Measuring real ROI from influencer campaigns (not just vanity metrics)",
    "Finding authentic creators who align with brand values and CPG product categories",
    "Managing influencer relationships at scale across multiple product lines",
    "Connecting influencer activity to actual retail/e-commerce sales",
    "Budget justification to CFO/CEO with concrete attribution data",
    "Compliance and FTC disclosure management across hundreds of creators",
    "Content rights management for repurposing UGC across channels",
    "Coordinating influencer campaigns with retail promotions and trade marketing",
    "Seasonal campaign planning and execution at CPG velocity",
    "Managing product sampling logistics at scale",
  ],

  purchaseTriggers: [
    "New product launch requiring influencer amplification",
    "Competitive brand gaining share through creator marketing",
    "CEO/board mandate to invest in digital/social commerce",
    "Existing manual process breaking down at scale",
    "Poor performance from current agency or platform",
    "Retail partner (Walmart, Target) requiring social/digital marketing support",
    "Budget cycle alignment (Q4 planning for next year)",
    "Industry event or conference exposure to competitor success stories",
    "New CMO/VP Marketing hire bringing platform preferences",
    "DTC channel launch requiring integrated influencer strategy",
  ],

  cpgSpecificTrends: {
    dtcRevenue:
      "DTC channels predicted to generate 50% of overall CPG revenue by 2026",
    onlineGrowth:
      "Online CPG sales grew 10% vs 2% physical retail growth",
    retailMedia:
      "US retail media spending expected to reach $60B in 2025, growing 20% annually",
    personalization:
      "More than 50% of shoppers say CPG brand experiences are impersonal",
    sustainability:
      "Sustainable products growing 6x faster than conventional",
    creatorRole:
      "Creators are connective tissue between brands and cultural moments — always-on ecosystems replacing campaign-based approaches",
    aiDisruption:
      "Agentic AI reshaping product discovery — can recommend alternatives, threatening traditional brand loyalty",
  },
};

export const conversionBenchmarks = {
  saasLandingPages: {
    medianConversionRate: "3.8%",
    allIndustryMedian: "6.6%",
    saasDeficit: "42% lower than all-industry median",
    topPerformers: "8-15% (top 10%)",
    freeTrialTooPaid: "2-5% average, up to 30% (Slack)",
  },
  copywriting: {
    bestReadingLevel: "5th to 7th grade = 12.9% conversion rate",
    professionalLevel: "Professional-level copy = 2.1% conversion rate",
    insight:
      "Simpler copy converts 6x better — avoid jargon and complex language",
  },
  trafficSources: {
    bestPerforming: "Email converts 4x better than any other source",
    mobile: "79% of SaaS landing page visits are on mobile",
    insight: "Mobile-first design is non-negotiable",
  },
  keyTakeaways: [
    "Write at 5th-7th grade reading level for 6x better conversion",
    "Email traffic is highest-converting — build email capture into funnel",
    "Mobile-first design required — 79% of visits are mobile",
    "SaaS landing pages underperform vs other industries — room to beat benchmarks",
    "Free trial to paid conversion sweet spot is 2-5%",
    "Top 10% of SaaS pages hit 8-15% conversion — that should be the target",
    "Industry-specific landing pages outperform generic ones",
    "Social proof with specific metrics converts better than logos alone",
  ],
};

// Summary of competitive landscape positioning map
export const positioningMap = {
  axes: {
    x: "Audience Size Focus (SMB/Mid-Market ← → Enterprise)",
    y: "Platform Scope (Influencer-Only ← → Multi-Channel Partnerships)",
  },
  positions: {
    "GRIN": { x: "mid-market", y: "influencer-focused", quadrant: "Mid-Market Specialist" },
    "CreatorIQ": { x: "enterprise", y: "influencer-focused", quadrant: "Enterprise Specialist" },
    "Aspire": { x: "mid-market", y: "influencer-plus-commerce", quadrant: "Commerce-Driven Mid-Market" },
    "Upfluence": { x: "mid-market", y: "influencer-plus-affiliate", quadrant: "Mid-Market Hybrid" },
    "Traackr": { x: "enterprise", y: "influencer-plus-data", quadrant: "Enterprise Data/Intelligence" },
    "Later": { x: "smb-to-mid", y: "social-plus-influencer", quadrant: "Social-First Broadest Scope" },
    "impact.com": { x: "all-sizes", y: "all-partnerships", quadrant: "Partnership Platform (Broadest)" },
    "Captiv8": { x: "enterprise", y: "influencer-plus-media", quadrant: "Agency-Backed Enterprise" },
  },
  whiteSpace:
    "CPG-specific mid-market platform with vertical depth — no competitor owns this position. The intersection of CPG vertical expertise + mid-market pricing + influencer-to-retail attribution is completely unoccupied.",
};
