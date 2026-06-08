const ITEMS = [
  'CREDITWORTHY MEMBERS','PREMIUM REWARDS','SECURE PAYMENTS','CRED COINS',
  'UPI ON CREDIT','TRAVEL BENEFITS','EXCLUSIVE ACCESS','CRED FLASH',
  'CREDITWORTHY MEMBERS','PREMIUM REWARDS','SECURE PAYMENTS','CRED COINS',
  'UPI ON CREDIT','TRAVEL BENEFITS','EXCLUSIVE ACCESS','CRED FLASH',
];

export default function Ticker() {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '18px 0', overflow: 'hidden', background: '#080808' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 28s linear infinite' }}>
        {ITEMS.map((item, i) => (
          <span key={i} style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#808080', whiteSpace: 'nowrap', padding: '0 40px',
            display: 'flex', alignItems: 'center', gap: 40,
          }}>
            {item}
            <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.12)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
