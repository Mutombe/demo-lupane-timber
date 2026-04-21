import React from 'react';
import { Tree } from '@phosphor-icons/react';
import { marquee } from '../data/siteData';

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="bg-wine-700 text-cream-50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 text-[11px] tracking-[0.22em] uppercase"
          >
            <Tree size={13} className="text-brass-300 shrink-0" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
