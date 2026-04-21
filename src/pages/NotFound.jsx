import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, House } from '@phosphor-icons/react';
import { notFound } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="404 — Not Found · Lupane Timbers" />
      <section className="relative min-h-[70vh] bg-cream-50 overflow-hidden flex items-center">
        <div className="grain" />
        <div className="absolute inset-0 wood-grain opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 w-full text-center">
          <p className="font-accent text-3xl text-wine-700 mb-4">
            lost in the forest
          </p>
          <p className="font-display text-8xl sm:text-9xl text-char-900 leading-none">
            404
          </p>
          <p className="mt-6 font-display text-2xl sm:text-3xl text-char-700 max-w-2xl mx-auto italic leading-tight">
            "{notFound.quote}"
          </p>
          <p className="mt-5 text-char-500 max-w-md mx-auto text-[15px] leading-relaxed">
            {notFound.blurb}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-wine-700 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-wine-600 transition-colors"
            >
              <House size={14} weight="bold" />
              Back to the yard
            </Link>
            <Link
              to="/our-timber"
              className="inline-flex items-center gap-2 border border-char-800 text-char-800 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-char-800 hover:text-cream-50 transition-colors"
            >
              <ArrowLeft size={14} />
              Browse our timber
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
