import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const LINKS = [
  [SectionId.ABOUT, 'About'],
  [SectionId.AWARDS, 'Awards'],
  [SectionId.EXPERIENCE, 'Experience'],
  [SectionId.PORTFOLIO, 'Projects'],
  [SectionId.CONTACT, 'Contact'],
] as const;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const go = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed left-1/2 top-4 z-[90] w-[calc(100%-2rem)] max-w-[1120px] -translate-x-1/2 rounded-[1.7rem] px-5 py-4 transition-all duration-500 md:top-6 md:px-6 ${open ? 'bg-[#fffdf8] shadow-[0_14px_50px_rgba(58,31,26,.14)]' : scrolled ? 'bg-[#fffdf8]/88 shadow-[0_14px_50px_rgba(58,31,26,.10)] backdrop-blur-xl' : 'bg-[#fffdf8]/72 backdrop-blur-lg'}`}>
      <div className="flex items-center justify-between">
        <button onClick={() => go(SectionId.HERO)} className="flex items-center gap-3 text-[#3a1f1a]">
          <span className="font-semibold tracking-[-.03em]">Icese Phoon</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="text-sm font-medium text-[#6a514a] transition-colors hover:text-[#3a1f1a]">{label}</button>
          ))}
        </div>

        <button onClick={() => go(SectionId.CONTACT)} className="hidden rounded-full bg-[#3a1f1a] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-1 md:block">Let’s talk</button>
        <button onClick={() => setOpen((value) => !value)} className="rounded-xl bg-[#f4efe7] p-2.5 text-[#3a1f1a] md:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>

      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="grid gap-2 border-t border-[#3a1f1a]/10 pt-4">
            {LINKS.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="rounded-xl px-4 py-3 text-left font-medium text-[#3a1f1a] hover:bg-[#e0edf4]">{label}</button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
