import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/context/AuthProvider'

export const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignout = () => {
    auth?.signout(() => {
      navigate('/')
    })
  }

  if (auth?.user === null) {
    return <p>You are not logged in</p>
  }
  return (
    <p>
      Welcom User {auth?.user} <button onClick={handleSignout}>Sign out</button>
    </p>
  )
}
