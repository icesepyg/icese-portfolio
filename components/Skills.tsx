import React from 'react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';

const Skills: React.FC = () => (
  <section id={SectionId.SKILLS} className="relative overflow-hidden bg-[#dceaf2] py-24 md:py-32">
    <div className="desktop-grain absolute inset-0 opacity-35" />
    <div className="skills-marquee relative mb-20 flex w-max whitespace-nowrap">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center">
          {['UI/UX DESIGN', 'DESIGN SYSTEMS', 'AI WORKFLOWS', 'WEB EXPERIENCES', 'BRANDING'].map((item) => (
            <React.Fragment key={`${copy}-${item}`}>
              <span className="px-6 text-[clamp(3rem,7vw,7rem)] font-black leading-none tracking-[-.07em] text-[#3a1f1a]">{item}</span>
              <span className="font-serif text-6xl italic text-[#e8b4c4]">✦</span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
    <div className="relative mx-auto max-w-[1300px] px-5 md:px-10">
      <div className="mb-12 max-w-2xl" data-scroll-reveal>
        <span className="text-sm font-semibold text-[#75a7c7]">toolkit / things I use</span>
        <h2 className="mt-4 text-5xl font-black leading-[.85] tracking-[-.06em] text-[#3a1f1a] md:text-7xl">Tools that help ideas <span className="font-serif italic font-medium">move.</span></h2>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {SKILLS.map((skill, index) => (
          <div key={skill.name} data-scroll-reveal className={`group flex items-center gap-3 rounded-full px-5 py-3 shadow-[0_10px_26px_rgba(58,31,26,.07)] transition-transform duration-200 hover:-translate-y-2 hover:rotate-[-2deg] ${index % 3 === 0 ? 'bg-[#fffdf8]' : index % 3 === 1 ? 'bg-[#f6e6a6]' : 'bg-[#e8b4c4]'}`}>
            {skill.imageUrl ? <img src={skill.imageUrl} alt="" className="h-5 w-5 rounded object-contain" /> : skill.icon && <skill.icon size={18} className="transition-transform group-hover:rotate-12" />}
            <span className="font-semibold text-[#3a1f1a]">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
