# Astro Template

This is an [Astro](https://astro.build) project demonstrating various Astro features and capabilities. This template showcases server-side rendering, framework integrations, and interactive components.

## 📚 Features Demonstrated

This project includes several example pages that demonstrate different Astro capabilities:

### Pages

- **`/`** - Homepage with basic Astro components and layout
- **`/inter`** - Interactive page with embedded data and client-side rendering

### Key Features

- ✨ **Multi-framework support** - React, Vue, and Svelte integrations
- 🔄 **Server-side rendering** - Using EdgeOne Pages adapter
- 🎨 **Component islands** - Client-side interactivity with `client:*` directives

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🛠️ Technologies Used

- [Astro](https://astro.build) - The web framework for content-driven websites
- [React](https://react.dev) - UI library
- [Vue](https://vuejs.org) - Progressive JavaScript framework
- [Svelte](https://svelte.dev) - Component framework
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [EdgeOne Pages](https://edgeone.ai/pages) - Deployment platform

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Astro Integrations](https://docs.astro.build/en/guides/integrations-guide/)

## Deploy

Deploy this project to EdgeOne Pages with one click:

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=astro-template)

More Templates: [EdgeOne Pages Templates](https://edgeone.ai/pages/templates)
