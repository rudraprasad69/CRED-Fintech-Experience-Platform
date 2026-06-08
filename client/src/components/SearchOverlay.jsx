import { useState, useEffect, useRef } from 'react';

const DEFAULT = [
  { label: 'Features & Benefits',    href: '#about',    icon: '✨' },
  { label: 'Credit Card Payments',   href: '#payments', icon: '💳' },
  { label: 'Rewards & Coins',        href: '#rewards',  icon: '🎁' },
  { label: 'Security & Privacy',     href: '#security', icon: '🛡️' },
  { label: 'Our Story',              href: '#story',    icon: '📖' },
];

export default function SearchOverlay({ open, onClose }) {
  const [query,   setQuery]   = useState('');
  const [results, setResults] = useState(DEFAULT);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) { setQuery(''); setResults(DEFAULT); setTimeout(() => inputRef.current?.focus(), 60); }
  }, [open]);

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  async function handleSearch(val) {
    setQuery(val);
    if (!val.trim()) { setResults(DEFAULT); return; }
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(val)}`);
      const data = await res.json();
      setResults(data.results.length ? data.results : DEFAULT);
    } catch { setResults(DEFAULT); }
  }

  if (!open) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '18vh' }}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 620, padding: '0 24px' }}>
        <div className="ai-search-trigger" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '14px 22px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input ref={inputRef} value={query} onChange={e => handleSearch(e.target.value)}
            placeholder="Search CRED…"
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', fontSize: 20, fontFamily: 'inherit', fontWeight: 500, outline: 'none' }} />
          <button onClick={onClose} style={{ fontSize: 11, color: '#808080', background: 'rgba(255,255,255,0.06)', padding: '4px 9px', borderRadius: 7, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>ESC</button>
        </div>
      </div>

      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 620, padding: '16px 24px 0' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#808080', marginBottom: 10 }}>
          {query ? 'Results' : 'Quick Links'}
        </div>
        {results.map(r => (
          <a key={r.label} href={r.href} onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 10px', borderRadius: 12, cursor: 'pointer', color: '#d8d8d8', fontSize: 14, textDecoration: 'none', transition: 'background 0.18s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <span style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{r.icon}</span>
            {r.label}
          </a>
        ))}
      </div>
    </div>
  );
}
