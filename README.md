# Agastya Katyayani Private Limited — Website

Marketing website for Agastya Katyayani Private Limited (construction & infrastructure, mining & minerals, consultancy & advisory, trading & supply).

Live domain: [agastyakatyayani.com](https://agastyakatyayani.com) · Contact: contact@agastyakatyayani.com

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Editing content

All company copy lives in [`lib/site.ts`](lib/site.ts) (name, email, description, the four service verticals). Page sections are in [`app/page.tsx`](app/page.tsx).

## Contact form

The form at `#contact` opens the visitor's email client pre-filled, addressed to `contact@agastyakatyayani.com`. To capture submissions server-side instead, wire the form in [`components/contact-form.tsx`](components/contact-form.tsx) to a service such as Formspree or Resend.

## Deploying on Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no config needed.
2. Buy the domain: Project → **Settings → Domains** → search `agastyakatyayani.com` → purchase. DNS is configured automatically.
3. Set up the `contact@agastyakatyayani.com` mailbox with your email provider (Vercel sells domains but not mailboxes — use Zoho Mail (free tier), Google Workspace, etc., and add the MX records they give you under the domain's DNS settings in Vercel).
