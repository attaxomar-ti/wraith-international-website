import React, { useState, useEffect } from 'react';

export default function Splash({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // 0 = hidden/start, 1 = logo, 2 = line, 3 = tagline, 4 = exiting, 5 = done

  useEffect(() => {
    const already = sessionStorage.getItem('wraith_splash_seen');
    if (already) {
      setPhase(5);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1300);
    const t4 = setTimeout(() => setPhase(4), 3000);
    const t5 = setTimeout(() => {
      setPhase(5);
      sessionStorage.setItem('wraith_splash_seen', '1');
      onComplete();
    }, 3700);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  if (phase === 5) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: '#ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        transform: phase === 4 ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase === 4 ? 'transform 0.7s cubic-bezier(0.76,0,0.24,1)' : 'none',
      }}
    >
      {/* Logo */}
      <div
        style={{
          textAlign: 'center',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <img
          src="/wraith-logo.jpg"
          alt="Wraith International"
          style={{
            height: 'clamp(52px, 8vw, 80px)',
            width: 'auto',
            display: 'block',
            margin: '0 auto',
            filter: 'none',
          }}
        />
      </div>

      {/* Gold line */}
      <div
        style={{
          height: '0.5px',
          backgroundColor: '#0d0d0d',
          marginTop: '2rem',
          width: phase >= 2 ? '80px' : '0px',
          transition: phase >= 2 ? 'width 0.6s cubic-bezier(0.4,0,0.2,1)' : 'none',
        }}
      />

      {/* Tagline */}
      <div
        style={{
          marginTop: '1.5rem',
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <span
          style={{
            fontFamily: '"Libre Baskerville", sans-serif',
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'rgba(13,13,13,0.4)',
          }}
        >
          EVERY REQUIREMENT. EVERY TIME.
        </span>
      </div>
    </div>
  );
}
