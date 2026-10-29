# HackED + HackED Beta

One site for both of the Computer Engineering Club's hackathons. It replaces
`HackEDWebsitePrimeRemote` (hacked.compeclub.com) and `HackEDWebsiteBetaRemote`
(hackedbeta.compeclub.com).

Static [Astro](https://astro.build) site, one page, no framework JS. The only scripts are
the hero intro, the FAQ event switch and the mobile menu.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Updating it each year

Almost everything lives in [`src/data/site.ts`](src/data/site.ts):

| Change | Where |
| --- | --- |
| Dates | `events.beta.when` / `events.hacked.when` |
| Schedule (shown in About, with a countdown) | `events.<id>.schedule`; times are ISO with the Edmonton offset, e.g. `2026-11-13T10:00:00-07:00` |
| Open registration | set `registerUrl`, then `status: 'open'` |
| Which event the hero sign and nav point at | `featured` (`'beta'` before November, `'hacked'` after) |
| Second word on the sign | `events.<id>.sign` (e.g. `Beta`, or the year for HackED) |
| Eligibility, fee, team size | `events.<id>.facts` |
| FAQ | `faq`: `a` is shared; `beta` / `hacked` give an event its own answer |
| Sponsors | `sponsors` |
| Discord invite | `contact.discord` (shown everywhere once it's set) |

## Hero

`src/components/Hero.astro` is the neon-sign intro from `hacked-beta-intro/`: a cat fades in
beside the sign, curls up against it and lights it. It plays once per browser session. Clicking skips
it; the replay button runs it again. With reduced motion turned on, the sign starts lit.

`public/cat-sprite.png` is a 4x4 sheet of 32px frames. **Its artist and license are not
confirmed yet. Check them before going live.**

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. To serve it at hacked.compeclub.com, add `public/CNAME` with that domain and point
DNS at Pages. Then redirect hackedbeta.compeclub.com here (`/#events` works well).
