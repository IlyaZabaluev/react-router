import { Link } from 'react-router-dom'
import { AuthStatus } from './AuthStatus'
import { useAuth } from '../context/AuthProvider'

export const Navbar = () => {
  const { user } = useAuth()
  return (
    <>
      <AuthStatus />
      <nav>
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Login</Link>}
        <Link to="/heroes">Heroes</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
      </nav>
    </>
  )
}
