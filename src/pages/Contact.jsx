import { useIsMobile } from '../hooks/useIsMobile';
import React, { useState } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const SUBJECTS = [
  'General Inquiry',
  'Capabilities Briefing',
  'Contract Opportunity',
  'Foreign Military Sales',
  'Aviation Services',
  'Other',
];

const INFO = [
  { label: 'General Inquiries', value: 'info@wraithintl.com', href: 'mailto:info@wraithintl.com' },
  { label: 'Contract Opportunities', value: 'contracts@wraithintl.com', href: 'mailto:contracts@wraithintl.com' },
  { label: 'Phone', value: '+1 714 448 5000', href: 'tel:+17144485000' },
  { label: 'Headquarters', value: 'Irvine, California', href: null },
  { label: 'Business Classification', value: 'Small Business — Prime Contractor', href: null },
  { label: 'SAM.gov Status', value: 'Registered & Active', href: null },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.organization.trim()) errors.organization = 'Organization is required.';
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.phone.trim()) errors.phone = 'Phone number is required.';
  if (!form.subject) errors.subject = 'Please select a subject.';
  if (!form.message.trim() || form.message.trim().length < 20) {
    errors.message = 'Please provide a message of at least 20 characters.';
  }
  return errors;
}

export default function Contact() {
  useScrollRevealAll();
  const m = useIsMobile();

  const [form, setForm] = useState({ name: '', organization: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:'#111111', minHeight: m ? '38vh' : '52vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding: m ? '5.5rem 1.5rem 3rem' : '11rem 2rem 6rem', textAlign:'center' }}>
        <div className="anim-delay-2">
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(0.7rem,1.5vw,1rem)', fontWeight:400, letterSpacing:'0.5em', textTransform:'uppercase', color:'rgba(240,239,237,0.35)', marginBottom:'1rem', paddingLeft:'0.5em' }}>
            REQUEST A
          </div>
          <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing:'0.5em', textTransform:'uppercase', color:'#f0efed', lineHeight:1, paddingLeft:'0.5em' }}>
            BRIEFING
          </div>
        </div>
        <div style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'2rem auto 0' }} />
      </section>

      {/* Contact split layout */}
      <section style={{ backgroundColor: '#f0efed', padding: m ? '3rem 1.25rem' : '8rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.6fr', gap: m ? '2.5rem' : '8rem', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <p className="reveal" style={{ fontFamily: '"Libre Baskerville"', fontSize: '1rem', color: '#6b6b6b', lineHeight: 1.85, marginBottom: '3rem' }}>
              Wraith International works with contracting officers, program managers, foreign government representatives, and procurement officials. If you have a requirement — established or emerging — we want to hear from you.
            </p>

            <div className="section-divider reveal" />

            <div className="reveal" style={{ marginTop: '2rem' }}>
              {INFO.map((item, i) => (
                <div key={i} style={{ padding: '1.25rem 0', borderBottom: '0.5px solid #f0f0f0' }}>
                  <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: '0.375rem' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.9375rem', color: '#1a1a1a', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.target.style.color = '#0d0d0d'}
                        onMouseLeave={e => e.target.style.color = '#1a1a1a'}
                      >{item.value}</a>
                    : <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.9375rem', color: '#1a1a1a' }}>{item.value}</p>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            {submitted ? (
              <div style={{ padding: '4rem', border: '0.5px solid #e8e8e8', textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, border: '1px solid #0d0d0d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="heading-display" style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '1rem' }}>Thank you.</h3>
                <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '1rem', color: '#6b6b6b', lineHeight: 1.75 }}>
                  We will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  {[
                    { field: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { field: 'organization', label: 'Organization', type: 'text', placeholder: 'Agency or company' },
                    { field: 'email', label: 'Email Address', type: 'email', placeholder: 'your@organization.gov' },
                    { field: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 000 000 0000' },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaaaaa', display: 'block', marginBottom: '0.75rem' }}>{label}</label>
                      <input
                        type={type}
                        value={form[field]}
                        onChange={set(field)}
                        placeholder={placeholder}
                        className="form-input"
                        style={errors[field] ? { borderBottomColor: '#ef4444' } : {}}
                      />
                      {errors[field] && <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.375rem' }}>{errors[field]}</p>}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaaaaa', display: 'block', marginBottom: '0.75rem' }}>Subject</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={form.subject}
                      onChange={set('subject')}
                      className="form-select"
                      style={errors.subject ? { borderBottomColor: '#ef4444' } : {}}
                    >
                      <option value="">Select a subject</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="1.5" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {errors.subject && <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.375rem' }}>{errors.subject}</p>}
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <label style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaaaaa', display: 'block', marginBottom: '0.75rem' }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Describe your requirement, timeline, and any specific qualifications needed."
                    rows={6}
                    className="form-input"
                    style={{ resize: 'vertical', minHeight: 140, ...(errors.message ? { borderBottomColor: '#ef4444' } : {}) }}
                  />
                  {errors.message && <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.375rem' }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{ opacity: submitting ? 0.7 : 1, width: '100%', justifyContent: 'center' }}
                >
                  {submitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section style={{ backgroundColor: '#111111', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
            Wraith International LLC — Irvine, California — wraithintl.com
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="mailto:info@wraithintl.com" style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#0d0d0d'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >General Inquiries</a>
            <a href="mailto:contracts@wraithintl.com" style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#0d0d0d'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >Contract Opportunities</a>
          </div>
        </div>
      </section>
    </>
  );
}
