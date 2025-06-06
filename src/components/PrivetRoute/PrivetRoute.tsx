import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../app/context/AuthProvider'

export const PrivateRoute = () => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
