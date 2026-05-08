# Devlog

## Day 1 — 2025-MM-DD

**Hours worked:** 6

**What I did:**
Set up Next.js 14 project with TypeScript, Tailwind, and shadcn/ui. Created GitHub repo and pushed initial scaffold. Set up Supabase project and defined audits + leads tables with SQL. Installed all dependencies including react-hook-form, zod, nanoid, resend, and the Anthropic SDK. Wrote core TypeScript interfaces in types/index.ts covering all tool inputs, audit results, and lead shapes. Set up GitHub Actions CI workflow that runs eslint and jest on every push to main. Spent ~90 minutes verifying and recording all vendor pricing data in PRICING_DATA.md.

**What I learned:**
Supabase RLS (Row Level Security) is enabled by default and would block all inserts without a policy — disabled it for now on the leads table since there's no auth, will add a server-side service role key for production writes. Also learned that nanoid v5 is ESM-only, so importing it in a Next.js API route needs either dynamic import or using nanoid v3 with CommonJS.

**Blockers / what I'm stuck on:**
Windsurf pricing page wasn't loading clearly — need to revisit PRICING_DATA.md entry for them tomorrow morning. CI workflow ran but jest reported "no tests found" which is expected at this stage.

**Plan for tomorrow:**
Build the spend input form (Feature 1) with all 8 tools, plan droppers, and localStorage persistence. Then start the audit engine (Feature 2) in lib/auditEngine.ts with the core rules logic.