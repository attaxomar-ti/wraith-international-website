import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

const NAV_LINKS = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Aviation',     to: '/aviation' },
  { label: 'News',         to: '/news' },
  { label: 'About',        to: '/about' },
  { label: 'Contact',      to: '/contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '0.5px solid #e8e8e8',
        height: isMobile ? 56 : 72,
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/wraith-logo.jpg"
              alt="Wraith International"
              style={{ height: isMobile ? 26 : 34, width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              {NAV_LINKS.map(link => {
                const isActive = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="nav-link-hover"
                    style={{
                      fontFamily: '"Libre Baskerville", Georgia, serif',
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      color: isActive ? '#0d0d0d' : '#6b6b6b',
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
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              style={{ background: 'none', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer' }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: 22, height: 1, backgroundColor: '#0d0d0d', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1, backgroundColor: '#0d0d0d', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s ease' }} />
              <span style={{ display: 'block', width: 22, height: 1, backgroundColor: '#0d0d0d', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%',
          backgroundColor: '#111111', zIndex: 99,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '2rem 1.5rem',
        }}
      >
        <div style={{ marginBottom: '2.5rem' }}>
          <img src="/wraith-logo.jpg" alt="Wraith International" style={{ height: 28, width: 'auto', filter: 'invert(1) brightness(2)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '2.25rem', fontWeight: 400,
                color: '#f0efed', textDecoration: 'none', lineHeight: 1,
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
            Request Briefing
          </Link>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            info@wraithintl.com · +1 714 448 5000
          </p>
        </div>
      </div>
    </>
  );
}
