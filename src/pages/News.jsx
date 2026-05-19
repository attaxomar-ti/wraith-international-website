import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLISHED, CATEGORIES, getNextPublish } from '../data/articles';
import { GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { useIsMobile } from '../hooks/useIsMobile';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function News() {
  useScrollRevealAll();
  const m = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('All');
  const nextIn = getNextPublish();

  const filtered = activeCategory === 'All' ? PUBLISHED : PUBLISHED.filter(a => a.category === activeCategory);
  const sorted = [...filtered].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:'#111111', minHeight: m ? '40vh' : '52vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding: m ? '5.5rem 1.5rem 3rem' : '11rem 2rem 6rem', textAlign:'center' }}>
        <div style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize: m ? '1.5rem' : 'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing: m ? '0.12em' : '0.5em', textTransform:'uppercase', color:'#f0efed', paddingLeft: m ? '0.12em' : '0.5em' }}>
          NEWSROOM
        </div>
        <div style={{ width:40, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'1.5rem auto 0' }} />
        {nextIn !== null && (
          <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.8125rem', color:'rgba(240,239,237,0.3)', marginTop:'1rem', fontStyle:'italic' }}>
            Next article in {nextIn} day{nextIn !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      <GoldLine />

      {/* Filters */}
      <div style={{ backgroundColor:'#f0efed', borderBottom:'0.5px solid #d5d3cf', overflowX:'auto', WebkitOverflowScrolling:'touch' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding: m ? '0 1.25rem' : '0 2rem', display:'flex', gap: m ? '0' : '0', whiteSpace:'nowrap', minWidth:'max-content' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              background:'none', border:'none',
              fontFamily:'"Libre Baskerville", Georgia, serif',
              fontSize: m ? '0.6875rem' : '0.75rem', fontWeight:400,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color: activeCategory === cat ? '#0d0d0d' : '#aaaaaa',
              padding: m ? '0.875rem 0.75rem' : '0.875rem 1.5rem 0.875rem 0',
              marginRight: m ? '0' : '1.5rem',
              borderBottom: activeCategory === cat ? '1.5px solid #0d0d0d' : '1.5px solid transparent',
              cursor:'pointer', whiteSpace:'nowrap',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ backgroundColor:'#f0efed', padding: m ? '2.5rem 1.25rem 5rem' : '5rem 2rem 8rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          {sorted.length === 0 ? (
            <p style={{ textAlign:'center', padding:'5rem 0', fontFamily:'"Cormorant Garamond"', fontSize:'1.5rem', color:'#aaaaaa', fontStyle:'italic' }}>No articles in this category yet.</p>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap:'0', border:'0.5px solid #d5d3cf' }}>
              {sorted.map((article, i) => (
                <Link key={article.id} to={`/news/${article.slug}`} style={{ textDecoration:'none' }}>
                  <article className="cap-card" style={{
                    padding: m ? '1.5rem' : '2.5rem',
                    borderRight: m ? 'none' : (i%3!==2?'0.5px solid #d5d3cf':'none'),
                    borderBottom:'0.5px solid #d5d3cf',
                    backgroundColor:'#f0efed',
                    display:'flex', flexDirection:'column', minHeight: m ? 'auto' : 300,
                    position:'relative',
                    transition:'background-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor='#e8e7e4'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor='#f0efed'}
                  >
                    <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.5625rem', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#0d0d0d', display:'block', marginBottom:'0.875rem' }}>{article.category}</span>
                    <h2 style={{ fontFamily:'"Cormorant Garamond", Georgia, serif', fontSize: m ? '1.25rem' : 'clamp(1.125rem,2vw,1.375rem)', color:'#0d0d0d', fontWeight:400, lineHeight:1.3, marginBottom:'0.875rem', flex:1 }}>{article.headline}</h2>
                    <p style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.8125rem', color:'#5c5c5c', lineHeight:1.65, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', marginBottom:'1.25rem' }}>{article.excerpt}</p>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', color:'#aaaaaa', fontStyle:'italic' }}>{formatDate(article.publishDate)}</span>
                      <span style={{ fontFamily:'"Libre Baskerville"', fontSize:'0.6875rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'#0d0d0d' }}>Read →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
