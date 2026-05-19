import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLISHED, CATEGORIES, getNextPublish } from '../data/articles';
import { GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function News() {
  useScrollRevealAll();
  const [activeCategory, setActiveCategory] = useState('All');
  const nextIn = getNextPublish();

  const filtered = activeCategory === 'All'
    ? PUBLISHED
    : PUBLISHED.filter(a => a.category === activeCategory);

  // Sort newest first
  const sorted = [...filtered].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:'#111111', minHeight:'52vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding:'11rem 2rem 6rem', textAlign:'center' }}>
        <div className="anim-delay-2 page-hero-main" style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'clamp(1.25rem,4vw,3rem)', fontWeight:400, letterSpacing:'0.5em', textTransform:'uppercase', color:'#f0efed', paddingLeft:'0.5em' }}>
          NEWSROOM
        </div>
        <div style={{ width:48, height:'0.5px', backgroundColor:'rgba(240,239,237,0.2)', margin:'2rem auto 0' }} />
        {nextIn !== null && (
          <p style={{ fontFamily:'"Libre Baskerville", Georgia, serif', fontSize:'0.8125rem', color:'rgba(240,239,237,0.3)', marginTop:'1.5rem', fontStyle:'italic' }}>
            Next article publishes in {nextIn} day{nextIn !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      <GoldLine opacity={0.1} />

      {/* Filters */}
      <section style={{ backgroundColor: '#f0efed', padding: '3rem 2rem 0', borderBottom: '0.5px solid #d5d3cf' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '0', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: 'none', border: 'none',
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontSize: '0.75rem', fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: activeCategory === cat ? '#0d0d0d' : '#aaaaaa',
                padding: '0.875rem 1.5rem 0.875rem 0',
                borderBottom: activeCategory === cat ? '1.5px solid #0d0d0d' : '1.5px solid transparent',
                marginRight: '1.5rem',
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section style={{ backgroundColor: '#f0efed', padding: '5rem 2rem 8rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {sorted.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '8rem 0' }}>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.5rem', color: '#aaaaaa', fontStyle: 'italic' }}>
                No articles in this category yet.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '0.5px solid #d5d3cf' }}>
              {sorted.map((article, i) => (
                <Link key={article.id} to={`/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <article
                    className="cap-card reveal"
                    style={{
                      padding: '2.5rem',
                      borderRight: i % 3 !== 2 ? '0.5px solid #d5d3cf' : 'none',
                      borderBottom: Math.floor(i / 3) < Math.floor((sorted.length - 1) / 3) ? '0.5px solid #d5d3cf' : 'none',
                      backgroundColor: '#f0efed',
                      transition: 'background-color 0.25s ease',
                      display: 'flex', flexDirection: 'column', minHeight: 320, position: 'relative',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e8e7e4'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f0efed'}
                  >
                    {/* Category tag */}
                    <span style={{
                      fontFamily: '"Libre Baskerville", Georgia, serif',
                      fontSize: '0.5625rem', fontWeight: 700,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: '#0d0d0d', display: 'block', marginBottom: '1.25rem',
                    }}>{article.category}</span>

                    {/* Headline */}
                    <h2 className="heading-display" style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      color: '#0d0d0d', fontWeight: 400, lineHeight: 1.25,
                      marginBottom: '1rem', flex: 1,
                    }}>{article.headline}</h2>

                    {/* Excerpt */}
                    <p style={{
                      fontFamily: '"Libre Baskerville", Georgia, serif',
                      fontSize: '0.875rem', color: '#5c5c5c', lineHeight: 1.7,
                      display: '-webkit-box', WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      marginBottom: '1.5rem',
                    }}>{article.excerpt}</p>

                    {/* Footer */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        fontFamily: '"Libre Baskerville", Georgia, serif',
                        fontSize: '0.6875rem', color: '#aaaaaa',
                        fontStyle: 'italic',
                      }}>
                        {formatDate(article.publishDate)} · {article.readTime} min read
                      </span>
                      <span style={{
                        fontFamily: '"Libre Baskerville", Georgia, serif',
                        fontSize: '0.6875rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#0d0d0d', display: 'flex', alignItems: 'center', gap: '0.375rem',
                      }}>
                        Read
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
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

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
