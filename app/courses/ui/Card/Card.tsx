import React from 'react'
import './Card.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  bordered?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
  fullWidth?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    hoverable = false,
    bordered = true,
    padding = 'md',
    fullWidth = false,
    className = '',
    ...props
  }, ref) => {
    const paddingClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      none: ''
    }
    
    const widthClass = fullWidth ? 'w-full' : ''
    const hoverClass = hoverable ? 'hover-lift' : ''
    const borderClass = bordered ? 'border border-[#597592]/20' : ''
    
    return (
      <div
        ref={ref}
        className={`
          gradient-card rounded-2xl
          ${paddingClasses[padding]}
          ${widthClass}
          ${borderClass}
          ${hoverClass}
          transition-all duration-300
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card