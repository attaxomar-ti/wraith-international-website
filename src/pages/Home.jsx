import React from 'react';
import { Link } from 'react-router-dom';
import { SectionCount, Eyebrow, GoldLine, Diamond } from '../components/ImageSection';
import ParallaxImage from '../components/ParallaxImage';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { useIsMobile } from '../hooks/useIsMobile';

const IMGS = {
  hero:     'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  smallArms:'/img-small-arms.jpg',
  fms:      '/img-container-ship.jpg',
  tactical: '/img-tactical-soldier.jpg',
  lodging:  '/img-military-tents.jpg',
  aviation: '/img-fighter-jets.webp',
  training: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
};

const CAPABILITIES = [
  { n:'01', title:'Small Arms & Light Weapons', desc:'FFL-licensed procurement, brokerage, and export of small arms and light weapons to domestic and allied government clients worldwide.', tag:'FFL Licensed', to:'/capabilities/small-arms', img: IMGS.smallArms },
  { n:'02', title:'Foreign Military Sales', desc:'End-to-end management of FMS and DCS transactions including licensing, documentation, logistics, and ministry-level coordination.', tag:'Export Authorized', to:'/capabilities/fms', img: IMGS.fms },
  { n:'03', title:'Tactical Equipment', desc:'Complete tactical equipment solutions from personal protective equipment to surveillance infrastructure for law enforcement and military clients.', tag:'ITAR Compliant', to:'/capabilities/tactical', img: IMGS.tactical },
  { n:'04', title:'Lodging & Hospitality', desc:'Government lodging solutions and base support services for military and diplomatic operations worldwide.', tag:'GSA Schedule', to:'/capabilities/lodging', img: IMGS.lodging },
  { n:'05', title:'Aviation Services', desc:'Military and civilian aviation products, pilot training, ATC services, and aircraft support through Automata Aviation — a Wraith company.', tag:'Civil & Military', to:'/capabilities/aviation-services', img: IMGS.aviation },
  { n:'06', title:'Training Services', desc:'Specialized training programs for law enforcement, military, and government clients, delivered in-country internationally.', tag:'Domestic & International', to:'/capabilities/training', img: IMGS.training },
];

const CLIENTS = [
  'Department of Defense','US Army','US Marine Corps','Department of Homeland Security',
  'Federal Bureau of Investigation','National Security Agency','Department of State','NASA',
  'Qatar Ministry of Interior','Iraq Security Forces','Jordan Armed Forces','Multi-National Force Iraq',
];

const MARKETS = [
  { name:'US Federal Government', desc:'DoD · DHS · FBI · NSA · State Department · Army · Marines · SOCOM · DLA' },
  { name:'Middle East', desc:'Qatar · Iraq · Jordan · Saudi Arabia · UAE · Kuwait · Bahrain · Oman' },
  { name:'North Africa', desc:'Egypt · Morocco · Tunisia · Algeria · Libya' },
  { name:'Global Allied Nations', desc:'All US partner nations via FMS and DCS' },
];

const WHY = [
  { n:'01', title:'FFL & Export Licensed', body:'Wraith is among the few small businesses legally authorized to procure, broker, and export small arms and light weapons to allied governments. Most competitors cannot operate in this category. Our licenses open doors that remain permanently closed to the majority of the market.' },
  { n:'02', title:'Middle East Access', body:'Direct, established relationships with ministries of defense and interior across Qatar, Iraq, Jordan, Egypt, and the broader MENA region — built over decades of in-theater work. We do not build relationships. We maintain them.' },
  { n:'03', title:'Sole Source Track Record', body:'The majority of our contracts are awarded sole source — a direct result of trusted relationships, unique capability, and zero-failure delivery. Sole source awards reflect the confidence clients place in a single, proven partner.' },
  { n:'04', title:'Full Spectrum Coverage', body:'From weapons to lodging to aviation, Wraith operates across every procurement category as a single reliable source. One call covers everything. One relationship, one point of accountability, zero gaps.' },
];

const STATS = [
  { value:'200+', label:'Contracts Fulfilled' },
  { value:'15+',  label:'Allied Nations Served' },
  { value:'30+',  label:'Years Experience' },
  { value:'0',    label:'Delivery Failures' },
];

const GLOBAL = [
  { region:'United States', ops:'Prime contractor across DLA, DHS, DoD, FBI, NSA, and State Department. SAM.gov registered. FFL and export authorized.' },
  { region:'Qatar', ops:'Established prime contractor to Qatar Ministry of Interior and Ministry of Defense. Multiple fulfilled programs including weapons systems, surveillance, and facility construction.' },
  { region:'Iraq', ops:'Extensive program history including Multi-National Force Iraq support, ISF equipment, police academy development, and force protection infrastructure.' },
  { region:'Jordan', ops:'Jordan Armed Forces and Ministry of Interior programs. Active relationship with key procurement decision makers.' },
  { region:'Gulf Region', ops:'Active engagement across Saudi Arabia, UAE, Kuwait, Bahrain, and Oman. FMS coordination and DCS transaction management.' },
  { region:'North Africa', ops:'Egypt, Morocco, Tunisia, Algeria — relationship development and program positioning underway.' },
  { region:'Global FMS Network', ops:'Active pursuit across all US partner nations where FMF and FMS programs are active.' },
];

export default function Home() {
  useScrollRevealAll();
  const m = useIsMobile();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <ParallaxImage
        src={IMGS.hero}
        overlay={0.72}
        speed={0.25}
        style={{ minHeight: m ? '100svh' : '100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}
      >
        {!m && <SectionCount current={1} total={9} />}

        <div style={{ textAlign:'center', padding: m ? '6rem 1.5rem 3rem' : '10rem 2rem 6rem', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flex:1 }}>

          {/* WRAITH */}
          <div className="anim-delay-2" style={{
            fontFamily:'"Libre Baskerville", Georgia, serif',
            fontSize: m ? '2.25rem' : 'clamp(1.5rem,5vw,4rem)',
            fontWeight:400,
            letterSpacing: m ? '0.18em' : '0.55em',
            textTransform:'uppercase',
            color:'#f0efed',
            lineHeight:1,
            textAlign:'center',
            marginBottom: m ? '0.375rem' : '0.5rem',
            paddingLeft: m ? '0.18em' : '0.55em',
          }}>WRAITH</div>

          {/* INTERNATIONAL */}
          <div className="anim-delay-2" style={{
            fontFamily:'"Libre Baskerville", Georgia, serif',
            fontSize: m ? '0.9rem' : 'clamp(0.7rem,2vw,1.625rem)',
            fontWeight:400,
            letterSpacing: m ? '0.18em' : '0.55em',
            textTransform:'uppercase',
            color:'rgba(240,239,237,0.7)',
            lineHeight:1,
            textAlign:'center',
            marginBottom: m ? '1.75rem' : '3rem',
            paddingLeft: m ? '0.18em' : '0.55em',
          }}>INTERNATIONAL</div>

          <div className="anim-delay-3" style={{ width:40, height:'0.5px', backgroundColor:'rgba(240,239,237,0.3)', marginBottom: m ? '1.5rem' : '2rem' }} />

          <p className="anim-delay-3" style={{
            fontFamily:'"Cormorant Garamond", Georgia, serif',
            fontSize: m ? '0.9375rem' : 'clamp(0.875rem,1.5vw,1.125rem)',
            fontWeight:300, fontStyle:'italic',
            color:'rgba(240,239,237,0.5)',
            letterSpacing:'0.06em',
            marginBottom: m ? '2rem' : '3.5rem',
            padding: m ? '0 0.5rem' : 0,
            textAlign:'center',
          }}>Full Spectrum International Government Contracting</p>

          <div className="anim-delay-4" style={{ display:'flex', flexDirection: m ? 'column' : 'row', gap:'0.75rem', alignItems:'center', width: m ? '100%' : 'auto', padding: m ? '0 1rem' : 0 }}>
            <Link to="/capabilities" className="btn-primary" style={{ width: m ? '100%' : 'auto', justifyContent:'center' }}>Our Capabilities</Link>
            <Link to="/contact" className="btn-ghost-dark" style={{ width: m ? '100%' : 'auto', justifyContent:'center' }}>Request Briefing</Link>
          </div>
        </div>
      </ParallaxImage>

      <GoldLine />

      {/* ── CAPABILITIES GRID ────────────────────────── */}
      <section style={{ backgroundColor:'#f0efed', padding:'var(--sp,9rem) var(--sh,2rem)', position:'relative' }}>
        <SectionCount current={2} total={9} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'5rem', flexWrap:'wrap', gap:'2rem' }}>
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a' }}>Core Capabilities</h2>
            </div>
            <Link to="/capabilities" className="btn-ghost-light reveal">All Capabilities →</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', border:'0.5px solid #e8e8e8' }}>
            {CAPABILITIES.map((cap,i) => (
              <Link key={i} to={cap.to} style={{ textDecoration:'none' }}>
                <div
                  className="cap-card card-lift reveal"
                  style={{
                    position:'relative',
                    borderRight: m ? 'none' : (i%3!==2?'0.5px solid #e8e8e8':'none'),
                    borderBottom:'0.5px solid #e8e8e8',
                    overflow:'hidden', backgroundColor:'#f0efed',
                    transition:'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {/* Image thumbnail with parallax zoom */}
                  <div style={{ height:220, overflow:'hidden', position:'relative' }}>
                    <img
                      src={cap.img.startsWith('/') ? cap.img : `${cap.img}?auto=format&fit=crop&w=700&q=75`} alt="" loading="lazy"
                      style={{ width:'100%', height:'115%', objectFit:'cover', objectPosition:'center', transition:'transform 0.7s cubic-bezier(0.4,0,0.2,1)', display:'block' }}
                      onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform='scale(1)'}
                    />
                    <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.52)' }} />
                    <div style={{ position:'absolute', bottom:'1.125rem', left:'1.5rem' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#0d0d0d', border:'0.5px solid rgba(0,0,0,0.18)', padding:'0.25rem 0.625rem' }}>{cap.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding:'2rem 2.25rem 2.25rem' }}>
                    <div style={{ fontFamily:'"Cormorant Garamond"', fontSize:'2.5rem', fontWeight:300, color:'rgba(0,0,0,0.06)', lineHeight:1, marginBottom:'0.75rem' }}>{cap.n}</div>
                    <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'0.75rem' }}>{cap.title}</h3>
                    <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'#6b6b6b', lineHeight:1.7, marginBottom:'1.25rem' }}>{cap.desc}</p>
                    <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', overflow:'hidden' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', color:'#0d0d0d', letterSpacing:'0.1em', textTransform:'uppercase' }}>View Capability</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="1.5" style={{ flexShrink:0, transition:'transform 0.25s ease' }}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── MISSION QUOTE ────────────────────────────── */}
      <section style={{ backgroundColor:'#111111', padding:'9rem 2rem' }}>
        <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center' }}>
          <div style={{ width:40, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'0 auto 3rem' }} />
          <blockquote className="heading-display reveal" style={{ fontSize:'clamp(1.5rem,3.5vw,2.5rem)', color:'#f0efed', fontWeight:300, lineHeight:1.5, fontStyle:'italic', marginBottom:'3rem' }}>
            "We exist to solve the procurement problems that define the limits of what is possible. Wraith International delivers where others cannot."
          </blockquote>
          <div style={{ width:40, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'0 auto 2rem' }} />
          <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', fontWeight:400, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(240,239,237,0.3)' }}>
            Wraith International LLC — Irvine, California
          </span>
        </div>
      </section>

      <GoldLine />

      {/* ── CLIENTS ──────────────────────────────────── */}
      <section style={{ backgroundColor:'#f0efed', padding:'9rem 2rem', position:'relative' }}>
        <SectionCount current={4} total={9} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Trusted By</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'4rem' }}>Our Clients</h2>
          <div style={{ display:'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(auto-fill,minmax(220px,1fr))', border:'0.5px solid #e8e8e8' }}>
            {CLIENTS.map((client,i) => (
              <div key={i} className="reveal" style={{ padding:'2rem', borderRight:'0.5px solid #e8e8e8', borderBottom:'0.5px solid #e8e8e8', transition:'background-color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor='#f8f8f8'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
              >
                <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', color:'#b0b0b0', transition:'color 0.25s ease', display:'block', lineHeight:1.6 }}
                  onMouseEnter={e => e.target.style.color='#1a1a1a'}
                  onMouseLeave={e => e.target.style.color='#b0b0b0'}
                >{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── FEATURE SECTION ──────────────────────────── */}
      <section style={{ backgroundColor:'#111111', padding:'9rem 2rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? '2rem' : '8rem', alignItems:'start' }}>
          <div>
            <Eyebrow light>Where We Go</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', color:'#f0efed', lineHeight:1.1, marginBottom:'2rem' }}>
              We operate where<br />the requirement takes us.
            </h2>
            <p className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontSize:'1rem', color:'rgba(240,239,237,0.5)', lineHeight:1.85, marginBottom:'2.5rem' }}>
              Wraith International has no boundary that the mission does not cross. Domestic programs and allied nation contracts, managed to the same standard of delivery.
            </p>
            <div className="reveal">
              <Link to="/capabilities" className="btn-primary">View Our Capabilities</Link>
            </div>
          </div>
          <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', backgroundColor:'rgba(255,255,255,0.06)' }}>
            {STATS.map((s,i) => (
              <div key={i} style={{ backgroundColor:'#111111', padding:'2.5rem 2rem', textAlign:'center' }}>
                <div className="heading-display" style={{ fontSize:'2.75rem', color:'#f0efed', marginBottom:'0.5rem' }}>{s.value}</div>
                <div style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:400, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(240,239,237,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── MARKETS ──────────────────────────────────── */}
      <section style={{ backgroundColor:'#111111', padding:'9rem 2rem', position:'relative' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow light>Where We Operate</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#f0efed', marginBottom:'4rem' }}>Our Markets</h2>
          {MARKETS.map((m,i) => (
            <div key={i} className="market-row reveal" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'2.25rem 0 2.25rem 1.5rem', borderBottom:'0.5px solid rgba(255,255,255,0.08)', gap:'2rem', transition:'all 0.3s ease' }}>
              <h3 className="heading-display" style={{ fontSize:'clamp(1.5rem,3vw,2.25rem)', color:'#f0efed', minWidth:240, flexShrink:0 }}>{m.name}</h3>
              <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'rgba(240,239,237,0.5)', flex:1, textAlign:'center' }}>{m.desc}</p>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(240,239,237,0.4)" strokeWidth="1.5" style={{ flexShrink:0 }}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </section>

      <GoldLine />

      {/* ── GLOBAL PRESENCE ───────────────────────────── */}
      <section style={{ backgroundColor:'#f0efed', padding:'9rem 2rem', position:'relative' }}>
        <SectionCount current={7} total={9} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Global Footprint</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'4rem' }}>Where Wraith Operates</h2>
          <div style={{ border:'0.5px solid #e8e8e8' }}>
            {GLOBAL.map((g,i) => (
              <div key={i} className="reveal" style={{ display:'grid', gridTemplateColumns: m ? '1fr' : '220px 1fr', gap: m ? '0.25rem' : '3rem', padding: m ? '1.25rem' : '1.875rem 2rem', borderBottom:i<GLOBAL.length-1?'0.5px solid #e8e8e8':'none', alignItems:'baseline', transition:'background-color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor='#f9f9f9'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
              >
                <div style={{ display:'flex', alignItems:'center', gap:'0.875rem' }}>
                  <span style={{ width:3, height:3, borderRadius:'50%', backgroundColor:'#0d0d0d', flexShrink:0 }} />
                  <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, color:'#1a1a1a', letterSpacing:'0.03em' }}>{g.region}</span>
                </div>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'#6b6b6b', lineHeight:1.7 }}>{g.ops}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── WHY WRAITH ───────────────────────────────── */}
      <section style={{ backgroundColor:'#111111', padding:'9rem 2rem', position:'relative' }}>
        <SectionCount current={8} total={9} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Our Edge</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#f0efed', marginBottom:'5rem' }}>Why Wraith International</h2>
          <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2,1fr)', border:'0.5px solid rgba(255,255,255,0.08)' }}>
            {WHY.map((w,i) => (
              <div key={i} className="reveal" style={{ padding:'3.5rem', borderRight:i%2===0?'0.5px solid rgba(255,255,255,0.08)':'none', borderBottom:i<2?'0.5px solid rgba(255,255,255,0.08)':'none', transition:'background-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
              >
                <div style={{ fontFamily:'"Cormorant Garamond"', fontSize:'4rem', fontWeight:300, color:'rgba(255,255,255,0.05)', lineHeight:1, marginBottom:'1.5rem' }}>{w.n}</div>
                <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0d0d0d', marginBottom:'1rem' }}>{w.title}</h3>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'rgba(255,255,255,0.42)', lineHeight:1.8 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── AUTOMATA CALLOUT ─────────────────────────── */}
      <section style={{ backgroundColor:'#f0efed', padding:0, overflow:'hidden' }}>
        <div style={{ display: m ? 'flex' : 'grid', flexDirection:'column', gridTemplateColumns: m ? undefined : '1fr 1fr', minHeight: m ? 'auto' : 560 }}>
          <div style={{ position:'relative', overflow:'hidden' }}>
            <img src={IMGS.aviation} alt="" loading="lazy"
              style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0, transition:'transform 0.8s cubic-bezier(0.4,0,0.2,1)' }}
              onMouseEnter={e => e.target.style.transform='scale(1.03)'}
              onMouseLeave={e => e.target.style.transform='scale(1)'}
            />
            <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(8,9,10,0.55)' }} />
          </div>
          <div style={{ backgroundColor:'#111111', padding:'5rem 4rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <Eyebrow>A Wraith Company</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#f0efed', marginBottom:'1.5rem' }}>
              Automata<br /><em style={{ color:'rgba(240,239,237,0.6)', fontStyle:'italic' }}>Aviation</em>
            </h2>
            <p className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontSize:'1rem', fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginBottom:'2.5rem' }}>
              Dedicated aviation division providing military and civilian aviation products, pilot training, aircraft support, and ATC services to government and allied clients worldwide.
            </p>
            <div className="reveal">
              <Link to="/aviation" className="btn-primary">Explore Automata Aviation</Link>
            </div>
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor:'#111111', padding:'10rem 2rem', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(3rem,6vw,5rem)', color:'#f0efed', marginBottom:'2.5rem', fontWeight:300 }}>
            Ready to work with us?
          </h2>
          <p className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontWeight:300, fontSize:'1rem', color:'rgba(240,239,237,0.5)', lineHeight:1.85, maxWidth:440, margin:'0 auto 3rem' }}>
            Contracting officers, program managers, and foreign government representatives — we are ready to respond.
          </p>
          <div className="reveal" style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn-primary">Request a Briefing</Link>
            <a href="mailto:contracts@wraithintl.com" className="btn-ghost-dark">contracts@wraithintl.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
