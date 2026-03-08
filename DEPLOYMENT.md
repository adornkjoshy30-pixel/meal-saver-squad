# Deployment & SEO Checklist — mealsaver.in

## Canonical Domain

The canonical domain is `https://mealsaver.in`. All `<link rel="canonical">`, `og:url`, and sitemap URLs reference this domain.

The site URL is configured in `src/config/appConfig.ts` (defaults to `https://mealsaver.in`).

## Required Redirects (308 Permanent)

Set these up in your hosting provider (Lovable, Vercel, or DNS):

1. **www → non-www** (canonical is non-www)
   ```
   www.mealsaver.in/* → https://mealsaver.in/* (308)
   ```

## Search Console / Bing Submission

1. Submit `https://mealsaver.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Verify `robots.txt` is accessible at `https://mealsaver.in/robots.txt`.

## SPA Hosting Note

Since this is a single-page app, configure your host to serve `index.html` for all routes (Lovable does this automatically).

## Environment Variables

See `.env.example` for required variables. The `.env` file is not committed to the repository.
