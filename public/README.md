# Public Assets Folder

This folder contains all public assets for the portfolio website, including images, documents, and other static files.

## Current Files

### Avatar/Profile Photo
- **avatar-placeholder.svg** - Temporary placeholder for professional photo
- **Status**: ⚠️ NEEDS REPLACEMENT with actual professional photo

### Documentation
- **AVATAR_SETUP_INSTRUCTIONS.md** - Complete guide for adding your professional photo
- **IMAGE_OPTIMIZATION_GUIDE.md** - General image optimization guidelines

## Next Steps

### Quick Start
See **`ASSETS_CHECKLIST.md`** for a quick reference of all assets needed.

### Priority 1: Add Professional Photo ⭐ REQUIRED
Follow the instructions in `AVATAR_SETUP_INSTRUCTIONS.md` to add your professional headshot.

**Quick checklist:**
1. Get a professional photo (headshot, business attire)
2. Crop to square (1:1 aspect ratio)
3. Create optimized versions:
   - avatar-400.webp (400x400px)
   - avatar-400.jpg (400x400px, fallback)
   - avatar-250.webp (250x250px, optional)
   - avatar-350.webp (350x350px, optional)
4. Place files in this folder
5. Update `src/components/Hero.jsx` with new paths

### Priority 2: Add Additional Assets 🎨 RECOMMENDED
See **`ADDITIONAL_ASSETS_GUIDE.md`** for comprehensive guidance on:
- Project images and screenshots
- Company/university logos
- Professional certificates
- Resume PDF
- Custom icons and visual elements

**Quick checklist:**
1. Create a `projects` subfolder
2. Add project screenshots/visuals (800x600px recommended)
3. Optimize using guidelines in IMAGE_OPTIMIZATION_GUIDE.md
4. Update project data in `src/pages/Projects.jsx`
5. Add resume PDF for download

## File Naming Conventions

### Avatar Images
- `avatar-{size}.{format}` (e.g., avatar-400.webp)

### Project Images
- `projects/project-{name}-{number}.{format}` (e.g., projects/project-operations-1.jpg)

### Other Assets
- Use lowercase, hyphen-separated names
- Be descriptive but concise
- Include size in filename if multiple versions exist

## Optimization Guidelines

### Image Formats
- **WebP**: Primary format (best compression)
- **JPEG**: Fallback for compatibility
- **PNG**: Only for images requiring transparency
- **SVG**: For logos, icons, and illustrations

### File Size Targets
- Avatar: < 100KB total (all sizes)
- Project images: < 150KB each
- Icons/logos: < 50KB each

### Tools
- [Squoosh.app](https://squoosh.app/) - Easy online optimizer
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- ImageMagick - Command-line tool for batch processing

## Accessing Files

Files in this folder are accessible at the root URL:
- File: `/public/avatar-400.jpg`
- URL: `/avatar-400.jpg` or `https://yourdomain.com/avatar-400.jpg`

## Performance Tips

1. **Always provide multiple sizes** using srcSet for responsive images
2. **Use WebP with JPEG fallback** for best compatibility and performance
3. **Specify width and height** attributes to prevent layout shift
4. **Use lazy loading** for below-the-fold images
5. **Compress images** to target file sizes without visible quality loss

## Testing

After adding images, verify:
- [ ] Images load correctly in browser
- [ ] File sizes are within targets
- [ ] Lighthouse performance score is 90+
- [ ] Images are responsive on mobile/tablet/desktop
- [ ] WebP format is being used in supported browsers

## Need Help?

Refer to the detailed guides:
- **ASSETS_CHECKLIST.md** - Quick reference for all assets
- **ADDITIONAL_ASSETS_GUIDE.md** - Comprehensive guide for all optional assets
- **AVATAR_SETUP_INSTRUCTIONS.md** - Step-by-step photo setup
- **RESUME_GUIDE.md** - How to create and add your resume PDF
- **IMAGE_OPTIMIZATION_GUIDE.md** - Comprehensive optimization guide

Or use online tools like Squoosh.app for easy image preparation.
