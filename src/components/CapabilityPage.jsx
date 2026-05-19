import { useIsMobile } from '../hooks/useIsMobile';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageCover, SectionCount, Eyebrow, GoldLine } from './ImageSection';
import ParallaxImage from './ParallaxImage';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function CapabilityPage({
  tag, title, heroSeed, heroSrc, heroOverlay = 0.78, noPhoto = false,
  intro, body, services, whoWeServe,
  advantageTitle = 'The Wraith Advantage', advantage,
  relatedLinks = [], extraCtas = [],
}) {
  useScrollRevealAll();
  const m = useIsMobile();

  const HeroWrapper = ({ children }) => {
    if (noPhoto) {
      return (
        <section style={{ backgroundColor:'#111111', minHeight:'58vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
          {children}
        </section>
      );
    }
    return heroSrc
      ? <ParallaxImage src={heroSrc} overlay={heroOverlay} speed={0.25} style={{ minHeight:'85vh', display:'flex', alignItems:'flex-end' }}>{children}</ParallaxImage>
      : <ImageCover seed={heroSeed} overlay={heroOverlay} style={{ minHeight:'85vh', display:'flex', alignItems:'flex-end' }}>{children}</ImageCover>;
  };

  return (
    <>
      {/* Hero */}
      <HeroWrapper>
        <SectionCount current={1} total={5} />
        <div style={{ position:'relative', zIndex:4, padding: m ? '6rem 1.5rem 3rem' : '11rem 2rem 6rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center' }}>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '0.5625rem' : 'clamp(0.625rem,1.2vw,0.875rem)', fontWeight:400, letterSpacing: m ? '0.1em' : '0.4em', textTransform:'uppercase', color:'rgba(240,239,237,0.35)', marginBottom:'0.875rem', paddingLeft:'0.4em' }}>
            {tag}
          </div>
          <h1 style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '1.375rem' : 'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing: m ? '0.1em' : '0.45em', textTransform:'uppercase', color:'#f0efed', lineHeight:1.15, paddingLeft: m ? '0.1em' : '0.45em', maxWidth:900, textAlign:'center', marginBottom:'2rem' }}>
            {title}
          </h1>
          <div style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', marginBottom:'2rem' }} />
          <p style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.9375rem', fontWeight:400, fontStyle:'italic', color:'rgba(240,239,237,0.45)', lineHeight:1.75, maxWidth:560, textAlign:'center' }}>
            {intro}
          </p>
        </div>
      </HeroWrapper>

      <GoldLine />

      {/* Body copy */}
      <section style={{ backgroundColor: '#f0efed', padding: m ? '3rem 1.25rem' : '8rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.5fr', gap: m ? '2rem' : '8rem', alignItems: 'start' }}>
          <div>
            <SectionCount current={2} total={5} light={false} style={{ position: 'static', display: 'block', textAlign: 'right', marginBottom: '2rem' }} />
            <Eyebrow light={false}>What We Do</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '2rem' }}>
              Our Approach
            </h2>
            <div style={{ width: 40, height: 1, backgroundColor: '#0d0d0d', marginBottom: '2.5rem' }} />
            <div className="reveal">
              <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: '1.25rem' }}>Services Include</p>
              {services.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.75rem 0', borderBottom: '0.5px solid #f0f0f0' }}>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#0d0d0d', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.875rem', color: '#6b6b6b', lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {body.map((p, i) => (
              <p key={i} className="reveal" style={{ fontFamily: '"Libre Baskerville"', fontSize: '1.0625rem', color: '#3a3a3a', lineHeight: 1.85, marginBottom: '1.875rem' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* Who We Serve */}
      <section style={{ backgroundColor: '#111111', padding: m ? '3rem 1.25rem' : '7rem 2rem', position: 'relative' }}>
        <SectionCount current={3} total={5} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0efed', marginBottom: '4rem' }}>Clients & Agencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0', border: '0.5px solid rgba(255,255,255,0.08)' }}>
            {whoWeServe.map((c, i) => (
              <div key={i} className="reveal" style={{ padding: '1.75rem 2rem', borderRight: '0.5px solid rgba(255,255,255,0.08)', borderBottom: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#0d0d0d', flexShrink: 0 }} />
                <span style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* Advantage */}
      <section style={{ backgroundColor: '#f0efed', padding: m ? '3rem 1.25rem' : '7rem 2rem', position: 'relative' }}>
        <SectionCount current={4} total={5} light={false} />
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? '2rem' : '8rem', alignItems: 'center' }}>
          <div>
            <Eyebrow>Our Edge</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a1a1a' }}>{advantageTitle}</h2>
          </div>
          <div>
            {advantage.map((p, i) => (
              <p key={i} className="reveal" style={{ fontFamily: '"Libre Baskerville"', fontSize: '1rem', color: '#4a4a4a', lineHeight: 1.85, marginBottom: '1.5rem' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* CTA */}
      <section style={{ backgroundColor: '#111111', padding: m ? '3rem 1.25rem' : '8rem 2rem', textAlign: 'center', position: 'relative' }}>
        <SectionCount current={5} total={5} />
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0efed', marginBottom: '2.5rem', fontWeight: 300 }}>
            Have a requirement? We can help.
          </h2>
          <div className="reveal" style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: '0.75rem', justifyContent: 'center', alignItems: 'center', marginBottom: (relatedLinks.length || extraCtas.length) ? '3rem' : 0 }}>
            <Link to="/contact" className="btn-primary">Request Briefing</Link>
            {extraCtas.map((cta, i) => (
              <a key={i} href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noopener noreferrer' : undefined} className="btn-ghost-dark">{cta.label}</a>
            ))}
            {!extraCtas.length && <a href="mailto:contracts@wraithintl.com" className="btn-ghost-dark">contracts@wraithintl.com</a>}
          </div>
          {relatedLinks.length > 0 && (
            <div className="reveal" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em', textTransform: 'uppercase', width: '100%', marginBottom: '1rem' }}>Related Capabilities</p>
              {relatedLinks.map((l, i) => (
                <Link key={i} to={l.to} style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#f0efed'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                >{l.label}</Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
