# Spacing System

This document describes the spacing scale used throughout the portfolio website.

## Base Unit

The spacing system is based on an **8px base unit** (0.5rem), which provides a consistent and harmonious rhythm throughout the design.

## Spacing Scale

### Numeric Scale
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-7: 1.75rem;  /* 28px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

### Semantic Tokens
For easier understanding and consistency, we also provide semantic spacing tokens:

```css
--space-xs: var(--space-2);   /* 8px */
--space-sm: var(--space-4);   /* 16px */
--space-md: var(--space-6);   /* 24px */
--space-lg: var(--space-8);   /* 32px */
--space-xl: var(--space-12);  /* 48px */
--space-2xl: var(--space-16); /* 64px */
--space-3xl: var(--space-24); /* 96px */
```

### Component-Specific Tokens
```css
--space-section: var(--space-20);      /* 80px - between major sections */
--space-section-mobile: var(--space-12); /* 48px - sections on mobile */
--space-card-padding: var(--space-6);  /* 24px - card internal padding */
--space-container-padding: var(--space-8); /* 32px - container side padding */
--space-container-padding-mobile: var(--space-4); /* 16px - container on mobile */
```

## Usage Guidelines

### When to Use Each Scale

- **space-1 to space-3**: Small gaps, icon spacing, tight layouts
- **space-4 to space-6**: Standard component spacing, paragraph margins, button padding
- **space-8 to space-12**: Section spacing, card padding, larger gaps
- **space-16+**: Major section spacing, hero sections, page-level spacing

### Utility Classes

The spacing system includes utility classes for quick application:

#### Margin
```css
.m-0, .m-2, .m-4, .m-6, .m-8
.mt-0, .mt-2, .mt-4, .mt-6, .mt-8, .mt-12
.mb-0, .mb-2, .mb-4, .mb-6, .mb-8, .mb-12
.ml-0, .ml-2, .ml-4
.mr-0, .mr-2, .mr-4
```

#### Padding
```css
.p-0, .p-2, .p-4, .p-6, .p-8
.pt-0, .pt-2, .pt-4, .pt-6, .pt-8
.pb-0, .pb-2, .pb-4, .pb-6, .pb-8
.pl-0, .pl-2, .pl-4
.pr-0, .pr-2, .pr-4
```

#### Gap (for Flexbox/Grid)
```css
.gap-2, .gap-4, .gap-6, .gap-8
```

## Examples

### Using CSS Variables
```css
.my-component {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  gap: var(--space-4);
}
```

### Using Utility Classes
```html
<div class="p-6 mb-8">
  <h2 class="mb-4">Title</h2>
  <div class="gap-4">Content</div>
</div>
```

### Responsive Spacing
```css
.section {
  padding: var(--space-section) var(--space-container-padding);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-section-mobile) var(--space-container-padding-mobile);
  }
}
```

## Benefits

1. **Consistency**: All spacing follows the same scale
2. **Maintainability**: Changes to spacing can be made in one place
3. **Predictability**: Developers know what spacing values are available
4. **Harmony**: The 8px base creates visual rhythm
5. **Accessibility**: Consistent spacing improves readability and usability

## Migration Notes

When updating existing styles:
- Replace hardcoded values like `1rem`, `2rem` with spacing variables
- Use semantic tokens (`--space-md`) for better readability
- Use component-specific tokens for common patterns
- Maintain responsive spacing patterns with mobile variants
