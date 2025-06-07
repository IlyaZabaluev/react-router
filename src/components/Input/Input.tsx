// import React, { forwardRef} from 'react'

// type InputBaseProps = {
//   label?: string
//   description?: string
//   error?: string
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
//   radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
//   withAsterisk?: boolean
// }

// type InputProps = InputBaseProps &
//   Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

// export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   const {
//     label,
//     description,
//     error,
//     size = 'md',
//     radius = 'sm',
//     withAsterisk,
//     type,
//     className,
//     ...rest
//   } = props

//   return (
//     <div>
//       {label && (
//         <label>
//           {label}
//           {withAsterisk && <span> *</span>}
//         </label>
//       )}

//       <div>

//         <input ref={ref}  {...rest} />

//         {/* {type === 'password' && (
//           <button type="button" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
//           </button>
//         )} */}
//       </div>

//       {description && <div>{description}</div>}
//       {error && <div>{error}</div>}
//     </div>
//   )
// })

// Input.displayName = 'Input'
