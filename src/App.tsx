import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  NotFound,
  Heroes,
  Episodes,
  HeroDetails,
  LocationDetails,
  EpisodeDetails,
  Locations,
  Login,
} from './pages'
import { AuthProvider } from './context/AuthProvider'
import { MainLayout } from './layouts/MainLayout'
import { PrivateRoute } from './components/PrivetRoute'

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/heroes/:id" element={<HeroDetails />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetails />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}
