<div align="center">

<br />

```
██████╗  █████╗ ███╗   ██╗ ██████╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝
██████╔╝███████║██╔██╗ ██║██║
██╔══██╗██╔══██║██║╚██╗██║██║
██████╔╝██║  ██║██║ ╚████║╚██████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝
```

### **High-Fashion Horology — Digital Atelier**

*A full-stack luxury ecommerce platform built for the connoisseur of precision.*

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br />

> BANC is a production-grade luxury watch ecommerce platform. Every interaction — from the first scroll to the final order confirmation — is designed to feel considered, unhurried, and deliberate. Built on the modern React 19 / Next.js 16 App Router, a hardened Express 5 API, and MongoDB Atlas persistence.

<br />

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Demo Account](#demo-account)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Design System](#design-system)
- [Performance & UX](#performance--ux)
- [Single Page Application Behaviour](#single-page-application-behaviour)
- [Security Features](#security-features)
- [Engineering Challenges](#engineering-challenges)
- [Known Limitations](#known-limitations)
- [Future Roadmap](#future-roadmap)
- [Deployment](#deployment)
- [Author](#author)

---

## Overview

BANC (an atelier of precision timepieces) exists where Milanese craftsmanship meets modern digital commerce. The platform handles the complete acquisition journey — product discovery, detailed inspection, cart management, authenticated checkout, address management, and post-purchase order archiving — wrapped in a cinematic, monochromatic UI that mirrors the restraint of the objects it sells.

The codebase is split into two fully-typed TypeScript applications: a **Next.js 16 App Router frontend** communicating with a **REST API built on Express 5**, backed by **MongoDB Atlas** with Mongoose schema validation throughout.

---

## Screenshots

> *Replace each placeholder below with actual screenshots or screen recordings.*

<br />

**Homepage — Split-Panel Hero**
```
┌───────────────────────────────────────────────────────────┐
│  BANC            COLLECTIONS  MENS  WOMENS  JOURNAL  🔍 ☀ 👤 🛍 │
├────────────────────────────┬──────────────────────────────┤
│                            │                              │
│  BANC HOROLOGY — ATELIER   │                              │
│                            │    [ Hero Watch Image ]      │
│  AETERNA PRECISION         │    grayscale · full bleed    │
│                            │    gradient overlay          │
│  [ Explore Heritage ]      │                              │
│  [ View Spec        ]      │                              │
│                            │    Calibre ——————            │
└────────────────────────────┴──────────────────────────────┘
```

**Navbar — Mega Menu (Collections)**
```
┌───────────────────────────────────────────────────────────┐
│  BANC     [ COLLECTIONS ]   MENS   WOMENS   JOURNAL        │
├───────────────────────────────────────────────────────────┤
│  New Arrivals     │  By Category    │  [Editorial Image]  │
│  ─────────────    │  ─────────────  │                     │
│  Aeterna Series   │  Mens           │  FEATURED           │
│  Meridian I       │  Womens         │  Meridian Noir      │
│  Calibre 01       │  Limited Ed.    │  ──────────────     │
│                   │  Bespoke        │  Shop Now →         │
└───────────────────────────────────────────────────────────┘
```

**Collections Grid — Category Filter**
```
┌───────────────────────────────────────────────────────────┐
│  BANC HOROLOGY — COLLECTION                               │
│  THE CATALOGUE                                            │
│                                                           │
│  Filter by: [ All ▾ ]   Mens   Womens   Limited           │
│  ─────────────────────────────────────────────────────── │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐            │
│  │  [Watch]  │  │  [Watch]  │  │  [Watch]  │            │
│  │ grayscale │  │ grayscale │  │ grayscale │            │
│  │           │  │           │  │           │            │
│  │ AETERNA I │  │ MERIDIAN  │  │ CALIBRE 0 │            │
│  │ Mens      │  │ Womens    │  │ Limited   │            │
│  │ €12,500   │  │ €9,800    │  │ €24,000   │            │
│  └───────────┘  └───────────┘  └───────────┘            │
└───────────────────────────────────────────────────────────┘
```

**Product Detail — Gallery + Info**
```
┌───────────────────────────────────────────────────────────┐
│  ┌────────────────────┐  │  AETERNA I                     │
│  │                    │  │  Mens · Calibre 001            │
│  │   [ Main Image ]   │  │                                │
│  │   high-res watch   │  │  €12,500                       │
│  │                    │  │                                │
│  └────────────────────┘  │  ─────────────────────────    │
│  [img1] [img2] [img3]    │  [ Add to Collection ]        │
│                          │                                │
│                          │  ▸ Materials & Construction   │
│                          │  ▸ Movement Specifications    │
│                          │  ▸ Dimensions & Water Resist. │
│                          │  ▸ Warranty & Service         │
└──────────────────────────┴────────────────────────────────┘
  ─────────────────────────────────────────────────────────
  CURATED ALTERNATIVES
  [Watch 1]  [Watch 2]  [Watch 3]
```

**Shopping Cart**
```
┌───────────────────────────────────────────────────────────┐
│  SHOPPING CART                                            │
│  ─────────────────────────────────────────────────────── │
│  ┌──────┐  AETERNA I                         €12,500     │
│  │[img] │  Mens                                          │
│  │      │                     [ − ] 01 [ + ]  [ Remove ] │
│  └──────┘                                                │
│  ─────────────────────────────────────────────────────── │
│              │  SUMMARY                                   │
│              │  Subtotal           €12,500                │
│              │  Shipping           Complimentary          │
│              │  VAT (Included)     €2,083                 │
│              │  ─────────────────────────────            │
│              │  Total              €12,500                │
│              │                                            │
│              │  [ Proceed to Checkout ]                   │
│              │  [ Clear Cart          ]                   │
└──────────────┴────────────────────────────────────────────┘
```

**Checkout Flow**
```
┌───────────────────────────────────────────────────────────┐
│  BANC HOROLOGY                                            │
│  CHECKOUT                                                 │
│  ─────────────────────────────────────────────────────── │
│  01 — Delivery Address       │  ORDER SUMMARY             │
│                               │  ┌──────┐ AETERNA I      │
│  ╔═══════════════════╗        │  │ [img]│ Qty 1  €12,500 │
│  ║ ● HOME            ║        │  └──────┘                │
│  ║   12 Baker Street ║        │  ──────────────────────  │
│  ╚═══════════════════╝        │  Subtotal      €12,500   │
│  ○ OFFICE                     │  Shipping      Free      │
│    5 Via Montenapoleone        │  VAT (incl)    €2,083   │
│                               │  ──────────────────────  │
│  + Add New Address            │  Total         €12,500   │
│  ─────────────────────────── │                           │
│  02 — Shipping Method         │  [ Complete Purchase ]   │
│  ● Complimentary Express      │                           │
│  ─────────────────────────── │  🔒 256-bit SSL secured   │
│  03 — Payment Details         │                           │
│  Cardholder Name ____________ │                           │
│  Card Number  0000 0000 0000  │                           │
│  Expiry  MM/YY    CVV  •••    │                           │
└───────────────────────────────┴───────────────────────────┘
```

**Order Confirmation**
```
┌───────────────────────────────────────────────────────────┐
│  [ watch movement bg — full bleed, blurred ]              │
│                                                           │
│            ╭──────────────────╮                           │
│            │   ◯ checkmark ◯  │  ← SVG stroke animation  │
│            ╰──────────────────╯                           │
│                                                           │
│              ● Order Verified                             │
│                                                           │
│           PURCHASE COMPLETE                               │
│    Your timepiece has been reserved.                      │
│                                                           │
│  ┌─────────────────────────────────────────────┐         │
│  │  Order Reference      Status                │         │
│  │  BN-2026-A1B2C3       confirmed             │         │
│  │  ─────────────────────────────────────────  │         │
│  │  Aeterna I × 1                    €12,500   │         │
│  │  Total                            €12,500   │         │
│  │  ─────────────────────────────────────────  │         │
│  │  Delivery: 12 Baker St, London, SW1A 1AA    │         │
│  └─────────────────────────────────────────────┘         │
│                                                           │
│  [ View My Collection ]    [ Continue Shopping ]          │
└───────────────────────────────────────────────────────────┘
```

**Account — Profile Tab**
```
┌───────────────────────────────────────────────────────────┐
│  BANC HOROLOGY — MEMBER                                   │
│  HARRISON WELLS                            Titanium Tier  │
│  ─────────────────────────────────────────────────────── │
│  [ Profile ]    Orders                                    │
│  ─────────────────────────────────────────────────────── │
│  PERSONAL DETAILS                        [ Edit Profile ] │
│  Name: Harrison Wells                    [ Sign Out     ] │
│  Email: h.wells@banc.io  (read-only)                     │
│  Member Since: 2026                                       │
│  ─────────────────────────────────────────────────────── │
│  ADDRESSES                                                │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │ HOME             │  │ OFFICE           │  [✎] [✕]    │
│  │ 12 Baker Street  │  │ 5 Via Montenapol.│             │
│  │ London, SW1A 1AA │  │ Milano, 20121    │             │
│  └──────────────────┘  └──────────────────┘              │
│  + Add Address                                            │
└───────────────────────────────────────────────────────────┘
```

**Account — Orders Tab**
```
┌───────────────────────────────────────────────────────────┐
│  YOUR ACQUISITIONS                                        │
│  THE VAULT                                                │
│  ─────────────────────────────────────────────────────── │
│  ┌───────────────────────────────────────────────────┐   │
│  │  Order Reference    Date           Total          │   │
│  │  BN-2026-A1B2C3     26 May 2026    €12,500        │   │
│  │  ────────────────────────────────────────────── │   │
│  │  AETERNA I                                 × 1   │   │
│  └───────────────────────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────┐   │
│  │  BN-2026-XR9K2      12 Apr 2026    €9,800         │   │
│  │  ────────────────────────────────────────────── │   │
│  │  MERIDIAN WOMENS                           × 1   │   │
│  └───────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘
```

**Mobile Navigation**
```
┌─────────────────────────┐
│  BANC             🔍  🛍 │
│  ═══                    │
├─────────────────────────┤
│  COLLECTIONS          ▸ │
│  MENS                 ▸ │
│  WOMENS               ▸ │
│  JOURNAL              ▸ │
│  ─────────────────────  │
│  Account                │
│  ─────────────────────  │
│  ☀ Light Mode           │
├─────────────────────────┤
│  (accordion expands ↓)  │
│  COLLECTIONS            │
│  › New Arrivals         │
│  › Mens                 │
│  › Womens               │
│  › Limited Edition      │
└─────────────────────────┘
```

**About / Journal Page**
```
┌───────────────────────────────────────────────────────────┐
│  [ Full-bleed Milan skyline — grayscale ]                 │
│                                                           │
│  BANC HOROLOGY — EST. MMXXIV                              │
│  THE ATELIER                                              │
│  ─────────────────────────────────────────────────────── │
│  [ Portrait image ]   The BANC atelier was founded on    │
│                       a single conviction: that a watch   │
│                       is not merely an instrument of      │
│                       time but an argument for precision. │
│  ─────────────────────────────────────────────────────── │
│  id="craftsmanship"                                       │
│  CRAFTSMANSHIP                                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ Material    │ │ Assembly    │ │ Finishing   │        │
│  │ Rigour      │ │ Precision   │ │ & Patina    │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
│  ─────────────────────────────────────────────────────── │
│  "Precision is the only luxury we cannot afford to lose." │
└───────────────────────────────────────────────────────────┘
```

---

## Features

### Authentication

- **JWT-based auth** — Tokens are signed with `jsonwebtoken`, carry `{ id, role }` payload, and expire after 7 days (configurable)
- **Secure password hashing** — `bcryptjs` with 12 salt rounds on every `save` cycle where `password` was modified
- **Persistent sessions** — Token + user object written to `localStorage` under `banc-token` and `banc-user` keys, restored on hydration
- **Protected routes** — The `ProtectedRoute` component defers rendering until `isHydrated` is true (preventing flash), then redirects unauthenticated users to `/login`
- **Admin role** — Separate `adminOnly` middleware gates product CRUD; admin users see an "Admin Tier" badge in-app
- **Rate-limited endpoints** — Global limit of 300 requests / 15 min via `express-rate-limit`

### Product Browsing

- **Full catalog** — Products listed newest-first (`createdAt` desc index)
- **Slug-based routing** — Product pages resolve via `/product/[slug]`; the backend tries `findById` first, then falls back to `findOne({ slug })` for human-readable URLs
- **Category filter** — Collections page dropdown filters the grid by category in-client
- **Search** — Navbar search routes to `/search?q=<query>`; `SearchResults` filters products client-side against `name`, `category`, and `description` (case-insensitive)
- **Multi-image gallery** — `ProductGallery` renders a clickable thumbnail strip with a full-size carousel view; images transition with a grayscale-to-colour reveal on hover
- **Stock tracking** — `stock` field on Product; displayed in `ProductInfo`

### Cart System

- **Server-persisted cart** — One cart document per user in MongoDB; survives page refreshes and device changes
- **Auto-create** — Cart is created lazily on first access if it doesn't exist
- **Optimistic updates** — `useCart` hook applies quantity / remove changes to local state immediately, then confirms or rolls back on API response
- **Quantity controls** — Inline increment / decrement; setting quantity to 0 removes the item
- **Totals** — Subtotal, VAT at 20% (included), complimentary shipping — all calculated from populated product prices
- **Cart clearing** — Dedicated endpoint and button; also called automatically after order placement

### Checkout & Orders

- **Address selection** — Checkout page reads directly from `user.addresses`; radio-card UI with visual selection indicator
- **Inline address creation** — "Add New Address" form in checkout calls `POST /api/auth/me/addresses`; the saved address appears in both checkout and the profile page immediately
- **Payment form** — Cardholder name, card number (auto-formatted with spaces), expiry (auto-formatted MM/YY), CVV — display-only fields (no payment processor wired yet by design)
- **Order placement** — `POST /api/orders` snapshots the cart (product name, price, image at order time), generates a unique `BN-YYYY-XXXXXX` reference number, clears the cart, and returns the created order
- **Confirmation page** — Animated SVG checkmark (stroke-dashoffset draw), order reference chip, itemised receipt, delivery address block
- **Order history** — `GET /api/orders/my` returns all user orders sorted by `createdAt` desc; displayed as clickable cards in the Account → Orders tab, linking back to the confirmation page
- **Order status lifecycle** — `confirmed → processing → shipped → delivered` (enum-enforced, ready for status update tooling)

### Address Management

Full CRUD on the User document's embedded `addresses` array:

| Operation | Endpoint | UI Location |
|-----------|----------|-------------|
| Add | `POST /api/auth/me/addresses` | Account → Profile, Checkout |
| Edit | `PATCH /api/auth/me/addresses/:id` | Account → Profile (inline form) |
| Delete | `DELETE /api/auth/me/addresses/:id` | Account → Profile (× icon on hover) |
| Read | Embedded in User response | Checkout, Profile |

The `updateAddress` controller uses MongoDB's positional `$` operator to update the matched subdocument without touching others.

## CRUD Coverage

| Entity | Create | Read | Update | Delete |
|--------|--------|------|--------|--------|
| Users | Register | Profile | Edit Profile | — |
| Products | — | Browse Products | — | — |
| Cart | Add Item | View Cart | Update Quantity | Remove Item |
| Addresses | Add Address | View Addresses | Edit Address | Delete Address |
| Orders | Create Order | View Orders | Status Lifecycle | — |


### Design & Interaction

- **Dark / light mode** — Toggled from the Navbar; CSS variable swap is instant, preference persisted to `localStorage` as `banc-theme`; a pre-hydration `<script>` applies the theme class before React renders to prevent flash
- **Mega menu** — Desktop hover-activated, four columns including thumbnail and featured panel; animated with CSS transitions; full accordion on mobile
- **Luxury animations** — Framer Motion powers staggered hero reveals, fade-in product cards, and smooth mount/unmount transitions; custom cubic-bezier `[0.22, 1, 0.36, 1]`
- **Glassmorphism** — `.glass-panel` utility class (20px backdrop-blur, semi-transparent border) used in the Craftsmanship section
- **Skeleton loaders** — `BagSkeleton` and `ProductPageSkeleton` match the final layout exactly, preventing layout shift during data fetching

### Responsive Design

- Mobile-first utility classes throughout
- Hamburger → accordion nav on `< md`
- Product grid collapses from 3-column to single-column
- Checkout switches from side-by-side to stacked layout
- Bottom navigation bar (`BottomNav`) for mobile thumb reach

---

## Tech Stack

### Frontend

| Technology | Version | Role |
|------------|---------|------|
| Next.js | 16.2.6 | Framework — App Router, server/client component splitting, image optimisation, metadata |
| React | 19.2.4 | UI rendering |
| TypeScript | — | Full type safety across all components, hooks, and services |
| Tailwind CSS | 4 | Utility-first styling; `@tailwindcss/postcss` plugin |
| Framer Motion | 12.38.0 | Declarative animations and transitions |
| Bebas Neue | — | Display typeface (headlines, hero) |
| Bodoni Moda | — | Serif typeface (editorial, captions) |
| Geist | — | Body and UI typeface |

### Backend

| Technology | Version | Role |
|------------|---------|------|
| Node.js | LTS | Runtime |
| Express | 5.2.1 | HTTP framework |
| TypeScript | — | Type-safe controllers, models, middleware |
| Mongoose | 9.6.2 | ODM; schema validation, lifecycle hooks, population |
| jsonwebtoken | 9.0.3 | JWT creation and verification |
| bcryptjs | 3.0.3 | Password hashing (12 rounds) |
| Helmet | 8.1.0 | HTTP security headers |
| express-rate-limit | 8.5.1 | Request rate limiting |
| cors | — | Cross-origin policy (function-based; allows all `localhost:*`) |
| morgan | — | HTTP request logging (`combined` in prod, `dev` in development) |
| dotenv | — | Environment variable loading |
| ts-node-dev | — | Development server with hot-reload and transpile-only mode |

### Database

| Technology | Role |
|------------|------|
| MongoDB Atlas | Cloud-hosted database |
| Mongoose | Schema definition, validation, indexing, population |

**Indexes:**
- `Product`: `createdAt` (desc), `category`, `isFeatured`
- `Cart`: `userId` (unique)
- `Order`: `userId`

### Tooling

| Tool | Role |
|------|------|
| ESLint | Linting (Next.js recommended config) |
| PostCSS | CSS processing for Tailwind v4 |
| `ts-node-dev` | Backend dev server (respawn + transpile-only) |
| `next dev` | Frontend dev server (port 3000) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Browser / Client                     │
│                                                          │
│   Next.js App Router (React 19)                         │
│   ┌─────────────┐  ┌─────────────┐  ┌───────────────┐  │
│   │ Server      │  │ Client      │  │ AuthProvider  │  │
│   │ Components  │  │ Components  │  │ (Context +    │  │
│   │ (metadata,  │  │ (useAuth,   │  │  localStorage)│  │
│   │  layout)    │  │  useCart,   │  └───────────────┘  │
│   └─────────────┘  │  hooks)     │                      │
│                    └──────┬──────┘                       │
│                           │ fetch (Bearer JWT)           │
└───────────────────────────┼─────────────────────────────┘
                            │
                    ┌───────▼────────┐
                    │   Express 5    │
                    │   REST API     │
                    │   :5050        │
                    │                │
                    │  ┌──────────┐  │
                    │  │ Helmet   │  │
                    │  │ CORS     │  │
                    │  │ Rate Lim │  │
                    │  │ Morgan   │  │
                    │  └──────────┘  │
                    │                │
                    │  /api/auth     │
                    │  /api/products │
                    │  /api/cart     │
                    │  /api/orders   │
                    │  /api/admin    │
                    └───────┬────────┘
                            │ Mongoose
                    ┌───────▼────────┐
                    │  MongoDB Atlas │
                    │                │
                    │  users         │
                    │  products      │
                    │  carts         │
                    │  orders        │
                    └────────────────┘
```

### Frontend → Backend Communication

All API calls flow through `src/lib/api.ts` (`apiRequest<T>`):

1. Base URL resolved from `NEXT_PUBLIC_API_URL` or `http://localhost:5050/api`
2. `Content-Type: application/json` set on every request
3. If a `token` is passed, `Authorization: Bearer <token>` is added
4. Response is parsed as JSON; non-`ok` status throws a typed `ApiError`
5. `cache: "no-store"` on every request — no stale data from Next.js fetch cache

### Authentication Flow

```
Register / Login
      │
      ▼
POST /api/auth/register or /login
      │
      ▼
Backend: validate → hash password (register) → sign JWT → return { token, user }
      │
      ▼
AuthProvider.login() → stores token in localStorage["banc-token"]
                     → stores user in localStorage["banc-user"]
                     → sets React state { token, user, isAuthenticated: true }
      │
      ▼
Subsequent requests attach: Authorization: Bearer <token>
      │
      ▼
protect middleware → jwt.verify() → attach req.user = { id, role }
```

### Protected Route Behavior

```
Component wrapped in <ProtectedRoute>
      │
      ├── isHydrated = false  →  show "Authenticating..."
      │
      ├── isAuthenticated = false  →  redirect to /login
      │
      └── isAuthenticated = true   →  render children
```

`isHydrated` prevents incorrect redirects during the React hydration window when localStorage hasn't been read yet.

### State Management

BANC uses **React Context + localStorage** without any external state library:

| State | Provider | Persistence |
|-------|----------|-------------|
| Auth (token, user) | `AuthProvider` | `localStorage` |
| Cart | `useCart` hook (server-fetched) | MongoDB (per user) |
| Theme (dark/light) | `ThemeProvider` | `localStorage["banc-theme"]` |
| UI state (menus, forms) | Local `useState` | None (ephemeral) |

Cart state is deliberately server-sourced (not localStorage) so it survives across devices and browser sessions for authenticated users.

### Checkout Flow

```
Cart page
  └── "Proceed to Checkout" → /checkout
        │
        ├── Read user.addresses from AuthContext
        ├── Select or add shipping address
        │     └── POST /api/auth/me/addresses (saves to profile too)
        ├── Static shipping (complimentary)
        ├── Payment form (display only)
        │
        └── "Complete Purchase"
              │
              └── POST /api/orders
                    │
                    ├── Validate shipping address
                    ├── Populate cart from MongoDB
                    ├── Snapshot items (name, price, image at order time)
                    ├── Generate unique BN-YYYY-XXXXXX order number
                    ├── Save Order document
                    ├── Clear cart (cart.items = [])
                    │
                    └── Redirect → /checkout/confirmation/:orderId
                          │
                          └── GET /api/orders/:orderId
                                └── Display receipt + animated checkmark
```

---

## Project Structure

```
project_banc/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts                  # MongoDB connection + isDatabaseConnected()
│   │   │   └── env.ts                 # Typed env var exports + validation
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.ts      # register, login, updateProfile, address CRUD
│   │   │   ├── cartController.ts      # getCart, addToCart, updateCartItem, removeCartItem, clearCart
│   │   │   ├── orderController.ts     # createOrder, getMyOrders, getOrderById
│   │   │   └── productController.ts   # getProducts, getProductById, createProduct, updateProduct, deleteProduct
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.ts      # protect (JWT verify), adminOnly
│   │   │   ├── errorHandler.ts        # Global error formatter (stack in dev only)
│   │   │   ├── notFound.ts            # 404 handler
│   │   │   ├── rateLimiter.ts         # 300 req / 15 min global limit
│   │   │   └── requireDatabase.ts     # Guards API routes when DB is down
│   │   │
│   │   ├── models/
│   │   │   ├── Cart.ts                # ICart, ICartItem — one per user
│   │   │   ├── Order.ts               # IOrder, IOrderItem, IShippingAddress
│   │   │   ├── Product.ts             # IProduct — slug indexed, category indexed
│   │   │   └── User.ts                # IUser, IAddress — bcrypt pre-save hook
│   │   │
│   │   ├── routes/
│   │   │   ├── admin.routes.ts        # Admin-only route group
│   │   │   ├── authRoutes.ts          # /auth/* — register, login, profile, addresses
│   │   │   ├── cartRoutes.ts          # /cart/* — all protected
│   │   │   ├── index.ts               # Root router — mounts all sub-routers
│   │   │   ├── orders.routes.ts       # /orders/* — all protected
│   │   │   └── productRoutes.ts       # /products/* — public read, admin write
│   │   │
│   │   ├── utils/
│   │   │   ├── ApiError.ts            # Custom error class with HTTP status
│   │   │   └── asyncHandler.ts        # try/catch wrapper for async route handlers
│   │   │
│   │   ├── app.ts                     # Express app — middleware stack, route mounting
│   │   └── server.ts                  # HTTP server startup, DB connection, port binding
│   │
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── app/
    │   ├── about/
    │   │   ├── AboutContent.tsx       # "use client" — Framer Motion scroll reveals
    │   │   └── page.tsx               # Server component + metadata
    │   │
    │   ├── account/
    │   │   ├── AccountPageClient.tsx  # Tabs: Profile (edit name, addresses), Orders (history)
    │   │   └── page.tsx               # Server wrapper + metadata
    │   │
    │   ├── cart/
    │   │   └── page.tsx               # ProtectedRoute wrapper → BagContent
    │   │
    │   ├── checkout/
    │   │   ├── CheckoutClient.tsx     # Address selection, payment form, order placement
    │   │   ├── page.tsx               # Server wrapper + metadata
    │   │   └── confirmation/
    │   │       └── [orderId]/
    │   │           ├── ConfirmationClient.tsx  # Animated checkmark, receipt display
    │   │           └── page.tsx
    │   │
    │   ├── collections/
    │   │   └── page.tsx               # CollectionsPageGrid + CollectionsNewsletter
    │   │
    │   ├── components/
    │   │   ├── auth/
    │   │   │   ├── AuthProvider.tsx   # Context: token, user, login, logout, updateUser
    │   │   │   ├── AuthScreen.tsx     # Dual-mode login/register form
    │   │   │   └── ProtectedRoute.tsx # Hydration-safe auth guard
    │   │   │
    │   │   ├── bag/
    │   │   │   ├── BagContent.tsx     # Cart items, quantity controls, summary, checkout CTA
    │   │   │   ├── BagSkeleton.tsx    # Loading placeholder
    │   │   │   └── CompleteTheLook.tsx # Complementary product suggestions
    │   │   │
    │   │   ├── collections/
    │   │   │   ├── CollectionsNewsletter.tsx
    │   │   │   └── CollectionsPageGrid.tsx  # Category-filtered product grid
    │   │   │
    │   │   ├── product/
    │   │   │   ├── CuratedAlternates.tsx    # "You may also like" row
    │   │   │   ├── ProductGallery.tsx        # Multi-image carousel with thumbnail strip
    │   │   │   ├── ProductInfo.tsx           # Price, add-to-cart, accordion specs
    │   │   │   ├── ProductPageClient.tsx     # Orchestrates gallery + info + alternates
    │   │   │   └── ProductPageSkeleton.tsx   # Loading state
    │   │   │
    │   │   ├── BestSellers.tsx
    │   │   ├── BestsellersBento.tsx          # Masonry-style grid of featured products
    │   │   ├── BottomNav.tsx                 # Mobile bottom tab bar
    │   │   ├── CollectionsGrid.tsx           # Homepage collection thumbnails
    │   │   ├── CraftsmanshipSection.tsx      # Glassmorphism panel
    │   │   ├── EditorialSection.tsx
    │   │   ├── FeaturedRelease.tsx
    │   │   ├── Footer.tsx                    # Links, newsletter, social, legal
    │   │   ├── HeritageCallout.tsx
    │   │   ├── HeroSection.tsx               # Split-panel with Framer Motion reveals
    │   │   ├── Navbar.tsx                    # Mega menu, search overlay, theme toggle
    │   │   └── ThemeProvider.tsx             # Dark/light mode with CSS variable swap
    │   │
    │   ├── login/
    │   │   └── page.tsx
    │   │
    │   ├── product/
    │   │   └── [slug]/
    │   │       └── page.tsx                  # Dynamic route — resolves by slug or ObjectId
    │   │
    │   ├── register/
    │   │   └── page.tsx
    │   │
    │   ├── search/
    │   │   └── page.tsx                      # ?q= param → client-side filter
    │   │
    │   ├── globals.css                        # Tailwind v4 theme, typography scale, custom utilities
    │   ├── layout.tsx                         # Root: fonts, metadata, ThemeProvider, AuthProvider
    │   └── page.tsx                           # Homepage composition
    │
    ├── src/
    │   └── lib/
    │       ├── hooks/
    │       │   ├── useCart.ts          # Server-synced cart with optimistic updates
    │       │   ├── useProduct.ts       # Single product fetch by id/slug
    │       │   └── useProducts.ts      # Full product list fetch
    │       │
    │       ├── services/
    │       │   ├── auth.ts             # login, register, updateProfile, address CRUD
    │       │   ├── cart.ts             # fetchCart, addItem, updateQty, remove, clear
    │       │   ├── orders.ts           # createOrder, getMyOrders, getOrderById
    │       │   └── products.ts         # fetchProducts, fetchProductById
    │       │
    │       ├── api.ts                  # apiRequest<T> — base URL, auth headers, error handling
    │       ├── format.ts               # formatCurrency (€ de-DE locale)
    │       └── types.ts                # All shared TypeScript types
    │
    ├── .env.example
    ├── next.config.ts                  # Remote image domains (lh3.googleusercontent.com)
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`
- A **MongoDB Atlas** cluster (or local MongoDB `>= 6`)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/banc.git
cd banc
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env — see Environment Variables section below

# Frontend
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local
```

### 4. Seed the Database (Optional)

```bash
cd backend
npm run seed:products
```

This populates the database with sample watch products.

### 5. Start Development Servers

Open two terminal windows:

```bash
# Terminal 1 — Backend (port 5050)
cd backend
npm run dev

# Terminal 2 — Frontend (port 3000)
cd frontend
npm run dev
```

The backend uses `ts-node-dev --respawn --transpile-only` for instant hot-reload on file changes. The frontend uses Next.js dev server with Turbopack.

Open [http://localhost:3000](http://localhost:3000) to begin.

### 6. Build for Production

```bash
# Backend
cd backend
npm run build    # tsc → dist/
npm start        # node dist/server.js

# Frontend
cd frontend
npm run build    # next build
npm start        # next start
```

---

## Environment Variables

### Backend — `backend/.env`

```env
# Application
NODE_ENV=development
PORT=5050

# Database
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>

# Auth
JWT_SECRET=your_minimum_32_character_secret_here
JWT_EXPIRES_IN=7d

# CORS
CLIENT_ORIGIN=http://localhost:3000
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | Yes | `development` or `production` — controls morgan format and error stack traces |
| `PORT` | Yes | Port the Express server listens on |
| `MONGO_URI` | Yes | Full MongoDB connection string including credentials and database name |
| `JWT_SECRET` | Yes | Signing secret for JWTs — minimum 32 characters recommended |
| `JWT_EXPIRES_IN` | Yes | Token expiration string (e.g. `7d`, `24h`, `60m`) |
| `CLIENT_ORIGIN` | Yes | Allowed production frontend origin for CORS (all `localhost:*` are auto-allowed) |

### Frontend — `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5050/api
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_API_URL` | No | Backend API base URL — falls back to `http://localhost:5050/api` |

---

## API Reference

All endpoints are prefixed with `/api`.

### Health

```
GET  /api/health
→ { status: "ok", service: "banc-backend" }
```

---

### Authentication — `/api/auth`

| Method | Path | Auth | Body | Description |
|--------|------|------|------|-------------|
| `POST` | `/auth/register` | — | `{ name, email, password }` | Create account, return JWT |
| `POST` | `/auth/login` | — | `{ email, password }` | Authenticate, return JWT |
| `PATCH` | `/auth/me` | ✓ | `{ name }` | Update display name |
| `POST` | `/auth/me/addresses` | ✓ | `{ label, line1, city, postcode, country }` | Add shipping address |
| `PATCH` | `/auth/me/addresses/:addressId` | ✓ | `{ label, line1, city, postcode, country }` | Update address (positional `$`) |
| `DELETE` | `/auth/me/addresses/:addressId` | ✓ | — | Remove address (`$pull`) |

**Successful auth response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "Harrison Wells",
    "email": "h.wells@banc.io",
    "role": "user",
    "addresses": [],
    "createdAt": "2026-05-26T...",
    "updatedAt": "2026-05-26T..."
  }
}
```

---

### Products — `/api/products`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `GET` | `/products` | — | All products, sorted `createdAt` desc |
| `GET` | `/products/:id` | — | Single product by MongoDB ID **or** slug |
| `POST` | `/admin/products` | Admin | Create product |
| `PATCH` | `/admin/products/:id` | Admin | Partial update (validates slug uniqueness) |
| `DELETE` | `/admin/products/:id` | Admin | Delete product |

**Product object:**
```json
{
  "_id": "...",
  "name": "Aeterna I",
  "slug": "aeterna-i",
  "description": "...",
  "price": 12500,
  "images": ["https://..."],
  "category": "Mens",
  "stock": 3,
  "isFeatured": true,
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

### Cart — `/api/cart` *(all protected)*

| Method | Path | Body | Description |
|--------|------|------|-------------|
| `GET` | `/cart` | — | Fetch cart (items populated with product details) |
| `POST` | `/cart/items` | `{ productId, quantity }` | Add item (increments if already present) |
| `PATCH` | `/cart/items/:productId` | `{ quantity }` | Set quantity (0 removes item) |
| `DELETE` | `/cart/items/:productId` | — | Remove specific item |
| `DELETE` | `/cart` | — | Clear entire cart |

---

### Orders — `/api/orders` *(all protected)*

| Method | Path | Body | Description |
|--------|------|------|-------------|
| `POST` | `/orders` | `{ shippingAddress }` | Create order from cart, clear cart |
| `GET` | `/orders/my` | — | All orders for authenticated user (newest first) |
| `GET` | `/orders/:orderId` | — | Single order (scoped to user) |

**Order object:**
```json
{
  "_id": "...",
  "orderNumber": "BN-2026-A1B2C3",
  "items": [
    {
      "productId": "...",
      "name": "Aeterna I",
      "price": 12500,
      "quantity": 1,
      "image": "https://..."
    }
  ],
  "total": 12500,
  "status": "confirmed",
  "shippingAddress": {
    "label": "Home",
    "line1": "12 Rue de Milan",
    "city": "Paris",
    "postcode": "75009",
    "country": "France"
  },
  "createdAt": "2026-05-26T...",
  "updatedAt": "2026-05-26T..."
}
```

---

### Error Responses

All errors follow a consistent shape:

```json
{
  "message": "Human-readable error description",
  "stack": "Error stack trace (development only)"
}
```

| Status | Meaning |
|--------|---------|
| `400` | Validation error (missing required field, invalid format) |
| `401` | Missing, invalid, or expired token |
| `403` | Authenticated but insufficient role (`adminOnly`) |
| `404` | Resource not found |
| `409` | Conflict (duplicate email or slug) |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

---

## Design System

BANC is built on a custom design language that treats every interaction as an act of considered restraint. The aesthetic pulls from Milanese architecture — monochromatic surfaces, clean geometry, generous whitespace, and a quiet confidence that requires no embellishment.

### Typography Scale

The type system is defined as CSS utility classes in `globals.css`:

| Utility | Size | Usage |
|---------|------|-------|
| `text-display-lg` | 120px | Hero display moments |
| `text-headline-lg` | 64px | Section headings |
| `text-headline-md` | 32px | Page titles, product names |
| `text-body-lg` | 20px | Feature copy |
| `text-body-md` | 16px | Standard body text |
| `text-label-sm` | 12px | Captions, labels, tracking info |

All label text is rendered in `uppercase` with generous `letter-spacing` — a typographic gesture borrowed from high-fashion print.

**Typefaces:**
- **Bebas Neue** — Display headlines. Bold, condensed, architectural.
- **Bodoni Moda** — Italic editorial captions. Classical, precision-tuned.
- **Geist** — Body copy and UI text. Modern, legible, neutral.

### Colour System

The entire UI runs on CSS custom properties, enabling instant dark/light switching:

```css
/* Dark (default) */
--color-background: #0a0a0a;
--color-on-surface: #f5f5f0;
--color-primary: #c9a96e;       /* Gold accent */
--color-outline: #2a2a2a;
--color-surface-container: #141414;

/* Light (applied via ThemeProvider) */
--color-background: #fafaf8;
--color-on-surface: #0a0a0a;
...
```

There is no hard-coded `#hex` anywhere in component JSX — every colour reference goes through these variables.

### Spacing & Layout

```css
--margin-desktop: 80px;     /* Horizontal page margin on desktop */
--margin-mobile: 20px;      /* Horizontal page margin on mobile */
--gutter: 24px;             /* Internal component spacing */
--max-width: 1440px;        /* Maximum content width */
```

### Interaction Philosophy

- **Hover reveals** — Delete and edit controls on address cards use `opacity-0 group-hover:opacity-100` to stay out of the way until needed
- **Grayscale to colour** — Product images are displayed in greyscale by default; hovering reveals full colour (CSS `grayscale` → `grayscale-0`)
- **Micro-loading** — Buttons replace their label with a spinner (`border-t-transparent rounded-full animate-spin`) during async operations
- **No flash of unauthenticated content** — `isHydrated` gate prevents protected page content from momentarily rendering for logged-out users
- **Glass morphism** — The `.glass-panel` utility (`backdrop-blur-[20px]`, semi-transparent `bg`, subtle border) adds physical depth to the Craftsmanship section without breaking the monochromatic palette

---

## Performance & UX

### Server / Client Component Split

Next.js 16 App Router allows choosing the rendering strategy per component:

- **Server Components** — Pages, layouts, metadata. Zero client-side JavaScript overhead for static shell
- **Client Components** (`"use client"`) — Navbar, auth forms, cart, checkout, product gallery, account management. Only where interactivity is genuinely needed

### Loading States

Every data-fetching path has a loading state that matches the final layout:

| Component | Loading state |
|-----------|---------------|
| Cart page | `BagSkeleton` — placeholder rows matching item card dimensions |
| Product page | `ProductPageSkeleton` — gallery + info column placeholders |
| Checkout | Inline text spinner |
| Account / Orders | Animated `text-on-surface/30 animate-pulse` label |

### Optimistic Updates

`useCart` applies quantity changes and removals to local state before the server confirms, making the UI feel instant. If the API call fails, state rolls back to the previous value.

### Image Optimisation

All images use Next.js `<Image>` with:
- Appropriate `sizes` props for responsive loading
- `fill` mode for fixed-ratio containers
- `priority` on above-the-fold images (hero, featured release)
- Remote patterns configured in `next.config.ts` to only allow trusted domains

### Skeleton Loaders

Skeleton components use Tailwind's `animate-pulse` on `bg-surface-container` blocks that mirror the exact shape of the real content — no layout shift when data arrives.

### Accessibility Considerations

- All interactive icon buttons have `aria-label` attributes
- Form inputs have associated `placeholder` text and label elements
- Colour contrast meets WCAG AA on both dark and light themes
- Focus states preserved on all interactive elements (`outline-none` removed only where custom focus styles are applied)

---

## Future Roadmap

### Payment Processing
- Stripe integration with `stripe` and `@stripe/stripe-js` — real card tokenisation, webhook-confirmed order status updates, refund management

### Enhanced Order Management
- Real-time order status updates (WebSocket or polling)
- Email confirmation on order placement (Resend or Postmark)
- Carrier tracking integration

### Wishlist
- `POST /api/wishlist/products/:productId` — server-persisted, cross-device
- Wishlist count badge on Navbar account icon
- "Move to cart" action from wishlist view

### Product Reviews
- Star rating + written review per verified purchase
- `GET /api/products/:id/reviews` — paginated
- Review moderation queue in admin panel

### Analytics Dashboard
- Admin panel with revenue by date range, best-selling products, conversion funnel
- Powered by aggregation pipelines in MongoDB

### Advanced Search
- Move from client-side filtering to server-side `$text` index search
- Faceted filtering: price range slider, material, movement type

### Performance Enhancements
- `generateStaticParams` for product pages (static generation at build time)
- Incremental Static Regeneration for collections page
- Redis caching layer for product catalogue

### Internationalisation
- `next-intl` for multi-locale support
- Currency conversion based on user locale

---

## Single Page Application Behaviour

BANC is architected as a Single Page Application using the **Next.js 16 App Router** — meaning the browser loads one HTML document on initial visit and all subsequent navigation happens client-side, with no full-page reloads.

### How It Works

**Initial load:**
The browser receives a server-rendered HTML shell with styles and critical content already inlined. JavaScript hydrates the page, attaching React's event system to the existing DOM. From this point, the app is fully client-driven.

**Client-side navigation:**
Every `<Link>` in the application uses Next.js's built-in client router, which intercepts clicks and:
1. Fetches only the new page's React component bundle (code-split per route)
2. Updates the URL via the History API (no reload)
3. Renders the new page within the existing layout — Navbar and Footer never re-mount

This means transitions between `/collections`, `/product/[slug]`, `/cart`, `/checkout`, and `/account` are instant once their bundles are cached.

**Server vs. Client components:**
Next.js App Router introduces a hard distinction:

| Type | Rendered where | JavaScript sent to browser |
|------|---------------|---------------------------|
| Server Component | Server at request time | None — HTML only |
| Client Component (`"use client"`) | Browser (after hydration) | Full component bundle |

Pages (`page.tsx`) are server components — they produce HTML and set `<head>` metadata with zero client JS. The interactive layer (Navbar, product gallery, cart, auth forms, checkout) is composed of client components that hydrate into those server-rendered shells.

**Dynamic rendering without page refresh:**

| Interaction | What happens |
|-------------|-------------|
| Login / Register | `AuthProvider` updates React context + localStorage; no navigation required |
| Add to Cart | `useCart` hook patches optimistic state; API call confirms; badge updates live |
| Category filter (Collections) | Local `useState` in `CollectionsPageGrid` re-renders grid — no route change |
| Search | Navbar routes to `/search?q=<query>`; `SearchResults` filters in-memory |
| Address CRUD | `updateUser()` from `AuthProvider` patches user object in context + localStorage |
| Theme toggle | `ThemeProvider` swaps CSS custom properties on `<html>`; no flicker, no reload |
| Tab switch (Account) | `useState<Tab>` swaps `ProfileTab` / `OrdersTab` — single component tree update |

**Responsive interactions:**
Layout adapts at the `md` breakpoint (768px) via Tailwind CSS utility classes — not via JavaScript media query listeners. The Navbar collapses from a mega-menu to a hamburger accordion; product grids collapse from 3-column to 1-column; the checkout layout stacks vertically. All transitions are CSS-driven (`transition-all`, `duration-300`) to stay off the main thread.

---

## Security Features

Security is applied in layers across both tiers of the stack, rather than bolted on as an afterthought.

### Transport & Headers

- **Helmet** — Applies a hardened set of HTTP response headers on every request: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, and others. Configured at app level so no route is unprotected
- **CORS** — Function-based origin check: allows all `localhost:*` in development and only the configured `CLIENT_ORIGIN` in production. `credentials: true` permits cookie-equivalent auth (Bearer token)
- **Rate Limiting** — `express-rate-limit` caps requests at **300 per 15-minute window** globally. Prevents brute-force login attempts and scraping

### Authentication

- **JWT** — Tokens are signed with `HS256` using a server-side `JWT_SECRET`. Payload contains only `{ id, role }` — no sensitive data. Tokens expire after 7 days (`JWT_EXPIRES_IN`)
- **Password hashing** — `bcryptjs` with **12 salt rounds** on every `pre('save')` where `isModified('password')` is true. The `password` field is excluded from all queries by default (`select: false`) — it only loads when explicitly selected
- **Token extraction** — `protect` middleware reads only `Authorization: Bearer <token>` headers; rejects requests with missing, malformed, or expired tokens at the middleware layer before any controller logic runs

### Authorisation

- **Role-based access** — `adminOnly` middleware enforces `req.user.role === "admin"` for all product write operations. Applied after `protect`, so both checks run in sequence
- **Resource scoping** — `getOrderById` and address mutations always filter by `req.user.id`, making it impossible for one user to access another's data even with a valid token
- **Database middleware guard** — `requireDatabase` middleware returns `503` for all `/api` requests when the MongoDB connection is down, preventing partial responses

### Input Validation

- All auth inputs are validated for presence and type before touching the database
- Email normalised to lowercase and trimmed before lookup (prevents case-variation duplicates)
- Product slugs enforced as unique with index + application-level uniqueness check on update
- Mongoose schema validation provides a second validation layer (required fields, min/max lengths, enum values, regex patterns)

### Frontend

- **No sensitive data in localStorage** — Only `banc-token` (JWT) and `banc-user` (non-sensitive profile) are stored client-side. No payment data, no passwords
- **Hydration guard** — `ProtectedRoute` waits for `isHydrated` before evaluating auth state, preventing race conditions that could expose protected content for a single render frame
- **Environment variables** — `JWT_SECRET`, `MONGO_URI`, and other secrets are read server-side only. `NEXT_PUBLIC_*` prefix is reserved strictly for non-sensitive client-facing config

---

## Engineering Challenges

The real implementation decisions that shaped the final architecture.

### 1. Hydration-Safe Authentication

**Problem:** On cold load, `localStorage` is unavailable during SSR and inaccessible for a brief window after hydration begins. A naïve auth check would redirect users to `/login` on every protected page refresh.

**Solution:** `AuthProvider` introduces an `isHydrated` boolean (initially `false`). A `useEffect` runs once on mount, reads `localStorage`, sets auth state, and flips `isHydrated` to `true`. `ProtectedRoute` renders `"Authenticating..."` until `isHydrated` is `true`, then evaluates `isAuthenticated`. No incorrect redirect ever fires.

### 2. Optimistic Cart Updates

**Problem:** Cart operations (quantity change, remove item) involve a round-trip to the server. Waiting for the response before updating the UI creates noticeable lag on every interaction.

**Solution:** `useCart` applies mutations to local state *immediately* before the API call resolves:

```ts
// Store previous state
const previous = cart;
// Apply change optimistically
setCart({ ...previous, items: optimisticItems });
// Confirm or roll back
try {
  const next = await updateCartItemQuantity(token, productId, quantity);
  setCart(next);           // server truth wins
} catch {
  setCart(previous);       // silent rollback
}
```

The user sees the change instantly; if the server disagrees, state silently corrects.

### 3. Server / Client Component Boundary

**Problem:** Next.js 16 App Router enforces that server components cannot import client components that use hooks, and that client components cannot be made async. Finding the right split is non-obvious.

**Solution:** A consistent pattern of server wrapper → client orchestrator:

```
page.tsx          (server: metadata, Suspense, layout)
  └── PageClient.tsx   (client: all state, hooks, interactivity)
        └── SubComponent  (client: individual interactive units)
```

This keeps SEO metadata and static layout on the server while keeping the bundle small for interactive sections.

### 4. Preventing Theme Flash

**Problem:** If the theme preference is read from `localStorage` by React, there is an unavoidable flash of the wrong theme between server render and hydration.

**Solution:** A blocking `<script>` tag is injected into `<head>` *before* React's bundle, reading `localStorage["banc-theme"]` and applying the appropriate class to `<html>` synchronously. React's `ThemeProvider` then reads the class that is already on the DOM rather than setting it after paint.

### 5. Product Lookup by Slug or ID

**Problem:** The cart stores `productId` as a MongoDB `ObjectId`. Product pages use human-readable slugs in the URL. A single `getProductById` endpoint needs to handle both.

**Solution:**

```ts
const product = isValidObjectId(id)
  ? await Product.findById(id)
  : await Product.findOne({ slug: id });
```

`isValidObjectId` from Mongoose tests whether the string is a valid 24-character hex ObjectId. If not, it falls through to a slug lookup. Both paths return the same response shape.

### 6. Address Synchronisation Across Checkout and Profile

**Problem:** Addresses added during checkout must immediately appear in the profile page (and vice versa) without a page reload.

**Solution:** Both the checkout `CheckoutClient` and the account `ProfileTab` call the same `POST /api/auth/me/addresses` endpoint and then call `updateUser(res.user)` from `AuthProvider`. `updateUser` patches the user object in React context and re-serialises it to localStorage. Any component reading `useAuth().user.addresses` re-renders with the new address list automatically.

### 7. Responsive Checkout Layout

**Problem:** The checkout page has a complex two-column layout (form left, order summary right) that needs to collapse gracefully on mobile while keeping the sticky summary accessible.

**Solution:** Tailwind's `lg:grid-cols-12` creates the two-column layout above 1024px. Below that, both columns stack vertically — order summary appears below the form (not above, where it would push the form off-screen). The order summary uses `sticky top-40` on desktop only, and the summary collapses to a flat section on mobile.

---

## Known Limitations

These are intentional constraints, not oversights. Each represents a deliberate scope decision.

| Limitation | Detail |
|------------|--------|
| **Payment processing is simulated** | The checkout form collects card details for UI completeness only. No payment processor is integrated. No card data is transmitted to the backend or stored. Stripe integration is the obvious next step — see [Future Roadmap](#future-roadmap) |
| **Search is client-side** | `SearchResults` fetches the full product catalogue once and filters in the browser. This works at current scale but would not be appropriate for a catalogue larger than ~1,000 products. MongoDB `$text` indexes and server-side pagination are the upgrade path |
| **No email notifications** | Order confirmation, registration welcome, and password reset emails are not implemented. Resend or Postmark integration would be straightforward against the existing `createOrder` and `registerUser` controllers |
| **Admin panel is API-only** | Admin product CRUD is fully implemented at the API level (`POST/PATCH/DELETE /api/admin/products`) and protected by `adminOnly` middleware. A browser-based admin dashboard UI was intentionally excluded from scope |
| **Order status is static** | Orders are created with status `"confirmed"` and remain there. The status field and enum (`confirmed → processing → shipped → delivered`) are modelled and ready for an update endpoint — triggering status changes is not yet wired |
| **No real-time updates** | Cart and order state refresh on page load or explicit action. WebSocket or Server-Sent Event integration would enable multi-tab synchronisation and live order tracking |
| **Images are externally hosted** | All product images reference external URLs (`lh3.googleusercontent.com`, `images.unsplash.com`). A production deployment would upload images to a CDN (Cloudflare R2, AWS S3) and store the CDN URL in MongoDB |

---

## Demo Account

A pre-seeded demo account is available for evaluating the full authenticated experience without registration:

```
Email:     demo@banc.com
Password:  Demo123!
```

This account has:
- A saved **Home** and **Office** address pre-populated
- Two previous orders in the Vault (Orders tab)
- Standard `user` role (not admin)

> If the demo account does not exist, register a new account — the full flow is functional with any email and password of 6+ characters.

---

## Deployment

### Frontend — Vercel

```bash
# 1. Push to GitHub
git push origin main

# 2. Import project at vercel.com/new
# 3. Set root directory: frontend
# 4. Add environment variable:
#    NEXT_PUBLIC_API_URL = https://your-api-domain.com/api
# 5. Deploy
```

The Next.js frontend deploys with zero configuration on Vercel. Ensure `NEXT_PUBLIC_API_URL` points to your production backend.

### Backend — Railway / Render / Fly.io

```bash
# Build step:
cd backend && npm run build

# Start command:
node dist/server.js
```

Set the following environment variables on your platform:

```env
NODE_ENV=production
PORT=5050
MONGO_URI=<your Atlas connection string>
JWT_SECRET=<strong random secret>
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=https://your-frontend.vercel.app
```

### Database — MongoDB Atlas

1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a database user with `readWrite` permissions
3. Whitelist your backend IP (or use `0.0.0.0/0` for cloud platforms)
4. Copy the connection string into `MONGO_URI`
5. The database and collections are created automatically by Mongoose on first write

### Production Checklist

- [ ] `NODE_ENV=production` set on backend
- [ ] `JWT_SECRET` is a randomly generated string (32+ characters)
- [ ] `CLIENT_ORIGIN` points to exact frontend URL (no trailing slash)
- [ ] MongoDB Atlas IP whitelist includes backend server IP
- [ ] `NEXT_PUBLIC_API_URL` set in Vercel project settings
- [ ] HTTPS enabled on both frontend and backend domains

---

## Author

<br />

**BANC Digital Atelier**

Designed and engineered as a study in restraint — proving that luxury ecommerce does not require excess, in product or in code.

---

<div align="center">

<br />

*Engineered with precision. Designed without compromise.*

<br />

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

<br />

`© 2026 BANC Horology — All Rights Reserved`

</div>
