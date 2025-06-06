import { Link } from 'react-router-dom'
import { useAuth } from '../../app'
import { AuthStatus } from '../AuthStatus/AuthStatus'

export const Navbar = () => {
  const auth = useAuth()

  if (!auth) {
    return null
  }
  const { user } = auth

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
