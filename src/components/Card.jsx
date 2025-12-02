import PropTypes from 'prop-types';
import './Card.css';

/**
 * Reusable Card Component
 * 
 * A flexible card container component for displaying content in a structured,
 * visually consistent manner. Supports different variants and interactive states.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Card style variant (default, elevated, bordered, flat)
 * @param {boolean} props.hoverable - Whether card has hover effects
 * @param {boolean} props.clickable - Whether card is clickable (adds cursor pointer)
 * @param {Function} props.onClick - Click handler for clickable cards
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.padding - Padding size (none, sm, md, lg)
 */
const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  clickable = false,
  onClick,
  className = '',
  padding = 'md',
  ...rest
}) => {
  const variantClass = {
    default: 'card-default',
    elevated: 'card-elevated',
    bordered: 'card-bordered',
    flat: 'card-flat'
  }[variant] || 'card-default';

  const paddingClass = {
    none: 'card-padding-none',
    sm: 'card-padding-sm',
    md: 'card-padding-md',
    lg: 'card-padding-lg'
  }[padding] || 'card-padding-md';

  const hoverableClass = hoverable ? 'card-hoverable' : '';
  const clickableClass = clickable ? 'card-clickable' : '';

  const cardClasses = [
    'card',
    variantClass,
    paddingClass,
    hoverableClass,
    clickableClass,
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'bordered', 'flat']),
  hoverable: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg'])
};

export default Card;
