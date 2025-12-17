# Meal Saver - Frontend Architecture

## Overview

This is a **frontend-only MVP** designed as a temporary landing page. It is intentionally decoupled from any backend logic to allow easy replacement in the future.

## Core Principles

### 1. No Business Logic
- The website contains no business logic
- All complex operations are delegated to external services (WhatsApp, future API)

### 2. No Authentication
- No user authentication system on the frontend
- Authentication will be handled by a separate backend API in the future

### 3. Read-Only Data Access
- All deal/restaurant data displayed is read-only
- Database has RLS policies blocking all public write operations
- Only admin/service roles can modify data (via future backend)

### 4. WhatsApp-First Interaction
- **"Grab Now"** buttons redirect to WhatsApp with pre-filled message
- **"Join as Merchant"** form submits via WhatsApp, not database

### 5. Modular Components
- Components are simple, focused, and easily replaceable
- No tight coupling to any specific backend implementation
- Props-based data flow for easy integration with future APIs

## Component Responsibilities

| Component | Purpose | Backend Dependency |
|-----------|---------|-------------------|
| `DealCard` | Display deal info | None (props only) |
| `DealDetails` | Full deal view | None (props only) |
| `MerchantSignupForm` | Collect merchant info | WhatsApp redirect only |
| `OrderMethodBadge` | Display order type | None (props only) |

## Data Flow

```
[Database] → Read-Only → [Frontend Display]
                              ↓
                    [User Action (Grab/Signup)]
                              ↓
                    [WhatsApp Redirect]
```

## Future Integration Points

When adding a proper backend:

1. **Deals API**: Replace static/fetched data with API calls
2. **Authentication**: Add auth provider (Supabase Auth, etc.)
3. **Order System**: Replace WhatsApp with order API
4. **Merchant Portal**: Separate admin dashboard with DB write access

## Security

- RLS enabled on all tables
- Public users have READ-ONLY access
- All writes blocked for `anon` and `authenticated` roles
- Only `service_role` can modify data

## SEO & Performance Focus

- Server-side rendering ready components
- Semantic HTML structure
- Optimized images with lazy loading
- Minimal JavaScript bundle
