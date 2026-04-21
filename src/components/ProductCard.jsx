import React from 'react';
import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react';
import { waHref } from '../data/siteData';

export default function ProductCard({ product }) {
  const msg = `Hi Lupane, I'd like a quote on ${product.name}.`;
  return (
    <article className="group bg-cream-50 border border-cream-300 flex flex-col overflow-hidden transition-colors hover:border-wine-700">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 bg-cream-50/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-wine-700">
          {product.lead}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="font-display text-xl text-char-900 mb-1.5">
          {product.name}
        </h3>
        <p className="text-sm text-char-500 leading-relaxed mb-4">
          {product.summary}
        </p>

        <dl className="mb-5 space-y-1.5 text-[12px]">
          <div className="flex justify-between border-b border-cream-300 pb-1.5">
            <dt className="text-char-500 tracking-wide">Thickness</dt>
            <dd className="text-char-800 font-medium">{product.specs.thickness}</dd>
          </div>
          <div className="flex justify-between border-b border-cream-300 pb-1.5">
            <dt className="text-char-500 tracking-wide">Width</dt>
            <dd className="text-char-800 font-medium">{product.specs.width}</dd>
          </div>
          <div className="flex justify-between pb-1.5">
            <dt className="text-char-500 tracking-wide">Length</dt>
            <dd className="text-char-800 font-medium">{product.specs.length}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.species.map((s) => (
            <span
              key={s}
              className="text-[10px] tracking-wide uppercase px-2 py-1 bg-timber-50 text-timber-700 border border-timber-200"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={waHref(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-wine-700 text-cream-50 px-5 py-3 text-[12px] tracking-[0.14em] uppercase hover:bg-wine-600 transition-colors"
        >
          <WhatsappLogo size={14} weight="fill" />
          Enquire
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
