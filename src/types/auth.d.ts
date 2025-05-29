export interface User {
  email: string | null
  password?: string | null
}

export interface AuthContextType {
  user: string | null
  password: string | null
  signin: (formData: LoginFormData, callback: () => void) => void
  signout: (callback: () => void) => void
}

export interface LoginFormData {
  email: string
  password: string
}
