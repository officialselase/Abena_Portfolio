# Image Optimization Guide

## Overview
This guide explains how to optimize and add images to the portfolio website for best performance.

## Image Placement
Place all images in the `/public` folder. They will be accessible at the root URL.

Example:
- File: `/public/avatar.jpg`
- URL: `/avatar.jpg`

## Optimization Guidelines

### 1. File Formats
- **WebP**: Modern format with best compression (recommended)
- **JPEG**: Good for photos, widely supported
- **PNG**: Use for images requiring transparency
- **SVG**: Use for logos and icons

### 2. Image Sizes

#### Avatar/Profile Image
- Dimensions: 400x400px (square)
- File size: < 100KB
- Format: WebP with JPEG fallback
- Create multiple sizes: 250px, 350px, 400px

#### Project Images
- Dimensions: 800x600px (landscape) or 600x800px (portrait)
- File size: < 150KB
- Format: WebP with JPEG fallback

### 3. Responsive Images
Always provide multiple sizes using srcSet:

```jsx
<LazyImage
  src="/avatar-400.jpg"
  srcSet="/avatar-250.jpg 250w, /avatar-350.jpg 350w, /avatar-400.jpg 400w"
  sizes="(max-width: 480px) 250px, (max-width: 768px) 350px, 400px"
  alt="Description"
  width={400}
  height={400}
/>
```

### 4. Optimization Tools

#### Online Tools
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [CloudConvert](https://cloudconvert.com/) - Format conversion

#### Command Line (ImageMagick)
```bash
# Convert to WebP
magick input.jpg -quality 85 output.webp

# Resize image
magick input.jpg -resize 400x400 output.jpg

# Create multiple sizes
magick input.jpg -resize 250x250 output-250.jpg
magick input.jpg -resize 350x350 output-350.jpg
magick input.jpg -resize 400x400 output-400.jpg
```

## Using the LazyImage Component

### Basic Usage
```jsx
import LazyImage from '../components/LazyImage'

<LazyImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### With Responsive Images
```jsx
<LazyImage
  src="/image-800.jpg"
  srcSet="/image-400.jpg 400w, /image-600.jpg 600w, /image-800.jpg 800w"
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
  alt="Description"
  width={800}
  height={600}
/>
```

### Above-the-Fold Images (Hero)
```jsx
<LazyImage
  src="/avatar.jpg"
  alt="Profile"
  loading="eager"
  fetchpriority="high"
  placeholder={false}
  width={400}
  height={400}
/>
```

### Below-the-Fold Images
```jsx
<LazyImage
  src="/project.jpg"
  alt="Project screenshot"
  loading="lazy"
  width={800}
  height={600}
/>
```

## Performance Checklist

- [ ] Images are in WebP format with JPEG fallback
- [ ] File sizes are under recommended limits
- [ ] Multiple sizes provided via srcSet
- [ ] Width and height attributes specified
- [ ] Alt text is descriptive and meaningful
- [ ] Above-the-fold images use loading="eager"
- [ ] Below-the-fold images use loading="lazy"
- [ ] Images are compressed without visible quality loss

## Current Image Needs

### Priority 1: Hero Section
- Professional headshot/avatar
- Size: 400x400px
- Location: `/public/avatar.jpg` and `/public/avatar.webp`

### Priority 2: Project Images (Optional)
- 5 project screenshots or visuals
- Size: 800x600px
- Location: `/public/projects/project-1.jpg`, etc.

## Testing Performance

After adding images, test with:
1. Chrome DevTools Lighthouse
2. Check "Network" tab for image load times
3. Test on slow 3G connection
4. Verify lazy loading works (images load as you scroll)

Target Metrics:
- Lighthouse Performance: 90+
- Largest Contentful Paint (LCP): < 2.5s
- Total image size: < 500KB per page
