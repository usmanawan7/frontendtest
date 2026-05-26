# daniel-harper-rf-ui

RainFocus UI Challenge — Event Setup Guide.

## Open the pre-built version

The static export lives in `build/`. Either open `build/index.html` directly,
or serve it (recommended, since browsers restrict relative asset URLs over
`file://`):

```
npx serve build
```

## Develop locally

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./build
```

## Stack

Next.js 15 (App Router), React 19, SCSS modules. No Tailwind, no Bootstrap.

## Responsive

| Width | Layout |
| --- | --- |
| ≥ 1100 px | Sidebar + 3-column grids |
| 769–1099 px | Sidebar + 2-column grids |
| ≤ 768 px | Sidebar collapses to a drawer (hamburger), single column |
| ≤ 320 px | Stays usable, header stacks |

## AI assistance

Used Claude as a pair to scaffold the Next.js boilerplate, look up Figma
spec values, and accelerate SCSS module setup. Design interpretation,
asset choices, spacing/typography decisions, and refinements against the
Figma were driven manually.
