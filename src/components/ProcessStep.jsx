import React from 'react';
import {
  Tree,
  Wrench,
  SunHorizon,
  ListChecks,
  Truck,
} from '@phosphor-icons/react';

const ICONS = {
  Tree,
  WrenchFill: Wrench,
  Wrench,
  SunHorizon,
  ListChecks,
  Truck,
};

export default function ProcessStep({ step, isLast = false }) {
  const Icon = ICONS[step.icon] || Tree;
  return (
    <div className="relative flex flex-col items-start">
      {!isLast && (
        <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-wine-700/40 to-transparent hidden lg:hidden" />
      )}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 h-11 w-11 bg-wine-700 text-cream-50 flex items-center justify-center">
          <Icon size={20} weight="regular" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-[13px] tracking-[0.18em] text-brass-500 uppercase">
            Step {step.step}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-char-900 mt-1">
            {step.name}
          </h3>
          <p className="mt-3 text-[14.5px] text-char-700 leading-relaxed text-pretty">
            {step.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
