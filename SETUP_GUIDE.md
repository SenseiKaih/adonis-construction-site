# Gulaale Adonia - Civil Engineering Website Setup Guide

## Quick Start

This is a production-ready Next.js website for a Ugandan civil engineering firm with integrated image storage via Vercel Blob.

### Prerequisites

- Node.js 18+ installed
- Vercel account (for Blob storage integration)
- Internet connection for Blob API calls

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Verify Vercel Blob integration:**
   - Ensure `@vercel/blob` is in `package.json`
   - Check `.env.local` for `BLOB_READ_WRITE_TOKEN`

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

## Project Structure

```
.
├── app/
│   ├── page.tsx              # Home page (all sections)
│   ├── gallery/
│   │   └── page.tsx          # Full project gallery
│   ├── admin/
│   │   └── images/
│   │       └── page.tsx      # Image management dashboard
│   ├── api/
│   │   └── images/
│   │       └── route.ts      # Upload endpoint
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Design tokens & styling
│
├── components/
│   ├── hero.tsx              # Hero with founder portrait
│   ├── about.tsx             # About section with image
│   ├── services.tsx          # Services listing
│   ├── portfolio.tsx         # Portfolio with filtering
│   ├── why-choose-us.tsx     # Trust indicators
│   ├── contact.tsx           # Contact form
│   ├── footer.tsx            # Footer
│   ├── navigation.tsx        # Sticky nav with gallery link
│   └── project-image.tsx     # Reusable image component
│
├── lib/
│   └── images.ts             # Image registry & utilities
│
└── docs/
    └── IMAGE_STORAGE.md      # Image storage guide
```

## Key Features

### 1. Image Storage System

**Vercel Blob Integration:**
- All project images stored in cloud
- Public, persistent URLs
- CDN-backed delivery
- No local file storage needed

**Image Data Registry (`/lib/images.ts`):**
- Centralized metadata for all images
- Categories: residential, commercial, roads, drainage, tourist, exterior, supervision, founder
- Functions for querying and filtering

**Pages Using Images:**
- **Hero**: Founder portrait in prominent position
- **About**: Founder bio with professional image
- **Portfolio**: 4 project images with category filtering
- **Gallery**: `/gallery` - Full gallery view
- **Admin**: `/admin/images` - Upload & management dashboard

### 2. Responsive Design

- **Mobile-first**: Optimized for all screen sizes
- **Color system**: 4-color palette (charcoal, terracotta, muted, white)
- **Typography**: Professional sans-serif throughout
- **Layout**: Flexbox-based, clean spacing, earthy tones

### 3. Professional Sections

- **Navigation**: Sticky header with mobile menu + Gallery link
- **Hero**: Compelling headline with founder image + CTAs
- **About**: Founder credentials + professional approach
- **Services**: 7 core service categories with descriptions
- **Portfolio**: Filterable project gallery with metadata
- **Why Choose Us**: Trust signals and differentiators
- **Contact**: Functional form + contact details
- **Footer**: Navigation + company info

## Using Images

### Display Images (In Components)

```tsx
import { getImageById, getImagesByCategory } from '@/lib/images';

// Get founder image
const founder = getImageById('founder-portrait');

// Get all residential projects
const projects = getImagesByCategory('residential');

// Render
<img src={founder.url} alt={founder.title} />
```

### Upload New Images

1. **Via Admin Dashboard:**
   - Go to `/admin/images`
   - Upload files using the interface
   - System stores in Vercel Blob, returns URL

2. **Manual Entry:**
   - Edit `/lib/images.ts`
   - Add to `projectImages` array with metadata

### Adding to Pages

Edit `/lib/images.ts` and the corresponding component:

```typescript
// lib/images.ts
{
  id: 'project-name',
  url: 'https://blob-url.com/image.jpg',
  title: 'Project Title',
  description: 'Details',
  category: 'residential',
  location: 'Jinja, Uganda',
  role: 'Project Manager'
}
```

## Customization

### Colors

Edit `/app/globals.css` to modify the design tokens:

```css
:root {
  --primary: oklch(...);        /* Dark charcoal */
  --secondary: oklch(...);      /* Terracotta accent */
  --muted: oklch(...);          /* Concrete gray */
  /* ... other tokens ... */
}
```

Current palette:
- **Primary**: Dark charcoal (#404040) - headers, backgrounds
- **Secondary**: Warm terracotta (#CA7A5C) - accents, CTAs
- **Muted**: Concrete gray - secondary text
- **Foreground**: Dark text on light backgrounds

### Content

All text is easily editable in component files. Search for specific sections:
- Headlines: `text-foreground font-bold`
- Descriptions: `text-muted-foreground`
- CTAs: Check `href` attributes

### Services List

Edit `/components/services.tsx`:
```tsx
const services = [
  {
    title: 'Road Works & Maintenance',
    description: '...',
    icon: <IconComponent />,
  },
  // ...
];
```

## Deployment

### To Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel dashboard
3. Connect Blob storage integration
4. Deploy!

Environment variables needed:
- `BLOB_READ_WRITE_TOKEN` - Auto-set by Vercel integration

### To Other Platforms

```bash
npm run build
npm run start
```

Ensure:
- Node.js 18+ available
- `BLOB_READ_WRITE_TOKEN` environment variable set
- Build succeeds without errors

## Troubleshooting

### Images Not Loading
- Check image URLs in `/lib/images.ts`
- Verify Blob token in environment variables
- Test `/api/images` endpoint

### Portfolio Filtering Not Working
- Confirm image categories match `categoryMap` in `portfolio.tsx`
- Check browser console for errors

### Form Not Submitting
- Review email service configuration in `/components/contact.tsx`
- Check backend API availability

## Maintenance

### Regular Tasks

- **Monthly**: Update portfolio with new projects
- **Quarterly**: Review and refresh project descriptions
- **As needed**: Update contact information, team bios

### Backup Images

Export image data from `/lib/images.ts`:

```bash
# Copy contents to safe location
cp lib/images.ts backup/images-$(date +%Y%m%d).ts
```

All URLs are persisted in Vercel Blob infrastructure.

## Analytics & Performance

The site includes:
- Vercel Analytics (auto-configured if using Vercel)
- Responsive images for fast loading
- Lazy-loaded portfolio images
- Optimized CSS with Tailwind v4

Monitor via Vercel dashboard for:
- Page load times
- Image delivery performance
- User engagement

## Support & Documentation

- **Image Storage**: See `/docs/IMAGE_STORAGE.md`
- **Component Details**: Check JSDoc comments in component files
- **Tailwind Config**: Edit `/app/globals.css`
- **Next.js Docs**: https://nextjs.org/docs

## Next Steps

1. ✅ Site structure built and styled
2. ✅ Images integrated via Vercel Blob
3. ✅ Portfolio component with filtering
4. ✅ Gallery page created
5. ✅ Admin upload dashboard ready

**Future enhancements:**
- [ ] Database integration for dynamic image management
- [ ] Before/after image sliders
- [ ] Project detail pages
- [ ] Blog for engineering articles
- [ ] Client testimonials section
- [ ] Project inquiry tracking
