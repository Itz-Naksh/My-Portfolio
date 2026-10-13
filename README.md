# Fathima Naksha Banu | Portfolio

**Live site:** [my-portfolio-naksh.vercel.app](https://my-portfolio-naksh.vercel.app)

Full-Stack Developer & Accounting Technician (MAAT). A personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**. No backend: the contact form opens the visitor's email app.

---

## 1. Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
npm run build      # production build (checks types too)
npm start          # serve the production build
npm run lint       # lint the code
```

---

## 2. Edit your details

**All your content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** You don't need to touch any component.

| Export           | What it controls                                                          |
| ---------------- | ------------------------------------------------------------------------- |
| `personal`       | Name, initials, role, typing phrases, location, tagline, bio, email, URLs |
| `socials`        | GitHub / LinkedIn / email icons (hero, contact, footer)                   |
| `stats`          | The three stat cards in the About section                                 |
| `skillGroups`    | Frontend / Backend / Tools skill cards                                    |
| `projects`       | Project cards (leave out `demoUrl` or `githubUrl` to hide that button)    |
| `timeline`       | Experience & education (newest first; `type` is `"work"` or `"education"`) |
| `certifications` | Certification cards (add an optional `url` to make a card a link)         |
| `navLinks`       | Navbar links                                                              |

Also update `personal.siteUrl` to your real domain once deployed. It's used for SEO and social-share previews.

### Replace the placeholder files

| File                                   | Replace with                                       |
| -------------------------------------- | -------------------------------------------------- |
| `public/images/avatar.svg`             | Your avatar (swap for a photo any time, portrait ~4:5) |
| `public/images/paylanka/`, `cyberaware.png`, `laundry-flow-pro.png` | Project screenshots (16:10 ratio looks best) |
| `public/resume.pdf`                    | Your resume (keep the same file name)              |
| `src/app/icon.svg`                     | Favicon: change the `FN` initials inside the file  |

If you change a file name or extension (e.g. `profile.svg` → `profile.jpg`), update the matching path in `portfolio.ts`.
Once all images are JPG/PNG/WebP, you can remove the `images` SVG settings from `next.config.ts`.

The social-share image (`src/app/opengraph-image.tsx`) is generated automatically from your name, role and tagline.

### Colours & fonts

Theme colours are CSS variables at the top of [`src/app/globals.css`](src/app/globals.css) (`@theme` block). Fonts (Poppins + Inter) are set up in [`src/app/layout.tsx`](src/app/layout.tsx).

---

## 3. Contact form

The form needs no setup or backend. When a visitor clicks **Send**, their email app opens with the message addressed to the email in `personal.email`.

---

## 4. Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New… → Project** and **Import** your `my-portfolio` repository.
4. Vercel detects Next.js automatically; leave the build settings as they are.
5. Click **Deploy**. In about a minute you'll get a live URL like `my-portfolio.vercel.app`.
6. Update `personal.siteUrl` in `portfolio.ts` to that URL (or your custom domain), commit, and push. Vercel redeploys automatically on every push.
7. *(Optional)* **Project → Settings → Domains** to add a custom domain.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, SEO metadata, skip link
│   ├── page.tsx              # assembles all sections
│   ├── globals.css           # theme colours + base styles
│   ├── icon.svg              # favicon
│   └── opengraph-image.tsx   # social share image
├── components/
│   ├── sections/             # Navbar, Hero, About, Skills, Projects, Experience,
│   │                         # Certifications, Contact, Footer
│   ├── ui/                   # reusable pieces: SectionHeading, ProjectCard, SkillCard,
│   │                         # TimelineItem, CertificationCard, StatCard, Reveal, …
│   └── MotionProvider.tsx    # makes animations respect reduced-motion
├── data/portfolio.ts         # ← all your content
└── lib/styles.ts             # shared button styles
```
