import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ClickSpark from './components/ClickSpark';
import ScrollStatement from './components/ScrollStatement';
import WorldIntro from './components/WorldIntro';
import ProcessLab from './components/ProcessLab';

const CreativeCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (!cursorRef.current) return;
      const target = event.target as HTMLElement;
      const interactive = target.closest('[data-cursor], a, button') as HTMLElement | null;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursorRef.current.classList.toggle('is-active', Boolean(interactive));
      if (labelRef.current) labelRef.current.textContent = interactive?.dataset.cursor || '';
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div ref={cursorRef} className="creative-cursor" style={{ transform: 'translate3d(-100px, -100px, 0)' }}>
      <span ref={labelRef} />
    </div>
  );
};

const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? window.scrollY / distance : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div ref={barRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />;
};

const ScrollMotion: React.FC = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('[data-kinetic]').forEach((element) => {
        const original = element.innerHTML;
        const label = element.textContent?.trim() || '';
        element.setAttribute('aria-label', label);
        element.innerHTML = label.split(/\s+/).map((word) => `<span class="kinetic-word" aria-hidden="true">${word}</span>`).join(' ');
        gsap.fromTo(element.querySelectorAll('.kinetic-word'), { yPercent: 115, opacity: 0 }, {
          yPercent: 0,
          opacity: 1,
          stagger: .045,
          duration: .8,
          ease: 'power4.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
        element.dataset.originalMarkup = original;
      });
      gsap.utils.toArray('[data-scroll-reveal]').forEach((element: HTMLElement) => {
        gsap.fromTo(element, { opacity: 0, y: 54, rotate: element.dataset.scrollTilt || 0 }, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: .85,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });
      gsap.utils.toArray('[data-scroll-parallax]').forEach((element: HTMLElement) => {
        gsap.fromTo(element, { yPercent: -7 }, {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: .8 },
        });
      });
      gsap.utils.toArray('[data-scroll-scrub]').forEach((element: HTMLElement) => {
        gsap.fromTo(element, { clipPath: 'inset(0 0 16% 0)', scale: .96 }, {
          clipPath: 'inset(0 0 0% 0)',
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top 92%', end: 'center 58%', scrub: .7 },
        });
      });
      gsap.utils.toArray('main section h2').forEach((element: HTMLElement) => {
        if (element.hasAttribute('data-kinetic')) return;
        gsap.fromTo(element, { clipPath: 'inset(0 0 100% 0)', y: 38 }, {
          clipPath: 'inset(0 0 0% 0)',
          y: 0,
          duration: .95,
          ease: 'power4.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });
      const marquee = document.querySelector<HTMLElement>('.skills-marquee');
      if (marquee) {
        marquee.style.animation = 'none';
        const marqueeTween = gsap.to(marquee, { xPercent: -50, duration: 28, repeat: -1, ease: 'none' });
        ScrollTrigger.create({
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self: any) => {
            const speed = Math.min(4.5, Math.max(1, Math.abs(self.getVelocity()) / 650));
            const direction = self.direction < 0 ? -1 : 1;
            gsap.to(marqueeTween, { timeScale: speed * direction, duration: .28, overwrite: true });
          },
          onLeave: () => gsap.to(marqueeTween, { timeScale: 1, duration: .5 }),
          onLeaveBack: () => gsap.to(marqueeTween, { timeScale: 1, duration: .5 }),
        });
      }
      gsap.fromTo('#about [data-scroll-reveal]', { rotateY: -7, transformPerspective: 900 }, {
        rotateY: 0, stagger: .08, ease: 'power3.out',
        scrollTrigger: { trigger: '#about', start: 'top 76%', end: 'center 48%', scrub: .7 },
      });
      gsap.fromTo('.experience-tab', { x: -90, opacity: 0 }, {
        x: 0, opacity: 1, stagger: .09, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience-browser', start: 'top 82%', end: 'center 58%', scrub: .65 },
      });
      gsap.fromTo('.experience-detail', { x: 100, rotateY: -7, opacity: .25, transformPerspective: 1000 }, {
        x: 0, rotateY: 0, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: '.experience-browser', start: 'top 85%', end: 'center 55%', scrub: .8 },
      });
      (gsap.utils.toArray('#skills .group') as HTMLElement[]).forEach((chip, index) => {
        gsap.fromTo(chip, { y: 90, rotate: index % 2 ? 8 : -8, scale: .7 }, { y: 0, rotate: 0, scale: 1, ease: 'back.out(1.4)', scrollTrigger: { trigger: chip, start: 'top 94%', end: 'top 72%', scrub: .5 } });
      });
      gsap.fromTo('#contact h2', { xPercent: -18 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'center center', scrub: .8 } });
      gsap.fromTo('#contact .contact-card', { y: 150, rotate: 9 }, { y: 0, rotate: 1, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top 85%', end: 'center 55%', scrub: .8 } });
    });
    return () => {
      document.querySelectorAll<HTMLElement>('[data-kinetic][data-original-markup]').forEach((element) => {
        element.innerHTML = element.dataset.originalMarkup || element.innerHTML;
        delete element.dataset.originalMarkup;
      });
      context.revert();
    };
  }, []);
  return null;
};

const App: React.FC = () => {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('main > section').forEach((section) => {
      section.classList.add('reveal-section');
      reveal.observe(section);
    });
    return () => reveal.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f4efe7] text-[#3a1f1a]">
      <div className={`site-nav relative z-[90] transition-opacity duration-300 ${isPortfolioModalOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
        <Navbar />
      </div>
      <main>
        <WorldIntro />
        <Hero />
        <About />
        <Achievements />
        <ScrollStatement />
        <ProcessLab />
        <Experience />
        <Skills />
        <Portfolio onModalChange={setIsPortfolioModalOpen} />
        <Contact />
      </main>
      <CreativeCursor />
      <ScrollProgress />
      <ClickSpark />
      <ScrollMotion />
    </div>
  );
};

export default App;
