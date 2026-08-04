import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SectionId } from '../types';
import SoftFolder from './SoftFolder';
import DesignConstellation from './DesignConstellation';

const NAV_ITEMS = [
  { id: SectionId.ABOUT, label: 'About', note: 'Who I am', color: '#e8b4c4', position: 'hero-nav-left' },
  { id: SectionId.EXPERIENCE, label: 'Experience', note: 'Where I grew', color: '#8ebad6', position: 'hero-nav-right' },
  { id: SectionId.PORTFOLIO, label: 'Projects', note: 'Selected work', color: '#f6e6a6', position: 'hero-nav-bottom-left' },
  { id: SectionId.CONTACT, label: 'Contact', note: 'Let’s connect', color: '#b9d2c2', position: 'hero-nav-bottom-right' },
];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [folderOpen, setFolderOpen] = useState(false);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !heroRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
      intro.from('.hero-stage-curtain', { scaleY: 1, transformOrigin: 'top', duration: 1.05 })
      .from('.hero-name-line', {
        yPercent: 115,
        opacity: 0,
        stagger: .08,
        duration: .9,
      }, .18)
      .from('.hero-portfolio-folder', {
        y: 42,
        opacity: 0,
        scale: .9,
        duration: .8,
        ease: 'power3.out',
      }, .42)
      .from('.hero-orbit, .hero-clover-mark, .hero-scroll-label', { opacity: 0, scale: .7, stagger: .1, duration: .65 }, .58);
      gsap.to('.hero-portfolio-folder', { y: -9, duration: 1.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.hero-orbit', { rotate: 360, duration: 34, repeat: -1, ease: 'none' });
      gsap.to('.hero-name-block', {
        yPercent: -14,
        opacity: .28,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: .8,
        },
      });
      gsap.to('.hero-cloud-one', {
        xPercent: 70,
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: .7 },
      });
      gsap.to('.hero-cloud-two', {
        xPercent: -55,
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.1 },
      });
      gsap.to('.hero-cloud-three', {
        xPercent: 35,
        yPercent: -35,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.4 },
      });
      gsap.to('.hero-orbit', {
        scale: 1.35,
        opacity: .15,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.fromTo('.hero-portfolio-folder', { rotateX: 0 }, {
        rotateX: -18, scale: 1.18, transformPerspective: 900, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: '45% center', end: 'bottom top', scrub: .8 },
      });
    }, heroRef);
    const pointerMove = (event: PointerEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      const x = event.clientX / window.innerWidth - .5;
      const y = event.clientY / window.innerHeight - .5;
      gsap.to(heroRef.current!.querySelector('.hero-name-block'), { x: x * 24, y: y * 14, duration: .8, ease: 'power3.out', overwrite: 'auto' });
      gsap.to(heroRef.current!.querySelector('.hero-portfolio-folder'), { x: x * -18, rotate: x * 4, duration: .7, ease: 'power3.out', overwrite: 'auto' });
      gsap.to(heroRef.current!.querySelectorAll('.hero-cloud'), { x: (_i: number) => x * (28 + _i * 16), y: (_i: number) => y * (18 + _i * 10), duration: 1.2, ease: 'power2.out', overwrite: 'auto' });
    };
    heroRef.current.addEventListener('pointermove', pointerMove);
    return () => {
      heroRef.current?.removeEventListener('pointermove', pointerMove);
      context.revert();
    };
  }, []);

  useEffect(() => {
    if (!folderOpen || !heroRef.current) return;
    const gsap = window.gsap;
    if (!gsap) return;
    const mainFolder = heroRef.current.querySelector('.hero-portfolio-folder')?.getBoundingClientRect();
    const cards = Array.from(heroRef.current.querySelectorAll<HTMLElement>('.hero-nav-card'));
    if (!mainFolder || !cards.length) return;
    const centerX = mainFolder.left + mainFolder.width / 2;
    const centerY = mainFolder.top + mainFolder.height / 2;
    gsap.fromTo(cards, {
      x: (_index: number, card: HTMLElement) => centerX - (card.getBoundingClientRect().left + card.offsetWidth / 2),
      y: (_index: number, card: HTMLElement) => centerY - (card.getBoundingClientRect().top + card.offsetHeight / 2),
      scale: .35,
      opacity: 0,
    }, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      stagger: .065,
      duration: .62,
      ease: 'back.out(1.45)',
      overwrite: true,
    });
  }, [folderOpen]);

  const goTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFolder = () => {
    if (!folderOpen) {
      setFolderOpen(true);
      return;
    }
    const gsap = window.gsap;
    const mainFolder = heroRef.current?.querySelector('.hero-portfolio-folder')?.getBoundingClientRect();
    const cards = Array.from(heroRef.current?.querySelectorAll<HTMLElement>('.hero-nav-card') || []);
    if (!gsap || !mainFolder || !cards.length) {
      setFolderOpen(false);
      return;
    }
    const centerX = mainFolder.left + mainFolder.width / 2;
    const centerY = mainFolder.top + mainFolder.height / 2;
    gsap.to(cards, {
      x: (_index: number, card: HTMLElement) => centerX - (card.getBoundingClientRect().left + card.offsetWidth / 2),
      y: (_index: number, card: HTMLElement) => centerY - (card.getBoundingClientRect().top + card.offsetHeight / 2),
      scale: .35,
      opacity: 0,
      stagger: .035,
      duration: .28,
      ease: 'power2.in',
      overwrite: true,
      onComplete: () => setFolderOpen(false),
    });
  };

  return (
    <section ref={heroRef} id={SectionId.HERO} className="desktop-hero relative min-h-[100dvh] overflow-hidden bg-[#f4efe7] px-5 pb-10 pt-24 md:px-10 md:pt-28">
      <div className="hero-stage-curtain pointer-events-none absolute inset-0 z-[60] origin-bottom scale-y-0 bg-[#8ebad6]" />
      <div className="desktop-grain absolute inset-0" data-scroll-parallax />
      <DesignConstellation />
      <div className="hero-cloud hero-cloud-one" aria-hidden="true" />
      <div className="hero-cloud hero-cloud-two" aria-hidden="true" />
      <div className="hero-cloud hero-cloud-three" aria-hidden="true" />
      <div className="hero-clover-mark absolute right-[8%] top-[15%] hidden text-[#75a7c7] md:block" aria-hidden="true">☘</div>
      <div className="hero-orbit pointer-events-none absolute left-1/2 top-[57%] h-[min(72vw,720px)] w-[min(72vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#75a7c7]/30" aria-hidden="true"><i /><i /><i /></div>

      <div className="relative z-10 mx-auto min-h-[calc(100dvh-8rem)] max-w-[1500px]">
        <div className="hero-name-block pointer-events-none absolute inset-x-0 top-[8%] z-20 text-center md:top-[7%]">
          <div className="overflow-hidden pb-2">
            <p className="hero-name-line text-[clamp(3.4rem,8.6vw,8.8rem)] font-black leading-[.82] tracking-[-.075em] text-[#3a1f1a]">Phoon Yuk Guan</p>
          </div>
          <div className="overflow-hidden pb-3">
            <h1 className="hero-name-line text-[clamp(3.1rem,7.5vw,7.8rem)] font-black leading-[.82] tracking-[-.07em] text-[#75a7c7]">(Icese) Portfolio</h1>
          </div>
          <p className="hero-name-line mt-4 text-xs font-black uppercase tracking-[.28em] text-[#6a514a] md:text-sm">UI/UX · Product Designer</p>
        </div>

        <div className={`hero-navigation ${folderOpen ? 'is-open' : ''}`} aria-hidden={!folderOpen}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`hero-nav-card ${item.position}`}
              tabIndex={folderOpen ? 0 : -1}
            >
              <span className="hero-nav-folder"><SoftFolder color={item.color} showPapers={false} /></span>
              <span><strong>{item.label}</strong><small>{item.note}</small></span>
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>

        <button
          onClick={toggleFolder}
          className="hero-portfolio-folder absolute left-1/2 top-[57%] z-30 -translate-x-1/2 md:top-[59%]"
          data-cursor={folderOpen ? 'CLOSE' : 'OPEN'}
          aria-expanded={folderOpen}
          aria-label={folderOpen ? 'Close portfolio navigation' : 'Open portfolio navigation'}
        >
          <div className="scale-[1.9] sm:scale-[2.45] md:scale-[3]">
            <SoftFolder
              open={folderOpen}
              color="#8ebad6"
              showPapers={false}
            />
          </div>
        </button>

        <div className="hero-scroll-label absolute bottom-[3%] left-1/2 z-30 -translate-x-1/2 text-center">
          <p className="mb-3 whitespace-nowrap text-[10px] font-black uppercase tracking-[.22em] text-[#6a514a] md:text-xs">
            {folderOpen ? 'Choose a direction / continue scrolling' : 'Open the portfolio'}
          </p>
          <ArrowDown className={`mx-auto transition-transform duration-300 ${folderOpen ? 'rotate-180' : 'animate-bounce'}`} size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
