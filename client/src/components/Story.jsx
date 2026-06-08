import { useEffect, useRef, useState } from 'react';

const TEXT = "the story of CRED begins with trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself.";

export default function Story() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight;
      const end = windowHeight * 0.2;
      
      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = TEXT.split(" ");
  const N = words.length;

  return (
    <section id="story" ref={containerRef} style={{ padding: '240px 20px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ maxWidth: 1200, textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(34px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.03em', maxWidth: 1050, margin: '0 auto' }}>
          {words.map((word, i) => {
            // Words start revealing between 0% and 80% of total progress
            const wordStart = (i / N) * 0.8;
            // Each word takes 20% of total progress to fully fade in
            const wordProgress = Math.max(0, Math.min(1, (progress - wordStart) / 0.2));
            const opacity = 0.2 + 0.8 * wordProgress;
            
            const isTrust = word === 'trust.';
            const content = isTrust ? <em style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', fontWeight: 400 }}>trust.</em> : word;
            return (
              <span key={i} style={{ color: `rgba(255,255,255,${opacity})`, display: 'inline-block', marginRight: '0.25em', marginBottom: '0.1em' }}>
                {content}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
