import { useIsMobile } from '../hooks/useIsMobile';
import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCover, SectionCount, Eyebrow, GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const VALUES = [
  { title:'Integrity', body:'Integrity is not a value we articulate. It is a constraint we operate within. Every commitment Wraith makes is honored in full, on schedule, without renegotiation. Every transaction is documented with the precision that government auditors demand. Every client interaction is conducted with the transparency that long-term trust requires. We do not make commitments we cannot keep. And we have not yet failed to keep one we have made.' },
  { title:'Precision', body:'In defense contracting, close enough is a failure mode. Specifications are met exactly. Delivery schedules are held exactly. Documentation is complete, accurate, and submitted on time. The regulatory requirements that govern every aspect of our business — from FFL compliance to ITAR adherence to export authorization — are followed without exception or interpretation. Precision is not a quality standard. It is an operational requirement that we build every process around.' },
  { title:'Reliability', body:"Our clients return because we deliver. The sole source awards that define our contract history are the most direct possible expression of client confidence — a contracting officer's determination that no alternative vendor is necessary or preferable. That determination is not made after one contract. It is made after a pattern of delivery so consistent that the question of alternatives never arises. Reliability is the compound interest of consistent execution." },
  { title:'Discretion', body:'Government contracting demands confidentiality at every level. The identities of our clients, the specifics of our contracts, the details of our pricing and supply relationships, and the operational requirements that shape our programs are matters we do not discuss outside the relationships in which they arose. What happens inside Wraith stays inside Wraith. This is not a policy. It is the foundational operating principle that makes it possible for clients to share sensitive requirements with us in the first place.' },
];

const TIMELINE = [
  { year:'1990s', event:'Founding team establishes early government contracting relationships in the defense procurement space. First international programs in the Gulf region.' },
  { year:'Early 2000s', event:'Expansion into Foreign Military Sales and direct engagement with allied ministries of defense and interior across the MENA region. ITAR registration and export authorization acquired.' },
  { year:'2003+', event:'200+ government contracts fulfilled across domestic and international markets. FFL licensing acquired. SAM.gov registered as prime contractor. Sole source track record established.' },
  { year:'2010s', event:'Deepening presence across Qatar, Iraq, Jordan, and the broader Gulf region. Multiple sole source awards from Qatar Ministry of Interior and Iraq Security Forces. Aviation capability development begins.' },
  { year:'2026', event:'Wraith International LLC formally established in Irvine, California. Automata Aviation launched as a dedicated aviation division. Full spectrum capability — weapons, tactical equipment, lodging, aviation, and training — under a single corporate platform.' },
];

const LICENSES = [
  { title:'Federal Firearms License', issuer:'Bureau of Alcohol, Tobacco, Firearms and Explosives', status:'Active' },
  { title:'ITAR Registration', issuer:'Directorate of Defense Trade Controls — US Department of State', status:'Active' },
  { title:'Export Authorization', issuer:'US Department of Commerce — Bureau of Industry and Security', status:'Active' },
  { title:'SAM.gov Entity Registration', issuer:'US General Services Administration', status:'Registered' },
  { title:'CAGE Code', issuer:'Defense Logistics Agency', status:'Active' },
  { title:'Small Business Certification', issuer:'US Small Business Administration', status:'Certified' },
  { title:'Prime Contractor Status', issuer:'Federal Acquisition Regulation', status:'Active' },
];

export default function About() {
  useScrollRevealAll();
  const m = useIsMobile();
  return (
    <>
      <section style={{ backgroundColor:'#111111', minHeight: m ? '40vh' : '58vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding: m ? '5.5rem 1.5rem 3rem' : '11rem 2rem 6rem', textAlign:'center' }}>
        <div className="anim-delay-2">
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '0.625rem' : 'clamp(0.7rem,1.5vw,1rem)', fontWeight:400, letterSpacing: m ? '0.12em' : '0.5em', textTransform:'uppercase', color:'rgba(240,239,237,0.35)', marginBottom:'1rem', paddingLeft:'0.5em' }}>
            ABOUT
          </div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '1.375rem' : 'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing: m ? '0.1em' : '0.5em', textTransform:'uppercase', color:'#f0efed', lineHeight:1, paddingLeft:'0.5em' }}>
            WRAITH INTERNATIONAL
          </div>
        </div>
        <div style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'2rem auto' }} />
        <p className="anim-delay-3" style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.9375rem', fontWeight:400, fontStyle:'italic', color:'rgba(240,239,237,0.35)', letterSpacing:'0.08em' }}>
          Every requirement. Every time.
        </p>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding: m ? '3rem 1.25rem' : '9rem 2rem', position:'relative' }}>
        <SectionCount current={2} total={7} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'8rem', alignItems:'start' }}>
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#1a1a1a' }}>Built for what matters.</h2>
            <div style={{ width:40, height:1, backgroundColor:'#0d0d0d', margin:'2rem 0' }} />
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0', border:'0.5px solid #e8e8e8', marginTop:'1rem' }}>
              {[{v:'2026',l:'Founded'},{v:'200+',l:'Contracts'},{v:'15+',l:'Nations'},{v:'0',l:'Failures'}].map((s,i) => (
                <div key={i} className="reveal" style={{ padding:'2rem 1.5rem', borderRight:i%2===0?'0.5px solid #e8e8e8':'none', borderBottom:i<2?'0.5px solid #e8e8e8':'none', textAlign:'center' }}>
                  <div className="heading-display" style={{ fontSize:'2.5rem', color:'#0d0d0d', marginBottom:'0.25rem' }}>{s.v}</div>
                  <div style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'#aaaaaa' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {[
              'Wraith International LLC is a full-spectrum government contractor established in 2026 and headquartered in Irvine, California. We were founded by professionals with direct experience in military operations, law enforcement, and international defense procurement — people who understood that the gap between government requirements and capable vendors was costing agencies time, money, and mission readiness.',
              'We exist to bridge the gap between world-class manufacturers and government clients — domestically and across the allied nations that depend on US-origin defense equipment and support. Our platform spans small arms, tactical equipment, aviation services, lodging, and training, allowing clients to consolidate complex multi-line requirements under a single, accountable contractor.',
              'We are registered on SAM.gov as a prime contractor, hold a Federal Firearms License, and maintain full ITAR and export authorization. The majority of our contracts are awarded sole source — a direct reflection of the trust that comes from a consistent record of delivery without exception, without delay, and without compromise.',
            ].map((p,i) => (
              <p key={i} className="reveal" style={{ fontFamily:'"Libre Baskerville"', fontSize:'1rem', color:'#4a4a4a', lineHeight:1.85, marginBottom:'1.75rem' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#111111', padding: m ? '3rem 1.25rem' : '9rem 2rem', position:'relative' }}>
        <SectionCount current={3} total={7} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>History</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#f0efed', marginBottom:'5rem' }}>Our Timeline</h2>
          <div style={{ position:'relative', paddingLeft:'3rem' }}>
            <div style={{ position:'absolute', left:'0.75rem', top:0, bottom:0, width:'0.5px', backgroundColor:'rgba(255,255,255,0.1)' }} />
            {TIMELINE.map((item, i) => (
              <div key={i} className="reveal" style={{ position:'relative', marginBottom:'3.5rem', paddingBottom:'3.5rem', borderBottom: i < TIMELINE.length-1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ position:'absolute', left:'-2.375rem', top:'0.25rem', width:10, height:10, border:'1px solid #0d0d0d', borderRadius:'50%', backgroundColor:'#111111' }} />
                <div style={{ fontFamily:'"Cormorant Garamond"', fontSize:'1.5rem', fontWeight:400, color:'#0d0d0d', marginBottom:'0.75rem' }}>{item.year}</div>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'rgba(255,255,255,0.45)', lineHeight:1.75, maxWidth:700 }}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding: m ? '3rem 1.25rem' : '9rem 2rem', position:'relative' }}>
        <SectionCount current={4} total={7} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>How We Operate</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'5rem' }}>Our Values</h2>
          <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2,1fr)', border:'0.5px solid #e8e8e8' }}>
            {VALUES.map((v,i) => (
              <div key={i} className="reveal" style={{ padding:'3.5rem', borderRight:i%2===0?'0.5px solid #e8e8e8':'none', borderBottom:i<2?'0.5px solid #e8e8e8':'none' }}>
                <div style={{ width:24, height:1, backgroundColor:'#0d0d0d', marginBottom:'1.5rem' }} />
                <h3 className="heading-display" style={{ fontSize:'2rem', fontWeight:400, color:'#1a1a1a', marginBottom:'1.25rem' }}>{v.title}</h3>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'#6b6b6b', lineHeight:1.85 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#e8e7e4', padding: m ? '3rem 1.25rem' : '9rem 2rem', position:'relative' }}>
        <SectionCount current={5} total={7} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'5rem' }}>Our Approach</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0', border:'0.5px solid #e8e8e8' }}>
            {[
              { n:'01', title:'Relationship First', body:'Every Wraith engagement begins with a relationship — not a proposal. We invest in understanding the client, the requirement, and the operating environment before we identify a solution. This investment produces programs that are correctly specified from the outset, reducing the costly revisions and disputes that define poorly executed contracts. Our relationship-first approach is why the majority of our contracts are sole source. The relationship makes competition unnecessary.' },
              { n:'02', title:'Single Point of Accountability', body:'Complex government programs fail when responsibility is distributed across multiple vendors with no single accountable party. Wraith operates as the single accountable prime across every element of every program we manage. When something requires resolution, one call produces a response. When something requires escalation, one relationship reaches the decision maker. The value of single-source accountability compounds over the life of a program and across the lifetime of a client relationship.' },
              { n:'03', title:'Compliance Without Exception', body:'The regulatory environment governing defense procurement — ITAR, EAR, FFL requirements, SAM.gov compliance, end-user certification, and the specific requirements of partner-nation procurement law — is unforgiving of contractors who treat compliance as a variable. Wraith treats it as a constant. Every transaction is structured, documented, and executed to the applicable regulatory standard, without interpretation or exception. This discipline protects our clients and preserves our ability to operate in restricted categories.' },
            ].map((a,i) => (
              <div key={i} className="reveal" style={{ padding:'3rem', borderRight:i<2?'0.5px solid #e8e8e8':'none' }}>
                <div style={{ fontFamily:'"Cormorant Garamond"', fontSize:'3.5rem', fontWeight:300, color:'rgba(0,0,0,0.07)', lineHeight:1, marginBottom:'1.25rem' }}>{a.n}</div>
                <h3 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'#1a1a1a', marginBottom:'1rem' }}>{a.title}</h3>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'#6b6b6b', lineHeight:1.8 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#e8e7e4', padding: m ? '3rem 1.25rem' : '8rem 2rem', borderTop:'0.5px solid #e8e8e8', position:'relative' }}>
        <SectionCount current={6} total={7} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2rem,4vw,3.5rem)', color:'#1a1a1a', marginBottom:'4rem' }}>Our Team</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'2rem', maxWidth:640 }}>
            {[{ name:'LEADERSHIP_PLACEHOLDER', title:'Chief Executive Officer' }].map((l,i) => (
              <div key={i} className="reveal" style={{ border:'0.5px solid #e8e8e8', padding:'2.5rem', backgroundColor:'#f0efed' }}>
                <div style={{ width:'100%', aspectRatio:'1', backgroundColor:'#f4f4f4', marginBottom:'1.5rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#bbbbbb' }}>PHOTO</span>
                </div>
                <h3 className="heading-display" style={{ fontSize:'1.5rem', fontWeight:400, color:'#1a1a1a', marginBottom:'0.25rem' }}>{l.name}</h3>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0d0d0d' }}>{l.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      <section style={{ backgroundColor:'#f0efed', padding: m ? '3rem 1.25rem' : '8rem 2rem', position:'relative' }}>
        <SectionCount current={7} total={7} light={false} />
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Eyebrow>Credentials</Eyebrow>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', color:'#1a1a1a', marginBottom:'4rem' }}>Licenses & Certifications</h2>
          <div style={{ border:'0.5px solid #e8e8e8' }}>
            {LICENSES.map((lic,i) => (
              <div key={i} className="reveal" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1.875rem 2rem', borderBottom:i<LICENSES.length-1?'0.5px solid #e8e8e8':'none', flexWrap:'wrap', gap:'1rem' }}>
                <div>
                  <h4 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', fontWeight:500, color:'#1a1a1a', marginBottom:'0.25rem' }}>{lic.title}</h4>
                  <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.8125rem', color:'#aaaaaa' }}>{lic.issuer}</p>
                </div>
                <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#0d0d0d', border:'0.5px solid rgba(0,0,0,0.15)', padding:'0.375rem 0.875rem' }}>{lic.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'#111111', padding: m ? '3rem 1.25rem' : '9rem 2rem', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <h2 className="heading-display reveal" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', color:'#f0efed', marginBottom:'2.5rem', fontWeight:300 }}>
            Work with a contractor that delivers.
          </h2>
          <div className="reveal" style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn-primary">Request Briefing</Link>
            <Link to="/capabilities" className="btn-ghost-dark">Our Capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}
