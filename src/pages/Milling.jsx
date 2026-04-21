import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo, Ruler, Gauge, Drop } from '@phosphor-icons/react';
import { process, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import ProcessStep from '../components/ProcessStep';

const capabilities = [
  {
    icon: Ruler,
    title: 'Cutting capacity',
    specs: [
      ['Max log diameter', '1,100 mm'],
      ['Max log length', '6.0 m'],
      ['Sawn thickness', '12 – 100 mm'],
      ['Sawn width', '50 – 450 mm'],
    ],
  },
  {
    icon: Drop,
    title: 'Kiln specification',
    specs: [
      ['Kiln chambers', '2 × 35 m³'],
      ['Target moisture', '10 – 12%'],
      ['Pre-seasoning', '12 – 24 months'],
      ['Grading standard', 'House + SANS 1783'],
    ],
  },
  {
    icon: Gauge,
    title: 'Monthly throughput',
    specs: [
      ['Rough sawn', '85 m³/month'],
      ['Dimensioned', '40 m³/month'],
      ['Finished doors', '30 – 40 leaves'],
      ['Flooring prepared', '400 m²/month'],
    ],
  },
];

export default function Milling() {
  return (
    <PageTransition>
      <SEO
        title="Milling & Processing — How We Turn Logs Into Boards · Lupane Timbers"
        description="The Lupane milling process — source, mill, dry, grade, ship. Band-mill capacity, kiln specs and throughput for Zimbabwean hardwood."
      />

      <PageHero
        eyebrow="Inside the mill"
        title="Band saw,"
        accent="hand grader, kiln."
        sub="The mill in Lupane is where every board starts. A modern bandsaw, two heat-pump kilns and a joinery workshop — run by a team that has been sawing for decades."
        crumbs={[{ label: 'Milling' }]}
        image="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Five-step process */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-28">
          <SectionReveal className="max-w-3xl mb-14">
            <p className="font-accent text-2xl text-wine-700 mb-2">the method</p>
            <h2 className="font-display text-4xl sm:text-5xl text-char-900 leading-[1.03]">
              Five steps, no shortcuts.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-0">
            {process.map((step, i) => (
              <SectionReveal
                key={step.step}
                delay={i * 80}
                className={`relative py-10 ${
                  i < process.length - 1 ? 'lg:border-b border-cream-300' : ''
                } ${i === 0 ? 'lg:border-t border-cream-300' : ''}`}
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <p className="font-display text-7xl lg:text-8xl text-wine-700 leading-none">
                      {step.step}
                    </p>
                  </div>
                  <div className="lg:col-span-9 lg:pl-6">
                    <ProcessStep step={step} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-timber-900 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 wood-grain opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24">
          <SectionReveal className="max-w-3xl mb-12">
            <p className="font-accent text-2xl text-brass-300 mb-2">capability</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.03]">
              What the mill can handle.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <SectionReveal
                  key={c.title}
                  delay={i * 80}
                  className="bg-char-900/60 border border-cream-50/10 p-7"
                >
                  <div className="h-11 w-11 bg-brass-400 text-char-900 flex items-center justify-center mb-6">
                    <Icon size={20} weight="regular" />
                  </div>
                  <h3 className="font-display text-2xl text-cream-50 mb-5">
                    {c.title}
                  </h3>
                  <dl className="space-y-2.5 text-sm">
                    {c.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between gap-4 border-b border-cream-50/10 pb-2"
                      >
                        <dt className="text-cream-200/65 text-[12.5px] tracking-wide">
                          {k}
                        </dt>
                        <dd className="text-cream-50 font-medium text-[13px] text-right">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA panel */}
      <section className="bg-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80"
                  alt="Hands of a sawyer examining the surface of a freshly planed hardwood board"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={120}>
              <p className="font-accent text-2xl text-wine-700 mb-2">
                quality assurance
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-char-900 leading-[1.03]">
                Hand-graded, moisture-checked, stamped.
              </h2>
              <div className="mt-8 space-y-5 text-[15px] text-char-700 leading-relaxed">
                <p>
                  Every hardwood board that leaves the Lupane mill passes across the grading table. Our graders are looking for five things: moisture content, straightness, check and shake, knot pattern, and heart-sap balance.
                </p>
                <p>
                  Pine is graded to SANS 1783 and stamped accordingly — Grades 5, 7 and 10 available for structural work. Graded pine carries a brand so your engineer knows exactly what's in the roof.
                </p>
                <p>
                  Every consignment leaves with a species declaration, moisture certificate, and Forestry Commission transit paperwork. No surprises at the gate.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-wine-700 text-cream-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.03] max-w-2xl mx-auto">
            Want a tour of the mill?
          </h2>
          <p className="mt-4 text-cream-100/85 max-w-xl mx-auto">
            We welcome architects, QSs and trade buyers to Lupane. A day's notice — and a 4x4 if it's raining.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref('Hello Lupane — I\u0027d like to arrange a mill tour.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brass-400 text-char-900 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold hover:bg-brass-300 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Arrange a visit
            </a>
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 border border-cream-50/80 text-cream-50 px-8 py-4 text-[12.5px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-wine-700 transition-colors"
            >
              Our sustainability
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
