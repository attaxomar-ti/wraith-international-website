import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCover, SectionCount, Eyebrow, GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { useIsMobile } from '../hooks/useIsMobile';

const CAPS = [
  { n:'01', title:'Small Arms & Light Weapons', tag:'FFL Licensed', desc:'FFL-licensed procurement, brokerage, and export of small arms and light weapons to domestic and allied government clients.', to:'/capabilities/small-arms', src:'/img-small-arms.jpg' },
  { n:'02', title:'Foreign Military Sales', tag:'Export Authorized', desc:'End-to-end management of FMS and DCS transactions including licensing, documentation, logistics, and ministry-level coordination.', to:'/capabilities/fms', src:'/img-container-ship.jpg' },
  { n:'03', title:'Tactical Equipment', tag:'ITAR Compliant', desc:'Complete tactical equipment solutions from personal protective equipment to surveillance infrastructure.', to:'/capabilities/tactical', src:'/img-tactical-soldier.jpg' },
  { n:'04', title:'Lodging & Hospitality', tag:'GSA Schedule', desc:'Government lodging solutions and base support services for military and diplomatic operations worldwide.', to:'/capabilities/lodging', src:'/img-military-tents.jpg' },
  { n:'05', title:'Aviation Services', tag:'Civil & Military', desc:'Military and civilian aviation through Automata Aviation — products, pilot training, ATC services, and aircraft support.', to:'/capabilities/aviation-services', src:'/img-aviation.jpg' },
  { n:'06', title:'Training Services', tag:'Domestic & International', desc:'Specialized training programs for law enforcement, military, and government clients, delivered internationally.', to:'/capabilities/training', src:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75' },
];

export default function Capabilities() {
  useScrollRevealAll();
  const m = useIsMobile();

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:'#111111', minHeight: m ? '45vh' : '62vh', display:'flex', alignItems:'center', justifyContent:'center', padding: m ? '6rem 1.5rem 3rem' : '11rem 2rem 7rem', textAlign:'center' }}>
        <div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '0.625rem' : 'clamp(0.75rem,2vw,1.25rem)', fontWeight:400, letterSpacing: m ? '0.12em' : '0.5em', textTransform:'uppercase', color:'rgba(240,239,237,0.4)', marginBottom:'1rem', paddingLeft: m ? '0.12em' : '0.5em' }}>OUR</div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '1.5rem' : 'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing: m ? '0.12em' : '0.5em', textTransform:'uppercase', color:'#f0efed', lineHeight:1, paddingLeft: m ? '0.12em' : '0.5em' }}>CAPABILITIES</div>
          <div style={{ width:40, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin: m ? '1.25rem auto 0' : '2rem auto 0' }} />
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding: m ? '3rem 1.25rem' : '9rem 2rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize: m ? '1.5rem' : 'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom: m ? '2rem' : '5rem' }}>What Wraith Delivers</h2>
          <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', border:'0.5px solid #e8e8e8' }}>
            {CAPS.map((cap,i) => (
              <Link key={i} to={cap.to} style={{ textDecoration:'none' }}>
                <div className="cap-card reveal" style={{ position:'relative', borderRight: m ? 'none' : (i%3!==2?'0.5px solid #e8e8e8':'none'), borderBottom:'0.5px solid #e8e8e8', overflow:'hidden' }}>
                  <div style={{ height: m ? 160 : 240, overflow:'hidden', position:'relative' }}>
                    <img src={cap.src} alt="" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.52)' }} />
                    <div style={{ position:'absolute', bottom:'1rem', left:'1.25rem' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'#f0efed', border:'0.5px solid rgba(240,239,237,0.4)', padding:'0.2rem 0.5rem' }}>{cap.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: m ? '1.25rem' : '2.25rem' }}>
                    <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:700, letterSpacing:'0.04em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'0.5rem' }}>{cap.title}</h3>
                    <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'#6b6b6b', lineHeight:1.65, marginBottom:'1rem' }}>{cap.desc}</p>
                    <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', color:'#0d0d0d', letterSpacing:'0.08em', textTransform:'uppercase' }}>View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#111111', padding: m ? '4rem 1.5rem' : '9rem 2rem', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize: m ? '1.75rem' : 'clamp(2.5rem,5vw,4rem)', color:'#f0efed', marginBottom:'2rem', fontWeight:300 }}>
            Have a requirement? We can help.
          </h2>
          <div className="reveal" style={{ display:'flex', flexDirection: m ? 'column' : 'row', gap:'0.75rem', justifyContent:'center', alignItems:'center' }}>
            <Link to="/contact" className="btn-primary" style={{ width: m ? '100%' : 'auto', justifyContent:'center' }}>Request Briefing</Link>
            <a href="mailto:contracts@wraithintl.com" className="btn-ghost-dark" style={{ width: m ? '100%' : 'auto', justifyContent:'center' }}>contracts@wraithintl.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
