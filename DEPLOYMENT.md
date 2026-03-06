# Deployment & SEO Checklist — mealsaver.in

## Canonical Domain

The canonical domain is `https://mealsaver.in`. All `<link rel="canonical">`, `og:url`, and sitemap URLs reference this domain.

The env variable `VITE_SITE_URL` controls the base URL (defaults to `https://mealsaver.in`).

## Required Redirects (308 Permanent)

Set these up in your hosting provider (Vercel, Lovable, or DNS):

1. **Preview → Production**
   ```
   meal-saver-squad.vercel.app/* → https://mealsaver.in/* (308)
   ```

2. **www → non-www** (pick one canonical; we use non-www)
   ```
   www.mealsaver.in/* → https://mealsaver.in/* (308)
   ```

## Search Console / Bing Submission

1. Submit `https://mealsaver.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Verify `robots.txt` is accessible at `https://mealsaver.in/robots.txt`.

## SPA Hosting Note

Since this is a single-page app, configure your host to serve `index.html` for all routes (Lovable does this automatically).
