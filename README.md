<div align="center">
  <h1>NextJS Starter Template</h1>
</div>

<div align="center">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/LobeM/next-starter?style=for-the-badge&logo=github">
  <a href="https://x.com/LobeMusonda">
    <img alt="X (formerly Twitter) URL" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com%2FLobeMusonda&style=for-the-badge&logo=x&label=%40LobeMusonda&color=%2300000000" />
  </a>
</div>

<br />

This project is a Next.js starter template built to speed up project setup with production-ready foundational blocks. It includes a modern stack so you can start building features immediately instead of wiring tooling from scratch.

## Motivation

Starting a new product often means repeating the same setup work. `next-starter` removes that overhead by bundling opinionated defaults for UI, auth, database access, code quality, and developer workflow. The goal is to help you ship faster while keeping a clean and scalable foundation.

## What's Included

- **Core stack:** Next.js 16, React 19, and TypeScript with strict project settings.
- **UI and styling:** shadcn/ui foundation, Tailwind CSS v4, theme support, animation helpers, and icon packs.
- **Authentication:** Better Auth with secure password hashing (Argon2) and API route wiring.
- **Data layer:** Drizzle ORM with PostgreSQL/Neon support, migration tooling, and seed script support.
- **Environment safety:** typed environment variable validation with `@t3-oss/env-nextjs` and Zod.
- **Code quality and DX:** ESLint 9, Prettier (with import and Tailwind sorting), Husky, lint-staged, and commitlint.

## Stack

- Linting / Code Style
  - [eslint](https://www.npmjs.com/package/eslint)
    - [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
      - [ESLint | Next.js](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
      - [ESLint + Prettier with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/eslint#prettier)
    - [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file)
      - [Bulletproof React Guide](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#file-naming-conventions)
    - [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
  - [prettier](https://www.npmjs.com/package/prettier)
    - [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
    - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
      - [Automatic Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
  - [husky](https://www.npmjs.com/package/husky)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)
    - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Environment Variables
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [dotenv-expand](https://www.npmjs.com/package/dotenv-expand)
  - [@t3-oss/env-nextjs](https://www.npmjs.com/package/@t3-oss/env-nextjs)
    - [Documentation](https://env.t3.gg/docs/nextjs)
  - [zod](https://www.npmjs.com/package/zod)
- Styles / UI
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
  - [shadcn](https://www.npmjs.com/package/shadcn)
  - [@base-ui/react](https://www.npmjs.com/package/@base-ui/react)
    - [Base UI Docs](https://base-ui.com/react/overview/quick-start)
  - [next-themes](https://www.npmjs.com/package/next-themes)
  - [@tabler/icons-react](https://www.npmjs.com/package/@tabler/icons-react)
    - [Tabler Icon Search](https://tabler.io/icons)
  - [@hugeicons/react](https://www.npmjs.com/package/@hugeicons/react)
    - [Hugeicons](https://hugeicons.com/)
- Database
  - [drizzle-orm](https://www.npmjs.com/package/drizzle-orm)
  - [@neondatabase/serverless](https://www.npmjs.com/package/@neondatabase/serverless)
  - [postgres](https://www.npmjs.com/package/postgres)
  - [drizzle-kit](https://www.npmjs.com/package/drizzle-kit)
    - [Drizzle Docs](https://orm.drizzle.team/docs/overview)
- Authentication
  - [better-auth](https://www.npmjs.com/package/better-auth)
    - [Better Auth Docs](https://www.better-auth.com/docs)
  - [@node-rs/argon2](https://www.npmjs.com/package/@node-rs/argon2)

## Not Included Yet

- Test framework setup (unit/integration/e2e).
- CI/CD pipeline and deployment configuration.

## Run Locally

**IMPORTANT: For contributions, please see [CONTRIBUTING.md](CONTRIBUTING.md).**

### Prerequisites

- Node.js 22+
- npm / yarn / pnpm / bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LobeM/next-starter.git
cd next-starter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributors

<a href="https://github.com/LobeM/next-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LobeM/next-starter" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

### Interested in Contributing?

Contributions are welcome! Please feel free to submit a Pull Request.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LobeM/next-starter&type=Date)](https://www.star-history.com/#LobeM/next-starter&Date)
