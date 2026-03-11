import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import all 5 designs
import * as Design1 from './designs/design1-authority';
import * as Design2 from './designs/design2-social-proof';
import * as Design3 from './designs/design3-urgency';
import * as Design4 from './designs/design4-storytelling';
import * as Design5 from './designs/design5-minimalist';

const designs = {
  1: { ...Design1, label: 'Authority', color: '#FF6B00' },
  2: { ...Design2, label: 'Trust', color: '#2563EB' },
  3: { ...Design3, label: 'Closer', color: '#EF4444' },
  4: { ...Design4, label: 'Story', color: '#059669' },
  5: { ...Design5, label: 'Minimal', color: '#18181B' },
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [activeDesign, setActiveDesign] = useState(1);
  const Design = designs[activeDesign];

  const handleDesignSwitch = (n) => {
    setActiveDesign(n);
    window.scrollTo(0, 0);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Design Selector Toolbar */}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          gap: 6,
          padding: '10px 16px',
          background: 'rgba(0,0,0,0.92)',
          borderRadius: 16,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
        role="toolbar"
        aria-label="Design variant selector"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => handleDesignSwitch(n)}
            aria-label={`Switch to Design ${n}: ${designs[n].label}`}
            aria-pressed={activeDesign === n}
            style={{
              padding: '8px 14px',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              background:
                activeDesign === n
                  ? designs[n].color
                  : 'rgba(255,255,255,0.08)',
              color:
                activeDesign === n
                  ? n === 5
                    ? '#F59E0B'
                    : '#fff'
                  : 'rgba(255,255,255,0.6)',
              fontWeight: 600,
              fontSize: 12,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {n}. {designs[n].label}
          </button>
        ))}
      </div>

      {/* key={activeDesign} forces full re-mount when switching designs */}
      <Routes key={activeDesign}>
        <Route path="/" element={<Design.HomePage />} />
        <Route path="/platform" element={<Design.PlatformPage />} />
        <Route path="/agency" element={<Design.AgencyPage />} />
        <Route path="/pricing" element={<Design.PricingPage />} />
        <Route path="/contact" element={<Design.ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
