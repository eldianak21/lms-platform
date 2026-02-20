import React from 'react'
import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    error,
    leftIcon,
    rightIcon,
    fullWidth = true,
    className = '',
    ...props
  }, ref) => {
    const widthClass = fullWidth ? 'w-full' : ''
    
    return (
      <div className={`input-container ${widthClass}`}>
        {label && (
          <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#597592]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              bg-[#020408] border rounded-lg px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020408]
              transition-all duration-200
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${error 
                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                : 'border-[#597592]/30 focus:border-[#597592] focus:ring-[#597592]/20'
              }
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#597592]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-400 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5"></span>
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input