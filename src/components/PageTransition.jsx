import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BRANDED = ['/capabilities','/aviation','/news','/about','/contact'];

export default function PageTransition() {
  const location = useLocation();
  const [phase, setPhase] = useState('idle');
  const isFirst = useRef(true);
  const timers = useRef([]);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }

    const branded = BRANDED.some(p => location.pathname === p || location.pathname.startsWith(p + '/'));
    clear();

    if (branded) {
      setPhase('cover');
      timers.current.push(setTimeout(() => setPhase('logo'),    100));
      timers.current.push(setTimeout(() => setPhase('exit'),    950));
      timers.current.push(setTimeout(() => setPhase('idle'),   1700));
    } else {
      setPhase('cover');
      timers.current.push(setTimeout(() => setPhase('exit'),   150));
      timers.current.push(setTimeout(() => setPhase('idle'),   500));
    }

    return clear;
  }, [location.pathname]);

  if (phase === 'idle') return null;

  const branded = BRANDED.some(p => location.pathname === p || location.pathname.startsWith(p + '/'));

  if (!branded) {
    return (
      <div style={{
        position:'fixed', inset:0, zIndex:500,
        backgroundColor:'#111111',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.35s ease' : 'opacity 0.12s ease',
        pointerEvents:'all',
      }} />
    );
  }

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:500,
      backgroundColor:'#ffffff',
      display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',
      pointerEvents:'all',
      transform: phase === 'exit' ? 'translateY(-100%)' : 'translateY(0)',
      transition: phase === 'exit' ? 'transform 0.65s cubic-bezier(0.76,0,0.24,1)' : 'none',
    }}>
      <div style={{
        opacity: phase === 'logo' || phase === 'exit' ? 1 : 0,
        transform: phase === 'logo' || phase === 'exit' ? 'translateY(0)' : 'translateY(10px)',
        transition:'opacity 0.4s ease, transform 0.4s ease',
        textAlign:'center',
      }}>
        <img src="/wraith-logo.jpg" alt="Wraith International"
          style={{ height:'clamp(44px,6vw,64px)', width:'auto', display:'block', margin:'0 auto' }} />
      </div>
      <div style={{
        marginTop:'1.5rem', height:'0.5px', backgroundColor:'#0d0d0d',
        width: phase === 'logo' || phase === 'exit' ? 56 : 0,
        transition: phase === 'logo' || phase === 'exit' ? 'width 0.5s ease 0.1s' : 'none',
      }} />
    </div>
  );
}
