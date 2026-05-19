import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCover, SectionCount, Eyebrow, GoldLine } from '../components/ImageSection';
import ParallaxImage from '../components/ParallaxImage';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const OFFERINGS = [
  { n:'01', title:'Military Aviation Products', desc:'Procurement and delivery of aviation equipment, components, and systems for military clients. Full supply chain management including export compliance, logistics, and in-country delivery.' },
  { n:'02', title:'Pilot Qualification Training', desc:'Initial and advanced pilot training programs delivered to allied air force personnel and civilian operators, structured to meet ICAO and host-nation regulatory requirements.' },
  { n:'03', title:'Aircraft Technician Training', desc:'Maintenance and repair qualification programs covering airframe, powerplant, avionics, and systems-specific instruction aligned to manufacturer and regulatory standards.' },
  { n:'04', title:'Air Traffic Control Services', desc:'ATC service provision for military bases, forward operating locations, and civilian facilities. Staffing, procedures, and equipment integration delivered under contract.' },
  { n:'05', title:'Aircraft Support Equipment', desc:'Ground support equipment, maintenance tooling, and support infrastructure. Sourced to specification and delivered to the operating location.' },
  { n:'06', title:'Aviation English Training', desc:'ICAO-standard aviation English language training for pilots, controllers, and technicians. Delivered in-country and remotely. Aligned to international proficiency requirements.' },
  { n:'07', title:'Aircraft Conversion Services', desc:'Configuration modification and aircraft conversion programs. Civilian-to-military adaptation and mission-specific modifications coordinated with approved modification centers.' },
  { n:'08', title:'Civil Aviation Authority Support', desc:'Consulting and program support for civil aviation authority development, safety management systems, and inspector qualification programs.' },
];

const CLIENTS = [
  'US Air Force','US Army Aviation','Allied Air Forces','Civil Aviation Authorities',
  'Qatar Ministry of Interior Aviation','Jordan Royal Air Force',
  'Ministry of Defense Aviation Directorates','Government Contract Operators',
  'Military Training Establishments','Aviation Authority Inspectors',
];

const CORE_AREAS = [
  {
    n:'01', title:'Aviation Products & Equipment', img:'/img-plane-1.avif',
    desc:['Automata sources, procures, and delivers military and civilian aviation products across the full spectrum of government client requirements — from complete aircraft to individual components, support equipment, and maintenance tooling.','Every procurement is managed with the regulatory precision that defense-category transactions demand: export licensing, end-user documentation, airworthiness certification, and in-country delivery logistics handled under a single contract.'],
  },
  {
    n:'02', title:'Pilot & Technician Training', img:'/img-plane-2.avif',
    desc:['Structured qualification and advanced training programs for pilots, aircraft technicians, and maintenance personnel. Delivered by instructors with direct operational experience in the relevant aircraft and operating environment.','Automata builds training programs designed for transfer — instructing instructors, developing curricula, and establishing institutional frameworks that allow client organizations to sustain aviation capability beyond the contract period.'],
  },
  {
    n:'03', title:'Air Traffic Control Services', img:'/img-plane-3.avif',
    desc:['ATC service provision for military bases, forward operating locations, and civilian aviation facilities. Automata provides qualified controllers, establishes procedures, integrates equipment, and manages the complete ATC function under contract.','Our ATC capability extends to civil aviation authority development — building the regulatory frameworks and safety management systems required for partner-nation aviation authorities to meet ICAO standards.'],
  },
];

export default function Aviation() {
  useScrollRevealAll();
  return (
    <>
      <section style={{ backgroundColor:'#111111', minHeight:'62vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'11rem 2rem 6rem', textAlign:'center', flexDirection:'column' }}>
        <div className="anim-delay-2">
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(0.7rem,1.5vw,1rem)', fontWeight:400, letterSpacing:'0.5em', textTransform:'uppercase', color:'rgba(240,239,237,0.35)', marginBottom:'1rem', paddingLeft:'0.5em' }}>
            AUTOMATA
          </div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing:'0.5em', textTransform:'uppercase', color:'#f0efed', lineHeight:1, paddingLeft:'0.5em' }}>
            AVIATION
          </div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(0.6rem,1vw,0.75rem)', fontWeight:400, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(240,239,237,0.3)', marginTop:'1rem' }}>
            A WRAITH INTERNATIONAL COMPANY
          </div>
        </div>
        <div className="anim-delay-3" style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'2.5rem auto 2.5rem' }} />
        <div className="anim-delay-4" style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
          <Link to="/contact" className="btn-primary">Request Briefing</Link>
          <a href="mailto:info@wraithintl.com" className="btn-ghost-dark">info@wraithintl.com</a>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#111111', padding:'7rem 2rem', position:'relative' }}>
        <SectionCount current={2} total={6} />
        <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center' }}>
          <div style={{ width:40, height:0.5, backgroundColor:'#0d0d0d', margin:'0 auto 2.5rem' }} />
          <p className="heading-display reveal" style={{ fontSize:'clamp(1.75rem,3.5vw,2.75rem)', color:'#f0efed', fontWeight:400, fontStyle:'italic', lineHeight:1.45, marginBottom:'2.5rem' }}>
            "Automata Aviation delivers military and civilian aviation solutions to government clients and allied nations worldwide. Where the mission requires air — we are already there."
          </p>
          <div style={{ width:40, height:0.5, backgroundColor:'#0d0d0d', margin:'0 auto' }} />
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding:'9rem 2rem', position:'relative' }}>
        <SectionCount current={3} total={6} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Core Service Areas</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'5rem' }}>What We Deliver</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'0.5px solid #e8e8e8' }}>
            {CORE_AREAS.map((area, i) => (
              <div key={i} className="reveal" style={{ borderRight: i<2 ? '0.5px solid #e8e8e8':'none' }}>
                <div style={{ height:260, overflow:'hidden', position:'relative' }}>
                  <img src={`https://picsum.photos/seed/${area.img}/800/500`} alt="" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.45)' }} />
                  <div style={{ position:'absolute', bottom:'1.25rem', left:'1.5rem' }}>
                    <span className="heading-display" style={{ fontSize:'3rem', fontWeight:300, color:'rgba(255,255,255,0.25)', lineHeight:1 }}>{area.n}</span>
                  </div>
                </div>
                <div style={{ padding:'2.5rem' }}>
                  <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'1.25rem' }}>{area.title}</h3>
                  {area.desc.map((p,j) => <p key={j} style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'#6b6b6b', lineHeight:1.75, marginBottom:'1rem' }}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#e8e7e4', padding:'8rem 2rem', position:'relative' }}>
        <SectionCount current={4} total={6} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Full Service Offering</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#1a1a1a', marginBottom:'4rem' }}>Aviation Services</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', border:'0.5px solid #e8e8e8' }}>
            {OFFERINGS.map((o, i) => (
              <div key={i} className="cap-card reveal" style={{ position:'relative', padding:'2.5rem', borderRight:'0.5px solid #e8e8e8', borderBottom:'0.5px solid #e8e8e8', backgroundColor:'#f0efed', transition:'background-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor='#f5f5f5'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor='#f0efed'}
              >
                <div style={{ fontFamily:'"Cormorant Garamond"', fontSize:'2.5rem', fontWeight:300, color:'rgba(0,0,0,0.07)', lineHeight:1, marginBottom:'1rem' }}>{o.n}</div>
                <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'0.75rem' }}>{o.title}</h3>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'#6b6b6b', lineHeight:1.7 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#111111', padding:'7rem 2rem', position:'relative' }}>
        <SectionCount current={5} total={6} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#f0efed', marginBottom:'4rem' }}>Aviation Clients</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', border:'0.5px solid rgba(255,255,255,0.08)' }}>
            {CLIENTS.map((c,i) => (
              <div key={i} className="reveal" style={{ padding:'1.75rem 2rem', borderRight:'0.5px solid rgba(255,255,255,0.08)', borderBottom:'0.5px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', gap:'1rem' }}>
                <span style={{ width:3, height:3, borderRadius:'50%', backgroundColor:'#0d0d0d', flexShrink:0 }} />
                <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'rgba(255,255,255,0.5)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding:'7rem 2rem', position:'relative' }}>
        <SectionCount current={6} total={6} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8rem', alignItems:'center' }}>
          <div>
            <Eyebrow>Part of Wraith International</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#1a1a1a', marginBottom:'2rem' }}>Backed by the Wraith Platform</h2>
            <p className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontSize:'1rem', color:'#4a4a4a', lineHeight:1.85, marginBottom:'1.5rem' }}>
              Automata Aviation is not a standalone vendor. It is a division of Wraith International LLC — with access to Wraith's government relationships, regulatory authorizations, procurement infrastructure, and contracting track record spanning fifteen allied nations.
            </p>
            <p className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontSize:'1rem', color:'#4a4a4a', lineHeight:1.85, marginBottom:'2rem' }}>
              Aviation requirements can be bundled with equipment, training, or logistics needs under a single Wraith contract — reducing administrative burden and eliminating coordination risk across complex multi-element programs.
            </p>
            <div className="reveal" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Link to="/contact" className="btn-primary">Request Briefing</Link>
              <Link to="/about" className="btn-ghost-light">About Wraith</Link>
            </div>
          </div>
          <div className="reveal" style={{ position:'relative', overflow:'hidden', height:460 }}>
            <img src="/img-aviation.jpg" alt="" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
            <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.2)' }} />
          </div>
        </div>
      </section>
    </>
  );
}
