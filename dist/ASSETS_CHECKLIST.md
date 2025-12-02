# Portfolio Assets Checklist

Quick reference for gathering and preparing assets for your portfolio website.

---

## 🔴 REQUIRED Assets

### Professional Photo/Avatar
- [ ] Professional headshot obtained
- [ ] Photo cropped to square (1:1 ratio)
- [ ] Resized to 400x400px
- [ ] Converted to WebP format (`avatar-400.webp`)
- [ ] JPEG fallback created (`avatar-400.jpg`)
- [ ] Optional: 250px and 350px versions created
- [ ] Files placed in `/public` folder
- [ ] Hero component updated with new paths

**See:** `AVATAR_SETUP_INSTRUCTIONS.md` for detailed instructions

---

## 🟡 RECOMMENDED Assets

### Project Images (5 projects)
- [ ] Project 1: Process Optimization - Dashboard/workflow screenshot
- [ ] Project 2: Virtual Team Coordination - System screenshot
- [ ] Project 3: Budget Management - Budget chart/dashboard
- [ ] Project 4: Onboarding Process - Onboarding flow diagram
- [ ] Project 5: Executive Calendar - Calendar/meeting screenshot

**Specifications:**
- Size: 800x600px or 1200x675px
- Format: WebP + JPEG fallback
- File size: < 150KB each
- Location: `/public/projects/`

### Resume/CV
- [ ] Resume updated with latest experience
- [ ] Exported as PDF
- [ ] File size < 500KB
- [ ] Named: `Anabel-Resume.pdf`
- [ ] Placed in `/public` folder
- [ ] Download link added to Contact page

---

## 🟢 OPTIONAL Assets

### Company/University Logos
- [ ] University logo (for education section)
- [ ] Previous employer logos (if permitted)
- [ ] Client/partner logos (if applicable)

**Specifications:**
- Format: SVG or PNG with transparency
- Size: ~200x100px
- File size: < 50KB each
- Location: `/public/logos/`

### Certificates & Credentials
- [ ] Business Administration degree certificate
- [ ] Professional certifications (PMP, Six Sigma, etc.)
- [ ] Course completion certificates
- [ ] Awards or recognition documents

**Specifications:**
- Format: PDF (full) + JPEG (thumbnail)
- Thumbnail size: 400x300px
- Location: `/public/certificates/`

### Custom Icons
- [ ] Skill category icons
- [ ] Project category icons
- [ ] Social media icons (if custom)

**Specifications:**
- Format: SVG
- Size: 24x24px to 64x64px
- File size: < 10KB each
- Location: `/public/icons/`

---

## Asset Sources & Tools

### Where to Get Assets

**Professional Photo:**
- Professional photographer (recommended)
- High-quality smartphone photo
- AI headshot generator (ProfilePicture.ai, HeadshotPro)

**Project Images:**
- Screenshots of actual work (anonymized)
- Mockups created in Figma or Canva
- Charts from Excel/Google Sheets
- Diagrams from Draw.io or Excalidraw

**Logos:**
- Company brand asset portals
- Official websites (with permission)
- LinkedIn company pages

**Icons:**
- Heroicons.com
- Feathericons.com
- Lucide.dev
- Font Awesome

### Optimization Tools

**Image Compression:**
- Squoosh.app (easiest, online)
- TinyPNG.com
- ImageMagick (command-line)

**Design Tools:**
- Figma (professional, free tier)
- Canva (templates, easy to use)
- Photopea (free Photoshop alternative)
- Excalidraw (simple diagrams)

---

## Quick Start Guide

### Week 1: Essential Assets
1. Get professional photo
2. Optimize and add to site
3. Prepare resume PDF
4. Add download link

### Week 2: Enhanced Visuals
1. Create/gather 2-3 project images
2. Optimize and add to Projects page
3. Test performance with Lighthouse

### Week 3: Polish
1. Add remaining project images
2. Gather certificates (if available)
3. Add company logos (if permitted)
4. Final optimization pass

---

## File Structure Reference

```
public/
├── avatar-400.webp              # Required
├── avatar-400.jpg               # Required
├── avatar-250.webp              # Optional
├── avatar-250.jpg               # Optional
├── avatar-350.webp              # Optional
├── avatar-350.jpg               # Optional
├── Anabel-Resume.pdf            # Recommended
├── projects/                    # Recommended
│   ├── project-1-dashboard.webp
│   ├── project-1-dashboard.jpg
│   ├── project-2-coordination.webp
│   ├── project-2-coordination.jpg
│   ├── project-3-budget.webp
│   ├── project-3-budget.jpg
│   ├── project-4-onboarding.webp
│   ├── project-4-onboarding.jpg
│   ├── project-5-calendar.webp
│   └── project-5-calendar.jpg
├── logos/                       # Optional
│   ├── logo-university.svg
│   ├── logo-company-1.svg
│   └── logo-company-2.svg
├── certificates/                # Optional
│   ├── cert-degree.pdf
│   ├── cert-degree-thumb.jpg
│   └── cert-certification.pdf
└── icons/                       # Optional
    ├── icon-strategy.svg
    ├── icon-management.svg
    └── icon-virtual-assistant.svg
```

---

## Performance Targets

After adding assets, verify:
- [ ] Lighthouse Performance score: 90+
- [ ] Total page weight: < 2MB per page
- [ ] Individual images: < 150KB each
- [ ] All images load in < 1 second
- [ ] No layout shift (CLS < 0.1)
- [ ] Responsive on mobile/tablet/desktop

---

## Priority Order

**Do First:**
1. ⭐ Professional photo (avatar)
2. ⭐ Resume PDF

**Do Next:**
3. 🎨 3-5 project images
4. 🎨 Key certificates (if available)

**Do Later:**
5. 🎯 Company logos
6. 🎯 Custom icons
7. 🎯 Additional visuals

---

## Need Help?

- **Photo setup:** See `AVATAR_SETUP_INSTRUCTIONS.md`
- **Image optimization:** See `IMAGE_OPTIMIZATION_GUIDE.md`
- **Complete guide:** See `ADDITIONAL_ASSETS_GUIDE.md`
- **General info:** See `README.md`

---

**Remember:** The website is fully functional without these assets. Add them progressively to enhance visual appeal and credibility. Start with the professional photo, then add more as you have time!
