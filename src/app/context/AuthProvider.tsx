import { createContext, useContext, useState, type ReactNode } from 'react'
import { type AuthContextType, type LoginFormData } from '../../types/auth'

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(
    () => localStorage.getItem('email') || null
  )
  const [password, setPassword] = useState<string | null>(null)

  const signin = (formData: LoginFormData, callback: () => void) => {
    setUser(formData.email)
    localStorage.setItem('email', formData.email)
    setPassword(formData.password)
    callback()
  }

  const signout = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem('email')
    setPassword(null)
    callback()
  }

  const value: AuthContextType = {
    user,
    password,
    signin,
    signout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
