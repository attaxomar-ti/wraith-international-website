import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, bottom: 0, width: 2,
      zIndex: 90, backgroundColor: 'rgba(0,0,0,0.06)',
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '100%', height: `${pct}%`,
        backgroundColor: '#0d0d0d',
        transition: 'height 0.08s linear',
      }} />
    </div>
  );
}
