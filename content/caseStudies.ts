// Long-form case studies, kept out of constants.tsx so they are easier to edit.

const fig = (src: string, alt: string) =>
  `<img src="${src}" alt="${alt}" loading="lazy" style="border-radius:18px;box-shadow:0 18px 45px rgba(58,31,26,.14)" />`;

const frame = (no: string, title: string, src: string, alt: string, what: string, why: string, how: string) => `
  <section>
    <p style="margin:0 0 .4rem;font-size:.75rem;font-weight:900;letter-spacing:.2em;text-transform:uppercase">Frame ${no}</p>
    <h3>${title}</h3>
    ${fig(src, alt)}
    <p><strong>What it does.</strong> ${what}</p>
    <p><strong>Why I designed it this way.</strong> ${why}</p>
    <p><strong>How I built it.</strong> ${how}</p>
  </section>`;

const C = '/assets/crm/';

export const CRM_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <h2>The problem</h2>
    <p>I run Icese Studio, a one-person landing-page studio, alongside full-time work. Getting clients meant doing the same five things every day: WhatsApp and Facebook outreach, joining Facebook groups, adding new contacts, leaving helpful comments and posting content. Each lived in a different place: a Google Sheet of leads, WhatsApp, Facebook, a notes app, my calendar and a folder of half-written prompts.</p>
    <p>The real cost was not time but momentum. I would open the sheet, not know where to start, and spend 20 minutes deciding instead of sending. Follow-ups slipped because nothing reminded me, and I had no idea which channel was actually working.</p>
    <p><strong>Goal:</strong> one workspace that tells me exactly what to do today, writes the first draft for me, records everything back to my existing Google Sheet, and makes a repetitive habit feel like progress.</p>
  </section>

  <section>
    <h2>My role and tools</h2>
    <ul>
      <li><strong>Role:</strong> sole product designer, researcher (I am the user) and builder.</li>
      <li><strong>Built with:</strong> Claude, as a single-file HTML artifact. I designed every screen and state, then directed Claude through iterative prompts and reviewed each build against my own daily use.</li>
      <li><strong>Data:</strong> my existing Google Sheet (Client Pipeline, Activity Log and Facebook Group Tracker tabs), read and written live through the Google Sheets MCP connector. Personal tasks, projects, streaks and settings are stored in the artifact's own database.</li>
      <li><strong>AI inside the product:</strong> Claude drafts outreach messages, writes replies, rewrites captions from an uploaded design, scores my practice replies, and reads screenshots to create leads.</li>
      <li><strong>Visual system:</strong> forest green rail, cream canvas, lime for the single primary action on each screen, Barlow Condensed headings and Figtree body text, light and dark themes, a desktop rail and a phone bottom tab bar.</li>
    </ul>
    <p><em>Privacy: names, messages and client details in these screenshots are blurred. The leads are real people who did not agree to appear in a portfolio.</em></p>
  </section>

  <section>
    <h2>Design principles</h2>
    <ol>
      <li><strong>Decide for me.</strong> The app opens on today's tasks with the next action already chosen, not on a database.</li>
      <li><strong>One primary action per card.</strong> Lime always means "do this now"; everything else is secondary.</li>
      <li><strong>AI drafts, I send.</strong> Claude writes the first version; nothing is sent automatically, and every draft can be edited or skipped.</li>
      <li><strong>The sheet stays the source of truth.</strong> The app is a better front end for data I already had, so nothing is locked in.</li>
      <li><strong>Make effort visible.</strong> Every message, comment or post earns XP, so slow weeks still show progress.</li>
    </ol>
  </section>

  <section><h2>Part 1 · The daily command centre</h2></section>
  ${frame('01', 'Daily · Outreach cards', C + 'crm-01-daily-outreach.jpg', 'Daily view with outreach progress tiles and draft message cards',
    'The home screen. A level banner sits on top, then five tiles for the day\'s quotas: Outreach 1/15, FB groups 0/5, FB friends 0/10, Comments 0/15 and Content 0/3. Below, each lead from the sheet appears as a card with a ready-to-send message, an <em>Open chat</em> button, edit and skip, and a dark <em>Sent</em> button.',
    'Opening a spreadsheet created decision fatigue. Turning each lead into a card with the message already written removes the two hardest steps: choosing who to contact and writing the first line. The tiles show the whole day at a glance so I always know what is left. WhatsApp and Facebook have separate tabs because the tone and length differ by channel.',
    'Cards are built from leads whose sheet status is <em>Draft Ready</em>. Claude writes each draft from the lead\'s website and business type, referencing one real detail so it doesn\'t read like a template. <em>Open chat</em> opens WhatsApp with the number pre-filled. <em>Sent</em> updates the row status and date in Google Sheets, logs an Activity Log entry and adds XP. A do-not-contact list filters out people who asked not to be messaged.')}

  ${frame('02', 'Daily · Facebook groups', C + 'crm-02-fb-groups.jpg', 'List of Facebook groups to join with notes and status dropdowns',
    'A researched list of Facebook groups where my target clients spend time (fitness coaches, gym owners, small-business owners), with a one-line note on each, a <em>Join</em> button and a status dropdown. Filters switch between "To join" and "All".',
    'Joining random groups wastes weeks. Each note records who the group is for and what is still unverified (size, activity, rules), so I judge a group before I commit time to it. Marking things as unverified keeps the research honest.',
    'Groups are stored in the Facebook Group Tracker tab of the same sheet. Changing the dropdown writes the new status back to the sheet, and joining counts towards the daily FB groups target of 5.')}

  ${frame('03', 'Daily · Facebook friends', C + 'crm-03-fb-friends.jpg', 'Suggested coaches list with add friend buttons',
    'A list of suggested coaches to connect with, each with a short description, an <em>Add friend</em> button and a dismiss icon, plus a counter for the daily target ("0/10 added today").',
    'Warm connections reply far more often than cold messages. Adding ten relevant people a day builds an audience for my content before I ever pitch. Showing the reason each person is relevant stops me adding people at random.',
    'Suggestions and their notes are stored in the app\'s database. Ticking a person counts towards the target and the "Friendly face" badge (50 friends) on the Journey page.')}

  ${frame('04', 'Daily · Value-first comments', C + 'crm-04-comments.jpg', 'Comment cards with drafted replies for Facebook, LinkedIn and Instagram posts',
    'Cards for posts worth commenting on, each with context about the post and a drafted comment. <em>Copy &amp; open post</em> copies the text and opens the post; <em>Done</em> ticks it off. Tabs separate Facebook, LinkedIn and Instagram, each with its own target.',
    'Helpful comments in my niche (landing pages, conversion) show expertise without selling. Drafts give a real opinion, never "great post!", because generic comments damage credibility. Writing the post context on the card means I can check the draft fits before posting.',
    'Claude drafts each comment from the post summary I save, in my voice and under three sentences. Copying and opening happen in one tap so the flow stays fast on my phone.')}

  ${frame('05', 'Daily · Content: the 50-day redesign challenge', C + 'crm-05-content-challenge.jpg', 'Day 5 of 50 content card with before and after redesign and caption rewriting',
    'The content tab tracks my public "50-day redesign challenge". Day 5 shows the before-and-after concept I made for a local guitar school. I upload the image, type an instruction such as "make it more chill and write day 5/50 up there", press <em>Rewrite captions</em>, and get separate LinkedIn, Instagram and Facebook captions with <em>Copy</em> and <em>Mark posted</em>.',
    'Posting every day for 50 days only works if writing captions takes seconds. One instruction box (rather than three separate prompts) keeps the tone consistent across platforms while each caption still fits its platform\'s length and style.',
    'The uploaded design is stored with the artifact\'s asset storage and sent to Claude as an image, so the captions describe what is actually in the design. The day counter is calculated from the challenge start date, and marking a platform as posted adds 15 XP.')}

  <section><h2>Part 2 · Motivation: making a repetitive habit feel like progress</h2></section>
  ${frame('06', 'Journey · Road to Freedom', C + 'crm-06-journey.jpg', 'Journey page with level 9 Wireframe IV, XP bar, streak and a road map of design-themed tiers',
    'Clicking the level banner opens the Journey. I am Level 9 of 50, "Wireframe IV", with 1,395 XP, a 9-day streak and 7 of 24 badges. The "Road to Freedom" is a winding path through ten tiers named after the design process: Sketch, Wireframe, Mockup, Prototype, Launch, Momentum, Studio, Signature, Legend and Freedom.',
    'Outreach is mostly rejection and silence, so I needed progress that doesn\'t depend on replies. Naming levels after design stages makes the game feel like part of my craft, not a generic points system. Each tier has a short motto ("Structure before style") to remind me why I\'m doing it.',
    'XP comes from logged actions (see Frame 07). Levels use a rising XP curve, the five Roman-numeral steps show progress inside a tier, and the streak counts consecutive days with at least one completed task.')}

  ${frame('07', 'Journey · Today\'s picture, XP and badges', C + 'crm-07-xp-badges.jpg', 'Puzzle grid that reveals with each task, XP breakdown and badge grid',
    'Three motivators. <em>Today\'s picture</em> is a 3×3 puzzle that reveals one piece per finished task. The <em>XP</em> panel shows exactly where points come from: messages 10 each, groups 5, friends 5, comments 5, posts 15, games, and pipeline milestones (reply 25, meeting 50, build 100, win 300). <em>Badges</em> unlock for milestones such as First hello, First reply, Coffee chat and Hard hat.',
    'The puzzle gives a small reward for every single task, the XP table makes the rules transparent so the system feels fair, and the pipeline milestones are worth the most, so the game rewards real business results.',
    'Each badge is calculated from the activity log and sheet statuses, with a progress hint for locked ones ("17/100 · Send 100 messages"). Everything recalculates live when a task is ticked.')}

  ${frame('08', 'Academy · Train like a closer', C + 'crm-08-academy.jpg', 'Academy screen with level list from outreach basics to boss level',
    'A training mode with eight levels: Outreach basics, Handling replies, Objections, Landing page anatomy, Funnel stages, Website vs funnel, Conversion copy and a final Boss level. Each earns up to three stars and unlocks the next.',
    'I was making the same mistakes in real conversations. A safe place to practise means the mistakes happen in a quiz, not with a potential client. The zig-zag layout and locked levels borrow from language-learning apps, which make daily practice feel light.',
    'Levels are written as real situations from my own outreach. Stars convert to XP on the main road, so practising counts as progress.')}

  ${frame('09', 'Academy · Scenario question', C + 'crm-09-quiz.jpg', 'Multiple choice question about mobile hero heading',
    'A sample question from Level 4: "On mobile the heading fills the whole screen. The fix?" The right answer is to shorten it and size it down so the offer and button show without scrolling.',
    'Questions test judgement, not definitions. They mirror the critiques I give in real landing-page audits, so practising sharpens both my sales conversations and my design eye.',
    'Five questions per level, a progress bar at the top, and an explanation after each answer.')}

  ${frame('10', 'Academy · AI reply drill', C + 'crm-10-reply-drill.jpg', 'Reply drill with a prospect objection and a reply box',
    'A role-play. A fictional prospect ("Raj, business coach in Penang") has a homepage problem and sends a realistic objection: "Is this really free? What\'s the catch?" I type a reply as I would on WhatsApp and press <em>Send reply</em>.',
    'Objections are where most of my conversations died. Practising replies with instant feedback builds confidence much faster than waiting for real objections.',
    'Claude scores the reply from 1 to 5, explains what worked, what to fix, and shows a stronger version. The scenarios are invented so no real person\'s data is used.')}

  ${frame('11', 'Arcade · Funnel Sort and CTA Queens', C + 'crm-11-arcade.jpg', 'Arcade with Funnel Sort and CTA Queens puzzle games',
    'Two puzzle games. <em>Funnel Sort</em> works like a colour-sort game, but every chip is a real idea to sort into the right funnel stage or landing-page section. <em>CTA Queens</em> is a logic grid: one call-to-action per row, column and page section, and CTAs can\'t touch.',
    'Some concepts stick better through play. Funnel Sort trains instant recognition of funnel stages; CTA Queens turns a design rule (don\'t crowd calls to action) into a puzzle. Easy mode keeps colours on; Pro mode removes them for three stars.',
    'Both games use the same level and star system as the Academy, and every arcade star adds 15 XP to the road.')}

  <section><h2>Part 3 · Pipeline and client work</h2></section>
  ${frame('12', 'Pipeline · Kanban board', C + 'crm-12-pipeline.jpg', 'Pipeline kanban with draft ready, sent, replied and proposal columns',
    'A board with seven stages (Draft Ready, Sent, Replied, Proposal, Meeting, Building and Won) plus a hidden "Not interested". Each card shows the business, contact, channel tag (WA, FB, Email) and a quick action. <em>Today</em> shows what needs attention now; <em>All</em> shows everything. A search bar filters across names and notes.',
    'The spreadsheet listed hundreds of rows but hid the most important question: who needs me next? A board makes stage and volume visible at once, and the "Today" scope keeps the view short enough to act on.',
    'Columns map one-to-one to status values in the sheet, so moving a card (drag and drop or a quick action) writes the new status back. Column widths can be resized and are remembered. Before writing, the app checks the row hasn\'t moved in the sheet, so it never overwrites the wrong lead.')}

  ${frame('13', 'Pipeline · Lead detail and AI reply', C + 'crm-13-lead-drawer.jpg', 'Lead side panel with stage chips, reply composer and meeting scheduler',
    'Opening a card shows a side panel: stage chips to move the lead, a box to paste their latest message, an optional note on what I want to say, <em>Write reply</em>, a meeting date and time picker, and my original first message for context.',
    'Replying well is where deals are won, and it\'s also where I hesitated most. Pasting their message and adding my intent in one line lets Claude draft a reply that fits the whole conversation. Keeping my first message visible stops me repeating myself.',
    'Claude streams the reply into an editable box. Saving a meeting writes the date to the sheet and places it on the Calendar. Moving to Meeting or Building triggers the matching XP milestone.')}

  ${frame('14', 'Calendar', C + 'crm-14-calendar.jpg', 'Month calendar with recurring coaching sessions and a client meeting',
    'Month, week and day views that combine client meetings from the pipeline with my recurring commitments, such as part-time coaching sessions. Today is highlighted, and a panel lists the selected day\'s schedule with an <em>Add</em> button.',
    'Outreach only works if it fits around my real week. Seeing meetings and fixed commitments together stops me booking calls on busy days.',
    'Meetings come straight from the sheet; recurring items and manual events are stored in the app. Each event type has its own colour.')}

  ${frame('15', 'Add lead from a screenshot', C + 'crm-15-add-lead.jpg', 'Add lead modal with screenshot upload and form fields',
    'The <em>Add lead</em> dialog. I can drop, paste or choose screenshots of a Facebook profile or website, and Claude fills in the business, owner name, channel, country, phone and link. A first-message field and "More details" sit below.',
    'Most leads come from scrolling Facebook on my phone. Copying details by hand was slow and error-prone. Screenshot-to-form turns a 3-minute task into seconds and keeps the data consistent.',
    'Images are sent to Claude with a strict field list, and the reply fills the form for me to check before <em>Add to sheet</em> appends a new row with a generated ID.')}

  ${frame('16', 'Projects', C + 'crm-16-projects.jpg', 'Project cards with stage progress, next action and checklist',
    'Each client project gets a card with a six-step stage bar (Discovery, Design, Revisions, Build, Review, Delivered), a highlighted "next action" box, a checklist and quick links to the live site, previews and the lead.',
    'Once a lead becomes a client, the risk shifts from forgetting to follow up to forgetting a step. The next-action box answers "what do I do on this project today?", and the checklist records repeatable quality checks such as testing at 375 and 390px mobile widths.',
    'Projects are stored in the app database and linked to their lead in the sheet. Stage arrows move the project along, and finishing a build triggers the "Hard hat" badge and XP.')}

  <section><h2>Part 4 · AI assistant and insights</h2></section>
  ${frame('17', 'Assistant · Chat that takes actions', C + 'crm-17-assistant.jpg', 'Assistant chat updating a lead and drafting a Facebook message from a photo',
    'A chat that understands my pipeline. I wrote, in my own casual words, that a lead with a clear direction should move to Proposal with a meeting next Monday 3–4pm. The assistant updated the lead, set the meeting and confirmed with a green chip. I then sent a profile photo with "outreach this" and got a tailored first message plus questions about what it couldn\'t verify.',
    'Forms are slow on a phone; describing what happened is fast. The assistant turns natural language into the same safe sheet updates as the buttons, and always says what it changed and what it couldn\'t do (here, that only the start time fits the calendar).',
    'Claude receives the pipeline context and a defined set of actions (update status, set meeting, add lead). Actions run through the same Google Sheets functions as the UI, and each one shows a confirmation chip so nothing changes silently.')}

  ${frame('18', 'Insights · Measuring what works', C + 'crm-18-insights.jpg', 'Insights dashboard with monthly income goal, pipeline counts, message chart and reply rates',
    'Four panels: income this month against a RM3,000 goal, pipeline counts by stage, messages sent over 14 days by channel, and reply rate per channel.',
    'I wanted decisions based on data, not feelings. The reply-rate table changed my plan: WhatsApp replies at 19% (20 of 106) and email at 15% (12 of 82), while Facebook messages got 0 of 41. I moved my effort towards WhatsApp and email and used Facebook for comments and content instead.',
    'All figures are calculated live from the sheet and activity log. The income panel is honest: no project had paid yet when these screenshots were taken.')}

  ${frame('19', 'Prompt library', C + 'crm-19-prompts.jpg', 'Prompt library with reels prompts and a redesign hero prompt',
    'Saved prompts I reuse every week: a Chinese and an English editing brief for my ChatCut reels (6,566 and 15,863 characters), and a "Redesign hero page" prompt with a link field. Each can be searched, filtered by tag, expanded and copied.',
    'My best prompts used to be lost in old chats. Keeping them in the interface as cards, with fields for the parts that change, turns them into repeatable tools.',
    'Prompts are stored in the app database with tags. Variables such as the link field are inserted into the prompt before it is copied.')}

  <section>
    <h2>Results so far</h2>
    <p>Figures from the Insights page on 30 October 2026, a few weeks after I started using it daily:</p>
    <ul>
      <li><strong>231 messages</strong> sent and logged across WhatsApp, email, Facebook and LinkedIn, with <strong>32 replies</strong>.</li>
      <li>A clear channel decision from data: WhatsApp 19% and email 15% reply rates versus 0% on Facebook messages.</li>
      <li><strong>3 client builds</strong> in progress, one client sales page live on 30 October 2026, plus one proposal with a meeting booked.</li>
      <li>A <strong>9-day streak</strong> and Day 5 of my 50-day public redesign challenge.</li>
    </ul>
    <p>It is still early: no project had been paid when these screenshots were taken, and I'm tracking whether the pipeline turns into revenue.</p>
  </section>

  <section>
    <h2>What I learned</h2>
    <ul>
      <li>The biggest UX gain came from removing decisions, not adding features: a pre-written card beats a blank chat box.</li>
      <li>AI is most useful inside a workflow, with a clear input (a lead, a reply, an image) and a reviewable output. Nothing is sent without me.</li>
      <li>Gamification works when it rewards effort you control and gives the biggest rewards to real outcomes.</li>
      <li>Using my own product every day was the best usability test. Many details (resizable columns, screenshot import, the "Today" scope) came from friction I felt myself.</li>
    </ul>
  </section>
</div>`;

const K = '/assets/cimb/';
const cimbFig = (src: string, alt: string, caption: string) => `${fig(src, alt)}<p><em>${caption}</em></p>`;

export const CIMB_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <h2>Overview</h2>
    <p>I joined CIMB's Group Wholesale Banking, Transaction Banking (Digital Business MY) team as a UI/UX Design Intern on 14 September 2026. I work on OCTO Biz, CIMB's online banking platform for commercial and SME customers on web and mobile.</p>
    <p>My work so far covers five streams: a UX audit of the live platform, a self-service Secure Token journey, a redesign of the OCTO Biz landing page (desktop and mobile), enterprise administration screens and Maker/Approver flows built with the existing design system, and research into Reports and Download.</p>
    <p><em>The designs shown are my internship concept work with sample data. They are not the live CIMB product, and no customer data or internal metrics are included.</em></p>
  </section>

  <section>
    <h2>1 · UX audit of OCTO Biz</h2>
    <p><strong>What I did.</strong> In my first week I reviewed the dashboard, navigation, fund transfer flow, forms and transaction review pages, and compared the production interface with the Figma designs.</p>
    <p><strong>What I found.</strong> Inconsistencies in branding, button sizes, layouts and components between production and Figma, plus usability issues in navigation, information hierarchy, transaction flows and form design.</p>
    <p><strong>Output.</strong> A documented improvement proposal with prioritised recommendations for a clearer, more consistent business-banking experience. This audit gave me the shared vocabulary for everything that followed.</p>
  </section>

  <section>
    <h2>2 · Self-Service Secure Token</h2>
    <p><strong>Problem.</strong> Business users who change phones, reinstall the app or lose their old device can't activate their Secure Token on their own, so they must call the Business Call Centre, wait for a system administrator to reset or unbind the token, and then log in again. It is slow for customers and costly for the call centre.</p>
    ${cimbFig(K + 'token-journey.jpg', 'Current and proposed Secure Token user journey', 'Current journey (top) versus the proposed self-service journey (bottom). The proposal removes the call-centre and admin steps.')}
    <p><strong>Approach.</strong> I wrote the problem statement, built user personas, mapped the current and future journeys, and studied how other banks handle device change and token migration.</p>
    ${cimbFig(K + 'token-proposal.jpg', 'Secure Token mobile proposal screens', 'Proposal screens for the self-service journey in the OCTO Biz mobile app.')}
    ${cimbFig(K + 'token-flows.jpg', 'Secure Token flows for reinstall and device change', 'Screen flows for the self-service scenarios, mapped screen by screen for review with the team.')}
    <p><strong>Why this design.</strong> Security steps such as verifying identity, deactivating the old token and a cooling-off period stay in place, but the user completes them in the app instead of waiting on a phone call. Each screen explains what will happen next, because uncertainty is what drives people to call.</p>
  </section>

  <section>
    <h2>3 · OCTO Biz landing page redesign</h2>
    <p><strong>Problem.</strong> The landing page served two very different groups poorly: existing users who arrive with an urgent task (first-time login, changed phone, locked access), and new businesses trying to understand OCTO Biz and apply. Many urgent tasks ended as Business Call Centre enquiries.</p>
    <p><strong>Research.</strong> I analysed common call-centre enquiries and reviewed competitor business-banking sites to see how they organise quick links, self-service help and application paths.</p>
    ${cimbFig(K + 'user-flows.jpg', 'User flows for existing and new customers', 'Two journeys on one page: urgent help for existing users and confident discovery for new customers, with a support escalation path from self-service to eForm, email and finally the call centre.')}
    ${cimbFig(K + 'wireframes.jpg', 'Desktop and mobile wireframes', 'Desktop and mobile wireframes used to agree the information architecture before visual design.')}
    <p><strong>Structure.</strong> The hero leads with the two main actions (log in and explore). "What do you need to do today?" puts the four most common urgent tasks first. A searchable help centre groups guides by topic. Product sections, a four-step "How to apply", package comparison, what's new, FAQs and a clear support path follow.</p>
    ${cimbFig(K + 'landing-hifi-concept.jpg', 'High-fidelity OCTO Biz landing page concept', 'Early high-fidelity concept: popular actions, task search, capabilities, packages, forms and resources, and support options. The final redesign below builds on this structure.')}
    ${cimbFig(K + 'landing-mobile.jpg', 'Mobile landing page shown in four sections', 'The full mobile layout, split into four columns. Urgent tasks stay near the top and every section collapses to a single column with full-width buttons.')}
    <p><strong>Content and forms.</strong> I shortened long descriptions into plain, scannable copy, refined the "How to apply" pathways, and designed the enquiry and interest form with a submission success screen.</p>
    ${cimbFig(K + 'form-ui-kit.jpg', 'Form UI kit with buttons, inputs, selects and checkboxes in all states', 'Form UI kit: buttons, text inputs, selects and checkboxes in default, hover, focused, filled, error and disabled states, so developers have every state they need.')}
  </section>

  <section>
    <h2>Final OCTO Biz website redesign</h2>
    <p>My latest iteration (updated 29 October 2026) brings the research together into a complete marketing and service page in CIMB's current brand style. Each section is annotated with the problem it solves, so reviewers can see the reasoning, not just the visuals.</p>
    ${cimbFig(K + 'octo-redesign-part1.jpg', 'Header, hero banner and popular tasks of the OCTO Biz redesign', 'Header, hero and Popular Tasks.')}
    <p><strong>Header.</strong> Handles login routing and live alerts in one place. A migration notice tells BizChannel@CIMB users they will be moved to OCTO Biz in phases, so existing customers aren't surprised.</p>
    <p><strong>Hero banner.</strong> One clear primary action (Apply Now, with Login to OCTO Biz beside it) and floating side tabs for Contact Us, Financial Help and Latest Promotions, so support and offers are reachable without crowding the main message.</p>
    <p><strong>Popular Tasks.</strong> A search bar for guides, FAQs and resources sits above six task tiles: Mobile App Guide, Changed Your Phone?, Reset / Unlock Access, Make Payments, First-time Login and Track Status Application. This answers the main complaint from my research, that guides were hidden and hard to find, and it addresses the call-centre topics directly.</p>
    ${cimbFig(K + 'octo-redesign-part2.jpg', 'Daily workflow showcase and client-segmented onboarding', 'Daily workflow showcase and segmented onboarding.')}
    <p><strong>Daily workflow and mobile app showcase.</strong> Instead of listing software features, each card describes a job the customer wants done (Jobs-To-Be-Done): see everything in one place, bank securely, stay updated with real-time alerts, and keep up to 18 months of statements.</p>
    <p><strong>Client-segmented onboarding.</strong> Tabs for Sole Proprietorship, Partnership / LLP, Sendirian Berhad / Berhad and Others. Each business type needs different documents (for example SSM forms versus board resolutions), so showing only the relevant three steps reduces overload for sole proprietors and makes board authorisation needs clear for Sdn Bhd before they apply. A short video supports the steps.</p>
    ${cimbFig(K + 'octo-redesign-part3.jpg', 'Help and resources console and explore promotions', 'Help & Resources console and promotions.')}
    <p><strong>Centralised Help &amp; Resources console.</strong> Forms, FAQ and User Guides tabs with direct downloads replace support links that were buried in the footer. The aim is that a user can find First-Time Login walkthroughs, bulk payment file specifications or mandatory forms in under five seconds.</p>
    <p><strong>Explore Promotions.</strong> Cross-sells relevant business solutions in a separate section further down, so promotions never block operational tasks.</p>
    ${cimbFig(K + 'octo-redesign-part4.jpg', 'Tiered contact channels and footer', 'Tiered contact channels and footer.')}
    <p><strong>Tiered contact channels.</strong> Customer Help Centre, Email Us, Visit a Branch and Call Us are ordered from self-service to phone, which steers simple questions away from the call centre and reduces congestion.</p>
  </section>

  <section>
    <h2>4 · Design system, admin screens and Maker/Approver flows</h2>
    ${cimbFig(K + 'foundations.jpg', 'OCTO Biz design foundations: colour, typography, spacing and elevation', 'Foundations I documented for the landing page work: colour, type scale, spacing, radius and elevation, aligned to the existing OCTO Biz system.')}
    <p><strong>Administration screens.</strong> I recreated and standardised about 28 editable administration screens (company, user group and user management, accounts, file formats, action lists and notifications) from existing references, reusing the OCTO Biz tables, forms, buttons, modals and navigation instead of creating new components.</p>
    <p><strong>Maker and Approver.</strong> I aligned a Maker's transaction with its Approver view so the details stay identical across both screens and the status ("pending approval") is always clear. In enterprise banking, a mismatch between what the maker submitted and what the approver sees is a real risk, so consistency here is functional, not cosmetic.</p>
    <p><strong>AI-assisted workflow.</strong> To keep large screen sets consistent, I used Codex with Figma MCP and the Figma Plugin API to script components, a form UI kit and screen builds that bind directly to the design system's colour, spacing and radius variables, then checked each build against the references. I also joined CIMB's session with Figma on Figma Make, Figma Agent, Dev Mode, the MCP server and Code Connect.</p>
  </section>

  <section>
    <h2>5 · Reports and Download research (in progress)</h2>
    <p>Business users struggle to find the right report because they don't recognise report names, transaction groups, payment modes or filters. I have written the problem statement and research plan, and I'm comparing how Malaysian and international business-banking platforms organise reporting and downloads.</p>
  </section>

  <section>
    <h2>What I learned</h2>
    <ul>
      <li>In banking, clarity is a security feature: users who understand the next step don't take risky shortcuts or call for help.</li>
      <li>Designing inside a mature design system means making strong decisions with existing parts, not inventing new ones.</li>
      <li>Enterprise users need different paths in the same product: urgent fixes for existing users, confident discovery for new ones.</li>
    </ul>
  </section>
</div>`;

const U = '/assets/uupay/';
const uFrame = (no: string, title: string, src: string, alt: string, what: string, why: string, details: string) => `
  <section>
    <p style="margin:0 0 .4rem;font-size:.75rem;font-weight:900;letter-spacing:.2em;text-transform:uppercase">Flow ${no}</p>
    <h3>${title}</h3>
    ${fig(src, alt)}
    <p><strong>What it does.</strong> ${what}</p>
    <p><strong>Design decisions.</strong> ${why}</p>
    <p><strong>Details.</strong> ${details}</p>
  </section>`;

export const UUPAY_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <h2>Overview</h2>
    <p>UU Pay (UUPAY) is a crypto payment app that lets people spend USDT in everyday life: Visa and Mastercard virtual and physical cards, global eSIM data plans, fiat withdrawals to bank accounts, transfers inside chat, and gifts (red packets). It is live on the App Store and Google Play.</p>
    <p>As UI/UX Designer at 3GO Technology (November 2025 to July 2026), I designed product flows across the app: cards and top-up, transfers, fiat withdrawal, eSIM, spending analytics, chat and groups, an AI assistant, gifts, shipping addresses and KYC identity verification. I worked in a Chinese company with China-based product managers and engineers, so specifications, reviews and annotations were in Mandarin, and we iterated quickly with frequent design reviews.</p>
    <p><em>The screens below are design files from my Figma work. Some show iterations and options presented for review, not only the final shipped version. ID numbers and personal details in KYC samples are blurred.</em></p>
  </section>

  <section>
    <h2>The design challenge</h2>
    <p>Crypto is intimidating for everyday users: unfamiliar currencies, irreversible transfers, fees and exchange rates, and strict identity checks. My goal on every flow was the same: make money movement feel as simple and safe as a normal e-wallet by showing amounts, fees and rates before confirmation, warning clearly where actions can't be undone, and keeping one consistent pattern for entering amounts, choosing recipients and confirming with a payment PIN.</p>
  </section>

  <section>
    <h2>My process</h2>
    <ul>
      <li><strong>Benchmark:</strong> study competitor crypto cards and wallets before designing.</li>
      <li><strong>Explore:</strong> several versions side by side (version 1 to 5) for key screens such as Home and Cards.</li>
      <li><strong>Review:</strong> present options to the product team, annotate the flow and decisions, then refine.</li>
      <li><strong>Systemise:</strong> reuse the same components (amount input, bottom sheets, PIN pad, status chips, safety notes) so every new flow feels familiar.</li>
      <li><strong>Hand off:</strong> complete states (empty, loading, error, success, confirmation) for developers.</li>
    </ul>
  </section>

  <section><h2>Part 1 · Home and cards</h2></section>
  ${uFrame('01', 'Home screen iterations', U + 'home-iterations.jpg', 'Five versions of the UU Pay home screen in light and dark themes',
    'Five rounds of home-screen exploration (版本一 to 版本五), in light and dark themes, testing how to show total balance, quick actions, promotions and the bottom navigation.',
    'The home screen has to serve two jobs: reassure people that their money is safe and visible, and get them to their most common task in one tap. Comparing versions side by side helped the team choose by reasoning rather than taste.',
    'Variations tested the balance hero, the quick-action grid (top up, transfer, eSIM, cards), banner placement and a dark "premium" theme against a light, friendly one.')}
  ${uFrame('02', 'Card page: competitor benchmark', U + 'card-benchmark.jpg', 'Competitor card screens compared with UU Pay card page explorations',
    'Before redesigning the card page I compared crypto card apps such as Bitget, Gate, Savo and MEXC, then explored UU Pay card layouts in the same frame.',
    'Benchmarking showed what users of crypto cards already expect: a large card visual, available balance with a fiat equivalent, a top-up button and four quick actions. I kept these conventions so the page feels familiar, and differentiated through clarity and a calm visual style.',
    'The final pattern: the Glacier White virtual card, available balance in USD with a CNH equivalent, a prominent 充值 (Top up) button, quick actions for View CVV, Top up, Security and Lock card, and a transaction list with status chips (processing, failed, successful).')}
  ${uFrame('03', 'Card page iterations', U + 'card-iterations.jpg', 'Board of card page versions and transaction detail screens',
    'The full board of card-page versions (版本一 to 版本四), including transaction details, filters and empty states.',
    'Transaction details needed to answer the questions that create support tickets: what happened, how much, which fee, and the current status.',
    'Each transaction type (authorisation, deposit, exchange, transfer in) has its own icon, and failed or processing states use colour plus a text label so they are readable without relying on colour alone.')}
  ${uFrame('04', 'Card top-up and auto top-up', U + 'card-auto-topup.jpg', 'Card top-up screen with auto top-up settings',
    'Topping up the virtual card from USDT, with the received amount, the 4.5% service fee and the exchange rate shown before confirming. Auto top-up refills the card automatically when its balance falls below a trigger amount.',
    'Card declines at checkout are the worst moment in a payment product. Auto top-up prevents them, but automation with money needs trust, so every setting is explicit: trigger amount (minimum 20 USDT), top-up amount, funding source, and an explanation box describing exactly when it runs.',
    'When switched on, the settings collapse into a summary inside the top-up page (trigger 20 USD, top-up 100 USDT, pay from wallet), with a "Manage auto top-up" entry and a note that turning it off stops automatic top-ups.')}

  <section><h2>Part 2 · Moving money</h2></section>
  ${uFrame('05', 'Transfer and receive', U + 'transfer.jpg', 'Transfer flow with recipient selection, QR scan, receive code, amount and PIN',
    'Send USDT by UID, email or phone, to friends (A to Z list) or recent recipients, or by scanning a QR code. The receive screen shows a secure UU Pay payment code with options to set an amount and share.',
    'Crypto transfers can\'t be reversed, so the amount screen carries a yellow warning to confirm the recipient and amount, and payment always ends with a six-digit PIN. I explored several amount-entry layouts to make the currency, available balance and "transfer all" action obvious.',
    'Recent recipients support swipe to edit or delete. Tabs (New, Friends, Recent) keep the recipient step short, and every step keeps the recipient visible at the top to prevent sending to the wrong person.')}
  ${uFrame('06', 'Fiat withdrawal (法币出金)', U + 'fiat-offramp.jpg', 'Fiat withdrawal screens from USDT to USD with fee breakdown',
    'Convert USDT to fiat and send it to a bank account. The screen shows the amount sent, the amount the recipient receives, the live rate (1 USDT = 1.0000 USD), the fee and the expected arrival.',
    'Fees were the biggest source of confusion, so I explored how to explain them in place: an info icon opens a small breakdown (a fixed fee per transaction or a percentage, whichever applies). A banner announces newly supported currencies, and a reassurance line notes that funds are handled by a licensed institution.',
    'The confirm button stays disabled until a recipient and amount are valid. The far right shows the marketing visual for the same feature, "无界支付，链通全球" (borderless payments, connected globally).')}
  ${uFrame('07', 'Gifts (red packets)', U + 'gifts.jpg', 'Send and open gift flows with animation and records',
    'Send a crypto gift (red packet) to friends: choose the amount and currency (USDT or USDC), split rules and recipients, confirm with PIN, then share a link or code. Recipients open it with a celebratory animation.',
    'Gifting is emotional, so this is the one flow where I used playful illustration and motion. The record screens stay plain and precise so people can see who claimed what.',
    'Gift records can be filtered by type, currency and time. Unclaimed gifts return to the sender after 24 hours, and the empty and expired states explain what happens next.')}

  <section><h2>Part 3 · eSIM</h2></section>
  ${uFrame('08', 'eSIM purchase and installation', U + 'esim-flow.jpg', 'eSIM flow from choosing a country to installing with QR code',
    'Buy a data plan for travel: choose a country or region, pick a plan (data and validity, priced in USDT), confirm the order, pay with PIN, then install the eSIM in one tap, by QR code or manually.',
    'Most users have never installed an eSIM. I designed three install paths with step-by-step illustrations because the right method depends on the phone, and I added a "My eSIM" page with a data-usage ring and an FAQ so users can help themselves.',
    'Plans are shown as a simple list with price on the right. Annotations beside the frames record decisions such as "expired plans move to history" and "show the QR code only after purchase".')}
  ${uFrame('09', 'eSIM by country and high-speed network', U + 'esim-country.jpg', 'eSIM screens for country selection and plan variants',
    'Variants of the purchase flow for country-specific plans and high-speed network plans, including flags, plan comparisons and validity.',
    'Country plans and regional plans needed to look related but clearly different, so the same card layout is reused with different labels and tags.',
    'States cover unavailable countries, plans with discounts, and the "my eSIM" view after purchase.')}
  ${uFrame('10', 'eSIM auto-renewal', U + 'esim-auto-renew.jpg', 'eSIM auto-renewal list, details, cycle selection and confirmation',
    'Manage automatic renewals: a list of eSIM plans with status chips (enabled, overdue, manual), a detail page with amount, plan, cycle and next renewal date, a bottom sheet to choose a 1, 3, 6 or 12 month cycle, and renewal history.',
    'Recurring charges need clear consent. Longer cycles show their saving as a tag, turning auto-renew off asks for confirmation and explains that service will stop at the end of the period, and overdue plans get a direct "pay now" path.',
    'The confirm-payment sheet repeats the cycle, total and payment method before the final button, which states the amount ("Confirm payment 69 USDT").')}
  <section>
    <h3>The full eSIM board</h3>
    ${fig(U + 'esim-overview.jpg', 'Overview of all eSIM research and flows')}
    <p>The complete eSIM file: competitor references (eSIM参考), the core purchase flow (eSIM流程), country plans, high-speed network plans and auto-renewal, each explored in several rounds.</p>
  </section>

  <section><h2>Part 4 · Insights</h2></section>
  ${uFrame('11', 'Spending analytics (收支分析)', U + 'spending-analytics.jpg', 'Income and expense analytics with trend chart, category donut and filters',
    'A weekly, monthly or yearly view of spending: total spent (2,412.48 USDT across 56 transactions, +12.6% versus last month), a daily trend chart, a category donut, an income-versus-expense trend, and filters for time range, type, source (wallet or card) and category.',
    'Numbers alone don\'t help people change behaviour. The monthly summary adds a plain-language insight ("spending rose 12.6%, mainly from dining and shopping"), and categories link to a full ranked list so users can act on what they see.',
    'Filters live in a bottom sheet so the chart stays in context. A category grid with icons makes selection fast, and selected filters appear as removable chips.')}

  <section><h2>Part 5 · Chat, groups and AI</h2></section>
  ${uFrame('12', 'Chat list', U + 'chat-list.jpg', 'Two versions of the chat message list',
    'Two versions of the messages list. Version one pins the AI assistant 小U and system messages at the top with unread indicators; version two adds an official channel with "new" badges and a five-tab navigation that includes Transfer.',
    'Chat is where payments become social ("Chat &amp; Pay"), so the list had to feel like a familiar messenger while making the assistant and official announcements easy to find.',
    'Search, a contacts tab and an add-friend action sit at the top. Time stamps change format by age (time, weekday, date).')}
  ${uFrame('13', 'Group chat settings by role', U + 'group-chat-roles.jpg', 'Group chat settings for members, admins and owners',
    'Group settings designed for three roles: ordinary member, admin and group owner. Each sees different controls, such as group announcements, member management, admin assignment, join approval and permissions like muting or adding members.',
    'Designing by role prevents a cluttered screen for regular members while giving owners full control. Permissions are grouped and described in plain language so owners understand what each toggle does.',
    'Includes the member picker with an A to Z index, join-request approval with approve or reject, and a dedicated admin permissions page.')}
  ${uFrame('14', 'Voice messages', U + 'voice-message.jpg', 'Press-and-hold voice message flow with cancel and speech-to-text',
    'Press and hold to record, release to send, slide to cancel, or convert speech to text before sending.',
    'I followed the gestures users already know from popular messengers so nothing needs explaining, and added a live waveform and timer for feedback.',
    'States cover recording, cancel (red), speech-to-text preview, sending, and the sent voice bubble with duration.')}
  ${uFrame('15', 'AI assistant 小U with selectable personalities', U + 'ai-assistant.jpg', 'AI assistant entry and chat mode picker with personality options',
    'An AI assistant called 小U inside chat. Users choose how it responds. The first version offered task modes (quick, teaching, explain, translate, advice and safety); the second offered personalities (calm professional, warm, humorous, knowledgeable, creative and concise), each with its own mascot.',
    'People want different things from an assistant: a quick answer, a step-by-step explanation, or reassurance. Letting them pick a mode up front sets expectations and makes the AI\'s tone predictable. A "safety mode" prioritises protecting the account and funds, which matters in a payment app.',
    'The chosen mode appears as a tag in the chat header and can be changed at any time. Each personality opens with its own greeting, so the difference is felt immediately. I designed the mascot set so each personality is recognisable at small sizes.')}

  <section><h2>Part 6 · Account and identity</h2></section>
  ${uFrame('16', 'KYC identity verification', U + 'kyc.jpg', 'KYC flow with country, ID type, ID upload, review and face recognition',
    'Identity verification: choose a country, choose an ID type (for Malaysia: MyKad, MyTentera / MyPolis, MyPR, passport or i-Kad), upload the front and back with photo tips, review the extracted details, complete face recognition, and see the submitted or verified status.',
    'KYC is where many users drop off. I moved from a dense single form (top row) to short single-purpose steps (lower rows), added clear photo guidance (good lighting, no glare, keep the card inside the frame), and repeated a privacy note: "your data is only used for verification and won\'t be shared".',
    'Extracted details can be edited before submission. Face recognition shows three simple tips (hold the phone straight, good lighting, no sunglasses) before the camera opens.')}
  ${uFrame('17', 'Shipping address', U + 'address.jpg', 'Shipping address empty state, location permission, forms and region picker',
    'Address management for physical card delivery: empty state, a location-permission request, add and edit forms, a three-column province, city and district picker, a Malaysian format with address lines and a state picker, a default-address toggle, and swipe to delete with confirmation.',
    'Address formats differ between countries, so I designed a Chinese format and a Malaysian format that share one component style. The permission sheet explains why location helps before the system prompt appears.',
    'The board shows how the flow evolved from a basic first draft (top) to the refined design, with character counters and validation on each field.')}

  <section>
    <h2>Design system and handoff</h2>
    <ul>
      <li>One green primary colour for confirm actions, grey for cancel, and red only for destructive or failed states.</li>
      <li>Reusable patterns: large amount input with currency selector, bottom-sheet pickers, a six-digit PIN pad, status chips and safety notes.</li>
      <li>Consistent page structure: back button and title, content in rounded cards, and primary actions fixed at the bottom.</li>
      <li>Complete states for developers, plus annotations and flow arrows in Figma explaining each decision.</li>
    </ul>
  </section>

  <section>
    <h2>What I learned</h2>
    <ul>
      <li>In payments, trust comes from transparency: showing fees, rates and consequences before the confirm button matters more than visual polish.</li>
      <li>Working with a China-based team taught me to communicate design intent clearly across language and time zones, through annotated files rather than long meetings.</li>
      <li>Designing an AI assistant is mostly about setting expectations: modes and personalities make an AI feel predictable and safe.</li>
    </ul>
  </section>
</div>`;

const T = '/assets/trip/';
const tSection = (no: string, title: string, src: string, alt: string, body: string) => `
  <section>
    <p style="margin:0 0 .4rem;font-size:.75rem;font-weight:900;letter-spacing:.2em;text-transform:uppercase">Function ${no}</p>
    <h3>${title}</h3>
    ${fig(src, alt)}
    ${body}
  </section>`;

export const TRIP_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <h2>Overview</h2>
    <p><strong>From being the family's travel planner to designing a trip everyone can follow on their own.</strong></p>
    <p>Trip Together (一起游玩) is a bilingual, mobile-first web app I designed and built for a seven-day family trip to Chengdu, Jiuzhaigou, Huanglong and Chongqing in September 2026. It brings the itinerary, tickets, bookings, packing list, shared expenses and live schedule changes into one place that my parents and I could all open on our phones.</p>
    <table>
      <tr><td><strong>Role</strong></td><td>Product concept, UX/UI design, front-end development (with OpenAI Codex as my pair-programmer)</td></tr>
      <tr><td><strong>Platform</strong></td><td>Installable responsive web app (PWA)</td></tr>
      <tr><td><strong>Users</strong></td><td>Me as the trip organiser (YG), and my parents (Mami and Dedi)</td></tr>
      <tr><td><strong>Scope</strong></td><td>7 days, 3 cities, 130+ activities, 5 document folders, shared expenses in CNY and MYR</td></tr>
      <tr><td><strong>Stack</strong></td><td>React, TypeScript, Next.js, Tailwind CSS, Cloudflare D1 and R2, Drizzle ORM, service worker</td></tr>
    </table>
    <p><a href="https://chuanyu-family-trip.ygphoon.chatgpt.site" target="_blank" rel="noreferrer">Open the live app</a> (protected by a family password, because it holds real tickets and bookings).</p>
  </section>

  <section>
    <h2>The problem</h2>
    <p>I am usually the person who plans our family trips, so everyone depends on me for the schedule, tickets, timings and who paid for what. Before Trip Together, flight tickets were in email, hotel confirmations in booking apps, the itinerary in a long note, and last-minute changes in WhatsApp.</p>
    <ul>
      <li><strong>Fragmented information:</strong> details lived in different apps, so my parents had to ask me or scroll through chat.</li>
      <li><strong>One person as the single source of truth:</strong> every question came to me, even mid-trip.</li>
      <li><strong>Uncertainty about the latest plan:</strong> when we stayed longer somewhere, nobody knew which later timings were still correct.</li>
    </ul>
    <p><strong>How might we</strong> help family members find and understand shared travel information on their own, while reducing the organiser's coordination work?</p>
  </section>

  <section>
    <h2>Users and design principles</h2>
    <p><strong>The organiser (me)</strong> needs to change plans quickly and have everyone see the change. <strong>My parents</strong> prefer Chinese, are less confident with apps, and mainly want to know: where are we now, what's next, and where is my ticket?</p>
    <ol>
      <li><strong>Answer "what now?" first.</strong> The home screen shows the current city, current activity and what's next, with no navigation needed.</li>
      <li><strong>Visibility over memory.</strong> Tickets appear next to the activity that needs them, so nobody has to remember where they are saved.</li>
      <li><strong>Two languages, one data model.</strong> Every label switches between Chinese and English instantly.</li>
      <li><strong>Different controls for different roles.</strong> The planner can adjust the schedule; the family view stays simple and read-only.</li>
      <li><strong>Works on the move.</strong> Large touch targets, a bottom tab bar, offline caching and installation to the home screen.</li>
    </ol>
  </section>

  <section>
    <h2>Information architecture</h2>
    <p>Five tabs in a bottom bar: <strong>Today</strong> (what's happening now), <strong>Itinerary</strong> (all seven days), <strong>Documents</strong> (tickets and bookings), <strong>Expenses</strong> (shared ledger) and <strong>More</strong> (checklist, updates, reminders, settings and safety). Everything reads from one shared trip record, so a change made by the planner appears for everyone within seconds.</p>
  </section>

  <section><h2>Function by function</h2></section>

  ${tSection('01', 'Family access and bilingual interface', T + 's1-access-bilingual.jpg', 'Family access screen, Today in English and Today in Chinese',
    `<p><strong>What it does.</strong> The app opens on a friendly family access screen: choose who you are (YG, Mami or Dedi), enter the family password once, and you're in. A 中 / EN button switches the whole interface between Chinese and English at any time.</p>
     <p><strong>Why.</strong> The app holds real tickets and booking details, so it can't be fully public, but my parents shouldn't have to log in every day. The password is remembered on each phone after the first entry. Choosing a name also sets the role, so the app knows who is making updates.</p>
     <p><strong>How.</strong> All copy lives in one bilingual dictionary, and itinerary items store both Chinese and English titles, so the language switch is instant and nothing is machine-translated mid-trip.</p>`)}

  ${tSection('02', 'Today: the live dashboard', T + 's2-today.jpg', 'Today screen with current city, current activity, up next and documents for this stop',
    `<p><strong>What it does.</strong> A large card shows the current city and the route progress (KL → Chengdu → Jiuzhaigou → Chongqing). Below it, the <em>current activity</em> is highlighted with its time, transport notes and a Call Didi tag, followed by <em>Up next</em> and a <em>Documents for this stop</em> card with an Open button. Before the trip it counts down the days; afterwards it shows "Trip complete".</p>
     <p><strong>Why.</strong> During travel the only question that matters is "what are we doing now, and what do I need?" The dashboard answers it on one screen, so my parents never had to open the full itinerary.</p>
     <p><strong>How.</strong> The current activity is calculated from the clock in China time (UTC+8), including any schedule changes, and the screen refreshes as the day moves on.</p>`)}

  ${tSection('03', 'Itinerary: seven days, 130+ activities', T + 's3-itinerary.jpg', 'Itinerary with day picker, completed activities and a Y-shaped route choice on day 4',
    `<p><strong>What it does.</strong> A horizontal day picker (Day 1 to Day 7, with date and city) opens each day's timeline. Past activities show a Completed badge, the current one is highlighted, optional ones are marked, and fixed bookings are distinguished from flexible plans. On Day 4 in Jiuzhaigou, a special card handles the park's Y-shaped shuttle route: the first shuttle's direction (left or right) is only known on the day, so I record it and the order of the scenic stops updates for everyone.</p>
     <p><strong>Why.</strong> A long note is hard to scan. A day picker plus a timeline turns a 130-item plan into short, predictable chunks, and the badges show at a glance what is done, what is now and what can be skipped.</p>
     <p><strong>How.</strong> The itinerary is imported from my planning spreadsheet into structured data (time, titles, notes, fixed or flexible, optional, transport, links), and the day picker remembers its scroll position.</p>`)}

  ${tSection('04', 'Planner mode: activity details and live schedule changes', T + 's4-planner.jpg', 'Activity detail sheet, adjust schedule sheet and the activity has ended prompt',
    `<p><strong>What it does.</strong> Tapping an activity opens a detail sheet with its time, notes, the documents needed at that stop, and actions. As the planner I can tap <em>We arrived</em>, <em>Adjust schedule</em> or <em>Cancel this activity</em>. Adjusting offers "Leave now" or "Stay 10, 15, 20 or 30 min longer". When an activity ends, the app asks me directly: "This activity has ended. Stay a little longer?"</p>
     <p><strong>Why.</strong> Real trips never follow the plan exactly. Instead of messaging the family "we're 20 minutes late", one tap updates every later flexible activity until the next fixed booking (a train or a timed ticket), which never moves. Every change asks for confirmation because the whole family will see it.</p>
     <p><strong>How.</strong> Schedule changes are stored as overrides on top of the original plan, so I can always "Restore original day". Only the planner can mark arrivals; the family view shows "Only YG can update arrival" instead of the buttons.</p>`)}

  ${tSection('05', 'Travel library: tickets and bookings', T + 's5-documents.jpg', 'Travel library folders, attraction entry folder and documents linked from Today',
    `<p><strong>What it does.</strong> All documents are organised folder → item → file: Attraction entry, Flights, High-speed rail, Hotels and Arrival cards, each with a short description (for example "YG · Mami · Dedi"). Inside a folder, each item shows its date, entry time and price. The same documents also appear on the Today screen and in activity details, right when they're needed.</p>
     <p><strong>Why.</strong> At a ticket gate nobody wants to search through email. Linking each ticket to its activity means the right file is one tap away at the right moment. Folders give a predictable second path for anything else.</p>
     <p><strong>How.</strong> Files (images and PDFs) are stored in Cloudflare R2 and can be added from the app. A link to the full Google Drive folder and the detailed itinerary sits underneath as a backup.</p>`)}

  ${tSection('06', 'Family expenses in CNY and MYR', T + 's6-expenses.jpg', 'Family expenses summary and expense list with add expense form',
    `<p><strong>What it does.</strong> A shared ledger shows totals in CNY and MYR, an estimated overall total in ringgit, and how much each person has paid in each currency. Anyone can add an expense with who paid, currency, amount, date and purpose; entries can be deleted.</p>
     <p><strong>Why.</strong> Spending happened in two currencies and by three people. Keeping currencies separate (no automatic conversion) avoids confusion about exchange rates, while the estimated total gives a quick sense of the overall budget.</p>
     <p><strong>How.</strong> Amounts are stored in cents to avoid rounding errors, and every new or deleted expense is written to the shared activity history.</p>`)}

  ${tSection('07', 'Packing checklist and recent updates', T + 's7-checklist-updates.jpg', 'Packing checklist with progress ring and recent updates feed',
    `<p><strong>What it does.</strong> A shared packing checklist with a progress ring (6/10 completed), filters for Everyone, YG, Mami and Dedi, an assignee and category for each task, and the ability to add or remove tasks. <em>Recent updates</em> lists every change with who made it and when: arrivals, schedule adjustments, route choices, expenses and completed tasks.</p>
     <p><strong>Why.</strong> Assigning items (passports, medicine, power banks, warm layers for Huanglong) made preparation a shared job instead of my job. The updates feed answers "has the plan changed?" without anyone needing to ask.</p>
     <p><strong>How.</strong> The app syncs with the shared database every five seconds, so ticks and changes appear on all three phones almost immediately.</p>`)}

  ${tSection('08', 'Settings, reminders and safety', T + 's8-settings.jpg', 'More screen with testing mode, traveller role, language, reminders, calendar, install and emergency numbers',
    `<p><strong>What it does.</strong> The More tab gathers everything else: the current traveller (switching between planner mode and family view), language, departure reminders with a test alert, <em>Import system calendar</em> (downloads the whole itinerary as a calendar file), <em>Add to Home Screen</em>, sync status, emergency numbers (Police 110 · Ambulance 120 · Fire 119), and a testing mode that simulates any time in Chengdu.</p>
     <p><strong>Why.</strong> Reminders and calendar export give my parents a fallback in their own apps. Emergency numbers in China are not the same as at home, so they are always one tap away. Testing mode let me rehearse the whole trip hour by hour before we left, which is how I found and fixed most edge cases.</p>
     <p><strong>How.</strong> Reminders use the service worker's notifications, checked every 30 seconds. Official times are locked to Asia/Shanghai (UTC+8) so phones on Malaysian time still show the right schedule, and the service worker caches the app so it still opens with a weak signal.</p>`)}

  <section>
    <h2>Before and after</h2>
    <table>
      <tr><th>Before Trip Together</th><th>With Trip Together</th></tr>
      <tr><td>Search WhatsApp for the itinerary</td><td>Open Today and see the current and next activity</td></tr>
      <tr><td>Ask the organiser about timings</td><td>Timings update for everyone when the plan changes</td></tr>
      <tr><td>Find tickets across email and apps</td><td>The right ticket appears on the activity that needs it</td></tr>
      <tr><td>Track who paid in chat messages</td><td>One shared ledger in CNY and MYR</td></tr>
      <tr><td>Ask "did the plan change?"</td><td>Recent updates shows every change and who made it</td></tr>
    </table>
  </section>

  <section>
    <h2>Outcome and reflection</h2>
    <p>Trip Together went from a personal frustration to a working, installable product built for our September 2026 family trip. I haven't run formal usability tests or collected analytics, so I don't claim metrics; the goal I designed for was simple: my parents should be able to check the plan and find their tickets without asking me.</p>
    <ul>
      <li>Designing for my parents taught me to prioritise familiar words, large targets and one clear answer per screen over feature count.</li>
      <li>Separating fixed bookings from flexible plans was the key information-design decision; it made live schedule changes safe.</li>
      <li>Building with Codex let me test real interactions (time-based states, sync, offline) instead of static mock-ups.</li>
    </ul>
    <p><strong>Next iteration:</strong> a lighter entry (for example a private invite link instead of a password, weighing convenience against privacy), "last changed" highlights on edited activities, and simple usability tasks with family members (find the next activity, open a ticket, add an expense) to measure success.</p>
  </section>
</div>`;

// ---------- Shared helpers for the scannable case studies ----------
const screen = (no: string, src: string, alt: string, title: string, does: string, why: string, flipped = false) => `
  <div class="cs-screen${flipped ? ' is-flipped' : ''}">
    <img src="${src}" alt="${alt}" loading="lazy" />
    <div>
      ${no ? `<span class="cs-num">${no}</span>` : ''}
      <h4>${title}</h4>
      <p>${does}</p>
      <p class="cs-why">${why}</p>
    </div>
  </div>`;

const photo = (src: string, alt: string, caption: string) => `
  <figure><img src="${src}" alt="${alt}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`;

// ---------- Interactive Photobooth ----------
const P = '/assets/photobooth/';

export const PHOTOBOOTH_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <p class="cs-lede">A browser photobooth that feels like the real thing: pick a frame, pose for three shots, watch the strip print, then save or share it. I built it with AI as my coding partner and used it at my NutriShare booth at the Crash Out exhibition.</p>
    <dl class="cs-glance">
      <div><dt>My role</dt><dd>Concept, interaction design, frame artwork and front-end build</dd></div>
      <div><dt>Built with</dt><dd>HTML, CSS, JavaScript, GSAP, Canvas and the Web Share API</dd></div>
      <div><dt>AI use</dt><dd>AI coding assistants for code, debugging and copy, directed and reviewed by me</dd></div>
      <div><dt>Used at</dt><dd>Crash Out Design Showcase, with a real printer</dd></div>
    </dl>
    <p>Try it: <a href="https://icese-photobooth.netlify.app" target="_blank" rel="noreferrer">icese-photobooth.netlify.app</a>. It works on desktop and mobile, and photos stay on your device.</p>
  </section>

  <section>
    <h2>The idea</h2>
    <p>Photobooths are loved because of the little rituals: the countdown, the flash, the wait while the strip prints. Most web photo apps skip all of that and just take a picture. I wanted to keep the rituals and use motion as feedback, so every step tells you what is happening.</p>
    <ol class="cs-flow" aria-label="Photobooth flow">
      <li>Enter</li><li>Choose a frame</li><li>Allow camera</li><li>Take 3 photos</li><li>Review</li><li>Print</li><li>Collect and share</li>
    </ol>
  </section>

  <section>
    <h2>Screen by screen</h2>
    ${screen('1', P + 'pb-01.jpg', 'Photobooth welcome screen reading Memories that feel like you', 'Welcome', 'A single message, “Memories that feel like you”, and one button to enter the booth. A small stack of sample strips in the corner shows what you will get.', 'One clear action and a preview of the result lower the effort to start.')}
    ${screen('2', P + 'pb-03.jpg', 'Choose your frame screen with four NutriShare frame designs', 'Choose your frame', 'Four NutriShare frames: Home and Share, Denim Day, Notebook and Cozy Kitchen. Selecting one updates the large preview on the left straight away.', 'Seeing the frame before taking photos means people pose to match it, and nobody has to remember the options.', true)}
    ${screen('3', P + 'pb-04.jpg', 'Camera access needed message with retry and demo options', 'Camera access', 'The browser asks for the camera. If permission is declined, a friendly card explains how to enable it and offers “Try camera again” or “Continue with demo photos”.', 'Permission errors are where most camera apps lose people, so there is always a way forward.')}
    ${screen('4', P + 'pb-06.jpg', 'Live camera screen titled Looking good with a red shutter button', 'Looking good', 'A live preview with framing corners, a countdown and a large shutter button. A flash and sound mark each photo, and the progress shows which of the three shots you are on.', 'The countdown builds anticipation and gives people time to pose, just like a real booth.', true)}
    ${screen('5', P + 'pb-07.jpg', 'Keep this one screen with retake and keep and next buttons', 'Keep this one?', 'After each shot you can retake it or keep it and move on, so one blink doesn’t ruin the strip.', 'Reviewing one photo at a time keeps the decision small and quick.')}
    ${screen('6', P + 'pb-08.jpg', 'Happy with these screen showing the finished frame', 'Happy with these?', 'The three photos appear in the chosen frame. Start again, or tap “Print your strip”.', 'A final check before printing gives people control over the result.', true)}
    ${screen('7', P + 'pb-10.jpg', 'Printing your memories screen with a strip coming out of the machine', 'Printing your memories', 'A GSAP animation of the booth printing: the strip slides out of the slot while the status changes from developing to ready to collect. Tap the strip to collect it.', 'Motion turns waiting into part of the fun, and tapping to collect mirrors pulling a real strip from the machine.')}
    ${screen('8', P + 'pb-11.jpg', 'It is a keeper screen with two strips side by side and share buttons', 'It’s a keeper', 'The strip is shown as a pair, like a real print. Share photo opens the device share sheet (AirDrop on Apple devices), Download PNG saves a high-resolution file, and Make another strip starts over.', 'Saving and sharing in one tap gives the experience a clear ending.', true)}
  </section>

  <section>
    <h2>How I used AI</h2>
    <div class="cs-cards">
      <div><h4>I designed, AI coded with me</h4><p>I planned the flow, wrote the copy and drew the frames, then used AI coding assistants to build each screen from my descriptions.</p></div>
      <div><h4>Faster debugging</h4><p>AI helped me solve camera permissions, mirrored previews, canvas export at print resolution and Web Share support across browsers.</p></div>
      <div><h4>I stayed the reviewer</h4><p>I tested every step on phones and laptops and asked for changes until timing, motion and wording felt right.</p></div>
    </div>
  </section>

  <section>
    <h2>Privacy by default</h2>
    <p>Photos are taken, framed and exported entirely in the browser. Nothing is uploaded to a server, which made it safe to run in a public space with strangers.</p>
  </section>

  <section>
    <h2>In real life</h2>
    <p>At the Crash Out exhibition the booth ran on a laptop connected to an Epson printer. Visitors paid RM5 for two printed strips in NutriShare frames, which brought people to the booth and started conversations about the app.</p>
    <div class="cs-photos">
      ${photo('/assets/nutrishare/expo-photobooth.jpg', 'Photobooth laptop and printer at the booth', 'The photobooth set-up with printed sample strips.')}
      ${photo('/assets/nutrishare/expo-booth-icese.jpg', 'Icese at the NutriShare booth', 'The booth where the photobooth lived.')}
    </div>
  </section>

  <section>
    <h2>What I learned</h2>
    <ul>
      <li>Familiar real-world metaphors (countdown, flash, printing slot) make a web interaction instantly understandable.</li>
      <li>Motion works best when it explains something, like where your photo went, rather than decorating the page.</li>
      <li>AI speeds up building, but the quality comes from clear direction and lots of testing on real devices.</li>
    </ul>
  </section>
</div>`;

// ---------- Nucleus Advisory, Digital Acceleration Program ----------
const NU = '/assets/nucleus/';

export const NUCLEUS_CASE_STUDY = `
<div class="space-y-12">
  <section>
    <p class="cs-lede">In the Digital Acceleration Program (DXP), Taylor's students solve real business challenges for Malaysian companies. My team worked with Nucleus Advisory, an AI-powered talent and organisational consulting firm, on the website that presents its services and brings in enquiries.</p>
    <dl class="cs-glance">
      <div><dt>Programme</dt><dd>DXP by Kabel and the SME Association of Malaysia, with Taylor's University</dd></div>
      <div><dt>Client</dt><dd>Nucleus Advisory</dd></div>
      <div><dt>My focus</dt><dd>Website UX, page structure and UI</dd></div>
      <div><dt>Result</dt><dd>Live at nucleusadvisory.co and a Certificate of Completion</dd></div>
    </dl>
    <p>Visit the site: <a href="https://nucleusadvisory.co" target="_blank" rel="noreferrer">nucleusadvisory.co</a></p>
  </section>

  <section>
    <h2>The brief</h2>
    <div class="cs-cards">
      <div><h4>Explain a complex offer</h4><p>Talent mapping, structure design, executive advisory and workforce analytics are hard to grasp quickly.</p></div>
      <div><h4>Build credibility</h4><p>Decision makers need to see partners, clients and real feedback before they get in touch.</p></div>
      <div><h4>Turn interest into enquiries</h4><p>Every page should lead to one clear next step: talk to the team.</p></div>
    </div>
  </section>

  <section>
    <h2>Page by page</h2>
    ${screen('', NU + '01-hero.jpg', 'Nucleus Advisory home hero', 'Home: the promise', 'A dark navy hero states the value in one line, “Transform your organisation with AI-powered talent intelligence”, with two actions: explore the solution or contact the team.', 'Executives decide in seconds. A single headline and one primary button make the next step obvious.')}
    ${screen('', NU + '02-partners-band.jpg', 'Partner logos and a call to action band', 'Proof, early', 'Partner logos sit right under the hero, followed by a bright band with “Talk to our team”.', 'Recognisable names build trust before asking for anything, and the band repeats the main action.', true)}
    ${screen('', NU + '03-capabilities.jpg', 'Four capability cards', 'Capabilities in four cards', 'Talent Mapping, Structure Design, Executive Advisory and Workforce Analytics, each with a two-line explanation and one link to explore all capabilities.', 'Breaking the offer into four equal cards makes a broad consulting service easy to scan.')}
    ${screen('', NU + '04-ai.jpg', 'AI section with ethics message', 'Responsible AI', 'A section explains how the AI models work and states the ethical commitment (data privacy, fairness, explainability), with links to LinkedIn and a demo request.', 'AI in hiring raises concerns, so we addressed them directly instead of hiding them.', true)}
    ${screen('', NU + '05-testimonials.jpg', 'Client testimonials', 'What others say', 'Short quotes from self-discovery session participants, followed by a track record section.', 'Real voices answer “does this actually help?” better than marketing copy.')}
    ${screen('', NU + '06-final-cta.jpg', 'Final call to action', 'Closing call to action', '“Let us elevate your business to new heights” with a single “Get started today” button before the footer.', 'A strong ending catches visitors who scrolled all the way down and are ready to act.', true)}
    ${screen('', NU + '07-solutions-hero.jpg', 'Solutions page hero', 'Solutions page', 'A lighter page introduces consulting services with a supporting visual and a headline about AI-infused solutions.', 'A lighter colour scheme separates detailed service pages from the bold home page.')}
    ${screen('', NU + '08-solutions-cards.jpg', 'List of solution cards', 'Every service at a glance', 'Stacked outlined cards for strategy development, change management, leadership development, workplace culture and performance management.', 'The same card pattern on every service keeps long content predictable and easy to compare.', true)}
    ${screen('', NU + '09-partners.jpg', 'Partners page', 'Partners', 'Partner logos (such as Pulsifi and Kabel) with what each alliance brings to clients.', 'Explaining the value of each partnership turns a logo wall into a reason to choose Nucleus.')}
    ${screen('', NU + '10-clients.jpg', 'Clients page with logo grid', 'Clients', 'A framed grid of client logos across industries.', 'A clean, consistent grid lets visitors spot familiar brands quickly.', true)}
    ${screen('', NU + '11-contact.jpg', 'Contact page with form and details', 'Contact', 'Contact details on the left; on the right a short form with name, email, company, phone and checkboxes for area of interest.', 'Area of interest checkboxes route enquiries to the right consultant and are faster than typing.')}
    ${screen('', NU + '12-popup.jpg', 'Interview Ready promotional pop-up', 'Interview Ready promotion', 'A pop-up promotes the Interview Ready coaching package with its sessions, outcomes and price.', 'A focused offer gives individual visitors, not just companies, an easy way to start.', true)}
  </section>

  <section>
    <h2>Certificate</h2>
    <img src="/assets/achievements/dxp-certificate.jpg" alt="DXP Certificate of Completion for Phoon Yuk Guan from Kabel and the SME Association of Malaysia" loading="lazy" />
    <p>Awarded by Kabel and the SME Association of Malaysia for completing the Digital Acceleration Program and solving real business challenges through digital strategy, innovation and teamwork.</p>
  </section>

  <section>
    <h2>What I learned</h2>
    <ul>
      <li>Working with a real client means balancing what they want to say with what their visitors need to know first.</li>
      <li>A modular card system kept many pages consistent and made content easy for the client to update.</li>
      <li>Trust signals (partners, clients, testimonials, an ethics statement) matter as much as layout for a B2B service.</li>
    </ul>
  </section>
</div>`;

// ---------- NutriShare additions (desktop web app tour + exhibition), inserted into the original case study ----------
const ND = '/assets/nutrishare/desktop/';
const dscreen = (src: string, title: string, what: string, why: string) => `
  <figure class="cs-desk">
    <img src="${ND}${src}" alt="NutriShare desktop web app: ${title}" loading="lazy" />
    <figcaption><div><strong>${title}</strong><p>${what}</p></div><p class="cs-why">${why}</p></figcaption>
  </figure>`;

const nsTab = (id: string, checked = false) =>
  `<input type="radio" name="ns-desk" id="${id}"${checked ? ' checked' : ''} />`;

export const NUTRISHARE_DESKTOP_SECTION = `
  <section class="ns-desktop">
    <div class="ns-heading"><div><span>08A / Desktop web app</span><h3>The web app, screen by screen</h3></div></div>
    <p>NutriShare is a mobile app and a desktop web app built on the same system. These are desktop screens from the live web app at <a href="https://nutrishare.netlify.app/" target="_blank" rel="noopener noreferrer">nutrishare.netlify.app</a>. I first built it in PHP and MySQL, then rebuilt it on Netlify with a serverless API and a PostgreSQL database so it could run online for the exhibition. Choose a role to see its screens.</p>
    <div class="cs-tabs">
      ${nsTab('ns-t1', true)}${nsTab('ns-t2')}${nsTab('ns-t3')}${nsTab('ns-t4')}${nsTab('ns-t5')}
      <div class="cs-tablist" role="presentation">
        <label for="ns-t1">Getting started <small>4</small></label>
        <label for="ns-t2">Receiver <small>5</small></label>
        <label for="ns-t3">Donor <small>4</small></label>
        <label for="ns-t4">Volunteer <small>2</small></label>
        <label for="ns-t5">Everyone <small>4</small></label>
      </div>
      <div class="cs-panels">
        <div class="cs-panel p1">
          ${dscreen('d01-home.jpg', 'Home', 'A purple hero with the promise “Share food. Spread care.”, two clear actions (explore food, choose your role), live community numbers and the food that is ready to be shared right now.', 'Visitors see real food and real activity before being asked to sign up, which builds trust from the first screen.')}
          ${dscreen('d02-foods.jpg', 'Explore food', 'The live pantry: search, category filter and food cards with category, halal tag, stock left and best-before date. Guests are asked to log in only when they try to reserve.', 'Showing what is available first answers the receiver’s biggest question, “is there food for me?”, without any barrier.')}
          ${dscreen('d03-register.jpg', 'Create your account', 'The mascot welcomes new users on the left. On the right, role cards for receiver, donor and volunteer, then personal details and household size.', 'One account with a role you can change later keeps sign-up short and lets people help in different ways over time.')}
          ${dscreen('d04-login.jpg', 'Log in', 'A short form with username or email and password, plus a link to create an account and choose a role.', 'The split layout keeps the brand warm while the form itself stays minimal.')}
        </div>
        <div class="cs-panel p2">
          ${dscreen('d05-receiver.jpg', 'Receiver home', 'A greeting card with one main action, “Choose food”, then NutriPoints, activity counts, the latest reservation and quick actions for food, notifications and role change.', 'The dashboard answers “what should I do next?” and keeps the current reservation one click away.')}
          ${dscreen('d06-request.jpg', 'Choose food and fulfilment', 'Food is browsed on the left while the pickup or delivery panel stays visible on the right: chosen items, self collection or volunteer delivery, address, date, time and a note for allergies or access.', 'Keeping the order summary in view on desktop removes the need to jump between steps.')}
          ${dscreen('d07-planner.jpg', 'Smart Planner', 'A seven-day breakfast, lunch and dinner plan for the household, built from food that is in stock, with suggested items to reserve below.', 'It turns a list of donations into practical meals, which is more useful to a family than individual items.')}
          ${dscreen('d08-reservations.jpg', 'My reservations', 'Each request with its reference, quantity, date and a live status chip such as “Preparing, on the way”.', 'A single list makes it easy to check on several requests at once.')}
          ${dscreen('d09-tracking.jpg', 'Live tracking and handover QR', 'Two progress tracks, donor preparation (3 steps) and volunteer delivery (7 steps), then the receiver’s secure handover QR, the food in the order and delivery details with the volunteer’s name.', 'Visible progress removes the uncertainty after reserving, and the QR makes sure food is only marked delivered when the receiver is there.')}
        </div>
        <div class="cs-panel p3">
          ${dscreen('d14-donor.jpg', 'Donor home', 'The same dashboard pattern with “Add a donation” as the main action, food listing counts and incoming reservation orders.', 'Reusing one layout for every role means people learn the app once.')}
          ${dscreen('d15-donate.jpg', 'Add a food donation', 'A two-column form with required name, category, quantity, unit, best-before date, halal status, pickup location, description and an optional photo. Donors earn 20 NutriPoints per listing.', 'Required safety fields make every listing complete enough for receivers to trust.')}
          ${dscreen('d16-donations.jpg', 'My shared food', 'Every listing the donor has shared, with stock left and status, and an “Add food” button.', 'Donors can see at a glance what is still available and what has been reserved.')}
          ${dscreen('d17-handover.jpg', 'Scan a self-collection QR', 'For self collection the donor scans the receiver’s QR with the device camera, or types the reference if the camera is unavailable, then confirms the handover.', 'The QR is read in the browser and the video is never uploaded, so the check is secure and private.')}
        </div>
        <div class="cs-panel p4">
          ${dscreen('d18-volunteer.jpg', 'Volunteer home', '“Find a delivery” as the main action, with active deliveries, available tasks and quick actions.', 'Volunteers usually arrive with one goal, so the next delivery is the first thing they see.')}
          ${dscreen('d19-tasks.jpg', 'Available and active tasks', 'Accept a nearby task, update each delivery stage in order, then scan the receiver’s QR on arrival. Empty states use the mascot to explain what happens next.', 'Step-by-step stages keep receivers informed automatically without extra messages.')}
        </div>
        <div class="cs-panel p5">
          ${dscreen('d10-impact.jpg', 'Community impact', 'NutriPoints, completed actions, impact events, reward level and a community leaderboard.', 'Linking points to real safe handovers makes rewards meaningful rather than a game for its own sake.')}
          ${dscreen('d11-profile.jpg', 'Profile and role', 'Switch between receiver, donor and volunteer, and edit name, phone, household size, address and bio.', 'Role switching lives in one predictable place.')}
          ${dscreen('d12-notifications.jpg', 'Notifications', 'Delivery progress, reservation updates and community reminders in one feed, with an unread count.', 'People don’t need to keep checking each reservation to know something changed.')}
          ${dscreen('d13-messages.jpg', 'Messages', 'Recent messages between receivers, donors and volunteers, with a messaging safety note and a shortcut to reservations.', 'Coordination stays inside the app instead of moving to personal phone numbers.')}
        </div>
      </div>
    </div>
    <div class="ns-grid-4" style="margin-top:1.5rem">
      <article class="ns-card ns-tech"><strong>Netlify Functions</strong><p>Serverless API for accounts, food, requests and handovers</p></article>
      <article class="ns-card ns-tech"><strong>PostgreSQL</strong><p>Netlify Database with migrations</p></article>
      <article class="ns-card ns-tech"><strong>jsQR</strong><p>Browser QR scanning, no video uploaded</p></article>
      <article class="ns-card ns-tech"><strong>bcrypt and GSAP</strong><p>Hashed passwords and motion</p></article>
    </div>
  </section>`;

const nsPhoto = (src: string, alt: string, caption: string) => `
  <figure><img src="/assets/nutrishare/${src}" alt="${alt}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`;

export const NUTRISHARE_EXPO_SECTION = `
  <section class="ns-expo">
    <div class="ns-heading"><div><span>11 / Exhibition</span><h3>Showing NutriShare at Crash Out</h3></div></div>
    <p>I exhibited NutriShare at <strong>Crash Out</strong>, the Taylor’s Design Showcase for graduating UI/UX students, held in a shopping mall so the public could walk in. My booth told the story in three layers: a pull-up banner and A1 board for people passing by, the mobile prototype and desktop web app on screens for people who stopped, and a working photobooth for people who wanted to stay.</p>
    <div class="cs-photos">
      ${nsPhoto('expo-booth-icese.jpg', 'Icese standing at her NutriShare booth', 'My booth, with the web app ready for visitors to try.')}
      ${nsPhoto('expo-poster.jpg', 'Icese holding the A1 board next to the Crash Out banner', 'The A1 board and banner: three roles, one caring system.')}
      ${nsPhoto('expo-photobooth.jpg', 'Photobooth laptop and printer with an RM5 for 2 sign', 'The photobooth corner: RM5 for two printed strips.')}
      ${nsPhoto('expo-booth-wide.jpg', 'Booth with desktop, laptops and printer', 'Desktop and laptops for hands-on testing.')}
      ${nsPhoto('expo-poster-laptop.jpg', 'Banner and laptop showing the website', 'The banner and the live website side by side.')}
      ${nsPhoto('expo-booth-full.jpg', 'Full view of the NutriShare booth', 'The full booth on the mall floor.')}
    </div>
    <div class="ns-grid-3" style="margin-top:1rem">
      <article class="ns-card"><h4>Attract</h4><p>Bold banner, mascot and a simple promise, readable from a distance.</p></article>
      <article class="ns-card"><h4>Explain</h4><p>The A1 board shows how the three roles connect: donate, match, deliver.</p></article>
      <article class="ns-card"><h4>Engage</h4><p>Visitors tried the app and took home a photobooth strip in NutriShare frames.</p></article>
    </div>
    <div class="ns-card" style="margin-top:1rem">
      <h4>Why a photobooth at a food aid booth?</h4>
      <p>A food aid app is hard to explain to someone walking past. The photobooth gave visitors a fun reason to stop, introduced the brand through mascot frames, and gave me time to walk them through NutriShare while their strips printed. I designed and coded the photobooth with AI as a separate project; see the <em>Interactive Photobooth</em> case study.</p>
    </div>
  </section>`;
