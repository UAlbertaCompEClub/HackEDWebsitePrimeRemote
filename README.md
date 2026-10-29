# HackED + HackED Beta

One site for both of the Computer Engineering Club's hackathons. It replaces
`HackEDWebsitePrimeRemote` (hacked.compeclub.com) and `HackEDWebsiteBetaRemote`
(hackedbeta.compeclub.com).

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

