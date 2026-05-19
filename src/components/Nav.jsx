import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Aviation',     to: '/aviation' },
  { label: 'News',         to: '/news' },
  { label: 'About',        to: '/about' },
  { label: 'Contact',      to: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  // Always white — logo always visible
  const navBg = '#ffffff';
  const navBorder = '0.5px solid #e8e8e8';
  const textColor = '#1a1a1a';
  const logoColor = '#1a1a1a';

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: navBg,
          borderBottom: navBorder,
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/wraith-logo.jpg"
              alt="Wraith International"
              style={{
                height: 36,
                width: 'auto',
                display: 'block',
                filter: 'none',
                opacity: 1,
              }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link-hover"
                  style={{
                    fontFamily: '"Libre Baskerville", sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                    color: isActive ? '#0d0d0d' : textColor,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.75rem' }}>
              Request Briefing
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            style={{ background: 'none', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
            className="flex md:hidden"
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 24, height: 1, backgroundColor: textColor, transition: 'background-color 0.35s ease, transform 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 1, backgroundColor: textColor, transition: 'opacity 0.2s ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 1, backgroundColor: textColor, transition: 'background-color 0.35s ease, transform 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%',
          backgroundColor: '#111111', zIndex: 99,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem',
        }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <img src="/wraith-logo.jpg" alt="Wraith International" style={{ height: 32, width: 'auto', filter: 'invert(1) brightness(2)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '3rem', fontWeight: 400, color: '#f0efed', textDecoration: 'none', lineHeight: 1, transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#0d0d0d'}
              onMouseLeave={e => e.target.style.color = '#f0efed'}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Link to="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Request Briefing
          </Link>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
          <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)' }}>
            info@wraithintl.com — +1 714 448 5000
          </p>
        </div>
      </div>
    </>
  );
}
