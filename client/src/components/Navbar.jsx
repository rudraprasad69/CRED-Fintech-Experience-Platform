import { useState, useEffect } from 'react';

const CredShield = ({ inverted = false }) => (
  <svg width="34" height="39" viewBox="0 0 40 46" fill="none">
    <path d="M20 0L0 8V24C0 35.05 8.7 45.35 20 48C31.3 45.35 40 35.05 40 24V8L20 0Z"
      fill={inverted ? '#080808' : 'white'} />
    <path d="M20 6L6 12V24C6 31.85 12.35 39.15 20 41.4C27.65 39.15 34 31.85 34 24V12L20 6Z"
      fill={inverted ? 'white' : '#080808'} />
    <path d="M15 21L19 25L26 18" stroke={inverted ? '#080808' : 'white'}
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled]   = useState(false);
  const [lastY,    setLastY]      = useState(0);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(prev => {
        const up = y < lastY;
        setLastY(y);
        return up && y > 80;
      });
      setLastY(y);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [lastY]);

  const links = [
    { label: 'credit score check', href: '#score' },
    { label: 'CRED pay',           href: '#pay' },
  ];

  const s = scrolled;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 56px',
      background: 'rgba(8, 8, 8, 0.8)',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <CredShield inverted={false} />
        <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff' }}>CRED</span>
      </a>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="ai-search-trigger" onClick={onSearchOpen} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '9px 18px', borderRadius: 100,
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'none', cursor: 'pointer', fontFamily: 'inherit',
          fontSize: 13, fontWeight: 500,
          color: 'rgba(255,255,255,0.5)',
          transition: 'all 0.2s',
          marginRight: 24
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          Search
          <kbd style={{
            fontSize: 10, padding: '2px 6px', borderRadius: 5,
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.35)',
          }}>⌘K</kbd>
        </button>

        <div style={{
          border: '1px solid rgba(255,255,255,0.15)',
          borderRight: 'none',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            fontSize: 8, fontWeight: 700, letterSpacing: '0.15em',
            color: '#ffffff', textAlign: 'left', lineHeight: 1.5,
            opacity: 0.8
          }}>
            CRED INDUSIND BANK<br />
            RUPAY CREDIT CARD
          </div>
        </div>
        
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          width: 60, height: 60,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
          padding: 0
        }}>
          <div style={{ width: 22, height: 1.5, background: '#fff' }} />
          <div style={{ width: 22, height: 1.5, background: '#fff' }} />
          <div style={{ width: 22, height: 1.5, background: '#fff' }} />
        </button>
      </div>
    </nav>
  );
}
