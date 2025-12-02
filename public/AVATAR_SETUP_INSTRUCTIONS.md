# Avatar/Professional Photo Setup Instructions

## Current Status
The website is currently using a placeholder avatar. Follow these instructions to add your professional photo.

## Required Photo Specifications

### Photo Requirements
- **Type**: Professional headshot or portrait
- **Background**: Clean, solid color or subtle professional background
- **Attire**: Professional business attire
- **Expression**: Friendly, approachable, confident
- **Lighting**: Well-lit, no harsh shadows
- **Quality**: High resolution (at least 1000x1000px original)

### Technical Specifications
- **Aspect Ratio**: Square (1:1)
- **Final Dimensions**: 400x400px (with smaller versions)
- **File Format**: WebP (primary) + JPEG (fallback)
- **File Size**: Under 100KB total
- **Color Space**: sRGB

## Step-by-Step Setup

### Step 1: Obtain Professional Photo
Options for getting a professional photo:
1. **Professional photographer** (recommended for best results)
2. **High-quality smartphone photo** with good lighting
3. **Professional photo service** (e.g., LinkedIn photo services)
4. **AI headshot generator** (e.g., ProfilePicture.ai, HeadshotPro)

### Step 2: Prepare the Image

#### Option A: Using Online Tools (Easiest)
1. Go to [Squoosh.app](https://squoosh.app/)
2. Upload your photo
3. Crop to square (1:1 aspect ratio)
4. Resize to 400x400px
5. Export as WebP (quality: 85)
6. Also export as JPEG (quality: 85) for fallback

#### Option B: Using Photoshop/GIMP
1. Open your photo
2. Crop to square using the crop tool
3. Resize to 400x400px (Image > Image Size)
4. Save for Web as JPEG (quality: 85)
5. Use a WebP converter to create WebP version

#### Option C: Using Command Line (ImageMagick)
```bash
# Install ImageMagick first if needed
# Then run these commands:

# Crop to square and resize
magick input.jpg -gravity center -crop 1:1 -resize 400x400 avatar-400.jpg

# Create smaller versions
magick avatar-400.jpg -resize 250x250 avatar-250.jpg
magick avatar-400.jpg -resize 350x350 avatar-350.jpg

# Convert to WebP
magick avatar-400.jpg -quality 85 avatar-400.webp
magick avatar-250.jpg -quality 85 avatar-250.webp
magick avatar-350.jpg -quality 85 avatar-350.webp
```

### Step 3: Add Files to Project

Place the following files in the `/public` folder:

**Required files:**
- `avatar-400.jpg` (400x400px, JPEG)
- `avatar-400.webp` (400x400px, WebP)

**Recommended files (for responsive images):**
- `avatar-250.jpg` (250x250px, JPEG)
- `avatar-250.webp` (250x250px, WebP)
- `avatar-350.jpg` (350x350px, JPEG)
- `avatar-350.webp` (350x350px, WebP)

### Step 4: Update Hero Component

The Hero component (`src/components/Hero.jsx`) is already configured to use these images. Once you add the files, update the image sources:

**Current (placeholder):**
```jsx
const avatarSrc = 'https://via.placeholder.com/400x400/667eea/ffffff?text=Anabel'
```

**Update to:**
```jsx
const avatarSrc = '/avatar-400.webp'
const avatarSrcSmall = '/avatar-250.webp'
const avatarSrcMedium = '/avatar-350.webp'
const avatarFallback = '/avatar-400.jpg'
```

Then update the LazyImage component to include fallback:
```jsx
<picture>
  <source srcSet={`${avatarSrcSmall} 250w, ${avatarSrcMedium} 350w, ${avatarSrc} 400w`} type="image/webp" />
  <LazyImage 
    src={avatarFallback}
    srcSet={`/avatar-250.jpg 250w, /avatar-350.jpg 350w, /avatar-400.jpg 400w`}
    sizes="(max-width: 480px) 250px, (max-width: 768px) 350px, 400px"
    alt={avatarAlt}
    className="avatar-image"
    loading="eager"
    decoding="async"
    fetchpriority="high"
    width={400}
    height={400}
    placeholder={false}
  />
</picture>
```

### Step 5: Verify Performance

After adding your photo:

1. **Check file sizes:**
   - Each WebP should be < 50KB
   - Each JPEG should be < 80KB
   - Total for all sizes: < 300KB

2. **Test loading:**
   - Run `npm run dev`
   - Open browser DevTools > Network tab
   - Refresh page and check image load time (should be < 500ms)

3. **Run Lighthouse audit:**
   - Open DevTools > Lighthouse
   - Run audit
   - Check Performance score (target: 90+)
   - Check Largest Contentful Paint (target: < 2.5s)

## Quick Start (Temporary Solution)

If you need a temporary professional-looking avatar while preparing your real photo:

1. Use a professional AI headshot generator:
   - [ProfilePicture.ai](https://www.profilepicture.ai/)
   - [HeadshotPro](https://www.headshotpro.com/)
   - [Aragon.ai](https://www.aragon.ai/)

2. Or use a professional illustration service:
   - [Avataaars Generator](https://getavataaars.com/)
   - [Notion-style Avatar](https://notion-avatar.vercel.app/)

## Troubleshooting

### Image not showing
- Check file names match exactly (case-sensitive)
- Verify files are in `/public` folder
- Clear browser cache and refresh

### Image too large
- Use Squoosh.app to compress further
- Reduce quality to 75-80
- Ensure dimensions are correct (400x400px max)

### Image looks blurry
- Start with higher resolution original (1000x1000px+)
- Don't compress below quality 75
- Ensure proper aspect ratio (square)

### Performance issues
- Verify WebP format is being used
- Check file sizes are under limits
- Ensure lazy loading is working for below-fold images

## Checklist

- [ ] Professional photo obtained
- [ ] Photo cropped to square (1:1 aspect ratio)
- [ ] Created 400x400px version
- [ ] Created 350x350px version (optional but recommended)
- [ ] Created 250x250px version (optional but recommended)
- [ ] Converted to WebP format
- [ ] Kept JPEG fallback versions
- [ ] All files under size limits
- [ ] Files placed in `/public` folder
- [ ] Hero.jsx updated with new image paths
- [ ] Tested in browser
- [ ] Lighthouse performance score 90+
- [ ] Image loads in under 1 second

## Need Help?

If you need assistance with image preparation:
1. Share your original photo (high resolution)
2. Use online tools like Squoosh.app for easy optimization
3. Test with the placeholder first to ensure everything works
4. Replace with real photo when ready

---

**Note**: The current placeholder (`avatar-placeholder.svg`) will be used until you add your professional photo following these instructions.
