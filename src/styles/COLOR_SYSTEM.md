# Portfolio Website Color System

## Overview

This document describes the complete color palette and design system for the portfolio website. All colors are defined as CSS custom properties (variables) in `colors.css` for consistency and maintainability.

## Color Palette

### Primary Colors (Blue)
**Purpose:** Main brand color used for primary actions, links, and key UI elements

- `--color-primary-600` (#2563eb) - Main primary color
- `--color-primary-700` (#1d4ed8) - Hover/active states
- `--color-primary-500` (#3b82f6) - Lighter variant
- `--color-primary-800` (#1e40af) - Darker variant

**Aliases:**
- `--color-primary` → `--color-primary-600`
- `--color-primary-hover` → `--color-primary-700`
- `--color-primary-light` → `--color-primary-100`
- `--color-primary-dark` → `--color-primary-800`

**Usage Examples:**
- Primary CTA buttons
- Navigation active states
- Links and interactive elements
- Key headings and highlights

### Secondary Colors (Purple)
**Purpose:** Secondary brand color for accents and complementary elements

- `--color-secondary-600` (#9333ea) - Main secondary color
- `--color-secondary-700` (#7e22ce) - Hover/active states
- `--color-secondary-500` (#a855f7) - Lighter variant
- `--color-secondary-800` (#6b21a8) - Darker variant

**Aliases:**
- `--color-secondary` → `--color-secondary-600`
- `--color-secondary-hover` → `--color-secondary-700`

**Usage Examples:**
- Secondary buttons
- Accent borders and decorations
- Alternative highlights
- Gradient combinations with primary

### Accent Colors (Green)
**Purpose:** Highlights, success states, and positive actions

- `--color-accent-600` (#16a34a) - Main accent color
- `--color-accent-700` (#15803d) - Hover/active states
- `--color-accent-500` (#22c55e) - Lighter variant

**Aliases:**
- `--color-accent` → `--color-accent-600`
- `--color-accent-hover` → `--color-accent-700`

**Usage Examples:**
- Success messages
- Positive metrics and achievements
- Virtual assistance section highlights
- Checkmarks and completion indicators

### Neutral Colors (Grayscale)
**Purpose:** Text, backgrounds, borders, and UI structure

**Text Colors:**
- `--color-text-primary` (#111827) - Main body text
- `--color-text-secondary` (#4b5563) - Secondary text
- `--color-text-muted` (#6b7280) - Muted/helper text
- `--color-text-light` (#9ca3af) - Light text on dark backgrounds

**Background Colors:**
- `--color-bg-primary` (#ffffff) - Main background
- `--color-bg-secondary` (#f9fafb) - Secondary sections
- `--color-bg-tertiary` (#f3f4f6) - Tertiary/card backgrounds

**Border Colors:**
- `--color-border-light` (#e5e7eb) - Light borders
- `--color-border-medium` (#d1d5db) - Medium borders
- `--color-border-dark` (#9ca3af) - Dark borders

## Semantic Colors

### Success
- `--color-success` (#16a34a)
- `--color-success-bg` (#f0fdf4)
- `--color-success-border` (#22c55e)

**Usage:** Form success messages, positive feedback

### Error
- `--color-error` (#dc2626)
- `--color-error-bg` (#fef2f2)
- `--color-error-border` (#ef4444)

**Usage:** Form validation errors, error messages

### Warning
- `--color-warning` (#d97706)
- `--color-warning-bg` (#fffbeb)
- `--color-warning-border` (#f59e0b)

**Usage:** Cautionary messages, alerts

### Info
- `--color-info` (#2563eb)
- `--color-info-bg` (#eff6ff)
- `--color-info-border` (#3b82f6)

**Usage:** Informational messages, tips

## Gradients

Pre-defined gradients for consistent use:

- `--gradient-primary` - Purple to violet gradient (hero sections)
- `--gradient-hero` - Same as primary (header backgrounds)
- `--gradient-neutral` - Light gray gradient (subtle backgrounds)
- `--gradient-success` - Green to blue gradient (success states)

**Usage Example:**
```css
.hero-section {
  background: var(--gradient-hero);
}
```

## Shadows

Consistent shadow system with multiple levels:

- `--shadow-sm` - Subtle shadow for small elements
- `--shadow-base` - Base shadow for cards
- `--shadow-md` - Medium shadow for elevated elements
- `--shadow-lg` - Large shadow for modals
- `--shadow-xl` - Extra large shadow for prominent elements

**Colored Shadows:**
- `--shadow-primary` - Blue-tinted shadow for primary buttons
- `--shadow-secondary` - Purple-tinted shadow for secondary elements
- `--shadow-accent` - Green-tinted shadow for accent elements

## Usage Guidelines

### 1. Always Use CSS Variables

❌ **Don't:**
```css
.button {
  background-color: #2563eb;
  color: #ffffff;
}
```

✅ **Do:**
```css
.button {
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
}
```

### 2. Use Semantic Names

❌ **Don't:**
```css
.text {
  color: var(--color-neutral-600);
}
```

✅ **Do:**
```css
.text {
  color: var(--color-text-secondary);
}
```

### 3. Maintain Contrast Ratios

Ensure text meets WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio

### 4. Consistent Interactive States

For interactive elements, always define:
- Default state
- Hover state (use `--color-*-hover` variants)
- Focus state (use outline with `--color-primary`)
- Active/pressed state

**Example:**
```css
.button {
  background-color: var(--color-primary);
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-primary);
}

.button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 5. Use Gradients Sparingly

Gradients should be used for:
- Hero sections
- Header backgrounds
- Special highlight sections
- Button hover effects (subtle)

Avoid using gradients for:
- Body text backgrounds
- Small UI elements
- Repetitive components

## Color Accessibility

### Contrast Checker

Always verify color combinations meet accessibility standards:
- Use browser DevTools or online contrast checkers
- Test with actual users when possible
- Consider colorblind users (avoid red/green only indicators)

### Dark Mode Preparation

The color system includes commented-out dark mode support in `colors.css`. When implementing dark mode:

1. Uncomment the dark mode section
2. Test all components in both modes
3. Ensure sufficient contrast in both themes
4. Use semantic color variables (they'll automatically adapt)

## Migration Guide

### Updating Existing Components

When updating existing CSS to use the new color system:

1. **Identify the color purpose** (primary action, text, background, etc.)
2. **Find the matching variable** in the color system
3. **Replace the hardcoded value** with the CSS variable
4. **Test the component** to ensure visual consistency

### Common Replacements

| Old Value | New Variable | Purpose |
|-----------|--------------|---------|
| `#2563eb` | `var(--color-primary)` | Primary blue |
| `#3182ce` | `var(--color-primary-600)` | Primary blue variant |
| `#667eea` | Part of `var(--gradient-primary)` | Purple gradient |
| `#764ba2` | Part of `var(--gradient-primary)` | Purple gradient |
| `#48bb78` | `var(--color-accent)` | Green accent |
| `#4a5568` | `var(--color-text-secondary)` | Secondary text |
| `#1a1a1a` | `var(--color-text-primary)` | Primary text |
| `#f7fafc` | `var(--color-bg-secondary)` | Secondary background |
| `#ffffff` | `var(--color-bg-primary)` | Primary background |

## Examples

### Button Styles
```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  border: none;
  box-shadow: var(--shadow-base);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-primary);
}
```

### Card Component
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

### Text Hierarchy
```css
.heading {
  color: var(--color-text-primary);
}

.subheading {
  color: var(--color-text-secondary);
}

.caption {
  color: var(--color-text-muted);
}
```

## Resources

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Maintenance

When adding new colors:
1. Add them to `colors.css` with proper documentation
2. Update this README with usage guidelines
3. Ensure they follow the existing naming convention
4. Test for accessibility compliance
5. Update any affected components
