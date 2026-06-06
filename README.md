# EBR Electric Boat Repair — Website

Premium Next.js + Tailwind CSS + Sanity CMS website for **ElectricBoatRepair.com**

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom brand system
- **CMS**: Sanity Studio (embedded at `/studio`)
- **Language**: TypeScript
- **Fonts**: DM Serif Display + DM Sans + JetBrains Mono

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

```bash
# Create a new Sanity project at sanity.io/manage
# Then add your project ID to .env.local
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Start development

```bash
npm run dev
```

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## Project Structure

```
ebr-website/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout + metadata
│   ├── globals.css                 # Brand styles + utilities
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/page.tsx         # Blog post
│   ├── projects/
│   │   ├── page.tsx                # Projects gallery
│   │   └── [slug]/page.tsx         # Project detail
│   ├── services/
│   │   ├── page.tsx                # Services directory
│   │   └── [slug]/page.tsx         # Service detail
│   ├── locations/
│   │   └── [slug]/page.tsx         # Location page
│   ├── studio/[[...tool]]/page.tsx # Sanity Studio
│   ├── api/contact/route.ts        # Form submission endpoint
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx                  # Navigation + mobile menu
│   ├── Footer.tsx                  # Footer with links
│   └── ServiceRequestForm.tsx      # Lead capture form
├── lib/
│   ├── sanity.client.ts            # Sanity client + urlFor
│   └── queries.ts                  # All GROQ queries
├── sanity/
│   └── schemas/
│       ├── index.ts                # Schema registry
│       ├── post.schema.ts          # Blog posts
│       ├── project.schema.ts       # Projects
│       ├── service.schema.ts       # Services
│       └── other.schemas.ts        # Location, FAQ, Testimonial, Author, SiteSettings
├── public/images/                  # Static images (organized by category)
└── sanity.config.ts                # Sanity Studio config
```

---

## Sanity CMS Content Types

| Type | Description |
|------|-------------|
| **Service** | Individual service pages with FAQs, gallery, process steps |
| **Project** | Before/after project documentation |
| **Post** | Blog posts with categories and related services |
| **Location** | SEO location pages for each service area |
| **Testimonial** | Customer reviews with star ratings |
| **FAQ** | Reusable FAQ entries |
| **Author** | Blog post authors |
| **SiteSettings** | Phone, email, social links, default SEO |

---

## Image Organization

Add real project photos to `/public/images/` following this structure:

```
public/images/
├── duffy-exteriors/
├── duffy-interiors/
├── before-after/
├── controller-upgrades/
├── battery-upgrades/
├── charger-upgrades/
├── electrical-diagnostics/
├── motor-repair/
├── throttle-repair/
├── steering-repair/
├── props/
├── fiberglass/
├── bottom-paint/
├── buff-and-wax/
├── cushions/
├── surrey-tops-windows-covers/
├── varnishing/
├── boat-restoration/
├── boat-transport/
└── harbor-care-cleaning/
```

---

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#082B5B` | Primary brand, dark sections, headers |
| Electric Teal | `#53D1C8` | CTAs, accents, highlights, hover states |
| Sand Gold | `#C8A46B` | Luxury detail accents |
| Soft White | `#F7F8FA` | Background, light sections |
| Charcoal | `#111827` | Body text, footer |

---

## URL Structure

```
/                               Homepage
/services                       All services
/services/[slug]                Service detail page
/projects                       Projects gallery
/projects/[slug]                Project detail
/blog                           Blog listing
/blog/[slug]                    Blog post
/about                          About EBR
/contact                        Contact / Request Service
/locations/[slug]               Location pages

# Redirects (configured in next.config.js)
/controller-repair          →   /services/controller-repair
/motor-repair               →   /services/motor-repair
/battery-upgrades           →   /services/battery-upgrades
/charger-upgrades           →   /services/charger-upgrades
/duffy-restoration          →   /services/duffy-restoration
/bottom-paint               →   /services/bottom-paint
/boat-transport             →   /services/boat-transport
```

---

## Contact Form Setup

The form in `/app/api/contact/route.ts` supports three email backends.

**Option A — Formspree (easiest)**
1. Sign up at formspree.io
2. Create a form, copy the form ID
3. Uncomment the Formspree block in `route.ts`

**Option B — Resend**
1. `npm install resend`
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment the Resend block in `route.ts`

---

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
# Connect GitHub repo to Vercel
# Add environment variables in Vercel dashboard
```

Recommended: **Vercel** — zero config Next.js deployment with edge CDN.

---

## Adding Content

Once deployed, manage all content at:
```
https://electricboatrepair.com/studio
```

Start with:
1. **Site Settings** — add phone number, email, social links
2. **Services** — create service pages for each offering
3. **Projects** — add before/after project documentation
4. **Blog Posts** — publish troubleshooting and maintenance guides
5. **Testimonials** — add customer reviews

---

## SEO Checklist

- [ ] Verify all page title tags are unique
- [ ] Set Sanity Site Settings default SEO values
- [ ] Add SEO title + description to each Service page
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Add Google Analytics or Plausible
- [ ] Set up Google Business Profile
- [ ] Verify LocalBusiness schema is correct (update phone/address)
