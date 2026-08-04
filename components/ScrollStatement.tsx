import React, { useEffect, useRef } from 'react';

const ScrollStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=180%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      timeline
        .fromTo('.statement-line-one', { xPercent: -28, opacity: .18 }, { xPercent: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.statement-line-two', { xPercent: 28, opacity: .18 }, { xPercent: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.statement-line-three', { scale: .72, opacity: .08 }, { scale: 1, opacity: 1, ease: 'none' }, .05)
        .to('.statement-line-one', { xPercent: 18, opacity: .2, ease: 'none' }, .62)
        .to('.statement-line-two', { xPercent: -18, opacity: .2, ease: 'none' }, .62)
        .to('.statement-accent', { scaleX: 1, ease: 'none' }, .35);
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="statement-scene relative grid min-h-[100dvh] place-items-center overflow-hidden bg-[#3a1f1a] px-5 py-24 text-[#f4efe7]">
      <div className="statement-orbit statement-orbit-one" />
      <div className="statement-orbit statement-orbit-two" />
      <div className="relative z-10 w-full text-center">
        <p className="mb-8 text-[10px] font-black uppercase tracking-[.35em] text-[#e8b4c4]">How I approach design</p>
        <div className="overflow-hidden py-2"><p className="statement-line-one whitespace-nowrap text-[clamp(3.7rem,10vw,10rem)] font-black leading-[.82] tracking-[-.08em]">I listen closely.</p></div>
        <div className="overflow-hidden py-2"><p className="statement-line-two whitespace-nowrap font-serif text-[clamp(3.7rem,10vw,10rem)] italic leading-[.82] tracking-[-.07em] text-[#8ebad6]">I simplify clearly.</p></div>
        <div className="overflow-hidden py-2"><p className="statement-line-three whitespace-nowrap text-[clamp(3.7rem,10vw,10rem)] font-black leading-[.82] tracking-[-.08em]">I make it real.</p></div>
        <div className="mx-auto mt-12 h-px w-[min(620px,78vw)] bg-white/15"><div className="statement-accent h-full w-full origin-left scale-x-0 bg-[#e8b4c4]" /></div>
      </div>
    </section>
  );
};

export default ScrollStatement;
