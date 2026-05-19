import React from 'react';
import { GoldLine } from './ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function LegalPage({ title, subtitle, lastUpdated, sections }) {
  useScrollRevealAll();

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:'#111111', minHeight:'42vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding:'10rem 2rem 5rem', textAlign:'center' }}>
        <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(0.625rem,1.2vw,0.875rem)', fontWeight:400, letterSpacing:'0.45em', textTransform:'uppercase', color:'rgba(240,239,237,0.3)', marginBottom:'1rem', paddingLeft:'0.45em' }}>
          WRAITH INTERNATIONAL LLC
        </div>
        <h1 style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(1.25rem,3.5vw,2.5rem)', fontWeight:400, letterSpacing:'0.45em', textTransform:'uppercase', color:'#f0efed', lineHeight:1.15, paddingLeft:'0.45em', textAlign:'center', marginBottom:'1.5rem' }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.875rem', fontStyle:'italic', color:'rgba(240,239,237,0.35)', letterSpacing:'0.06em' }}>
            {subtitle}
          </p>
        )}
        <div style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'1.75rem auto 0' }} />
      </section>

      <GoldLine />

      {/* Content */}
      <section style={{ backgroundColor:'#f0efed', padding:'7rem 2rem 9rem' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>

          {lastUpdated && (
            <p style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.8125rem', color:'#aaaaaa', fontStyle:'italic', marginBottom:'4rem', paddingBottom:'2rem', borderBottom:'0.5px solid #d5d3cf' }}>
              Last updated: {lastUpdated}
            </p>
          )}

          {sections.map((section, i) => (
            <div key={i} className="reveal" style={{ marginBottom:'3.5rem' }}>
              {section.heading && (
                <h2 style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(1rem,2vw,1.375rem)', fontWeight:700, color:'#0d0d0d', marginBottom:'1.25rem', letterSpacing:'0.01em', lineHeight:1.3 }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs && section.paragraphs.map((p, j) => (
                <p key={j} style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.9375rem', color:'#2a2a2a', lineHeight:1.9, marginBottom:'1.25rem' }}>
                  {p}
                </p>
              ))}
              {section.list && (
                <ul style={{ margin:'1rem 0 1.25rem 1.5rem' }}>
                  {section.list.map((item, k) => (
                    <li key={k} style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.9375rem', color:'#2a2a2a', lineHeight:1.9, marginBottom:'0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <div style={{ marginTop:'1.5rem', padding:'1.75rem 2rem', border:'0.5px solid #d5d3cf', backgroundColor:'#ffffff' }}>
                  {section.contact.map((line, k) => (
                    <p key={k} style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.9375rem', color:'#2a2a2a', lineHeight:1.9 }}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
