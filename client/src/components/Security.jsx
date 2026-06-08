import { useReveal } from './useReveal';

export default function Security() {
  const r1 = useReveal(0); const r2 = useReveal(100);
  const r3 = useReveal(200); const r4 = useReveal(300);
  return (
    <section id="security" style={{ padding: '170px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, 
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 40%),
                          radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 0%, transparent 40%),
                          radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
        backgroundSize: '100% 100%'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 140 }}>
        
        {/* Top Part: Feel the odds */}
        <div>
          <h2 ref={r2} style={{ fontSize: 'clamp(40px,6vw,76px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 24 }}>
            feel the odds<br />fall in your favor
          </h2>
          <p ref={r3} style={{ fontSize: 18, fontWeight: 600, color: '#fff', maxWidth: 500, margin: '0 auto', lineHeight: 1.5 }}>
            win rewards on every single credit card payment...
          </p>
        </div>

        {/* Bottom Part: Trust & Security */}
        <div>
          <div ref={r1} style={{ width: 76, height: 76, margin: '0 auto 44px' }}>
            <svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 4L8 15V36C8 55 21.5 71.5 38 76C54.5 71.5 68 55 68 36V15L38 4Z"
                fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
              <path d="M38 13L18 21V36C18 51 28.5 64.5 38 68C47.5 64.5 58 51 58 36V21L38 13Z"
                fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <path d="M28 36.5L35 43.5L50 28.5" stroke="white" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
          </div>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#808080', marginBottom: 24 }}>
            trust as a virtue that pays off
          </p>
          <p ref={r4} style={{ fontSize: 'clamp(20px,2.8vw,32px)', fontWeight: 600, color: '#606060', lineHeight: 1.4, maxWidth: 760, margin: '0 auto' }}>
            all your personal data and transactions are encrypted and secured. there's no room for mistakes.
          </p>
          <p style={{ fontSize: 'clamp(20px,2.8vw,32px)', fontWeight: 600, color: '#fff', lineHeight: 1.4, maxWidth: 760, margin: '20px auto 0' }}>
            because we didn't leave any.
          </p>
        </div>
      </div>
    </section>
  );
}
