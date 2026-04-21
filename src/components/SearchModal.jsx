import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlass,
  X,
  WhatsappLogo,
  ArrowRight,
  Tree,
  Package,
  FileText,
} from '@phosphor-icons/react';
import { species, products, business, waHref } from '../data/siteData';

const PAGES = [
  {
    slug: 'about',
    name: 'About Lupane',
    to: '/about',
    description:
      'Our story from a one-bench mill on the Lupane forest edge to a Harare yard. Third-generation sawyers.',
    keywords: 'story team history founders mthandazo ncube',
  },
  {
    slug: 'milling',
    name: 'Our Milling Process',
    to: '/milling',
    description:
      'Source, mill, dry, grade, ship. Our five-step process — including 12–24 months of air-seasoning.',
    keywords: 'process kiln drying seasoning band mill grade sans',
  },
  {
    slug: 'sustainability',
    name: 'Sustainability',
    to: '/sustainability',
    description:
      'Two trees planted for every one felled. Forestry Commission permits. Community concessions.',
    keywords: 'replanting legal permits community forestry commission',
  },
  {
    slug: 'our-timber',
    name: 'Our Timber',
    to: '/our-timber',
    description:
      'All seven indigenous species we mill — properties, grain character and typical uses.',
    keywords: 'species hardwood indigenous',
  },
  {
    slug: 'contact',
    name: 'Contact & Yard Visit',
    to: '/contact',
    description:
      '25 Connaught Road, Avondale. Mon–Sat. WhatsApp, phone, email and directions.',
    keywords: 'address visit yard directions hours phone email',
  },
];

const EMPTY_HINTS = ['mukwa', 'teak flooring', 'decking', 'grain', 'mopane', 'doors'];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const { productHits, speciesHits, pageHits, total } = useMemo(() => {
    if (!q.trim()) {
      return { productHits: [], speciesHits: [], pageHits: [], total: 0 };
    }
    const n = q.trim().toLowerCase();

    const match = (haystack) =>
      haystack.filter(Boolean).join(' ').toLowerCase().includes(n);

    const pHits = products
      .filter((p) =>
        match([
          p.name,
          p.summary,
          p.slug,
          ...(p.species || []),
        ])
      )
      .slice(0, 8);

    const sHits = species
      .filter((s) =>
        match([
          s.name,
          s.latin,
          s.altNames,
          s.tagline,
          s.grain,
          s.uses,
          s.why,
        ])
      )
      .slice(0, 8);

    const pageHitList = PAGES.filter((p) =>
      match([p.name, p.description, p.keywords, p.slug])
    ).slice(0, 6);

    return {
      productHits: pHits,
      speciesHits: sHits,
      pageHits: pageHitList,
      total: pHits.length + sHits.length + pageHitList.length,
    };
  }, [q]);

  if (!open) return null;

  const noResultsWaHref = waHref(
    `Hello Lupane — I'm looking for "${q.trim()}". Do you have anything similar?`
  );

  return (
    <div className="fixed inset-0 z-[60] bg-cream-50/95 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 pt-10 pb-20">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 lg:top-8 lg:right-10 h-10 w-10 flex items-center justify-center text-char-800 hover:text-wine-700 transition-colors"
        >
          <X size={22} />
        </button>

        <p className="font-accent text-2xl text-wine-700 text-center mt-8">
          what are you looking for?
        </p>

        <div className="relative mt-3 max-w-2xl mx-auto">
          <MagnifyingGlass
            size={22}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-char-300"
          />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'mukwa', 'decking', 'grain'…"
            className="w-full pl-10 pr-4 py-4 sm:py-5 bg-transparent border-b border-char-300 focus:border-wine-700 outline-none text-2xl sm:text-4xl font-display italic text-char-900 placeholder:text-char-300 transition-colors"
          />
        </div>

        <div className="mt-14">
          {/* No query state */}
          {!q.trim() && (
            <div className="mt-2">
              <p className="text-[11px] tracking-[0.18em] uppercase text-char-500 mb-4">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {EMPTY_HINTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    className="px-4 py-2 text-[13px] border border-char-300/70 text-char-700 hover:border-wine-700 hover:text-wine-700 transition-colors capitalize"
                    style={{ borderRadius: '0' }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-char-500">
                <Link
                  to="/our-timber"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 hover:text-wine-700 transition-colors"
                >
                  Browse all species <ArrowRight size={13} />
                </Link>
                <span className="text-char-300">·</span>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 hover:text-wine-700 transition-colors"
                >
                  Browse products <ArrowRight size={13} />
                </Link>
                <span className="text-char-300">·</span>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 hover:text-wine-700 transition-colors"
                >
                  Visit the yard <ArrowRight size={13} />
                </Link>
              </div>

              <p className="mt-10 text-[12px] text-char-500 italic max-w-md">
                Tip: search by species name (Latin or common), product type, use
                case, or grain description.
              </p>
            </div>
          )}

          {/* No results */}
          {q.trim() && total === 0 && (
            <div className="text-center py-16">
              <p className="font-display text-3xl text-char-900">
                Nothing in the yard matches that.
              </p>
              <p className="mt-3 text-char-500 text-[14px]">
                Try: mukwa, teak flooring, decking, grain — or ask us directly.
              </p>
              <a
                href={noResultsWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] text-white text-[12px] tracking-[0.14em] uppercase hover:bg-[#1fb058] transition-colors"
              >
                <WhatsappLogo size={14} weight="fill" />
                Can't find it? Message the mill
                <ArrowRight size={14} />
              </a>
            </div>
          )}

          {/* Results */}
          {q.trim() && total > 0 && (
            <div className="space-y-12">
              <p className="text-[11px] tracking-[0.18em] uppercase text-char-500">
                {total} {total === 1 ? 'result' : 'results'}
              </p>

              {/* Species results */}
              {speciesHits.length > 0 && (
                <section>
                  <SectionHeading
                    icon={Tree}
                    label="Species"
                    count={speciesHits.length}
                  />
                  <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {speciesHits.map((s) => (
                      <Link
                        key={s.slug}
                        to="/our-timber"
                        onClick={onClose}
                        className="group block bg-cream-100 border border-cream-300 hover:border-wine-700 transition-colors"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                          <img
                            src={s.image}
                            alt={s.imageAlt}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-accent text-base text-wine-700 leading-none">
                            {s.tagline}
                          </p>
                          <h4 className="font-display text-xl text-char-900 mt-1">
                            {s.name}
                          </h4>
                          <p className="text-[11px] italic text-char-500 mt-0.5">
                            {s.latin}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Product results */}
              {productHits.length > 0 && (
                <section>
                  <SectionHeading
                    icon={Package}
                    label="Products"
                    count={productHits.length}
                  />
                  <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {productHits.map((p) => (
                      <Link
                        key={p.slug}
                        to="/products"
                        onClick={onClose}
                        className="group block bg-cream-100 border border-cream-300 hover:border-wine-700 transition-colors"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                          <img
                            src={p.image}
                            alt={p.imageAlt}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                          <div className="absolute top-3 left-3 bg-cream-50/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-wine-700">
                            {p.lead}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-display text-xl text-char-900 leading-tight">
                            {p.name}
                          </h4>
                          <p className="text-[12.5px] text-char-500 mt-1.5 line-clamp-2">
                            {p.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Page results */}
              {pageHits.length > 0 && (
                <section>
                  <SectionHeading
                    icon={FileText}
                    label="Pages"
                    count={pageHits.length}
                  />
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    {pageHits.map((p) => (
                      <Link
                        key={p.slug}
                        to={p.to}
                        onClick={onClose}
                        className="group flex items-start gap-4 p-4 bg-cream-100 border border-cream-300 hover:border-wine-700 transition-colors"
                      >
                        <div className="shrink-0 h-10 w-10 bg-wine-700 text-cream-50 flex items-center justify-center group-hover:bg-brass-500 transition-colors">
                          <FileText size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg text-char-900 leading-tight flex items-center gap-2">
                            {p.name}
                            <ArrowRight
                              size={14}
                              className="text-char-400 group-hover:text-wine-700 group-hover:translate-x-1 transition-all"
                            />
                          </h4>
                          <p className="text-[12.5px] text-char-500 mt-1 leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Persistent message-the-mill CTA at bottom */}
              <div className="pt-6 border-t border-cream-300 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[13px] text-char-500 italic">
                  Not finding the exact species or cut?
                </p>
                <a
                  href={noResultsWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-wine-700 border-b border-wine-700 pb-0.5 hover:text-brass-500 hover:border-brass-500 transition-colors"
                >
                  <WhatsappLogo size={13} weight="fill" />
                  Message the mill
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, label, count }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-7 w-7 items-center justify-center bg-wine-700 text-cream-50">
        <Icon size={13} weight="fill" />
      </span>
      <p className="text-[11px] tracking-[0.22em] uppercase text-char-700 font-medium">
        {label}
      </p>
      <span className="text-[11px] text-char-400">·</span>
      <span className="text-[11px] text-char-500">{count}</span>
    </div>
  );
}
