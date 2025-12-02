import PropTypes from 'prop-types';

/**
 * Reusable Button Component
 * 
 * A flexible button component that supports multiple variants, sizes, and states.
 * Uses the centralized button styling system from buttons.css.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style variant (primary, secondary, gradient, filter, close)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {boolean} props.active - Active state for filter buttons
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.ariaLabel - Accessibility label
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  active = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
  ...rest
}) => {
  // Build class names based on props
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gradient: 'btn-gradient',
    filter: 'btn-filter',
    close: 'btn-close'
  }[variant] || 'btn-primary';

  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }[size] || '';

  const fullWidthClass = fullWidth ? 'btn-full' : '';
  const activeClass = active ? 'active' : '';

  const buttonClasses = [
    'btn',
    variantClass,
    sizeClass,
    fullWidthClass,
    activeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'gradient', 'filter', 'close']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
};

export default Button;
