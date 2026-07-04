# AGENTS.md

## Project
Next.js wiki app using TypeScript, React, Tailwind, Biome, and pnpm.

## Priorities
- Modular code
- Legible code
- Small focused components
- Thin page files
- Consistent Tailwind usage
- Safe TypeScript
- Clean documentation-style UI

## Rules
- Use pnpm only.
- Use Biome for formatting and linting.
- Prefer server components; use client components only when needed.
- Avoid `any`.
- Avoid giant files and deeply nested JSX.
- Extract repeated UI into components.
- Extract repeated logic into hooks or utilities only when reuse is real.
- Do not introduce unnecessary abstractions or dependencies.
- Keep routing, content rendering, TOC, and navigation concerns separate.

## Structure
- `app/` for routes
- `components/wiki/` for wiki-specific UI
- `components/ui/` for shared primitives
- `lib/wiki/` for content/data logic
- `types/` for shared types
- `hooks/` for reusable hooks

## React Compiler Rules
- This project uses React Compiler.
- Do not add `useMemo`, `useCallback`, or `React.memo` by default.
- Prefer plain, readable React code first.
- Assume the compiler will handle routine render optimization.
- Only add manual memoization when there is a clear, documented reason.

## Manual Memoization Policy
Only use `useMemo`, `useCallback`, or `React.memo` when at least one of these is true:
- A third-party library depends on stable reference identity.
- A custom hook or API explicitly requires stable callbacks or objects.
- Profiling shows a real performance issue that manual memoization fixes.
- A computation is measurably expensive and runs often enough to matter.
- A deliberate render boundary is needed and the reason is documented in code comments.

When manual memoization is used:
- Add a short comment explaining why it is necessary.
- Keep the memoized scope as small as possible.
- Do not wrap everything defensively.

## Component Style with React Compiler
- Prefer direct inline event handlers when they are simple and readable.
- Prefer deriving values directly during render when the computation is cheap.
- Avoid premature extraction of memoized objects and arrays.
- Do not introduce performance patterns from pre-compiler React unless they are still justified.

## Client Component Guidance
- Continue to minimize `"use client"` boundaries.
- Use client components only for interactivity, browser APIs, or client-only hooks.
- React Compiler does not change the rule that server components should stay server components when possible.

## Performance Workflow
- Write the simplest correct version first.
- Profile before adding manual memoization.
- If memoization is introduced, document the exact reason.
- Favor maintainability over speculative optimization.

## Before finishing
- Run Biome checks
- Run TypeScript checks
- Run build for substantial changes