import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCover, SectionCount, Eyebrow, GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const CAPS = [
  { n:'01', title:'Small Arms & Light Weapons', tag:'FFL Licensed', desc:'FFL-licensed procurement, brokerage, and export of small arms and light weapons to domestic and allied government clients worldwide.', to:'/capabilities/small-arms', src:'/img-small-arms.jpg' },
  { n:'02', title:'Foreign Military Sales', tag:'Export Authorized', desc:'End-to-end management of FMS and DCS transactions including licensing, documentation, logistics, and ministry-level coordination.', to:'/capabilities/fms', src:'/img-container-ship.jpg' },
  { n:'03', title:'Tactical Equipment', tag:'ITAR Compliant', desc:'Complete tactical equipment solutions from personal protective equipment to surveillance infrastructure.', to:'/capabilities/tactical', src:'/img-tactical-soldier.jpg' },
  { n:'04', title:'Lodging & Hospitality', tag:'GSA Schedule', desc:'Government lodging solutions and base support services for military and diplomatic operations worldwide.', to:'/capabilities/lodging', src:'/img-military-tents.jpg' },
  { n:'05', title:'Aviation Services', tag:'Civil & Military', desc:'Military and civilian aviation through Automata Aviation — products, pilot training, ATC services, and aircraft support.', to:'/capabilities/aviation-services', src:'/img-aviation.jpg' },
  { n:'06', title:'Training Services', tag:'Domestic & International', desc:'Specialized training programs for law enforcement, military, and government clients, delivered in-country internationally.', to:'/capabilities/training', src:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75' },
];

export default function Capabilities() {
  useScrollRevealAll();
  return (
    <>
      <section style={{ backgroundColor:'#111111', minHeight:'62vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'11rem 2rem 7rem', textAlign:'center' }}>
        <div>
          <div className="anim-delay-2" style={{
            fontFamily:'"Libre Baskerville", Georgia, serif',
            fontSize:'clamp(0.75rem, 2vw, 1.25rem)',
            fontWeight:400, letterSpacing:'0.5em',
            textTransform:'uppercase', color:'rgba(240,239,237,0.4)',
            marginBottom:'1.25rem', paddingLeft:'0.5em',
          }}>OUR</div>
          <div className="anim-delay-2" style={{
            fontFamily:'"Libre Baskerville", Georgia, serif',
            fontSize:'clamp(1.25rem, 4vw, 3rem)',
            fontWeight:400, letterSpacing:'0.5em',
            textTransform:'uppercase', color:'#f0efed',
            lineHeight:1, paddingLeft:'0.5em',
          }}>CAPABILITIES</div>
          <div className="anim-delay-3" style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'2rem auto 0' }} />
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding:'9rem 2rem', position:'relative' }}>
        <SectionCount current={2} total={3} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>All Capabilities</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'5rem' }}>What Wraith Delivers</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'0.5px solid #e8e8e8' }}>
            {CAPS.map((cap,i) => (
              <Link key={i} to={cap.to} style={{ textDecoration:'none' }}>
                <div className="cap-card reveal" style={{ position:'relative', borderRight:i%3!==2?'0.5px solid #e8e8e8':'none', borderBottom:i<3?'0.5px solid #e8e8e8':'none', overflow:'hidden', transition:'background-color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor='#e8e7e4'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
                >
                  <div style={{ height:240, overflow:'hidden', position:'relative' }}>
                    <img src={cap.src} alt="" loading="lazy"
                      style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                      onMouseEnter={e => e.target.style.transform='scale(1.04)'}
                      onMouseLeave={e => e.target.style.transform='scale(1)'}
                    />
                    <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.52)' }} />
                    <div style={{ position:'absolute', top:'1.25rem', left:'1.5rem' }}>
                      <span className="heading-display" style={{ fontSize:'4rem', fontWeight:300, color:'rgba(255,255,255,0.15)', lineHeight:1 }}>{cap.n}</span>
                    </div>
                    <div style={{ position:'absolute', bottom:'1.25rem', left:'1.5rem' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#f0efed', border:'0.5px solid rgba(240,239,237,0.4)', padding:'0.25rem 0.625rem' }}>{cap.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding:'2.25rem' }}>
                    <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'0.75rem' }}>{cap.title}</h3>
                    <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'#6b6b6b', lineHeight:1.7, marginBottom:'1.25rem' }}>{cap.desc}</p>
                    <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', color:'#0d0d0d', letterSpacing:'0.1em' }}>View Capability</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#111111', padding:'9rem 2rem', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#f0efed', marginBottom:'2.5rem', fontWeight:300 }}>
            Have a requirement? We can help.
          </h2>
          <div className="reveal" style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn-primary">Request Briefing</Link>
            <a href="mailto:contracts@wraithintl.com" className="btn-ghost-dark">contracts@wraithintl.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
