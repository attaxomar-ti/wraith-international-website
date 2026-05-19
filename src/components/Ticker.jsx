import React from 'react';

const ITEMS = [
  'SAM.gov Registered',
  'FFL Licensed',
  'Export Authorized',
  'ITAR Compliant',
  'Small Business Certified',
  'CAGE Code Active',
  'Prime Contractor',
  'NAICS 332994',
  'NAICS 423910',
  'NAICS 561612',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ backgroundColor: '#111111', borderTop: '0.5px solid rgba(255,255,255,0.07)', borderBottom: '0.5px solid rgba(255,255,255,0.07)', overflow: 'hidden', padding: '1rem 0' }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', gap: '2.5rem', paddingRight: '2.5rem' }}>
            <span style={{ fontFamily: '"Libre Baskerville", Georgia, serif', fontSize: '0.625rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,239,237,0.45)' }}>
              {item}
            </span>
            <span style={{ width: 2, height: 2, borderRadius: '50%', backgroundColor: 'rgba(240,239,237,0.2)', display: 'inline-block', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
