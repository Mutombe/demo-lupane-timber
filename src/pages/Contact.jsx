import React, { useState } from 'react';
import {
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  Phone,
  Clock,
  PaperPlaneTilt,
  CheckCircle,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { business, waHref, mailHref, mapEmbed } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'General enquiry',
    message: '',
  });
  const [channel, setChannel] = useState('whatsapp'); // 'whatsapp' | 'email'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const composeMessage = () => {
    return [
      `Hello Lupane Timbers,`,
      '',
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : '',
      form.phone ? `Phone: ${form.phone}` : '',
      form.email ? `Email: ${form.email}` : '',
      `Interest: ${form.interest}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please fill in your name and a short message.');
      return;
    }

    const message = composeMessage();
    if (channel === 'whatsapp') {
      window.open(waHref(message), '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = mailHref(`Enquiry: ${form.interest}`, message);
    }
    toast.success(
      channel === 'whatsapp'
        ? 'Opening WhatsApp — we reply within a few hours.'
        : 'Opening your email — we reply within 24 hours.'
    );
  };

  const interests = [
    'General enquiry',
    'Sawn timber quote',
    'Doors & windows',
    'Flooring / decking',
    'Custom milling',
    'Mill tour',
  ];

  return (
    <PageTransition>
      <SEO
        title="Contact — Lupane Timbers · 25 Connaught Road, Avondale, Harare"
        description="Visit our yard at 25 Connaught Road, Avondale. WhatsApp +263 772 410 415 or email lupanesales@hotali.co.zw."
      />

      <PageHero
        eyebrow="Get in touch"
        title="Come to the yard,"
        accent="or send the drawing."
        sub="We're at 25 Connaught Road in Avondale, Harare — six days a week. Message on WhatsApp is fastest; email if the project is a detailed one."
        crumbs={[{ label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1544691560-fc2053d97726?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Quick contact cards */}
      <section className="bg-cream-100 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 sm:py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: WhatsappLogo,
                title: 'WhatsApp',
                body: business.phone,
                href: waHref('Hello Lupane — enquiring from the website.'),
                external: true,
              },
              {
                icon: Phone,
                title: 'Call',
                body: business.phone,
                href: `tel:${business.phone.replace(/\s/g, '')}`,
                external: false,
              },
              {
                icon: EnvelopeSimple,
                title: 'Email',
                body: business.email,
                href: `mailto:${business.email}`,
                external: false,
              },
              {
                icon: MapPin,
                title: 'Visit',
                body: business.address,
                href: 'https://www.google.com/maps?q=25+Connaught+Road,+Avondale,+Harare',
                external: true,
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="group block bg-cream-50 border border-cream-300 p-5 sm:p-6 hover:border-wine-700 transition-colors"
                >
                  <div className="h-10 w-10 bg-wine-700 text-cream-50 flex items-center justify-center mb-4 group-hover:bg-brass-500 transition-colors">
                    <Icon size={18} weight="regular" />
                  </div>
                  <p className="text-[10.5px] tracking-[0.18em] uppercase text-char-500">
                    {c.title}
                  </p>
                  <p className="mt-1 font-display text-[15px] text-char-900 break-words">
                    {c.body}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <SectionReveal>
                <p className="font-accent text-2xl text-wine-700 mb-2">
                  send a message
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-char-900 leading-[1.03]">
                  Tell us what you're working on.
                </h2>
                <p className="mt-4 text-char-500 text-[15px] leading-relaxed max-w-lg">
                  Drawings, photos and cutting lists welcome — attach them on WhatsApp after you hit send.
                </p>
              </SectionReveal>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Your name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                  />
                  <Field
                    label="Company (optional)"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] tracking-[0.18em] uppercase text-char-500 mb-2">
                    What are you enquiring about?
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3.5 text-[14.5px] text-char-900 focus:outline-none focus:border-wine-700 transition-colors"
                  >
                    {interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10.5px] tracking-[0.18em] uppercase text-char-500 mb-2">
                    Your message <span className="text-wine-700">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Species, quantity, sizes, delivery address, timeline..."
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3.5 text-[14.5px] text-char-900 focus:outline-none focus:border-wine-700 transition-colors resize-none"
                  />
                </div>

                {/* Channel toggle */}
                <div>
                  <p className="text-[10.5px] tracking-[0.18em] uppercase text-char-500 mb-3">
                    Send via
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setChannel('whatsapp')}
                      className={`flex items-center justify-center gap-2 px-4 py-3 border text-[12.5px] tracking-wide transition-colors ${
                        channel === 'whatsapp'
                          ? 'bg-[#25D366] text-white border-[#25D366]'
                          : 'bg-cream-50 text-char-700 border-cream-300 hover:border-[#25D366]'
                      }`}
                    >
                      <WhatsappLogo size={16} weight="fill" />
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setChannel('email')}
                      className={`flex items-center justify-center gap-2 px-4 py-3 border text-[12.5px] tracking-wide transition-colors ${
                        channel === 'email'
                          ? 'bg-brass-500 text-cream-50 border-brass-500'
                          : 'bg-cream-50 text-char-700 border-cream-300 hover:border-brass-500'
                      }`}
                    >
                      <EnvelopeSimple size={16} />
                      Email
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-[12.5px] tracking-[0.14em] uppercase font-semibold transition-colors ${
                    channel === 'whatsapp'
                      ? 'bg-[#25D366] text-white hover:bg-[#1fb058]'
                      : 'bg-brass-500 text-cream-50 hover:bg-brass-600'
                  }`}
                >
                  <PaperPlaneTilt size={15} weight="fill" />
                  Send via {channel === 'whatsapp' ? 'WhatsApp' : 'Email'}
                </button>

                <div className="flex items-center gap-2 text-[12px] text-char-500 pt-2">
                  <CheckCircle size={14} className="text-forest-400" />
                  We reply to every enquiry within 24 hours.
                </div>
              </form>
            </div>

            {/* Info sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              <SectionReveal className="bg-char-900 text-cream-50 p-7 sm:p-8">
                <p className="font-accent text-xl text-brass-300 mb-1">visit us</p>
                <h3 className="font-display text-2xl mb-5">The Avondale yard</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-brass-400 mt-0.5 shrink-0" />
                    <span className="text-cream-200/85 leading-relaxed">
                      {business.addressFull}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-brass-400 mt-0.5 shrink-0" />
                    <div className="text-cream-200/85 leading-relaxed">
                      <p>Mon – Fri &nbsp; {business.hours.weekdays}</p>
                      <p>Saturday &nbsp;&nbsp; {business.hours.saturday}</p>
                      <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp; {business.hours.sunday}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-brass-400 mt-0.5 shrink-0" />
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="text-cream-200/85 hover:text-brass-300 break-all"
                    >
                      {business.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <EnvelopeSimple size={18} className="text-brass-400 mt-0.5 shrink-0" />
                    <a
                      href={`mailto:${business.email}`}
                      className="text-cream-200/85 hover:text-brass-300 break-all"
                    >
                      {business.email}
                    </a>
                  </li>
                </ul>
              </SectionReveal>

              <SectionReveal delay={100} className="aspect-[4/3] overflow-hidden border border-cream-300">
                <iframe
                  title="Lupane Timbers — 25 Connaught Road, Avondale"
                  src={mapEmbed}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </SectionReveal>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-[10.5px] tracking-[0.18em] uppercase text-char-500 mb-2">
        {label} {required && <span className="text-wine-700">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-cream-50 border border-cream-300 px-4 py-3.5 text-[14.5px] text-char-900 focus:outline-none focus:border-wine-700 transition-colors"
      />
    </div>
  );
}
