import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react';
import { species, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SpeciesCard from '../components/SpeciesCard';

export default function OurTimber() {
  return (
    <PageTransition>
      <SEO
        title="Our Timber — Mukwa, Zimbabwean Teak, Mopane · Lupane Timbers"
        description="Indigenous Zimbabwean hardwood species — Mukwa, Zimbabwean Teak, Mopane, Mahogany, Msasa, African Blackwood and plantation Pine. Specs, grain and typical uses."
      />

      <PageHero
        eyebrow="Species library"
        title="Seven timbers."
        accent="Each with a story."
        sub="Every species we stock grows indigenously on Zimbabwean soil — except for our commercial pine, which we plantation-source from local growers. Here is what each wood is, how it works and what it does best."
        crumbs={[{ label: 'Our Timber' }]}
        image={species[0].image}
      />

      {/* Species list */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28 space-y-24 sm:space-y-32">
          {species.map((s, i) => (
            <SectionReveal key={s.slug}>
              <SpeciesCard species={s} reverse={i % 2 === 1} index={i} />
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Density chart / comparison */}
      <section className="bg-cream-100 border-y border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20">
          <SectionReveal className="max-w-2xl mb-10">
            <p className="font-accent text-2xl text-wine-700 mb-2">by the numbers</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-char-900 leading-[1.03]">
              Species at a glance.
            </h2>
          </SectionReveal>

          <div className="overflow-x-auto -mx-5 px-5 lg:mx-0 lg:px-0">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="text-left text-[11px] tracking-[0.16em] uppercase text-char-500 border-b-2 border-char-800">
                  <th className="py-3 pr-4 font-normal">Species</th>
                  <th className="py-3 pr-4 font-normal">Latin</th>
                  <th className="py-3 pr-4 font-normal">Density</th>
                  <th className="py-3 pr-4 font-normal">Hardness</th>
                  <th className="py-3 pr-4 font-normal">Durability</th>
                </tr>
              </thead>
              <tbody>
                {species.map((s) => (
                  <tr key={s.slug} className="border-b border-cream-300 hover:bg-cream-50">
                    <td className="py-4 pr-4 font-display text-lg text-wine-700">
                      {s.name}
                    </td>
                    <td className="py-4 pr-4 italic text-sm text-char-500">
                      {s.latin}
                    </td>
                    <td className="py-4 pr-4 text-sm text-char-800 font-medium">
                      {s.properties[0].value}
                    </td>
                    <td className="py-4 pr-4 text-sm text-char-800">
                      {s.properties[1].value}
                    </td>
                    <td className="py-4 pr-4 text-sm text-char-800">
                      {s.properties[3].value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-wine-700 text-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance max-w-3xl mx-auto">
            Not sure which species fits your project?
          </h2>
          <p className="mt-5 text-cream-100/80 max-w-xl mx-auto leading-relaxed">
            Send us your drawing or a photo. We'll suggest the species that balances budget, appearance and longevity — honestly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref('Hi Lupane — can you help me choose the right species for my project?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brass-400 text-char-900 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-brass-300 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Ask on WhatsApp
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-cream-50/80 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-wine-700 transition-colors"
            >
              Browse products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
