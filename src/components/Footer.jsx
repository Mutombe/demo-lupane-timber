import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  TreeEvergreen,
} from '@phosphor-icons/react';
import { business, waHref, species, products } from '../data/siteData';

export default function Footer() {
  const wa = waHref('Hello Lupane Timbers — enquiring from the footer.');

  return (
    <footer className="relative bg-char-900 text-cream-100 mt-16 sm:mt-24">
      <div className="grain" />

      {/* Brass hairline accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brass-400 to-transparent opacity-60" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center" aria-label={business.name}>
              <div className="inline-flex items-center justify-center bg-cream-50 px-4 py-3">
                <img
                  src={business.logo}
                  alt={business.name}
                  className="h-10 sm:h-12 w-auto"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            </Link>
            <p className="text-sm text-cream-200/80 leading-relaxed max-w-sm">
              {business.tagline} A working sawmill in the Lupane forests, a finishing workshop in Harare — everything in between is ours.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={business.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 border border-cream-100/15 flex items-center justify-center text-cream-100 hover:bg-brass-500 hover:text-char-900 hover:border-brass-500 transition-colors"
              >
                <FacebookLogo size={16} />
              </a>
              <a
                href={business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 border border-cream-100/15 flex items-center justify-center text-cream-100 hover:bg-brass-500 hover:text-char-900 hover:border-brass-500 transition-colors"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 border border-cream-100/15 flex items-center justify-center text-cream-100 hover:bg-brass-500 hover:text-char-900 hover:border-brass-500 transition-colors"
              >
                <WhatsappLogo size={16} />
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2 text-[11px] tracking-[0.18em] uppercase text-brass-300">
              <TreeEvergreen size={13} />
              <span>Two replanted for one felled</span>
            </div>
          </div>

          {/* Timber */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-cream-50 mb-5">
              Our Timber
            </h4>
            <ul className="space-y-2.5 text-sm">
              {species.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/our-timber"
                    className="text-cream-200/75 hover:text-brass-300 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-cream-50 mb-5">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products"
                    className="text-cream-200/75 hover:text-brass-300 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-4">
            <h4 className="font-display text-base text-cream-50 mb-5">
              Visit the yard
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-brass-400 shrink-0" />
                <span>{business.addressFull}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-brass-400 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}<br />
                  Sat {business.hours.saturday}<br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-brass-400 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-brass-300"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-brass-400 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-brass-300 break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-7 sm:pt-8 border-t border-cream-100/12 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-cream-300/70 text-center sm:text-left">
          <p>© 2026 {business.name} · Harare, Zimbabwe. All rights reserved.</p>
          <p>{business.website}</p>
        </div>

        <p className="mt-4 text-center text-[11px] text-cream-300/60 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass-300 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
