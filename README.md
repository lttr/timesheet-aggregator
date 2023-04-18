# Timesheet aggregator

_A prototype application build with Nuxt framework._

## Proof of concept for a well engineered application build with modern tooling (2023)

By _well engineered_ I mean:

1. do something useful and be able to do it even after several years of
   development
2. conforms to a set of rules that are automatically checked (formatting,
   linting, ...)
3. is build on top of solid foundations
4. is devided into vertical modules (by feature)
5. can be deployed in minutes
6. does not suck in browser (is fast to load, fast to navigate, works on an old
   mobile device, supports light and dark OS preferences, is at least somewhat accessible)

By _modern tooling_ I mean (in 2023):

- nuxt 3
- nuxt 3 layers, modules
- pinia, vue-use
- css, post-css, open-props
- pnpm, turborepo
- prettier, eslint, stylelint, husky, lint-staged
- histoire

## What the app does

### Functional requirements

- I can see how many work hours is the baseline in a given month and how many
  have I worked (logged)
- The baseline is configurable (e. g. 8 vs 6 working hours per day)
- I can drop a json file with logged time into it and it will display a table
  with logged hours

### Non functional requirement

- lighthouse?

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
