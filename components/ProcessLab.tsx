import React, { useEffect, useRef } from 'react';

const ProcessLab: React.FC = () => {
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
          end: 'bottom bottom',
          scrub: .8,
        },
      });
      timeline
        .fromTo('.lab-note', { opacity: 0, scale: .45, rotate: (i: number) => i % 2 ? 16 : -16 }, { opacity: 1, scale: 1, rotate: (i: number) => i % 2 ? 4 : -4, stagger: .06, ease: 'back.out(1.4)' }, 0)
        .fromTo('.lab-device', { scale: .58, rotateY: -22, opacity: .18, transformPerspective: 1200 }, { scale: 1, rotateY: 0, opacity: 1, ease: 'none' }, .08)
        .to('.lab-note', { x: (i: number) => i % 2 ? 170 : -170, y: (i: number) => i * -18, opacity: .18, scale: .72, ease: 'none' }, .24)
        .fromTo('.lab-wire', { scaleX: .05 }, { scaleX: 1, stagger: .055, ease: 'none' }, .22)
        .fromTo('.lab-ui-card', { y: 80, opacity: 0, scale: .75 }, { y: 0, opacity: 1, scale: 1, stagger: .075, ease: 'back.out(1.2)' }, .43)
        .to('.lab-prototype-glow', { opacity: 1, scale: 1.25, ease: 'none' }, .45)
        .fromTo('.lab-bar', { scaleY: .05 }, { scaleY: 1, stagger: .07, ease: 'none' }, .66)
        .fromTo('.lab-validation', { x: 100, opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, .68)
        .to('.lab-device', { scale: 1.08, rotateZ: -1.5, ease: 'none' }, .78);
      const stages = Array.from(sectionRef.current!.querySelectorAll<HTMLElement>('.lab-stage'));
      stages.forEach((stage, index) => {
        const start = index * .25;
        timeline.fromTo(stage, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .06 }, start)
          .to(stage, { opacity: index === stages.length - 1 ? 1 : 0, y: -18, duration: .07 }, start + .18);
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-lab relative h-[420vh] bg-[#dceaf2]" aria-label="Icese design process">
      <div className="sticky top-0 grid h-[100dvh] overflow-hidden bg-[#dceaf2] px-5 py-20 md:px-10">
        <div className="scrap-grid absolute inset-0 opacity-25" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div className="relative z-20">
            <p className="text-[10px] font-black uppercase tracking-[.28em] text-[#6a514a]">Illustrative UX process / scroll to build</p>
            <h2 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-black leading-[.88] tracking-[-.04em]">From signal<br />to <span className="font-serif italic font-medium text-[#75a7c7]">system.</span></h2>
            <div className="relative mt-8 min-h-20">
              {['01 Observe real behaviour', '02 Frame the right problem', '03 Prototype the experience', '04 Validate what works'].map((label, index) => (
                <p key={label} className="lab-stage absolute inset-x-0 top-0 text-lg font-black opacity-0 md:text-2xl" style={{ color: index === 3 ? '#be4773' : '#3a1f1a' }}>{label}</p>
              ))}
            </div>
            <p className="process-lab-copy max-w-md text-sm leading-relaxed text-[#6a514a] md:text-base">Every polished interface begins as uncertainty. Scroll through how research becomes clarity, structure, interaction and evidence.</p>
          </div>

          <div className="relative mx-auto h-[min(62vh,650px)] w-full max-w-[760px]">
            <div className="lab-note absolute left-0 top-[8%] z-20 rounded-2xl bg-[#f6e6a6] p-4 shadow-xl"><strong>“Where do I start?”</strong><small className="mt-2 block">Example interview signal</small></div>
            <div className="lab-note absolute right-0 top-[18%] z-20 rounded-2xl bg-[#e8b4c4] p-4 shadow-xl"><strong>Too many choices</strong><small className="mt-2 block">Example usability pattern</small></div>
            <div className="lab-note absolute bottom-[8%] left-[6%] z-20 rounded-2xl bg-white p-4 shadow-xl"><strong>Needs confidence</strong><small className="mt-2 block">Example design goal</small></div>
            <div className="lab-device absolute inset-[7%_9%] overflow-hidden rounded-[2.6rem] border-[10px] border-[#3a1f1a] bg-[#fffdf8] shadow-[0_38px_90px_rgba(58,31,26,.22)]">
              <div className="lab-prototype-glow absolute -right-24 -top-24 h-72 w-72 scale-75 rounded-full bg-[#e8b4c4]/45 opacity-0 blur-3xl" />
              <div className="relative flex h-14 items-center justify-between border-b border-[#3a1f1a]/10 px-6"><span className="font-black">Prototype / 04</span><span className="h-3 w-3 rounded-full bg-[#75a7c7]" /></div>
              <div className="relative grid h-[calc(100%-3.5rem)] grid-cols-[.35fr_.65fr] gap-5 p-5">
                <div className="rounded-2xl bg-[#dceaf2] p-4">
                  {[70, 88, 55, 78].map((width, index) => <span key={index} className="lab-wire mb-4 block h-3 origin-left rounded-full bg-[#3a1f1a]/20" style={{ width: `${width}%` }} />)}
                </div>
                <div className="grid content-start gap-4">
                  <div className="lab-ui-card rounded-2xl bg-[#3a1f1a] p-5 text-white"><small>Primary task</small><strong className="mt-3 block text-2xl">Make the next step obvious.</strong></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="lab-ui-card rounded-2xl bg-[#f6e6a6] p-4"><small>Clarity review</small><strong className="mt-3 block text-2xl">In progress</strong></div>
                    <div className="lab-ui-card lab-validation rounded-2xl bg-[#b9d2c2] p-4"><small>Evidence</small><strong className="mt-3 block text-2xl">Validate next</strong></div>
                  </div>
                  <div className="lab-ui-card flex h-28 items-end gap-3 rounded-2xl border border-[#3a1f1a]/10 bg-white p-4">
                    {[42, 66, 54, 84, 96].map((height, index) => <span key={index} className="lab-bar block flex-1 origin-bottom rounded-t-lg bg-[#75a7c7]" style={{ height: `${height}%` }} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[.24em] text-[#6a514a]">Keep scrolling — the interface is learning</div>
      </div>
    </section>
  );
};

export default ProcessLab;
