import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, House } from '@phosphor-icons/react';

export default function PageHero({ eyebrow, title, accent, sub, crumbs = [], image }) {
  return (
    <section className="relative bg-char-900 text-cream-50 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-char-900/70 via-char-900/55 to-char-900/85" />
        </>
      )}
      <div className="grain" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase text-cream-200/70 mb-6 flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-brass-300">
            <House size={12} />
            Home
          </Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              <CaretRight size={10} className="text-cream-200/40" />
              {c.to ? (
                <Link to={c.to} className="hover:text-brass-300">
                  {c.label}
                </Link>
              ) : (
                <span className="text-brass-300 truncate max-w-[180px] sm:max-w-none">
                  {c.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {eyebrow && (
          <p className="font-accent text-xl sm:text-2xl text-brass-300 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[38px] sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl text-balance">
          {title}
          {accent && (
            <span className="block italic text-brass-300 mt-1.5">{accent}</span>
          )}
        </h1>
        {sub && (
          <p className="mt-6 text-cream-200/80 text-base lg:text-lg leading-relaxed max-w-2xl text-pretty">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
