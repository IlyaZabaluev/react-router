import { type FormEvent, useState, useRef } from 'react'
import { validateLogin } from '../../utils/validateLogin'
import { Input } from '../../components/Input'
import { useAuth } from '../../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

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
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          withAsterisk
          size="md"
          radius="md"
          onBlur={(e) =>
            setErrors((prev) => ({
              ...prev,
              email: validateLogin('email', e.target.value),
            }))
          }
        />

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          withAsterisk
          size="md"
          radius="md"
          onBlur={(e) =>
            setErrors((prev) => ({
              ...prev,
              password: validateLogin('password', e.target.value),
            }))
          }
        />

        <button
          type="submit"
          className="button"
          disabled={!!errors.email || !!errors.password}
        >
          Войти
        </button>
      </form>
    </div>
  )
}
