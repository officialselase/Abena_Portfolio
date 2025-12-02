# Project Images Folder

This folder is for storing images and visual assets related to your portfolio projects.

## Purpose
Add screenshots, diagrams, charts, or mockups that showcase your 5 key projects:
1. Process Optimization Initiative
2. Virtual Team Coordination System
3. Budget Management Overhaul
4. Onboarding Process Redesign
5. Executive Calendar & Meeting Optimization

## Recommended Files

### Project 1: Process Optimization Initiative
- `project-1-dashboard.webp` - Dashboard or workflow screenshot
- `project-1-dashboard.jpg` - JPEG fallback
- `project-1-metrics.webp` - Chart showing 30% time reduction
- `project-1-metrics.jpg` - JPEG fallback

### Project 2: Virtual Team Coordination System
- `project-2-coordination.webp` - System interface screenshot
- `project-2-coordination.jpg` - JPEG fallback
- `project-2-communication.webp` - Communication hub view
- `project-2-communication.jpg` - JPEG fallback

### Project 3: Budget Management Overhaul
- `project-3-budget.webp` - Budget tracking dashboard
- `project-3-budget.jpg` - JPEG fallback
- `project-3-chart.webp` - Chart showing budget improvements
- `project-3-chart.jpg` - JPEG fallback

### Project 4: Onboarding Process Redesign
- `project-4-onboarding.webp` - Onboarding flow diagram
- `project-4-onboarding.jpg` - JPEG fallback
- `project-4-timeline.webp` - Before/after timeline comparison
- `project-4-timeline.jpg` - JPEG fallback

### Project 5: Executive Calendar & Meeting Optimization
- `project-5-calendar.webp` - Calendar management screenshot
- `project-5-calendar.jpg` - JPEG fallback
- `project-5-meetings.webp` - Meeting optimization metrics
- `project-5-meetings.jpg` - JPEG fallback

## Specifications

### Image Dimensions
- **Recommended:** 800x600px (4:3 ratio) or 1200x675px (16:9 ratio)
- **Minimum:** 600x450px
- **Maximum:** 1920x1080px

### File Formats
- **Primary:** WebP (best compression, modern browsers)
- **Fallback:** JPEG (compatibility)
- **Avoid:** PNG (unless transparency needed)

### File Sizes
- **Target:** < 100KB per image
- **Maximum:** < 150KB per image
- **Total for all projects:** < 1MB

### Naming Convention
```
project-{number}-{description}.{format}

Examples:
- project-1-dashboard.webp
- project-2-coordination.jpg
- project-3-budget-chart.webp
```

## How to Create Project Images

### Option 1: Screenshots (Best if you have access)
1. Take screenshots of actual systems/dashboards you created
2. Anonymize any sensitive information
3. Crop to focus on key elements
4. Optimize using Squoosh.app

### Option 2: Mockups (If screenshots unavailable)
1. Use Figma or Canva to create visual representations
2. Design dashboard/interface mockups
3. Export at recommended dimensions
4. Optimize for web

### Option 3: Charts & Diagrams
1. Create charts in Excel/Google Sheets showing impact metrics
2. Export as high-quality image
3. Create process flow diagrams in Draw.io or Excalidraw
4. Optimize for web

### Option 4: Stock Images (Last resort)
1. Find relevant professional images on Unsplash or Pexels
2. Ensure they represent your work conceptually
3. Add overlays or annotations if needed
4. Optimize for web

## Optimization Workflow

1. **Resize** to recommended dimensions (800x600px or 1200x675px)
2. **Compress** using Squoosh.app:
   - WebP quality: 80-85
   - JPEG quality: 80-85
3. **Verify** file size is < 150KB
4. **Create both formats** (WebP + JPEG)
5. **Test** loading speed and visual quality

## Implementation

After adding images, update `src/pages/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Process Optimization Initiative",
    // ... other fields
    image: "/projects/project-1-dashboard.webp",
    imageFallback: "/projects/project-1-dashboard.jpg"
  },
  // ... other projects
]
```

Then update `ProjectCard.jsx` to display images instead of emoji.

## Performance Checklist

After adding project images:
- [ ] All images < 150KB each
- [ ] Total images < 1MB
- [ ] WebP format with JPEG fallback
- [ ] Images load in < 1 second
- [ ] Lighthouse performance score 90+
- [ ] Responsive on all devices

## Tips

### For Screenshots
- Use high-resolution display for crisp screenshots
- Capture at 2x resolution, then scale down
- Remove any personal/confidential information
- Focus on the most impactful visual elements

### For Mockups
- Keep designs clean and professional
- Use consistent color scheme with your portfolio
- Highlight key metrics and results
- Make text readable (minimum 14px font size)

### For Charts
- Use clear, easy-to-read visualizations
- Highlight the key metrics (30% reduction, 50% improvement, etc.)
- Use colors that match your portfolio brand
- Export at high resolution for clarity

## Need Help?

- **Image optimization:** See `../IMAGE_OPTIMIZATION_GUIDE.md`
- **Complete asset guide:** See `../ADDITIONAL_ASSETS_GUIDE.md`
- **Quick checklist:** See `../ASSETS_CHECKLIST.md`

---

**Note:** Project images are optional but highly recommended. They make your portfolio more engaging and help recruiters visualize your work. Start with 2-3 images and add more over time!
