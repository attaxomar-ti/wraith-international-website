import React from 'react';

// Full-bleed image section with dark overlay
export function ImageCover({ seed, overlay = 0.72, children, style = {}, className = '' }) {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <img
        src={`https://picsum.photos/seed/${seed}/1920/1080`}
        alt=""
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(17,17,17,${overlay})` }} />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}

// Side image panel
export function ImagePanel({ seed, overlay = 0.4 }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', minHeight: 480 }}>
      <img
        src={`https://picsum.photos/seed/${seed}/900/700`}
        alt=""
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(17,17,17,${overlay})` }} />
    </div>
  );
}

// Section count — subtle typography in corner
export function SectionCount({ current, total, light = true }) {
  return (
    <div style={{
      position: 'absolute', top: '2rem', right: '2rem',
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: '0.75rem', fontWeight: 400,
      letterSpacing: '0.12em',
      color: light ? 'rgba(240,239,237,0.2)' : 'rgba(13,13,13,0.18)',
      userSelect: 'none',
      fontStyle: 'italic',
    }}>
      {String(current).padStart(2,'0')} / {String(total).padStart(2,'0')}
    </div>
  );
}

// Thin separator line — now charcoal not gold
export function GoldLine({ opacity = 0.2, vertical = false }) {
  return (
    <div style={{
      width: vertical ? '0.5px' : '100%',
      height: vertical ? '100%' : '0.5px',
      backgroundColor: `rgba(13,13,13,${opacity})`,
      flexShrink: 0,
    }} />
  );
}

// Small diamond separator
export function Diamond({ color }) {
  const c = color || 'rgba(13,13,13,0.3)';
  return (
    <span style={{
      display: 'inline-block',
      width: 3, height: 3,
      backgroundColor: c,
      transform: 'rotate(45deg)',
      flexShrink: 0,
    }} />
  );
}

// Eyebrow label — now uses charcoal, no gold
export function Eyebrow({ children, light = false }) {
  const col = light ? 'rgba(240,239,237,0.45)' : 'rgba(13,13,13,0.5)';
  const dotCol = light ? 'rgba(240,239,237,0.25)' : 'rgba(13,13,13,0.2)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
      <Diamond color={dotCol} />
      <span style={{
        fontFamily: '"Libre Baskerville", Georgia, serif',
        fontSize: '0.625rem', fontWeight: 400,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: col,
      }}>{children}</span>
      <Diamond color={dotCol} />
    </div>
  );
}
