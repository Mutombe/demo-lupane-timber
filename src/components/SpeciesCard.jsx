import React from 'react';
import { WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react';
import { waHref } from '../data/siteData';

export default function SpeciesCard({ species, reverse = false, index = 0 }) {
  const stockMsg = `Hi Lupane, do you have ${species.name} in stock?`;
  return (
    <article className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
      <div
        className={`lg:col-span-6 relative ${reverse ? 'lg:order-2' : ''}`}
      >
        <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-cream-200">
          <img
            src={species.image}
            alt={species.imageAlt}
            loading="lazy"
            decoding="async"
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-char-900/80 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase text-cream-50">
            Species {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className={`lg:col-span-6 ${reverse ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
        <p className="font-accent text-xl sm:text-2xl text-wine-700 mb-2">
          {species.tagline}
        </p>
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-char-900 leading-[1.05]">
          {species.name}
        </h3>
        <p className="mt-1 italic text-char-500 text-sm">
          <span className="font-display">{species.latin}</span>
          <span className="mx-2 text-cream-400">·</span>
          {species.altNames}
        </p>

        <p className="mt-6 text-char-700 leading-relaxed text-[15px] text-pretty">
          {species.grain}
        </p>
        <p className="mt-4 text-char-700 leading-relaxed text-[15px] text-pretty">
          {species.why}
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-y-4 gap-x-6 max-w-lg">
          {species.properties.map((p) => (
            <div key={p.label} className="border-l-2 border-wine-700 pl-3">
              <dt className="text-[10px] tracking-[0.18em] uppercase text-char-500">
                {p.label}
              </dt>
              <dd className="font-display text-base text-char-900 mt-0.5">
                {p.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 pt-5 border-t border-cream-300">
          <p className="text-[11px] tracking-[0.16em] uppercase text-char-500 mb-1.5">
            Typical uses
          </p>
          <p className="text-[14px] text-char-700 leading-relaxed">
            {species.uses}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={waHref(stockMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${species.name} stock on WhatsApp`}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 text-[11.5px] tracking-[0.14em] uppercase hover:bg-[#1fb058] transition-colors"
          >
            <WhatsappLogo size={14} weight="fill" />
            Ask about stock
            <ArrowUpRight size={13} />
          </a>
          <span className="text-[12px] text-char-500 italic">
            Usually in, sometimes cut to order.
          </span>
        </div>
      </div>
    </article>
  );
}
