# Pramod Baghel — Portfolio Website

A modern, production-ready single-page portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Inspired by [sashikumar.dev](https://www.sashikumar.dev/) with a custom emerald/teal theme.

## Features

- Dark/Light mode toggle with `localStorage` persistence
- Typing effect hero section
- Animated stats with count-up on scroll
- Responsive design (mobile, tablet, desktop)
- Sticky navbar with scroll-aware background
- Smooth scroll navigation
- Framer Motion animations
- Contact form via Formspree (no backend required)
- Floating "Back to Top" button
- SEO meta tags

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) after running `npm run dev`.

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/     # React UI components
│   ├── data/           # Content data (experience, projects, skills)
│   ├── hooks/          # Custom hooks (dark mode, typing, count-up)
│   ├── styles/         # Global CSS + Tailwind
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Personal Info
Edit `src/data/personalInfo.js` for name, contact, stats, education, and languages.

### Experience / Projects / Skills
Edit files in `src/data/`:
- `experienceData.js`
- `projectsData.js`
- `skillsData.js`

### Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. Update the endpoint in `src/components/Contact.jsx`:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Color Theme
Colors are defined in `tailwind.config.js` under `theme.extend.colors`.

## Deployment

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repository
4. Vercel auto-detects Vite — keep defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

Or use the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Or drag-and-drop the `dist` folder after running `npm run build`.

### Environment Variables

No environment variables are required for basic deployment. If you switch to EmailJS instead of Formspree, add your keys as env vars in your hosting dashboard.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling + dark mode |
| Framer Motion | Animations |
| Lucide React | Icons |
| Formspree | Contact form |

## License

MIT — feel free to use this template for your own portfolio.
