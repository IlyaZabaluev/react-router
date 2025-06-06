import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
