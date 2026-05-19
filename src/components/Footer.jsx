import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoldLine } from './ImageSection';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer style={{ backgroundColor:'#111111', color:'#f0efed' }}>
      {/* Briefing request bar */}
      <div style={{ borderBottom:'0.5px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'5rem 2rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'center' }}>
          <div>
            <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#0d0d0d', display:'block', marginBottom:'1rem' }}>REQUEST A BRIEFING</span>
            <h3 className="heading-display" style={{ fontSize:'clamp(1.75rem,3vw,2.75rem)', color:'#f0efed', marginBottom:'1rem' }}>
              Stay informed on<br />Wraith capabilities.
            </h3>
            <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', fontWeight:300, color:'rgba(255,255,255,0.35)', lineHeight:1.7 }}>
              For contracting officers, program managers, and government representatives. Enter your information and a member of our team will reach out within one business day.
            </p>
          </div>
          <div>
            {submitted ? (
              <div style={{ padding:'2.5rem', border:'0.5px solid rgba(0,0,0,0.1)', textAlign:'center' }}>
                <div style={{ width:40, height:40, border:'0.5px solid #0d0d0d', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="1.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'rgba(255,255,255,0.6)' }}>We will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                <div>
                  <label style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', display:'block', marginBottom:'0.625rem' }}>Your Name</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required
                    style={{ width:'100%', background:'transparent', border:'none', borderBottom:'0.5px solid rgba(255,255,255,0.2)', padding:'0.75rem 0', fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'#f0efed', outline:'none', transition:'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderBottomColor='#0d0d0d'}
                    onBlur={e => e.target.style.borderBottomColor='rgba(255,255,255,0.2)'}
                  />
                </div>
                <div>
                  <label style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', display:'block', marginBottom:'0.625rem' }}>Work Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@organization.gov" required
                    style={{ width:'100%', background:'transparent', border:'none', borderBottom:'0.5px solid rgba(255,255,255,0.2)', padding:'0.75rem 0', fontFamily:'"Libre Baskerville"', fontSize:'0.9375rem', color:'#f0efed', outline:'none', transition:'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderBottomColor='#0d0d0d'}
                    onBlur={e => e.target.style.borderBottomColor='rgba(255,255,255,0.2)'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf:'flex-start', marginTop:'0.5rem' }}>Submit Request</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'5rem 2rem 3rem', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'3rem' }}>
        <div>
          <img src="/wraith-logo.jpg" alt="Wraith International" style={{ height:30, width:'auto', filter:'invert(1) brightness(2)', marginBottom:'1.5rem', display:'block', opacity:0.85 }} />
          <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'rgba(255,255,255,0.3)', lineHeight:1.75, maxWidth:300, marginBottom:'2rem' }}>
            Full-spectrum government contracting. Domestic and international. Every requirement. Every time.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
            <a href="mailto:info@wraithintl.com" className="footer-link">info@wraithintl.com</a>
            <a href="mailto:contracts@wraithintl.com" className="footer-link">contracts@wraithintl.com</a>
            <a href="tel:+17144485000" className="footer-link">+1 714 448 5000</a>
            <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.875rem', color:'rgba(255,255,255,0.25)', lineHeight:2 }}>Irvine, California</span>
          </div>
          <div style={{ marginTop:'1.5rem' }}>
            <a href="https://linkedin.com/company/wraithintl" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn — wraithintl
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:'1.5rem' }}>Navigation</h4>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {[{label:'Home',to:'/'},{label:'Capabilities',to:'/capabilities'},{label:'Automata Aviation',to:'/aviation'},{label:'News',to:'/news'},{label:'About',to:'/about'},{label:'Contact',to:'/contact'}].map(l => (
              <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:'1.5rem' }}>Capabilities</h4>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {[
              {label:'Small Arms',to:'/capabilities/small-arms'},
              {label:'Foreign Military Sales',to:'/capabilities/fms'},
              {label:'Tactical Equipment',to:'/capabilities/tactical'},
              {label:'Lodging',to:'/capabilities/lodging'},
              {label:'Aviation Services',to:'/capabilities/aviation-services'},
              {label:'Training',to:'/capabilities/training'},
            ].map(l => <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>)}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:'1.5rem' }}>Legal</h4>
          <div style={{ display:'flex', flexDirection:'column' }}>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Use</Link>
            <Link to="/itar" className="footer-link">ITAR Compliance</Link>
            <Link to="/export-controls" className="footer-link">Export Controls</Link>
          </div>
          <div style={{ marginTop:'2rem' }}>
            <h4 style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:'1rem' }}>Headquarters</h4>
            <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.8125rem', color:'rgba(255,255,255,0.25)', lineHeight:1.75 }}>
              Irvine, California<br />United States of America<br />wraithintl.com
            </p>
          </div>
        </div>
      </div>

      <GoldLine opacity={0.08} />

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'1.5rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
        <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.75rem', color:'rgba(255,255,255,0.18)' }}>
          © {year} Wraith International LLC. All rights reserved. Irvine, California.
        </p>
        <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <span style={{ width:5, height:5, borderRadius:'50%', backgroundColor:'#0d0d0d', display:'inline-block' }} />
            <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)' }}>SAM.GOV REGISTERED</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <span style={{ width:5, height:5, borderRadius:'50%', backgroundColor:'rgba(255,255,255,0.2)', display:'inline-block' }} />
            <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)' }}>PRIME CONTRACTOR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
