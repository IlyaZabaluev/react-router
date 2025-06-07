import { type FormEvent, useState, useRef } from 'react'
import { validateLogin } from './utils/validateLogin'
import { useAuth } from '../../app/context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export const Login = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({
      ...prev,
      [name]: validateLogin(name, value),
    }))
  }

  const handleReset = () => {
    setFormData({
      email: '',
      password: '',
    })
    setErrors({
      email: '',
      password: '',
    })
    formRef.current?.reset()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newErrors = {
      email: validateLogin('email', formData.email),
      password: validateLogin('password', formData.password),
    }

    setErrors(newErrors)

    if (!newErrors.email && !newErrors.password) {
      auth?.signin(formData, () => {
        navigate(from, { replace: true })
      })
    }
    handleReset()
  }

  return (
    <div className="container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <Stack spacing={2} width={300}>
          <TextField
            type="email"
            name="email"
            label="Email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                email: validateLogin('email', e.target.value),
              }))
            }
          />

          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                password: validateLogin('password', e.target.value),
              }))
            }
          />

          <Button
            type="submit"
            variant="contained"
            disabled={!!errors.email || !!errors.password}
          >
            Войти
          </Button>
        </Stack>
      </form>
    </div>
  )
}
