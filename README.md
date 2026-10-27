# Socialify Landing Page — React + Vite

## Run locally
1. Install Node.js (20.19+ or 22.12+ recommended for Vite 7).
2. Extract this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL printed by Vite.

## Included
- React + Vite, JavaScript (no TypeScript)
- Framer Motion, Lucide icons
- Responsive single-page landing page: navbar, hero, about, services, why us, process, showcase, CTA, contact, footer, back-to-top
- Reduced-motion support, keyboard focus states, responsive breakpoints
- Client-side contact form demo with honeypot

## Before production
- Replace stock imagery with client-approved brand images.
- Update contact details and Instagram/WhatsApp links.
- Connect the contact form to Formspree, Web3Forms, EmailJS, or a backend. The current form intentionally does not send messages.
- Add the client's actual logo assets, favicon, sitemap.xml, robots.txt, and JSON-LD.
- Check image licensing, alt text, performance, and contrast before launch.

## Project structure
src/
  App.jsx
  main.jsx
  styles.css
  data/content.js
  components/
    About.jsx
    BackToTop.jsx
    BrandMark.jsx
    Contact.jsx
    CtaBanner.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Process.jsx
    Reveal.jsx
    Services.jsx
    Showcase.jsx
    WhyUs.jsx
