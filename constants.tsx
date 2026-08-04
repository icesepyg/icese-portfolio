



import { Experience, Project, Skill, Certification } from './types';
import managedContent from './content/managed.json';
import { 
  Figma, 
  PenTool, 
  Code, 
  Layout, 
  Video, 
  Palette, 
  Globe,
  Cpu,
  Layers,
  Image,
  BarChart,
  ShoppingBag
} from 'lucide-react';

export const COLORS = {
  pinkLight: '#fce7f3',    
  pinkMedium: '#f9a8d4',
  pinkDark: '#be185d',
  greenLight: '#dcfce7',   
  greenMedium: '#86efac',
  greenDark: '#15803d',
};

const CORE_EXPERIENCES: Experience[] = [
  {
    id: '3go-tech',
    role: 'UI/UX Designer',
    company: '3go Technology Sdn Bhd',
    type: 'Full-time',
    description: [
      'Conceptualize and create intuitive, engaging, and brand-consistent web experiences.',
      'Continually improve and optimize user interface and user experience for sites.',
      'Collaborate in concept development and design ideation cross-functionally to help define a creative strategy.',
      'Benchmark, analyze, report on, and make recommendations for the improvement and growth of the UX/UI team.',
      'Develop wireframes and prototypes around customer needs.',
      'Find creative ways to solve UX problems (e.g. usability, findability).',
      'Work with UI engineers to explain design progress and implementations.',
      'Conduct layout adjustments based on user feedback.',
      'Adhere to style standards on typography and graphic design.'
    ]
  },
  {
    id: 'ai-agency',
    role: 'Landing Page & Funnel Designer',
    company: 'AI Agency & Occupie Marketing',
    type: 'Full-time',
    description: [
      'Built high-conversion landing & funnel pages using Automation.AI, WordPress, and Wix.',
      'Implemented automation marketing, CRM & email automation.',
      'Boosted visitor-to-buyer conversions by 10–30%.',
      'Handled UI/UX designs for 3–5 clients monthly.',
      'Conceptualised marketing post ideas and ad content.',
      'Utilized Click Funnels for sales funnels.'
    ]
  },
  {
    id: 'the-8-chapter',
    role: 'Online Business Owner',
    company: 'The 8 Chapter',
    type: 'Business Owner',
    description: [
      'Managed social media & E-Commerce platform (Easy.co).',
      'Handled financial management (cash flow), inventory control, and CRM.',
      'Executed SEO & online advertising for brand building.',
      'Analyzed performance via Google Analytics & Facebook Insights.'
    ]
  },
  {
    id: 'jn-group',
    role: 'Social Media Manager & Designer',
    company: 'JN Group',
    type: 'Part-time',
    description: [
      'Designed Instagram posts & stories.',
      'Managed social media scheduling and planning.',
      'Edited short promotional videos.'
    ]
  },
  {
    id: 'taylors-digital',
    role: 'Website & Video Editor',
    company: "Taylor's Digital Technology",
    type: 'Student Activity',
    description: [
      'Maintained webpages in alignment with brand guidelines.',
      'Fixed broken links and content errors.',
      'Produced & edited videos for Taylor’s official social media.'
    ]
  },
  {
    id: 'taylors-broadcasting',
    role: 'PR Director & Content Designer',
    company: "Taylor's Chinese Broadcasting Club",
    type: 'Student Activity',
    description: [
      'Board of Director for Public Relations.',
      'Created engaging Instagram content.',
      'Assisted in event planning and organization.'
    ]
  },
  {
    id: 'taylors-orientation',
    role: 'Vice President & Project Manager',
    company: "Taylor's Orientation Leader",
    type: 'Student Activity',
    description: [
      'Project Manager for Orientation Party: Executed events, managed budget, allocated resources.',
      'Sponsorship Executive (SET): Handled media marketing.',
      'Content Creator Team (CCT): Created social posts for sponsors.',
      'Designed all event assets: Logos, posters, t-shirts, lanyards, tickets, wristbands.'
    ]
  }
];

const CORE_SKILLS: Skill[] = [
  { name: 'Figma', category: 'Design', icon: Figma },
  { name: 'Adobe Illustrator', category: 'Design', icon: PenTool },
  { name: 'Adobe Photoshop', category: 'Design', icon: Palette },
  { name: 'Adobe InDesign', category: 'Design', icon: Layout },
  { name: 'Adobe After Effects', category: 'Design', icon: Layers },
  { name: 'Adobe Animate', category: 'Design', icon: Video },
  { name: 'Adobe Premiere Pro', category: 'Design', icon: Video },
  { name: 'Adobe Lightroom', category: 'Design', icon: Image },
  { name: 'Adobe Dreamweaver', category: 'Development', icon: Code },
  { name: 'HTML5/CSS3', category: 'Development', icon: Layout },
  { name: 'JavaScript', category: 'Development', icon: Code },
  { name: 'WordPress', category: 'Development', icon: Globe },
  { name: 'Automation.ai', category: 'Development', icon: Cpu },
  { name: 'Google Analytics', category: 'Tools', icon: BarChart },
  { name: 'CapCut / InShot', category: 'Tools', icon: Video },
];

const CORE_CERTIFICATIONS: Certification[] = [
  { name: 'MUET Band 4.5', issuer: 'Malaysian University English Test' },
  { name: 'Business Management Essentials (BMEC)', issuer: 'Management & Strategy Institute' },
  { name: 'Machine Learning in ChatGPT', issuer: 'MachineLearning.org.in' },
  { name: 'Graphic Design & Illustration', issuer: 'The Design Adda Collective' },
  { name: 'Fundamentals of Web Design', issuer: 'HRD Corp' },
  { name: 'Google Ads Search Certification', issuer: 'Google Digital Academy' }
];

const CORE_PROJECTS: Project[] = [
  // --- CELESTIAL EVENT (Moved to Top) ---
  {
    id: 'celestial-event',
    title: 'Celestial - Orientation Party 2024',
    category: 'Brand Identity & Event Design',
    group: 'Event',
    description: 'Comprehensive brand identity and visual system for Taylor\'s University Orientation Party.',
    details: `
      <div class="space-y-24 font-['DM_Sans'] bg-[#0f0f1a] text-white p-6 md:p-12 -mx-6 md:-mx-12 rounded-[2rem] shadow-2xl overflow-hidden relative">
         
         <!-- Ambient Background Glows -->
         <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/40 via-blue-900/20 to-transparent pointer-events-none"></div>
         <div class="absolute top-20 right-[-100px] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div class="absolute bottom-40 left-[-100px] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

         <!-- 1. Overview -->
         <section class="relative z-10">
             <div class="flex items-end gap-4 mb-8">
                <h2 class="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 leading-tight">1. Project Overview</h2>
                <div class="h-px bg-white/20 flex-grow mb-4"></div>
             </div>

             <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-shadow duration-500">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                   <div class="space-y-4">
                      <div class="bg-indigo-900/40 p-4 rounded-xl border-l-4 border-pink-400">
                         <span class="text-xs uppercase tracking-widest text-indigo-300 block mb-1">Event</span>
                         <strong class="text-xl">Celestial — Orientation Party 2024</strong>
                      </div>
                      <div class="bg-indigo-900/40 p-4 rounded-xl border-l-4 border-purple-400">
                         <span class="text-xs uppercase tracking-widest text-purple-300 block mb-1">Institution</span>
                         <strong class="text-xl">Taylor’s University</strong>
                      </div>
                   </div>
                   <div class="space-y-4">
                      <div class="bg-indigo-900/40 p-4 rounded-xl border-l-4 border-blue-400">
                         <span class="text-xs uppercase tracking-widest text-blue-300 block mb-1">Role</span>
                         <strong class="text-xl">Lead Brand Designer</strong>
                      </div>
                      <div class="bg-indigo-900/40 p-4 rounded-xl border-l-4 border-cyan-400">
                         <span class="text-xs uppercase tracking-widest text-cyan-300 block mb-1">Scope</span>
                         <strong class="text-xl">Brand identity, design system, print, merch, art direction</strong>
                      </div>
                   </div>
                </div>
                <p class="text-lg md:text-xl text-gray-300 leading-relaxed font-light">Celestial was the official visual identity created for Taylor’s University Orientation Party 2024. The theme, <span class="text-pink-300 font-serif italic">“Where Stars Align,”</span> was developed to visually and emotionally represent new beginnings, community, and the beautiful collision of different paths converging at Taylor’s.</p>
                <p class="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">Rather than designing isolated visuals, I built Celestial as a complete <strong class="text-white">brand universe</strong> — one that lives across print, digital screens, physical event spaces, merchandise, and storytelling assets.</p>
             </div>
         </section>

         <!-- 2. Creative Direction -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-5xl font-serif text-white mb-10 flex items-center gap-4">
               2. Creative Direction <span class="w-12 h-12 bg-pink-500"></span>
            </h3>
            <p class="text-xl text-gray-300 mb-10 max-w-3xl">Celestial’s identity was developed using three core design pillars that guided every element across all layouts and collateral.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
               <div class="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 p-8 rounded-[2rem] border border-indigo-500/30 hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  <div class="w-12 h-12 bg-indigo-500 rounded-full blur-[20px] absolute top-6 right-6 opacity-40"></div>
                  <strong class="block text-2xl font-serif text-indigo-200 mb-4">Celestial Constellations</strong>
                  <p class="text-indigo-100/80 leading-relaxed">Constellations, star trails, planets, and comet-like strokes represent alignment — new friendships forming, students crossing paths, and unique stories meeting in one shared orbit.</p>
               </div>
               
               <div class="bg-gradient-to-br from-pink-900/80 to-rose-900/80 p-8 rounded-[2rem] border border-pink-500/30 hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  <div class="w-12 h-12 bg-pink-500 rounded-full blur-[20px] absolute top-6 right-6 opacity-40"></div>
                  <strong class="block text-2xl font-serif text-pink-200 mb-4">Musical Motion</strong>
                  <p class="text-pink-100/80 leading-relaxed">Floating musical notes symbolise celebration, rhythm, laughter, and the overall vibrancy of campus life. These elements visually express performance energy and youth culture.</p>
               </div>
               
               <div class="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 p-8 rounded-[2rem] border border-cyan-500/30 hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  <div class="w-12 h-12 bg-cyan-500 rounded-full blur-[20px] absolute top-6 right-6 opacity-40"></div>
                  <strong class="block text-2xl font-serif text-cyan-200 mb-4">Futuristic Glow</strong>
                  <p class="text-cyan-100/80 leading-relaxed">Gradients, glow effects, nebula-like shading, and metallic typography create a dreamy, modern fantasy atmosphere — fitting for a night that marks the beginning of a new academic journey.</p>
               </div>
            </div>
            <p class="mt-8 text-xl text-center font-serif text-white/60 italic border-t border-white/10 pt-8">Together, these principles shaped an environment that feels magical, immersive, and full of hope.</p>
         </section>

         <!-- 3. Main Logo -->
         <section class="relative z-10 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h3 class="text-3xl md:text-4xl font-serif text-white mb-6">3. Main Logo Design</h3>
                  <p class="text-lg text-gray-300 leading-relaxed mb-6">The Main Logo reflects the cosmic essence of Celestial. Its composition includes planet rings, orbital trails, sparks, and musical accents, all orbiting the word “Celestial.”</p>
                  <p class="text-lg text-gray-300 leading-relaxed mb-6">Design considerations included strong central radiance to symbolise unity, starburst marks to create motion, musical notes as delicate decorative details, and elegant typography with a slight fantasy touch.</p>
                  <p class="text-lg text-gray-300 leading-relaxed">The logo was designed to scale seamlessly across large hall banners, LED screens, print tickets, merchandise, badges, and small icon placements. The final design maintains high clarity at any size and instantly communicates the spirit of the event.</p>
               </div>
               <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-[20px] opacity-20"></div>
                  <img src="assets/celestial-main-logo.jpg" alt="Celestial Main Logo" class="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20" />
               </div>
            </div>
         </section>

         <!-- 4. Design Assets -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-5xl font-serif text-white mb-8 text-center">4. Design Assets System</h3>
            <div class="bg-gray-900/50 p-8 rounded-[2rem] border border-gray-700">
               <div class="grid lg:grid-cols-2 gap-12">
                  <img src="assets/celestial-assets.jpg" alt="Design Assets System" class="w-full h-auto rounded-2xl shadow-lg border border-gray-700" />
                  <div class="flex flex-col justify-center">
                     <p class="text-xl text-gray-300 leading-relaxed mb-6">The design assets were created as modular building blocks to ensure consistency across all event materials.</p>
                     <ul class="space-y-3 mb-6">
                        <li class="flex items-center gap-3 text-gray-400"><span class="w-2 h-2 rounded-full bg-pink-500"></span>Planets & Sparks</li>
                        <li class="flex items-center gap-3 text-gray-400"><span class="w-2 h-2 rounded-full bg-purple-500"></span>Orbit lines & Music notes</li>
                        <li class="flex items-center gap-3 text-gray-400"><span class="w-2 h-2 rounded-full bg-cyan-500"></span>Event-specific symbols</li>
                     </ul>
                     <p class="text-gray-400 leading-relaxed">These graphical components enabled dynamic compositions without breaking the brand language. Every poster, card, signage, sticker, and UI screen remained visually consistent within the same universe.</p>
                  </div>
               </div>
            </div>
         </section>

         <!-- 5. Characters -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-8 border-l-4 border-yellow-400 pl-6">5. Characters Card Design</h3>
            <div class="space-y-6 text-lg text-gray-300 max-w-4xl">
               <p>The Characters Card Design focuses on the main characters of the Celestial orientation storyline, each representing their own planet and personality.</p>
               <p>Each card features planetary identity tied to the character, distinct traits hinting at persona roles, custom-framed layouts for recognisability, and orbit elements that strengthen the cosmic theme.</p>
               <p>These cards were more than visuals — they acted as a storytelling platform, turning the event into a narrative experience where students could recognise and follow central figures.</p>
               <p>Every card followed the same Celestial aesthetic: cosmic glow, star spark textures, planetary naming system, and consistent card architecture. They became signature artefacts that anchored the event’s visual storytelling.</p>
            </div>
            <div class="mt-10 p-4 bg-gradient-to-r from-yellow-900/20 to-transparent rounded-3xl border border-yellow-500/20">
               <img src="assets/celestial-characters.jpg" alt="Characters Card Design" class="w-full h-auto rounded-2xl shadow-xl" />
            </div>
         </section>

         <!-- 6. Posters -->
         <section class="relative z-10">
             <h3 class="text-3xl md:text-4xl font-serif text-white mb-8 border-l-4 border-blue-400 pl-6">6. Poster Designs</h3>
             <div class="grid lg:grid-cols-2 gap-10 mb-8">
                 <div class="text-lg text-gray-300 space-y-4">
                    <p>The Poster Designs provided navigational clarity while fully immersing students in the Celestial visual world.</p>
                    <p>Posters included the Main Event Poster, Ticket Collection Poster, Dinner Collection Poster, Stamp Rally Redemption Counter, and Directional Sign Posters.</p>
                    <p>The design approach used layered cosmic backgrounds, high-contrast typographic layouts, metallic-white typography for legibility, and constellations and orbit strokes framing key information.</p>
                    <p>These posters ensured students could navigate the event easily while remaining inside the fantasy universe.</p>
                 </div>
                 <div class="relative group">
                    <div class="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors"></div>
                    <img src="assets/celestial-posters.jpg" alt="Poster Designs" class="relative w-full h-auto rounded-xl shadow-2xl border border-white/10" />
                 </div>
             </div>
         </section>

         <!-- 7. Team Logos -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-8">7. Team Logo Designs</h3>
            <div class="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p class="text-lg text-gray-300 mb-6">To distinguish team roles behind the event, Team Logo Designs were created with thematic consistency and colour-coded identity. Teams included Orientation Party, Flashmob, Deco, Shooting, and Characters Team.</p>
                <p class="text-lg text-gray-300 mb-8">Each circular logo preserved Celestial’s core asset styling, typography treatment, and orbit-inspired composition. These logos were applied on crew identity markers, shirt stamps, lanyard symbols, and internal branding communication. They created pride, belonging, and structure among the organising teams.</p>
                <img src="assets/celestial-team-logos.jpg" alt="Team Logo Designs" class="w-full h-auto rounded-xl shadow-lg" />
            </div>
         </section>

         <!-- 8. T-Shirts -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-8 border-l-4 border-indigo-400 pl-6">8. T-Shirt Designs</h3>
            <div class="grid md:grid-cols-2 gap-10 items-center">
               <img src="assets/celestial-tshirts.jpg" alt="T-Shirt Designs" class="w-full h-auto rounded-2xl shadow-2xl border border-white/10 order-2 md:order-1" />
               <div class="text-lg text-gray-300 space-y-4 order-1 md:order-2">
                  <p>The T-Shirt Designs extended the brand into wearable identity. Two colourways were developed: <span class="text-blue-300 font-bold">Celestial Blue</span> and <span class="text-purple-300 font-bold">Cosmic White</span>.</p>
                  <p>Each shirt integrates the main logo back print, orbit trail graphics, character universe illustrations, themed typography, spark lights, and starbursts.</p>
                  <p>These shirts became unity wear, creating instant connection between attendees, crew members, and student leaders.</p>
               </div>
            </div>
         </section>

         <!-- 9. Photostrips -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6">9. Photostrips Design</h3>
            <p class="text-lg text-gray-300 mb-8 max-w-3xl">The Photostrips Design turned photography sessions into a fully branded experience using star textures, planet symbols, orbital frames, and musical accents. Students took home photos that visually tied back to the Celestial universe. As a high-traffic activity, the identity became instantly recognisable across social media.</p>
            <div class="p-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
               <img src="assets/celestial-photostrips.jpg" alt="Photostrips Design" class="w-full h-auto rounded-xl" />
            </div>
         </section>

         <!-- 10. Ticket -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6">10. Ticket Design</h3>
            <div class="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-8 rounded-[2rem] border border-white/10 shadow-lg">
               <p class="text-lg text-gray-300 mb-8">The Ticket Design reflected the event’s elegance and exclusivity. It included the programme title, venue and timing, spark trails, orbit frames, and tagline placement. The tickets also doubled as memory tokens, with many students keeping them after the event.</p>
               <img src="assets/celestial-ticket.jpg" alt="Ticket Design" class="w-full h-auto rounded-xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-500" />
            </div>
         </section>
         
         <!-- 11. Stickers -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6 border-b border-white/20 pb-4 inline-block">11. Sticker Design</h3>
            <p class="text-lg text-gray-300 mb-6">The Sticker Designs applied branding into small-scale collectibles used for thank-you gifts, crew packs, event rewards, and personal mementos. They emphasised the Celestial mark, glowing textures, and orbital compositions. These became small but powerful brand reinforcements throughout the event.</p>
            <div class="grid place-items-center bg-white/5 rounded-3xl p-8 border border-white/5">
                <img src="assets/celestial-stickers.jpg" alt="Sticker Designs" class="w-full max-w-4xl h-auto rounded-xl shadow-lg" />
            </div>
         </section>
         
         <!-- 12. Lanyard -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6 border-b border-white/20 pb-4 inline-block">12. Lanyard Design</h3>
            <p class="text-lg text-gray-300 mb-6">The Lanyard Design featured the event name, spark motifs, planet iconography, and the tagline “Where Stars Align.” Different versions were created for internal crew, external guests, and alumni. Colour variations preserved hierarchy while maintaining brand unity.</p>
            <div class="grid place-items-center bg-white/5 rounded-3xl p-8 border border-white/5">
                <img src="assets/celestial-lanyard.jpg" alt="Lanyard Design" class="w-full max-w-4xl h-auto rounded-xl shadow-lg" />
            </div>
         </section>

         <!-- 13. Wristband -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6 border-b border-white/20 pb-4 inline-block">13. Wristband Design</h3>
            <p class="text-lg text-gray-300 mb-6">The Wristband Design carried repeating music notes, spark lines, and the logotype. It functioned as admission control while staying fully branded.</p>
            <div class="grid place-items-center bg-white/5 rounded-3xl p-8 border border-white/5">
                <img src="assets/celestial-wristband.jpg" alt="Wristband Design" class="w-full max-w-4xl h-auto rounded-xl shadow-lg" />
            </div>
         </section>

         <!-- 14. Web Queue -->
         <section class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-6 border-b border-white/20 pb-4 inline-block">14. Website Queuing Page Design</h3>
            <div class="grid lg:grid-cols-2 gap-10 items-center">
               <div class="text-lg text-gray-300 space-y-4">
                   <p>A fully branded Website Queuing Page was designed to extend the Celestial identity into the digital experience.</p>
                   <p>It includes student ID input and search, queue status, confirmation icons, capacity indicator bar, and a cosmic gradient background.</p>
                   <p>This ensured Celestial existed not only physically, but digitally as well.</p>
               </div>
               <img src="assets/celestial-web-queue.jpg" alt="Website Queuing Page" class="w-full h-auto rounded-xl shadow-2xl border border-white/20" />
            </div>
         </section>

         <!-- 15. Outcomes -->
         <section class="relative z-10 bg-gradient-to-br from-indigo-900 to-purple-900 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-8">15. Design Outcomes</h3>
            <p class="text-lg text-indigo-100 mb-6 leading-relaxed">The Celestial identity successfully unified the entire event into one shared visual language.</p>
            <div class="grid md:grid-cols-2 gap-6 mb-8">
               <div class="bg-black/20 p-4 rounded-xl border border-white/5"><span class="text-pink-300 mr-2">✦</span> Recognisable brand presence</div>
               <div class="bg-black/20 p-4 rounded-xl border border-white/5"><span class="text-pink-300 mr-2">✦</span> Immersive thematic visuals</div>
               <div class="bg-black/20 p-4 rounded-xl border border-white/5"><span class="text-pink-300 mr-2">✦</span> Character-driven storytelling</div>
               <div class="bg-black/20 p-4 rounded-xl border border-white/5"><span class="text-pink-300 mr-2">✦</span> Memorable keepsakes</div>
            </div>
            <p class="text-2xl font-serif italic text-pink-300 text-center mt-8">"Celestial didn’t just decorate an orientation party. It built a world around it."</p>
         </section>

         <!-- 16. Reflection -->
         <section class="relative z-10 text-center max-w-4xl mx-auto py-12">
            <h3 class="text-3xl md:text-4xl font-serif text-white mb-8">16. Reflection</h3>
            <p class="text-xl text-gray-300 leading-relaxed mb-8">Designing Celestial taught me that branding becomes powerful when it carries meaning. Every spark stroke, every card frame, every gradient tone had a purpose — to make new students feel welcomed, excited, and connected to something bigger than themselves.</p>
            <p class="text-lg text-gray-400 leading-relaxed mb-10">Through this project, I strengthened my skills in brand system building, collateral consistency, thematic world-building, narrative character styling, and large-scale event identity application.</p>
            <div class="inline-block p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full">
               <div class="bg-black px-8 py-4 rounded-full">
                   <strong class="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300">Celestial was not just a theme. It became an experience.</strong>
               </div>
            </div>
         </section>

      </div>
    `,
    imageUrl: 'assets/celestial-cover.jpg',
    tools: ['Illustrator', 'Photoshop', 'Branding', 'Print Design'],
    span: 'col-span-1'
  },

  // --- WEB DESIGN PROJECTS ---
  {
    id: 'orientation-yearbook',
    title: 'The Orientation Leaders Yearbook 24/25',
    category: 'Web Design',
    group: 'Web',
    description: 'A digital yearbook platform connecting leaders and students.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        <section>
          <h2 class="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">The Orientation Leaders Yearbook 24/25 📖</h2>
          <div class="bg-gradient-to-r from-pink-50 to-white p-8 rounded-3xl border border-pink-100 shadow-sm">
             <p class="text-lg md:text-xl leading-relaxed text-gray-700">The Orientation Leaders Yearbook 24/25, a fully designed and developed website that documents the memories, achievements, and journey of the Orientation Leaders community across 2024 & 2025. This yearbook was built for the Taylor's Orientation Leaders under Taylor's University — a student body committed to welcoming new students and host orientation events for freshmen.</p>
          </div>
        </section>

        <!-- Project Origin Section -->
        <section class="relative overflow-hidden">
           <h3 class="text-3xl font-serif text-gray-900 mb-8 flex items-center gap-3">🚀 Project Origin & Execution</h3>
           
           <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg relative z-10">
              <p class="text-2xl font-serif text-gray-600 italic mb-8 border-l-4 border-pink-400 pl-6">"This project started as a simple idea: ‘How can we preserve our stories in a meaningful, interactive, and accessible way?’"</p>
              
              <p class="text-lg text-gray-700 leading-relaxed mb-8">From there, I took on the responsibility of bringing it to life — from concept, content structure, layout planning, UI/UX design, front-end development, media organization, and final deployment. I ideated and executed the entire project lifecycle, including:</p>

              <div class="grid gap-6">
                 <div class="flex gap-5 items-start bg-green-50/50 p-6 rounded-2xl border border-green-100">
                    <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 text-xl shadow-sm">✅</div>
                    <div>
                       <strong class="block text-gray-900 text-lg mb-2">UX Research & Information Architecture</strong>
                       <p class="text-gray-600 leading-relaxed">Structuring content flow, identifying user needs, and planning intuitive navigation for a community-focused platform.</p>
                    </div>
                 </div>
                 <div class="flex gap-5 items-start bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                    <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center shrink-0 text-xl shadow-sm">✅</div>
                    <div>
                       <strong class="block text-gray-900 text-lg mb-2">UI/UX Design (Figma)</strong>
                       <p class="text-gray-600 leading-relaxed">All pages, layouts, color palettes, typography, spacing systems, and components were designed from scratch using Figma. Every design decision was driven by readability, hierarchy, and emotional storytelling to create a warm, community focused experience.</p>
                    </div>
                 </div>
                 <div class="flex gap-5 items-start bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0 text-xl shadow-sm">✅</div>
                    <div>
                       <strong class="block text-gray-900 text-lg mb-2">Front-End Development</strong>
                       <p class="text-gray-600 leading-relaxed">Building the website using HTML, CSS, and JavaScript, implementing responsive layouts, media components, hover interactions, and custom UI behaviors.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <!-- Challenges Section -->
        <section>
           <h3 class="text-3xl font-serif text-gray-900 mb-8">🚧 Challenges & How I Overcame Them</h3>
           <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gradient-to-br from-orange-50 to-white p-8 rounded-[2rem] border border-orange-100 shadow-sm flex flex-col h-full">
                 <div class="mb-4">
                    <span class="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Challenge 1</span>
                    <strong class="block text-xl text-gray-900 leading-tight">Balancing emotional storytelling with functional clarity</strong>
                 </div>
                 <p class="text-gray-600 text-sm mb-6 flex-grow">Yearbooks are nostalgic, but websites must still be clean and usable. Too much decoration would hurt readability; too little would reduce emotional impact.</p>
                 <div class="bg-white p-5 rounded-xl border border-orange-200 shadow-sm relative">
                    <div class="absolute -top-3 left-6 w-6 h-6 bg-white border-t border-l border-orange-200 rotate-45"></div>
                    <strong class="text-orange-600 text-sm uppercase tracking-wide block mb-2">Solution</strong>
                    <p class="text-gray-700 text-sm">I designed with clarity first principles — using hierarchy, white space, and structured layouts — while adding subtle emotional cues through warm colors, gentle shadows, and media-first components to preserve the “memory” feeling.</p>
                 </div>
              </div>

              <div class="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-[2rem] border border-indigo-100 shadow-sm flex flex-col h-full">
                 <div class="mb-4">
                    <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Challenge 2</span>
                    <strong class="block text-xl text-gray-900 leading-tight">Creating responsive layouts for media-heavy pages</strong>
                 </div>
                 <p class="text-gray-600 text-sm mb-6 flex-grow">Many sections contain photo grids and long messages, which behave differently on desktop and mobile.</p>
                 <div class="bg-white p-5 rounded-xl border border-indigo-200 shadow-sm relative">
                    <div class="absolute -top-3 left-6 w-6 h-6 bg-white border-t border-l border-indigo-200 rotate-45"></div>
                    <strong class="text-indigo-600 text-sm uppercase tracking-wide block mb-2">Solution</strong>
                    <p class="text-gray-700 text-sm">I prototyped multiple responsive patterns in Figma, tested breakpoints, and built flexible CSS grid structures to ensure every gallery, card, and section maintained its visual balance across screens.</p>
                 </div>
              </div>
           </div>
        </section>

        <!-- Design Strategy -->
        <section class="bg-gray-50 p-10 md:p-14 rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"></div>
          <h3 class="text-3xl font-serif text-gray-900 mb-8">🧠 Design Strategy & Visual Direction</h3>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">The overall visual direction of the Orientation Leaders Yearbook 24/25 was guided by three core principles: clarity, warmth, and emotional storytelling. As the platform serves both current students and alumni, the interface needed to feel professional yet personal.</p>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">A card-based system was adopted to present leadership profiles, events, and recognition highlights. This structure allows content to be digested easily while maintaining visual consistency throughout the website. Soft shadows, balanced spacing, and controlled animation were applied to enhance depth without overwhelming the user.</p>
          <p class="text-lg text-gray-600 leading-relaxed">The typography system was carefully selected to ensure strong readability across long content sections, while the color palette reinforces a warm, community-driven identity that reflects leadership, teamwork, and celebration.</p>
        </section>

        <section>
          <h3 class="text-3xl font-serif text-gray-900 mb-8">🗂 Information Architecture & Content Flow</h3>
          <p class="text-lg text-gray-600 mb-6">The website was structured to mirror the real journey of an Orientation Leader:</p>
          <div class="grid gap-4">
             <div class="p-4 border-l-4 border-pink-400 bg-white shadow-sm rounded-r-xl">
                <strong class="text-pink-600 block text-lg font-serif mb-1">Introduction & Identity</strong>
                <p class="text-gray-600">Who the Orientation Leaders are.</p>
             </div>
             <div class="p-4 border-l-4 border-pink-400 bg-white shadow-sm rounded-r-xl">
                <strong class="text-pink-600 block text-lg font-serif mb-1">Leadership Recognition</strong>
                <p class="text-gray-600">EXCO & BOD structure.</p>
             </div>
             <div class="p-4 border-l-4 border-pink-400 bg-white shadow-sm rounded-r-xl">
                <strong class="text-pink-600 block text-lg font-serif mb-1">Events & Engagement</strong>
                <p class="text-gray-600">Activities throughout the term.</p>
             </div>
             <div class="p-4 border-l-4 border-pink-400 bg-white shadow-sm rounded-r-xl">
                <strong class="text-pink-600 block text-lg font-serif mb-1">Recognition & Achievements</strong>
                <p class="text-gray-600">Wall of Fame.</p>
             </div>
             <div class="p-4 border-l-4 border-pink-400 bg-white shadow-sm rounded-r-xl">
                <strong class="text-pink-600 block text-lg font-serif mb-1">Memories & Visual Archive</strong>
                <p class="text-gray-600">Gallery.</p>
             </div>
          </div>
          <p class="text-lg text-gray-600 mt-8 italic bg-gray-50 p-4 rounded-xl text-center">This structure ensures users experience the website as a story, not just a collection of pages. The flow transitions naturally from structure → action → recognition → memory.</p>
        </section>

        <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-xl">
           <h3 class="text-3xl font-serif text-white mb-8">💻 Front-End Implementation Highlights</h3>
           <p class="text-lg text-gray-300 mb-8">The website was fully developed using HTML, CSS, and JavaScript, with focus on:</p>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div class="bg-white/10 p-4 rounded-xl border border-white/10">Fully responsive grid-based layouts</div>
             <div class="bg-white/10 p-4 rounded-xl border border-white/10">Interactive hover states for profile and event cards</div>
             <div class="bg-white/10 p-4 rounded-xl border border-white/10">Smooth scrolling behavior for long content pages</div>
             <div class="bg-white/10 p-4 rounded-xl border border-white/10">Optimized image handling for media-heavy sections</div>
             <div class="bg-white/10 p-4 rounded-xl border border-white/10">Consistent animation timing for professional UI feedback</div>
           </div>
           <p class="text-lg text-gray-400 mt-8">Every interaction was tested across desktop, tablet, and mobile to ensure consistent behavior and performance.</p>
        </section>

        <section>
          <h3 class="text-3xl font-serif text-gray-900 mb-8">📊 Project Impact & Outcomes</h3>
           <ul class="space-y-4">
            <li class="flex gap-4 items-center bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
              <p class="text-gray-800 text-lg font-medium">Successfully created a permanent digital archive for Taylor’s Orientation Leaders</p>
            </li>
            <li class="flex gap-4 items-center bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
              <p class="text-gray-800 text-lg font-medium">Strengthened leadership brand presence and recognition</p>
            </li>
            <li class="flex gap-4 items-center bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
              <p class="text-gray-800 text-lg font-medium">Increased accessibility for alumni and future leaders</p>
            </li>
            <li class="flex gap-4 items-center bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
              <p class="text-gray-800 text-lg font-medium">Served as a public-facing leadership & culture showcase</p>
            </li>
             <li class="flex gap-4 items-center bg-green-50 p-4 rounded-xl border border-green-100">
              <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
              <p class="text-gray-800 text-lg font-medium">Demonstrated a full UI/UX + Front-End workflow in one complete project</p>
            </li>
          </ul>
          <p class="text-xl text-gray-500 mt-8 italic text-center font-serif">"This platform now stands as both a community legacy project and a professional portfolio-grade web product."</p>
        </section>

        <section class="bg-gradient-to-br from-pink-50 to-purple-50 p-10 md:p-14 rounded-[2.5rem]">
           <h3 class="text-3xl font-serif text-gray-900 mb-8">🎯 Personal Growth & Learning Outcomes</h3>
           <p class="text-lg text-gray-600 mb-6">Through this project, I strengthened my ability to:</p>
           <div class="flex flex-wrap gap-3">
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 border border-pink-100">Design emotionally driven UI while maintaining usability</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 border border-pink-100">Build large-scale content websites independently</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 border border-pink-100">Balance leadership storytelling with functional clarity</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 border border-pink-100">Handle long-term project planning and execution</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 border border-pink-100">Translate community identity into a meaningful digital experience</span>
           </div>
           <p class="text-lg text-gray-600 mt-8 font-medium">This yearbook was not just a design project — it was a real product built for real people, which made the experience deeply meaningful and professionally valuable.</p>
        </section>

        <section class="border-t border-gray-100 pt-12 text-center">
           <p class="text-2xl leading-relaxed text-gray-600 italic font-serif max-w-4xl mx-auto">"Although I developed the platform myself, this yearbook wouldn’t exist without everyone who contributed content, photos, stories, and feedback. This project reminded me how meaningful it is to design for a real community, not just a grade or assignment. I’m grateful for the support and contributions who helped make this possible, and I look forward to applying these skills to future design and development projects."</p>
           
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-12">
              <img src="assets/yearbook-1.jpg" alt="Yearbook Design 1" class="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
              <img src="assets/yearbook-2.jpg" alt="Yearbook Design 2" class="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
              <img src="assets/yearbook-3.jpg" alt="Yearbook Design 3" class="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
              <img src="assets/yearbook-4.jpg" alt="Yearbook Design 4" class="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
           </div>

           <a href="https://olyearbook2425.ygphoon.workers.dev" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-200">
             Visit Live Website 🚀
           </a>
        </section>
      </div>
    `,
    imageUrl: 'assets/orientation-yearbook-cover.jpg',
    tools: ['Figma', 'Web Design', 'Web Development', 'HTML', 'CSS', 'JavaScript', 'Adobe Dreamweaver'],
    link: 'https://olyearbook2425.ygphoon.workers.dev',
    span: 'col-span-1'
  },
  {
    id: 'mytimes-redesign',
    title: 'My TIMES App Redesign',
    category: 'App Redesign',
    group: 'Web',
    description: 'UX Redesign of Taylor’s University academic platform app.',
    details: `
<div class="space-y-20 font-['DM_Sans']">
   <!-- Header Image / Banner acts as section 1 visual anchor if needed, but text is 1. Overview -->

   <!-- 1. Overview -->
   <section class="relative">
      <div class="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-70"></div>
      <h2 class="relative z-10 text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-tight">1. Overview</h2>
      
      <div class="relative bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden text-white">
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div class="relative z-10">
             <p class="text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-90">MyTIMES is the official academic platform used in Taylor’s University for accessing learning materials, announcements, quizzes, submissions, and lecture recordings. However, continuous student feedback revealed strong frustration with cluttered layouts, poor navigation hierarchy, and inefficient access to core academic tools.</p>
             <div class="h-px w-full bg-white/20 mb-8"></div>
             <p class="text-lg text-blue-100 leading-relaxed">This redesign project focuses on solving real student workflow problems through a structured UX methodology involving research, data analysis, information architecture, Lo-Fi prototyping, Hi-Fi interface design, and user testing.</p>
          </div>
      </div>
   </section>

   <!-- 2. Research Insights -->
   <section>
       <h3 class="text-4xl font-serif text-slate-900 mb-10 flex items-center gap-4">
          <span class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">2</span>
          Research Insights & Core Pain Points
       </h3>
       <div class="grid lg:grid-cols-2 gap-8">
           <!-- Issues -->
           <div class="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(239,68,68,0.1)] border border-red-100 relative overflow-hidden group hover:border-red-200 transition-colors">
              <div class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">PAIN POINTS</div>
              <strong class="block text-3xl font-serif text-red-600 mb-8">Identified Issues</strong>
              <ul class="space-y-4 text-slate-600 text-lg">
                 <li class="flex gap-3 items-start"><span class="text-red-400 mt-1">✕</span> Slow navigation caused by deep and unstructured menus</li>
                 <li class="flex gap-3 items-start"><span class="text-red-400 mt-1">✕</span> Materials and recordings scattered across multiple layers</li>
                 <li class="flex gap-3 items-start"><span class="text-red-400 mt-1">✕</span> Completed and upcoming tasks mixed together</li>
                 <li class="flex gap-3 items-start"><span class="text-red-400 mt-1">✕</span> Calendar feature hidden and underused</li>
                 <li class="flex gap-3 items-start"><span class="text-red-400 mt-1">✕</span> Discussions not placed in meaningful learning context</li>
              </ul>
           </div>
           
           <!-- Needs -->
           <div class="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(34,197,94,0.1)] border border-green-100 relative overflow-hidden group hover:border-green-200 transition-colors">
              <div class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">SOLUTIONS</div>
              <strong class="block text-3xl font-serif text-green-600 mb-8">Top User Needs</strong>
              <ul class="space-y-4 text-slate-600 text-lg">
                 <li class="flex gap-3 items-start"><span class="text-green-500 mt-1">✓</span> Shortest possible path to active or recently accessed courses</li>
                 <li class="flex gap-3 items-start"><span class="text-green-500 mt-1">✓</span> One-glance visibility of tasks and deadlines</li>
                 <li class="flex gap-3 items-start"><span class="text-green-500 mt-1">✓</span> Clear separation between completed and pending work</li>
                 <li class="flex gap-3 items-start"><span class="text-green-500 mt-1">✓</span> Calendar placed on primary navigation</li>
                 <li class="flex gap-3 items-start"><span class="text-green-500 mt-1">✓</span> Strong content hierarchy inside every course module</li>
              </ul>
           </div>
       </div>
       
       <!-- Embed -->
       <div class="mt-12 bg-white p-4 rounded-3xl border border-gray-100 shadow-lg">
          <span class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block ml-2">Draft Proposal</span>
          <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 0; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
             <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAG3Koi02iY/upmwtekBRoeByL5aLow8Yw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
          </div>
          <a href="https://www.canva.com/design/DAG3Koi02iY/upmwtekBRoeByL5aLow8Yw/view?utm_content=DAG3Koi02iY&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" class="text-sm font-bold text-blue-600 hover:underline ml-2">Application Design Mobile Application Draft Proposal by Icese</a>
       </div>
   </section>

   <!-- 3. UX Goals -->
   <section>
       <h3 class="text-4xl font-serif text-slate-900 mb-10 flex items-center gap-4">
          <span class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl font-bold">3</span>
          UX Goals
       </h3>
       <div class="grid md:grid-cols-2 gap-6">
           <!-- Card 1 -->
           <div class="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-200">1</div>
              <strong class="text-2xl font-serif text-slate-900 block mb-3">Faster Access</strong>
              <p class="text-slate-600 leading-relaxed">Recently used courses should appear at the top of the dashboard for instant resume learning.</p>
           </div>
           <!-- Card 2 -->
           <div class="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-indigo-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">2</div>
              <strong class="text-2xl font-serif text-slate-900 block mb-3">Content Structure</strong>
              <p class="text-slate-600 leading-relaxed">Files, lecture videos, quizzes, and assignments must be grouped into clear, separated tabs.</p>
           </div>
           <!-- Card 3 -->
           <div class="p-8 bg-gradient-to-br from-pink-50 to-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-pink-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-pink-200">3</div>
              <strong class="text-2xl font-serif text-slate-900 block mb-3">Intelligent Calendar</strong>
              <p class="text-slate-600 leading-relaxed">Calendar must be exposed on the main navigation with repeat scheduling and category support.</p>
           </div>
           <!-- Card 4 -->
           <div class="p-8 bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-orange-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange-200">4</div>
              <strong class="text-2xl font-serif text-slate-900 block mb-3">Contextual Discussion</strong>
              <p class="text-slate-600 leading-relaxed">Discussion panels should be placed directly under recordings for natural class-based interaction.</p>
           </div>
       </div>

       <!-- Embed -->
       <div class="mt-16">
          <h4 class="font-bold text-2xl text-slate-900 mb-6 font-serif flex items-center gap-3">
             <span class="text-3xl">📙</span> Final Proposal (Refined UX Strategy & Structure)
          </h4>
          <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.01] transition-transform duration-500">
             <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; overflow: hidden;">
                <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG3KojjWEA/3pwipmu8a8CHSZKXJM5XqA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
             </div>
          </div>
          <div class="mt-4 text-center">
             <a href="https://www.canva.com/design/DAG3KojjWEA/3pwipmu8a8CHSZKXJM5XqA/view?utm_content=DAG3KojjWEA&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-colors">
                Open Proposal in Canva ↗
             </a>
          </div>
       </div>
   </section>

   <!-- 4. Info Architecture -->
   <section class="bg-slate-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
       <!-- Decoration -->
       <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
       <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

       <div class="relative z-10">
          <h3 class="text-4xl font-serif mb-12 border-b border-white/20 pb-6">4. Information Architecture</h3>
          
          <div class="grid lg:grid-cols-2 gap-12">
             <div>
                <strong class="block text-blue-300 text-lg uppercase tracking-widest mb-6">Simplified Course Structure</strong>
                <div class="flex flex-wrap gap-3">
                   <div class="px-6 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">Materials</div>
                   <div class="px-6 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">Recordings</div>
                   <div class="px-6 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">Quizzes</div>
                   <div class="px-6 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">Assignments</div>
                   <div class="px-6 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">Discussion</div>
                </div>
             </div>
             <div>
                <strong class="block text-purple-300 text-lg uppercase tracking-widest mb-6">Bottom Navigation</strong>
                <div class="flex flex-wrap items-center gap-2 text-xl font-light">
                   <span class="text-white">Home</span> <span class="text-white/30">|</span>
                   <span class="text-white">Courses</span> <span class="text-white/30">|</span>
                   <span class="text-white">Calendar</span> <span class="text-white/30">|</span>
                   <span class="text-white">Notifications</span> <span class="text-white/30">|</span>
                   <span class="text-white">Profile</span>
                </div>
                <p class="mt-8 text-gray-400 italic bg-black/20 p-4 rounded-xl inline-block">"This structure ensures that all essential academic tools are reachable in under two taps."</p>
             </div>
          </div>
       </div>
   </section>

   <!-- 5. Before vs After -->
   <section>
       <h3 class="text-4xl font-serif text-slate-900 mb-12 text-center">5. Before vs After Comparison</h3>
       <div class="space-y-8">
           <!-- A. Dashboard -->
           <div class="bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden flex flex-col md:flex-row">
               <div class="p-8 md:p-12 md:w-1/2 bg-red-50/50 border-b md:border-b-0 md:border-r border-red-100">
                   <strong class="text-red-800 text-2xl font-serif block mb-6">A. Dashboard (Before)</strong>
                   <ul class="space-y-3 text-gray-600">
                       <li class="flex gap-2">❌ Displays full course listing repeatedly</li>
                       <li class="flex gap-2">❌ Recently accessed courses hidden behind multiple taps</li>
                       <li class="flex gap-2">❌ No prioritisation of active learning</li>
                   </ul>
               </div>
               <div class="p-8 md:p-12 md:w-1/2 bg-green-50/50">
                   <strong class="text-green-800 text-2xl font-serif block mb-6">After Redesign</strong>
                   <ul class="space-y-3 text-gray-600 mb-6">
                       <li class="flex gap-2">✅ “Recently Accessed” placed at the very top</li>
                       <li class="flex gap-2">✅ Full course list remains available but secondary</li>
                       <li class="flex gap-2">✅ Faster resume learning flow</li>
                   </ul>
                   <div class="inline-block px-4 py-2 bg-green-100 text-green-800 font-bold rounded-lg text-sm">
                       Result: Significant reduction in taps and search time.
                   </div>
               </div>
           </div>

           <!-- B. Materials -->
           <div class="bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden flex flex-col md:flex-row">
               <div class="p-8 md:p-12 md:w-1/2 bg-red-50/50 border-b md:border-b-0 md:border-r border-red-100">
                   <strong class="text-red-800 text-2xl font-serif block mb-6">B. Materials, Recordings & Activities</strong>
                   <ul class="space-y-3 text-gray-600">
                       <li class="flex gap-2">❌ All mixed into one unclear content list</li>
                       <li class="flex gap-2">❌ High confusion and slow retrieval</li>
                   </ul>
               </div>
               <div class="p-8 md:p-12 md:w-1/2 bg-green-50/50">
                   <strong class="text-green-800 text-2xl font-serif block mb-6">After Redesign</strong>
                   <ul class="space-y-3 text-gray-600 mb-6">
                       <li class="flex gap-2">✅ Clear tab separation: Materials, Recordings, Quizzes, Assignments</li>
                       <li class="flex gap-2">✅ Workflow follows real academic usage pattern</li>
                   </ul>
                   <div class="inline-block px-4 py-2 bg-green-100 text-green-800 font-bold rounded-lg text-sm">
                       Result: Faster retrieval, reduced cognitive load, better clarity.
                   </div>
               </div>
           </div>

           <!-- C & D Grid -->
           <div class="grid md:grid-cols-2 gap-8">
               <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-md">
                   <strong class="block text-xl font-serif text-slate-900 mb-4 border-b pb-2">C. Quizzes & Assignments</strong>
                   <p class="text-sm text-red-500 mb-2">Before: Mixed together, no progress awareness</p>
                   <p class="text-sm text-green-600 mb-4">After: Two-column structure (Upcoming vs Completed), visual toning</p>
                   <p class="text-gray-800 font-bold text-sm bg-gray-50 p-2 rounded">Result: Better planning, clearer motivation, improved deadline awareness.</p>
               </div>
               <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-md">
                   <strong class="block text-xl font-serif text-slate-900 mb-4 border-b pb-2">D. Calendar</strong>
                   <p class="text-sm text-red-500 mb-2">Before: Hidden inside sub-menus, rarely used</p>
                   <p class="text-sm text-green-600 mb-4">After: Main nav position, color coding, 5-day preview</p>
                   <p class="text-gray-800 font-bold text-sm bg-gray-50 p-2 rounded">Result: Calendar becomes an active planning tool instead of a hidden feature.</p>
               </div>
           </div>
       </div>
   </section>

   <!-- 6. UI Panels -->
   <section>
       <h3 class="text-4xl font-serif text-slate-900 mb-12 text-center">6. Visual UI Explanation Panels</h3>
       <div class="grid md:grid-cols-2 gap-6">
          <div class="p-8 rounded-3xl bg-blue-50 border-2 border-blue-100 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all group">
             <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">1</div>
             <strong class="block text-xl text-slate-900 mb-2">Dashboard Layout</strong>
             <div class="space-y-2 text-slate-600">
                <p><strong>Design Logic:</strong> Recently Accessed placed at top for fastest resume. Full course list remains below. High contrast typography supports categorisation.</p>
                <p><strong>Impact:</strong> Users immediately know where to look and what to tap.</p>
             </div>
          </div>
          <div class="p-8 rounded-3xl bg-purple-50 border-2 border-purple-100 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all group">
             <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">2</div>
             <strong class="block text-xl text-slate-900 mb-2">Class Folder Structure</strong>
             <div class="space-y-2 text-slate-600">
                <p><strong>Design Logic:</strong> Strict separation between Materials, Recordings, and Activities. Folder visuals clearly separated. Larger touch zones.</p>
                <p><strong>Impact:</strong> Students locate files, videos, and submissions without unnecessary exploration.</p>
             </div>
          </div>
          <div class="p-8 rounded-3xl bg-orange-50 border-2 border-orange-100 hover:bg-white hover:shadow-xl hover:border-orange-200 transition-all group">
             <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">3</div>
             <strong class="block text-xl text-slate-900 mb-2">Assignment & Quiz Two-Column Layout</strong>
             <div class="space-y-2 text-slate-600">
                <p><strong>Design Logic:</strong> Reflects mental priority of upcoming tasks. Completed tasks visually greyed. Urgent tasks highlighted.</p>
                <p><strong>Impact:</strong> Students gain instant awareness of deadlines and progress completion.</p>
             </div>
          </div>
          <div class="p-8 rounded-3xl bg-green-50 border-2 border-green-100 hover:bg-white hover:shadow-xl hover:border-green-200 transition-all group">
             <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">4</div>
             <strong class="block text-xl text-slate-900 mb-2">Discussion Panel Placement</strong>
             <div class="space-y-2 text-slate-600">
                <p><strong>Design Logic:</strong> Discussions anchored directly under recordings for context-based interaction after lecture viewing.</p>
                <p><strong>Impact:</strong> Academic engagement becomes purposeful instead of scattered.</p>
             </div>
          </div>
       </div>
   </section>

   <!-- 7. User Testing -->
   <section class="bg-gradient-to-br from-gray-50 to-gray-100 p-10 md:p-14 rounded-[2.5rem] border border-gray-200">
       <h3 class="text-3xl font-serif text-slate-900 mb-8">7. User Testing (Condensed)</h3>
       
       <div class="grid md:grid-cols-2 gap-10">
           <div>
              <strong class="block text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <span class="w-2 h-2 bg-green-500 rounded-full"></span> Validated Improvements
              </strong>
              <ul class="space-y-4">
                 <li class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-gray-600">Users resumed learning faster through Recently Accessed</li>
                 <li class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-gray-600">Lecture recordings became discoverable with one tap</li>
                 <li class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-gray-600">Completed task separation strongly clarified progress tracking</li>
                 <li class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-gray-600">Calendar became a desired daily planning feature</li>
              </ul>
           </div>
           
           <div>
               <strong class="block text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <span class="w-2 h-2 bg-blue-500 rounded-full"></span> Suggestions Addressed
              </strong>
              <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-800">
                 <ul class="list-disc pl-5 space-y-2">
                    <li>Calendar color coding</li>
                    <li>Clearer notification categorisation</li>
                 </ul>
              </div>
              
              <div class="mt-8">
                 <strong class="block text-lg font-bold text-slate-800 mb-4">🧪 User Testing Embed</strong>
                 <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; overflow: hidden;">
                       <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG3Kl69sdI/zVTwtpYS1ot1KchGujjS7Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                    </div>
                 </div>
                 <a href="https://www.canva.com/design/DAG3Kl69sdI/zVTwtpYS1ot1KchGujjS7Q/view?utm_content=DAG3Kl69sdI&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" class="text-sm text-blue-500 font-bold mt-2 block hover:underline">Open User Testing in Canva</a>
              </div>
           </div>
       </div>
   </section>

   <!-- 8. Documentation -->
   <section>
       <h3 class="text-3xl font-serif text-slate-900 mb-8">8. UI/UX Documentation</h3>
       <p class="text-gray-600 text-lg mb-8 max-w-3xl">A full UI/UX document was created to support long-term scalability and implementation consistency. It includes: Design system (colors, typography, components), Interaction behaviours, Screen flows and transitions, User journey mapping, and Edge case logic.</p>
       
       <div class="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
             <div class="flex-1">
                 <h4 class="text-2xl font-serif text-white mb-4">📄 Full UI/UX System Documentation</h4>
                 <p class="text-gray-400 mb-6">Interactive embed of the design system standards and guidelines.</p>
                 <a href="https://www.canva.com/design/DAG3K-UrYgk/BpRgyb-B-PBvEhmj5ehrsg/view?utm_content=DAG3K-UrYgk&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" class="inline-block px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">View Document ↗</a>
             </div>
             <div class="flex-1 w-full">
                <div class="rounded-xl overflow-hidden shadow-lg border border-white/20">
                   <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; overflow: hidden;">
                      <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAG3K-UrYgk/BpRgyb-B-PBvEhmj5ehrsg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                   </div>
                </div>
             </div>
          </div>
       </div>
   </section>

   <!-- 9. Prototypes -->
   <section class="space-y-12">
       <div class="text-center">
          <h3 class="text-4xl font-serif text-slate-900 mb-4">9. Lo-Fi & Hi-Fi Prototypes</h3>
          <p class="text-gray-500">Explore the interactive Figma prototypes below.</p>
       </div>
       
       <div class="grid lg:grid-cols-2 gap-10">
           <div class="space-y-4">
              <strong class="block text-xl font-serif text-slate-700">🧩 Lo-Fi Prototype</strong>
              <div class="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                 <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/GD6kZiFGvAoV97dkiQV7by/MyTIMES-App-Redesign?node-id=501-7178&embed-host=share" allowfullscreen></iframe>
              </div>
           </div>
           <div class="space-y-4">
              <strong class="block text-xl font-serif text-slate-700">🎨 Hi-Fi Prototype</strong>
              <div class="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                 <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/GD6kZiFGvAoV97dkiQV7by/MyTIMES-App-Redesign?node-id=1237-2557&embed-host=share" allowfullscreen></iframe>
              </div>
           </div>
       </div>
   </section>

   <!-- 10. Outcome & 11. Reflection -->
   <section class="grid md:grid-cols-12 gap-8">
       <div class="md:col-span-7 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#581c87] text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col justify-center">
           <h3 class="text-3xl font-serif mb-6">10. Final Outcome</h3>
           <p class="text-purple-200 text-lg mb-6 leading-relaxed">The redesigned MyTIMES platform achieved:</p>
           <ul class="space-y-3 mb-8">
              <li class="flex gap-3 text-white"><span class="text-white">✦</span> Reduced navigation steps</li>
              <li class="flex gap-3 text-white"><span class="text-white">✦</span> Clear discovery of core academic tools</li>
              <li class="flex gap-3 text-white"><span class="text-white">✦</span> Improved content hierarchy</li>
              <li class="flex gap-3 text-white"><span class="text-white">✦</span> Higher engagement through contextual features</li>
              <li class="flex gap-3 text-white"><span class="text-white">✦</span> Lower cognitive overload</li>
           </ul>
           <p class="text-white/60 text-sm italic border-t border-white/10 pt-6">Post-testing sentiment reflected noticeable improvements in clarity, efficiency, and usability.</p>
       </div>
       
       <div class="md:col-span-5 bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl flex flex-col justify-center">
           <h3 class="text-3xl font-serif text-slate-900 mb-6">11. Reflection</h3>
           <p class="text-gray-600 leading-relaxed mb-6">This redesign transformed MyTIMES from a functional but cluttered academic system into a structured, fast, and context-driven learning platform.</p>
           <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
               <strong class="block text-slate-900 mb-2 font-bold text-sm uppercase">UX Maturity</strong>
               <p class="text-gray-500 text-sm">Clear information architecture, Strong user-goal alignment, Research-driven decisions, Usability validation, Iterative design improvement.</p>
           </div>
       </div>
   </section>
</div>
    `,
    imageUrl: 'assets/mytimes-cover.jpg',
    tools: ['Figma', 'FlutterFlow', 'Application Design'],
    link: 'https://www.figma.com/proto/GD6kZiFGvAoV97dkiQV7by/MyTIMES-App-Redesign?node-id=1237-2557&t=firDCNBMQYX5JKxg-1',
    span: 'col-span-1'
  },
  {
   id: 'verde-home-app',
   title: 'VerdeHome – Smart Energy Management App',
   category: 'UX Case Study',
   group: 'Web',
   description: 'Human–Computer Interaction | Mobile App UX/UI Case Study.',
   details: `
<div class="space-y-24 font-['DM_Sans'] bg-[#f0fdf4] -mx-6 md:-mx-12 p-6 md:p-12 rounded-[2.5rem] overflow-hidden">
 
  <!-- 1. Hero / Intro -->
  <section class="relative bg-white rounded-[3rem] p-10 md:p-16 border border-emerald-100 shadow-xl overflow-hidden">
      <!-- Decorative Blobs -->
      <div class="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] animate-float-slow"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[80px] animate-float-slow" style="animation-delay: 2s"></div>


      <div class="relative z-10 text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
            Human–Computer Interaction
          </div>
          <h2 class="text-5xl md:text-7xl font-serif text-emerald-950 mb-8 leading-tight">
             VerdeHome <span class="block text-3xl md:text-5xl text-emerald-600/60 mt-2 font-light italic">Smart Energy Management</span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed font-light mb-10">
             VerdeHome is a smart home energy management application designed to help users monitor, control, and optimise their home energy, water, and gas usage in real time. The app focuses on making sustainability simple, visual, and actionable for everyday users.
          </p>
          <p class="text-lg font-medium text-emerald-800 bg-emerald-50/50 p-6 rounded-2xl inline-block border border-emerald-100/50">
             "Transforming complex utility data into clear insights, smart controls, and automated eco-friendly actions."
          </p>
      </div>
  </section>


  <!-- 2. Problem vs Solution Split -->
  <section class="grid lg:grid-cols-2 gap-8">
      <!-- The Problem -->
      <div class="bg-red-50/50 p-10 md:p-14 rounded-[2.5rem] border border-red-100 flex flex-col relative overflow-hidden group hover:border-red-200 transition-all">
          <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-500">❌</div>
          <h3 class="text-3xl font-serif text-red-900 mb-8 relative z-10">The Problem</h3>
          <p class="text-red-900/70 mb-8 leading-relaxed">Modern households face several challenges:</p>
          <ul class="space-y-4 relative z-10">
              <li class="flex items-start gap-4">
                 <span class="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shrink-0 text-sm shadow-sm border border-red-100">1</span>
                 <span class="text-red-800 pt-1">Energy usage is hard to track in real time.</span>
              </li>
              <li class="flex items-start gap-4">
                 <span class="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shrink-0 text-sm shadow-sm border border-red-100">2</span>
                 <span class="text-red-800 pt-1">Utility bills often arrive too late for behaviour change.</span>
              </li>
              <li class="flex items-start gap-4">
                 <span class="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shrink-0 text-sm shadow-sm border border-red-100">3</span>
                 <span class="text-red-800 pt-1">Smart devices are scattered across different apps.</span>
              </li>
              <li class="flex items-start gap-4">
                 <span class="w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center shrink-0 text-sm shadow-sm border border-red-100">4</span>
                 <span class="text-red-800 pt-1">Users lack clear guidance on how to save energy effectively.</span>
              </li>
          </ul>
      </div>


      <!-- The Solution -->
      <div class="bg-emerald-50/50 p-10 md:p-14 rounded-[2.5rem] border border-emerald-100 flex flex-col relative overflow-hidden group hover:border-emerald-200 transition-all">
          <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-500">✅</div>
          <h3 class="text-3xl font-serif text-emerald-900 mb-8 relative z-10">The Solution</h3>
          <p class="text-emerald-900/70 mb-8 leading-relaxed">VerdeHome brings everything into one connected ecosystem:</p>
          <ul class="space-y-4 relative z-10">
              <li class="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-emerald-100">
                 <span class="text-xl">📊</span>
                 <span class="text-emerald-900 font-medium">Real-time monitoring for energy, water, and gas</span>
              </li>
              <li class="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-emerald-100">
                 <span class="text-xl">🎛</span>
                 <span class="text-emerald-900 font-medium">Centralized smart home control</span>
              </li>
              <li class="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-emerald-100">
                 <span class="text-xl">🤖</span>
                 <span class="text-emerald-900 font-medium">AI-powered insights & automation</span>
              </li>
              <li class="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-emerald-100">
                 <span class="text-xl">🚨</span>
                 <span class="text-emerald-900 font-medium">Instant alerts for unusual usage & risks</span>
              </li>
          </ul>
      </div>
  </section>


  <!-- 3. Target Users -->
  <section class="relative">
     <h3 class="text-3xl md:text-5xl font-serif text-emerald-950 mb-10 text-center">Target Users</h3>
     <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div class="bg-white p-8 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group">
            <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🏠</div>
            <strong class="block text-emerald-900 text-lg mb-2">Homeowners</strong>
            <p class="text-gray-500 text-sm">With smart devices installed seeking unified control.</p>
         </div>
         <div class="bg-white p-8 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group">
            <div class="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
            <strong class="block text-teal-900 text-lg mb-2">Families</strong>
            <p class="text-gray-500 text-sm">Tracking monthly utility budgets and usage patterns.</p>
         </div>
         <div class="bg-white p-8 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group">
            <div class="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
            <strong class="block text-lime-900 text-lg mb-2">Eco-Conscious</strong>
            <p class="text-gray-500 text-sm">Users dedicated to reducing their carbon footprint.</p>
         </div>
         <div class="bg-white p-8 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group">
            <div class="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📱</div>
            <strong class="block text-cyan-900 text-lg mb-2">Tech-Savvy</strong>
            <p class="text-gray-500 text-sm">Homeowners seeking advanced automation and data.</p>
         </div>
     </div>
  </section>


  <!-- 4. Key Features Grid -->
  <section class="bg-white rounded-[3rem] p-10 md:p-14 border border-emerald-50 shadow-sm">
     <h3 class="text-3xl md:text-5xl font-serif text-emerald-950 mb-12 text-center">Key Ecosystem Features</h3>
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl font-bold">1</div>
            <div>
               <strong class="block text-emerald-900 text-lg mb-2">Live Monitoring</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Real-time tracking for Energy, Water & Gas usage.</p>
            </div>
         </div>
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold">2</div>
            <div>
               <strong class="block text-teal-900 text-lg mb-2">Room Control</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Smart device management organised by room location.</p>
            </div>
         </div>
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 text-xl font-bold">3</div>
            <div>
               <strong class="block text-cyan-900 text-lg mb-2">AI Assistant</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Intelligent energy insights and savings automation.</p>
            </div>
         </div>
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-lime-50 text-lime-600 flex items-center justify-center shrink-0 text-xl font-bold">4</div>
            <div>
               <strong class="block text-lime-900 text-lg mb-2">Critical Alerts</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Instant notifications for leaks, peak usage, and risks.</p>
            </div>
         </div>
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl font-bold">5</div>
            <div>
               <strong class="block text-emerald-900 text-lg mb-2">Usage Reports</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Detailed cost estimations and historical data analysis.</p>
            </div>
         </div>
         <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold">6</div>
            <div>
               <strong class="block text-teal-900 text-lg mb-2">Goal Tracking</strong>
               <p class="text-gray-500 leading-relaxed text-sm">Personalised targets with visual progress indicators.</p>
            </div>
         </div>
     </div>
  </section>


  <!-- 5. UX Principles (Bento Grid) -->
  <section>
     <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
        <h3 class="text-3xl md:text-5xl font-serif text-emerald-950">Design Approach</h3>
        <span class="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide">Jakob Nielsen’s Usability Heuristics</span>
     </div>
    
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <!-- Visibility -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">👀</div>
           <strong class="block text-lg text-emerald-900 mb-2">Visibility of System Status</strong>
           <p class="text-gray-500 text-sm">Users instantly see whether devices are ON/OFF, goals are exceeded, or systems are offline.</p>
        </div>


        <!-- Match Real World -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">🌍</div>
           <strong class="block text-lg text-emerald-900 mb-2">Match with Real World</strong>
           <p class="text-gray-500 text-sm">Devices are grouped by rooms with icons like lights, fans, and ACs—not technical codes.</p>
        </div>


        <!-- User Control -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">🎛</div>
           <strong class="block text-lg text-emerald-900 mb-2">User Control & Freedom</strong>
           <p class="text-gray-500 text-sm">Manual override for automation, cancel schedules, retry errors, and navigate freely.</p>
        </div>


        <!-- Consistency - Wide -->
        <div class="bg-gradient-to-br from-emerald-900 to-teal-900 p-8 rounded-3xl text-white shadow-lg md:col-span-2 relative overflow-hidden">
           <div class="absolute right-0 bottom-0 opacity-10 text-9xl">🎨</div>
           <strong class="block text-xl mb-4 relative z-10">Consistency & Standards</strong>
           <p class="text-emerald-100/80 max-w-md relative z-10">A unified blue-green-white eco color system is used across all screens for clarity and brand identity.</p>
        </div>


        <!-- Error Prevention -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">🛡</div>
           <strong class="block text-lg text-emerald-900 mb-2">Error Prevention</strong>
           <p class="text-gray-500 text-sm">Visual warnings appear before limits are exceeded. Eco-mode prevents unnecessary waste.</p>
        </div>


        <!-- Recognition -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">🧠</div>
           <strong class="block text-lg text-emerald-900 mb-2">Recognition Over Recall</strong>
           <p class="text-gray-500 text-sm">Data is visualised with graphs, progress circles, and icons—no memorisation required.</p>
        </div>
       
         <!-- Flexibility -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">⚡️</div>
           <strong class="block text-lg text-emerald-900 mb-2">Flexibility & Efficiency</strong>
           <p class="text-gray-500 text-sm">Power users can use schedules, automation, and quick toggles for daily convenience.</p>
        </div>


        <!-- Minimalist -->
        <div class="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
           <div class="text-4xl mb-4">✨</div>
           <strong class="block text-lg text-emerald-900 mb-2">Minimalist Design</strong>
           <p class="text-gray-500 text-sm">All information is shown using clean card-based layouts, reducing cognitive overload.</p>
        </div>
     </div>
  </section>


  <!-- 6. System Design -->
  <section class="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm">
      <div class="bg-gray-50 p-8 border-b border-gray-100 text-center">
         <h3 class="text-3xl font-serif text-gray-900">System Architecture</h3>
         <p class="text-gray-500 mt-2">How VerdeHome connects the physical and digital worlds.</p>
      </div>
      <div class="p-10 md:p-14">
         <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 w-full">
               <div class="text-4xl mb-3">📡</div>
               <strong class="text-emerald-900 block">IoT Sensors</strong>
            </div>
            <div class="text-gray-300">➜</div>
            <div class="p-6 bg-teal-50 rounded-2xl border border-teal-100 w-full">
               <div class="text-4xl mb-3">☁️</div>
               <strong class="text-teal-900 block">Cloud Data</strong>
            </div>
            <div class="text-gray-300">➜</div>
            <div class="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 w-full">
               <div class="text-4xl mb-3">🤖</div>
               <strong class="text-cyan-900 block">AI Engine</strong>
            </div>
            <div class="text-gray-300">➜</div>
            <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 w-full">
               <div class="text-4xl mb-3">📱</div>
               <strong class="text-indigo-900 block">User Interface</strong>
            </div>
         </div>
      </div>
  </section>


  <!-- 7. UI Breakdown -->
  <section>
      <h3 class="text-3xl md:text-5xl font-serif text-emerald-950 mb-10 pl-4 border-l-4 border-emerald-500">UI Breakdown</h3>
      <div class="space-y-6">
          <!-- Dashboard -->
          <div class="bg-gradient-to-r from-emerald-500 to-teal-500 p-[1px] rounded-[2rem]">
              <div class="bg-white rounded-[2rem] p-8 md:p-10">
                  <strong class="text-2xl font-serif text-emerald-900 block mb-4">🏠 Dashboard</strong>
                  <div class="flex flex-wrap gap-3">
                     <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Live Savings</span>
                     <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Goal Progress</span>
                     <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Top Devices</span>
                     <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Smart Insights</span>
                  </div>
              </div>
          </div>
         
          <!-- Controls -->
          <div class="bg-gradient-to-r from-teal-500 to-cyan-500 p-[1px] rounded-[2rem]">
              <div class="bg-white rounded-[2rem] p-8 md:p-10">
                  <strong class="text-2xl font-serif text-teal-900 block mb-4">🎛 Controls</strong>
                  <div class="flex flex-wrap gap-3">
                     <span class="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm border border-teal-100">Room Management</span>
                     <span class="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm border border-teal-100">Individual Toggles</span>
                     <span class="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm border border-teal-100">Global Eco Mode</span>
                     <span class="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm border border-teal-100">Scheduling</span>
                  </div>
              </div>
          </div>


          <!-- Monitor -->
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-[1px] rounded-[2rem]">
              <div class="bg-white rounded-[2rem] p-8 md:p-10">
                  <strong class="text-2xl font-serif text-cyan-900 block mb-4">📊 Monitor & Goals</strong>
                  <div class="flex flex-wrap gap-3">
                     <span class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm border border-cyan-100">Usage Graphs</span>
                     <span class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm border border-cyan-100">Cost Estimation</span>
                     <span class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm border border-cyan-100">Solar Tracking</span>
                     <span class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm border border-cyan-100">Target vs Actual</span>
                  </div>
              </div>
          </div>
      </div>
  </section>


  <!-- 8. Impact & Team -->
  <section class="grid lg:grid-cols-2 gap-8">
      <div class="bg-emerald-900 text-emerald-50 p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-center shadow-lg">
          <h3 class="text-2xl font-serif mb-6 text-emerald-300">Social Impact</h3>
          <ul class="space-y-4 text-lg font-light">
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Sustainable consumption</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Reduced energy waste</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Lower household utility bills</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Eco-conscious lifestyle adoption</li>
          </ul>
          <p class="mt-8 italic text-emerald-400/80 border-t border-white/10 pt-6">"By making sustainability visible and measurable, users naturally develop smarter habits."</p>
      </div>


      <div class="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-center">
          <h3 class="text-2xl font-serif mb-6 text-gray-900">Team Collaboration</h3>
          <div class="space-y-6">
              <div>
                  <strong class="block text-emerald-700 text-sm font-bold uppercase tracking-wider mb-2">My Strengths</strong>
                  <p class="text-gray-600">Strong UI/UX design capability, Data logic planning, AI & IoT concept integration, Documentation & storytelling.</p>
              </div>
              <div>
                  <strong class="block text-red-400 text-sm font-bold uppercase tracking-wider mb-2">Challenges faced</strong>
                  <p class="text-gray-600">Uneven technical experience, Limited API integration knowledge, Scheduling conflicts.</p>
              </div>
              <div>
                  <strong class="block text-blue-500 text-sm font-bold uppercase tracking-wider mb-2">Lessons Learned</strong>
                  <p class="text-gray-600">Early skill-sharing prevents bottlenecks. Asynchronous tools improve speed. Design teamwork requires empathy.</p>
              </div>
          </div>
      </div>
  </section>


  <!-- 9. Conclusion -->
  <section class="text-center max-w-4xl mx-auto py-12">
      <h3 class="text-3xl md:text-5xl font-serif text-emerald-950 mb-8">Final Reflection</h3>
      <div class="bg-gradient-to-b from-white to-emerald-50 p-10 rounded-[2.5rem] shadow-sm border border-emerald-100 relative">
          <span class="absolute top-6 left-8 text-6xl text-emerald-200 font-serif">“</span>
          <p class="text-xl text-emerald-900 leading-relaxed relative z-10 font-light mb-8">
              VerdeHome demonstrates how good UX design turns complex systems into simple human experiences. It is not just a control app—it is a behaviour-changing sustainability platform.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm border border-emerald-100">UX System Thinking</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm border border-emerald-100">Interaction Design</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm border border-emerald-100">Sustainable Product Design</span>
             <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm border border-emerald-100">Team Problem Solving</span>
          </div>
      </div>
     
      <div class="mt-16">
         <strong class="block text-lg mb-4 text-gray-400 uppercase tracking-widest font-light">Future Enhancements</strong>
         <div class="flex flex-wrap justify-center gap-6 text-emerald-700 font-medium">
            <span>🔮 Predictive Forecasting</span>
            <span class="text-emerald-300">•</span>
            <span>🏠 Smart City Integration</span>
            <span class="text-emerald-300">•</span>
            <span>🗣 Voice Assistant</span>
            <span class="text-emerald-300">•</span>
            <span>🧠 Machine Learning</span>
         </div>
      </div>
  </section>


  <!-- Figma -->
  <section class="mt-8">
      <h4 class="font-bold text-2xl text-slate-900 mb-8 font-serif flex items-center gap-3 justify-center">
         <span class="w-3 h-8 bg-green-500 rounded-full"></span> Interactive Prototype
      </h4>
      <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
         <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://embed.figma.com/design/2910wKAeSb5O5Bk030nV7Y/Verde-Home?node-id=14-471&embed-host=share" allowfullscreen></iframe>
      </div>
  </section>


</div>
   `,
   imageUrl: 'assets/verde-home-cover.jpg',
   tools: ['Figma', 'UX Research', 'UI Design'],
   link: 'https://www.figma.com/proto/2910wKAeSb5O5Bk030nV7Y/Verde-Home?node-id=14-471&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A471',
   span: 'col-span-1'
 },


  {
    id: 'high-ground',
    title: 'High Ground Asia',
    category: 'Ecommerce Website',
    group: 'Web',
    description: 'Responsive ecommerce design for Desktop, iPad, and Mobile.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        
        <!-- 1. Intro Hero - High Contrast Dark & Neon -->
        <section class="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a] text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-green-900">
           <!-- Decorative Glows -->
           <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>
           <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div class="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500 text-orange-400 font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-md">E-Commerce Growth Agency</span>
              <h2 class="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-8 leading-tight drop-shadow-lg">High Ground Asia</h2>
              <div class="h-1 w-24 bg-gradient-to-r from-green-500 to-orange-500 mb-8 rounded-full"></div>
              
              <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10 font-light">A modern, conversion-focused landing experience that communicates authority, highlights service value, and builds trust with digital entrepreneurs.</p>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-white/10 pt-8">
                 <div>
                    <strong class="block text-green-400 uppercase text-xs mb-1 tracking-wider">Role</strong>
                    <span class="block font-medium">UI/UX Designer</span>
                 </div>
                 <div>
                    <strong class="block text-orange-400 uppercase text-xs mb-1 tracking-wider">Industry</strong>
                    <span class="block font-medium">E-Commerce Strategy</span>
                 </div>
                 <div>
                    <strong class="block text-green-400 uppercase text-xs mb-1 tracking-wider">Platform</strong>
                    <span class="block font-medium">Web & Mobile</span>
                 </div>
                 <div>
                    <strong class="block text-orange-400 uppercase text-xs mb-1 tracking-wider">Tools</strong>
                    <span class="block font-medium">Figma</span>
                 </div>
              </div>
           </div>
        </section>

        <!-- 2. Core Principles -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8 flex items-center gap-3">
               <span class="w-3 h-8 bg-green-600 rounded-full"></span> 2. Core Design Principles
            </h3>
            <div class="grid md:grid-cols-3 gap-6">
               <div class="bg-gradient-to-b from-orange-50 to-white p-8 rounded-[2rem] border border-orange-100 shadow-sm hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                     <span class="text-2xl text-orange-600 group-hover:text-white">Aa</span>
                  </div>
                  <strong class="block text-xl text-gray-900 mb-3 font-serif group-hover:text-orange-600 transition-colors">Bold Typography</strong>
                  <p class="text-gray-600 text-sm leading-relaxed">Oversized headlines like “ECOMMERCE GROWTH AGENCY” immediately convey positioning. Capitalized type signals expertise and niche focus.</p>
               </div>
               
               <div class="bg-gradient-to-b from-green-50 to-white p-8 rounded-[2rem] border border-green-100 shadow-sm hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                     <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-orange-400"></div>
                  </div>
                  <strong class="block text-xl text-gray-900 mb-3 font-serif group-hover:text-green-700 transition-colors">Industry Colour System</strong>
                  <p class="text-gray-600 text-sm leading-relaxed">Green for growth. Orange for velocity & scalability. Grey/Black accents for professional neutrality.</p>
               </div>
               
               <div class="bg-gradient-to-b from-slate-50 to-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                     <span class="text-2xl text-slate-600 group-hover:text-white">▣</span>
                  </div>
                  <strong class="block text-xl text-gray-900 mb-3 font-serif group-hover:text-slate-900 transition-colors">Premium Minimal Layout</strong>
                  <p class="text-gray-600 text-sm leading-relaxed">Generous spacing, grids, and balanced sections help the brand feel premium, modern, and strategically minded.</p>
               </div>
            </div>
        </section>

        <!-- 3. Responsive Design -->
        <section class="bg-[#0f172a] text-white p-10 rounded-[2.5rem] relative overflow-hidden border border-slate-800 shadow-2xl">
            <h3 class="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">3. Responsive Interface Design</h3>
            <div class="grid md:grid-cols-3 gap-8 items-center">
               <div class="space-y-4">
                  <div class="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors hover:border-green-500/50 group">
                     <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-110 transition-transform">M</div>
                     <div>
                        <strong class="block text-white text-lg">Mobile View</strong>
                        <span class="text-xs text-gray-400 uppercase tracking-wide">Stacked & Simplified</span>
                     </div>
                  </div>
                  <div class="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors hover:border-orange-500/50 group">
                     <div class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform">T</div>
                     <div>
                        <strong class="block text-white text-lg">Tablet View</strong>
                        <span class="text-xs text-gray-400 uppercase tracking-wide">Adaptive Grid</span>
                     </div>
                  </div>
                  <div class="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors hover:border-blue-500/50 group">
                     <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">D</div>
                     <div>
                        <strong class="block text-white text-lg">Desktop View</strong>
                        <span class="text-xs text-gray-400 uppercase tracking-wide">Expanded Layout</span>
                     </div>
                  </div>
               </div>
               <div class="md:col-span-2 text-gray-300 text-lg leading-relaxed pl-8 border-l border-white/10">
                  <p class="mb-4">The website was designed fully adaptive for mobile, tablet, and desktop. Key decisions included ensuring typography scales proportionally, hero messaging stays above the fold, and "Book a Call" CTAs remain visible on all screens.</p>
                  <p className="text-sm text-gray-500 italic">This ensures user flow stays frictionless regardless of device.</p>
               </div>
            </div>
        </section>

        <!-- 4. Hero Strategy -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-6 flex items-center gap-3">
               <span class="w-3 h-8 bg-orange-600 rounded-full"></span> 4. Hero Section Strategy
            </h3>
            <div class="bg-gray-50 p-10 rounded-[2rem] border-2 border-gray-900 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
               <div className="mb-8 p-6 bg-white border border-gray-200 rounded-xl">
                  <h4 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-2 opacity-20">ECOMMERCE GROWTH AGENCY</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-widest text-center mt-2">^ Visualizing Headline Hierarchy</p>
               </div>
               <p className="text-gray-800 text-lg leading-relaxed mb-8">The landing hero is intentionally simple and bold. It communicates service purpose directly. Strategic CTAs like <span className="bg-orange-100 text-orange-700 px-2 rounded font-bold">Pricing Plans</span> and <span className="bg-orange-100 text-orange-700 px-2 rounded font-bold">Book a Call</span> are placed early to increase lead conversions by reducing cognitive steps.</p>
               
               <div className="flex flex-wrap gap-4">
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                      <strong className="block text-green-600 text-sm uppercase mb-1">Identity</strong>
                      <span className="text-gray-600 text-xs">Who we are</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                      <strong className="block text-orange-600 text-sm uppercase mb-1">Offer</strong>
                      <span className="text-gray-600 text-xs">What we do</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                      <strong className="block text-gray-900 text-sm uppercase mb-1">Action</strong>
                      <span className="text-gray-600 text-xs">Conversion</span>
                  </div>
               </div>
            </div>
        </section>

        <!-- 5. Portfolio -->
        <section class="relative bg-gradient-to-br from-emerald-900 to-teal-900 p-10 md:p-14 rounded-[3rem] shadow-2xl overflow-hidden border border-emerald-700">
            <!-- Decor -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-[100px] opacity-20"></div>
            
            <h3 class="relative z-10 text-3xl md:text-5xl font-serif text-white mb-8">5. Portfolio: Social Proof</h3>
            <div class="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <p class="text-emerald-100 text-lg leading-relaxed">The "Last Projects" section uses clean cards and clear screenshots to showcase outcomes. It forms proof of results—increased conversion, better experience, and stronger store performance.</p>
                <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <!-- abstract visual representation of cards -->
                    <div class="flex gap-4 mb-4">
                        <div class="w-1/2 h-24 bg-emerald-500/30 rounded-xl border border-emerald-400/30"></div>
                        <div class="w-1/2 h-24 bg-teal-500/30 rounded-xl border border-teal-400/30"></div>
                    </div>
                    <div class="w-full h-4 bg-emerald-500/20 rounded-full"></div>
                </div>
            </div>
        </section>

        <!-- 6. Services -->
        <section class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-orange-500 to-red-600 p-10 rounded-[3rem] shadow-xl text-white flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                <h3 class="text-3xl font-serif mb-6">6. Services Positioning</h3>
                <p class="text-orange-100 text-lg leading-relaxed mb-8">Main services are presented as clear cards: Web Design, Photography, and Identity. This establishes expertise and avoids confusion, making the agency positioning sharp and niche.</p>
                <div class="flex gap-3 flex-wrap">
                    <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Web Design</span>
                    <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Photography</span>
                    <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">Identity</span>
                </div>
            </div>
            <!-- Empty placeholder or next grid item could go here if content allowed restructuring, but linear flow is fine -->
        </section>

        <!-- 7. Trust -->
        <section>
            <h3 class="text-4xl font-serif text-slate-900 mb-10 text-center">7. Building Trust & Conversion</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Testimonials -->
                <div class="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl font-serif font-bold mb-6 group-hover:scale-110 transition-transform">T</div>
                    <strong class="block text-2xl font-serif text-slate-900 mb-4">Testimonials & Benefits</strong>
                    <p class="text-gray-600 leading-relaxed">Content blocks communicate expertise like "Expert Team" and "Innovative Solutions". The tone is factual and business-driven—suitable for brand owners.</p>
                </div>
                <!-- Footer -->
                <div class="group bg-slate-900 p-10 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-20"></div>
                    <div class="relative z-10">
                        <div class="w-16 h-16 bg-purple-900 rounded-2xl flex items-center justify-center text-purple-300 text-3xl font-serif font-bold mb-6 group-hover:scale-110 transition-transform">F</div>
                        <strong class="block text-2xl font-serif text-white mb-4">Footer Conversion</strong>
                        <p class="text-gray-400 leading-relaxed">Acts as a final conversion touchpoint. "Feel free to contact us" messaging reminds users the agency is approachable and serious about results.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. Visual Atmosphere -->
        <section class="bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-[3rem] border border-indigo-100 relative overflow-hidden">
            <!-- Abstract shapes -->
            <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full blur-xl opacity-60 animate-float-slow"></div>
            <div class="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-bl from-blue-400 to-green-400 rounded-full blur-xl opacity-60 animate-float-slow" style="animation-delay: 1s;"></div>
            
            <div class="relative z-10 text-center max-w-3xl mx-auto">
                <h3 class="text-3xl font-serif text-slate-900 mb-6">8. Visual Atmosphere</h3>
                <p class="text-xl text-slate-700 leading-relaxed mb-8">Floating abstract 3D forms soften the heavy text layouts while giving the site personality. The UI feels like a startup-consulting hybrid: business confidence met with creative execution.</p>
            </div>
        </section>

        <!-- 9. Final Outcome -->
        <section class="bg-black text-white p-10 md:p-14 rounded-[3rem] border border-gray-800 shadow-2xl relative">
            <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none"></div>
            
            <h3 class="text-3xl font-serif mb-8 text-center">9. Final Outcome</h3>
            <p class="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12">This design successfully communicates High Ground Asia’s identity as niche-focused, performance-driven, and strategic. By balancing strong visuals with business-clarity content, the website becomes confidence-building for enterprise clients.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl text-center">
                    <span class="text-green-400 font-bold uppercase tracking-widest text-sm">Niche Focused</span>
                </div>
                <div class="bg-orange-500/10 border border-orange-500/30 p-6 rounded-2xl text-center">
                    <span class="text-orange-400 font-bold uppercase tracking-widest text-sm">Performance Driven</span>
                </div>
                <div class="bg-purple-500/10 border border-purple-500/30 p-6 rounded-2xl text-center">
                    <span class="text-purple-400 font-bold uppercase tracking-widest text-sm">Strategic</span>
                </div>
            </div>
        </section>

        <!-- 10. Reflection -->
        <section class="grid md:grid-cols-12 gap-8 items-stretch">
            <div class="md:col-span-7 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg">
                <h3 class="text-3xl font-serif text-slate-900 mb-6">10. Personal Reflection</h3>
                <p class="text-gray-600 text-lg leading-relaxed">This project challenged me to merge bold editorial aesthetics with strategic business positioning. I had to consider emotional impression, brand maturity, and CTA visibility simultaneously.</p>
            </div>
            <div class="md:col-span-5 bg-gradient-to-br from-green-600 to-emerald-800 p-10 rounded-[3rem] shadow-lg flex items-center justify-center text-center">
                <p class="text-white font-serif text-xl italic leading-relaxed">"High Ground Asia isn’t just a design studio. It’s a partner for growth, scalability, strategy, and digital performance."</p>
            </div>
        </section>

        <!-- Figma Embed -->
        <section class="mt-16">
            <h4 class="font-bold text-2xl text-gray-900 mb-8 font-serif flex items-center gap-3">
               Figma Design
            </h4>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
               <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/LmIyzH3YQC4nYt89Bm5oJm/High-Ground-Asia?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            </div>
        </section>
      </div>
    `,
    imageUrl: 'assets/high-ground-cover.jpg',
    tools: ['Figma', 'Website Design', 'Graphic Design'],
    link: 'https://www.figma.com/design/LmIyzH3YQC4nYt89Bm5oJm/High-Ground-Asia?node-id=0-1&t=ssFdOzkRNcVBtpJ7-1',
    span: 'col-span-1'
  },
  {
    id: 'winnie',
    title: 'Interactive Winnie the Pooh Website',
    category: 'Interactive Website',
    group: 'Web',
    description: 'Thematic Story-Driven Web Experience with hand-drawn assets.',
    details: `
      <div class="space-y-24 font-['DM_Sans']">
    
    <!-- Hero / Title Section -->
    <section class="relative overflow-hidden rounded-[3rem] bg-[#fff9c4] p-10 md:p-16 shadow-xl border-4 border-white/50">
        <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
        
        <div class="relative z-10 text-center">
            <span class="inline-block px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-600 text-yellow-800 font-bold uppercase tracking-widest text-xs mb-6">Interactive Storybook</span>
            <h2 class="text-5xl md:text-7xl font-serif text-yellow-900 mb-8 leading-tight drop-shadow-sm">Winnie the Pooh</h2>
            <p class="text-xl md:text-2xl text-yellow-900/80 font-serif italic max-w-3xl mx-auto leading-relaxed">"A childhood story that carries warmth, simplicity, friendship, and adventure."</p>
        </div>
    </section>

    <!-- 1. Project Overview -->
    <section>
        <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xl">1</span>
            <h3 class="text-4xl font-serif text-gray-900">Project Overview</h3>
        </div>
        <div class="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                This project required the creation of a thematic interactive website built around an original concept. I chose <strong>Winnie the Pooh</strong> to translate the charm of the Hundred Acre Wood into a digital experience that encourages users to explore, learn, and interact through playful animations.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                Rather than building a static layout, I created a site that behaves like a moving storybook: characters animate, items respond to clicks, timelines reveal history, and maps invite discovery.
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div class="p-4 bg-gray-50 rounded-2xl text-center">
                    <strong class="block text-gray-900 mb-1">Procreate</strong>
                    <span class="text-sm text-gray-500">Asset Creation</span>
                </div>
                <div class="p-4 bg-gray-50 rounded-2xl text-center">
                    <strong class="block text-gray-900 mb-1">Adobe Animate</strong>
                    <span class="text-sm text-gray-500">Interactive Scripting</span>
                </div>
                <div class="p-4 bg-gray-50 rounded-2xl text-center">
                    <strong class="block text-gray-900 mb-1">Figma</strong>
                    <span class="text-sm text-gray-500">Wireframes</span>
                </div>
                <div class="p-4 bg-gray-50 rounded-2xl text-center">
                    <strong class="block text-gray-900 mb-1">Web Host</strong>
                    <span class="text-sm text-gray-500">Fully Published</span>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. Design Concept -->
    <section>
        <div class="flex items-center gap-4 mb-8">
             <span class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xl">2</span>
             <h3 class="text-4xl font-serif text-gray-900">Design Concept</h3>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-[#fffbeb] p-8 rounded-[2rem] border border-yellow-200">
                <strong class="block text-xl font-serif text-yellow-900 mb-4">Hand-Drawn Doodle Style</strong>
                <p class="text-yellow-900/70 text-sm leading-relaxed">All trees, characters, and icons were hand-illustrated in Procreate. The goal was authenticity—ensuring the website feels like it belongs in Pooh’s universe.</p>
            </div>
            <div class="bg-[#ecfccb] p-8 rounded-[2rem] border border-lime-200">
                <strong class="block text-xl font-serif text-lime-900 mb-4">Soft Storybook Colours</strong>
                <p class="text-lime-900/70 text-sm leading-relaxed">Pastel greens, wood-tone browns, cotton-sky blues, and warm yellows create a gentle, nostalgic mood.</p>
            </div>
            <div class="bg-[#e0f2fe] p-8 rounded-[2rem] border border-sky-200">
                <strong class="block text-xl font-serif text-sky-900 mb-4">Child-Friendly Interaction</strong>
                <p class="text-sky-900/70 text-sm leading-relaxed">Animations are simple, optimistic, and curious—mirroring Pooh’s personality. The site is comforting and whimsical.</p>
            </div>
        </div>
    </section>

    <!-- 3. Key Features -->
    <section>
        <div class="flex items-center gap-4 mb-12">
             <span class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</span>
             <h3 class="text-4xl font-serif text-gray-900">Key Features & Interactive Elements</h3>
        </div>

        <div class="space-y-16">
            
            <!-- Loading -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="order-2 md:order-1">
                    <strong class="block text-2xl font-serif text-gray-900 mb-4">🌳 Loading Animation</strong>
                    <ul class="space-y-3 text-gray-600 mb-6">
                        <li class="flex gap-2"><span>☁️</span> Elements fade out one by one</li>
                        <li class="flex gap-2"><span>🎈</span> Balloon rises to the sky</li>
                        <li class="flex gap-2"><span>⏳</span> Loading bar animates from 0–100%</li>
                    </ul>
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-500">
                        <strong>Tech:</strong> Shape Tweens, Layer-separated timeline, Delayed animations.
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <img src="assets/winnie-loading.jpg" alt="Loading Animation" class="w-full h-auto rounded-2xl shadow-lg border border-gray-100" />
                </div>
            </div>

            <!-- Home -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img src="assets/winnie-home.jpg" alt="Home Page" class="w-full h-auto rounded-2xl shadow-lg border border-gray-100" />
                </div>
                <div>
                    <strong class="block text-2xl font-serif text-gray-900 mb-4">🧸 Home Page — Character Greeting</strong>
                    <p class="text-gray-600 mb-4">The homepage opens like a story cover. Title letters appear with drop motion tweening, and Tigger performs a jump animation triggered by JavaScript logic (Velocity & bounce height).</p>
                    <p class="text-gray-500 italic">"This interaction encourages discovery instead of static clicking."</p>
                </div>
            </div>

            <!-- History -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="order-2 md:order-1">
                    <strong class="block text-2xl font-serif text-gray-900 mb-4">📜 Interactive History Page</strong>
                    <p class="text-gray-600 mb-4">A horizontally animated timeline of Winnie the Pooh’s evolution (1920–2022). Each card slides in, pauses, and enlarges on hover.</p>
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-500">
                        <strong>Interaction:</strong> Next button reveals eras until "Begin the Adventure" pops up.
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <img src="assets/winnie-history.jpg" alt="Interactive History" class="w-full h-auto rounded-2xl shadow-lg border border-gray-100" />
                </div>
            </div>

            <!-- Adventure -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img src="assets/winnie-adventure.jpg" alt="Adventure Journey" class="w-full h-auto rounded-2xl shadow-lg border border-gray-100" />
                </div>
                <div>
                    <strong class="block text-2xl font-serif text-gray-900 mb-4">🐾 Adventure Journey Pages</strong>
                    <p class="text-gray-600 mb-4">Users help the characters walk towards a destination. Characters travel with timed horizontal motion using tweens, reflecting story progression.</p>
                    <p class="text-gray-500 italic">"This section turns interaction into a mini-quest."</p>
                </div>
            </div>

            <!-- Map -->
            <div class="bg-[#f0fdf4] p-8 md:p-12 rounded-[2.5rem] border border-green-100 relative overflow-hidden">
                <div class="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div class="order-2 md:order-1">
                        <strong class="block text-3xl font-serif text-green-900 mb-6">🗺 Interactive Map</strong>
                        <ul class="space-y-4 text-green-800">
                            <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-green-500"></span> Hand-drawn map of the forest</li>
                            <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-green-500"></span> Clickable character houses</li>
                            <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-green-500"></span> Detailed character cards on click</li>
                            <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-green-500"></span> Transitions to Disney Store</li>
                        </ul>
                    </div>
                    <div class="order-1 md:order-2">
                         <img src="assets/winnie-map.jpg" alt="Interactive Map" class="w-full h-auto rounded-2xl shadow-md border-4 border-white" />
                    </div>
                </div>
            </div>

            <!-- Store -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img src="assets/winnie-store.jpg" alt="Web Store" class="w-full h-auto rounded-2xl shadow-lg border border-gray-100" />
                </div>
                <div>
                    <strong class="block text-2xl font-serif text-gray-900 mb-4">🛍 Web Store Page</strong>
                    <p class="text-gray-600 mb-4">A small themed shop displaying stickers, plushies, and items. Navigation integrates with frame-label actions for smooth transitions back to the Map or Home.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. Research -->
    <section class="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
        <div class="flex items-center gap-4 mb-6">
             <span class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">4</span>
             <h3 class="text-3xl font-serif text-gray-900">Research & Inspiration</h3>
        </div>
        <p class="text-gray-600 mb-6">Studied highly interactive sites on The FWA like <em>The Silly Bunny</em> and <em>Snoopy x Evian</em>. This guided the focus on:</p>
        <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700">Storytelling through interaction</span>
            <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700">Movement triggered by navigation</span>
            <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700">Clickable discovery maps</span>
            <span class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700">Immersive environments</span>
        </div>
    </section>

    <!-- 5. Development Pipeline -->
    <section>
        <div class="flex items-center gap-4 mb-12">
             <span class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">5</span>
             <h3 class="text-4xl font-serif text-gray-900">Development Pipeline</h3>
        </div>
        
        <div class="space-y-12">
            <!-- Asset Creation -->
            <div class="grid md:grid-cols-2 gap-8">
                 <div>
                    <strong class="block text-xl text-gray-900 mb-2">✦ Asset Creation (Procreate)</strong>
                    <p class="text-gray-600 mb-4">Every tree, path, cloud, and and character icon was self-drawn. This ensured no copyright conflicts and perfect thematic unity.</p>
                    <img src="assets/winnie-assets.jpg" alt="Procreate Assets" class="w-full h-auto rounded-xl shadow-md" />
                 </div>
                 <!-- Wireframes -->
                 <div>
                    <strong class="block text-xl text-gray-900 mb-2">✦ Wireframes (Figma)</strong>
                    <p class="text-gray-600 mb-4">Rough UX skeleton showing layout, navigation, and card overlays. Helped ensure simplicity before styling.</p>
                    <img src="assets/winnie-wireframes.jpg" alt="Figma Wireframes" class="w-full h-auto rounded-xl shadow-md" />
                 </div>
            </div>
            
            <!-- Flow Chart -->
             <div class="bg-gray-100 p-8 rounded-3xl">
                <strong class="block text-xl text-gray-900 mb-4 text-center">✦ Logic Flow Chart</strong>
                <p class="text-gray-600 text-center mb-6">Mapped out journey logic: Home → History → Adventure → Map → Character → Store.</p>
                <img src="assets/winnie-flowchart.jpg" alt="Flow Chart" class="w-full h-auto rounded-xl shadow-sm border border-white" />
             </div>
        </div>
    </section>

    <!-- 6. UI/UX Goals -->
    <section>
        <div class="flex items-center gap-4 mb-8">
             <span class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">6</span>
             <h3 class="text-4xl font-serif text-gray-900">UI/UX Design Goals</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div class="p-6 bg-pink-50 rounded-2xl text-center">
                <div class="text-3xl mb-2">📖</div>
                <strong class="block text-pink-900 mb-2">Storytelling</strong>
                <span class="text-xs text-pink-800">"Walk through" Pooh's world.</span>
            </div>
            <div class="p-6 bg-green-50 rounded-2xl text-center">
                <div class="text-3xl mb-2">🧠</div>
                <strong class="block text-green-900 mb-2">Learning</strong>
                <span class="text-xs text-green-800">History in scroll-based reveal.</span>
            </div>
            <div class="p-6 bg-blue-50 rounded-2xl text-center">
                <div class="text-3xl mb-2">🧭</div>
                <strong class="block text-blue-900 mb-2">Exploration</strong>
                <span class="text-xs text-blue-800">Choose where to go.</span>
            </div>
             <div class="p-6 bg-yellow-50 rounded-2xl text-center">
                <div class="text-3xl mb-2">💖</div>
                <strong class="block text-yellow-900 mb-2">Emotion</strong>
                <span class="text-xs text-yellow-800">Innocence & nostalgia.</span>
            </div>
             <div class="p-6 bg-purple-50 rounded-2xl text-center col-span-2 md:col-span-1">
                <div class="text-3xl mb-2">👆</div>
                <strong class="block text-purple-900 mb-2">Interaction</strong>
                <span class="text-xs text-purple-800">Click, hover, press, reveal.</span>
            </div>
        </div>
    </section>

    <!-- 7. Final Outcome -->
    <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] text-center shadow-xl">
       <h3 class="text-3xl font-serif text-white mb-8">7. Final Outcome</h3>
       <div class="flex flex-col md:flex-row gap-4 justify-center">
         <a href="https://winnie-the-pooh-yuk-guan-final.netlify.app/" target="_blank" class="px-8 py-4 bg-yellow-500 text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2">
            🚀 Visit Live Website
         </a>
         <a href="https://youtu.be/YtBmftR5E8w" target="_blank" class="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            🎬 Watch Demo Video
         </a>
         <a href="https://www.figma.com/proto/gV3bMnHHgcHSiMBeTzSK3X/Untitled?page-id=0%3A1&node-id=5-48" target="_blank" class="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            🧰 View Figma Prototype
         </a>
       </div>
    </section>

    <!-- 8. Reflections -->
    <section class="grid md:grid-cols-2 gap-12">
        <div>
            <h3 class="text-3xl font-serif text-gray-900 mb-6">8. Reflections</h3>
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <strong class="block text-gray-900 mb-2">Personal Experience</strong>
                    <p class="text-gray-600 text-sm leading-relaxed">This was my first time combining custom asset illustration, animation keyframing, and interactive coding. Learning Adobe Animate from zero was challenging, but watching my own illustrated characters come to life was incredibly rewarding.</p>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                     <strong class="block text-gray-900 mb-2">Observations</strong>
                     <ul class="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                        <li>Interactivity only works well when navigation is clear</li>
                        <li>Keyframe pacing changes how characters “feel”</li>
                        <li>Animation should support usability, not distract from it</li>
                     </ul>
                </div>
            </div>
        </div>
        
        <!-- 9. Final Thoughts -->
        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-[2.5rem] border border-orange-100 flex flex-col justify-center">
             <h3 class="text-3xl font-serif text-orange-900 mb-6">9. Final Thoughts</h3>
             <p class="text-orange-900/80 text-lg leading-relaxed mb-6">
                 This project was a nostalgic journey and a growth process in animation and UX structuring. Bringing Pooh, Piglet, Tigger, and Eeyore to life through digital interaction felt magical.
             </p>
             <p class="text-orange-900 font-medium italic">
                 "The site proves that even the simplest stories can become immersive if designed through the lens of UX, motion, narrative, and exploration."
             </p>
        </div>
    </section>

</div>
    `,
    imageUrl: 'assets/winnie-pooh-cover.jpg',
    tools: ['Figma', 'Adobe Animate', 'Procreate', 'C++', 'JavaScript'],
    link: 'https://winnie-the-pooh-yuk-guan-final.netlify.app/',
    span: 'col-span-1'
  },
  {
    id: 'bake-diary',
    title: 'Bake Diary',
    category: 'Website Design',
    group: 'Web',
    description: 'Brand Website Design for a Dessert Shop.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        <!-- 1. Introduction -->
        <section class="bg-gradient-to-br from-pink-50 to-orange-50 p-10 rounded-[2.5rem] border border-pink-100 shadow-sm">
           <h2 class="text-4xl md:text-6xl font-serif text-pink-900 mb-8 leading-tight">1. Introduction</h2>
           <div class="grid md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed">
             <div>
                <p class="mb-4">Bake Diary is a dessert shop dedicated to handcrafted treats and custom orders. The goal of this project was to translate the brand’s warmth, sweetness, and heartfelt craft into a complete digital presence — a website that feels as comforting as its desserts.</p>
                <div class="bg-white/60 p-4 rounded-xl border border-pink-100 inline-block">
                    <strong class="text-pink-600 block mb-1">Goal:</strong>
                    <span class="text-sm">Present offerings clearly, allow custom orders, and create an emotional brand atmosphere.</span>
                </div>
             </div>
             <div class="bg-white/60 p-6 rounded-2xl border border-pink-100 text-sm space-y-3">
                <div class="flex justify-between border-b border-pink-100 pb-2">
                   <strong class="text-gray-900">Brand</strong>
                   <span>Bake Diary</span>
                </div>
                <div class="flex justify-between border-b border-pink-100 pb-2">
                   <strong class="text-gray-900">Industry</strong>
                   <span>Artisanal Desserts</span>
                </div>
                <div class="flex justify-between border-b border-pink-100 pb-2">
                   <strong class="text-gray-900">Platform</strong>
                   <span>Responsive Web</span>
                </div>
                <div class="flex justify-between">
                   <strong class="text-gray-900">Tools</strong>
                   <span>Figma</span>
                </div>
             </div>
           </div>
        </section>

        <!-- 2. Target Users & Purpose -->
        <section>
           <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Target Users & Purpose</h3>
           <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                 <strong class="block text-xl text-pink-500 mb-4 font-serif">Target Visitors</strong>
                 <ul class="space-y-3 text-gray-600">
                    <li class="flex gap-2 items-start"><span class="text-pink-400">✔</span> Local customers looking for cakes</li>
                    <li class="flex gap-2 items-start"><span class="text-pink-400">✔</span> Customers making custom orders</li>
                    <li class="flex gap-2 items-start"><span class="text-pink-400">✔</span> People hosting events/celebrations</li>
                    <li class="flex gap-2 items-start"><span class="text-pink-400">✔</span> Dessert lovers browsing options</li>
                 </ul>
              </div>
              <div class="bg-gray-50 p-8 rounded-[2rem] border border-gray-200">
                 <strong class="block text-xl text-gray-900 mb-4 font-serif">Website Purpose</strong>
                 <p class="text-gray-600 mb-4">The website functions as the brand’s online storefront. Every page is designed to feel personal, welcoming, and optimistic — just like Bake Diary’s homemade desserts.</p>
                 <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-500">Build Credibility</span>
                    <span class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-500">Showcase Best Sellers</span>
                    <span class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-500">Guide Ordering</span>
                 </div>
              </div>
           </div>
        </section>

        <!-- 3. Design Concept -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Design Concept & Visual Language</h3>
            <div class="bg-[#fff0f5] p-10 rounded-[2.5rem] border border-pink-100">
               <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-white rounded-full text-pink-600 font-bold shadow-sm">Gentle</span>
                  <span className="px-4 py-2 bg-white rounded-full text-pink-600 font-bold shadow-sm">Happy</span>
                  <span className="px-4 py-2 bg-white rounded-full text-pink-600 font-bold shadow-sm">Handcrafted</span>
                  <span className="px-4 py-2 bg-white rounded-full text-pink-600 font-bold shadow-sm">Sweet</span>
               </div>
               
               <div class="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <p className="text-pink-900/80 leading-relaxed mb-6">The entire UI direction revolves around positive emotions. I used soft pink background tones, rounded buttons, handwritten-style typography, and candid dessert photography.</p>
                     <p className="text-pink-900 font-serif italic text-xl">"Life is short & you deserve to have some desserts."</p>
                  </div>
                  <div className="bg-white/50 p-6 rounded-2xl">
                     <strong class="block text-pink-800 mb-4">Core UI Characteristics</strong>
                     <ul class="space-y-2 text-sm text-pink-700">
                        <li>• Pastel gradients & soft pink base</li>
                        <li>• Rounded corners mimicking soft cake forms</li>
                        <li>• Minimal stroke lines for visual lightness</li>
                        <li>• Generous spacing for calm browsing</li>
                     </ul>
                  </div>
               </div>
            </div>
        </section>

        <!-- 4. Page Designs -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Page Designs & UX Strategy</h3>
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <strong class="text-lg text-gray-900 block mb-2">4.1 Landing Page</strong>
                   <p class="text-gray-600">Greets visitors with emotional messaging. <strong>UX Intent:</strong> Showcase quality instantly and create emotional appetite.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <strong class="text-lg text-gray-900 block mb-2">4.2 Best Sellers Showcase</strong>
                   <p class="text-gray-600">Displays popular desserts to entice visitors and nudge intent. Encourage deeper browsing with "See More".</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <strong class="text-lg text-gray-900 block mb-2">4.3 Special Orders Section</strong>
                   <p class="text-gray-600">Introduces custom celebration cakes. <strong>CTA:</strong> Place an Order — a direct path for high-intent customers.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <strong class="text-lg text-gray-900 block mb-2">4.5 Product Menu Pages</strong>
                   <p class="text-gray-600">Simple categorization (Whole Cakes, Beverages, Specials). Green "Order Now" buttons trigger action psychologically.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <strong class="text-lg text-gray-900 block mb-2">4.8 Special Order Form Page</strong>
                   <p class="text-gray-600">Functional heart of the site. Collects specific details (Flavor, Delivery, Zip Code) in an extended, distraction-free layout.</p>
                </div>
            </div>
        </section>

        <!-- 5. UX Intent & Forms -->
        <section class="grid md:grid-cols-2 gap-8">
            <div class="bg-pink-50 p-8 rounded-[2rem] border border-pink-100">
               <h3 class="text-2xl font-serif text-pink-900 mb-4">UX Design Intent</h3>
               <div class="space-y-4 text-pink-800/80">
                  <p><strong>Emotional Comfort:</strong> Friendly, handwritten typography, nostalgic feel.</p>
                  <p><strong>Simplicity:</strong> Clear navigation (Products, About, Contact). Small brands thrive on clarity.</p>
                  <p><strong>Conversion:</strong> Subconscious guide from Browsing -> Trust -> Category -> Order.</p>
               </div>
            </div>
            <div class="bg-white p-8 rounded-[2rem] border border-gray-200">
               <h3 class="text-2xl font-serif text-gray-900 mb-4">Form Handling</h3>
               <p class="text-gray-600 mb-4">The special order form is crucial. Its layout maximizes clarity while maintaining tone. Large fields reduce friction.</p>
               <div class="bg-gray-50 p-4 rounded-xl text-sm text-gray-500">
                  Establishes professionalism, buyer confidence, and a simple communication pipeline.
               </div>
            </div>
        </section>

        <!-- 6. Outcome & Reflection -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">Outcome & Reflection</h3>
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-[2rem] border border-green-100 mb-8">
               <strong class="block text-green-800 text-xl mb-4">Project Strengths</strong>
               <ul class="grid md:grid-cols-2 gap-4 text-green-700">
                  <li class="flex gap-2"><span>✔</span> Brand identity clearly reflected</li>
                  <li class="flex gap-2"><span>✔</span> Soft and approachable tone</li>
                  <li class="flex gap-2"><span>✔</span> Structured product menu</li>
                  <li class="flex gap-2"><span>✔</span> Contact systems ready for real use</li>
               </ul>
            </div>
            <p class="text-gray-600 text-lg leading-relaxed italic border-l-4 border-pink-300 pl-6">"Designing Bake Diary helped me explore how visual character can shape a brand’s personality. I learned that bakery brands are successful when their design communicates the same care and sincerity as their products."</p>
        </section>

        <!-- Embed -->
        <section class="mt-16">
            <h4 class="font-bold text-2xl text-gray-900 mb-8 font-serif flex items-center gap-3">
               Figma Design
            </h4>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
               <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/EcIyV9tZQgGejUM6kshwxA/Bake-Diary?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            </div>
        </section>
      </div>
    `,
    imageUrl: 'assets/bake-diary-cover.jpg',
    tools: ['Figma', 'Website Design'],
    link: 'https://www.figma.com/proto/NGgU3Yl7iGYOwkvT3EeauS/Bake-Diary',
    span: 'col-span-1'
  },
  {
    id: 'fresh-blooms',
    title: 'Fresh Blooms',
    category: 'Website Design',
    group: 'Web',
    description: 'Local Flower Truck Website Design.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        
        <!-- 1. Intro -->
        <section class="bg-[#fcf8f3] p-10 md:p-14 rounded-[2.5rem] border border-orange-100 shadow-sm relative overflow-hidden">
           {/* Decorative corner flower vibes */}
           <div class="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-[60px] opacity-40"></div>
           
           <h2 class="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">Fresh Blooms 🌸</h2>
           <p class="text-xl text-gray-700 font-serif italic mb-8">A Story-First Web Experience for a Community-Based Floral Brand</p>
           
           <div class="bg-white/60 p-6 rounded-2xl border border-orange-200/50 relative z-10">
              <p class="text-gray-700 leading-relaxed text-lg">Fresh Blooms is a mobile bouquet truck that travels around Cape Cod, bringing handcrafted floral arrangements to neighborhoods, markets, and private events. The design mission was to create a site that feels welcoming, artistic, nostalgic, and community-rooted.</p>
           </div>
        </section>

        <!-- 2. Concept -->
        <section class="grid md:grid-cols-2 gap-8 items-center">
            <div>
               <h3 class="text-3xl font-serif text-gray-900 mb-6">2. Design Direction: "Scrapbook Road Journal"</h3>
               <p class="text-gray-600 mb-4">The site is styled as if the flower truck keeps a visual diary — capturing moments, locations, and community interactions.</p>
               <ul class="space-y-2 text-gray-700 font-medium">
                  <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-400"></span> Polaroid photo frames</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-400"></span> Stamped labels</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-400"></span> Vintage textured palettes</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-400"></span> Illustrative floral borders</li>
               </ul>
            </div>
            <div class="bg-orange-50 p-8 rounded-[2rem] border border-orange-100 flex flex-col justify-center text-center">
               <strong class="block text-xl font-serif text-orange-900 mb-4">Visual Language</strong>
               <div class="flex justify-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-[#8fa87f] shadow-sm"></div>
                  <div class="w-12 h-12 rounded-full bg-[#e8a87c] shadow-sm"></div>
                  <div class="w-12 h-12 rounded-full bg-[#d8c3e8] shadow-sm"></div>
               </div>
               <p class="text-sm text-orange-800/70">Muted Greens, Dusty Oranges, Lilac Accents.<br/>Represents foliage, sunny afternoons, and local charm.</p>
            </div>
        </section>

        <!-- 3. Key Pages -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Website Structure & Key Pages</h3>
            <div class="space-y-8">
               <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-green-200 transition-colors">
                  <strong class="text-2xl font-serif text-gray-900 block mb-2">4.1 Hero Section</strong>
                  <p class="text-gray-600 mb-4">Balances large editorial typography with a vintage truck illustration. Instantly positions the brand as handcrafted and joyful.</p>
                  <span class="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">CTA: Book Appointment</span>
               </div>
               
               <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors">
                  <strong class="text-2xl font-serif text-gray-900 block mb-2">4.2 Where to Find Us (The Heart)</strong>
                  <p class="text-gray-600 mb-4">Because Fresh Blooms is mobile, location matters. Uses a weekly calendar layout and map-style markings to remove uncertainty.</p>
                  <p class="text-sm text-gray-500 italic">UX Goal: Visitors instantly know when the truck appears and where it stops.</p>
               </div>

               <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-purple-200 transition-colors">
                  <strong class="text-2xl font-serif text-gray-900 block mb-2">4.3 Get Your Flower Fix</strong>
                  <p class="text-gray-600 mb-4">Service cards paired with icons (Private Events, Pop-Ups, Markets). Copywriting emphasizes personality over product specs.</p>
               </div>
            </div>
        </section>

        <!-- 4. UX Strategy -->
        <section class="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-xl">
             <h3 class="text-3xl font-serif text-white mb-6">4. UX Strategy: Relationship-Driven</h3>
             <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">This website is not product-driven. It is relationship-driven. Every design choice supports local craft values, emotional discovery, and community belonging.</p>
             <div class="p-6 bg-white/10 rounded-2xl border border-white/10 text-center font-serif text-xl italic text-gray-200">
                "It produces an atmosphere where a visitor doesn’t feel like a customer, but a neighbor who’s stopping by the truck."
             </div>
        </section>

        <!-- 5. Reflection -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-6">5. Reflection</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Designing Fresh Blooms allowed me to explore UI techniques that lean more editorial and artistic. I enjoyed shaping texture into interface and scrapbook aesthetics into digital layout.</p>
            <p class="text-gray-600">It reminded me that effective UI is not always about rigid geometry — sometimes it’s about crafting a mood strong enough that users immediately understand who you are.</p>
        </section>

        <!-- Figma Embed -->
        <section class="mt-16">
            <h4 class="font-bold text-2xl text-gray-900 mb-8 font-serif flex items-center gap-3">
               Figma Design
            </h4>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
               <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/NcqHfsAzZm45gXmLBlDqOU/Fresh-Blooms?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            </div>
        </section>
      </div>
    `,
    imageUrl: 'assets/fresh-blooms-cover.jpg',
    tools: ['Figma', 'Website Design'],
    link: 'https://www.figma.com/design/NcqHfsAzZm45gXmLBlDqOU/Fresh-Blooms?node-id=0-1&t=czlMcF00vBklLHml-1',
    span: 'col-span-1'
  },
  {
    id: 'grannydoris',
    title: 'Granny Doris',
    category: 'Website Design',
    group: 'Web',
    description: 'E-Commerce Plush Toy & Gifts Online Store.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        
        <!-- 1. Overview -->
        <section class="bg-gradient-to-br from-pink-100 to-orange-100 p-10 md:p-14 rounded-[2.5rem] border border-pink-200 shadow-sm">
           <div class="inline-block px-4 py-1.5 bg-white/60 backdrop-blur rounded-full text-pink-700 text-xs font-bold uppercase tracking-widest mb-6">E-Commerce Design</div>
           <h2 class="text-4xl md:text-6xl font-serif text-pink-900 mb-8 leading-tight">Granny Doris 🧸</h2>
           <p class="text-xl text-gray-700 leading-relaxed mt-4">The Granny Doris website was designed as a warm, approachable e-commerce platform that sells plush toys and sentimental collectibles. The design direction feels friendly, authentic, and emotionally comforting — mirroring the brand’s history and heartfelt values.</p>
        </section>

        <!-- 2. Brand Foundation -->
        <section>
           <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Brand Narrative Foundation</h3>
           <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                 <strong class="block text-xl text-gray-900 mb-4">Core Value Themes</strong>
                 <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-lg text-gray-600">Home & Warmth</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-lg text-gray-600">Childhood Nostalgia</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-lg text-gray-600">Family Memories</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-lg text-gray-600">Colors of Joy</span>
                 </div>
              </div>
              <div class="flex flex-col justify-center">
                 <p class="text-gray-600 text-lg italic">The brand’s “Taste Like Rainbow” memory inspired playful rounded typography, gradient color palettes, and soft UI radius. The result is an interface that feels like receiving a hug.</p>
              </div>
           </div>
        </section>

        <!-- 3. Visual System -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Visual Direction & UI System</h3>
            <div class="grid md:grid-cols-3 gap-6">
               <div class="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] p-6 rounded-2xl h-48 flex flex-col justify-end">
                  <strong class="text-white text-xl drop-shadow-md">Emotional Gradient</strong>
                  <span class="text-white/80 text-sm">Peach, Pink, Lemonade Yellow</span>
               </div>
               <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-center">
                  <strong class="block text-gray-900 mb-2">Typography</strong>
                  <p class="text-gray-500 text-sm">Rounded bold headlines with thick character shapes express friendliness and child-like fun.</p>
               </div>
               <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-center">
                  <strong class="block text-gray-900 mb-2">UI Elements</strong>
                  <p class="text-gray-500 text-sm">Modern rounded cards, soft shadows, wide spacing, pill-shaped CTAs.</p>
               </div>
            </div>
        </section>

        <!-- 4. Page Breakdown -->
        <section>
           <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Page-by-Page Breakdown</h3>
           <div class="space-y-8">
              <div class="border-l-4 border-pink-400 pl-6 py-2">
                 <strong class="text-xl text-gray-900 block mb-2">Home Page: "Cute Toys for Cute Kids"</strong>
                 <p class="text-gray-600">Sets an emotional tone first — not commerce. Introduces products as comforting companions using large plush illustrations.</p>
              </div>
              <div class="border-l-4 border-orange-400 pl-6 py-2">
                 <strong class="text-xl text-gray-900 block mb-2">Shop Page: Plushies Collection UI</strong>
                 <p class="text-gray-600">Built like a modern catalogue grid. Spacing strategy ensures every plushie looks premium and collectible, not cluttered.</p>
              </div>
              <div class="border-l-4 border-purple-400 pl-6 py-2">
                 <strong class="text-xl text-gray-900 block mb-2">About Page: Brand Story</strong>
                 <p class="text-gray-600">The emotional core. Split layout mirrors "Where we came from" and "Where we're going". Builds authenticity.</p>
              </div>
           </div>
        </section>

        <!-- 5. Outcome -->
        <section class="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-xl">
            <h3 class="text-3xl font-serif mb-6">5. Final Outcome Summary</h3>
            <div class="grid md:grid-cols-2 gap-8">
               <div>
                  <strong class="block text-pink-400 mb-2">Communicates:</strong>
                  <ul class="space-y-1 text-gray-300">
                     <li>• Loving tribute to Doris</li>
                     <li>• A brand built from memories</li>
                     <li>• Soft emotional retail experience</li>
                  </ul>
               </div>
               <div>
                  <strong class="block text-pink-400 mb-2">Accomplishes:</strong>
                  <ul class="space-y-1 text-gray-300">
                     <li>• Clear navigation & Eye-clean layout</li>
                     <li>• Emotional storytelling</li>
                     <li>• Positive purchase psychology</li>
                  </ul>
               </div>
            </div>
        </section>

        <!-- 6. Reflection -->
        <section>
           <h3 class="text-3xl font-serif text-gray-900 mb-6">6. Personal Learning</h3>
           <p class="text-gray-600 leading-relaxed">Designing this website taught me that visual warmth matters as much as functionality. Through colour, typography, and structure, I realised that a website can make people feel something before they click any button.</p>
        </section>

        <!-- Figma Embed -->
        <section class="mt-16">
            <h4 class="font-bold text-2xl text-gray-900 mb-8 font-serif flex items-center gap-3">
               Figma Design
            </h4>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
               <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/4skcXUfUbVUc9VJqNo2IyB/grannydoris?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            </div>
        </section>
      </div>
    `,
    imageUrl: 'assets/grannydoris-cover.jpg',
    tools: ['Figma', 'Website Design'],
    link: 'https://www.figma.com/design/4skcXUfUbVUc9VJqNo2IyB/grannydoris?node-id=0-1&t=lgfh0hz6h47DhQHq-1',
    span: 'col-span-1'
  },
  {
    id: 'little-nightmares',
    title: 'Little Nightmares',
    category: 'Game Website',
    group: 'Web',
    description: 'Character Showcase Website UI/UX Case Study.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        
        <!-- 1. Hero -->
        <section class="bg-[#0b0c10] text-gray-300 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-gray-800">
           <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
           <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div class="relative z-10">
              <h2 class="text-4xl md:text-6xl font-serif text-gray-100 mb-6 leading-tight">Little Nightmares</h2>
              <p class="text-xl text-gray-400 font-light mb-8 max-w-2xl">A stylized landing site inspired by the storytelling, atmosphere, and character identity of Bandai Namco’s dark puzzle-horror franchise.</p>
              
              <div class="flex gap-4">
                 <span class="px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-widest text-gray-400">Atmospheric</span>
                 <span class="px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-widest text-gray-400">Immersive</span>
                 <span class="px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-widest text-gray-400">Storytelling</span>
              </div>
           </div>
        </section>

        <!-- 2. Concept Direction -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Concept Direction: Visual Core</h3>
            <div class="bg-gray-900 p-8 rounded-[2rem] shadow-lg text-gray-300">
               <p class="mb-6">I leaned on key elements that make Little Nightmares recognizable: muted colors, fog gradients, distorted UI shapes, and eerie glow highlights.</p>
               <div class="grid md:grid-cols-3 gap-6">
                  <div class="bg-black/40 p-6 rounded-xl border-t-2 border-yellow-600">
                     <strong class="text-yellow-500 block mb-2">Six</strong>
                     <span class="text-xs">Muted yellow, loneliness, hunger.</span>
                  </div>
                  <div class="bg-black/40 p-6 rounded-xl border-t-2 border-purple-800">
                     <strong class="text-purple-400 block mb-2">Mono</strong>
                     <span class="text-xs">Fog lavender, mystery, instability.</span>
                  </div>
                  <div class="bg-black/40 p-6 rounded-xl border-t-2 border-emerald-800">
                     <strong class="text-emerald-500 block mb-2">Alone</strong>
                     <span class="text-xs">Evergreen, isolation, emotional attachment.</span>
                  </div>
               </div>
            </div>
        </section>

        <!-- 3. Design Strategy -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Design Strategy</h3>
            <div class="grid md:grid-cols-2 gap-8">
               <div>
                  <strong class="text-xl text-gray-900 block mb-4">Character First Interaction</strong>
                  <p class="text-gray-600 mb-4">Each section opens with a large high-res render and a delicate label acting like a hint. Example: "Six — A Hungry Child". Matches how the franchise reveals lore slowly.</p>
                  
                  <strong class="text-xl text-gray-900 block mb-4 mt-8">Lore Summaries</strong>
                  <p class="text-gray-600">Copywriting tone is subtle and calm. Descriptive but not over-exposed. Just enough to spark curiosity about where they come from and why they matter.</p>
               </div>
               <div class="bg-gray-100 p-8 rounded-3xl">
                  <strong class="text-xl text-gray-900 block mb-4">Design System</strong>
                  <ul class="space-y-3 text-sm text-gray-600">
                     <li class="flex justify-between border-b border-gray-200 pb-2"><span>Gradients</span> <span class="font-bold">Fog-like emotional backgrounds</span></li>
                     <li class="flex justify-between border-b border-gray-200 pb-2"><span>Typography</span> <span class="font-bold">Bold title + Simple body serif</span></li>
                     <li class="flex justify-between border-b border-gray-200 pb-2"><span>UI Shapes</span> <span class="font-bold">Masked blobs, rounded panels</span></li>
                     <li class="flex justify-between border-b border-gray-200 pb-2"><span>Lighting</span> <span class="font-bold">Ambient glow silhouettes</span></li>
                  </ul>
               </div>
            </div>
        </section>

        <!-- 4. Character Screens -->
        <section>
            <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Character Screens Breakdown</h3>
            <div class="space-y-6">
               <div class="flex gap-4 items-center p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div class="w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                  <div>
                     <strong class="text-gray-900">SIX — A Hungry Child</strong>
                     <p class="text-sm text-gray-600">Immersed in blurred dusk tone. Hero render sits on left creating focus tension.</p>
                  </div>
               </div>
               <div class="flex gap-4 items-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div class="w-12 h-12 bg-purple-800 rounded-full blur-xl opacity-50"></div>
                  <div>
                     <strong class="text-gray-900">MONO — The little guy with the paper bag</strong>
                     <p class="text-sm text-gray-600">Cold Purple Fog. Soft flame backdrop silhouette. Minimalist tone.</p>
                  </div>
               </div>
               <div class="flex gap-4 items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div class="w-12 h-12 bg-emerald-800 rounded-full blur-xl opacity-50"></div>
                  <div>
                     <strong class="text-gray-900">ALONE — The girl with pigtails</strong>
                     <p class="text-sm text-gray-600">Deep Forest Green. Slight laboratory feeling. Technical description of relationship role.</p>
                  </div>
               </div>
            </div>
        </section>

        <!-- 5. Reflection -->
        <section class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-200">
            <h3 class="text-3xl font-serif text-gray-900 mb-6">5. Reflection</h3>
            <p class="text-gray-600 leading-relaxed mb-6">This project taught me how to translate franchise IP atmosphere into UI, balancing minimalism with surreal emotion. Instead of turning into a typical fan-gallery, it becomes an elegant interactive tribute.</p>
            <p class="text-gray-900 font-serif italic">"Designed with respect and love for the Little Nightmares franchise."</p>
        </section>

        <!-- Figma Embed -->
        <section class="mt-16">
            <h4 class="font-bold text-2xl text-gray-900 mb-8 font-serif flex items-center gap-3">
               Figma Design
            </h4>
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
               <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://embed.figma.com/design/9SekrMY6gGSwVweVWWPtYg/Little-Nightmare?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            </div>
        </section>
      </div>
    `,
    imageUrl: 'assets/little-nightmares-cover.jpg',
    tools: ['Figma', 'Website Design'],
    link: 'https://www.figma.com/design/9SekrMY6gGSwVweVWWPtYg/Little-Nightmare?node-id=0-1&t=674Dru934YoQe8BJ-1',
    span: 'col-span-1'
  },

  {
  id: 'heaventh-typeface',
  title: 'Heaventh Font Design: Heaventh Typeface',
  category: 'Graphic Design',
  group: 'Art',
  description: 'Type Exploration, Font Development & Commercial Application',
  imageUrl: 'assets/heaventh-cover.jpg',
  tools: ['Illustrator', 'FontLab 8', 'Typography'],
  span: 'col-span-1',

  details: `
  <div class="space-y-24 font-['DM_Sans'] text-gray-800">

    <!-- Hero -->
    <section class="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 md:p-20 text-white shadow-2xl">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="relative z-10">
             <div class="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6">Type Design Case Study</div>
             <h2 class="text-5xl md:text-7xl font-serif mb-6 leading-tight">Heaventh Typeface</h2>
             <p class="text-xl md:text-2xl text-pink-100 font-light max-w-2xl">Type Exploration, Font Development & Commercial Application</p>
        </div>
    </section>

    <!-- Overview -->
    <section class="relative">
        <div class="absolute -left-4 top-10 w-24 h-24 bg-pink-100 rounded-full blur-xl opacity-60"></div>
        <div class="relative bg-white/60 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-white shadow-xl">
             <h3 class="text-4xl font-serif text-gray-900 mb-8 flex items-center gap-3">
                <span class="w-3 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></span> Project Overview
             </h3>
             <p class="text-lg text-gray-600 leading-relaxed mb-6">Heaventh is a custom display typeface developed through an in-depth exploration of letterform structure, stylistic consistency, and real-world application. The project focused on studying an existing visual style, improving its weaknesses, expanding it into a full alphabet system, and deploying it across commercial merchandise and promotional media.</p>
             <p class="text-lg text-gray-600 leading-relaxed font-medium">The goal was to transform a concept-based typographic style into a fully functional, exportable typeface (.TTF) that maintains strong identity, readability, and commercial usability.</p>
        </div>
    </section>

    <!-- Concept Direction -->
    <section>
        <h3 class="text-4xl font-serif text-gray-900 mb-12 text-center">Concept & Direction</h3>
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Concept 1 -->
            <div class="group relative bg-gradient-to-b from-blue-50 to-white p-8 rounded-[2.5rem] border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div class="absolute top-6 right-6 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                <h4 class="text-2xl font-serif text-gray-900 mb-4">Album-Inspired</h4>
                <div class="rounded-2xl overflow-hidden mb-6 shadow-md aspect-square">
                   <img src="assets/heaventh-album-inspired.jpg" class="w-full h-full object-contain bg-white/5 transform group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">A font expansion based on the visual style of the album Seventeenth Heaven by Seventeen — energetic, youthful, expressive, and street-inspired. The original lettering lacked a complete alphabet, presenting a strong opportunity for full type development.</p>
            </div>

            <!-- Concept 2 -->
            <div class="group relative bg-gradient-to-b from-orange-50 to-white p-8 rounded-[2.5rem] border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div class="absolute top-6 right-6 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">2</div>
                <h4 class="text-2xl font-serif text-gray-900 mb-4">Tiger-Inspired</h4>
                <div class="rounded-2xl overflow-hidden mb-6 shadow-md aspect-square">
                   <img src="assets/heaventh-tiger-inspired.jpg" class="w-full h-full object-contain bg-white/5 transform group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">A concept rooted in the visual strength and elegance of tigers using elements such as stripes, claws, and motion.</p>
            </div>
        </div>

        <div class="mt-12 bg-gray-900 text-white p-10 rounded-3xl text-center shadow-2xl">
            <p class="text-xl md:text-2xl font-serif italic mb-6">"Energetic. Youthful. Bold Movement."</p>
            <p class="text-gray-400 max-w-3xl mx-auto">After conceptual review, the album-inspired direction was selected due to its strong identity potential, originality, and cultural relevance.</p>
        </div>
    </section>

    <!-- Uppercase Development -->
    <section class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
             <div class="relative p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[2rem] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src="assets/heaventh-uppercase-development.jpg" class="rounded-[1.8rem] border-4 border-white w-full h-auto"/>
             </div>
        </div>
        <div class="order-1 md:order-2">
            <h3 class="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Uppercase Letterform Development</h3>
            <div class="space-y-6">
                <p class="text-gray-600 text-lg">Initial sketch exploration focused on developing expressive uppercase characters from A–Z. During this phase, a defining visual feature emerged:</p>
                <div class="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-500">
                    <p class="text-pink-900 font-medium">Thick terminal ends and small stroke knots were introduced to give the font a bold, playful, and energetic character.</p>
                </div>
                <p class="text-gray-600">Once refined, the sketches were digitised in Adobe Illustrator while maintaining the expressive characteristics of the hand-drawn forms.</p>
            </div>
        </div>
    </section>

    <!-- Structure System -->
    <section class="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100">
        <h3 class="text-3xl md:text-4xl font-serif text-gray-900 mb-10 text-center">Structural Consistency</h3>
        <div class="grid md:grid-cols-2 gap-10 items-center mb-10">
             <div>
                <p class="text-gray-600 mb-6 text-lg">Early digitisation revealed inconsistencies in stroke width, curve angles, and proportions. To correct this, a benchmark system was introduced using the letter “E” as the core reference structure.</p>
                <ul class="space-y-3">
                   <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Standardised stroke width</li>
                   <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Unified curve angles</li>
                   <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Proportional balancing</li>
                </ul>
             </div>
             <div class="relative">
                <div class="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl"></div>
                <img src="assets/heaventh-structure-system.jpg" class="relative rounded-2xl shadow-xl w-full h-auto border border-white"/>
             </div>
        </div>
        <p class="text-center text-gray-500 italic">This transformed the font from expressive sketches into a cohesive, professional alphabet system.</p>
    </section>

    <!-- Lowercase & Numbers -->
    <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col">
            <h3 class="text-2xl font-serif text-gray-900 mb-6">Lowercase Development</h3>
            <div class="rounded-xl overflow-hidden mb-6 aspect-square">
               <img src="assets/heaventh-lowercase-development.jpg" class="w-full h-full object-contain bg-white/5 rounded-xl shadow-sm"/>
            </div>
            <p class="text-gray-600 mb-4">Lowercase letter design followed the same systemisation logic. Selected lowercase letters were derived directly from uppercase structures to maintain stylistic harmony.</p>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-[2.5rem] shadow-lg flex flex-col justify-center">
            <h3 class="text-2xl font-serif text-white mb-6">Numbers & Punctuation</h3>
            <p class="text-gray-300 mb-8 leading-relaxed">Designing numbers and punctuation required translating the same visual DNA into functional symbols. Several early designs lacked stylistic integration and were restructured to match stroke thickness and terminal characteristics.</p>
            <div class="p-4 bg-white/10 rounded-xl border border-white/10 text-center">
                <span class="font-serif text-4xl tracking-widest">123 !?.</span>
            </div>
        </div>
    </section>

    <!-- Engineering -->
    <section class="relative overflow-hidden rounded-[2.5rem] bg-slate-100 p-10 md:p-14 border border-slate-200">
        <div class="grid md:grid-cols-12 gap-10 items-center">
             <div class="md:col-span-7">
                <img src="assets/heaventh-font-engineering.jpg" class="rounded-2xl shadow-2xl border border-white w-full h-auto"/>
             </div>
             <div class="md:col-span-5">
                 <h3 class="text-3xl font-serif text-gray-900 mb-6">Font Engineering</h3>
                 <p class="text-gray-600 mb-6">The completed characters were imported into FontLab 8 for full font construction.</p>
                 <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-bold text-slate-600">Kerning</span>
                    <span class="px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-bold text-slate-600">Tracking</span>
                    <span class="px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-bold text-slate-600">Side Bearings</span>
                 </div>
                 <p class="text-gray-600 text-sm">Full sentence testing ensured smooth real-world readability.</p>
             </div>
        </div>
    </section>

    <!-- Visual Presentation Grid -->
<section>
  <h3 class="text-3xl md:text-5xl font-serif text-gray-900 mb-10 text-center">
    Visual Presentation
  </h3>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div class="relative group overflow-hidden rounded-3xl aspect-square">
         <img src="assets/heaventh-presentation-1.jpg" class="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"/>
      </div>

      <div class="relative group overflow-hidden rounded-3xl aspect-square">
         <img src="assets/heaventh-presentation-2.jpg" class="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"/>
      </div>

      <div class="relative group overflow-hidden rounded-3xl aspect-square">
         <img src="assets/heaventh-presentation-3.jpg" class="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"/>
      </div>

      <div class="relative group overflow-hidden rounded-3xl aspect-square">
         <img src="assets/heaventh-presentation-4.jpg" class="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"/>
      </div>

      <div class="relative group overflow-hidden rounded-3xl aspect-square">
         <img src="assets/heaventh-presentation-5.jpg" class="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-500"/>
      </div>
  </div>
</section>



    <!-- Commercial Applications -->
    <section class="bg-[#1a1a1a] text-white p-10 md:p-14 rounded-[3rem] shadow-2xl">
        <h3 class="text-3xl font-serif mb-10 border-b border-white/20 pb-4">Commercial Applications</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-square border border-white/10">
                     <img src="assets/heaventh-mug.jpg" class="w-full h-full object-contain bg-white/5 hover:opacity-80 transition-opacity"/>
                </div>
                <p class="text-center text-xs text-gray-400 uppercase tracking-widest">Merch</p>
            </div>
            <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-square border border-white/10">
                     <img src="assets/heaventh-banner.jpg" class="w-full h-full object-contain bg-white/5 hover:opacity-80 transition-opacity"/>
                </div>
                <p class="text-center text-xs text-gray-400 uppercase tracking-widest">Banner</p>
            </div>
            <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-square border border-white/10">
                     <img src="assets/heaventh-poster.jpg" class="w-full h-full object-contain bg-white/5 hover:opacity-80 transition-opacity"/>
                </div>
                <p class="text-center text-xs text-gray-400 uppercase tracking-widest">Poster</p>
            </div>
            <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-square border border-white/10">
                     <img src="assets/heaventh-stickers.jpg" class="w-full h-full object-contain bg-white/5 hover:opacity-80 transition-opacity"/>
                </div>
                <p class="text-center text-xs text-gray-400 uppercase tracking-widest">Stickers</p>
            </div>
            <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-square border border-white/10">
                     <img src="assets/heaventh-tshirt.jpg" class="w-full h-full object-contain bg-white/5 hover:opacity-80 transition-opacity"/>
                </div>
                <p class="text-center text-xs text-gray-400 uppercase tracking-widest">Apparel</p>
            </div>
        </div>
    </section>

    <!-- Delivery & Download -->
    <section class="text-center py-10">
        <h3 class="text-3xl font-serif text-gray-900 mb-6">Ready to Use?</h3>
        <div class="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-[2.5rem] shadow-xl border border-pink-100">
             <div class="flex gap-4 text-gray-600 text-sm">
                 <span className="flex items-center gap-1">✨ Uppercase</span>
                 <span className="flex items-center gap-1">✨ Lowercase</span>
                 <span className="flex items-center gap-1">✨ Kerning</span>
                 <span className="flex items-center gap-1">✨ .TTF</span>
             </div>
             <a href="https://drive.google.com/file/d/1irbPZmmx1tdY23Ml7j7clH8ysTKc-7H1/view" target="_blank" class="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all">
                Download Heaventh Typeface
             </a>
        </div>
    </section>

    <!-- Reflection -->
    <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
             <h4 class="text-xl font-serif text-gray-900 mb-4">Experience</h4>
             <p class="text-gray-600 leading-relaxed">This project strengthened my ability to manage large-scale typographic systems and execute a font from concept to distribution. The process sharpened both my creative intuition and technical discipline.</p>
        </div>
        <div class="bg-indigo-50 p-10 rounded-[2.5rem] border border-indigo-100">
             <h4 class="text-xl font-serif text-indigo-900 mb-4">Key Takeaway</h4>
             <p class="text-indigo-800 leading-relaxed italic">"Typeface design demands absolute consistency. A single variation in stroke weight or spacing can weaken the entire system."</p>
        </div>
    </section>

  </div>
  `
},



{
  id: 'key-artwork-identity',
  title: 'Key Artwork & Personal Brand Identity',
  category: 'Graphic Design',
  group: 'Logo',
  description: 'Wordmark Design, Animated Identity & Collateral System',
  imageUrl: 'assets/key-artwork-cover.jpg',
  tools: ['Illustrator', 'After Effects', 'Branding', 'Motion Design'],
  span: 'col-span-1',

  details: `
  <div class="space-y-24 font-['DM_Sans'] text-gray-800">

    <!-- Hero -->
    <section class="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-900 via-black to-red-950 p-10 md:p-20 text-white shadow-2xl border border-gray-800">
        <div class="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-green-600/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div class="relative z-10">
             <div class="inline-flex gap-2 mb-8 flex-wrap">
                 <span class="px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-red-300">Brand Identity</span>
                 <span class="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-green-300">Motion Design</span>
             </div>
             <h2 class="text-4xl md:text-7xl font-serif mb-6 leading-tight">Key Artwork & <br/>Personal Brand Identity</h2>
             <p class="text-lg md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">Wordmark Design, Animated Identity & Collateral System.</p>
        </div>
    </section>

    <!-- Overview & Personal Direction -->
    <section class="grid md:grid-cols-2 gap-12">
        <div class="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
             <h3 class="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                <span class="w-3 h-8 bg-black rounded-full"></span> Project Overview
             </h3>
             <p class="text-gray-600 leading-relaxed mb-6">This project focuses on the creation of a personal key artwork (wordmark) that functions as both a visual signature and an artistic identity system. The wordmark represents my personal brand, personality, and creative direction, while remaining adaptable across physical and digital applications such as apparel, merchandise, and social media.</p>
             <p class="text-gray-600 leading-relaxed">Beyond static design, this identity was further expanded into:</p>
             <ul class="mt-4 space-y-2 text-sm font-medium text-gray-500">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> Animated key artwork</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Brand expansion patterns</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> Physical collateral designs</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Instagram-based brand presentation system</li>
             </ul>
        </div>
        
        <div class="flex flex-col justify-center">
             <h3 class="text-2xl font-serif text-gray-900 mb-6">Concept Direction</h3>
             <div class="flex flex-wrap gap-3 mb-8">
                 <span class="px-6 py-3 bg-gray-100 rounded-2xl text-gray-800 font-bold">Movement</span>
                 <span class="px-6 py-3 bg-red-50 rounded-2xl text-red-600 font-bold border border-red-100">Energy</span>
                 <span class="px-6 py-3 bg-gray-100 rounded-2xl text-gray-800 font-bold">Identity</span>
                 <span class="px-6 py-3 bg-green-50 rounded-2xl text-green-600 font-bold border border-green-100">Recognition</span>
             </div>
             <div class="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <p class="text-gray-600 italic">"I wanted the wordmark to feel dynamic, expressive, and in motion, using flowing curves and connected strokes to symbolise momentum and growth."</p>
             </div>
        </div>
    </section>

    <!-- Personality Traits Visualization -->
    <section>
        <div class="relative bg-black text-white p-10 md:p-14 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600 to-transparent opacity-20 blur-3xl rounded-full"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-600 to-transparent opacity-20 blur-3xl rounded-full"></div>
            
            <h3 class="text-3xl font-serif text-white mb-10 text-center relative z-10">Personal Concept Foundation</h3>
            
            <div class="flex flex-wrap justify-center gap-4 relative z-10">
                <div class="group relative px-8 py-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-default">
                    <span class="block text-2xl font-serif mb-2">Outgoing</span>
                    <span class="text-xs text-gray-400 uppercase tracking-widest">Trait 01</span>
                </div>
                <div class="group relative px-8 py-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 transition-all cursor-default">
                    <span class="block text-2xl font-serif mb-2 text-red-300">Ambitious</span>
                    <span class="text-xs text-red-200 uppercase tracking-widest">Trait 02</span>
                </div>
                 <div class="group relative px-8 py-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 transition-all cursor-default">
                    <span class="block text-2xl font-serif mb-2 text-green-300">Energetic</span>
                    <span class="text-xs text-green-200 uppercase tracking-widest">Trait 03</span>
                </div>
                <div class="group relative px-8 py-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-default">
                    <span class="block text-2xl font-serif mb-2">Forward-thinking</span>
                    <span class="text-xs text-gray-400 uppercase tracking-widest">Trait 04</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Sketch Exploration -->
    <section>
        <div class="flex items-center gap-4 mb-12">
            <span class="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">01</span>
            <h3 class="text-3xl md:text-4xl font-serif text-gray-900">Sketch Exploration</h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 hover:shadow-xl transition-all duration-500">
                <div class="rounded-2xl overflow-hidden mb-6 bg-white shadow-sm border border-gray-100 aspect-video relative">
                     <img src="assets/key-art-sketch-1.jpg" alt="Concept 1 Sketch" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div class="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Concept 1</div>
                </div>
                <h4 class="text-xl font-serif text-gray-900 mb-3">Speed & Motion</h4>
                <p class="text-gray-600 text-sm leading-relaxed">The letters of “icese” were connected through top and bottom strokes, creating a continuous flow that communicates speed, drive, and ambition. This version reflects my competitive and energetic nature.</p>
            </div>

            <div class="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 hover:shadow-xl transition-all duration-500">
                <div class="rounded-2xl overflow-hidden mb-6 bg-white shadow-sm border border-gray-100 aspect-video relative">
                     <img src="assets/key-art-sketch-2.jpg" alt="Concept 2 Sketch" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div class="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Concept 2</div>
                </div>
                <h4 class="text-xl font-serif text-gray-900 mb-3">Identity Through Form</h4>
                <p class="text-gray-600 text-sm leading-relaxed">A more experimental concept where the wordmark formed a face using negative space and geometry. This direction symbolised approachability, human connection, and future aspiration.</p>
            </div>
        </div>
    </section>

    <!-- Digital Development -->
    <section class="bg-gradient-to-b from-gray-50 to-white p-10 md:p-14 rounded-[3rem] border border-gray-100">
        <h3 class="text-3xl font-serif text-gray-900 mb-12 text-center">Digital Wordmark Development</h3>
        
        <div class="space-y-16 max-w-5xl mx-auto">
            <!-- Step 1 -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="order-2 md:order-1">
                    <strong class="text-xl text-gray-900 block mb-3">1. Geometric Motion</strong>
                    <p class="text-gray-600 leading-relaxed mb-4">The first digital version began by constructing the word using typographic geometry. The middle “E” was integrated into the “C” to form a compact, unified structure.</p>
                    <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span class="w-2 h-2 rounded-full bg-gray-300"></span> Geometric Structure
                    </div>
                </div>
                <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <img src="assets/key-art-digital-1.jpg" alt="Geometric Motion Wordmark" class="w-full h-auto" />
                </div>
            </div>

            <!-- Step 2 -->
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <img src="assets/key-art-digital-2.jpg" alt="Calligraphic Identity Wordmark" class="w-full h-auto" />
                </div>
                <div>
                    <strong class="text-xl text-gray-900 block mb-3">2. Calligraphic Identity</strong>
                    <p class="text-gray-600 leading-relaxed mb-4">Developed using hand-drawn digital strokes, evolving into a calligraphy-inspired identity mark. Two stroke styles were tested: rounded-ended brush strokes and calligraphy-style pressure strokes.</p>
                    <div class="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm inline-block font-medium">Selected Direction</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Refinement -->
    <section>
        <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">03</span>
            <h3 class="text-3xl md:text-4xl font-serif text-gray-900">Structural Refinement</h3>
        </div>
        
        <div class="bg-gray-900 text-gray-300 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div class="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            
            <div class="grid md:grid-cols-12 gap-10 items-center relative z-10">
                <div class="md:col-span-7">
                    <img src="assets/key-art-refinement.jpg" alt="Structural Refinement" class="w-full h-auto rounded-xl shadow-2xl border border-gray-700" />
                </div>
                <div class="md:col-span-5 space-y-6">
                    <h4 class="text-2xl font-serif text-white">Balance Control</h4>
                    <ul class="space-y-4">
                        <li class="flex gap-4 border-b border-gray-800 pb-4">
                            <span class="text-gray-500 font-bold">01</span>
                            <span>Anchor point reduction for smoother curves</span>
                        </li>
                        <li class="flex gap-4 border-b border-gray-800 pb-4">
                            <span class="text-gray-500 font-bold">02</span>
                            <span>Stroke width balancing using Illustrator’s width tool</span>
                        </li>
                        <li class="flex gap-4 border-b border-gray-800 pb-4">
                            <span class="text-gray-500 font-bold">03</span>
                            <span>Oval shaping to control internal white space</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="text-gray-500 font-bold">04</span>
                            <span>Addition of terminal dots to unify stroke endings</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Color Strategy -->
    <section class="grid md:grid-cols-2 gap-8 items-stretch">
        <div class="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 class="text-3xl font-serif text-gray-900 mb-6">Color Strategy</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">Through contrast research, red and green were selected for their complementary relationship and high visual impact. Further refinement increased saturation to ensure the identity remained bold, energetic, and attention-grabbing.</p>
            <img src="assets/key-art-color.jpg" alt="Color Palette" class="w-full h-auto rounded-xl shadow-sm" />
        </div>
        <div class="flex flex-col gap-4">
             <div class="flex-1 bg-red-600 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-4xl font-serif">Red</span>
                <span className="text-red-200">Energy & Passion</span>
             </div>
             <div class="flex-1 bg-green-600 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-4xl font-serif">Green</span>
                <span className="text-green-200">Growth & Nature</span>
             </div>
        </div>
    </section>

    <!-- Identity Expansion -->
    <section>
        <h3 class="text-3xl md:text-5xl font-serif text-gray-900 mb-10 text-center">Identity Expansion System</h3>
        <div class="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
             <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-lg">The letter “i” was extracted as the core expansion unit. Through rotation, duplication, and mirroring, it evolved into secondary identity marks and a floral-style brand pattern.</p>
             
             <div class="rounded-2xl overflow-hidden shadow-lg border border-white">
                 <img src="assets/key-art-expansion.jpg" alt="Identity Expansion System" class="w-full h-auto" />
             </div>
             
             <div class="grid grid-cols-3 gap-4 mt-8 text-center">
                 <div class="bg-white p-4 rounded-xl shadow-sm"><span class="block font-bold text-gray-900">Responsive</span></div>
                 <div class="bg-white p-4 rounded-xl shadow-sm"><span class="block font-bold text-gray-900">Flexible</span></div>
                 <div class="bg-white p-4 rounded-xl shadow-sm"><span class="block font-bold text-gray-900">Derived</span></div>
             </div>
        </div>
    </section>

    <!-- Collateral Grid -->
    <section>
        <h3 class="text-3xl font-serif text-gray-900 mb-8 border-b border-gray-200 pb-4 inline-block">Collateral Applications</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- T-Shirt -->
            <div class="group relative rounded-[2rem] overflow-hidden aspect-[3/4]">
                <img src="assets/key-art-tshirt.jpg" alt="T-Shirt Design" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-6 left-6 text-white">
                    <strong class="block text-xl font-serif mb-1">Apparel</strong>
                    <span class="text-xs text-gray-300 uppercase tracking-widest">Visual Rhythm</span>
                </div>
            </div>

            <!-- Phone Case -->
            <div class="group relative rounded-[2rem] overflow-hidden aspect-[3/4]">
                <img src="assets/key-art-phone.jpg" alt="Phone Case Design" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-6 left-6 text-white">
                    <strong class="block text-xl font-serif mb-1">Phone Case</strong>
                    <span class="text-xs text-gray-300 uppercase tracking-widest">Futuristic Identity</span>
                </div>
            </div>

            <!-- Cap -->
            <div class="group relative rounded-[2rem] overflow-hidden aspect-[3/4]">
                <img src="assets/key-art-cap.jpg" alt="Cap Design" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-6 left-6 text-white">
                    <strong class="block text-xl font-serif mb-1">Streetwear</strong>
                    <span class="text-xs text-gray-300 uppercase tracking-widest">High Contrast</span>
                </div>
            </div>
            
            <!-- Insta -->
            <div class="group relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-100">
                <img src="assets/key-art-insta.jpg" alt="Instagram Grid" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-6 left-6 text-white">
                    <strong class="block text-xl font-serif mb-1">Social Grid</strong>
                    <span class="text-xs text-gray-300 uppercase tracking-widest">Digital Ecosystem</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Reflection -->
    <section class="bg-gray-50 p-10 md:p-14 rounded-[3rem] text-center border border-gray-200">
        <h3 class="text-3xl font-serif text-gray-900 mb-6">Reflection & Growth</h3>
        <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">Through this project, I strengthened my ability to translate personality into visual identity, design typography as a branding system, and control stroke consistency. It established my foundation in personal branding and motion-integrated typography.</p>
        <div class="inline-block p-1 bg-gradient-to-r from-red-500 to-green-500 rounded-full">
           <div class="bg-white px-8 py-3 rounded-full">
               <strong class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600 font-bold uppercase tracking-widest text-sm">Recognisable. Adaptable. Cohesive.</strong>
           </div>
        </div>
    </section>

  </div>
  `
},

  {
    id: 'typography-system-design',
    title: 'Typography System Design',
    category: 'Typography Layout',
    group: 'Art',
    description: 'Structured Typographic Composition & Visual Hierarchy Exploration.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
          <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
             <h2 class="text-4xl md:text-6xl font-serif mb-6 leading-tight relative z-10">Typography System Design</h2>
             <p class="text-xl text-gray-300 font-serif italic mb-8 relative z-10">Structured Typographic Composition | Visual Hierarchy | Grid-Based Layout Exploration</p>
          </section>

          <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">1. Project Overview</h3>
             <p class="text-lg text-gray-700 leading-relaxed mb-8">This project explores how typography can be structured using different typographic systems to create order, hierarchy, rhythm, and visual clarity. Instead of treating text as simple content, the goal was to use typography as the primary design structure — where alignment, spacing, balance, and flow define the composition.</p>
             
             <div class="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <strong class="block text-xl text-gray-900 mb-6 font-serif">Eight Core Typographic Systems Explored</strong>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Axial</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Radial</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Dilatational</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Random</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Grid</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Modular</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Transitional</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">Bilateral</span>
                </div>
                <p class="text-gray-600 mt-6 text-sm">All designs were developed within a controlled visual constraint of black plus one accent color, using only typography and minimal graphic elements. This helped maintain focus on structural layout rather than decoration.</p>
             </div>
          </section>

          <section>
              <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Research & System Understanding</h3>
              <p class="text-gray-700 mb-6">Before designing, I studied how each typographic system functions structurally and visually:</p>
              <div class="grid md:grid-cols-2 gap-6">
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Axial</strong>
                    <p class="text-gray-500 text-sm">Organises text around a central axis to create balance and order.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Radial</strong>
                    <p class="text-gray-500 text-sm">Radiates elements outward from a focal point.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Dilatational</strong>
                    <p class="text-gray-500 text-sm">Expands typography outward in circular or layered motion.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Random</strong>
                    <p class="text-gray-500 text-sm">Breaks traditional structure to create energy and unpredictability.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Grid</strong>
                    <p class="text-gray-500 text-sm">Uses columns and rows to enforce strict alignment.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Modular</strong>
                    <p class="text-gray-500 text-sm">Organises text into repeated visual units.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Transitional</strong>
                    <p class="text-gray-500 text-sm">Applies traditional reading flow with subtle structural changes.</p>
                 </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <strong class="block text-gray-900 mb-1">Bilateral</strong>
                    <p class="text-gray-500 text-sm">Mirrors text symmetrically across a central axis.</p>
                 </div>
              </div>
          </section>

          <section>
              <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Concept Development & Sketching</h3>
              <p class="text-gray-600 mb-6">Before digital execution, each typographic system was first explored through hand sketches. These early sketches focused on: Alignment direction, Spatial division, Visual balance, Reading flow, and Negative space.</p>
              <p class="text-gray-600 mb-8">Sketching allowed quick experimentation with layout structures before refining them digitally.</p>
              <img src="assets/typography-sketches.jpg" alt="Concept Sketches" class="w-full h-auto rounded-xl shadow-md" />
          </section>

          <section>
              <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Digital Design Process</h3>
              <p class="text-gray-600 mb-12">Each system was digitally constructed with its own unique composition logic.</p>

              <div class="space-y-16">
                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div class="order-2 md:order-1">
                         <strong class="text-2xl font-serif block mb-4">Axial System</strong>
                         <p class="text-gray-600 mb-4">Typography was aligned along a strong central axis. Visual depth was created through layered rectangular elements and offset shadows. One composition explored diagonal tension while another focused on controlled symmetry. The final direction emphasized clarity, balance, and depth.</p>
                      </div>
                      <div class="order-1 md:order-2">
                         <img src="assets/typography-axial.jpg" alt="Axial System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                         <img src="assets/typography-radial.jpg" alt="Radial System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                      <div>
                         <strong class="text-2xl font-serif block mb-4">Radial System</strong>
                         <p class="text-gray-600 mb-4">Text elements were arranged to radiate outward from a central focal point using circular forms. Initial explorations focused on dense layering before refining toward a cleaner, more focused radial spread to strengthen visual impact and legibility.</p>
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div class="order-2 md:order-1">
                         <strong class="text-2xl font-serif block mb-4">Dilatational System</strong>
                         <p class="text-gray-600 mb-4">Overlapping circular forms were used to simulate expansion and motion. The composition creates a sense of space and depth by allowing text to visually “breathe” outward from the center.</p>
                      </div>
                      <div class="order-1 md:order-2">
                         <img src="assets/typography-dilatational.jpg" alt="Dilatational System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                         <img src="assets/typography-random.jpg" alt="Random System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                      <div>
                         <strong class="text-2xl font-serif block mb-4">Random System</strong>
                         <p class="text-gray-600 mb-4">The layout intentionally breaks structure. Letter angles, scale, spacing, and alignment were varied to generate disorder, tension, and visual energy. Color and opacity were used to guide hierarchy while maintaining chaos.</p>
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div class="order-2 md:order-1">
                         <strong class="text-2xl font-serif block mb-4">Grid System</strong>
                         <p class="text-gray-600 mb-4">This design applied a strict column-based structure. All information was aligned precisely within grid units, creating a clean, editorial-style composition. Adjustments were made to ensure text never collided with structural lines.</p>
                      </div>
                      <div class="order-1 md:order-2">
                         <img src="assets/typography-grid.jpg" alt="Grid System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                         <img src="assets/typography-modular.jpg" alt="Modular System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                      <div>
                         <strong class="text-2xl font-serif block mb-4">Modular System</strong>
                         <p class="text-gray-600 mb-4">Typography was organised into repeated modules. The design balances structure and flexibility. After refinement, alignment and spacing were standardised for visual clarity and consistency.</p>
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div class="order-2 md:order-1">
                         <strong class="text-2xl font-serif block mb-4">Transitional System</strong>
                         <p class="text-gray-600 mb-4">This system focused on traditional reading flow with subtle visual emphasis. Color and spacing were used to highlight hierarchy while maintaining a calm, minimal aesthetic.</p>
                      </div>
                      <div class="order-1 md:order-2">
                         <img src="assets/typography-transitional.jpg" alt="Transitional System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                         <img src="assets/typography-bilateral.jpg" alt="Bilateral System" class="w-full h-auto rounded-xl shadow-md" />
                      </div>
                      <div>
                         <strong class="text-2xl font-serif block mb-4">Bilateral System</strong>
                         <p class="text-gray-600 mb-4">The final composition mirrored text symmetrically across a central vertical axis. Balance and harmony were the primary design focus, refined to avoid harsh angles and improve visual stability.</p>
                      </div>
                  </div>
              </div>
          </section>

          <section class="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-xl">
              <h3 class="text-3xl font-serif mb-8">5. Final Outcome & Reflection</h3>
              <p class="text-gray-300 text-lg mb-8">The completed typography system demonstrates strong control of Alignment, Hierarchy, White space, Rhythm, Visual balance, and Structural logic. Each system maintains its unique spatial identity while still belonging to a cohesive typographic language.</p>
              
              <img src="assets/typography-final.jpg" alt="Final Typography System Collection" class="w-full h-auto rounded-xl shadow-lg mb-12 border border-gray-700" />
              
              <div class="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                 <div>
                    <strong class="text-xl font-serif block mb-4 text-gray-200">Reflection</strong>
                    <ul class="space-y-2 text-gray-400">
                       <li class="flex gap-2"><span>✦</span> Design with structure before decoration</li>
                       <li class="flex gap-2"><span>✦</span> Use alignment as a storytelling tool</li>
                       <li class="flex gap-2"><span>✦</span> Control readability through spacing</li>
                       <li class="flex gap-2"><span>✦</span> Build flexible grid systems</li>
                       <li class="flex gap-2"><span>✦</span> Translate theoretical layout systems into practical design applications</li>
                    </ul>
                 </div>
                 <div class="flex items-center justify-center">
                    <p className="text-xl font-serif italic text-gray-400 text-center">"This typography system now serves as a foundational framework for editorial, poster, and UI layout design."</p>
                 </div>
              </div>
          </section>
      </div>
    `,
    imageUrl: 'assets/typography-system-cover.jpg',
    tools: ['InDesign', 'Typography', 'Layout Design'],
    span: 'col-span-1'
  },
  {
    id: 'expressive-typography',
    title: 'Expressive Typography',
    category: 'Typography Design',
    group: 'Art', 
    description: 'Type as Visual Expression & Conceptual Design.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
             <h2 class="text-4xl md:text-6xl font-serif mb-6 leading-tight relative z-10">Expressive Typography</h2>
             <p class="text-xl text-gray-300 font-serif italic mb-8 relative z-10">Type as Visual Expression | Conceptual Typography Design</p>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">1. Research & Visual Exploration</h3>
             <p class="text-lg text-gray-700 leading-relaxed mb-8">This project began with an exploration into the concept of type expression, where typography is used not just for readability, but as a visual language to communicate meaning, emotion, and action. In expressive typography, letters themselves become part of the visual narrative.</p>
             <p class="text-lg text-gray-700 leading-relaxed mb-8">To develop a stronger understanding of this approach, I studied multiple typography expression references and analysed how designers manipulate scale, weight, spacing, and structure to visually represent motion, sound, and illusion.</p>
             
             <div class="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <strong class="block text-xl text-gray-900 mb-6 font-serif">Key Typography Principles Identified</strong>
                <p class="text-gray-600 mb-4">Through this research, several essential principles emerged as critical in effective expressive typography:</p>
                <div class="grid md:grid-cols-3 gap-6">
                   <div class="bg-white p-6 rounded-xl shadow-sm">
                      <strong class="block text-gray-900 mb-2">Typeface Selection</strong>
                      <p class="text-gray-600 text-sm">Fonts must remain readable while supporting the emotional tone of the word.</p>
                   </div>
                   <div class="bg-white p-6 rounded-xl shadow-sm">
                      <strong class="block text-gray-900 mb-2">Variation of Weight & Style</strong>
                      <p class="text-gray-600 text-sm">Using bold, light, and italic styles creates contrast, depth, and hierarchy.</p>
                   </div>
                   <div class="bg-white p-6 rounded-xl shadow-sm">
                      <strong class="block text-gray-900 mb-2">Scale & Emphasis</strong>
                      <p class="text-gray-600 text-sm">Large and small letter variations help communicate dominance, motion, pressure, or softness.</p>
                   </div>
                </div>
                <p class="text-gray-500 text-sm mt-6 italic">These principles became the foundation of all design development.</p>
             </div>
        </section>

        <section>
              <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Concept Selection & Ideation</h3>
              <p class="text-lg text-gray-700 mb-6">From a broader list of possible words, I selected four words that could be powerfully expressed using typography alone:</p>
              <div class="flex flex-wrap gap-4 mb-8">
                 <span class="px-6 py-3 bg-black text-white rounded-full font-serif text-lg">Roar</span>
                 <span class="px-6 py-3 bg-black text-white rounded-full font-serif text-lg">Chop</span>
                 <span class="px-6 py-3 bg-black text-white rounded-full font-serif text-lg">Dive</span>
                 <span class="px-6 py-3 bg-black text-white rounded-full font-serif text-lg">Illusion</span>
              </div>
              <p class="text-gray-600">Each word was chosen based on its ability to visually communicate sound, motion, or perception using only letterforms. I began with freehand ideation sketches, allowing form experimentation without limitations.</p>
              <p class="text-gray-600 mt-4">The early sketches were then refined with clearer visual logic, stronger typographic structure, and improved compositional clarity before transitioning into digital exploration.</p>
        </section>

        <section>
              <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Digitisation & Design Development</h3>
              <p class="text-gray-600 mb-12">All designs were digitally developed with close attention to scale control, alignment, clipping, distortion, and visual balance. Each word went through multiple iterations to test how different typographic treatments could strengthen meaning.</p>
        
              <!-- A. ROAR -->
              <div class="mb-16">
                 <h4 class="text-2xl font-serif text-gray-900 mb-6 border-l-4 border-black pl-4">A. ROAR — Expressing Sound & Power</h4>
                 <p class="text-gray-600 mb-6">Roar explores the visual representation of sound intensity and aggression.</p>
                 
                 <div class="space-y-8">
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Roar Variation 1</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: Futura Std Light. The letter R is placed horizontally. Letters O, A, R increase progressively in size. This creates a visual build-up of sound energy.</p>
                       <img src="assets/expressive-roar-1.jpg" alt="Roar Variation 1" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Roar Variation 2</strong>
                       <p class="text-sm text-gray-500 mb-4">Combination of Futura Std Bold and Light. “R” and “A R” are separated to allow space for “O”. The “O” increases in stroke weight to imply deep vibration and resonance.</p>
                       <img src="assets/expressive-roar-2.jpg" alt="Roar Variation 2" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Roar Variation 3</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: Futura Std Bold and Light. An oversized “O” placed at the centre. Surrounding “A” letters face inward like sharp teeth. A second inner “O” adds visual depth. The word transforms into a roaring mouth.</p>
                       <img src="assets/expressive-roar-3.jpg" alt="Roar Variation 3" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                 </div>
              </div>
        
              <!-- B. CHOP -->
              <div class="mb-16">
                 <h4 class="text-2xl font-serif text-gray-900 mb-6 border-l-4 border-black pl-4">B. CHOP — Expressing Impact & Cutting Motion</h4>
                 <p class="text-gray-600 mb-6">Chop focuses on sudden force, separation, and physical impact.</p>
                 
                 <div class="space-y-8">
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Chop Variation 1</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: ITC New Baskerville Std Roman. The word “CHOP-CHOP” is duplicated. A clipping mask splits the typography into two equal halves. This visually simulates the act of chopping.</p>
                       <img src="assets/expressive-chop-1.jpg" alt="Chop Variation 1" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Chop Variation 2</strong>
                       <p class="text-sm text-gray-500 mb-4">Overlapping duplicate words. The lower section hangs downward. This creates the illusion of gravity and separation after impact.</p>
                       <img src="assets/expressive-chop-2.jpg" alt="Chop Variation 2" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Chop Variation 3</strong>
                       <p class="text-sm text-gray-500 mb-4">Two overlapping “CHOP” words are cut in half. The lower half is slightly shifted to the right. This reinforces motion and directional force.</p>
                       <img src="assets/expressive-chop-3.jpg" alt="Chop Variation 3" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                 </div>
              </div>
        
              <!-- C. DIVE -->
              <div class="mb-16">
                 <h4 class="text-2xl font-serif text-gray-900 mb-6 border-l-4 border-black pl-4">C. DIVE — Expressing Descent & Water Motion</h4>
                 <p class="text-gray-600 mb-6">Dive explores vertical movement, depth, and underwater atmosphere.</p>
                 
                 <div class="space-y-8">
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Dive Variation 1</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: ITC Garamond Std Light Condensed. A large hollow “D” becomes a visual container. Repeated dot elements from the letter “i” form rising bubbles. The composition suggests underwater depth.</p>
                       <img src="assets/expressive-dive-1.jpg" alt="Dive Variation 1" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Dive Variation 2</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: Baskerville Regular. Repeated dot patterns rise upward to simulate continuous bubbles.</p>
                       <img src="assets/expressive-dive-2.jpg" alt="Dive Variation 2" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Dive Variation 3</strong>
                       <p class="text-sm text-gray-500 mb-4">The letter “V” is duplicated and rotated. It forms a sharp downward motion. The letter “E” is rotated and attached beneath, enhancing the falling effect.</p>
                       <img src="assets/expressive-dive-3.jpg" alt="Dive Variation 3" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                 </div>
              </div>
        
              <!-- D. ILLUSION -->
              <div class="mb-16">
                 <h4 class="text-2xl font-serif text-gray-900 mb-6 border-l-4 border-black pl-4">D. ILLUSION — Expressing Visual Deception</h4>
                 <p class="text-gray-600 mb-6">Illusion focuses on misdirection, repetition, and visual distortion.</p>
                 
                 <div class="space-y-8">
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Illusion Variation 1</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: Futura Std Book and Light. Mixed uppercase and lowercase for height consistency. Shadow and vertical distortions create an optical illusion effect.</p>
                       <img src="assets/expressive-illusion-1.jpg" alt="Illusion Variation 1" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl">
                       <strong class="block text-lg mb-2">Illusion Variation 2</strong>
                       <p class="text-sm text-gray-500 mb-4">Typeface: Futura Std Medium. Circular “type on path” used repeatedly. Typography radiates outward in layers, creating depth and motion illusion.</p>
                       <img src="assets/expressive-illusion-2.jpg" alt="Illusion Variation 2" class="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div class="bg-black text-white p-8 rounded-2xl">
                       <strong class="block text-xl mb-4 font-serif">Final Refinement</strong>
                       <ul class="space-y-2 text-gray-400 text-sm mb-6">
                           <li>• Vertical lines replaced with the letter “L”</li>
                           <li>• Mixed uppercase and lowercase enhanced readability</li>
                           <li>• Gaps added intentionally to strengthen the illusion effect</li>
                       </ul>
                       <p class="text-sm text-gray-400 mb-6 italic">The final result balances clarity with surreal distortion.</p>
                       <img src="assets/expressive-illusion-final.jpg" alt="Illusion Final Refinement" class="w-full h-auto rounded-xl shadow-md border border-gray-700" />
                    </div>
                 </div>
              </div>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Motion Exploration — Illusion Animation</h3>
             <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                   <p class="text-lg text-gray-700 mb-4">Among the four words, Illusion was selected for motion development. A sequence of 76 individual frames was created to gradually transform the typography over time.</p>
                   <p class="text-gray-600 mb-4">These frames were assembled into an animation that reinforces:</p>
                   <ul class="space-y-2 text-gray-600">
                      <li class="flex gap-2"><span>✦</span> Visual transformation</li>
                      <li class="flex gap-2"><span>✦</span> Spatial distortion</li>
                      <li class="flex gap-2"><span>✦</span> Depth perception</li>
                      <li class="flex gap-2"><span>✦</span> The transition from stability to illusion</li>
                   </ul>
                   <p class="text-gray-600 mt-4 italic">This motion study extends the project beyond static typography into time-based visual expression.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-2xl flex items-center justify-center h-64 border border-gray-200">
                   <img src="assets/expressive-illusion-animation.jpg" alt="Illusion Final Refinement" class="w-full h-auto rounded-xl shadow-md border border-gray-700" />
                </div>
             </div>
        </section>

        <section class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
             <h3 class="text-3xl font-serif text-gray-900 mb-8">5. Final Outcome</h3>
             <p class="text-gray-700 mb-8 text-lg">The completed works successfully demonstrate:</p>
             <ul class="space-y-2 text-gray-600 mb-8">
                <li>• Expressive typography built entirely from letterforms</li>
                <li>• Strong communication without the use of illustrations</li>
                <li>• Visual meaning driven by scale, rhythm, weight, and spatial control</li>
                <li>• The ability to translate sound, motion, impact, and illusion into typographic form</li>
             </ul>
             <p class="text-gray-600 mb-8 italic">Each word communicates not only through reading, but through visual perception.</p>
             <img src="assets/expressive-final-outcome.jpg" alt="Final Outcome" class="w-full h-auto rounded-2xl shadow-lg" />
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-6">6. Reflection & Learning Outcomes</h3>
             <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-8">
                <strong class="block text-xl text-gray-900 mb-4">Through this project, I strengthened my ability to:</strong>
                <ul class="space-y-3 text-gray-600">
                   <li class="flex gap-3"><span class="text-black font-bold">•</span> Treat typography as a storytelling medium, not just a text tool</li>
                   <li class="flex gap-3"><span class="text-black font-bold">•</span> Translate abstract concepts such as sound and motion into visual form</li>
                   <li class="flex gap-3"><span class="text-black font-bold">•</span> Apply hierarchy, contrast, and balance at a professional level</li>
                   <li class="flex gap-3"><span class="text-black font-bold">•</span> Develop multiple design directions through iteration</li>
                   <li class="flex gap-3"><span class="text-black font-bold">•</span> Build motion through frame-based transformation</li>
                </ul>
                <p class="text-xl font-serif italic text-gray-900 mt-8 border-t border-gray-100 pt-6">"This project reshaped how I think about type — not as static text, but as a living visual language."</p>
             </div>
             <strong class="block text-xl mb-4 font-serif text-gray-900">Final Result</strong>
             <img src="assets/expressive-final-result.jpg" alt="Final Result" class="w-full h-auto rounded-2xl shadow-xl border border-gray-100" />
        </section>
      </div>
    `,
    imageUrl: 'assets/expressive-typography-cover.jpg',
    tools: ['Illustrator', 'Typography', 'Motion Design'],
    span: 'col-span-1'
  },
  {
    id: 'creative-letter-form',
    title: 'Creative Letter-form Poster',
    category: 'Typography & Poster Design',
    group: 'Art',
    description: 'Type Extraction | Organic Typography | Image & Letter Interplay.',
    details: `
      <div class="space-y-16 font-['DM_Sans']">
        <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px] pointer-events-none"></div>
             <h2 class="text-4xl md:text-6xl font-serif mb-6 leading-tight relative z-10">Creative Letter-form Poster</h2>
             <p class="text-xl text-gray-300 font-serif italic mb-8 relative z-10">Type Extraction | Organic Typography | Image & Letter Interplay</p>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">1. Project Overview</h3>
             <p class="text-lg text-gray-700 leading-relaxed mb-8">This project explores how letterforms can be extracted from real-world objects and transformed into expressive typography. Instead of starting from a traditional font, the process begins with visual observation, turning physical shapes into typographic structure.</p>
             
             <div class="bg-yellow-50 p-8 rounded-[2rem] border border-yellow-100">
                <strong class="block text-xl text-yellow-900 mb-4 font-serif">Object of Exploration: French Fries</strong>
                <p class="text-yellow-800 mb-4">Chosen for their unique visual qualities:</p>
                <div class="flex flex-wrap gap-3">
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm text-yellow-700 text-sm font-bold">Irregular edges</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm text-yellow-700 text-sm font-bold">Organic shapes</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm text-yellow-700 text-sm font-bold">Natural imperfections</span>
                   <span class="px-4 py-2 bg-white rounded-lg shadow-sm text-yellow-700 text-sm font-bold">Playful character</span>
                </div>
                <p class="text-yellow-800/80 mt-4 italic text-sm">These qualities made them ideal for creating a unique typographic identity.</p>
             </div>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">2. Image Study & Letter Discovery</h3>
             <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                   <p class="text-gray-600 leading-relaxed mb-4">The first stage involved identifying potential letter shapes within the fries image. Using vector tools, natural contours were traced to extract possible letter structures.</p>
                   <p class="text-gray-600 font-medium">The goal was to retain the visual identity of the fries while forming readable letters.</p>
                </div>
                <div>
                   <img src="assets/fries-letter-discovery.jpg" alt="Letter Discovery" class="w-full h-auto rounded-xl shadow-md border border-gray-100" />
                </div>
             </div>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">3. Typeface Alignment & Refinement</h3>
             <p class="text-gray-600 mb-8">A classical serif typeface was selected as a proportional reference to guide stroke thickness, contrast, letter width, and structural consistency.</p>
             
             <div class="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 mb-8">
                <strong class="block text-lg text-gray-900 mb-4">Refinement Process</strong>
                <ul class="space-y-2 text-gray-600 mb-6">
                   <li class="flex gap-2"><span>✦</span> Organic imperfection vs Legibility</li>
                   <li class="flex gap-2"><span>✦</span> Visual consistency vs Structural harmony</li>
                </ul>
                <p class="text-gray-500 text-sm italic">At later stages, zig-zag strokes and irregular edges were introduced deliberately to reinforce the natural fries texture.</p>
             </div>
             <img src="assets/fries-typeface-refinement.jpg" alt="Typeface Alignment" class="w-full h-auto rounded-xl shadow-md" />
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">4. Letter Development</h3>
             <div class="grid md:grid-cols-2 gap-8 items-center">
                 <div class="order-2 md:order-1">
                    <img src="assets/fries-letter-development.jpg" alt="Letter Development" class="w-full h-auto rounded-xl shadow-md" />
                 </div>
                 <div class="order-1 md:order-2">
                    <strong class="text-2xl font-serif text-gray-900 block mb-4">Final Letters: L E T I H</strong>
                    <p class="text-gray-600 mb-4">Each letter maintains a shared structural rhythm and controlled stroke consistency, while celebrating the natural irregularity inspired by the fries.</p>
                 </div>
             </div>
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">5. Poster Design & Visual Interplay</h3>
             <p class="text-gray-600 mb-6">After completing the custom type design, the letterforms were applied into a movie poster composition. The initial horror concept was later refined into a lighthearted comedy theme, allowing the playful nature of the fries to drive the emotional tone.</p>
             
             <div class="bg-gray-900 text-gray-300 p-8 rounded-[2rem] mb-8">
                <strong class="block text-white text-lg mb-4">Key Refinements</strong>
                <div class="grid grid-cols-2 gap-4 text-sm">
                   <div class="bg-white/10 p-3 rounded-lg">Color matching between typography and fries</div>
                   <div class="bg-white/10 p-3 rounded-lg">Image overlays on letter surfaces</div>
                   <div class="bg-white/10 p-3 rounded-lg">Grain texture blending</div>
                   <div class="bg-white/10 p-3 rounded-lg">Shadow control for realism</div>
                </div>
             </div>
             <img src="assets/fries-poster-design.jpg" alt="Poster Design Process" class="w-full h-auto rounded-xl shadow-md" />
        </section>

        <section>
             <h3 class="text-3xl font-serif text-gray-900 mb-8">6. Final Poster Outcome</h3>
             <div class="grid md:grid-cols-2 gap-8">
                <div>
                   <p class="text-gray-600 leading-relaxed mb-6">The final poster successfully demonstrates seamless interaction between image and typography. The organic type maintains readability while strengthening the visual storytelling driven by material texture.</p>
                   <div class="p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-yellow-800 font-bold text-center">
                      Playful tone aligned with the subject matter.
                   </div>
                </div>
                <div>
                   <img src="assets/fries-final-poster.jpg" alt="Final Poster" class="w-full h-auto rounded-xl shadow-xl" />
                </div>
             </div>
        </section>

        <section class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
             <h3 class="text-3xl font-serif text-gray-900 mb-6">7. Reflection</h3>
             <p class="text-gray-700 leading-relaxed mb-6">This project strengthened my ability to extract typography from real-world forms and design type without relying on existing fonts. It taught me how to balance organic imperfection with precision and integrate custom type into full visual compositions.</p>
             <p class="text-xl font-serif italic text-gray-400">"It reinforced how type can exist as both text and object — becoming a bridge between image and communication."</p>
        </section>
      </div>
    `,
    imageUrl: 'assets/creative-letter-poster-cover.jpg',
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    span: 'col-span-1'
  },
  {
    id: 'web-profile',
    title: 'FanPage WebPage Coding',
    category: 'Website Development',
    group: 'Web',
    description: 'My interactive portfolio coded from scratch.',
    details: `
      <div class="space-y-8 font-['DM_Sans']">
         <p class="text-lg text-gray-600 leading-relaxed">This is the previous version of my portfolio, hand-coded using HTML, CSS, and basic JS to demonstrate my development skills.</p>
         
         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <strong class="block text-gray-900 mb-4">Project Links:</strong>
            <ul class="space-y-2">
               <li>Published Website: <a href="https://phoonyukguan-finalproject.netlify.app/" target="_blank" class="text-pink-600 underline font-bold">Link</a></li>
               <li>Recipe Site: <a href="https://lemon-cheesecake-tart-recipe.netlify.app/" target="_blank" class="text-pink-600 underline font-bold">Link</a></li>
               <li>Design Process: <a href="https://0354618yukguan.blogspot.com/2024/08/interactive-design-project-3-creating.html" target="_blank" class="text-pink-600 underline font-bold">Blog Link</a></li>
            </ul>
         </div>

         <!-- Added Images -->
         <div class="grid gap-6">
            <img src="assets/fanpage-preview-1.jpg" alt="FanPage Preview 1" class="w-full h-auto rounded-xl shadow-md border border-gray-100" />
            <img src="assets/fanpage-preview-2.jpg" alt="FanPage Preview 2" class="w-full h-auto rounded-xl shadow-md border border-gray-100" />
            <img src="assets/fanpage-preview-3.jpg" alt="FanPage Preview 3" class="w-full h-auto rounded-xl shadow-md border border-gray-100" />
         </div>
      </div>
    `,
    imageUrl: 'assets/web-profile-cover.jpg',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Adobe Dreamweaver'],
    link: 'https://phoonyukguan-finalproject.netlify.app/',
    span: 'col-span-1'
  },
{
   id: '8chapter-store',
   title: 'The 8 Chapter Store',
   category: 'Online Web Store',
   group: 'Web',
   description: 'International web store setup on Easy.co.',
   details: `
      <div class="space-y-8 font-['DM_Sans']">
         <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="flex-1">
                    <h2 class="text-3xl font-serif text-gray-900 mb-4">The 8 Chapter Store</h2>
                    <p class="text-gray-600 mb-6 leading-relaxed">A complete e-commerce setup and design using the Easy.co platform, tailored for an international audience. The store features a clean, accessible layout designed to convert visitors into customers.</p>
                    <a href="https://the8chapter.easy.co" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-700 transition-colors shadow-lg">
                       Visit Store <Globe size={16} />
                    </a>
                </div>
            </div>
         </div>
        
         <div class="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img src="assets/8chapter-detail.jpg" alt="The 8 Chapter Store Interface" class="w-full h-auto object-cover" />
         </div>
      </div>
   `,
   imageUrl: 'assets/8chapter-store.jpg',
   tools: ['Easy.co'],
   link: 'https://the8chapter.easy.co',
   span: 'col-span-1'
 },



  // --- LOGO DESIGNS ---
  {
    id: 'logo-taylors',
    title: "Taylor's Chinese Broadcasting Club",
    category: 'Logo Design',
    group: 'Logo',
    description: 'Official club logo identity focusing on modern broadcasting elements.',
    details: `
      <div class="space-y-8 font-['DM_Sans']">
         <p class="text-lg text-gray-600 leading-relaxed">Designed the main logo for Taylor's Chinese Broadcasting Club. The goal was to create a modern, energetic identity that represents the club's voice.</p>
         
         <!-- Flexible Image Placeholder -->
         <img src="assets/logo-taylors-detail.jpg" alt="Taylor's CBC Logo Detail" class="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
      </div>
    `,
    imageUrl: 'assets/logo-taylors.jpg',
    tools: ['Illustrator'],
    span: 'col-span-1'
  },
  {
    id: 'logo-verde',
    title: 'VerdeHome',
    category: 'Logo Design',
    group: 'Logo', 
    description: 'Mobile application branding for sustainable living.',
    details: `
      <div class="space-y-8 font-['DM_Sans']">
         <p class="text-lg text-gray-600 leading-relaxed">VerdeHome is a mobile application focused on eco-friendly home solutions. The logo incorporates organic shapes and green tones to reflect sustainability.</p>
         
         <!-- Flexible Image Placeholder -->
         <img src="assets/logo-verde-detail.jpg" alt="VerdeHome Logo Detail" class="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
      </div>
    `,
    imageUrl: 'assets/logo-verde.jpg',
    tools: ['Illustrator'],
    span: 'col-span-1'
  },
  {
    id: 'logo-ys',
    title: 'YS Company',
    category: 'Logo Design',
    group: 'Logo',
    description: 'Luxury Car Services & Accessories logo.',
    details: `
      <div class="space-y-8 font-['DM_Sans']">
         <p class="text-lg text-gray-600 leading-relaxed">Branding for YS Company, a luxury car service provider. The design exudes elegance, speed, and premium quality.</p>
         
         <!-- Flexible Image Placeholder -->
         <img src="assets/logo-ys-detail.jpg" alt="YS Company Logo Detail" class="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
      </div>
    `,
    imageUrl: 'assets/logo-ys.jpg',
    tools: ['Illustrator'],
    span: 'col-span-1'
  },
  {
    id: 'logo-tloof',
    title: 'Tloof Studio',
    category: 'Logo Design',
    group: 'Logo',
    description: 'Online store brand identity.',
    details: `
      <div class="space-y-8 font-['DM_Sans']">
         <p class="text-lg text-gray-600 leading-relaxed">Tloof Studio required a playful yet professional logo for their online store. I used custom typography to create a unique mark.</p>
         
         <!-- Flexible Image Placeholder -->
         <img src="assets/logo-tloof-detail.jpg" alt="Tloof Studio Logo Detail" class="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
      </div>
    `,
    imageUrl: 'assets/logo-tloof.jpg',
    tools: ['Illustrator'],
    span: 'col-span-1'
  },

  // --- SOCIAL MEDIA PROJECTS ---
 {
   id: 'social-media-advertising',
   title: 'Social Media Posting Advertising for Companies',
   category: 'Brand Post',
   group: 'SocialAds',
   description: 'A curated collection of commercial campaign visuals and social media content for various major brands.',
   imageUrl: 'assets/post-delfi.jpg',
   tools: ['Photoshop', 'Canva', 'Social Media Marketing'],
   span: 'col-span-2',
   details: `
     <div class="space-y-16 font-['DM_Sans']">
         <section class="text-center mb-16">
            <span class="font-['Pinyon_Script'] text-5xl text-pink-500 block mb-4">Brand Portfolio</span>
            <h2 class="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">Commercial Campaign Visuals</h2>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">A showcase of high-impact social media creatives designed for diverse industry leaders, focusing on brand consistency and engagement.</p>
         </section>


         <div class="flex flex-col gap-12 max-w-4xl mx-auto">
           
            <!-- Card: Delfi x Kellogs -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-delfi.jpg" alt="Delfi x Kellogs" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Delfi x Kellogs</h3>
            </div>


            <!-- Card: Blood -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-blood.jpg" alt="Blood" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Blood</h3>
            </div>


            <!-- Card: Mellow Jellow -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-mellow.jpg" alt="Mellow Jellow" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Mellow Jellow</h3>
            </div>


            <!-- Card: Hovid -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-hovid.jpg" alt="Hovid" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Hovid</h3>
            </div>


            <!-- Card: In Bloom -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-inbloom.jpg" alt="In Bloom" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">In Bloom</h3>
            </div>


            <!-- Card: Mocona -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-mocona.jpg" alt="Mocona" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Mocona</h3>
            </div>


            <!-- Card: W&Q Design -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-wq.jpg" alt="W&Q Design" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">W&Q Design</h3>
            </div>


            <!-- Card: Arrows Racing -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-arrows.jpg" alt="Arrows Racing" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Arrows Racing</h3>
            </div>


            <!-- Card: Goodal x Dermatory -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-goodal.jpg" alt="Goodal x Dermatory" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Goodal x Dermatory</h3>
            </div>


            <!-- Card: Munchy's -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-munchys.jpg" alt="Munchy's" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Munchy's</h3>
            </div>


            <!-- Card: Samsung -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-samsung.jpg" alt="Samsung" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Samsung</h3>
            </div>


            <!-- Card: Honey B -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-honeyb.jpg" alt="Honey B" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Honey B</h3>
            </div>


            <!-- Card: The Lemon Tree -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-lemon.jpg" alt="The Lemon Tree" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">The Lemon Tree</h3>
            </div>


            <!-- Card: Lactel -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-lactel.jpg" alt="Lactel" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Lactel</h3>
            </div>


            <!-- Card: Sejuta KG (Farm Fresh) -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <div class="relative overflow-hidden rounded-[2rem] w-full mb-6 bg-gray-50">
                  <img src="assets/brand-sejuta.jpg" alt="Sejuta KG (Farm Fresh)" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center font-serif">Sejuta KG (Farm Fresh)</h3>
            </div>


         </div>
     </div>
   `
 },
 {
   id: 'social-posts',
   title: 'Social Media Postings',
   category: 'Social Media',
   group: 'SocialAds',
   description: 'Various engagement posts for clients.',
   details: `
     <div class="space-y-16 font-['DM_Sans']">
        <section class="text-center mb-12">
           <h2 class="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Engagement Postings</h2>
           <p class="text-gray-600 text-lg">High-engagement visuals designed to stop the scroll and drive interaction.</p>
        </section>
       
        <div class="flex flex-col gap-12 max-w-4xl mx-auto">
           <div class="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
              <img src="assets/social-post-1.jpg" alt="Social Media Post 1" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div class="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
              <img src="assets/social-post-2.jpg" alt="Social Media Post 2" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div class="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
              <img src="assets/social-post-3.jpg" alt="Social Media Post 3" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        </div>


        <div class="text-center mt-12 pb-8">
           <a href="https://www.instagram.com/the8chapter/" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-tr from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
              View @the8chapter - Own Online Business Shop for more postings
           </a>
        </div>
     </div>
   `,
   imageUrl: 'assets/social-posts.jpg',
   tools: ['Canva', 'Photoshop'],
   span: 'col-span-1'
 },
 {
   id: 'social-ads',
   title: 'Advertising Design',
   category: 'Social Media',
   group: 'SocialAds',
   description: 'Ad designs and social media visual content for various clients.',
   details: `
     <div class="space-y-16 font-['DM_Sans']">
        <section class="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] text-center shadow-2xl">
           <h2 class="text-4xl md:text-5xl font-serif mb-4">Advertising Creatives</h2>
           <p class="text-gray-300 text-xl">Strategic visual content for digital ad campaigns.</p>
        </section>


        <div class="flex flex-col gap-12 max-w-4xl mx-auto">
           <div class="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">
              <img src="assets/ad-design-1.jpg" alt="Ad Design 1" class="w-full h-auto rounded-[2rem]" />
           </div>
           <div class="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">
              <img src="assets/ad-design-2.jpg" alt="Ad Design 2" class="w-full h-auto rounded-[2rem]" />
           </div>
        </div>
     </div>
   `,
   imageUrl: 'assets/social-ads.jpg',
   tools: ['Canva', 'Photoshop', 'Illustrator'],
   span: 'col-span-1'
 },


 // --- ART & ILLUSTRATION ---
 {
   id: 'hanako-san',
   title: 'Hanako San',
   category: 'Illustration',
   group: 'Art',
   description: 'Narrative illustration project.',
   details: `
     <div class="space-y-16 font-['DM_Sans'] bg-[#0a0a0a] text-gray-200 p-8 md:p-12 -mx-6 md:-mx-12 rounded-[2.5rem] relative overflow-hidden">
        <!-- Dark Horror Atmosphere Background -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>


        <!-- 1. Project Overview -->
        <section class="relative z-10 p-8 border border-red-900/30 bg-black/50 backdrop-blur-md rounded-3xl shadow-[0_0_50px_rgba(220,38,38,0.1)]">
            <h2 class="text-4xl md:text-6xl font-serif mb-8 leading-tight text-red-600 tracking-wide border-b border-red-900/50 pb-4">1. Project Overview</h2>
            <ul class="space-y-4 text-gray-300 text-lg mb-8">
               <li class="flex gap-3"><span class="text-red-600">✦</span> Explores the concept of a decisive moment through visual storytelling</li>
               <li class="flex gap-3"><span class="text-red-600">✦</span> Based on the Japanese urban legend Hanako-san</li>
            </ul>
           
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-red-950/20 p-6 rounded-2xl border border-red-900/30">
                    <strong class="block text-red-500 text-xl mb-4 uppercase tracking-widest text-xs">Objective</strong>
                    <ul class="list-disc pl-5 space-y-2 text-gray-400">
                       <li>Capture a single moment with strong emotional impact</li>
                       <li>Communicate suspense and narrative tension in one frame</li>
                       <li>Focuses on the moment where anticipation transforms into fear</li>
                    </ul>
                </div>
                <div class="bg-red-950/20 p-6 rounded-2xl border border-red-900/30 flex flex-col justify-center">
                    <strong class="block text-red-500 text-xl mb-2 uppercase tracking-widest text-xs">Project Focus</strong>
                    <p class="text-gray-300 italic">"Decisive moment in storytelling, Atmosphere-driven narrative, Emotional tension through minimal composition."</p>
                </div>
            </div>
        </section>


        <!-- 2. Visual Sequence -->
        <section class="relative z-10">
            <h3 class="text-3xl font-serif text-white mb-8 border-l-4 border-red-600 pl-4">2. Visual Narrative Sequence</h3>
            <div class="space-y-12">
               <div>
                  <strong class="block text-xl text-red-400 mb-4">Atmosphere & Tension</strong>
                  <img src="assets/hanako-1.jpg" alt="Hanako Atmosphere" class="w-full h-auto rounded-xl shadow-lg border border-red-900/30" />
               </div>
               <div>
                  <strong class="block text-xl text-red-400 mb-4">The Decisive Moment</strong>
                  <img src="assets/hanako-2.jpg" alt="Hanako Moment" class="w-full h-auto rounded-xl shadow-lg border border-red-900/30" />
               </div>
               <div>
                  <strong class="block text-xl text-red-400 mb-4">Detail & Texture</strong>
                  <img src="assets/hanako-3.jpg" alt="Hanako Details" class="w-full h-auto rounded-xl shadow-lg border border-red-900/30" />
               </div>
            </div>
        </section>


     </div>
   `,
   imageUrl: 'assets/hanako-san.jpg',
   tools: ['Procreate', 'Photoshop', 'Illustration'],
   span: 'col-span-1'
 }
];





const MANAGED_EXPERIENCES = managedContent.experiences as Experience[];
const MANAGED_EXPERIENCE_IDS = new Set(MANAGED_EXPERIENCES.map((experience) => experience.id));
export const EXPERIENCES: Experience[] = [
  ...MANAGED_EXPERIENCES,
  ...CORE_EXPERIENCES.filter((experience) => !MANAGED_EXPERIENCE_IDS.has(experience.id)),
].filter((experience) => experience.visible !== false).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

const MANAGED_SKILLS = (managedContent.skills || []) as Skill[];
const CORE_SKILL_ICONS = new Map(CORE_SKILLS.map((skill) => [skill.name, skill.icon]));
export const SKILLS: Skill[] = (MANAGED_SKILLS.length ? MANAGED_SKILLS : CORE_SKILLS).map((skill) => ({
  ...skill,
  icon: CORE_SKILL_ICONS.get(skill.name),
}));

const MANAGED_CERTIFICATIONS = (managedContent.certifications || []) as Certification[];
export const CERTIFICATIONS: Certification[] = MANAGED_CERTIFICATIONS.length ? MANAGED_CERTIFICATIONS : CORE_CERTIFICATIONS;

const MANAGED_PROJECTS = managedContent.projects as Project[];
const MANAGED_PROJECT_IDS = new Set(MANAGED_PROJECTS.map((project) => project.id));

export const PROJECTS: Project[] = [
  ...MANAGED_PROJECTS,
  ...CORE_PROJECTS.filter((project) => !MANAGED_PROJECT_IDS.has(project.id)),
].filter((project) => project.visible !== false).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const SYSTEM_INSTRUCTION = `You are Icese's AI portfolio assistant. You are friendly, professional, and helpful. You are answering questions about Icese (Phoon Yuk Guan), a UI/UX Designer and Creative Designer.
Icese specializes in UI/UX Design, Website Design, and Branding.
Key traits: User-centered design, impactful visuals, storytelling.
If asked about contact info: email is icesephoonyg@gmail.com.
If asked about resume: provide the link.
Be concise and engaging.`;
