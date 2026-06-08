const COL_DATA = [
  { heading: 'NEW LAUNCH',  links: ['CRED UPI','CRED Flash','CRED Mint','CRED Travel'] },
  { heading: 'SPONSORED',   links: ['Payments','Rewards','Design','INSIDER','PASS'] },
  { heading: 'COMPANY',     links: ['About Us','Careers','Press','Blog'] },
  { heading: 'RESOURCES',   links: ['Help Center','Contact','Security','Sitemap'] },
];

export default function Footer() {
  return (
    <footer style={{ padding: '80px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Brand */}
        <div>
          <svg width="34" height="39" viewBox="0 0 40 46" fill="none">
            <path d="M20 0L0 8V24C0 35.05 8.7 45.35 20 48C31.3 45.35 40 35.05 40 24V8L20 0Z" fill="white"/>
            <path d="M20 6L6 12V24C6 31.85 12.35 39.15 20 41.4C27.65 39.15 34 31.85 34 24V12L20 6Z" fill="#080808"/>
            <path d="M15 21L19 25L26 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{ fontSize: 13, color: '#808080', lineHeight: 1.7, marginTop: 18, maxWidth: 240 }}>
            India's most rewarding platform for the creditworthy. Built for those who've proven their trustworthiness.
          </p>
        </div>
        {/* Columns */}
        {COL_DATA.map(col => (
          <div key={col.heading}>
            <h5 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#808080', marginBottom: 20 }}>{col.heading}</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0, margin: 0 }}>
              {col.links.map(l => (
                <li key={l}><a href="#" style={{ fontSize: 13, color: '#d8d8d8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#d8d8d8'}
                >{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, flexWrap: 'wrap', gap: 16 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: 22, padding: 0, margin: 0, flexWrap: 'wrap' }}>
          {['Privacy Policy','Terms of Use','Cookie Policy','Grievance Policy'].map(l => (
            <li key={l}><a href="#" style={{ fontSize: 11, color: '#808080', textDecoration: 'none' }}>{l}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: 11, color: '#808080' }}>© 2024 Dreamplug Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
