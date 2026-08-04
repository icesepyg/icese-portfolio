import React, { useEffect, useRef } from 'react';

const WorldIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    document.body.classList.add('is-in-world-intro');
    const context = gsap.context(() => {
      gsap.to('.world-ring', { rotate: 360, duration: 18, repeat: -1, ease: 'none' });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self: any) => document.body.classList.toggle('is-in-world-intro', self.progress < .995),
        },
      });
      timeline
        .fromTo('.world-kicker', { opacity: .25, letterSpacing: '.75em' }, { opacity: 1, letterSpacing: '.42em', ease: 'none' }, 0)
        .fromTo('.world-title-one', { xPercent: -8 }, { xPercent: 0, ease: 'none' }, 0)
        .fromTo('.world-title-two', { xPercent: 8 }, { xPercent: 0, ease: 'none' }, 0)
        .fromTo('.world-portal', { scale: .18, rotate: -25 }, { scale: 1.15, rotate: 0, ease: 'none' }, 0)
        .to('.world-title-one', { scale: .82, opacity: .12, ease: 'none' }, .48)
        .to('.world-title-two', { scale: .82, opacity: .12, ease: 'none' }, .48)
        .to('.world-portal', { scale: 7.5, ease: 'power2.in' }, .48)
        .to('.world-enter-copy', { y: -40, opacity: 0, ease: 'none' }, .56)
        .to('.world-scroll-track', { scaleX: 1, ease: 'none' }, 0)
        .fromTo('.world-final-mark', { scale: .4, opacity: 0 }, { scale: 1, opacity: 1, ease: 'none' }, .54);
    }, sectionRef);
    return () => {
      document.body.classList.remove('is-in-world-intro');
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="world-intro relative h-[320vh] bg-[#3a1f1a]" aria-label="Scroll to enter Icese Design World">
      <div className="world-stage sticky top-0 z-[10000] grid h-[100dvh] place-items-center overflow-hidden bg-[#3a1f1a] text-[#f4efe7]">
        <div className="world-portal absolute h-[min(62vw,680px)] w-[min(62vw,680px)] rounded-full bg-[#8ebad6] shadow-[0_0_0_45px_rgba(232,180,196,.16),0_0_0_90px_rgba(246,230,166,.08)]" />
        <div className="world-ring absolute h-[min(84vw,920px)] w-[min(84vw,920px)] rounded-full border border-dashed border-white/35" />
        <div className="world-enter-copy relative z-10 w-full text-center">
          <p className="world-kicker mb-7 text-[10px] font-black uppercase">Welcome to</p>
          <div className="overflow-hidden py-5"><p className="world-title-one text-[clamp(4.7rem,13vw,13rem)] font-black leading-[.88] tracking-[-.035em]">ICESE</p></div>
          <div className="overflow-hidden px-4 py-7"><p className="world-title-two whitespace-nowrap font-serif text-[clamp(2.3rem,7vw,7rem)] italic leading-[1.02] tracking-[-.015em] text-[#f6e6a6]">DESIGN WORLD</p></div>
          <p className="mt-7 text-[10px] font-black uppercase tracking-[.28em]">Scroll to open the portal ↓</p>
        </div>
        <div className="world-final-mark pointer-events-none absolute z-20 text-center text-[#3a1f1a]">
          <span className="text-6xl">☘</span>
          <p className="mt-3 text-xs font-black uppercase tracking-[.3em]">Portal opening · keep scrolling</p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-30 h-[2px] w-[min(520px,72vw)] -translate-x-1/2 bg-white/15">
          <div className="world-scroll-track h-full origin-left scale-x-0 bg-[#f6e6a6]" />
        </div>
      </div>
    </section>
  );
};

export default WorldIntro;
