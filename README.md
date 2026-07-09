# Mohammad Chand — Portfolio

A dark, glassmorphic portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The
signature idea: the hero and every section eyebrow are framed as real REST endpoints
(`GET /skills`, `POST /contact`...) — a nod to the fact that this is a backend developer's site.

Live demo placeholder: `https://mohammadchand997.github.io/portfolio/`

---

## 1. Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          ← your resume, served for the Download button
│   └── robots.txt
├── src/
│   ├── assets/              (put images here if you add any)
│   ├── components/          all UI sections
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── utils/
│   │   └── data.js          ← ALL site copy lives here (name, skills, jobs, projects)
│   ├── styles/
│   │   └── index.css        Tailwind + design tokens (glass, colors, animations)
│   ├── App.jsx
│   └── main.jsx
├── index.html                SEO meta tags live here
├── tailwind.config.js        color palette, fonts, animation tokens
├── vite.config.js            base path for GitHub Pages
└── package.json
```

**To change any text on the site** — your name, job history, skills, project descriptions —
edit `src/utils/data.js`. You don't need to touch the components themselves.

---

## 2. Run it locally

### Step 1 — Install Node.js
Download the **LTS** version from [nodejs.org](https://nodejs.org) and install it. Verify:
```bash
node -v
npm -v
```

### Step 2 — Create a GitHub account
Sign up at [github.com](https://github.com) if you don't have an account yet.

### Step 3 — Install Git
Download from [git-scm.com](https://git-scm.com/downloads) and verify:
```bash
git --version
```

### Step 4 — Open the project in VS Code
Unzip the project folder, then in VS Code: `File → Open Folder…` and select it.

### Step 5 — Install dependencies
In the VS Code terminal, inside the project folder:
```bash
npm install
```

### Step 6 — Run the dev server
```bash
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`) in your browser.

### Step 7 — Verify locally
Check every section scrolls smoothly, the mobile menu (resize the window or use dev tools'
device toolbar) works, the resume preview loads, and the contact form opens your mail client
on submit.

---

## 3. Push the project to GitHub

### Step 8 — Create a repository
On GitHub, click **New repository**. Name it (e.g. `portfolio`). Leave it empty — no README,
no `.gitignore` (this project already has one).

### Step 9 — Initialize Git locally
In the project folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
```

### Step 10 — Connect it to GitHub
```bash
git remote add origin https://github.com/mohammadchand997/portfolio.git
git branch -M main
git push -u origin main
```
Replace `mohammadchand997` and `portfolio` with your actual GitHub username and repo name.

---

## 4. Deploy to GitHub Pages

### Step 11 — Install gh-pages
Already listed in `package.json`, but if starting fresh:
```bash
npm install gh-pages --save-dev
```

### Step 12 — Set the correct paths
This project uses `portfolio` as a placeholder in **three places** — update all of them to
your real repo name (or to `/` if deploying to a `mohammadchand997.github.io` root repo):

1. `vite.config.js` → `base: '/portfolio/'`
2. `package.json` → `"homepage": "https://mohammadchand997.github.io/portfolio"`
3. `index.html` → the `canonical`, `og:url` meta tags

### Step 13 — Deploy
```bash
npm run deploy
```
This runs `predeploy` (builds the site) then pushes the `dist/` folder to a `gh-pages` branch.

### Step 14 — Enable GitHub Pages
On GitHub: **Repository → Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages`, folder `/ (root)`
- Save

### Step 15 — Visit your site
After a minute or two:
```
https://mohammadchand997.github.io/portfolio/
```

---

## 5. Updating the site after changes

Every time you edit something (copy, styling, a new project):
```bash
git add .
git commit -m "Update projects section"
git push
npm run deploy
```
`git push` updates your source code on `main`; `npm run deploy` rebuilds and republishes the
live site on `gh-pages`. They're independent — pushing to `main` alone does **not** update the
live site, you need `npm run deploy` too (see the CI/CD option below to automate this).

### Automate deployment with GitHub Actions (optional)
Instead of running `npm run deploy` manually, you can auto-deploy on every push to `main`.
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
After adding this, every `git push` to `main` rebuilds and republishes automatically — no more
manual `npm run deploy`.

---

## 6. Custom domain

1. Buy a domain (Namecheap, Google Domains, GoDaddy, etc).
2. In your DNS provider, add either:
   - An **A record** pointing `@` to GitHub's IPs: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`, or
   - A **CNAME record** pointing a subdomain (e.g. `www`) to `mohammadchand.github.io`.
3. In the repo, create `public/CNAME` containing just your domain, e.g.:
   ```
   www.mohammadchand997.dev
   ```
4. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once it's
   available (can take a few hours to provision).

---

## 7. Add Google Analytics

1. Create a property at [analytics.google.com](https://analytics.google.com) and copy your
   Measurement ID (`G-XXXXXXXXXX`).
2. Add this to `index.html`, just before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
3. Redeploy (`npm run deploy`). Traffic will appear in the GA dashboard within a day.

---

## 8. Improve SEO further

- `index.html` already has title, description, keywords, canonical, Open Graph, and Twitter
  card tags — update the copy and swap `mohammadchand997`/`portfolio` for the real values.
- Add a real `public/og-image.png` (1200×630px) so social shares show a preview image.
- Submit your URL to [Google Search Console](https://search.google.com/search-console) and
  request indexing.
- Add a `public/sitemap.xml` listing your page and submit it in Search Console.
- Keep heading order sequential (one `<h1>`, then `<h2>`s per section — already done).
- Since this is a single-page app, consider prerendering or adding structured data
  (`schema.org/Person`) in `index.html` if you want richer search snippets.

---

## 9. Connect live GitHub stats

`src/components/GithubSection.jsx` uses the free
[github-readme-stats](https://github.com/anuraghazra/github-readme-stats) and
[ghchart](https://github.com/2016rshah/githubchart-api) services — no API key needed.

Open that file and replace:
```js
const GH_USER = 'mohammadchand997'
```
with your real GitHub username. The stats card, top-languages card, and contribution graph
will update automatically on page load.

---

## 10. Connect LinkedIn (and other links)

Open `src/utils/data.js` and update:
```js
export const profile = {
  ...
  github: 'https://github.com/mohammadchand997',
  linkedin: 'https://linkedin.com/in/mohammadchand997',
  ...
}
```
These links are used in the Navbar, Hero, Contact, and Footer automatically.

---

## 11. Upload / replace your resume

Replace `public/resume.pdf` with your own file, **keeping the same filename** (`resume.pdf`),
so the Download button and the preview iframe in the Resume section keep working with no
code changes. If you rename it, update the two `href="/resume.pdf"` references in
`src/components/Hero.jsx` and `src/components/ResumeSection.jsx`.

---

## 12. Replace the dummy projects with real ones

Open `src/utils/data.js` and edit the `projects` array:
```js
export const projects = [
  {
    title: 'Your Project Name',
    endpoint: 'POST /projects/your-slug',
    description: 'One or two sentences on what it does and the impact it had.',
    tags: ['Tech', 'Stack', 'Used'],
  },
  // ...
]
```
To make a card link to a real repo or live demo, open `src/components/Projects.jsx` and add an
`href: 'https://github.com/...'` field per project, then swap the hard-coded `href="#"` on the
`<motion.a>` for `project.href`.

---

## 13. Wire up the contact form (optional)

Right now, submitting the form opens the visitor's email client with a pre-filled message
(via `mailto:`) — it works with zero setup, but requires the visitor to have a mail client
configured. For an in-page submission that emails you directly, connect a form backend like
[Formspree](https://formspree.io) (free tier available):

1. Create a Formspree form and copy its endpoint URL.
2. In `src/components/Contact.jsx`, replace the `handleSubmit` function with:
   ```js
   const handleSubmit = async (e) => {
     e.preventDefault()
     await fetch('https://formspree.io/f/<your-form-id>', {
       method: 'POST',
       headers: { Accept: 'application/json' },
       body: new FormData(e.target),
     })
     // show a success state here
   }
   ```

---

## Tech stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · React Icons

## License

Personal project — customize freely.
