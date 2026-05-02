import { useEffect, useRef, useState } from 'react'
import { HashRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import portraitPlaceholder from './assets/Portrait_Placeholder.png'
import teamLogo from './assets/teamLogo.jpg'
import {
  instagramPosts,
  lastGameStory,
  roster,
  schedule,
  teamProfile,
} from './siteData'

type ScheduleGame = (typeof schedule)[number]
type InstagramPost = (typeof instagramPosts)[number]

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Roster', to: '/roster' },
  { label: 'Schedule', to: '/schedule' },
]

const panelClass =
  'rounded-[28px] border border-white/10 bg-[rgba(10,24,46,0.82)] shadow-[0_24px_60px_rgba(1,8,19,0.28)] backdrop-blur-sm'
const INSTAGRAM_EMBED_WIDTH = 328
const INSTAGRAM_EMBED_HEIGHT = 740

function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString))
}

function getUpcomingGame(games: readonly ScheduleGame[]) {
  const now = new Date()
  return games.find((game) => new Date(game.dateTime) >= now) ?? null
}

function getPreviousGame(games: readonly ScheduleGame[]) {
  const now = new Date()
  return [...games].reverse().find((game) => new Date(game.dateTime) < now) ?? null
}

function AppShell() {
  return (
    <div className="min-h-screen px-2.5 py-2.5 md:px-4 md:py-3">
      <SiteHeader />
      <main className="flex flex-col gap-4 md:gap-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roster" element={<RosterPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </main>
    </div>
  )
}

function SiteHeader() {
  return (
    <header
      className={`sticky top-0 z-20 mb-3 flex flex-col gap-2.5 rounded-[18px] border border-white/10 bg-[rgba(7,18,35,0.86)] px-3.5 py-2.5 shadow-[0_18px_40px_rgba(1,8,19,0.24)] backdrop-blur-xl md:mb-4 md:flex-row md:items-center md:justify-between ${panelClass}`}
    >
      <Link className="flex items-center gap-4 no-underline" to="/">
        <LogoMark />
        <div>
          <h1 className="text-[clamp(1.8rem,2vw,2.45rem)]">Bad News Bairs</h1>
          <p className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#86d2a7]">
            Premier Softball Club
          </p>
        </div>
      </Link>

      <nav className="flex flex-wrap gap-2.5" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'rounded-full px-3 py-1.5 text-team-ink no-underline transition duration-200',
                isActive ? 'bg-team-green/20 text-white' : 'hover:-translate-y-px hover:bg-team-green/14',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function HomePage() {
  const nextGame = getUpcomingGame(schedule)
  const lastGame = getPreviousGame(schedule)

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <section
        className={`grid gap-3 rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(45,155,97,0.18),transparent_35%),linear-gradient(135deg,rgba(7,18,35,0.96),rgba(9,24,46,0.94))] p-3 shadow-[0_20px_50px_rgba(1,8,19,0.24)] lg:grid-cols-[minmax(0,1.4fr)_minmax(252px,0.8fr)] lg:p-5`}
      >
        <InstagramCarousel posts={instagramPosts} compact />

        <div className="flex min-h-full flex-col gap-3 rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%),linear-gradient(160deg,#0a1b39,#10305f_65%,#1d6d46)] p-4 text-white">
          <div className="rounded-[18px] border border-white/12 bg-white/6 p-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/70">
              Next Game
            </p>
            {nextGame ? (
              <>
                <h3 className="mt-2 text-[clamp(1.35rem,2vw,1.8rem)]">{nextGame.opponent}</h3>
                <p className="mt-1 text-sm text-white/90">
                  {formatDate(nextGame.dateTime, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  at{' '}
                  {formatDate(nextGame.dateTime, {
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </p>
                <p className="mt-1 text-sm text-white/70">{nextGame.location}</p>
              </>
            ) : (
              <p className="mt-2 text-sm text-white/80">Fresh game details coming soon.</p>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <LogoMark large />
            <div className="flex flex-col gap-1">
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/80">
                Profile
              </p>
              <strong className="text-2xl">@bad_news_bairs</strong>
              <span className="text-white/78">
                {teamProfile.followers} followers • {teamProfile.posts} posts
              </span>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-team-navy px-5 font-bold text-white no-underline"
              href={teamProfile.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Follow on Instagram
            </a>
            <Link
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 font-bold text-team-ink no-underline"
              to="/schedule"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-1">
        <article className={`${panelClass} mx-auto flex max-w-[1000px] flex-col items-center p-5 text-center md:p-6`}>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/80">
            Last Game
          </p>
          <h3 className="mt-3 text-[clamp(1.6rem,2.4vw,2.2rem)]">
            {lastGame ? `${lastGame.opponent} recap` : 'Season opener recap'}
          </h3>
          <p className="my-2 text-[1.05rem] text-team-ink">{lastGameStory.title}</p>
          <p className="text-team-slate">{lastGameStory.summary}</p>
        </article>
      </section>
    </div>
  )
}

function InstagramCarousel({
  posts,
  compact = false,
}: {
  posts: readonly InstagramPost[]
  compact?: boolean
}) {
  const [index, setIndex] = useState(0)
  const currentPost = posts[index]
  const previousPost = () => {
    setIndex((current) => (current - 1 + posts.length) % posts.length)
  }
  const nextPost = () => {
    setIndex((current) => (current + 1) % posts.length)
  }

  return (
    <section className={`${panelClass} flex flex-col gap-3 p-3 ${compact ? 'min-h-full' : ''}`}>
      <div className="flex flex-col gap-4">
        <article
          className="flex flex-col gap-3 rounded-[20px] bg-[linear-gradient(135deg,rgba(12,33,74,0.95),rgba(32,122,79,0.92))] p-3.5 text-white"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[0.78rem] font-bold uppercase tracking-[0.16em]">
              Post {index + 1}
            </span>
            <a href={currentPost.url} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:underline">
              Open on Instagram
            </a>
          </div>

          {currentPost.embedUrl ? (
            <ScaledInstagramEmbed
              title={currentPost.title}
              src={currentPost.embedUrl}
            />
          ) : (
            <div className="flex min-h-[280px] items-center gap-5">
              <LogoMark />
              <div>
                <h3 className="mb-2 text-[clamp(1.6rem,2.4vw,2.2rem)]">{currentPost.title}</h3>
                <p>{currentPost.caption}</p>
              </div>
            </div>
          )}
        </article>

        <div className="flex items-center justify-center gap-3" aria-label="Instagram post list">
          <button
            type="button"
            onClick={previousPost}
            className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 px-3 text-sm font-semibold text-white transition hover:bg-white/16"
            aria-label="Show previous Instagram post"
          >
            Prev
          </button>

          {posts.map((post, postIndex) => (
            <button
              key={postIndex}
              type="button"
              className={[
                'h-3 w-3 rounded-full border-0 p-0 transition',
                postIndex === index ? 'bg-team-green' : 'bg-white/20 hover:bg-white/35',
              ].join(' ')}
              onClick={() => setIndex(postIndex)}
              aria-label={`Show Instagram post ${postIndex + 1}: ${post.title}`}
            />
          ))}

          <button
            type="button"
            onClick={nextPost}
            className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 px-3 text-sm font-semibold text-white transition hover:bg-white/16"
            aria-label="Show next Instagram post"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

function ScaledInstagramEmbed({ title, src }: { title: string; src: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const containerWidth = containerRef.current?.clientWidth ?? INSTAGRAM_EMBED_WIDTH
      const maxWidth = Math.max(containerWidth - 16, 240)
      const maxHeight = Math.max(Math.min(window.innerHeight * 0.56, 640), 320)
      const nextScale = Math.min(
        maxWidth / INSTAGRAM_EMBED_WIDTH,
        maxHeight / INSTAGRAM_EMBED_HEIGHT,
        1,
      )

      setScale(nextScale)
    }

    updateScale()

    const observer = new ResizeObserver(() => updateScale())
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    window.addEventListener('resize', updateScale)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  const scaledHeight = Math.round(INSTAGRAM_EMBED_HEIGHT * scale)
  const scaledWidth = Math.round(INSTAGRAM_EMBED_WIDTH * scale)

  return (
    <div ref={containerRef} className="flex w-full justify-center">
      <div
        className="overflow-hidden rounded-[20px] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
        style={{ width: scaledWidth, height: scaledHeight }}
      >
        <iframe
          className="block border-0"
          style={{
            width: INSTAGRAM_EMBED_WIDTH,
            height: INSTAGRAM_EMBED_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          title={title}
          src={src}
          loading="lazy"
          allowTransparency={true}
        />
      </div>
    </div>
  )
}

function RosterPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="px-1.5 pt-1.5">
        <h2 className="text-[clamp(2.8rem,6vw,5rem)]">Roster</h2>
        <p className="mt-1 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[#86d2a7]">
          The Crew
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {roster.map((player) => (
          <article
            key={player.name}
            className={`${panelClass} overflow-hidden bg-[linear-gradient(180deg,rgba(11,26,47,0.96),rgba(9,21,40,0.92))] p-4`}
          >
            <div className="mx-auto mb-1 w-fit overflow-hidden rounded-[20px] border border-white/8 bg-white/4">
              <img
                src={portraitPlaceholder}
                alt=""
                className="block h-[200px] w-[200px] object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)]">
              {player.name}
              {player.nickname ? <span className="text-team-green"> "{player.nickname}"</span> : null}
            </h3>
            <p className="mt-3 text-team-slate">{player.blurb}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

function SchedulePage() {
  const calendarMonths = buildCalendarMonths(schedule, 120)
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(() =>
    getMonthIndexForDate(calendarMonths, new Date()),
  )
  const selectedMonth = calendarMonths[selectedMonthIndex]

  const goToPreviousMonth = () => {
    setSelectedMonthIndex((current) => Math.max(current - 1, 0))
  }

  const goToNextMonth = () => {
    setSelectedMonthIndex((current) => Math.min(current + 1, calendarMonths.length - 1))
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="px-1.5 pt-1.5">
        <h2 className="text-[clamp(2.8rem,6vw,5rem)]">Schedule</h2>
        <p className="max-w-3xl text-team-slate">
          When our brave bairs will be taking the field
        </p>
      </section>

      <section className={`${panelClass} flex flex-col gap-6 p-5 md:p-7`}>
        <div className="hidden min-[750px]:flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goToPreviousMonth}
            disabled={selectedMonthIndex === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-xl text-white transition hover:bg-white/16 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Show previous month"
          >
            ‹
          </button>

          <div className="text-center">
            <h3 className="text-[clamp(1.6rem,2.4vw,2.2rem)]">{selectedMonth.label}</h3>
          </div>

          <button
            type="button"
            onClick={goToNextMonth}
            disabled={selectedMonthIndex === calendarMonths.length - 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-xl text-white transition hover:bg-white/16 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Show next month"
          >
            ›
          </button>
        </div>

        <div
          className="hidden min-[750px]:grid grid-cols-7 gap-2 lg:gap-3"
          role="grid"
          aria-label={`Schedule for ${selectedMonth.label}`}
        >
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={`${selectedMonth.label}-${day}`}
              className="rounded-[18px] bg-white/5 px-2 py-2 text-center text-sm font-bold text-team-ink lg:px-3 lg:py-2.5"
              role="columnheader"
            >
              {day}
            </div>
          ))}

          {selectedMonth.days.map((day) => (
            <div
              key={day.key}
              className={[
                'min-h-[84px] rounded-[18px] px-2 py-2 lg:min-h-[118px] lg:px-3 lg:py-3',
                day.isCurrentMonth ? 'bg-white/3' : 'bg-white/[0.015] text-white/30',
                day.game
                  ? 'border border-team-green/30 bg-[linear-gradient(180deg,rgba(17,42,38,0.7),rgba(12,31,28,0.86))]'
                  : '',
              ].join(' ')}
              role="gridcell"
              aria-label={day.label}
            >
              <span className="mb-2 inline-block font-bold text-team-ink/90">{day.dayNumber}</span>
              {day.game ? (
                <div className="flex flex-col gap-1">
                  <strong className="text-sm text-team-green lg:text-base">
                    {day.game.opponent}
                  </strong>
                  <span className="text-xs text-team-slate lg:text-sm">
                    {formatDate(day.game.dateTime, {
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {schedule.map((game) => (
            <article
              key={game.dateTime}
              className={`${panelClass} flex flex-col gap-3 rounded-[22px] bg-white/4 px-5 py-5 md:flex-row md:items-center md:justify-between`}
            >
              <div>
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/80">
                  {formatDate(game.dateTime, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h3 className="mt-2 text-[clamp(1.6rem,2.4vw,2.2rem)]">{game.opponent}</h3>
              </div>
              <div className="flex flex-col items-start gap-1 md:items-end">
                <strong className="block text-team-ink">
                  {formatDate(game.dateTime, { hour: 'numeric', minute: '2-digit' })}
                </strong>
                <span className="text-team-slate">{game.location}</span>
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-widest ${
                    game.isHome
                      ? 'bg-team-green/20 text-team-green'
                      : 'bg-white/10 text-white/60'
                  }`}
                >
                  {game.isHome ? 'Home' : 'Away'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent),linear-gradient(160deg,#0c214a,#143f7e_70%,#207a4f)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-white/10',
        large ? 'h-[92px] w-[92px] rounded-[28px]' : 'h-[68px] w-[68px]',
      ].join(' ')}
      aria-hidden="true"
    >
      <img
        src={teamLogo}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  )
}

function buildCalendarDays(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1)
  const lastDay = new Date(year, monthIndex + 1, 0)
  const leadingBlankDays = firstDay.getDay()
  const totalVisibleDays = Math.ceil((leadingBlankDays + lastDay.getDate()) / 7) * 7

  return Array.from({ length: totalVisibleDays }, (_, index) => {
    const dayNumber = index - leadingBlankDays + 1
    const currentDate = new Date(year, monthIndex, dayNumber)

    return {
      key: currentDate.toISOString(),
      dayNumber: currentDate.getDate(),
      isCurrentMonth: currentDate.getMonth() === monthIndex,
      label: currentDate.toDateString(),
      date: currentDate,
    }
  })
}

function buildCalendarMonths(games: readonly ScheduleGame[], monthsAhead: number) {
  const now = new Date()
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const earliestScheduledGame = games.reduce<Date | null>((earliest, game) => {
    const gameDate = new Date(game.dateTime)
    const monthStart = new Date(gameDate.getFullYear(), gameDate.getMonth(), 1)
    if (!earliest || monthStart < earliest) {
      return monthStart
    }
    return earliest
  }, null)

  const startMonth = earliestScheduledGame && earliestScheduledGame < currentMonthStart
    ? earliestScheduledGame
    : currentMonthStart

  return Array.from({ length: monthsAhead + 1 }, (_, offset) => {
    const monthDate = new Date(startMonth.getFullYear(), startMonth.getMonth() + offset, 1)
    const year = monthDate.getFullYear()
    const monthIndex = monthDate.getMonth()

    return {
      year,
      monthIndex,
      label: formatDate(monthDate.toISOString(), {
        month: 'long',
        year: 'numeric',
      }),
      days: buildCalendarDays(year, monthIndex).map((day) => {
        const game = games.find((scheduledGame) => {
          const scheduledDate = new Date(scheduledGame.dateTime)
          return (
            scheduledDate.getFullYear() === day.date.getFullYear() &&
            scheduledDate.getMonth() === day.date.getMonth() &&
            scheduledDate.getDate() === day.date.getDate()
          )
        })

        return {
          ...day,
          game: game ?? null,
        }
      }),
    }
  })
}

function getMonthIndexForDate(
  months: ReturnType<typeof buildCalendarMonths>,
  date: Date,
) {
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const index = months.findIndex(
    (month) => month.year === year && month.monthIndex === monthIndex,
  )

  return index >= 0 ? index : 0
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
