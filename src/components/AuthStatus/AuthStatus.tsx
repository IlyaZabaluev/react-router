import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/context/AuthProvider'
import Button from '@mui/material/Button'

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
      Welcom User {auth?.user}{' '}
      <Button onClick={handleSignout} variant="contained">
        Sign out
      </Button>
    </p>
  )
}
