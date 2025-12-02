# Certificates & Credentials

This folder is for storing professional certificates, credentials, and awards.

## Purpose
Display your qualifications and continuous learning on:
- About page (certifications section)
- Skills page (credential badges)
- Dedicated certifications section (if added)

## Recommended Files

### Degree Certificate
- `cert-business-admin-degree.pdf` - Full certificate PDF
- `cert-business-admin-thumb.jpg` - Thumbnail for display (400x300px)

### Professional Certifications
- `cert-project-management.pdf` - PMP or similar
- `cert-project-management-thumb.jpg` - Thumbnail
- `cert-six-sigma.pdf` - Six Sigma certification
- `cert-six-sigma-thumb.jpg` - Thumbnail
- `cert-leadership.pdf` - Leadership training
- `cert-leadership-thumb.jpg` - Thumbnail

### Course Completions
- `cert-operations-course.pdf` - Relevant course certificate
- `cert-operations-course-thumb.jpg` - Thumbnail

### Awards & Recognition
- `award-employee-of-year.pdf` - Award certificate
- `award-employee-of-year-thumb.jpg` - Thumbnail

## Specifications

### PDF Files (Full Certificates)
- **Format:** PDF
- **File size:** < 2MB per file
- **Resolution:** Original quality (for download)
- **Purpose:** Downloadable full certificate

### Thumbnail Images (For Display)
- **Format:** JPEG or WebP
- **Dimensions:** 400x300px (4:3 ratio)
- **File size:** < 100KB per thumbnail
- **Purpose:** Visual preview on website

### Naming Convention
```
cert-{name}.pdf          # Full certificate
cert-{name}-thumb.jpg    # Thumbnail

Examples:
- cert-business-admin-degree.pdf
- cert-business-admin-degree-thumb.jpg
- cert-project-management.pdf
- cert-project-management-thumb.jpg
```

## How to Prepare Certificates

### Step 1: Gather Digital Certificates
- Download from issuing organization
- Scan physical certificates (300 DPI minimum)
- Request digital copies if needed

### Step 2: Create PDF Versions
1. If scanned, save as PDF
2. Ensure text is readable
3. Optimize file size (< 2MB)
4. Name according to convention

### Step 3: Create Thumbnails
1. Open certificate in image editor or PDF viewer
2. Take screenshot or export as image
3. Crop to show key information:
   - Certificate title
   - Your name
   - Issuing organization
   - Date
4. Resize to 400x300px
5. Save as JPEG (quality 85)
6. Compress if needed (< 100KB)

## Optimization

### For PDF Files
Use online tools or Adobe Acrobat:
1. Reduce file size while maintaining readability
2. Target: < 2MB per file
3. Ensure text is searchable (OCR if scanned)

### For Thumbnail Images
Use Squoosh.app or similar:
1. Resize to 400x300px
2. Compress to < 100KB
3. Ensure text is still readable
4. Test on different screen sizes

## Implementation

### Option 1: Certifications Section on About Page

Update `src/pages/About.jsx`:

```javascript
const certifications = [
  {
    title: "Business Administration Degree",
    issuer: "University Name",
    date: "2020",
    thumbnail: "/certificates/cert-business-admin-thumb.jpg",
    pdf: "/certificates/cert-business-admin-degree.pdf"
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "PMI",
    date: "2022",
    thumbnail: "/certificates/cert-pmp-thumb.jpg",
    pdf: "/certificates/cert-pmp.pdf"
  }
]

// In component:
<section className="certifications">
  <h2>Certifications & Credentials</h2>
  <div className="cert-grid">
    {certifications.map(cert => (
      <div key={cert.title} className="cert-card">
        <img 
          src={cert.thumbnail} 
          alt={`${cert.title} certificate`}
          className="cert-thumbnail"
        />
        <h3>{cert.title}</h3>
        <p>{cert.issuer} • {cert.date}</p>
        <a 
          href={cert.pdf} 
          download 
          className="btn btn-secondary"
        >
          Download Certificate
        </a>
      </div>
    ))}
  </div>
</section>
```

### Option 2: Badge Display on Skills Page

```javascript
<div className="skill-badges">
  <div className="badge">
    <img 
      src="/certificates/cert-pmp-thumb.jpg" 
      alt="PMP Certified"
      className="badge-icon"
    />
    <span>PMP Certified</span>
  </div>
</div>
```

## Styling Example

```css
.cert-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.cert-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
}

.cert-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.cert-card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
```

## What to Include

### High-Value Certifications
- ✅ Degree certificates
- ✅ Professional certifications (PMP, Six Sigma, etc.)
- ✅ Industry-recognized credentials
- ✅ Relevant course completions from reputable institutions

### Consider Excluding
- ❌ Very old or outdated certifications
- ❌ Certificates from unknown organizations
- ❌ Participation certificates (unless highly relevant)
- ❌ Certificates not relevant to target roles

## Privacy Considerations

### Information to Redact (if needed)
- Certificate ID numbers (if sensitive)
- Personal identification numbers
- Signatures (if you prefer)

### Safe to Show
- ✅ Your name
- ✅ Certificate title
- ✅ Issuing organization
- ✅ Date issued
- ✅ Credential name/number (usually public)

## Verification

Many certifications can be verified online:
- Add verification links where available
- Include credential ID if public
- Link to issuing organization's verification page

Example:
```javascript
{
  title: "PMP Certification",
  verificationUrl: "https://www.pmi.org/certifications/verify",
  credentialId: "12345678"
}
```

## Performance Checklist

- [ ] PDF files < 2MB each
- [ ] Thumbnail images < 100KB each
- [ ] All thumbnails 400x300px
- [ ] Text readable in thumbnails
- [ ] Download links work correctly
- [ ] Proper alt text included

## Accessibility

### Alt Text Examples
```html
<!-- Good -->
<img alt="Project Management Professional (PMP) certificate from PMI" />

<!-- Better -->
<img alt="PMP certification awarded to [Your Name] by Project Management Institute in 2022" />
```

### Download Links
```html
<a 
  href="/certificates/cert-pmp.pdf" 
  download="Anabel-PMP-Certificate.pdf"
  aria-label="Download PMP certificate PDF"
>
  Download Certificate
</a>
```

## Need Help?

- **Image optimization:** See `../IMAGE_OPTIMIZATION_GUIDE.md`
- **Complete asset guide:** See `../ADDITIONAL_ASSETS_GUIDE.md`
- **Quick checklist:** See `../ASSETS_CHECKLIST.md`

---

**Note:** Certificates are optional but add significant credibility. Only include relevant, current certifications that support your target roles. Quality over quantity!
