# Image Storage & Management Guide

## Overview

This project uses **Vercel Blob** for cloud image storage combined with a local image data registry for efficient portfolio management.

## Architecture

### Components

1. **`/lib/images.ts`** - Image data registry
   - Centralized store for all project images
   - Contains metadata: title, description, category, location, role
   - Functions: `getImagesByCategory()`, `getImageById()`, `getAllImages()`

2. **`/app/api/images/route.ts`** - Upload API endpoint
   - Handles file uploads to Vercel Blob
   - Returns public URL for uploaded images
   - Accessible via POST to `/api/images`

3. **`/components/project-image.tsx`** - Reusable image component
   - Wraps project images with optimizations
   - Includes lazy loading and gradients

4. **Image Pages**
   - `/` - Hero and About sections use founder image
   - `/#portfolio` - Portfolio section with filtered gallery
   - `/gallery` - Full gallery view of all projects
   - `/admin/images` - Image management dashboard

## Image Categories

Images are organized by category:

- `founder` - Founder/team portraits
- `residential` - Residential construction projects
- `commercial` - Commercial building projects
- `roads` - Road construction works
- `drainage` - Drainage and culvert works
- `tourist` - Tourist camps and lodges
- `exterior` - Exterior and compound works
- `supervision` - On-site supervision photos

## Adding New Images

### Method 1: Via Admin Dashboard
1. Navigate to `/admin/images`
2. Upload images using the file upload interface
3. Images are stored in Vercel Blob
4. Manually add metadata to `/lib/images.ts`

### Method 2: Direct Database Entry
Edit `/lib/images.ts` and add to the `projectImages` array:

```typescript
{
  id: 'unique-id',
  url: 'https://your-blob-storage-url.com/image.jpg',
  title: 'Project Title',
  description: 'Brief description',
  category: 'residential',
  location: 'Jinja, Uganda',
  role: 'Project Manager',
}
```

## Environment Setup

Ensure you have:
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob token (auto-configured with Vercel integration)
- Blob storage integration enabled in Vercel project

## Using Images

### In Components

```tsx
import { getImageById, getImagesByCategory } from '@/lib/images';

// Get specific image
const founderImage = getImageById('founder-portrait');

// Get by category
const residentialProjects = getImagesByCategory('residential');

// Display
<img src={image.url} alt={image.title} />
```

### Portfolio Filtering

The portfolio component automatically filters by category:
- All Projects
- Commercial Buildings
- Residential Buildings
- Supervision
- Roads
- Drainage
- Tourist Camps
- Exterior Works

## Image URL Format

All images use Vercel Blob public URLs:
```
https://[DOMAIN].public.blob.vercel-storage.com/[FILENAME]
```

These URLs are:
- Public and persistent
- CDN-backed for fast delivery
- Automatically optimized

## Performance Considerations

- Images use lazy loading by default
- Portfolio uses responsive `object-cover` for consistent sizing
- Gallery implements responsive grids (1 col mobile, 2 col tablet, 3 col desktop)
- Images have gradient overlays for better text readability

## Backup & Recovery

All image URLs are stored in:
1. `/lib/images.ts` - Primary source of truth
2. Vercel Blob storage - Persistent cloud backup

To backup: Export the images array from `/lib/images.ts`

## Future Enhancements

- [ ] Integrate database for dynamic image management
- [ ] Add image transformation (resize, optimize)
- [ ] Implement image analytics
- [ ] Add before/after image sliders for project comparisons
