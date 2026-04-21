import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo, Quotes, Star } from '@phosphor-icons/react';
import { story, reviews, business, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About — Lupane Timbers · Three Generations of Sawyers"
        description="Lupane Timbers began in 2011 as a one-bench mill in Matabeleland North and is now Zimbabwe's specialist indigenous hardwood supplier. Read the story."
      />

      <PageHero
        eyebrow="The yard"
        title="Three generations,"
        accent="one species library."
        sub="Lupane Timbers began in 2011 in the village of Lupane, Matabeleland North. What follows is our story — in our own words."
        crumbs={[{ label: 'About' }]}
        image={story.image}
      />

      {/* Story */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <p className="font-accent text-2xl text-wine-700 mb-2">
                {story.eyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-char-900 leading-[1.03] text-balance">
                {story.title}
              </h2>
              <dl className="mt-10 grid grid-cols-2 gap-y-7 max-w-sm">
                {story.pillars.map((p) => (
                  <div key={p.label} className="border-l-2 border-wine-700 pl-3">
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-char-500">
                      {p.label}
                    </dt>
                    <dd className="font-display text-lg text-char-900 mt-1">
                      {p.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15.5px] text-char-700 leading-[1.78] text-pretty">
              {story.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-[17px] text-char-900' : ''}>
                  {i === 0 && (
                    <span className="font-display text-5xl float-left mr-3 mt-1 text-wine-700 leading-none">
                      {p.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? p.slice(1) : p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / ethos band */}
      <section className="bg-timber-900 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 wood-grain opacity-30 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24">
          <div className="grid lg:grid-cols-3 gap-10 sm:gap-12">
            <div>
              <p className="font-display text-5xl text-brass-300 leading-none">01</p>
              <h3 className="mt-5 font-display text-2xl text-cream-50">
                Patience over speed.
              </h3>
              <p className="mt-3 text-[14px] text-cream-200/75 leading-relaxed">
                A mukwa board that is rushed through the kiln will cup within six months. We don't ship boards until they are ready — even if it means disappointing an eager client.
              </p>
            </div>
            <div>
              <p className="font-display text-5xl text-brass-300 leading-none">02</p>
              <h3 className="mt-5 font-display text-2xl text-cream-50">
                Honesty over yield.
              </h3>
              <p className="mt-3 text-[14px] text-cream-200/75 leading-relaxed">
                Heart grades are charged as heart. Sap is charged as sap. You never receive an upgrade by accident — and we will never quietly downgrade.
              </p>
            </div>
            <div>
              <p className="font-display text-5xl text-brass-300 leading-none">03</p>
              <h3 className="mt-5 font-display text-2xl text-cream-50">
                Legal, always.
              </h3>
              <p className="mt-3 text-[14px] text-cream-200/75 leading-relaxed">
                Not a single board in the yard is there without Forestry Commission paperwork. If you ask to see the trail, we will show it to you — cheerfully, in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews wall */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <SectionReveal className="max-w-3xl mb-12">
            <p className="font-accent text-2xl text-wine-700 mb-2">said about us</p>
            <h2 className="font-display text-4xl sm:text-5xl text-char-900 leading-[1.03]">
              In the words of the trade.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {reviews.map((r, i) => (
              <SectionReveal
                key={r.name}
                delay={i * 80}
                className="bg-cream-100 border border-cream-300 p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, ii) => (
                    <Star key={ii} size={14} weight="fill" className="text-brass-500" />
                  ))}
                </div>
                <Quotes size={24} weight="fill" className="text-wine-700/40 mb-4" />
                <p className="text-[15px] leading-[1.75] text-char-800 mb-6 text-pretty">
                  "{r.quote}"
                </p>
                <div className="mt-auto pt-5 border-t border-cream-300 flex items-center gap-3">
                  <div className="h-11 w-11 bg-wine-700 text-cream-50 flex items-center justify-center font-display text-sm shrink-0">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-[15px] text-char-900">
                      {r.name}
                    </p>
                    <p className="text-[11.5px] text-char-500">{r.role}</p>
                    <p className="text-[10.5px] text-char-500/75 mt-0.5 italic">
                      Project: {r.project}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-wine-700 text-cream-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.03] max-w-3xl mx-auto">
            Come and touch the wood.
          </h2>
          <p className="mt-4 text-cream-100/85 max-w-xl mx-auto">
            {business.addressFull}. Open Monday to Saturday — Mthandazo or one of the team will walk you through.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brass-400 text-char-900 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-brass-300 transition-colors"
            >
              Directions & hours
              <ArrowRight size={14} />
            </Link>
            <a
              href={waHref('Hi Lupane — I\u0027d like to visit the yard.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream-50/80 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-wine-700 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Say hello
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
