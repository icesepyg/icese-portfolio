import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { SectionId } from '../types';

type Photo = { src: string; alt: string; caption: string; wide?: boolean };

type Story = {
  id: string;
  title: string;
  org: string;
  when: string;
  summary: string;
  intro: string;
  body: string[];
  highlights: { label: string; value: string }[];
  questions?: string[];
  photos: Photo[];
  links?: { label: string; url: string }[];
  tone: string;
  accent: string;
};

const A = '/assets/achievements/';
const N = '/assets/nutrishare/';

const MWA: Story = {
  id: 'mwa',
  title: 'Web Excellence winner, Personal category',
  org: 'Malaysia Website Awards 2025',
  when: 'Award night, 2025 awards',
  summary: 'The site you are looking at, icesephoon.com, was named one of the best personal websites in Malaysia. I designed and coded it myself, from the scrapbook visual language to the motion and the case study pages.',
  intro: 'The Malaysia Website Awards recognise outstanding Malaysian websites every year. My portfolio, icesephoon.com, won Web Excellence in the Personal category.',
  body: [
    'I treated my portfolio as a product rather than a gallery. The visitor is usually a recruiter or hiring manager with a few minutes, so the site leads with who I am and what I do, then lets them open any project as a full case study with the problem, my decisions and the result.',
    'The visual language is a soft scrapbook: pastel paper colours, tape, tilted photo cards and folders for project categories. It reflects how I like to work, collecting research, sketches and screens before shaping them into something clear.',
    'I built it in React and TypeScript with GSAP for scroll motion, and connected Decap CMS on Netlify so I can update projects without touching code. Motion is used to guide attention, and it switches off for people who prefer reduced motion.',
  ],
  highlights: [
    { label: 'Award', value: 'Web Excellence, Personal category' },
    { label: 'Prize', value: 'RM1,000' },
    { label: 'Website', value: 'icesephoon.com' },
    { label: 'Built with', value: 'React, TypeScript, GSAP, Decap CMS, Netlify' },
  ],
  photos: [
    { src: `${A}mwa-stage.jpg`, alt: 'Icese on stage holding the Malaysia Website Awards 2025 Web Excellence prize board', caption: 'On stage at the Malaysia Website Awards with the Web Excellence board.', wide: true },
    { src: `${A}mwa-excellence-badge.png`, alt: 'Malaysia Website Awards Web Excellence badge', caption: 'The official Web Excellence badge.' },
  ],
  links: [{ label: 'Malaysia Website Awards', url: 'https://www.mwa.my/' }],
  tone: 'bg-[#f6e6a6]',
  accent: '#be4773',
};

const STORIES: Story[] = [
  {
    id: 'cdlc',
    title: 'CDLC Cohort 11.0 graduate',
    org: 'Crème de la Crème, Taylor’s University',
    when: 'Six weekends, June to July 2026',
    summary: 'A design student in six weekends of assessment centres with Shopee, Valiram, Maybank, Nestlé, CIMB and SD Guthrie. I came out thinking about the business behind the screen.',
    intro: 'A design student walks into an assessment centre. For six weekends in Taylor’s Crème de la Crème (CDLC) programme, that was my life, with challenges set by Shopee, Valiram, Maybank, Nestlé, CIMB and SD Guthrie.',
    body: [
      'It was far outside my comfort zone. Most participants came from business and finance, and there were moments when everyone else understood the business terms straight away while my brain was still loading. 😂',
      'Week by week I learned how to handle assessment centre questions properly. Instead of jumping to an answer, I first make sure I understand the problem, find the key issue, structure my thinking, weigh the options and explain why I recommend one. I also learned to speak up clearly in group discussions, listen to different views, and stay calm when a case doesn’t make sense at first.',
      'Surprisingly, it made me a better UI/UX designer. Good design is not only about how something looks. Real products have to solve user problems and business problems at the same time.',
      'I didn’t become a finance expert in six weeks (definitely not), but I became much more confident walking into unfamiliar spaces and answering problems in a structured way. I’m still a designer, just one who understands the business behind the screen a little better.',
      'Thank you to Izzy Mazlan for hosting and guiding us, to Taylor’s Career Services, to all six companies, and to everyone I learned from along the way.',
    ],
    questions: [
      'Are we solving the right problem?',
      'Does this create value for both the user and the business?',
      'Is this solution actually realistic?',
    ],
    highlights: [
      { label: 'Cohort', value: '11.0, graduated' },
      { label: 'Format', value: '6 weekends of assessment centres' },
      { label: 'Companies', value: 'Shopee, Valiram, Maybank, Nestlé, CIMB, SD Guthrie' },
      { label: 'What I built', value: 'Structured problem solving, presenting, group discussion' },
    ],
    photos: [
      { src: `${A}cdlc-cimb-pitch.jpg`, alt: 'Icese presenting a digital SME onboarding journey at the CIMB assessment centre', caption: 'Presenting our digital SME onboarding journey at the CIMB challenge.' },
      { src: `${A}cdlc-shopee.jpg`, alt: 'Icese at the Shopee Graduate Development Program session', caption: 'At the Shopee session.' },
      { src: `${A}cdlc-cimb-team.jpg`, alt: 'Icese and her team with the CIMB host after Project RISE', caption: 'Our team after the CIMB Project RISE challenge.' },
      { src: `${A}cdlc-groupwork.jpg`, alt: 'Students discussing a case around a table', caption: 'Group case work: understand the problem before solving it.', wide: true },
      { src: `${A}cdlc-lego.jpg`, alt: 'Icese and her team with a Lego model they built', caption: 'Building our idea with Lego during a team challenge.', wide: true },
      { src: `${A}cdlc-maybank.jpg`, alt: 'Cohort group photo at the Maybank session', caption: 'Maybank session.' },
      { src: `${A}cdlc-sdguthrie.jpg`, alt: 'Cohort group photo at the SD Guthrie session', caption: 'SD Guthrie session.' },
      { src: `${A}cdlc-shopee-group.jpg`, alt: 'Cohort group photo at the Shopee session', caption: 'Shopee session with Cohort 11.' , wide: true },
      { src: `${A}cdlc-graduate.jpg`, alt: 'Icese holding her CDLC certificate of achievement', caption: 'Graduating with my certificate of achievement.' },
      { src: `${A}cdlc-certificates.jpg`, alt: 'CDLC certificates of achievement', caption: 'Certificates from the programme.' },
      { src: `${A}cdlc-taylors.jpg`, alt: 'Icese receiving her certificate at Taylor’s University', caption: 'Receiving my certificate at Taylor’s University.', wide: true },
    ],
    tone: 'bg-[#dceaf2]',
    accent: '#2f6f97',
  },
  {
    id: 'aot',
    title: 'UI/UX speaker, Frontend For All',
    org: 'Agents of Tech, Taylor’s University',
    when: '16 May 2026',
    summary: 'Delivered a beginner workshop on UI/UX fundamentals at the Agents of Tech pre-hackathon, covering design thinking, wireframing and interface design.',
    intro: 'Agents of Tech invited me to speak at Frontend For All, a pre-hackathon workshop that prepares students to build their first products.',
    body: [
      'Most participants were computing students who could code but had never designed an interface. I built the session around one idea: good UI starts with understanding the person using it.',
      'I walked through design thinking, turning a problem into wireframes, and the interface basics that make the biggest difference for beginners: hierarchy, spacing, colour, type and clear calls to action. I used examples from my own projects so the advice felt practical rather than theoretical.',
      'Teaching it forced me to explain decisions I usually make by instinct, which made me a clearer communicator with developers and stakeholders.',
    ],
    highlights: [
      { label: 'Role', value: 'Speaker' },
      { label: 'Audience', value: 'Students preparing for a hackathon' },
      { label: 'Topics', value: 'Design thinking, wireframing, interface design' },
      { label: 'Date', value: '16 May 2026' },
    ],
    photos: [
      { src: `${A}aot-group.jpg`, alt: 'Group photo of participants at the Frontend For All workshop', caption: 'With participants after the Frontend For All workshop.', wide: true },
      { src: `${A}aot-handover.jpg`, alt: 'Icese with an organiser holding a certificate', caption: 'Certificate handover after my session.', wide: true },
    ],
    tone: 'bg-[#f6e6a6]',
    accent: '#9a6a00',
  },
  {
    id: 'dxp',
    title: 'Digital Acceleration Program',
    org: 'Kabel and SME Association of Malaysia',
    when: '2026',
    summary: 'Solved a real business challenge for Nucleus Advisory with a Taylor’s team, and earned a Certificate of Completion.',
    intro: 'The Digital Acceleration Program (DXP), by Kabel and the SME Association of Malaysia, pairs Taylor’s students with real Malaysian companies to solve business challenges through digital strategy.',
    body: [
      'My team worked with Nucleus Advisory, an AI-powered talent and organisational consulting firm. The challenge was to present a complex, expert service clearly online and turn interest into enquiries.',
      'I focused on the website experience: a clear hierarchy from promise to proof to action, capability cards that make a broad service easy to scan, trust signals such as partners, clients and testimonials, and a contact form that routes enquiries by area of interest.',
      'Working with a real client taught me to balance what a business wants to say with what its visitors need to know first. The full page-by-page breakdown is in the Nucleus Advisory case study under Projects.',
    ],
    highlights: [
      { label: 'Client', value: 'Nucleus Advisory' },
      { label: 'My focus', value: 'Website UX, structure and UI' },
      { label: 'Awarded by', value: 'Kabel and SME Association of Malaysia' },
      { label: 'Result', value: 'Certificate of Completion' },
    ],
    photos: [
      { src: `${A}dxp-certificate.jpg`, alt: 'DXP Certificate of Completion for Phoon Yuk Guan', caption: 'Certificate of Completion, Digital Acceleration Program.', wide: true },
      { src: '/assets/nucleus/01-hero.jpg', alt: 'Nucleus Advisory home page hero', caption: 'Home: one promise and one main action.' },
      { src: '/assets/nucleus/03-capabilities.jpg', alt: 'Nucleus Advisory capability cards', caption: 'Four capability cards make the service easy to scan.' },
      { src: '/assets/nucleus/11-contact.jpg', alt: 'Nucleus Advisory contact form', caption: 'Contact form with area-of-interest options.' },
    ],
    links: [{ label: 'Visit nucleusadvisory.co', url: 'https://nucleusadvisory.co' }],
    tone: 'bg-[#e8d9ef]',
    accent: '#6b4a8c',
  },
  {
    id: 'crashout',
    title: 'Exhibitor at Crash Out',
    org: 'Taylor’s Design Showcase',
    when: '2026',
    summary: 'Showed NutriShare to the public with a hands-on booth, a working web app and a branded photobooth that printed real strips.',
    intro: 'Crash Out is the Taylor’s Design Showcase for graduating UI/UX students, held in a shopping mall so the public can walk in. I exhibited my final year project, NutriShare.',
    body: [
      'I designed the booth like a funnel. A bold pull-up banner and the crocodile mascot caught attention from across the mall. An A1 board explained the idea in three steps (donate, match, deliver) for people who slowed down. For people who stopped, the mobile prototype and the live desktop web app were ready to try.',
      'To give visitors a reason to stay, I built a photobooth with NutriShare frames and connected it to a printer: RM5 for two printed strips. While their strips printed, I walked them through the app. It turned a hard-to-explain cause into a fun, memorable conversation.',
      'Watching strangers use NutriShare for the first time was the best usability test I could ask for. I noticed where they hesitated and which features made them smile, and it confirmed that the receiver-first journey was easy to follow.',
    ],
    highlights: [
      { label: 'Project', value: 'NutriShare, final year project' },
      { label: 'Booth', value: 'Banner, A1 board, live app, photobooth' },
      { label: 'Photobooth', value: 'RM5 for two printed strips' },
      { label: 'Audience', value: 'Public visitors, lecturers and industry' },
    ],
    photos: [
      { src: `${N}expo-booth-full.jpg`, alt: 'Icese at her NutriShare booth', caption: 'The full booth on the mall floor.' },
      { src: `${N}expo-booth-icese.jpg`, alt: 'Icese standing at the NutriShare booth with laptops', caption: 'Ready for visitors, with the app on every screen.' },
      { src: `${N}expo-poster.jpg`, alt: 'Icese holding the A1 board next to the Crash Out banner', caption: 'The A1 board and Crash Out banner.' },
      { src: `${N}expo-photobooth.jpg`, alt: 'Photobooth laptop, printer and RM5 for 2 sign', caption: 'The photobooth corner with printed sample strips.' },
      { src: `${N}expo-booth-wide.jpg`, alt: 'Booth with desktop, laptops and printer', caption: 'Desktop and laptops for hands-on testing.' },
      { src: `${N}expo-poster-laptop.jpg`, alt: 'Banner and laptop showing the NutriShare website', caption: 'The banner and the live website side by side.' },
    ],
    links: [
      { label: 'Open NutriShare', url: 'https://nutrishare.netlify.app/' },
      { label: 'Try the photobooth', url: 'https://icese-photobooth.netlify.app' },
    ],
    tone: 'bg-[#b9d2c2]',
    accent: '#2f6b47',
  },
];

const StoryModal: React.FC<{ story: Story; onClose: () => void }> = ({ story, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState<Photo | null>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, []);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (zoom) setZoom(null);
      else onClose();
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [zoom, onClose]);

  return (
    <div className="award-modal fixed inset-0 z-[130] overflow-y-auto bg-[#fffdf8]" role="dialog" aria-modal="true" aria-labelledby={`story-${story.id}`}>
      <div className="sticky top-0 z-10 flex items-center justify-between bg-[#fffdf8]/90 px-4 py-4 backdrop-blur md:px-8">
        <span className="text-sm font-bold text-[#8a716a]">Recognition</span>
        <button ref={closeRef} onClick={onClose} className="flex items-center gap-2 rounded-full bg-[#3a1f1a] px-5 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#75a7c7]">
          Close <X size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-6 md:px-10">
        <header className={`award-modal-head rounded-[2.2rem] p-7 md:p-12 ${story.tone}`}>
          <p className="font-bold" style={{ color: story.accent }}>{story.org}</p>
          <h2 id={`story-${story.id}`} className="mt-3 max-w-4xl text-[clamp(2.6rem,6vw,5.6rem)] font-black leading-[.9] tracking-[-.06em] text-[#3a1f1a]">{story.title}</h2>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-[#3a1f1a] md:text-xl">{story.intro}</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {story.highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/70 p-4">
                <dt className="text-xs font-bold text-[#8a716a]">{item.label}</dt>
                <dd className="mt-1 font-black leading-snug text-[#3a1f1a]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-sm text-[#8a716a]">{story.when}</p>
            {story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-[#55443f]">{paragraph}</p>
            ))}
            {story.questions && (
              <div className="mt-8 rounded-[1.6rem] p-6" style={{ backgroundColor: '#f4efe7' }}>
                <p className="font-black text-[#3a1f1a]">Questions I now ask on every design</p>
                <ul className="mt-3 grid gap-2">
                  {story.questions.map((question) => (
                    <li key={question} className="flex gap-3 text-[#55443f]"><span className="mt-[.6em] h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: story.accent }} />{question}</li>
                  ))}
                </ul>
              </div>
            )}
            {story.links && (
              <div className="mt-8 flex flex-wrap gap-3">
                {story.links.map((link, index) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${index === 0 ? 'bg-[#3a1f1a] text-white' : 'border border-[#3a1f1a]/25 text-[#3a1f1a]'}`}>
                    {link.label} <ExternalLink size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {story.photos.map((photo) => (
              <figure key={photo.src} className={photo.wide ? 'sm:col-span-2' : ''}>
                <button onClick={() => setZoom(photo)} className="block w-full overflow-hidden rounded-[1.4rem] bg-[#f4efe7] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#75a7c7]" aria-label={`Enlarge photo: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" className={`w-full transition-transform duration-500 hover:scale-[1.03] ${photo.src.endsWith('.png') ? 'mx-auto max-h-80 object-contain p-8' : 'object-cover'}`} />
                </button>
                <figcaption className="mt-2 text-sm text-[#6a514a]">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {zoom && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-[#171311]/92 p-4 md:p-10" onClick={() => setZoom(null)} role="dialog" aria-modal="true" aria-label="Enlarged photo">
          <img src={zoom.src} alt={zoom.alt} className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl" />
          <button onClick={() => setZoom(null)} aria-label="Close enlarged photo" className="absolute right-4 top-4 rounded-full bg-white p-3 text-[#3a1f1a]"><X size={20} /></button>
          <p className="absolute bottom-4 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-center text-sm text-white">{zoom.caption}</p>
        </div>
      )}
    </div>
  );
};

const Achievements: React.FC = () => {
  const [open, setOpen] = useState<Story | null>(null);

  return (
    <section id={SectionId.AWARDS} className="relative overflow-hidden bg-[#fffdf8] px-5 py-24 md:px-10 md:py-36" aria-labelledby="awards-title">
      <div className="scrap-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="awards-title" className="max-w-5xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-black leading-[.86] tracking-[-.07em] text-[#3a1f1a]">
            Recognition I’m proud of.
          </h2>
          <p className="max-w-xs text-base leading-relaxed text-[#6a514a]">Open any card for the full story and every photo.</p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16" data-scroll-reveal>
          <button onClick={() => setOpen(MWA)} className="award-photo group relative mx-auto block w-full max-w-[760px] text-left" aria-label="Open the Malaysia Website Awards story" data-cursor="OPEN">
            <div className="rotate-[-2deg] rounded-[1.6rem] bg-white p-3 pb-14 shadow-[0_30px_70px_rgba(58,31,26,.16)] transition-transform duration-500 group-hover:rotate-0 md:p-4 md:pb-16">
              <img
                src={`${A}mwa-stage.jpg`}
                alt="Icese on stage holding the Malaysia Website Awards 2025 Web Excellence prize board"
                className="aspect-[3/2] w-full rounded-[1rem] object-cover"
                loading="lazy"
                width={1600}
                height={1066}
              />
              <span className="absolute bottom-4 left-6 right-28 font-serif text-lg italic text-[#6a514a] md:bottom-5 md:text-xl">Award night, Malaysia Website Awards</span>
            </div>
            <img
              src={`${A}mwa-excellence-badge.png`}
              alt=""
              className="absolute -bottom-8 -right-3 w-28 rotate-[10deg] drop-shadow-[0_14px_22px_rgba(58,31,26,.28)] transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-110 md:-right-8 md:w-40"
              width={181}
              height={180}
            />
            <span className="tape absolute -top-4 left-10 h-9 w-32 -rotate-6 bg-[#e8b4c4]/80" />
          </button>

          <div>
            <p className="text-lg font-bold text-[#be4773]">{MWA.org}</p>
            <h3 className="mt-3 text-[clamp(2.4rem,4.4vw,4.4rem)] font-black leading-[.92] tracking-[-.055em] text-[#3a1f1a]">{MWA.title}</h3>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-[#55443f]">{MWA.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => setOpen(MWA)} className="inline-flex items-center gap-2 rounded-full bg-[#3a1f1a] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                Read the story <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <a href="https://www.mwa.my/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#3a1f1a]/20 bg-white py-1.5 pl-1.5 pr-4 text-sm font-bold text-[#3a1f1a] transition-transform hover:-translate-y-0.5">
                <img src={`${A}mwa-excellence-ribbon.png`} alt="" className="h-9 w-auto" width={68} height={100} />
                mwa.my <ExternalLink size={14} aria-hidden="true" />
              </a>
              <span className="rounded-full bg-[#f6e6a6] px-4 py-2 text-sm font-bold text-[#3a1f1a]">RM1,000 prize</span>
            </div>
          </div>
        </div>

        <ul className="mt-28 grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:grid-cols-[1fr_1.25fr]">
          {STORIES.map((story, index) => (
            <li key={story.id} data-scroll-reveal className={index % 2 ? 'md:translate-y-10' : ''}>
              <button onClick={() => setOpen(story)} className={`award-card group block h-full w-full rounded-[1.8rem] p-4 text-left shadow-[0_18px_45px_rgba(58,31,26,.10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(58,31,26,.16)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#75a7c7] ${story.tone}`} data-cursor="OPEN">
                <span className="relative block overflow-hidden rounded-[1.2rem]">
                  <img src={story.photos[0].src} alt={story.photos[0].alt} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${index % 2 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`} />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#3a1f1a] backdrop-blur">{story.photos.length} photos</span>
                </span>
                <span className="block px-2 pb-2 pt-5">
                  <span className="block text-2xl font-black leading-tight tracking-[-.035em] text-[#3a1f1a]">{story.title}</span>
                  <span className="mt-1 block font-bold text-[#6a514a]">{story.org}</span>
                  <span className="block text-sm text-[#8a716a]">{story.when}</span>
                  <span className="mt-3 block leading-relaxed text-[#55443f]">{story.summary}</span>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#3a1f1a] px-4 py-2 text-sm font-bold text-white">Read the story <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" aria-hidden="true" /></span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open && createPortal(<StoryModal story={open} onClose={() => setOpen(null)} />, document.body)}
    </section>
  );
};

export default Achievements;
