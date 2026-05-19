import React, { useRef, useState, useEffect } from 'react';

const isMobile = () => window.innerWidth <= 768;

export default function ParallaxImage({
  src, overlay = 0.75, speed = 0.35, children, style = {}, className = '',
}) {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
    const onResize = () => setMobile(isMobile());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (mobile) return; // no parallax on mobile — saves CPU

    let raf;
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerEl = rect.top + rect.height / 2;
      const centerVp = window.innerHeight / 2;
      setOffset((centerEl - centerVp) * speed);
    };

    const onScroll = () => { raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, mobile]);

  const imgSrc = src.startsWith('/') ? src : `${src}?auto=format&fit=crop&w=1600&q=75`;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <div style={{
        position: 'absolute',
        top: mobile ? 0 : '-18%',
        bottom: mobile ? 0 : '-18%',
        left: 0, right: 0,
        transform: mobile ? 'none' : `translateY(${offset}px)`,
        willChange: mobile ? 'auto' : 'transform',
      }}>
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease',
            display: 'block',
          }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(8,9,10,${overlay})` }} />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
