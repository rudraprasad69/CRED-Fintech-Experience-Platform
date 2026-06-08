import { useState, useRef, useEffect } from 'react';

const QUICK = ['Am I eligible?', 'How do rewards work?', 'Is CRED safe?', 'What is UPI on Credit?'];

export default function AIChat() {
  const [open,    setOpen]    = useState(false);
  const [msgs,    setMsgs]    = useState([{ role: 'bot', text: "Hey! I'm CRED's AI assistant. Ask me anything about membership, rewards, payments, or security." }]);
  const [input,   setInput]   = useState('');
  const [typing,  setTyping]  = useState(false);
  const [showQR,  setShowQR]  = useState(true);
  const msgEnd = useRef(null);

  useEffect(() => { msgEnd.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);

  async function send(text) {
    if (!text.trim()) return;
    setMsgs(m => [...m, { role: 'user', text }]);
    setInput('');
    setShowQR(false);
    setTyping(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) });
      const data = await res.json();
      setTyping(false);
      setMsgs(m => [...m, { role: 'bot', text: data.reply }]);
    } catch {
      setTyping(false);
      setMsgs(m => [...m, { role: 'bot', text: "I'm having trouble connecting right now. Please try again in a moment." }]);
    }
  }

  return (
    <>
      {/* FAB */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 9900,
        width: 58, height: 58, borderRadius: '50%',
        background: '#ffffff', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}>
        {open
          ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
      </button>

      {/* Window */}
      <div style={{
        position: 'fixed', bottom: 104, right: 32, zIndex: 9800,
        width: 358, maxHeight: 530,
        background: '#111', border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 26, overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: '0 28px 90px rgba(0,0,0,0.8)',
        transform: open ? 'none' : 'translateY(16px) scale(0.97)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
        transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}>
        {/* Header */}
        <div style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.035)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(145deg,#282828,#111)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="19" viewBox="0 0 40 46" fill="none"><path d="M20 0L0 8V24C0 35.05 8.7 45.35 20 48C31.3 45.35 40 35.05 40 24V8L20 0Z" fill="white"/><path d="M20 6L6 12V24C6 31.85 12.35 39.15 20 41.4C27.65 39.15 34 31.85 34 24V12L20 6Z" fill="#111"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>CRED AI</div>
            <div style={{ fontSize: 11, color: '#00c853', marginTop: 1 }}>● Online · Always here</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              maxWidth: '86%', padding: '11px 15px', borderRadius: m.role === 'bot' ? '4px 18px 18px 18px' : '18px 18px 4px 18px',
              background: m.role === 'bot' ? 'rgba(255,255,255,0.06)' : '#ffffff',
              color: m.role === 'bot' ? '#d8d8d8' : '#080808',
              alignSelf: m.role === 'bot' ? 'flex-start' : 'flex-end',
              fontSize: 13, lineHeight: 1.55,
              fontWeight: m.role === 'user' ? 500 : 400,
            }}>{m.text}</div>
          ))}
          {typing && (
            <div style={{ display: 'flex', gap: 4, alignItems: 'center', alignSelf: 'flex-start', background: 'rgba(255,255,255,0.06)', padding: '11px 15px', borderRadius: '4px 18px 18px 18px' }}>
              {[0,200,400].map(d => <div key={d} style={{ width: 6, height: 6, background: '#808080', borderRadius: '50%', animation: `credDot 1.4s ease-in-out ${d}ms infinite` }} />)}
            </div>
          )}
          <div ref={msgEnd} />
        </div>

        {/* Quick replies */}
        {showQR && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '0 18px 10px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => send(q)} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', color: '#d8d8d8', padding: '6px 13px', borderRadius: 100, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>{q}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="ai-search-trigger" style={{ flex: 1, display: 'flex', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 100 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask anything…"
              style={{ flex: 1, background: 'none', border: 'none', color: '#fff', padding: '10px 15px', borderRadius: 100, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
          </div>
          <button onClick={() => send(input)} style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
