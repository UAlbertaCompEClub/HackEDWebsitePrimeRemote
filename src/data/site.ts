// Everything an exec needs to change between years lives in this file.
// Dates, venues, links and registration status are per event; the FAQ can answer
// differently for each event, and the page lets visitors switch between them.

export type EventId = 'beta' | 'hacked';

export type Status = 'soon' | 'open' | 'closed' | 'over';

export interface Venue {
  name: string;
  short: string;
  address: string;
  /** a landmark or two, for people who don't know the building */
  hint: string;
  lat: number;
  lng: number;
}

export interface ScheduleItem {
  /** ISO time with the Edmonton offset (-07:00 in winter, -06:00 in summer) */
  at: string;
  what: string;
  note?: string;
  /** shows "~" before the time, for things like closing ceremonies */
  approx?: boolean;
}

export interface HackEvent {
  id: EventId;
  name: string;
  /** second line of the neon sign when this event is featured */
  sign: string;
  /** shell-style name shown on the event card */
  command: string;
  pitch: string;
  /** shown as-is; write "TBA" until the date is booked */
  when: string;
  month: string;
  audience: string;
  venue: Venue;
  facts: [string, string][];
  /** leave out until the times are set; the page falls back to a rough weekend outline */
  schedule?: ScheduleItem[];
  status: Status;
  /** leave empty until registration actually opens */
  registerUrl: string;
  site: string;
}

/** top line of the neon sign; the featured event's `sign` goes underneath */
export const brand = { sign: 'HackED' };

export const contact = {
  email: 'hacked@compeclub.com',
  club: 'https://www.compeclub.com/',
  instagram: 'https://www.instagram.com/compeclub/',
  /** paste the Discord invite here once there is one for the season */
  discord: '',
};

export const venues = {
  ucomms: {
    name: 'University Commons (UComms)',
    short: 'UComms, U of A',
    address: '89 Avenue NW, University of Alberta, Edmonton, AB T6G 2N8',
    hint: 'the old Dentistry/Pharmacy building, next to Rutherford Library and right by University LRT station',
    lat: 53.5255,
    lng: -113.52336,
  },
  dice: {
    name: 'Donadeo Innovation Centre for Engineering (DICE)',
    short: 'DICE, 8th floor',
    address: '9211 116 St NW, 8th Floor, Edmonton, AB T6G 2E1',
    hint: 'the engineering building on 116 Street, head up to the 8th floor',
    lat: 53.52833,
    lng: -113.52918,
  },
} satisfies Record<string, Venue>;

export const events: Record<EventId, HackEvent> = {
  beta: {
    id: 'beta',
    name: 'HackED Beta',
    sign: 'Beta',
    command: 'hacked --beta',
    pitch: "Alberta's friendliest beginner hackathon. It's built for your first (or second) hackathon, so there are mentors and workshops around to help when you get stuck.",
    when: 'Nov 13–15, 2026',
    month: 'Nov',
    audience: 'For first- and second-time hackers',
    venue: venues.ucomms,
    facts: [
      ['for', 'students 18+ who have done one hackathon at most'],
      ['length', '24 hours, in person'],
      ['teams', 'up to 5 (solo is fine too)'],
      ['entry', '$5 CAD'],
    ],
    schedule: [
      { at: '2026-11-13T10:00:00-07:00', what: 'Opening ceremonies', note: "Grab a seat. No team yet? This is when people find one." },
      { at: '2026-11-13T11:00:00-07:00', what: 'Coding begins', note: "24 hours on the clock. Go go go." },
      { at: '2026-11-14T11:00:00-07:00', what: 'Coding ends', note: 'Hands off the keyboard (yes, even that one last fix).' },
      { at: '2026-11-15T10:00:00-07:00', what: 'Judging begins', note: 'Show the judges what you made.' },
      { at: '2026-11-15T15:00:00-07:00', approx: true, what: 'Closing ceremonies', note: 'Winners get announced.' },
    ],
    status: 'open',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdHmIML1Rk2W8nW7YxR1knXbMhPAPCdU0geYZ047FcfIr3LEA/viewform?usp=header',
    site: 'https://hackedbeta.compeclub.com/',
  },
  hacked: {
    id: 'hacked',
    name: 'HackED',
    sign: '2027',
    command: 'hacked',
    pitch: "One of Alberta's biggest student-run hackathons, open to any student at any skill level. The judges come from industry, so bring your A-game (or your B-game, we're not picky).",
    when: 'February · dates TBA',
    month: 'Feb',
    audience: 'For any student, any skill level',
    venue: venues.dice,
    facts: [
      ['for', 'any student, grad students, and new grads up to a year out (18+)'],
      ['length', '24 hours, in person'],
      ['teams', 'up to 5 (solo is fine too)'],
      ['entry', 'free'],
    ],
    status: 'soon',
    registerUrl: '',
    site: 'https://hacked.compeclub.com/',
  },
};

/** the event the hero sign and the register button point at */
export const featured: EventId = 'beta';

export const statusLabel: Record<Status, string> = {
  soon: 'registration opens soon',
  open: 'registration is open',
  closed: 'registration closed',
  over: 'see you next year',
};

export const tagline = 'Build something worth building.';

/** scrolls under the hero */
export const ticker = [
  '24 hours',
  'teams of up to 5',
  'beginners very welcome',
  'mentors on call',
  'workshops',
  'snacks',
  'prizes',
  'in person on campus',
  'no code before hacking starts (planning is fine)',
];

/** how a weekend usually runs; shown when the featured event has no `schedule` yet */
export const weekend: [string, string][] = [
  ['sat, morning', 'Check in, grab a seat, opening ceremony. No team yet? This is when people find one.'],
  ['sat, midday', "Hacking starts. From here you've got 24 hours."],
  ['sat, afternoon', 'Workshops run through the afternoon, and sometimes sponsors set up booths.'],
  ['sat, late', "Still building. Games and trivia happen somewhere around here (so do the snacks)."],
  ['sun, morning', 'Submit your project on Devpost. Then hands off the keyboard.'],
  ['sun, afternoon', 'Demo for the judges, then the closing ceremony and winners.'],
];

// ---------------------------------------------------------------- FAQ
// `a` is shared by both events; `beta` / `hacked` override it for one event.

export interface FaqItem {
  q: string;
  a?: string;
  beta?: string;
  hacked?: string;
}

const where = (e: HackEvent) =>
  `${e.name} is at ${e.venue.name}, ${e.venue.address} (${e.venue.hint}).`;

export const faq: { group: string; items: FaqItem[] }[] = [
  {
    group: 'general',
    items: [
      {
        q: 'What actually happens at a hackathon?',
        a: "You and up to four teammates get 24 hours to build something: an app, a game, a hardware gadget, whatever you want. Mentors and workshops are there to help. You can plan and research ahead of time, but no code until hacking starts. At the end, teams show their projects to the judges and prizes get handed out.",
      },
      {
        q: 'Do I need to know how to code?',
        beta: "Nope! Beta is made for beginners (you can have done one hackathon before, max). There are mentors around the whole time, and plenty of people show up having never built anything.",
        hacked: "Nope. Every skill level is welcome at HackED, and there are mentors around the whole time. It's a great place to try something you've never touched before.",
      },
      {
        q: 'Who runs this?',
        a: 'The Computer Engineering Club at the University of Alberta. We\'re all students, so be nice to us at 3am.',
      },
      {
        q: 'Do I have to present?',
        a: "No, you can opt out before judging starts. We'd really recommend it though, even if your project only half works (most of them do).",
      },
    ],
  },
  {
    group: 'logistics',
    items: [
      { q: 'Where is it?', beta: where(events.beta), hacked: where(events.hacked) },
      {
        q: 'Can I join remotely?',
        a: "Not this time. Both events are in person only, so come hang out with us on campus (it's way more fun anyway).",
      },
      {
        q: 'Do I need to be in Computer Engineering or Computer Science?',
        a: 'Not at all. Any student from any faculty or school can come.',
      },
      {
        q: 'What should I bring?',
        a: "Your laptop and charger, plus any hardware your project needs. It's basically a sleepover, so a pillow, a blanket, a toothbrush and some deodorant (please) help a lot. No drugs or alcohol. If you're not sure about something, message us first.",
      },
      {
        q: 'Will there be food?',
        beta: "There'll be snacks. You're also welcome to bring your own food, and there's storage at the venue to keep it in.",
        hacked: "Yes! Snacks and drinks all weekend (coffee included, obviously), dinner on Saturday and breakfast on Sunday. Let us know about any dietary restrictions and we'll sort you out.",
      },
      {
        q: 'Will there be prizes and swag?',
        beta: 'Yes. There are prizes for the winning hacks, trivia prizes, and sometimes some from sponsors. Heads up: prizes for winning hacks are sized for teams of 4.',
        hacked: "Yes. Everyone gets a swag box from us and our sponsors (think t-shirts, snacks and stickers), there are games and trivia with mini prizes, and then there are the main prizes for the winners.",
      },
      {
        q: "How's the wifi?",
        a: "It's good, but download your tools before you come anyway. A whole room installing the same SDK at once gets slow.",
      },
    ],
  },
  {
    group: 'signing up',
    items: [
      {
        q: 'Who can sign up?',
        beta: "Any high school or university student who's 18+ and has done one hackathon at most. If you've done more but still feel like a beginner (little or no coding experience), email us and we'll talk.",
        hacked: "Any student from any school, grad students, and new grads up to a year after graduating. You need to be 18 or older.",
      },
      {
        q: 'How much does it cost?',
        beta: "$5 CAD. That's it.",
        hacked: 'Nothing, HackED is free.',
      },
      {
        q: 'Where do I sign up?',
        beta: 'Hit the register button on this page. It goes to our sign-up form.',
        hacked: "Sign-ups aren't open yet. When they are, the link goes up on this page. Follow @compeclub on Instagram to hear first.",
      },
      {
        q: 'How big can my team be?',
        a: 'Up to 5 people. Going solo is totally fine too.',
      },
    ],
  },
  {
    group: 'hacking',
    items: [
      {
        q: "I don't have a team!",
        a: "Super common, don't worry. People find teams on our Discord before the event, and there's time for it right after the opening ceremony. Just say hi to people. Teams that want one more member are looking at the same time.",
      },
      {
        q: "I don't have an idea!",
        a: "Also super common. Try thinking about something that annoys you every day and build the fix. Or show up and steal inspiration from the workshops.",
      },
      {
        q: 'How should I prepare?',
        a: "Make a Discord account. If you can, find a team and a rough idea beforehand. If you can't, that's what the opening ceremony is for.",
      },
      {
        q: 'How does judging work?',
        a: "The judges come from industry. We'll post the criteria closer to the event.",
      },
    ],
  },
  {
    group: 'help',
    items: [
      {
        q: 'Can I volunteer or mentor instead?',
        a: `Yes please! Email ${contact.email} and we'll find you a spot.`,
      },
      {
        q: 'How can my company sponsor this?',
        a: `Email ${contact.email} and tell us what you're thinking. Past sponsors have run workshops, set up booths, given prizes and filled the swag boxes, and we're happy to work out something that fits.`,
      },
      {
        q: "I've got another question...",
        a: `Email ${contact.email}. A real person on the team will get back to you.`,
      },
    ],
  },
];

// ---------------------------------------------------------------- sponsors
// Companies shown on the 2024 HackED Beta and HackED 2025 sites.

export const sponsors: { name: string; url: string }[] = [
  { name: 'Lantern', url: 'https://lanternstudios.com/' },
  { name: 'General Dynamics', url: 'https://www.gd.com/' },
  { name: 'TELUS', url: 'https://www.telus.com/en' },
  { name: 'ATB Financial', url: 'https://www.atb.com/' },
  { name: 'University of Alberta', url: 'https://www.ualberta.ca/research/index.html' },
  { name: 'Student Innovation Centre', url: 'https://www.ualberta.ca/student-innovation-centre/index.html' },
  { name: 'Spartan Controls', url: 'https://www.spartancontrols.com/' },
  { name: 'Amii', url: 'https://www.amii.ca/' },
  { name: 'MecSimCalc', url: 'https://mecsimcalc.com/' },
  { name: 'Edmonton Unlimited', url: 'https://edmontonunlimited.com/' },
  { name: 'Garmin', url: 'https://www.garmin.com/en-CA/' },
  { name: 'AltaML', url: 'https://altaml.com/' },
  { name: 'Samdesk', url: 'https://www.samdesk.io/' },
  { name: 'UAlberta iCE', url: 'https://www.ualberta.ca/engineering/innovation-creativity-entrepreneurship/index.html' },
  { name: 'Garneau Chiropractic', url: 'https://www.garneauchiropractic.ca/' },
];

export const thanks = "Big thanks to Ada's Team and UACS too.";
