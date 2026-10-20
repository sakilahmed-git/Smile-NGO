# SMILE NGO — Digital Platform for Community Impact

> A mobile-first web platform intended to help an NGO present its mission, share community work, and give supporters ways to engage.

📦 **Repository:** [Smile-NGO](https://github.com/sakilahmed-git/Smile-NGO)  
🌐 **Public demo:** No verified live URL is currently recorded in this repository.

## About the project

SMILE NGO is being developed as a digital home for a non-profit organisation: a place to communicate its mission, showcase projects and activities, publish updates, and help visitors discover ways to participate.

The codebase is organised as a modern web application, with separate areas for public pages, authentication, administration, reusable UI, and data-access services.

## Why this project matters

- **Real-world use case:** designed around an organisation's outreach and community engagement.
- **Modern application architecture:** separates routes, reusable components, hooks, services, types, providers, and shared utilities.
- **Content and outreach foundations:** structured areas cover projects, events, gallery, blogs, testimonials, volunteers, and newsletters.
- **Donation workflow concept:** documents a UPI QR → payment screenshot submission → administrator verification flow. This is not a payment-gateway integration.
- **PWA direction:** includes tooling for a progressive web app experience.

## Technology stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS and shadcn/ui
- Firebase (Auth, Firestore, Storage)
- Cloudinary
- Framer Motion, GSAP, and Lenis
- React Hook Form and Zod
- Progressive Web App (PWA) tooling

## Current status

| Area | Status |
|---|---|
| Repository implementation | Architecture/skeleton, according to the previous README |
| Public live demo | No verified URL recorded |
| Admin and data workflows | Must be verified in the running application before describing as complete |
| Online payment processing | Not provided by the documented screenshot-verification flow |

This repository is currently best described as a structured foundation, not a fully implemented production platform. Update this section when the deployed build and key workflows have been verified.

## Project structure

- `src/app` — marketing, admin, authentication, and API routes
- `src/components` — reusable interface components
- `src/services` — Firebase and Cloudinary data-access layer
- `src/hooks` — domain-specific React hooks
- `src/types` — shared TypeScript interfaces
- `src/providers` — application-wide providers
- `src/lib` — utilities, validation, SEO, and accessibility helpers

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Check the project files and environment example for any required configuration before enabling backend services.

## Security notes

Never commit service credentials, private environment files, or personal donor data. Before treating administrative or donation workflows as production-ready, verify access controls, abuse protection, data handling, backups, and the deployed implementation.
