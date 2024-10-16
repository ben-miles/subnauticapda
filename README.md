# SubnauticaPDA

<img src=".github/images/screenshot-home.png" width="200" /> <img src=".github/images/screenshot-items.png" width="200" /> <img src=".github/images/screenshot-list.png" width="200" /> <img src=".github/images/screenshot-notes.png" width="200" />

A second-screen companion app for the game "Subnautica." Turn your phone or tablet into an expanded version of the in-game PDA, eliminating the need to pause while looking for crafting or location info.

See it live here: [SubnauticaPDA.dev](https://subnauticapda.dev)

**UPDATE:** December 13, 2022 - [Subnautica has been updated](https://unknownworlds.com/en/news/subnautica-living-large-update-released), and now features the ability to pin crafting recipes to your HUD. The lack of this feature was the reason I originally built this app, but I've since updated it to provide additional quality-of-life improvements, like a search-as-you-type filter for crafting recipes.

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-58c4dc?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Github Actions](https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Github Pages](https://img.shields.io/badge/Github%20Pages-2088FF?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)

## Installation

1. Clone this repository and provision a web server for the project.
2. Make sure [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com) are installed.
3. In the project's root directory, run `npm install` in the terminal.

## Development

- It's recommended to use [VSCode](https://code.visualstudio.com/).
- For a live preview of the source code, run `npm run dev`.

## Deployment

- This repo uses GitHub Actions (with [this Workflow by Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)) to automatically build and deploy to GitHub Pages whenever new code is pushed to the `master` branch. 
- You can also build locally by running `npm run build`, and you can preview that build with `npm run preview`.

## Special Thanks

- Most data sourced from [Subnautica Wiki on Fandom](https://subnautica.fandom.com/)
- PDA image: Modified version of ["PDA" by UnderseaDee](https://subnautica.fandom.com/wiki/PDA?file=PDA.png)
- Item images: Extracted from game files using [UABE](https://github.com/SeriousCache/UABE)
- Background video: Modified version of ["Underwater light filters down through blue water" by raymond](https://www.vecteezy.com/video/14398073-underwater-light-filters-down-through-blue-water-loop)
- Alert icon: ["Alert" by Gautam Arora](https://thenounproject.com/term/alert/574450/)
- Eye icon: ["Eye" by Poups](https://thenounproject.com/term/eye/3350406/)
- GitHub icon: ["Octicon" by GitHub](https://github.com/)
- Help icon: ["help" by Styfico](https://thenounproject.com/icon/help-6856453/)
- This project is tested with [BrowserStack](https://www.browserstack.com/)
