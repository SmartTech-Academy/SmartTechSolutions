# Project UI Standards

This project uses:

- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Hook Form
- Zod Validation

# UI Requirements

The project already includes a premium template library, from "./hi-study 3/" folder, in project root directory.

IMPORTANT:

- Never create new design patterns from scratch.
- Always inspect existing pages before building new pages.
- Reuse existing layouts, cards, tables, forms, modals, buttons, badges, and navigation components.
- Follow the existing spacing, typography, colors, shadows, and animations.
- Match the template's design language exactly.

# Component Discovery

Before generating UI:

1. Search the project for similar pages.
2. Search the components directory for reusable components.
3. Reuse existing components whenever possible.
4. Extend existing components rather than creating new ones.

# UI generating rules

When generating UI:

- Use Server Components by default
- Use Client Components only when necessary
- Use responsive mobile-first design
- Use Tailwind utility classes
- Use Shadcn UI components whenever possible
- Follow accessibility best practices
- Generate production-ready code
- Avoid placeholder code
- Use loading.tsx and error.tsx where appropriate
- Optimize for Core Web Vitals

# UI Quality Standards

Generated UI must:

- Look modern and premium
- Be mobile responsive
- Support dark mode
- Include loading states
- Include empty states
- Include error states
- Follow accessibility standards
- Use skeleton loaders where appropriate

# Next.js Rules

- Use App Router
- Use Server Components by default
- Use Client Components only when necessary
- Optimize images
- Implement proper metadata
- Use route groups where beneficial

# Code Quality

- Production-ready code only
- No placeholders
- No mock implementations
- No TODO comments
- put css files in separate location, and ensure consistency with any extra css introduced into the project

# Then give Claude a workflow instruction: 

When asked to build a page:

1. Analyze existing template pages first (from "./hi-study 3/" folder, in project root directory.)
2. Identify the closest matching layout.
3. Reuse existing components.
4. Maintain visual consistency.
5. Only create new components if no suitable component exists.

# work from template designs

Analyze the entire template (from "./hi-study 3/" folder, in project root directory.).

- Typography
- Color palette
- Card styles
- Form styles
- Table styles
- Modal styles
- Layout patterns
- Dashboard patterns

Use this guide for all future UI generation.