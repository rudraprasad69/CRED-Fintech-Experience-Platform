import { useReveal } from './useReveal';

const AppStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256">
    <rect width="256" height="256" rx="55" fill="#0A84FF" />
    <g stroke="#fff" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
      <line x1="128" y1="65" x2="80" y2="175" />
      <line x1="128" y1="65" x2="176" y2="175" />
      <line x1="90" y1="135" x2="166" y2="135" />
    </g>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4184F3" d="M3.4,1.8C3.1,2.1,3,2.6,3,3.3v17.4c0,0.7,0.1,1.2,0.4,1.5l0.1,0.1l9.9-9.9v-0.2l-9.9-9.9L3.4,1.8z"/>
    <path fill="#FBBC05" d="M17.6,16.5l-4.2-4.2v-0.5l4.2-4.2l0.1,0.1l5,2.8c1.4,0.8,1.4,2.1,0,2.9l-5,2.8L17.6,16.5z"/>
    <path fill="#EA4335" d="M13.4,11.8l-10,10c1.1,1.1,2.9,1.2,4.4,0.3l9.8-5.6L13.4,11.8z"/>
    <path fill="#34A853" d="M13.4,12.2l4.2-4.2l-9.8-5.6C6.3,1.5,4.5,1.6,3.4,2.7L13.4,12.2z"/>
  </svg>
);

function RatingCard({ store, score, count, delay }) {
  const ref = useReveal(delay);
  const isAppStore = store.toLowerCase().includes('app');
  
  return (
    <div ref={ref} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 22, padding: 32, minWidth: 220 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        {isAppStore ? <AppStoreIcon /> : <PlayStoreIcon />}
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#808080', paddingTop: 2 }}>{store}</div>
      </div>
      <div style={{ fontSize: 60, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em' }}>{score}</div>
      <div style={{ display: 'flex', gap: 3, margin: '10px 0 6px' }}>
        {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#FFB800', fontSize: 17, opacity: i === 5 ? 0.4 : 1 }}>★</span>)}
      </div>
      {count && <div style={{ fontSize: 12, color: '#808080' }}>{count}</div>}
    </div>
  );
}

export default function Ratings() {
  const r1 = useReveal(0); const r2 = useReveal(100); const r3 = useReveal(300);
  return (
    <section style={{ padding: '140px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 60 }}>
        <div>
          <h2 ref={r2} style={{ fontSize: 'clamp(40px,6vw,76px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
            the proof<br />writes itself
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <RatingCard store="app store"  score="4.8" count="" delay={200} />
          <RatingCard store="play store" score="4.8" count="" delay={300} />
        </div>
      </div>
    </section>
  );
}
