# Bad News Bair Huggers

A fun side project website for the best work softball team.

🥎 **Live site:** [mccabe-david.github.io/BadNewsBairHuggers](https://mccabe-david.github.io/BadNewsBairHuggers/)

## What is this?

The Bad News Bairs are a work softball team. This site tracks their schedule, roster, and recaps so the team has somewhere to point people that isn't a group chat.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed via [GitHub Pages](https://pages.github.com/)

## Development

```bash
cd app
npm install
npm run dev
```

## Updating content

All site content lives in [`app/src/siteData.ts`](app/src/siteData.ts):

- **Schedule** — add or edit games in the `schedule` array
- **Roster** — add or edit players in the `roster` array
- **Last game story** — update `lastGameStory` after each game
- **Instagram posts** — update `instagramPosts` with the latest embed URLs
