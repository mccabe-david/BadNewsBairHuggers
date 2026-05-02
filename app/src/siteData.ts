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
  title: 'Ugly early, loud late, deeply on brand.',
  summary:
    'Bad News Bairs opened the season on May 1, 2026 with a wobble, rallied with a string of chaotic singles, and nearly flipped the whole thing in the final inning. A shaky first couple of frames gave way to better at-bats, louder dugout energy, and the kind of momentum swing that makes everyone suddenly believe the comeback is inevitable. A couple of sharp defensive plays settled things down, the bats finally woke up, and by the last inning the whole game had turned into exactly the kind of scrappy, weird, extremely entertaining softball the Bairs seem built for. They did not leave with a win, but they absolutely left with a tone for the season.',
}

export const instagramPosts: readonly InstagramPostData[] = [
  {
    title: 'Latest post',
    caption: 'Most recent Bad News Bairs post.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DTbVR3mgF5k/',
    embedUrl: 'https://www.instagram.com/p/DTbVR3mgF5k/embed/captioned/',
  },
  {
    title: 'Second most recent post',
    caption: 'Recent dugout update from the feed.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOyWMvMgPse/',
    embedUrl: 'https://www.instagram.com/p/DOyWMvMgPse/embed/captioned/',
  },
  {
    title: 'Third most recent post',
    caption: 'Recent team post from the Bad News Bairs feed.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOf8DBlAM-Q/',
    embedUrl: 'https://www.instagram.com/p/DOf8DBlAM-Q/embed/captioned/',
  },
  {
    title: 'Fourth most recent post',
    caption: 'Another recent game-day post from Instagram.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOOL87RgG0F/',
    embedUrl: 'https://www.instagram.com/p/DOOL87RgG0F/embed/captioned/',
  },
  {
    title: 'Fifth most recent post',
    caption: 'Older featured post from the current top five.',
    url: 'https://www.instagram.com/bad_news_bairs/p/DOBNXsBgDJF/',
    embedUrl: 'https://www.instagram.com/p/DOBNXsBgDJF/embed/captioned/',
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
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Damaris',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Dana',
    blurb:
      'Calls off teammates with full main-character energy and closes gaps fast enough to start arguments about physics.',
  },
  {
    name: 'Derek',
    nickname: 'Dog Daddy',
    blurb:
      'Collects screamers, side-eyes bunts, and throws across the diamond like the inning insulted her personally.',
  },
  {
    name: 'Dylan',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Emily',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Elise',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Kelly',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Kelly',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Lauren',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
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
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Parks',
    nickname: 'Hype Man',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Sarah N',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Sarah R',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
  {
    name: 'Taylor F',
    blurb:
      'Quiet for two innings, then absolutely smokes a ball and jogs to first like it was no big deal.',
  },
]

export const schedule = [
  {
    opponent: 'Prospect Park Pythons',
    dateTime: '2026-05-01T20:00:00',
    location: 'McCarren South Field',
  },
  {
    opponent: 'Greenpoint Outlaws',
    dateTime: '2026-05-08T20:00:00',
    location: 'McCarren South Field',
  },
  {
    opponent: 'Queens Line Drives',
    dateTime: '2026-05-15T20:00:00',
    location: 'Bushwick Inlet Park',
  },
  {
    opponent: 'Park Slope Sliders',
    dateTime: '2026-05-22T20:00:00',
    location: 'Cooper Park',
  },
  {
    opponent: 'Williamsburg Wreckers',
    dateTime: '2026-06-05T20:00:00',
    location: 'McCarren South Field',
  },
  {
    opponent: 'Astoria Aces',
    dateTime: '2026-06-12T20:00:00',
    location: 'Bushwick Inlet Park',
  },
  {
    opponent: 'Crown Heights Crushers',
    dateTime: '2026-06-19T20:00:00',
    location: 'Cooper Park',
  },
  {
    opponent: 'Sunset Park Heat',
    dateTime: '2026-06-26T20:00:00',
    location: 'Red Hook Ballfields',
  },
] as const
