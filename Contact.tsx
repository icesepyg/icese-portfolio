import React from 'react';
import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => (
  <section id={SectionId.CONTACT} className="relative overflow-hidden bg-[#8ebad6] px-5 py-24 md:px-10 md:py-36">
    <div className="scrap-grid absolute inset-0 opacity-25" />
    <div className="relative mx-auto max-w-[1400px]">
      <div className="mb-16 flex items-center justify-between text-xs font-black uppercase tracking-[.2em]">
        <span>Say hello / 06</span><span>Don’t be shy ↘</span>
      </div>
      <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <h2 className="text-[clamp(4.5rem,11vw,11rem)] font-black leading-[.76] tracking-[-.08em]">
            Let’s make<br /><span className="font-serif italic font-medium text-[#f4efe7]">something.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="mailto:icesephoonyg@gmail.com?subject=Portfolio%20enquiry%20for%20Icese&body=Hi%20Icese%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20talk%20about%20a%20design%20opportunity.%0A%0AProject%20or%20role%3A%20%0ATimeline%3A%20%0ABudget%20(if%20applicable)%3A%20%0A%0ABest%2C%0A" data-cursor="EMAIL" className="group flex items-center gap-3 rounded-3xl bg-[#f4efe7] px-6 py-4 font-black shadow-[0_15px_35px_rgba(58,31,26,.12)]"><Mail size={20} /> Email me <ArrowUpRight className="transition-transform group-hover:rotate-45" /></a>
            <a href="https://wa.me/60162321587" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-3xl bg-[#f6e6a6] px-6 py-4 font-black shadow-[0_15px_35px_rgba(58,31,26,.12)]"><MessageCircle size={20} /> WhatsApp</a>
          </div>
        </div>
        <div className="contact-card rotate-[1deg] rounded-[2.5rem] bg-[#f4efe7] p-7 shadow-[0_28px_65px_rgba(58,31,26,.16)] md:p-9">
          <span className="text-xs font-black uppercase tracking-[.2em]">Pinned contact card</span>
          <p className="mt-5 font-serif text-4xl italic leading-tight">Open to freelance projects and full-time opportunities.</p>
          <div className="mt-8 space-y-4 border-t border-[#3a1f1a]/15 pt-6">
            <a href="tel:+60162321587" className="flex items-center gap-3 font-bold"><Phone size={18} /> +60 16-232 1587</a>
            <a href="mailto:icesephoonyg@gmail.com" className="flex items-center gap-3 font-bold"><Mail size={18} /> icesephoonyg@gmail.com</a>
          </div>
          <div className="mt-8 flex gap-3">
            <a aria-label="LinkedIn" href="https://linkedin.com/in/phoon-yuk-guan-0304bb2b6" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#dceaf2] p-3"><Linkedin /></a>
            <a aria-label="Instagram" href="#" className="rounded-full bg-[#e8b4c4] p-3"><Instagram /></a>
          </div>
          <div className="tape absolute -top-5 left-1/2 h-10 w-36 -translate-x-1/2 rotate-[-2deg] bg-white/65" />
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-between gap-3 border-t border-[#3a1f1a]/20 pt-6 text-xs font-black uppercase tracking-[.16em] md:flex-row">
        <span>© 2026 Phoon Yuk Guan · Icese</span><span>Designed with curiosity in Kuala Lumpur</span>
      </div>
    </div>
  </section>
);

export default Contact;
