import React from 'react'
import { Loader2 } from 'lucide-react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    disabled,
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020408] disabled:opacity-50 disabled:cursor-not-allowed hover-lift'
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white hover:from-[#597592]/90 hover:to-[#597592]/70 focus:ring-[#597592]',
      secondary: 'bg-gradient-to-r from-[#b2c1d3] to-[#b2c1d3]/80 text-[#020408] hover:from-[#b2c1d3]/90 hover:to-[#b2c1d3]/70 focus:ring-[#b2c1d3]',
      outline: 'border-2 border-[#597592]/30 text-[#b2c1d3] hover:border-[#597592] hover:text-white focus:ring-[#597592]',
      ghost: 'text-[#b2c1d3] hover:bg-[#597592]/10 hover:text-white focus:ring-[#597592]',
      danger: 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 focus:ring-red-500'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    }
    
    const widthClass = fullWidth ? 'w-full' : ''
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        )}
        {!isLoading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button