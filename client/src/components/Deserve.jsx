import { useState, useEffect } from 'react';
import { useReveal } from './useReveal';

function PhoneMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      style={{ perspective: 1200, position: 'relative', display: 'flex', justifyContent: 'center' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        position: 'relative',
        width: 320, height: 680,
        background: 'linear-gradient(180deg, #2a2a2a 0%, #080808 12%, #080808 100%)',
        borderRadius: 48, border: '8px solid #1c1c1c',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 32px 90px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.08)',
        display: 'flex', flexDirection: 'column', color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}>
        {/* Dynamic Island Area */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: 12, left: 0, right: 0, zIndex: 10 }}>
          <div style={{ 
            width: 106, height: 32, background: '#000', borderRadius: 20, 
            border: '1px solid #333',
            boxShadow: '0 8px 24px rgba(0,0,0,0.9), inset 0 1px 3px rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px'
          }}>
            {/* Left side sensor */}
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0a0a0a', border: '1px solid #111' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {/* Camera active indicator */}
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#00ff00', boxShadow: '0 0 4px #00ff00' }} />
              {/* Camera lens reflection */}
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 40%)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 0 2px rgba(0,0,0,0.5)' }} />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ padding: '56px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
            {/* Logo */}
            <svg width="28" height="32" viewBox="0 0 40 46" fill="none">
              <path d="M20 0L0 8V24C0 35.05 8.7 45.35 20 48C31.3 45.35 40 35.05 40 24V8L20 0Z" fill="white" />
              <path d="M20 6L6 12V24C6 31.85 12.35 39.15 20 41.4C27.65 39.15 34 31.85 34 24V12L20 6Z" fill="#1c1c1c" />
            </svg>
            {/* Offers Pill */}
            <div style={{ background: '#161616', borderRadius: 100, padding: '6px 14px 6px 6px', display: 'flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#ff7043', border: '1.5px solid #161616', zIndex: 3 }} />
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#5c6bc0', border: '1.5px solid #161616', marginLeft: -10, zIndex: 2 }} />
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eeeeee', border: '1.5px solid #161616', marginLeft: -10, zIndex: 1 }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#ccc' }}>+10 offers</span>
            </div>
            {/* Settings */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>

          {/* Your Money */}
          <div style={{ fontSize: 11, color: '#777', letterSpacing: '0.12em', fontWeight: 800, marginBottom: 16 }}>YOUR MONEY</div>
          <div style={{ background: '#121212', borderRadius: 20, padding: '20px', marginBottom: 36, border: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <span style={{ fontSize: 15, fontWeight: 500, color: '#ddd' }}>CRED cash</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>₹10,00,000 <span style={{ color: '#555', marginLeft: 4, fontWeight: 400 }}>&gt;</span></div>
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 20 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span style={{ fontSize: 15, fontWeight: 500, color: '#ddd' }}>CRED mint</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}><span style={{ color: '#00e676', marginRight: 8 }}>+₹820</span>₹9,34,500 <span style={{ color: '#555', marginLeft: 4, fontWeight: 400 }}>&gt;</span></div>
            </div>
          </div>

          {/* Explore CRED */}
          <div style={{ fontSize: 11, color: '#777', letterSpacing: '0.12em', fontWeight: 800, marginBottom: 20 }}>EXPLORE CRED</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px 8px', textAlign: 'center', marginBottom: 20 }}>
            {/* Row 1 */}
            {[
              { icon: '📄', label: 'bills' },
              { icon: '💳', label: 'cards' },
              { icon: '🛍️', label: 'shop' },
              { icon: '✈️', label: 'travel' }
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 52, height: 52, background: '#141414', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#ccc' }}>{item.label}</div>
              </div>
            ))}
            {/* Row 2 */}
            <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ height: 52, background: '#141414', borderRadius: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '0 16px' }}>
                <span style={{ fontSize: 18 }}>7</span><span style={{ fontSize: 16 }}>💎</span><span style={{ fontSize: 18 }}>🎯</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#ccc' }}>win rewards</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, position: 'relative' }}>
              <div style={{ width: 52, height: 52, background: '#141414', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🎁</div>
              <div style={{ position: 'absolute', top: 40, background: 'rgba(0, 230, 118, 0.15)', border: '1px solid #00e676', color: '#00e676', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 100 }}>₹1000</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#ccc', marginTop: 4 }}>refer</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 52, height: 52, background: '#141414', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: '#fff', border: '1px solid #000'}}></div>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: '#fff', border: '1px solid #000'}}></div>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: '#fff', border: '1px solid #000'}}></div>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: '#fff', border: '1px solid #000'}}></div>
                </div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#ccc' }}>more</div>
            </div>
          </div>
        </div>

        {/* Explore Club (Bottom Nav) */}
        <div style={{ position: 'relative', background: 'radial-gradient(150% 100% at 50% 100%, #111 0%, #050505 100%)', padding: '16px 20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ position: 'absolute', top: -14, left: 20, fontSize: 10, color: '#777', letterSpacing: '0.12em', fontWeight: 800 }}>EXPLORE CLUB</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1 }}>
            <div style={{ width: 44, height: 44, border: '1px solid #333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2M19 7V5a2 2 0 0 0-2-2h-2M3 17v2a2 2 0 0 0 2 2h2M19 17v2a2 2 0 0 1-2 2h-2"/></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#888', letterSpacing: '0.05em' }}>SCAN TO PAY</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1, transform: 'translateY(-16px)' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: 64, height: 64, border: '2.5px solid #00b0ff', borderRadius: '50%', padding: 2 }}>
                <img src="https://i.pravatar.cc/100?img=1" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -2, left: -2, width: 20, height: 20, background: '#00b0ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #000' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div style={{ fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: '0.08em' }}>RADHIKA</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1 }}>
            <div style={{ width: 44, height: 44, border: '1px solid #333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#888', letterSpacing: '0.05em' }}>PAY ANYONE</div>
          </div>
        </div>

      </div>
      <div style={{ position: 'absolute', width: 250, height: 250, background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', bottom: -50, left: '50%', transform: 'translateX(-50%)', filter: 'blur(40px)', zIndex: -1 }} />
    </div>
  );
}

export default function Deserve() {
  const [stats, setStats] = useState({ members: '12M+', billsPaid: '₹5L Cr+', rating: '4.8★' });
  const r1 = useReveal(0); const r2 = useReveal(100); const r3 = useReveal(200);
  const r4 = useReveal(300); const rPhone = useReveal(200);

  useEffect(() => {
    fetch('/api/stats').then(r => r.json()).then(d => {
      setStats({ members: d.members, billsPaid: d.billsPaid, rating: d.rating + '★' });
    }).catch(() => {});
  }, []);

  return (
    <section id="about" style={{ padding: '140px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 60 }}>
        <div ref={rPhone} style={{ position: 'relative', zIndex: 1 }}><PhoneMockup /></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
          <h2 ref={r2} style={{ fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.035em', marginBottom: 24 }}>
            all that you deserve.<br />and some more.
          </h2>
          <p ref={r3} style={{ fontSize: 20, fontWeight: 600, color: '#fff', maxWidth: 600, lineHeight: 1.5, marginBottom: 48 }}>
            pay your credit card bills, and get rewarded with CRED coins, cashback, hidden gems and more.
          </p>
          <div ref={r4} style={{ display: 'flex', gap: 60, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[{ num: stats.members, lbl: 'Trusted Members' }, { num: stats.billsPaid, lbl: 'Bills Paid' }, { num: stats.rating, lbl: 'App Rating' }].map(s => (
              <div key={s.lbl}>
                <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.025em' }}>{s.num}</div>
                <div style={{ fontSize: 12, color: '#808080', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
