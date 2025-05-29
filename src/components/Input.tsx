import React, { forwardRef, useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'

type InputBaseProps = {
  label?: string
  description?: string
  error?: string
  icon?: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  withAsterisk?: boolean
}

type InputProps = InputBaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    description,
    error,
    icon,
    size = 'md',
    radius = 'sm',
    withAsterisk,
    type,
    className,
    ...rest
  } = props

  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && showPassword ? 'text' : type

  return (
    <div>
      {label && (
        <label>
          {label}
          {withAsterisk && <span> *</span>}
        </label>
      )}

      <div>
        {icon && <div>{icon}</div>}

        <input ref={ref} type={inputType} {...rest} />

        {type === 'password' && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
          </button>
        )}
      </div>

      {description && <div>{description}</div>}
      {error && <div>{error}</div>}
    </div>
  )
})

Input.displayName = 'Input'
