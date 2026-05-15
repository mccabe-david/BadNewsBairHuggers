type InstagramPostData = {
  title: string
  caption: string
  url: string
  embedUrl: string
}

type RosterPlayer = {
  name: string
  nickname?: string
  position?: string
  blurb: string
}

export const teamProfile = {
  instagramUrl: 'https://www.instagram.com/bad_news_bairs/',
  followers: 117,
  posts: 30,
}

export const lastGameStory = {
  title: 'Played tired, played hard, played Harvard Gardens.',
  summary:
    'The Bairs came into Game 2 already a full game deep, legs heavy and lungs still burning from the first matchup of the night. Against the Slides — widely regarded as the best team in the league — that was always going to be a tall order. They punched back early, putting up runs in the first few innings and giving the dugout something to get loud about. Parks was electric, retiring the side in one inning entirely on their own. Madi held it down at first with a handful of plays that made the game look closer than it was. But the Slides are the Slides, and as the innings wore on, the gap became real. It wasn\'t close by the end — but the Bairs left loud, headed straight to Harvard Gardens, and called it a night worth celebrating.',
}

export const instagramPosts: readonly InstagramPostData[] = [
  {
    title: 'Latest post',
    caption: 'Most recent Bad News Bairs post.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DYNHvzhAL1s/',
    embedUrl: 'https://www.instagram.com/p/DYNHvzhAL1s/embed/captioned/',
  },
  {
    title: 'Second most recent post',
    caption: 'Recent dugout update from the feed.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DTbVR3mgF5k/',
    embedUrl: 'https://www.instagram.com/p/DTbVR3mgF5k/embed/captioned/',
  },
  {
    title: 'Third most recent post',
    caption: 'Recent team post from the Bad News Bairs feed.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOyWMvMgPse/',
    embedUrl: 'https://www.instagram.com/p/DOyWMvMgPse/embed/captioned/',
  },
  {
    title: 'Fourth most recent post',
    caption: 'Another recent game-day post from Instagram.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOf8DBlAM-Q/',
    embedUrl: 'https://www.instagram.com/p/DOf8DBlAM-Q/embed/captioned/',
  },
  {
    title: 'Fifth most recent post',
    caption: 'Older featured post from the current top five.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOOL87RgG0F/',
    embedUrl: 'https://www.instagram.com/p/DOOL87RgG0F/embed/captioned/',
  },
]

export const roster: readonly RosterPlayer[] = [
  {
    name: 'Shannon G',
    nickname: 'Cap',
    blurb:
      'Throws like she has a plan, fields like she has three backup plans, and judges every at-bat with accountant-level precision.',
  },
  {
    name: 'Adria',
    blurb:
      'Scoops low throws like a magician and somehow makes every near-disaster look premeditated.',
  },
  {
    name: 'AJ',
    blurb:
      'Stands exactly where the ball is going to end up and insists afterward that it was obvious to everyone.',
  },
  {
    name: 'Andrew',
    blurb:
      'Collects screamers, side-eyes bunts, and throws across the diamond like the inning insulted her personally.',
  },
  {
    name: 'Ashley',
    blurb:
      'Tracks fly balls late, sprints early, and always has one catch per game that makes everyone briefly believe in destiny.',
  },
  {
    name: 'Bailey B',
    blurb:
      'Covers impossible ground, starts chaos-double-plays, and walks back to the dugout like it all bored them slightly.',
  },
  {
    name: 'Beau H',
    blurb:
      'One of the few Bairs trusted on the mound, and he takes it seriously. Surgical with his pitches, dependable at the plate, and the kind of player the team quietly builds around.',
  },
  {
    name: 'Damaris',
    blurb: 'Brings it when called upon and keeps things simple.',
  },
  {
    name: 'Dana',
    blurb:
      'Calls off teammates with full main-character energy and closes gaps fast enough to start arguments about physics.',
  },
  {
    name: 'David M',
    blurb:
      'Resident DJ, occasional fielder, occasional batter, full-time speedster. When he decides to play, good luck catching him.',
  },
  {
    name: 'Derek',
    nickname: 'Dog Daddy',
    blurb:
      'Locks down third base and high-fives every single teammate on the run-in at the end of an inning without fail. Great beard. Unimpeachable playlist.',
  },
  {
    name: 'Dylan',
    blurb: 'Laid-back energy, quietly solid game. Doesn\'t chase the spotlight, doesn\'t need to.',
  },
  {
    name: 'Emily',
    blurb: 'Reliable on both sides of the ball and always somewhere useful.',
  },
  {
    name: 'Elise',
    blurb: 'Keeps her head in the game and finds a way to contribute every time out.',
  },
  {
    name: 'Kelly',
    blurb:
      'Patrols the outfield and punishes mistakes at the plate. One of the few Bairs who can genuinely change a game with a single swing.',
  },
  {
    name: 'Kelly',
    blurb: 'Steady presence in the lineup and doesn\'t make things complicated.',
  },
  {
    name: 'Lauren',
    blurb: 'Shows up, suits up, gets it done.',
  },
  {
    name: 'Madi W',
    nickname: 'Go Shawty',
    blurb:
      'Runs the defense, chirps with confidence, and treats foul balls like personal invitations to cause a scene.',
  },
  {
    name: 'Patrick T',
    nickname: 'MV-Patrick',
    blurb:
      'Quiet until the game asks something of him, then the shortstop position suddenly looks effortless. One of the most talented players on the field, and the Bairs know it even if he won\'t say so.',
  },
  {
    name: 'Parks',
    nickname: 'Hype Man',
    blurb:
      'Comes in loud, waits for exactly the right moment, then buries the room with one perfectly timed deadpan. Trauma surgeon by day, which somehow explains everything.',
  },
  {
    name: 'Sarah N',
    blurb:
      'Less interested in the scoreboard than the energy in the dugout, and the dugout is better for it.',
  },
  {
    name: 'Sarah R',
    blurb:
      'Primarily here for the conversation, secondarily here for the softball, and always the most entertaining person in a five-foot radius.',
  },
  {
    name: 'Taylor F',
    blurb:
      'The teammate you want in every dugout — warm, encouraging, and somehow always the right person to talk to between innings. Pitches on occasion and brings the same easy calm to the mound as she does to everything else.',
  },
]

export const schedule = [
  {
    opponent: 'IV Leaguers',
    dateTime: '2026-05-01T20:45:00',
    location: 'Field 1',
    isHome: false,
  },
  {
    opponent: 'Crimson Critters',
    dateTime: '2026-05-08T19:15:00',
    location: 'Field 2',
    isHome: false,
  },
  {
    opponent: 'Slides',
    dateTime: '2026-05-08T20:45:00',
    location: 'Field 2',
    isHome: true,
  },
  {
    opponent: 'Slides',
    dateTime: '2026-05-15T20:45:00',
    location: 'Field 1',
    isHome: false,
  },
  {
    opponent: 'Crimson Critters',
    dateTime: '2026-05-29T19:15:00',
    location: 'Field 2',
    isHome: false,
  },
  {
    opponent: 'CRK',
    dateTime: '2026-05-29T20:45:00',
    location: 'Field 2',
    isHome: true,
  },
  {
    opponent: 'Crimson Critters',
    dateTime: '2026-06-05T19:15:00',
    location: 'Field 1',
    isHome: true,
  },
  {
    opponent: 'IV Leaguers',
    dateTime: '2026-06-26T19:15:00',
    location: 'Field 2',
    isHome: true,
  },
  {
    opponent: 'CRK',
    dateTime: '2026-07-10T20:45:00',
    location: 'Field 1',
    isHome: false,
  },
  {
    opponent: 'IV Leaguers',
    dateTime: '2026-07-17T19:15:00',
    location: 'Field 1',
    isHome: false,
  },
  {
    opponent: 'Warriors',
    dateTime: '2026-07-17T20:45:00',
    location: 'Field 1',
    isHome: true,
  },
  {
    opponent: 'Warriors',
    dateTime: '2026-07-24T19:15:00',
    location: 'Field 1',
    isHome: false,
  },
  {
    opponent: 'IV Leaguers',
    dateTime: '2026-07-24T20:45:00',
    location: 'Field 2',
    isHome: true,
  },
  {
    opponent: 'CRK',
    dateTime: '2026-07-31T19:15:00',
    location: 'Field 2',
    isHome: true,
  },
] as const
