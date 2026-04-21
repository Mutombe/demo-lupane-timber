import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  WhatsappLogo,
  TreeEvergreen,
  Certificate,
  Leaf,
  Handshake,
  Recycle,
  Shield,
} from '@phosphor-icons/react';
import { sustainability, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

const ICONS = { TreeEvergreen, Certificate, Leaf, Handshake, Recycle, Shield };

export default function Sustainability() {
  return (
    <PageTransition>
      <SEO
        title="Sustainability — Ethical Indigenous Hardwood · Lupane Timbers"
        description="Our replanting commitment, Forestry Commission compliance, community concessions, slow-seasoning and waste-free mill. Why we stock only legally sourced indigenous Zimbabwean timber."
      />

      <PageHero
        eyebrow="The long view"
        title="Eighty years to grow."
        accent="Two years to season."
        sub="Indigenous hardwood is not a renewable commodity in the modern sense — it's a generational trust. Here is how we honour that at Lupane."
        crumbs={[{ label: 'Sustainability' }]}
        image="https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Key stat panel */}
      <section className="bg-forest-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <SectionReveal>
              <p className="font-display text-6xl sm:text-7xl text-brass-300 leading-none">
                2 : 1
              </p>
              <p className="mt-3 text-[11.5px] tracking-[0.18em] uppercase text-cream-200/75">
                Saplings replanted per tree felled
              </p>
            </SectionReveal>
            <SectionReveal delay={80}>
              <p className="font-display text-6xl sm:text-7xl text-brass-300 leading-none">
                100%
              </p>
              <p className="mt-3 text-[11.5px] tracking-[0.18em] uppercase text-cream-200/75">
                Forestry Commission permitted
              </p>
            </SectionReveal>
            <SectionReveal delay={160}>
              <p className="font-display text-6xl sm:text-7xl text-brass-300 leading-none">
                0
              </p>
              <p className="mt-3 text-[11.5px] tracking-[0.18em] uppercase text-cream-200/75">
                Tonnes of sawdust sent to landfill
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <SectionReveal className="max-w-3xl mb-14">
            <p className="font-accent text-2xl text-wine-700 mb-2">our principles</p>
            <h2 className="font-display text-4xl sm:text-5xl text-char-900 leading-[1.03]">
              Six commitments we keep.
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {sustainability.map((p, i) => {
              const Icon = ICONS[p.icon] || Leaf;
              return (
                <SectionReveal
                  key={p.title}
                  delay={i * 80}
                  className="group p-7 sm:p-8 bg-cream-100 border border-cream-300 hover:border-forest-400 transition-colors"
                >
                  <div className="h-12 w-12 bg-forest-600 text-cream-50 flex items-center justify-center mb-6 group-hover:bg-wine-700 transition-colors">
                    <Icon size={22} weight="regular" />
                  </div>
                  <h3 className="font-display text-2xl text-char-900 leading-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-char-700 leading-relaxed text-pretty">
                    {p.body}
                  </p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wide forest quote */}
      <section className="relative bg-char-900 text-cream-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1800&q=80"
          alt="A mature indigenous forest in Matabeleland"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-char-900/90 to-char-900/50" />
        <div className="grain" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-accent text-3xl text-brass-300 mb-6">
              the way we see it
            </p>
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-cream-50 text-balance">
              "A mukwa tree takes eighty years to reach milling size. If we are not prepared to plant two for every one we fell, we have no business with the forest at all."
            </blockquote>
            <footer className="mt-8 text-[12px] tracking-[0.18em] uppercase text-brass-300">
              — Mthandazo Ncube · Founder, Lupane Timbers
            </footer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 border-t border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-char-900 leading-[1.03] max-w-2xl mx-auto">
            Want to see the concession?
          </h2>
          <p className="mt-4 text-char-500 max-w-xl mx-auto">
            We run quarterly site visits for architects, specifiers and larger trade accounts. Transparency is the point.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref('Hello Lupane — I\u0027d like to join a concession site visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-600 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-forest-800 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Request a visit
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-char-800 text-char-800 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-char-800 hover:text-cream-50 transition-colors"
            >
              More about us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
