# Resume/CV Setup Guide

## Overview
Adding a downloadable resume PDF to your portfolio website provides recruiters with a traditional format they can easily save, share, and review offline.

## Current Status
🔴 **No resume PDF currently available**

## What You Need

### Resume PDF
- **File name:** `Anabel-Resume.pdf` (or `Anabel-CV.pdf`)
- **File size:** < 500KB (ideally < 300KB)
- **Format:** PDF (not Word doc)
- **Content:** Up-to-date with portfolio information
- **ATS-friendly:** Readable by Applicant Tracking Systems

## Resume Content Checklist

Your resume should align with your portfolio website and include:

### Header
- [ ] Full name (Anabel)
- [ ] Professional title (Operational Strategist)
- [ ] Email address
- [ ] Phone number (optional)
- [ ] LinkedIn profile URL
- [ ] Portfolio website URL
- [ ] Location (city, state/country)

### Professional Summary
- [ ] 2-3 sentence overview
- [ ] Key strengths: Operational Strategy, Business Administration, Virtual Assistance
- [ ] Years of experience
- [ ] Target role focus

### Work Experience
Match the 5 projects from your portfolio:
- [ ] Company names, titles, dates
- [ ] 3-5 bullet points per role
- [ ] Quantifiable achievements (30% reduction, 50% improvement, etc.)
- [ ] Action verbs (Led, Implemented, Designed, Optimized)

### Education
- [ ] Business Administration degree
- [ ] University name
- [ ] Graduation year
- [ ] Relevant coursework or honors (optional)

### Skills
Match your Skills page categories:
- [ ] Operational Strategy
- [ ] Business Administration
- [ ] Virtual Assistance
- [ ] Management
- [ ] Technical skills (software, tools)

### Certifications (if applicable)
- [ ] Professional certifications
- [ ] Relevant training
- [ ] Dates and issuing organizations

## Resume Best Practices

### ATS-Friendly Formatting
- ✅ Use standard fonts (Arial, Calibri, Times New Roman)
- ✅ Use standard section headings (Experience, Education, Skills)
- ✅ Use bullet points for achievements
- ✅ Include relevant keywords from job descriptions
- ❌ Avoid tables, text boxes, headers/footers
- ❌ Avoid images, graphics, or fancy formatting
- ❌ Avoid columns (single column is safest)

### Content Guidelines
- ✅ Quantify achievements with numbers and percentages
- ✅ Use action verbs (Led, Managed, Implemented, Optimized)
- ✅ Tailor to target roles (Operational Strategy focus)
- ✅ Keep to 1-2 pages (1 page preferred)
- ❌ Avoid personal pronouns (I, me, my)
- ❌ Avoid generic descriptions
- ❌ Avoid outdated or irrelevant experience

### File Optimization
- ✅ Save as PDF (not Word doc)
- ✅ Use descriptive filename: `Anabel-Resume.pdf`
- ✅ Compress to < 500KB
- ✅ Test that text is selectable (not scanned image)
- ❌ Don't use password protection
- ❌ Don't embed large images

## How to Create Your Resume

### Option 1: Use a Template (Easiest)

**Google Docs Templates:**
1. Open Google Docs
2. Go to Template Gallery
3. Choose "Resume" category
4. Select professional template
5. Fill in your information
6. Download as PDF

**Microsoft Word Templates:**
1. Open Word
2. File > New
3. Search "Resume"
4. Choose professional template
5. Customize with your info
6. Save as PDF

**Canva (Visual but ATS-friendly):**
1. Go to Canva.com
2. Search "ATS Resume"
3. Choose simple, clean template
4. Customize content
5. Download as PDF

### Option 2: Use Resume Builders

**Free Resume Builders:**
- **Resume.io** - Clean, professional templates
- **Novoresume** - ATS-friendly designs
- **Zety** - Guided resume builder
- **Standard Resume** - Minimalist, ATS-optimized

### Option 3: Professional Services

If you want expert help:
- **TopResume** - Professional resume writing
- **LinkedIn Resume Builder** - Uses your LinkedIn profile
- **Fiverr** - Affordable resume writers

## Resume Content Examples

### Professional Summary Example
```
Operational Strategist with 5+ years of experience driving process optimization 
and organizational efficiency. Proven track record of reducing project delivery 
time by 30%, improving resource utilization by 25%, and leading cross-functional 
teams. Strong background in Business Administration with expertise in virtual 
team coordination, budget management, and strategic planning. Seeking to leverage 
operational excellence skills at a top-tier organization.
```

### Experience Bullet Examples
```
• Led cross-functional team to redesign core operational workflows, resulting in 
  30% reduction in project delivery time and 25% improvement in resource utilization

• Designed and implemented virtual team coordination system that improved 
  communication efficiency by 50% and reduced missed deadlines by 60%

• Developed budget tracking and approval system that eliminated budget overruns 
  and reduced approval time by 45%

• Redesigned onboarding process, reducing time-to-productivity from 4 weeks to 
  2 weeks and improving new hire satisfaction by 35%

• Implemented executive calendar optimization strategy that reduced meeting time 
  by 40% and increased focus time by 8 hours per week
```

## File Preparation

### Step 1: Create Resume
Use one of the methods above to create your resume

### Step 2: Export as PDF
- In Google Docs: File > Download > PDF
- In Word: File > Save As > PDF
- In Canva: Download > PDF Standard

### Step 3: Optimize File Size
If file is > 500KB:
1. Use online PDF compressor:
   - SmallPDF.com
   - ILovePDF.com
   - Adobe Acrobat online
2. Reduce image quality if needed
3. Remove unnecessary pages

### Step 4: Verify Quality
- [ ] Text is selectable (not image)
- [ ] All content is visible
- [ ] Formatting looks correct
- [ ] File size < 500KB
- [ ] Filename is professional

### Step 5: Add to Portfolio
1. Save file as `Anabel-Resume.pdf`
2. Place in `/public` folder
3. File will be accessible at `/Anabel-Resume.pdf`

## Implementation

### Add Download Button to Contact Page

Update `src/pages/Contact.jsx`:

```javascript
<section className="resume-download">
  <h2>Download Resume</h2>
  <p>Get a PDF copy of my resume for your records</p>
  <a 
    href="/Anabel-Resume.pdf" 
    download="Anabel-Resume.pdf"
    className="btn btn-primary"
  >
    <svg className="icon" viewBox="0 0 24 24">
      {/* Download icon */}
    </svg>
    Download Resume (PDF)
  </a>
</section>
```

### Add to Navigation (Optional)

Update `src/components/Header.jsx`:

```javascript
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/experience">Experience</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/skills">Skills</Link>
  <Link to="/contact">Contact</Link>
  <a 
    href="/Anabel-Resume.pdf" 
    download
    className="nav-link resume-link"
  >
    Resume
  </a>
</nav>
```

### Add to Footer (Optional)

```javascript
<footer>
  <div className="footer-links">
    <a href="/Anabel-Resume.pdf" download>Download Resume</a>
    <a href="mailto:your.email@example.com">Email</a>
    <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
  </div>
</footer>
```

## Styling Example

```css
.resume-download {
  text-align: center;
  padding: 3rem 1.5rem;
  background: var(--light-bg);
  border-radius: 8px;
  margin: 2rem 0;
}

.resume-download h2 {
  margin-bottom: 0.5rem;
}

.resume-download p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary .icon {
  width: 20px;
  height: 20px;
}
```

## Testing Checklist

After adding resume:
- [ ] File downloads correctly
- [ ] Filename is professional
- [ ] PDF opens in browser/viewer
- [ ] Text is selectable
- [ ] All content is visible
- [ ] File size < 500KB
- [ ] Download button works on mobile
- [ ] Link is accessible (keyboard navigation)

## Maintenance

### Keep Resume Updated
- Update when you add new projects
- Refresh every 3-6 months
- Tailor for specific job applications
- Ensure consistency with portfolio website

### Version Control
Consider keeping multiple versions:
- `Anabel-Resume-General.pdf` - General version
- `Anabel-Resume-Operations.pdf` - Operations-focused
- `Anabel-Resume-VA.pdf` - Virtual Assistant-focused

Upload the most relevant version to your portfolio.

## Privacy Considerations

### What to Include
- ✅ Professional email
- ✅ LinkedIn profile
- ✅ Portfolio website
- ✅ City/State (general location)

### What to Exclude
- ❌ Full home address
- ❌ Personal phone (unless comfortable)
- ❌ Date of birth
- ❌ Photo (unless industry standard)
- ❌ Social security number
- ❌ References (provide separately when requested)

## Need Help?

- **Resume templates:** Google Docs, Canva, Resume.io
- **Content help:** Use your portfolio project descriptions
- **Optimization:** SmallPDF.com, ILovePDF.com
- **Professional writing:** TopResume, Fiverr

---

**Next Steps:**
1. Create or update your resume
2. Export as PDF
3. Optimize file size
4. Save as `Anabel-Resume.pdf`
5. Place in `/public` folder
6. Add download button to Contact page
7. Test download functionality

Your resume should complement your portfolio website, providing recruiters with a traditional format while your website showcases your work in a more engaging, visual way!
