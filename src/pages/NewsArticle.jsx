import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getArticle, getRelated } from '../data/articles';
import { GoldLine } from '../components/ImageSection';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function LinkedInShare({ headline, slug }) {
  const url = encodeURIComponent(`https://wraithintl.com/news/${slug}`);
  const title = encodeURIComponent(headline);
  const href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
        border: '1px solid #0d0d0d', color: '#0d0d0d',
        fontFamily: '"Libre Baskerville", Georgia, serif',
        fontSize: '0.6875rem', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '0.75rem 1.5rem', textDecoration: 'none',
        transition: 'background-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0d0d0d'; e.currentTarget.style.color = '#f0efed'; }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0d0d0d'; }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
      Share on LinkedIn
    </a>
  );
}

export default function NewsArticle() {
  const { slug } = useParams();
  const article = getArticle(slug);
  useScrollRevealAll();

  if (!article || !article.isPublished) {
    return <Navigate to="/news" replace />;
  }

  const related = getRelated(article);

  return (
    <>
      {/* Article hero */}
      <section style={{ backgroundColor: '#111111', padding: '11rem 2rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, backgroundColor: '#0d0d0d' }} />
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link to="/news" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(240,239,237,0.4)', textDecoration: 'none',
            marginBottom: '2.5rem', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0efed'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,239,237,0.4)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Newsroom
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: '"Libre Baskerville", Georgia, serif',
              fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(240,239,237,0.5)',
            }}>{article.category}</span>
            <span style={{ width: 3, height: 3, backgroundColor: 'rgba(240,239,237,0.2)', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{
              fontFamily: '"Libre Baskerville", Georgia, serif',
              fontSize: '0.75rem', color: 'rgba(240,239,237,0.35)', fontStyle: 'italic',
            }}>
              {formatDate(article.publishDate)} · {article.readTime} min read
            </span>
          </div>

          <h1 className="heading-display anim-delay-2" style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: '#f0efed',
            fontWeight: 300, lineHeight: 1.15,
          }}>
            {article.headline}
          </h1>
        </div>
      </section>

      <GoldLine opacity={0.1} />

      {/* Article body */}
      <section style={{ backgroundColor: '#f0efed', padding: '6rem 2rem 5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Excerpt lede */}
          <p style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1.375rem', fontWeight: 300, fontStyle: 'italic',
            color: '#3a3a3a', lineHeight: 1.6, marginBottom: '3rem',
            paddingBottom: '3rem', borderBottom: '0.5px solid #d5d3cf',
          }}>
            {article.excerpt}
          </p>

          {/* Body content */}
          <div style={{
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontSize: '1rem', color: '#2a2a2a', lineHeight: 1.9,
          }}
            dangerouslySetInnerHTML={{ __html: article.content
              .replace(/<p>/g, '<p style="margin-bottom:1.75rem">')
            }}
          />

          {/* Share + meta footer */}
          <div style={{
            marginTop: '4rem', paddingTop: '3rem',
            borderTop: '0.5px solid #d5d3cf',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <div>
              <span style={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontSize: '0.6875rem', color: '#aaaaaa', fontStyle: 'italic',
              }}>
                Published {formatDate(article.publishDate)} · Wraith International LLC
              </span>
            </div>
            <LinkedInShare headline={article.headline} slug={article.slug} />
          </div>
        </div>
      </section>

      <GoldLine opacity={0.12} />

      {/* Related articles */}
      {related.length > 0 && (
        <section style={{ backgroundColor: '#f0efed', padding: '5rem 2rem 8rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 className="heading-display reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#0d0d0d', marginBottom: '3rem', fontWeight: 400 }}>
              Related Articles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '0.5px solid #d5d3cf' }}>
              {related.map((a, i) => (
                <Link key={a.id} to={`/news/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <article
                    className="cap-card reveal"
                    style={{
                      padding: '2.25rem',
                      borderRight: i < related.length - 1 ? '0.5px solid #d5d3cf' : 'none',
                      backgroundColor: '#f0efed', transition: 'background-color 0.25s ease', position: 'relative',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e8e7e4'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f0efed'}
                  >
                    <span style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0d0d0d', display: 'block', marginBottom: '0.875rem' }}>{a.category}</span>
                    <h3 className="heading-display" style={{ fontSize: '1.125rem', color: '#0d0d0d', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.75rem' }}>{a.headline}</h3>
                    <p style={{ fontFamily: '"Libre Baskerville"', fontSize: '0.8125rem', color: '#aaaaaa', fontStyle: 'italic' }}>{formatDate(a.publishDate)}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
