# Reusable UI Components

This directory contains reusable UI components that provide consistent styling and behavior across the portfolio website.

## Components

### Button

A flexible button component with multiple variants, sizes, and states.

**Props:**
- `children` (required): Button content
- `variant`: Style variant - `'primary'`, `'secondary'`, `'gradient'`, `'filter'`, `'close'` (default: `'primary'`)
- `size`: Button size - `'sm'`, `'md'`, `'lg'` (default: `'md'`)
- `fullWidth`: Whether button takes full width (default: `false`)
- `active`: Active state for filter buttons (default: `false`)
- `disabled`: Disabled state (default: `false`)
- `type`: Button type - `'button'`, `'submit'`, `'reset'` (default: `'button'`)
- `onClick`: Click handler function
- `className`: Additional CSS classes
- `ariaLabel`: Accessibility label

**Usage:**
```jsx
import Button from './components/Button';

// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Secondary button with custom size
<Button variant="secondary" size="lg">
  Learn More
</Button>

// Gradient button (full width)
<Button variant="gradient" fullWidth>
  Get Started
</Button>

// Filter button with active state
<Button variant="filter" active={isActive}>
  Category
</Button>
```

---

### Card

A flexible card container for displaying content in a structured, visually consistent manner.

**Props:**
- `children` (required): Card content
- `variant`: Style variant - `'default'`, `'elevated'`, `'bordered'`, `'flat'` (default: `'default'`)
- `hoverable`: Whether card has hover effects (default: `false`)
- `clickable`: Whether card is clickable (default: `false`)
- `onClick`: Click handler for clickable cards
- `className`: Additional CSS classes
- `padding`: Padding size - `'none'`, `'sm'`, `'md'`, `'lg'` (default: `'md'`)

**Usage:**
```jsx
import Card from './components/Card';

// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Elevated card with hover effect
<Card variant="elevated" hoverable>
  <h3>Hover Me</h3>
  <p>This card lifts on hover.</p>
</Card>

// Clickable card
<Card 
  variant="default" 
  hoverable 
  clickable 
  onClick={() => console.log('Card clicked')}
>
  <h3>Click Me</h3>
  <p>This card is interactive.</p>
</Card>

// Card with custom padding
<Card variant="bordered" padding="lg">
  <h3>Large Padding</h3>
  <p>This card has extra padding.</p>
</Card>
```

---

### Section

A semantic section container that provides consistent spacing, backgrounds, and layout structure.

**Props:**
- `children` (required): Section content
- `id`: Section ID for anchor links
- `background`: Background variant - `'default'`, `'secondary'`, `'gradient'`, `'dark'` (default: `'default'`)
- `spacing`: Vertical spacing - `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` (default: `'md'`)
- `contained`: Whether to use max-width container (default: `true`)
- `className`: Additional CSS classes
- `ariaLabel`: Accessibility label

**Usage:**
```jsx
import Section from './components/Section';

// Default section with contained content
<Section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</Section>

// Section with gradient background
<Section background="gradient" spacing="lg">
  <h2>Hero Section</h2>
  <p>This section has a gradient background.</p>
</Section>

// Full-width section (not contained)
<Section contained={false} background="dark">
  <div style={{ padding: '0 2rem' }}>
    <h2>Full Width Content</h2>
  </div>
</Section>

// Section with ID for anchor links
<Section id="about" spacing="xl">
  <h2>About Me</h2>
  <p>Content...</p>
</Section>
```

---

## Design System Integration

All components integrate with the centralized design system:

- **Colors**: Use CSS variables from `src/styles/colors.css`
- **Spacing**: Use spacing scale from `src/styles/global.css`
- **Typography**: Inherit from global typography settings
- **Buttons**: Use button styles from `src/styles/buttons.css`

## Accessibility

All components follow WCAG AA accessibility standards:

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Semantic HTML elements
- Color contrast compliance

## Examples

See `ComponentExamples.jsx` for a comprehensive showcase of all component variants and usage patterns.
