# File Directory Guide

**Next.js App Router project structure reference.**

## Directory Structure

```
src/
├── app/          # File-based routing (pages, layouts, API routes)
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utilities & constants
├── services/     # API calls & data fetching
└── types/        # TypeScript definitions
```

---

## The Role of Each Directory

### `src/app/` — Routing Only

The `src/app/` directory is for **file-based routing**. It contains:

| File | Purpose |
|------|---------|
| `page.tsx` | Route page component |
| `layout.tsx` | Shared layout wrapper |
| `route.ts` | API route handler |
| `loading.tsx` | Loading state UI |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 page |
| `template.tsx` | Per-route template |

**What NOT to put in `src/app/`:**
- Reusable components → use `src/components/`
- Custom hooks → use `src/hooks/`
- Utilities → use `src/lib/`
- API fetching → use `src/services/`
- Type definitions → use `src/types/`

---

### `src/components/` — Reusable UI

All shared UI components:

```
src/components/
├── ui/                    # Base primitives
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── features/              # Feature-specific components
│   ├── dine/
│   │   ├── MenuCard.tsx
│   │   └── ReservationForm.tsx
│   └── events/
├── layouts/               # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── index.ts              # Barrel export
```

---

### `src/hooks/` — Custom React Hooks

```
src/hooks/
├── useAuth.ts
├── useLocalStorage.ts
└── useMediaQuery.ts
```

---

### `src/lib/` — Utilities & Constants

Pure functions, helpers. No side effects, no data fetching.

```
src/lib/
├── utils.ts
├── constants.ts
├── validation.ts
└── formatters.ts
```

---

### `src/services/` — API & Data Fetching

Services handle **side effects** (API calls).

```
src/services/
└── api/
    ├── client.ts         # Fetch wrapper
    ├── auth.ts
    ├── menu.ts
    └── events.ts
```

| `src/lib/` | `src/services/` |
|------------|-----------------|
| Pure functions | API calls |
| No fetch/axios | Uses fetch/axios |
| `formatDate()` | `fetchMenu()` |

---

### `src/types/` — TypeScript Definitions

```
src/types/
├── index.ts
├── user.ts
├── menu.ts
└── events.ts
```

---

## File-Based Routing

### Route Path Mapping

```
src/app/dine/page.tsx          → /dine
src/app/dine/menu/page.tsx     → /dine/menu
src/app/events/[id]/page.tsx   → /events/:id
src/app/api/auth/route.ts      → /api/auth
```

### Route Groups

Use `(folder)` to organize without affecting URLs:

```
src/app/
├── (marketing)/
│   ├── page.tsx          → /
│   └── about/
│       └── page.tsx     → /about
├── (app)/
│   ├── dine/
│   │   └── page.tsx    → /dine
│   └── events/
│       └── page.tsx    → /events
```

---

## Best Practices

### Server vs Client Components

Components are **Server Components** by default.

```tsx
// Server Component (default)
async function Page() {
  const data = await db.query(...);
  return <div>{data.title}</div>;
}
```

```tsx
// Client Component (opt-in)
'use client';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>Like</button>;
}
```

**Rule:**
- Need interactivity? → `'use client'`
- Only displaying data? → Keep as Server Component

---

### Loading & Error States

Add to any route folder:

```
src/app/dine/
├── page.tsx
├── loading.tsx
└── error.tsx
```

```tsx
// loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

```tsx
// error.tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `MenuCard.tsx` |
| Hooks | `use` + PascalCase | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase | `UserType.ts` |

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout |
| `src/app/page.tsx` | Home page (`/`) |
| `src/app/globals.css` | Global styles |

---

## Commands

```bash
npm run dev       # Start dev server
npm run build    # Production build
npm run start   # Start production
npm run lint    # Run ESLint
```

---

## Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)