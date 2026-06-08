const router = require('express').Router();

/* AI Chat */
const aiBank = {
  eligible : 'CRED is exclusive to individuals with a credit score of 750+. Your score is verified against CIBIL, Equifax, or Experian at sign-up. Download the app and check instantly.',
  rewards  : 'You earn CRED coins on every credit card bill you pay. Coins scale with your bill amount and tier — redeem for premium vouchers, cashback, travel deals, and brand offers.',
  security : 'CRED uses 256-bit bank-grade encryption. We\'re PCI DSS compliant, follow all RBI guidelines, and we never sell your data to third parties — ever.',
  upi      : 'UPI on Credit links your credit card to a CRED UPI ID, letting you pay via any UPI-enabled merchant or app using your card\'s credit limit — with all the card rewards too.',
  score    : 'A strong credit score reflects on-time payments, low utilisation, long history, and minimal hard enquiries. Paying bills on time via CRED directly helps protect and grow it.',
  coins    : 'CRED coins are earned every time you pay a credit card bill through CRED. The more you pay, the more you earn. Coins never expire and can be redeemed in the CRED store.',
  default  : 'CRED is India\'s most rewarding platform for the creditworthy — bill payments, UPI on credit, exclusive rewards, and more. What would you like to know specifically?',
};

function getReply(msg) {
  const m = msg.toLowerCase();
  if (/eligib|join|member|qualify/.test(m)) return aiBank.eligible;
  if (/coin|earn|redeem/.test(m))           return aiBank.coins;
  if (/reward|benefit|perk/.test(m))        return aiBank.rewards;
  if (/safe|secur|privac|encrypt/.test(m))  return aiBank.security;
  if (/upi|credit pay/.test(m))             return aiBank.upi;
  if (/score|cibil/.test(m))                return aiBank.score;
  return aiBank.default;
}

router.post('/chat', (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' });
  }
  // Simulate slight latency for natural feel
  setTimeout(() => {
    res.json({ reply: getReply(message), timestamp: new Date().toISOString() });
  }, 600 + Math.random() * 600);
});

/* ── Search ──────────────────────────────────────────────── */
const searchIndex = [
  { label: 'Features & Benefits',    href: '#about',    icon: '✨' },
  { label: 'Credit Card Payments',   href: '#payments', icon: '💳' },
  { label: 'Rewards & Coins',        href: '#rewards',  icon: '🎁' },
  { label: 'Security & Privacy',     href: '#security', icon: '🛡️' },
  { label: 'Our Story',              href: '#story',    icon: '📖' },
  { label: 'Scan & Pay',             href: '#rewards',  icon: '📷' },
  { label: 'UPI on Credit',          href: '#rewards',  icon: '⚡' },
  { label: 'Tap to Pay',             href: '#rewards',  icon: '📱' },
  { label: 'App Store Rating 4.8★',  href: '#ratings',  icon: '⭐' },
  { label: 'Membership Eligibility', href: '#exclusive',icon: '🏛️' },
];

router.get('/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase().trim();
  if (!q) return res.json({ results: searchIndex.slice(0, 5) });
  const results = searchIndex.filter(item =>
    item.label.toLowerCase().includes(q)
  );
  res.json({ results: results.slice(0, 6) });
});

/* ── Stats ───────────────────────────────────────────────── */
router.get('/stats', (_req, res) => {
  res.json({
    members   : '12M+',
    billsPaid : '₹5L Cr+',
    rating    : '4.8',
    cities    : '2500+',
  });
});

module.exports = router;
