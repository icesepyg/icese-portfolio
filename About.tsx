import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';
import { SectionId } from '../types';

const About: React.FC = () => (
  <section id={SectionId.ABOUT} className="relative overflow-hidden bg-[#dceaf2] px-5 py-24 md:px-10 md:py-36">
    <div className="scrap-grid absolute inset-0 opacity-30" />
    <div className="relative mx-auto max-w-[1400px]">
      <div className="mb-12 flex items-center justify-between">
        <span className="rotate-[-2deg] bg-[#f6e6a6] px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-[#3a1f1a] shadow-[0_10px_28px_rgba(58,31,26,.12)]">Introduction / About me</span>
        <span className="hidden text-xs font-black uppercase tracking-[.2em] md:block">02 / Profile</span>
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-[540px]" data-scroll-reveal data-scroll-tilt="-2">
          <div className="absolute -left-8 -top-7 h-40 w-40 rotate-[-12deg] rounded-full bg-[#8ebad6]" />
          <div data-scroll-scrub className="relative rotate-[-3deg] rounded-[2rem] bg-white p-4 shadow-[0_30px_70px_rgba(58,31,26,.16)]">
            <img src="/assets/about-profile.jpg" alt="Phoon Yuk Guan — Icese" className="aspect-[4/5] w-full object-cover grayscale-[10%]" />
            <div className="tape absolute -top-5 left-1/2 h-10 w-32 -translate-x-1/2 rotate-2 bg-[#e8b4c4]/75" />
          </div>
          <div className="absolute -bottom-8 -right-6 rotate-[8deg] rounded-2xl bg-[#f6e6a6] px-5 py-4 text-sm font-black text-[#3a1f1a] shadow-[0_16px_35px_rgba(58,31,26,.15)]">UI/UX + GRAPHIC<br />+ WEB DESIGN</div>
        </div>

        <div data-scroll-reveal data-scroll-tilt="1">
          <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-[.82] tracking-[-.075em]">
            Design with purpose.<br /><span className="font-serif italic font-medium text-[#75a7c7]">Built around people.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rotate-[-1deg] rounded-3xl bg-[#f4efe7] p-6 shadow-[0_18px_40px_rgba(58,31,26,.10)]">
              <p className="text-lg font-bold leading-relaxed">I am a proactive and ambitious designer with strong leadership and organizational skills. My educational background includes a <strong>Bachelor of Design in Creative Media Specialising in UI/UX</strong> and a <strong>Minor in Website Development Technologies</strong>.</p>
            </div>
            <div className="rotate-[1.5deg] rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(58,31,26,.10)]">
              <p className="leading-relaxed text-stone-600">I am dedicated to creating <strong>user-centered designs</strong> that make a positive impact. Adaptable to various design styles, I bring creativity and problem-solving skills to every project I undertake.</p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#8ebad6] px-5 py-3 text-sm font-black">3.72 CGPA</span>
            <span className="rounded-full bg-[#f6e6a6] px-5 py-3 text-sm font-black">9As SPM</span>
            <span className="rounded-full bg-[#b9d2c2] px-5 py-3 text-sm font-black">First Class Honours</span>
            <a href="#portfolio" className="group flex items-center gap-2 rounded-full bg-[#3a1f1a] px-5 py-3 text-sm font-black text-white">See the work <ArrowUpRight size={17} className="transition-transform group-hover:rotate-45" /></a>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <div className="mb-7 flex items-center gap-3"><Star className="fill-[#f6e6a6]" /><h3 className="text-2xl font-black">Certifications</h3></div>
        <div className="grid gap-4 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={cert.name} data-scroll-reveal className={`rounded-3xl p-5 shadow-[0_15px_35px_rgba(58,31,26,.10)] ${index % 2 === 0 ? 'bg-[#f4efe7]' : 'bg-white'}`}>
              {cert.imageUrl && <img src={cert.imageUrl} alt={`${cert.name} certificate`} className="mb-4 aspect-[4/3] w-full rounded-2xl object-cover" />}
              <span className="text-[10px] font-black uppercase tracking-[.2em]">{cert.issuer}</span>
              <p className="mt-3 text-lg font-black leading-tight">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
