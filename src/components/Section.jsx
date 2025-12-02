import PropTypes from 'prop-types';
import './Section.css';

/**
 * Reusable Section Component
 * 
 * A semantic section container that provides consistent spacing, backgrounds,
 * and layout structure across pages. Helps maintain visual hierarchy and rhythm.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.id - Section ID for anchor links
 * @param {string} props.background - Background variant (default, secondary, gradient, dark)
 * @param {string} props.spacing - Vertical spacing (none, sm, md, lg, xl)
 * @param {boolean} props.contained - Whether to use max-width container
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.ariaLabel - Accessibility label for the section
 */
const Section = ({
  children,
  id,
  background = 'default',
  spacing = 'md',
  contained = true,
  className = '',
  ariaLabel,
  ...rest
}) => {
  const backgroundClass = {
    default: 'section-bg-default',
    secondary: 'section-bg-secondary',
    gradient: 'section-bg-gradient',
    dark: 'section-bg-dark'
  }[background] || 'section-bg-default';

  const spacingClass = {
    none: 'section-spacing-none',
    sm: 'section-spacing-sm',
    md: 'section-spacing-md',
    lg: 'section-spacing-lg',
    xl: 'section-spacing-xl'
  }[spacing] || 'section-spacing-md';

  const sectionClasses = [
    'section',
    backgroundClass,
    spacingClass,
    className
  ].filter(Boolean).join(' ');

  const content = contained ? (
    <div className="section-container">
      {children}
    </div>
  ) : children;

  return (
    <section
      id={id}
      className={sectionClasses}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  background: PropTypes.oneOf(['default', 'secondary', 'gradient', 'dark']),
  spacing: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  contained: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
};

export default Section;
