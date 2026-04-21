import React, { useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

const WA_NUMBER = business.whatsapp.replace(/[^0-9]/g, '');
const WA_MESSAGE =
  "Hi Lupane Timbers, I'd like to enquire about your timber.";
const HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed z-40 bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Hover label — desktop only */}
      <span
        className={`hidden sm:inline-block bg-char-900 text-cream-50 px-4 py-2 text-[11px] tracking-[0.16em] uppercase font-medium whitespace-nowrap transition-all duration-300 ${
          hover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
        style={{ borderRadius: '2px' }}
      >
        Message the mill
      </span>

      <a
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Lupane Timbers on WhatsApp"
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1fb058] transition-colors duration-300"
      >
        {/* Pulse rings */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          style={{ animationDuration: '2.2s' }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full ring-1 ring-[#25D366]/40"
        />
        <WhatsappLogo size={28} weight="fill" className="relative z-10" />
      </a>
    </div>
  );
}
