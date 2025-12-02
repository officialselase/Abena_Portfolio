# Company & University Logos

This folder is for storing logos of companies you've worked with and educational institutions.

## Purpose
Add logos to enhance credibility and visual interest on:
- Experience page (company logos next to job titles)
- About page (university logo in education section)
- Footer (partner/client logos if applicable)

## Recommended Files

### Educational Institution
- `logo-university.svg` - Your university logo
- `logo-university.png` - PNG fallback (if SVG unavailable)

### Previous Employers
- `logo-company-1.svg` - First company logo
- `logo-company-2.svg` - Second company logo
- `logo-company-3.svg` - Third company logo

### Clients/Partners (if applicable)
- `logo-client-1.svg` - Client logo
- `logo-partner-1.svg` - Partner logo

## Specifications

### File Format
- **Preferred:** SVG (scalable, small file size)
- **Alternative:** PNG with transparency
- **Avoid:** JPEG (no transparency support)

### Dimensions
- **Recommended:** 200x100px (2:1 ratio)
- **Alternative:** 150x150px (square)
- **Maximum:** 300x150px

### File Size
- **Target:** < 20KB per logo
- **Maximum:** < 50KB per logo

### Naming Convention
```
logo-{organization-name}.{format}

Examples:
- logo-university-name.svg
- logo-company-name.svg
- logo-client-name.svg
```

## How to Obtain Logos

### Official Brand Assets
1. Check company/university brand portal or press kit
2. Download official logo files
3. Use approved versions only

### From Websites
1. Visit official website
2. Look for "Press" or "Media" section
3. Download high-resolution logo
4. Ensure you have permission to use

### From LinkedIn
1. Visit company LinkedIn page
2. Download company logo (right-click)
3. May need to optimize/resize

## Legal Considerations

⚠️ **Important:** Ensure you have permission to use logos

### Safe to Use
- ✅ Your university logo (as an alumnus)
- ✅ Previous employer logos (showing work history)
- ✅ Logos from official brand assets/press kits

### Requires Permission
- ⚠️ Client logos (get written permission)
- ⚠️ Partner logos (confirm usage rights)
- ⚠️ Logos with trademark restrictions

### Alternative
If you can't use logos, use text-only format:
- Company name in styled text
- University name with degree info
- No visual logo needed

## Optimization

### For SVG Files
1. Use SVGO or SVGOMG to optimize
2. Remove unnecessary metadata
3. Ensure viewBox is set correctly
4. Test scaling at different sizes

### For PNG Files
1. Ensure transparent background
2. Export at 2x resolution (400x200px)
3. Compress using TinyPNG or Squoosh
4. Verify file size < 50KB

## Implementation

### Experience Page
Update `src/pages/Experience.jsx`:

```javascript
const experiences = [
  {
    company: "Company Name",
    logo: "/logos/logo-company-name.svg",
    // ... other fields
  }
]
```

### About Page
Update education section:

```javascript
<div className="education">
  <img 
    src="/logos/logo-university.svg" 
    alt="University Name"
    className="university-logo"
  />
  <h3>Business Administration Degree</h3>
  <p>University Name</p>
</div>
```

## Styling Tips

### CSS for Logos
```css
.company-logo {
  width: 120px;
  height: 60px;
  object-fit: contain;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.company-logo:hover {
  opacity: 1;
}
```

### Responsive Sizing
- Desktop: 120x60px
- Tablet: 100x50px
- Mobile: 80x40px

## Accessibility

Always include alt text:
```html
<img 
  src="/logos/logo-company.svg" 
  alt="Company Name logo"
/>
```

## Performance Checklist

- [ ] All logos < 50KB each
- [ ] SVG format preferred
- [ ] PNG has transparent background
- [ ] Logos load quickly
- [ ] Proper alt text included
- [ ] Responsive sizing works

## Need Help?

- **Image optimization:** See `../IMAGE_OPTIMIZATION_GUIDE.md`
- **Complete asset guide:** See `../ADDITIONAL_ASSETS_GUIDE.md`
- **Quick checklist:** See `../ASSETS_CHECKLIST.md`

---

**Note:** Logos are optional. Only add them if you have permission and they enhance your portfolio. Text-only format works perfectly fine!
