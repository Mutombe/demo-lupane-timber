import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone, MagnifyingGlass } from '@phosphor-icons/react';
import { business, waHref } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/our-timber', label: 'Our Timber' },
  { to: '/products', label: 'Products' },
  { to: '/milling', label: 'Milling' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const wa = waHref('Hello Lupane Timbers — enquiring via the website.');

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md border-b border-cream-300 shadow-[0_1px_0_0_rgba(58,10,21,0.04)]'
            : 'bg-cream-50 border-b border-cream-200'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-[76px] sm:h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center group min-w-0" aria-label={business.name}>
            <img
              src={business.logo}
              alt={business.name}
              className="h-11 sm:h-12 lg:h-14 w-auto shrink-0 select-none"
              loading="eager"
              decoding="async"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-[0.02em] transition-colors ${
                    isActive
                      ? 'text-wine-700'
                      : 'text-char-700 hover:text-wine-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-wine-700" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search the site"
              className="hidden md:flex h-10 w-10 items-center justify-center text-char-700 hover:text-wine-700 transition-colors"
            >
              <MagnifyingGlass size={18} />
            </button>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              aria-label="Call Lupane"
              className="hidden md:flex h-10 px-3 items-center gap-2 text-[13px] text-char-700 hover:text-wine-700"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{business.phone}</span>
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:inline-flex h-10 px-4 items-center gap-2 bg-wine-700 text-cream-50 text-[12px] tracking-[0.12em] uppercase hover:bg-wine-600 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              Enquire
            </a>
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search the site"
              className="h-11 w-11 flex md:hidden items-center justify-center text-char-800 hover:text-wine-700 transition-colors"
            >
              <MagnifyingGlass size={20} />
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-11 w-11 flex lg:hidden items-center justify-center text-char-800"
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-char-900/40"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[76px] border-b border-cream-300">
            <span className="font-display text-xl text-wine-700">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenSearch?.();
              }}
              className="mb-4 flex items-center gap-3 px-4 py-3 border border-cream-300 text-char-700 hover:border-wine-700 hover:text-wine-700 transition-colors text-[13px] tracking-wide"
            >
              <MagnifyingGlass size={16} />
              Search the yard
            </button>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl transition-colors ${
                    isActive ? 'text-wine-700' : 'text-char-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-cream-300 space-y-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-wine-700 text-cream-50 py-3 text-sm tracking-wide"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 border border-char-800 text-char-800 py-3 text-sm tracking-wide"
            >
              <Phone size={18} />
              {business.phone}
            </a>
            <p className="text-[11px] text-char-500 text-center pt-1">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
