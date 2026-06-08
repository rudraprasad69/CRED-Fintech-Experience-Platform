import { useState } from 'react';
import { useReveal } from './useReveal';

const CARDS = [
  {
    id: 'rewards', label: 'LIFESTYLE', title: ['curated', 'rewards'],
    desc: 'a curated selection of products for your lifestyle...',
    bg: 'linear-gradient(145deg, #59002b 0%, #d40066 55%, #80003e 100%)',
    visual: (
      <div style={{ width: 88, height: 88, borderRadius: 24, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </div>
    ),
  },
  {
    id: 'travel', label: 'EXPERIENCES', title: ['an upgrade', 'on travel'],
    desc: 'an upgrade on your travel experiences...',
    bg: 'linear-gradient(145deg, #2a1144 0%, #5d2599 55%, #3d1b66 100%)',
    visual: (
      <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', display: 'inline-flex' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-2px)' }}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5 6.3 7.7 5 9l5.5 3.5-3.5 3.5-3-1-1.5 1.5 3.5 2 2 3.5 1.5-1.5-1-3 3.5-3.5 3.5 5.5 1.3-1.3z"></path>
        </svg>
      </div>
    ),
  },
  {
    id: 'car', label: 'DREAM BIG', title: ['buy your', 'dream car'],
    desc: 'buy your dream car with CRED...',
    bg: 'linear-gradient(145deg, #003314 0%, #008033 55%, #004d1f 100%)',
    visual: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'credPulse 2.4s ease-in-out infinite', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
            <circle cx="7" cy="17" r="2"></circle>
            <path d="M9 17h6"></path>
            <circle cx="17" cy="17" r="2"></circle>
          </svg>
        </div>
      </div>
    ),
  },
];

function UpgradeCard({ card, delay }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal(delay);
  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 26, overflow: 'hidden', position: 'relative',
        aspectRatio: '0.75', cursor: 'pointer',
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        boxShadow: hovered ? '0 24px 72px rgba(0,0,0,0.6)' : 'none',
        transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}>
      <div style={{ position: 'absolute', inset: 0, background: card.bg }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '34px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div>
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>{card.label}</p>
          <h3 style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 10 }}>
            {card.title[0]}<br />{card.title[1]}
          </h3>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6 }}>{card.desc}</p>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 12 }}>
          {card.visual}
        </div>
      </div>
    </div>
  );
}

export default function Upgrade() {
  const r1 = useReveal(0); const r2 = useReveal(100);
  return (
    <section id="rewards" style={{ padding: '140px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p ref={r1} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#808080', marginBottom: 28 }}>UPGRADE YOUR EXPERIENCE</p>
        <h2 ref={r2} style={{ fontSize: 'clamp(40px,5.5vw,70px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.04em', marginBottom: 56 }}>
          upgrade your life.<br />bit by bit.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {CARDS.map((c, i) => <UpgradeCard key={c.id} card={c} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
