import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo, FunnelSimple } from '@phosphor-icons/react';
import { products, waHref, species } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [filter, setFilter] = useState('All');
  const speciesOptions = ['All', ...species.map((s) => s.name.split(' ')[0])];

  const filtered =
    filter === 'All'
      ? products
      : products.filter((p) => p.species.some((s) => s.includes(filter)));

  return (
    <PageTransition>
      <SEO
        title="Products — Sawn Timber, Doors, Flooring, Decking · Lupane Timbers"
        description="Lupane Timbers supplies sawn hardwood, teak doors and windows, flooring, decking, roofing timber, custom milling, joinery blanks and pallets. Nationwide delivery."
      />

      <PageHero
        eyebrow="Catalogue"
        title="What leaves the yard."
        accent="Sawn, dimensioned, crafted."
        sub="Eight core product categories — from rough-sawn stock to finished pivot doors. Every order is cut, graded and loaded from our Avondale yard."
        crumbs={[{ label: 'Products' }]}
        image={products[1].image}
      />

      {/* Filter */}
      <section className="bg-cream-100 border-b border-cream-300 sticky top-[76px] sm:top-20 z-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <div className="shrink-0 flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-char-500">
            <FunnelSimple size={14} />
            Species
          </div>
          <div className="flex gap-2">
            {speciesOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`shrink-0 px-4 py-2 text-[11.5px] tracking-[0.1em] uppercase border transition-colors ${
                  filter === opt
                    ? 'bg-wine-700 text-cream-50 border-wine-700'
                    : 'bg-cream-50 text-char-700 border-cream-300 hover:border-wine-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} />
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-display text-2xl text-char-700">
                Nothing in that filter yet.
              </p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 text-wine-700 text-sm font-medium hover:underline"
              >
                Show everything →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lead-time panel */}
      <section className="bg-char-900 text-cream-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="font-accent text-2xl text-brass-300 mb-2">lead time</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.03] text-balance">
                Most stock ships inside a week.
              </h2>
              <p className="mt-5 text-cream-200/80 leading-relaxed">
                Pine roofing leaves the yard ex-stock. Sawn mukwa and teak runs ship in 48 hours to three weeks depending on dimension. Custom doors and flooring take four to eight weeks. We'll confirm in writing before you pay a deposit.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { k: 'Ex-stock', v: 'Pine roofing, standard boards' },
                { k: '48 hr', v: 'Sawn hardwood in standard sizes' },
                { k: '1 – 3 weeks', v: 'Custom milling, joinery blanks' },
                { k: '4 – 8 weeks', v: 'Doors, windows, flooring' },
              ].map((row) => (
                <div
                  key={row.k}
                  className="border border-cream-50/15 p-5 sm:p-6 bg-char-800/60"
                >
                  <p className="font-display text-2xl text-brass-300">{row.k}</p>
                  <p className="text-[13px] text-cream-200/70 mt-2 leading-relaxed">
                    {row.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 border-t border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-char-900 leading-[1.03] max-w-2xl mx-auto">
            Have a cutting list? Send it over.
          </h2>
          <p className="mt-4 text-char-500 max-w-xl mx-auto">
            Photos of your drawing or an Excel of your cut sizes — we'll quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref('Hi Lupane — I have a cutting list I\u0027d like to send.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wine-700 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-wine-600 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Send on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-char-800 text-char-800 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-char-800 hover:text-cream-50 transition-colors"
            >
              Contact form
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
