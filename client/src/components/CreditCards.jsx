import { useState } from 'react';
import { useReveal } from './useReveal';

const FEATURES = [
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/><line x1="2" y1="10" x2="22" y2="10" stroke="#fff" strokeWidth="1.5" opacity="0.4"/></svg>, 
    title: 'All Cards, One Place',  desc: 'Manage every credit card from every bank in a single, elegant dashboard — no more switching apps.' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#fff" strokeWidth="1.5"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#fff" strokeWidth="1.5" opacity="0.4"/></svg>, 
    title: 'Smart Reminders',       desc: 'AI-powered reminders optimise your payment timing to protect your score and maximise rewards.' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><line x1="18" y1="20" x2="18" y2="10" stroke="#fff" strokeWidth="1.5"/><line x1="12" y1="20" x2="12" y2="4" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><line x1="6" y1="20" x2="6" y2="14" stroke="#fff" strokeWidth="1.5"/></svg>, 
    title: 'Spending Insights',     desc: 'Intelligent spend categorisation surfaces patterns you\'d never spot, helping you spend smarter.' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polyline points="20 12 20 22 4 22 4 12" stroke="#fff" strokeWidth="1.5"/><rect x="2" y="7" width="20" height="5" stroke="#fff" strokeWidth="1.5"/><line x1="12" y1="22" x2="12" y2="7" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="#fff" strokeWidth="1.5" opacity="0.4"/></svg>, 
    title: 'Exclusive Rewards',     desc: 'Earn CRED coins on every bill payment. Redeem for premium experiences, top brands, and cashback.' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>, 
    title: 'Instant Payments',      desc: 'Pay bills in seconds with bank-grade security and consumer-grade speed — every time.' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M4 22h16" stroke="#fff" strokeWidth="1.5"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="#fff" strokeWidth="1.5" opacity="0.4"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" stroke="#fff" strokeWidth="1.5"/></svg>, 
    title: 'Member Privileges',     desc: 'Curated deals, airport lounges, and exclusive offers from 1,000+ premium brands.' 
  },
];

function FeatureCard({ icon, title, desc, delay }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal(delay);
  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 22, padding: 32,
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 13, color: '#808080', lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}

export default function CreditCards() {
  const r1 = useReveal(0); const r2 = useReveal(100); const r3 = useReveal(200);
  return (
    <section id="payments" style={{ padding: '140px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}>
          <div style={{ maxWidth: 560 }}>
            <h2 ref={r2} style={{ fontSize: 'clamp(40px,5.5vw,70px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.035em', marginBottom: 24 }}>
              do more with<br />your credit cards
            </h2>
            <p ref={r3} style={{ fontSize: 20, fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>
              manage all your credit cards in one place. tracking statements, due dates, hidden charges, and more.
            </p>
          </div>
          {/* Mock Graphic */}
          <div style={{ position: 'relative', width: 300, height: 300 }}>
            <div style={{ position: 'absolute', right: 0, width: 250, height: 250, borderRadius: '50%', background: '#080808', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            <div style={{ position: 'absolute', right: 210, top: 100, width: 60, height: 40, background: '#00c853', borderRadius: 8, transform: 'rotate(-15deg)' }} />
            <div style={{ position: 'absolute', right: 230, top: 160, width: 50, height: 50, background: '#00c853', borderRadius: 8, transform: 'rotate(-5deg)' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} delay={(i % 3) * 100} />)}
        </div>
      </div>
    </section>
  );
}
