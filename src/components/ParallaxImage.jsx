import React, { useRef, useState, useEffect } from 'react';

// Full-bleed section with real parallax + fade-in image load
export default function ParallaxImage({
  src, overlay = 0.75, speed = 0.35, children, style = {}, className = '',
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
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
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {/* Parallax image */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
        // Extend beyond container so parallax doesn't reveal gaps
        top: '-18%', bottom: '-18%',
      }}>
        <img
          ref={imgRef}
          src={src.startsWith('/') ? src : `${src}?auto=format&fit=crop&w=1920&q=80`}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.2s ease',
            display: 'block',
          }}
        />
      </div>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: `rgba(8,9,10,${overlay})`,
      }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
