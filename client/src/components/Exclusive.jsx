import { useReveal } from './useReveal';

export default function Exclusive() {
  const r1 = useReveal(0); const r2 = useReveal(100);
  const r3 = useReveal(200); const r4 = useReveal(300);
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 50% 65% at 50% 100%, rgba(255,210,80,0.10) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 50% 80%, rgba(180,120,30,0.07) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #0d0b05 50%, #080808 100%)` }} />
      {/* Door light */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 240, height: '58%', background: 'linear-gradient(0deg, rgba(255,210,80,0.13) 0%, rgba(255,195,60,0.05) 45%, transparent 70%)', clipPath: 'polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 110, height: 230, border: '1px solid rgba(255,200,90,0.13)', borderBottom: 'none', borderRadius: '55px 55px 0 0' }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '100px 80px', maxWidth: 860 }}>
        <h2 ref={r2} style={{ fontSize: 'clamp(54px,9vw,116px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 32 }}>
          not<br />everyone<br />gets it
        </h2>
        <p ref={r3} style={{ fontSize: 15, color: '#808080', maxWidth: 460, margin: '0 auto 44px', lineHeight: 1.75 }}>
          the members-only app for the creditworthy. if you have a credit score of 750 or more, you have a chance to be part of the club.
        </p>
        <div ref={r4}>
          <button style={{ background: '#fff', color: '#080808', border: 'none', borderRadius: 100, padding: '16px 36px', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.25s' }}>
            Check Your Eligibility
          </button>
        </div>
      </div>
    </section>
  );
}
