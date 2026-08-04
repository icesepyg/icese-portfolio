import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, SectionId } from '../types';
import SoftFolder from './SoftFolder';

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

interface PortfolioProps {
  onModalChange?: (isOpen: boolean) => void;
}

const CATEGORIES = [
  { id: 'Top', label: 'Top Projects' },
  { id: 'UIUX', label: 'UI/UX' },
  { id: 'Graphic', label: 'Graphic Design' },
  { id: 'Social', label: 'Social Media' },
];

const getProjects = (filter: string) => {
  if (filter === 'Top') {
    const featured = PROJECTS.filter((project) => project.featured);
    return featured.length >= 4 ? featured : PROJECTS;
  }
  if (filter === 'UIUX') return PROJECTS.filter((p) => ['Web', 'Product'].includes(p.group));
  if (filter === 'Graphic') return PROJECTS.filter((p) => ['Logo', 'Art', 'Event', 'Graphic'].includes(p.group));
  if (filter === 'Social') return PROJECTS.filter((p) => ['Social', 'SocialAds', 'Post'].includes(p.group));
  return PROJECTS;
};

const formatCaseStudy = (details: string | undefined, fallback: string) => {
  if (!details?.trim()) return `<h2>The idea</h2><p>${fallback}</p>`;
  if (/<[a-z][\s\S]*>/i.test(details)) return details;
  const blocks = details.trim().split(/\n{2,}/);
  return blocks.map((block) => {
    const value = block.trim();
    if (value.startsWith('### ')) return `<h3>${value.slice(4)}</h3>`;
    if (value.startsWith('## ')) return `<h2>${value.slice(3)}</h2>`;
    if (value.startsWith('# ')) return `<h2>${value.slice(2)}</h2>`;
    const image = value.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (image) return `<img src="${image[2]}" alt="${image[1]}" />`;
    if (value.split('\n').every((line) => line.startsWith('- '))) {
      return `<ul>${value.split('\n').map((line) => `<li>${line.slice(2)}</li>`).join('')}</ul>`;
    }
    return `<p>${value.replace(/\n/g, '<br />')}</p>`;
  }).join('');
};

const ProjectStory: React.FC<{
  project: Project;
  onClose: () => void;
  onNext: () => void;
}> = ({ project, onClose, onNext }) => {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!storyRef.current) return;
    const resetStoryScroll = () => storyRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    resetStoryScroll();
    const frame = requestAnimationFrame(resetStoryScroll);
    const timer = window.setTimeout(resetStoryScroll, 120);
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo('.story-title-word', { yPercent: 120, rotate: 4 }, {
        yPercent: 0,
        rotate: 0,
        duration: 1,
        stagger: .08,
        ease: 'power4.out',
      });
      gsap.to('.story-hero-image', {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-hero',
          scroller: storyRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.utils.toArray('.story-reveal').forEach((element: any) => {
        gsap.from(element, {
          y: 70,
          opacity: 0,
          rotate: 1.5,
          duration: .9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            scroller: storyRef.current,
            start: 'top 88%',
          },
        });
      });
    }, storyRef);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      context.revert();
    };
  }, [project.id]);

  return (
    <div ref={storyRef} className="story-modal fixed inset-0 z-[100] overflow-y-auto bg-[#f4efe7]">
      <div className="story-nav fixed left-0 right-0 top-0 z-[120] flex items-center justify-between px-4 py-4 md:px-8">
        <button onClick={onClose} className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider shadow-[0_12px_30px_rgba(58,31,26,.12)]">
          <ArrowLeft size={17} /> Back
        </button>
        <span className="hidden rounded-full bg-[#3a1f1a] px-5 py-3 text-[10px] font-black uppercase tracking-[.2em] text-white sm:block">
          Icese’s project journal
        </span>
        <button onClick={onClose} aria-label="Close project" className="rounded-2xl bg-[#e8b4c4] p-3 text-[#3a1f1a] shadow-[0_12px_30px_rgba(58,31,26,.12)]">
          <X size={20} />
        </button>
      </div>

      <header className="story-hero relative flex min-h-screen items-end overflow-hidden bg-[#171815] px-6 pb-14 pt-28 md:px-10 md:pb-20">
        <div className="story-grid absolute inset-0 opacity-40" />
        <img src={project.imageUrl} alt="" className="story-hero-image absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/48 to-black/25" />
        <div className="absolute left-[6%] top-[18%] h-28 w-28 rotate-12 rounded-full border border-white/20 bg-[#8ebad6]/70 md:h-44 md:w-44" />
        <div className="relative z-20 mx-auto grid w-full max-w-[1400px] items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <span className="mb-5 inline-block rotate-[-2deg] rounded-full border border-white/25 bg-[#75a7c7] px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white">{project.category}</span>
            <h1 className="story-project-title max-w-5xl text-[clamp(3.7rem,9vw,9rem)] font-black leading-[.9] tracking-[-.065em] text-white drop-shadow-2xl">
              {project.title.split(' ').map((word, index) => (
                <span key={`${word}-${index}`} className="mr-[.16em] inline-block overflow-hidden px-[.025em] pb-[.18em] pt-[.08em]">
                  <span className={`story-title-word inline-block ${index % 3 === 1 ? 'font-serif italic font-medium text-[#f2d7df]' : ''}`}>{word}</span>
                </span>
              ))}
            </h1>
          </div>
          <div className="story-description-card relative rotate-1 border border-white/25 bg-black/70 p-6 pt-10 text-white shadow-[10px_12px_0_rgba(198,109,120,.75)] backdrop-blur-xl md:p-8 md:pt-11">
            <div className="tape absolute -top-4 left-1/2 h-9 w-36 -translate-x-1/2 rotate-3 bg-[#e8b4c4]/90" />
            <p className="text-lg leading-relaxed text-white/82">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tools?.map((tool) => <span key={tool} className="rounded-full border border-white/35 px-3 py-1 text-xs font-bold">{tool}</span>)}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-black uppercase">
                Visit project <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="relative px-5 py-24 md:px-10 md:py-36">
        <div className="absolute left-0 right-0 top-0 h-16 bg-[#8ebad6] torn-edge-top" />
        <div className="mx-auto max-w-[1260px]">
          {(project.challenge || project.solution || project.outcome) && (
            <div className="story-reveal mb-20 grid gap-5 md:grid-cols-3">
              {[
                ['01 / Challenge', project.challenge],
                ['02 / Solution', project.solution],
                ['03 / Outcome', project.outcome],
              ].filter(([, copy]) => copy).map(([label, copy], index) => (
                <article key={label} className={`case-template-card rounded-[2rem] p-6 shadow-[0_18px_45px_rgba(58,31,26,.10)] ${index === 1 ? 'bg-[#dceaf2]' : 'bg-white'}`}>
                  <span className="text-[10px] font-black uppercase tracking-[.2em]">{label}</span>
                  <p className="mt-5 text-lg font-bold leading-relaxed">{copy}</p>
                </article>
              ))}
            </div>
          )}
          <div className="story-reveal mb-20 grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="h-fit rotate-[-2deg] rounded-[2rem] bg-[#f6e6a6] p-7 shadow-[0_18px_45px_rgba(58,31,26,.12)] lg:sticky lg:top-28">
              <span className="text-xs font-black uppercase tracking-[.2em]">Project notes</span>
              <p className="mt-5 font-serif text-3xl italic leading-tight">A closer look at the thinking, making and final details.</p>
            </aside>
            <div className="project-story-body rounded-[2.5rem] bg-white p-6 shadow-[0_25px_70px_rgba(58,31,26,.12)] md:p-12" dangerouslySetInnerHTML={{ __html: formatCaseStudy(project.details, project.description) }} />
          </div>
          {project.gallery && project.gallery.length > 0 && (
            <div className="story-reveal mb-20 grid gap-5 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <img key={`${image}-${index}`} src={image} alt={`${project.title} gallery ${index + 1}`} className="w-full rounded-[2rem] bg-white p-2 shadow-[0_20px_50px_rgba(58,31,26,.12)]" />
              ))}
            </div>
          )}

          <button onClick={onNext} className="story-reveal group relative flex min-h-[360px] w-full items-end overflow-hidden rounded-[2.5rem] bg-[#8ebad6] p-8 text-left shadow-[0_25px_70px_rgba(58,31,26,.14)] md:p-12">
            <div className="absolute -right-10 -top-12 h-64 w-64 rounded-full bg-[#e8b4c4] opacity-80 transition-transform duration-700 group-hover:scale-[1.8]" />
            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-[.2em]">Keep exploring</span>
              <span className="mt-5 block text-5xl font-black tracking-[-.06em] md:text-8xl">Next project <ArrowRight className="inline transition-transform group-hover:translate-x-4" size={55} /></span>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ onModalChange }) => {
  const [filter, setFilter] = useState('Top');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const filtered = useMemo(() => getProjects(filter).slice(0, 8), [filter]);

  useEffect(() => {
    onModalChange?.(Boolean(selectedProject));
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      onModalChange?.(false);
    };
  }, [selectedProject, onModalChange]);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];
    const context = gsap.context(() => {
      gsap.fromTo('.category-folder', {
        y: 80,
        scale: .85,
      }, {
        y: 0,
        scale: 1,
        stagger: .12,
        duration: .9,
        ease: 'back.out(1.35)',
      });
      gsap.fromTo('.soft-file-card', {
        x: (index: number) => index % 2 ? 180 : -180,
        y: (index: number) => 90 + (index % 3) * 35,
        opacity: 0,
        rotate: (index: number) => index % 2 ? 12 : -12,
        scale: .72,
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        stagger: .1,
        duration: 1.05,
        ease: 'back.out(1.15)',
        scrollTrigger: {
          trigger: '.soft-file-grid',
          start: 'top 88%',
          once: true,
        },
      });
      const cards: HTMLElement[] = Array.from(sectionRef.current!.querySelectorAll<HTMLElement>('.soft-file-card'));
      cards.forEach((card) => {
        const surface = card.querySelector<HTMLElement>('.project-card-surface');
        if (!surface || window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
        const move = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - .5;
          const py = (event.clientY - bounds.top) / bounds.height - .5;
          gsap.to(surface, { rotateY: px * 8, rotateX: py * -8, scale: 1.025, transformPerspective: 700, duration: .32, ease: 'power2.out', overwrite: true });
        };
        const leave = () => gsap.to(surface, { rotateY: 0, rotateX: 0, scale: 1, duration: .45, ease: 'power3.out', overwrite: true });
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanups.push(() => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); });
        gsap.fromTo(card.querySelector('.project-card-image'), { clipPath: 'inset(18% 18% 18% 18% round 30px)', scale: 1.22 }, {
          clipPath: 'inset(0% 0% 0% 0% round 20px)', scale: 1, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 96%', end: 'center 62%', scrub: .65 },
        });
        gsap.to(card, {
          yPercent: (cards.indexOf(card) % 2 ? -7 : 7),
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.1 },
        });
      });
    }, sectionRef);
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [filter]);

  const changeFilter = (id: string) => {
    setFilter(id);
  };

  const nextProject = () => {
    if (!selectedProject) return;
    const current = PROJECTS.findIndex((project) => project.id === selectedProject.id);
    setSelectedProject(PROJECTS[(current + 1) % PROJECTS.length]);
  };

  return (
    <>
      <section ref={sectionRef} id={SectionId.PORTFOLIO} className="soft-portfolio relative overflow-hidden bg-[#f4efe7] px-5 py-24 md:px-10 md:py-36">
        <div className="desktop-grain absolute inset-0 opacity-60" />
        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1fr_auto]" data-scroll-reveal>
            <div>
              <span className="text-sm font-semibold text-[#75a7c7]">projects / archive</span>
              <h2 className="mt-4 text-[clamp(4rem,9vw,9rem)] font-black leading-[.78] tracking-[-.075em] text-[#3a1f1a]">Pick a <span className="font-serif italic font-medium text-[#75a7c7]">category.</span></h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-[#6a514a]">Open a folder to browse the work inside. Hover over a project file to bring it forward.</p>
          </div>

          <div className="category-folder-grid mb-20 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
            {CATEGORIES.map((category) => {
              const previews = getProjects(category.id).slice(0, 3).map((project) => project.imageUrl);
              const active = filter === category.id;
              return (
                <button key={category.id} onClick={() => changeFilter(category.id)} className={`category-folder group rounded-[2rem] px-4 pb-5 pt-9 text-center transition-all duration-500 ${active ? 'bg-[#dceaf2] shadow-[0_18px_45px_rgba(58,31,26,.10)]' : 'hover:bg-white/55'}`} aria-pressed={active} data-cursor="OPEN">
                  <div className="mx-auto flex h-28 items-end justify-center sm:h-36">
                    <div className="scale-[1.15] sm:scale-[1.45]">
                      <SoftFolder open={active} color="#8ebad6" previews={previews} />
                    </div>
                  </div>
                  <span className="mt-5 block text-sm font-semibold text-[#3a1f1a] md:text-base">{category.label}</span>
                  <span className="mt-1 block text-xs text-[#8a716a]">{getProjects(category.id).length} files</span>
                </button>
              );
            })}
          </div>

          <div className="mb-8 flex items-center justify-between border-b border-[#3a1f1a]/12 pb-4">
            <h3 className="text-2xl font-semibold tracking-[-.03em] text-[#3a1f1a]">{CATEGORIES.find((category) => category.id === filter)?.label}</h3>
            <span className="text-sm text-[#8a716a]">{filtered.length} shown</span>
          </div>

          <div className="soft-file-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((project, index) => (
              <button key={project.id} onClick={() => setSelectedProject(project)} className={`soft-file-card group relative overflow-hidden rounded-[1.8rem] bg-[#fffdf8] p-3 text-left shadow-[0_16px_38px_rgba(58,31,26,.08)] ${index % 5 === 1 ? 'lg:translate-y-8' : ''}`} data-cursor="VIEW" style={{ '--card-accent': project.accentColor || ['#8ebad6', '#e8b4c4', '#f6e6a6', '#b9d2c2'][index % 4] } as React.CSSProperties}>
                <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-card-surface relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#dceaf2] will-change-transform">
                  <img src={project.imageUrl} alt={project.title} className="project-card-image h-full w-full object-cover" />
                  <span className="project-card-wash" />
                  <span className="project-view-pill">Open case study</span>
                  <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#3a1f1a] shadow-sm backdrop-blur transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={19} /></span>
                </div>
                <div className="project-card-copy px-2 pb-3 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#75a7c7]">{project.category}</span>
                  <h3 className="mt-2 text-xl font-semibold leading-[1.02] tracking-[-.04em] text-[#3a1f1a]">{project.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && <ProjectStory project={selectedProject} onClose={() => setSelectedProject(null)} onNext={nextProject} />}
    </>
  );
};

export default Portfolio;
