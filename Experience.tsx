import React, { useEffect, useState } from 'react';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import { SectionId } from '../types';

const ExperienceDetail: React.FC<{ active: (typeof EXPERIENCES)[number]; className?: string }> = ({ active, className = '' }) => (
  <article data-experience-panel key={active.id} className={`experience-detail rounded-[2rem] border border-[#e8b4c4] bg-white p-6 shadow-[0_20px_55px_rgba(58,31,26,.08)] md:p-10 lg:p-14 ${className}`} role="tabpanel">
    <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[#3a1f1a]/10 pb-8">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#e8b4c4] px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-[#be4773]"><BriefcaseBusiness size={14} />{active.type}{active.period ? ` · ${active.period}` : ''}</span>
        <h3 className="mt-6 text-[clamp(2.35rem,5vw,5rem)] font-black leading-[1] tracking-[-.04em] text-[#3a1f1a]">{active.role}</h3>
        <p className="mt-4 text-xl font-bold text-[#be4773] md:text-2xl">{active.company}</p>
      </div>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#dceaf2] text-[#3a1f1a] md:h-16 md:w-16"><BriefcaseBusiness size={27} /></span>
    </div>
    <ul className="mt-8 grid gap-5">
      {active.description.map((item, index) => (
        <li key={`${active.id}-${index}`} className="flex gap-4 text-base leading-relaxed text-[#55443f] md:text-lg">
          <span className="mt-[.65em] h-2 w-2 shrink-0 rounded-full bg-[#e84f92]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState(EXPERIENCES[0]?.id || '');
  const active = EXPERIENCES.find((item) => item.id === activeId) || EXPERIENCES[0];

  useEffect(() => {
    if (!window.gsap) return;
    const gsap = window.gsap;
    const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-experience-panel]'));
    if (!panels.length) return;
    const timeline = gsap.timeline();
    timeline.fromTo(panels, { rotateY: 12, x: 70, opacity: .25, transformPerspective: 1000 }, { rotateY: 0, x: 0, opacity: 1, duration: .72, ease: 'power4.out' })
      .from(panels.flatMap((panel) => Array.from(panel.querySelectorAll('li'))), { x: 45, opacity: 0, stagger: .04, duration: .42, ease: 'power3.out' }, .18);
    return () => timeline.kill();
  }, [activeId]);

  if (!active) return null;

  const selectExperience = (id: string, button: HTMLButtonElement) => {
    setActiveId(id);
    if (window.innerWidth < 1024) {
      window.setTimeout(() => button.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  };

  return (
    <section id={SectionId.EXPERIENCE} className="experience-section relative overflow-hidden bg-[#fffdf8] px-5 py-24 md:px-10 md:py-36">
      <div className="scrap-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1450px]">
        <div className="mb-12 max-w-4xl" data-scroll-reveal>
          <span className="text-xs font-black uppercase tracking-[.22em] text-[#75a7c7]">Experience / Work history</span>
          <h2 data-kinetic className="mt-4 text-[clamp(3.7rem,7vw,7rem)] font-black leading-[.82] tracking-[-.07em] text-[#3a1f1a]">Places where I learned by doing.</h2>
        </div>

        <div className="experience-browser grid gap-5 lg:grid-cols-[minmax(290px,.68fr)_minmax(0,1.7fr)]" data-scroll-reveal>
          <div className="experience-list grid content-start gap-3" role="tablist" aria-label="Work experience">
            {EXPERIENCES.map((experience) => {
              const selected = experience.id === active.id;
              return (
                <React.Fragment key={experience.id}>
                <button
                  key={experience.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={(event) => selectExperience(experience.id, event.currentTarget)}
                  className={`experience-tab group grid grid-cols-[1fr_auto] items-center gap-4 rounded-[1.35rem] border p-5 text-left transition-[transform,background-color,border-color,box-shadow] duration-200 ${selected ? 'border-[#3a1f1a] bg-[#3a1f1a] text-white shadow-[0_16px_35px_rgba(58,31,26,.16)]' : 'border-[#3a1f1a]/10 bg-white text-[#3a1f1a] hover:-translate-y-1 hover:border-[#75a7c7]'}`}
                >
                  <span>
                    <strong className="block text-lg leading-tight md:text-xl">{experience.company}</strong>
                    <small className={`mt-2 block text-[10px] font-black uppercase tracking-[.12em] ${selected ? 'text-white/65' : 'text-[#8a716a]'}`}>{experience.role}</small>
                  </span>
                  <ArrowRight className={`transition-transform duration-200 ${selected ? 'translate-x-1' : 'text-[#75a7c7] group-hover:translate-x-1'}`} size={20} />
                </button>
                {selected && <ExperienceDetail active={active} className="mt-1 lg:hidden" />}
                </React.Fragment>
              );
            })}
          </div>

          <ExperienceDetail active={active} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
