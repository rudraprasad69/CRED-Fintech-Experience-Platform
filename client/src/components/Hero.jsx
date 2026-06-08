import { useEffect, useRef } from 'react';

const rays = [14, 22, 31, 40, 50, 60, 69, 78, 86];

export default function Hero() {
  const bodyRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (bodyRef.current && y < window.innerHeight) {
        bodyRef.current.style.transform = `translateY(${y * 0.28}px)`;
        bodyRef.current.style.opacity   = Math.max(0, 1 - y / (window.innerHeight * 0.65));
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

      {/* Background canvas */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(100,70,20,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 25% 0%, rgba(160,110,40,0.10) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 75% 0%, rgba(140,90,30,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #130f06 0%, #0c0a05 25%, #080808 60%)`,
      }} />

      {/* Architectural grid */}
      <div style={{
        position: 'absolute', inset: '0 0 40% 0', zIndex: 0, opacity: 0.55,
        backgroundImage: `
          linear-gradient(rgba(180,140,60,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(180,140,60,0.07) 1px, transparent 1px)`,
        backgroundSize: '120px 120px',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 0%, transparent 80%)',
        maskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 0%, transparent 80%)',
      }} />

      {/* Light rays */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '68%', zIndex: 0, overflow: 'hidden' }}>
        {rays.map((left, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0, left: `${left}%`,
            width: 2, height: `${55 + i * 3.5}%`,
            background: 'linear-gradient(180deg, rgba(255,210,100,0.32) 0%, rgba(255,200,80,0.06) 55%, transparent 100%)',
            filter: 'blur(1.5px)',
            transform: `rotate(${(i - 4) * 2.5}deg)`,
            transformOrigin: 'top center',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: 8, height: 8, borderRadius: '50%',
              background: 'rgba(255,225,130,0.95)',
              boxShadow: '0 0 14px 4px rgba(255,210,80,0.6), 0 0 40px 10px rgba(255,180,40,0.2)',
            }} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div ref={bodyRef} style={{ position: 'relative', zIndex: 1, padding: '0 80px 100px', maxWidth: 1280, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(52px, 8.5vw, 110px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 24 }}>
          crafted for the<br />creditworthy
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 400, color: '#ffffff', maxWidth: 600, lineHeight: 1.6, marginBottom: 48 }}>
          CRED is a members-only club that enables the<br/>trustworthy to make financial progress
        </p>
      </div>

      {/* QR Code Box */}
      <div style={{
        position: 'absolute', bottom: 40, right: 80, zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 16,
        background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 24px', borderRadius: 8, backdropFilter: 'blur(10px)'
      }}>
        <div style={{ width: 60, height: 60, background: '#fff', padding: 4, borderRadius: 4 }}>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://cred.club" 
            alt="CRED QR Code" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>
        <div style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.2, color: '#fff' }}>
          download<br />CRED
        </div>
      </div>
    </section>
  );
}
