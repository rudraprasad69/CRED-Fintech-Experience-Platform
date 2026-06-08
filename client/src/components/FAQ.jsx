import { useState } from 'react';
import { useReveal } from './useReveal';

const FAQS = [
  { q: 'Who is eligible to join CRED?', a: 'CRED is exclusive to individuals with a credit score of 750 or above. Your score is verified against CIBIL, Equifax, or Experian at the time of onboarding.' },
  { q: 'How do I earn and use CRED coins?', a: 'You earn CRED coins every time you pay a credit card bill through CRED. The coins you earn depend on your bill amount and membership tier. Coins can be redeemed for premium brand vouchers, cashback, travel experiences, and exclusive member offers.' },
  { q: 'Is my data safe with CRED?', a: 'Absolutely. CRED uses 256-bit bank-grade encryption across all transactions and stored data. We are PCI DSS compliant, follow all RBI guidelines, and your data is never sold to third parties — ever.' },
  { q: 'What is UPI on Credit?', a: 'UPI on Credit lets you link your credit card to CRED\'s UPI ID, enabling you to make payments at any UPI merchant using your credit card\'s available limit — with rewards and credit period intact.' },
  { q: 'How does CRED make money?', a: 'CRED generates revenue through brand partnerships, curated financial product recommendations, and fees from payment products. We do not monetise your personal data — ever.' },
];

function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal(delay);
  return (
    <div ref={ref} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', background: 'none', border: 'none', color: '#fff',
        fontFamily: 'inherit', fontSize: 16, fontWeight: 600, textAlign: 'left',
        padding: '24px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20,
      }}>
        {q}
        <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
      </button>
      <div style={{ fontSize: 14, color: '#808080', lineHeight: 1.75, overflow: 'hidden', maxHeight: open ? 300 : 0, paddingBottom: open ? 24 : 0, transition: 'max-height 0.45s cubic-bezier(0.25,0.46,0.45,0.94), padding-bottom 0.45s' }}>
        {a}
      </div>
    </div>
  );
}

export default function FAQ() {
  const headRef = useReveal(0);
  return (
    <section style={{ padding: '120px 80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808' }}>
      <div style={{ maxWidth: 760 }}>
        <h2 ref={headRef} style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 48 }}>FAQs</h2>
        {FAQS.map((f, i) => <FAQItem key={f.q} {...f} delay={i * 80} />)}
      </div>
    </section>
  );
}
