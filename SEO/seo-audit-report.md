# SEO Audit Report - DreamWise AI Website

**Date:** 2026-03-18
**Domain:** https://dreamwiseai.com
**Framework:** Next.js 14 (App Router) with next-intl i18n
**Locales:** EN (`/en`), ZH (`/zh`)

---

## Executive Summary

This audit identified and resolved critical SEO gaps: missing sitemap alternates/hreflang, absent JSON-LD structured data, incomplete robots.txt directives, and missing `metadataBase`. All issues have been fixed in code.

---

## Issues Found & Fixes Applied

### 1. Sitemap - Missing hreflang alternates (CRITICAL)

**Before:** `app/sitemap.ts` generated URLs without `alternates` -- search engines had no way to associate `/en` and `/zh` as language variants within the sitemap.

**After:** Each sitemap entry now includes `alternates.languages` mapping both locales, enabling proper hreflang signals in the XML sitemap output.

**File:** `app/sitemap.ts`

---

### 2. JSON-LD Structured Data - Completely Missing (CRITICAL)

**Before:** No structured data anywhere on the site. Google Search Console would show zero rich result eligibility.

**After:** Added four JSON-LD blocks:

| Schema Type | Location | Purpose |
|---|---|---|
| `Organization` | Layout (all pages) | Brand identity, contact info, logo |
| `WebSite` | Layout (all pages) | Site-level signals, language support |
| `ProfessionalService` | Home page | Service catalog with 3 offerings |
| `FAQPage` | Home page | FAQ rich results eligibility |

All JSON-LD is locale-aware (EN/ZH content served per locale).

**Files:** `components/JsonLd.tsx`, `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`

---

### 3. Missing `metadataBase` (HIGH)

**Before:** No `metadataBase` set in metadata. OG image URLs like `/og-image-en.png` were relative with no base -- crawlers could not resolve them to absolute URLs.

**After:** Added `metadataBase: new URL('https://dreamwiseai.com')` so all relative URLs in metadata resolve correctly.

**File:** `app/[locale]/layout.tsx`

---

### 4. Hreflang - Missing `x-default` (HIGH)

**Before:** `alternates.languages` only had `en` and `zh` keys. Missing `x-default` means search engines don't know which locale to serve for unmatched languages.

**After:** Added `'x-default': 'https://dreamwiseai.com/en'` to alternates.

**File:** `app/[locale]/layout.tsx`

---

### 5. OpenGraph - Missing `alternateLocale` (MEDIUM)

**Before:** OG tags only declared the current locale. Facebook/social crawlers had no signal about the alternate language version.

**After:** Added `alternateLocale` (e.g., EN page declares `zh_CN` as alternate).

**File:** `app/[locale]/layout.tsx`

---

### 6. Twitter Card - Missing `images` (MEDIUM)

**Before:** Twitter card metadata had `title` and `description` but no `images` field. Twitter would not show a preview image.

**After:** Added `images` array with the locale-specific OG image.

**File:** `app/[locale]/layout.tsx`

---

### 7. Robots.txt - Missing Disallow Rules (MEDIUM)

**Before:** Only `Allow: /` and `Sitemap` directive. No protection against crawling internal routes.

**After:** Added `Disallow: /_next/` and `Disallow: /api/` to prevent crawling of build artifacts and API endpoints.

**File:** `public/robots.txt`

---

### 8. Googlebot - Missing Advanced Directives (LOW)

**Before:** Basic `robots: { index: true, follow: true }` only.

**After:** Added `googleBot` config with `max-video-preview: -1`, `max-image-preview: large`, `max-snippet: -1` for maximum SERP real estate.

**File:** `app/[locale]/layout.tsx`

---

### 9. Sitemap - Dynamic `lastModified` (LOW)

**Before:** `lastModified: new Date()` generated a new timestamp on every build, making caches and crawl comparisons unreliable.

**After:** Changed to a fixed date `new Date('2026-03-18')` that should be updated on actual content changes.

**File:** `app/sitemap.ts`

---

## Remaining Action Items (Manual)

| # | Item | Priority | Notes |
|---|---|---|---|
| 1 | Create OG images | HIGH | Place `og-image-en.png` and `og-image-zh.png` (1200x630px) in `public/` |
| 2 | Add favicon | HIGH | Place `favicon.ico` and/or `icon.png` in `app/` or `public/` |
| 3 | Add social media URLs | LOW | Update `sameAs` array in Organization JSON-LD when accounts exist |
| 4 | Submit sitemap to GSC | HIGH | Verify https://dreamwiseai.com/sitemap.xml in Google Search Console |
| 5 | Validate structured data | MEDIUM | Test with https://search.google.com/test/rich-results after deploy |

---

## Files Changed

| File | Change Type |
|---|---|
| `app/sitemap.ts` | Modified - added alternates/hreflang, fixed lastModified |
| `app/[locale]/layout.tsx` | Modified - added metadataBase, x-default, JSON-LD, googleBot directives |
| `app/[locale]/page.tsx` | Modified - added ProfessionalService + FAQPage JSON-LD |
| `components/JsonLd.tsx` | Created - reusable JSON-LD injection component |
| `public/robots.txt` | Modified - added Disallow rules for _next and api |

---

## Verification Checklist

After deployment, verify:

- [ ] `https://dreamwiseai.com/sitemap.xml` returns valid XML with hreflang alternates
- [ ] `https://dreamwiseai.com/robots.txt` shows updated rules
- [ ] View source on `/en` shows `<link rel="alternate" hreflang="zh" ...>`
- [ ] View source on `/en` shows `<link rel="alternate" hreflang="x-default" ...>`
- [ ] View source shows `<script type="application/ld+json">` blocks (4 total on home page)
- [ ] Google Rich Results Test passes for both `/en` and `/zh`
- [ ] OG Debugger (Facebook) shows correct preview for both locales
