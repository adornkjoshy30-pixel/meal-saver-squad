# Meal Saver — Architecture

## Overview

Meal Saver is a **WhatsApp-first surplus food distribution service** operating in Kerala.
The website serves as a marketing, SEO, and lead-capture layer. All core customer interactions happen through WhatsApp channels and direct messages.

## Operating Model

```
Restaurant → sends surplus details via WhatsApp → MealSaver team
MealSaver team → verifies deal → publishes to city WhatsApp channel
Customer → sees deal in channel → reserves via WhatsApp message
Customer → visits restaurant → picks up food & pays directly
```

There is **no automated order system, no payment processing, and no marketplace logic** on the website. The site exists to:

1. Explain the service and build trust
2. Capture partner (restaurant) leads via a signup form
3. Capture customer interest via WhatsApp channel links
4. Provide SEO-optimised content for organic discovery

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + TypeScript + Tailwind CSS |
| UI Components | shadcn/ui (Radix primitives) |
| Routing | React Router (SPA) |
| SEO | react-helmet-async (`PageSEO` component) |
| Backend Functions | Supabase Edge Functions (contact form, partner signup) |
| Database | Supabase (read-only from frontend; stores contact submissions and partner leads) |
| Configuration | Centralized in `src/config/appConfig.ts` |

## Backend Functions

Two edge functions handle form submissions with server-side validation, rate limiting, and honeypot spam protection:

| Function | Purpose |
|----------|---------|
| `partner-signup` | Captures restaurant partner applications |
| `contact-submit` | Captures general enquiries |

These are **lead-capture only** — they write to the database and do not trigger automated workflows.

## Data Flow

```
[Partner Signup Form] → Edge Function → Database (restaurants table)
[Contact Form]        → Edge Function → Database (contact_submissions table)
[Deal Data]           → Database (read-only) → Frontend display components
[All user actions]    → WhatsApp redirect (channel join / reservation message)
```

## Security

- RLS enabled on all tables
- Public users have **read-only** access to deal/restaurant data
- Form submissions go through edge functions (not direct DB writes)
- Honeypot fields on all forms
- Rate limiting on edge functions

## Key Design Decisions

1. **No authentication** — Customers don't need accounts; everything flows through WhatsApp
2. **No payment processing** — All payments happen directly between customer and restaurant
3. **No merchant dashboard** — Restaurants communicate surplus details via WhatsApp to the MealSaver team
4. **Manual operations** — The team manually verifies and publishes deals; this is intentional for quality control at pilot scale
5. **Centralized config** — All public constants (URLs, emails, brand) live in `src/config/appConfig.ts`

## Component Architecture

| Component | Purpose |
|-----------|---------|
| `Hero` | Landing headline + WhatsApp CTA |
| `HowItWorks` | 3-step flow for customers and restaurants |
| `DealExample` / `DealCard` | Example deal cards (static display) |
| `CityChannels` | City-specific WhatsApp channel links |
| `WhyItMatters` | Problem statement and MealSaver's approach |
| `FAQ` | Common questions |
| `CTASection` | Final conversion section |
| `MerchantSignupForm` | Partner lead capture form |
| `WhatsAppFloat` | Floating WhatsApp CTA button |
| `PageSEO` | Per-page meta tags, OG, canonical URLs |

## File Structure

```
src/
├── config/appConfig.ts    # Single source of truth for all public config
├── components/            # Reusable UI and section components
├── pages/                 # Route-level page components
├── data/                  # Static data (blog posts)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and validation schemas
└── integrations/supabase/ # Auto-generated Supabase client & types
```
