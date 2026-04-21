import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  WhatsappLogo,
  Quotes,
  Star,
  TreeEvergreen,
  Wrench,
  CheckCircle,
  Truck,
  ArrowUpRight,
  MapPin,
  Tree,
} from '@phosphor-icons/react';
import {
  hero,
  species,
  products,
  process,
  reviews,
  features,
  story,
  business,
  waHref,
} from '../data/siteData';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';

const FEATURE_ICONS = { TreeEvergreen, Wrench, CheckCircle, Truck };

export default function Home() {
  const featuredSpecies = species.slice(0, 4);
  const featuredProducts = products.slice(0, 4);

  return (
    <PageTransition>
      <SEO
        title="Lupane Timbers — Indigenous Zimbabwean Hardwood · Mukwa · Teak · Mopane"
        description={hero.sub}
      />

      {/* ============ HERO ============ */}
      <section className="relative bg-char-900 text-cream-50 overflow-hidden min-h-[calc(100svh-5rem)] flex items-center">
        <img
          src={hero.heroImage}
          alt={hero.heroAlt}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-char-900/92 via-char-900/75 to-char-900/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-char-900/70 via-transparent to-transparent" />
        <div className="grain" />

        <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-10 py-10 sm:py-14 lg:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-px w-10 bg-brass-400" />
              <p className="font-accent text-lg sm:text-xl text-brass-300">
                {hero.eyebrow}
              </p>
            </div>

            <h1
              className="font-display leading-[0.98] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 6.2vw, 4.75rem)' }}
            >
              {hero.headline}
              <span className="block italic text-brass-300 mt-1 sm:mt-2">
                {hero.headlineAccent}
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-cream-200/85 text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-xl text-pretty">
              {hero.sub}
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2 bg-brass-400 text-char-900 px-7 py-3.5 min-h-[44px] text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-brass-300 transition-colors"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={14} weight="bold" />
              </Link>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-cream-50/80 text-cream-50 px-7 py-3.5 min-h-[44px] text-[12.5px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-char-900 transition-colors"
              >
                <WhatsappLogo size={15} weight="fill" />
                {hero.ctaSecondary.label}
              </a>
            </div>

            <dl className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6 max-w-2xl border-t border-cream-50/15 pt-6">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-xl sm:text-2xl lg:text-3xl text-cream-50">
                    {s.value}
                  </dt>
                  <dd className="text-[10px] sm:text-[10.5px] tracking-[0.18em] uppercase text-cream-200/70 mt-1">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ FEATURES STRIP ============ */}
      <section className="bg-cream-100 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((f) => {
              const Icon = FEATURE_ICONS[f.icon] || TreeEvergreen;
              return (
                <SectionReveal key={f.title} className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 bg-wine-700 text-cream-50 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-display text-[15px] text-char-900 leading-tight">
                      {f.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] text-char-500 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STORY / INTRO ============ */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-accent text-2xl text-wine-700 mb-2">
                {story.eyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-char-900 leading-[1.03] text-balance">
                {story.title}
              </h2>
              <div className="mt-8 flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-char-500">
                <span>Est. {business.established}</span>
                <span className="h-px w-10 bg-wine-700" />
                <span>{business.mill}</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[15.5px] text-char-700 leading-[1.75] text-pretty lg:pt-3">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-wine-700 font-medium hover:text-wine-600 text-sm pt-3 group"
              >
                More about the yard
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPECIES SHOWCASE ============ */}
      <section className="relative bg-timber-900 text-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 wood-grain opacity-60 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28">
          <SectionReveal className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-accent text-2xl text-brass-300 mb-2">our timber</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance">
              Seven species.
              <span className="block italic text-brass-300">Chosen with care.</span>
            </h2>
            <p className="mt-6 text-cream-200/80 leading-relaxed max-w-xl">
              We specialise in indigenous hardwoods — species that grew where our mill now stands. These are the timbers our clients travel to us for.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredSpecies.map((s, i) => (
              <SectionReveal
                key={s.slug}
                delay={i * 80}
                className="group relative block overflow-hidden bg-char-900"
              >
                <Link to="/our-timber" className="block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-char-900/95 via-char-900/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="font-accent text-lg text-brass-300 mb-1">
                        {s.tagline}
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl text-cream-50 leading-tight">
                        {s.name}
                      </h3>
                      <p className="mt-1 italic text-cream-200/70 text-xs">
                        {s.latin}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] tracking-[0.18em] uppercase text-brass-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/our-timber"
              className="inline-flex items-center gap-2 border border-cream-50/30 text-cream-50 px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-brass-400 hover:text-char-900 hover:border-brass-400 transition-colors"
            >
              See all seven species
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MILLING PROCESS ============ */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <SectionReveal className="max-w-3xl mb-12 sm:mb-14">
            <p className="font-accent text-2xl text-wine-700 mb-2">the process</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-char-900 leading-[1.03] text-balance">
              From standing tree
              <span className="block italic text-wine-700">to loaded flatbed.</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6">
            {process.map((p, i) => (
              <SectionReveal
                key={p.step}
                delay={i * 80}
                className="relative"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-5xl text-wine-700 leading-none">
                    {p.step}
                  </span>
                  <span className="h-px flex-1 bg-wine-700/20" />
                </div>
                <h3 className="font-display text-xl text-char-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-[13.5px] text-char-500 leading-relaxed text-pretty">
                  {p.blurb}
                </p>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/milling"
              className="inline-flex items-center gap-2 text-wine-700 font-medium hover:text-wine-600 text-sm group"
            >
              See the full milling & processing journey
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS PREVIEW ============ */}
      <section className="relative bg-cream-100 border-y border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <SectionReveal className="max-w-3xl mb-12 sm:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-accent text-2xl text-wine-700 mb-2">the yard</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-char-900 leading-[1.03]">
                What we supply.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex self-start sm:self-end items-center gap-2 text-wine-700 font-medium hover:text-wine-600 text-sm group"
            >
              Full catalogue
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="relative bg-char-900 text-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 wood-grain opacity-30 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28">
          <SectionReveal className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-accent text-2xl text-brass-300 mb-2">on record</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance">
              Joiners, architects and builders
              <span className="block italic text-brass-300">who know the wood.</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <SectionReveal
                key={r.name}
                delay={i * 100}
                className="relative bg-char-800/60 border border-cream-50/10 p-7 sm:p-8 flex flex-col"
              >
                <Quotes
                  size={28}
                  weight="fill"
                  className="text-brass-400 mb-5 opacity-70"
                />
                <p className="text-[15px] leading-[1.75] text-cream-100/90 mb-6 text-pretty">
                  "{r.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-cream-50/10">
                  <div className="h-11 w-11 bg-brass-400 text-char-900 flex items-center justify-center font-display text-sm shrink-0">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-[15px] text-cream-50">
                      {r.name}
                    </p>
                    <p className="text-[11.5px] text-cream-200/65 truncate">
                      {r.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mt-4">
                  {Array.from({ length: r.rating }).map((_, i2) => (
                    <Star
                      key={i2}
                      size={12}
                      weight="fill"
                      className="text-brass-300"
                    />
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA — with image background ============ */}
      <section className="relative bg-char-900 text-cream-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542044801-30d3e45ae49a?auto=format&fit=crop&w=1800&q=80"
          alt="Macro grain of planed hardwood catching the light"
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-char-900/70" />
        <div className="grain" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-accent text-2xl text-brass-300 mb-3">
              come to the yard
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance">
              Bring your drawing.
              <span className="block italic text-brass-300">Touch the wood.</span>
            </h2>
            <p className="mt-6 text-cream-200/85 text-base lg:text-lg leading-relaxed max-w-xl text-pretty">
              We're at 25 Connaught Road in Avondale, open six days a week. Bring your cutting list, a sample, or just a reference photo — we'll show you what we have in stock and talk you through the options.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brass-400 text-char-900 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-brass-300 transition-colors"
              >
                <MapPin size={14} weight="bold" />
                Visit the yard
              </Link>
              <a
                href={waHref('Hi Lupane — I\u0027d like to request a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-cream-50/70 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-char-900 transition-colors"
              >
                <WhatsappLogo size={15} weight="fill" />
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
