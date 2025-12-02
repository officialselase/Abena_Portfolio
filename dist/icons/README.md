# Custom Icons & Visual Elements

This folder is for storing custom icons and visual elements for your portfolio.

## Purpose
Add custom icons to enhance visual hierarchy and user experience on:
- Skills page (skill category icons)
- Projects page (project category icons)
- About page (section icons)
- Navigation (custom menu icons)

## Current Status
The website currently uses emoji (📊, 💻, 💰, 🎯, 📅) as visual indicators. Custom icons can provide a more professional, cohesive look.

## Recommended Files

### Skill Category Icons
- `icon-operational-strategy.svg` - For Operational Strategy skills
- `icon-business-admin.svg` - For Business Administration skills
- `icon-virtual-assistant.svg` - For Virtual Assistance skills
- `icon-management.svg` - For Management skills

### Project Category Icons
- `icon-process-optimization.svg` - Process/workflow icon
- `icon-team-coordination.svg` - Team/collaboration icon
- `icon-budget-finance.svg` - Finance/budget icon
- `icon-onboarding.svg` - People/training icon
- `icon-calendar.svg` - Calendar/scheduling icon

### General Icons
- `icon-email.svg` - Contact email
- `icon-linkedin.svg` - LinkedIn profile
- `icon-phone.svg` - Phone contact
- `icon-download.svg` - Resume download
- `icon-external-link.svg` - External links

## Specifications

### File Format
- **Required:** SVG (scalable vector graphics)
- **Benefits:** Small file size, scales perfectly, easy to style with CSS

### Dimensions
- **Recommended:** 24x24px viewBox
- **Alternative:** 32x32px or 48x48px for larger icons
- **Consistent:** Use same size for all icons in a set

### File Size
- **Target:** < 5KB per icon
- **Maximum:** < 10KB per icon

### Style
- **Consistent:** All icons should match in style (line, solid, or duotone)
- **Simple:** Clean, recognizable shapes
- **Professional:** Appropriate for business context

### Naming Convention
```
icon-{name}.svg

Examples:
- icon-operational-strategy.svg
- icon-business-admin.svg
- icon-email.svg
```

## Where to Get Icons

### Free Icon Libraries (Recommended)

#### 1. Heroicons (Recommended)
- **URL:** https://heroicons.com/
- **Style:** Clean, modern, professional
- **License:** MIT (free for commercial use)
- **Formats:** SVG, React components
- **Best for:** General UI icons

#### 2. Feather Icons
- **URL:** https://feathericons.com/
- **Style:** Minimal line icons
- **License:** MIT
- **Best for:** Simple, elegant look

#### 3. Lucide
- **URL:** https://lucide.dev/
- **Style:** Beautiful, consistent icons
- **License:** ISC (free)
- **Best for:** Modern, professional sites

#### 4. Font Awesome (Free)
- **URL:** https://fontawesome.com/
- **Style:** Comprehensive icon set
- **License:** Free tier available
- **Best for:** Wide variety of icons

#### 5. Phosphor Icons
- **URL:** https://phosphoricons.com/
- **Style:** Flexible, multiple weights
- **License:** MIT
- **Best for:** Customizable appearance

### Custom Icon Creation

If you want custom icons:
1. **Figma** - Design custom icons
2. **Illustrator** - Professional vector design
3. **Inkscape** - Free vector editor
4. **Noun Project** - Purchase custom icons

## How to Add Icons

### Step 1: Download Icons
1. Visit icon library (e.g., Heroicons)
2. Search for relevant icons:
   - "chart" for operational strategy
   - "briefcase" for business admin
   - "users" for team/management
   - "calendar" for scheduling
3. Download as SVG
4. Save to this folder with consistent naming

### Step 2: Optimize SVGs
Use SVGOMG (https://jakearchibald.github.io/svgomg/):
1. Upload SVG file
2. Enable optimization options
3. Download optimized version
4. Verify file size < 10KB

### Step 3: Implement in Components

#### Option A: Direct SVG Import (Recommended)
```javascript
import StrategyIcon from '/icons/icon-operational-strategy.svg?react'

function SkillCard() {
  return (
    <div className="skill-card">
      <StrategyIcon className="skill-icon" />
      <h3>Operational Strategy</h3>
    </div>
  )
}
```

#### Option B: Inline SVG
```javascript
function SkillCard() {
  return (
    <div className="skill-card">
      <svg className="skill-icon" viewBox="0 0 24 24">
        {/* SVG path data */}
      </svg>
      <h3>Operational Strategy</h3>
    </div>
  )
}
```

#### Option C: Image Tag
```javascript
function SkillCard() {
  return (
    <div className="skill-card">
      <img 
        src="/icons/icon-operational-strategy.svg" 
        alt=""
        className="skill-icon"
        aria-hidden="true"
      />
      <h3>Operational Strategy</h3>
    </div>
  )
}
```

## Styling Icons

### CSS for Icon Sizing
```css
.skill-icon {
  width: 48px;
  height: 48px;
  color: var(--primary-color);
}

.project-icon {
  width: 32px;
  height: 32px;
  color: var(--accent-color);
}

.nav-icon {
  width: 24px;
  height: 24px;
}
```

### CSS for Icon Colors
```css
/* For inline SVG or imported SVG components */
.icon {
  fill: currentColor; /* Inherits text color */
}

.icon-primary {
  color: var(--primary-color);
}

.icon-secondary {
  color: var(--secondary-color);
}
```

### Hover Effects
```css
.icon-button {
  transition: transform 0.2s, color 0.2s;
}

.icon-button:hover {
  transform: scale(1.1);
  color: var(--primary-color);
}
```

## Icon Recommendations by Section

### Skills Page
- **Operational Strategy:** chart-line, trending-up, target
- **Business Administration:** briefcase, building, document
- **Virtual Assistance:** laptop, headset, message
- **Management:** users, user-group, organization

### Projects Page
- **Process Optimization:** cog, workflow, chart-bar
- **Team Coordination:** users, chat, network
- **Budget Management:** currency-dollar, calculator, chart-pie
- **Onboarding:** user-plus, academic-cap, clipboard
- **Calendar Optimization:** calendar, clock, schedule

### Contact Page
- **Email:** envelope, mail, at-symbol
- **LinkedIn:** linkedin (brand icon)
- **Phone:** phone, device-mobile
- **Download:** arrow-down-tray, document-arrow-down

## Accessibility

### For Decorative Icons
```html
<img 
  src="/icons/icon-strategy.svg" 
  alt=""
  aria-hidden="true"
/>
```

### For Meaningful Icons
```html
<img 
  src="/icons/icon-email.svg" 
  alt="Email"
/>
```

### For Icon Buttons
```html
<button aria-label="Download resume">
  <img src="/icons/icon-download.svg" alt="" aria-hidden="true" />
</button>
```

## Performance Checklist

- [ ] All icons < 10KB each
- [ ] SVG format used
- [ ] Consistent viewBox size
- [ ] Optimized with SVGOMG
- [ ] Proper aria labels
- [ ] Icons scale properly
- [ ] Colors match brand

## Icon Set Consistency

Choose ONE icon style and stick with it:
- ✅ All line icons (Feather, Heroicons outline)
- ✅ All solid icons (Heroicons solid)
- ✅ All duotone icons (Font Awesome duotone)
- ❌ Mix of different styles

## Alternative: Icon Fonts

If you prefer icon fonts:
1. Use Font Awesome CDN
2. Or use Google Material Icons
3. Add to HTML head:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Then use in components:
```html
<i class="fas fa-chart-line"></i>
```

## Need Help?

- **Complete asset guide:** See `../ADDITIONAL_ASSETS_GUIDE.md`
- **Quick checklist:** See `../ASSETS_CHECKLIST.md`
- **Icon libraries:** See recommendations above

---

**Note:** Custom icons are optional. The current emoji approach works fine! Only add custom icons if you want a more polished, professional look with consistent branding.
