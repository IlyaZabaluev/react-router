import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { MainLayout } from '../pages/layouts/MainLayout'
import { PrivateRoute } from '../components/PrivetRoute/PrivetRoute'
import { lazyNamed } from './utils/lazy'
import { ErrorBoundary } from '../ErrorBoundary'
import { ErrorFallback } from '../components/ErrorFallback/ErrorFallback'

const HomePage = lazyNamed(import('../pages/HomePage/HomePage'), 'HomePage')
const NotFound = lazyNamed(import('../pages/NotFound/NotFound'), 'NotFound')
const Heroes = lazyNamed(import('../pages/Heroes/Heroes'), 'Heroes')
const Episodes = lazyNamed(import('../pages/Episodes/Episodes'), 'Episodes')
const HeroDetails = lazyNamed(
  import('../pages/Heroes/HeroDetails'),
  'HeroDetails'
)
const LocationDetails = lazyNamed(
  import('../pages/Locations/LocationDetails'),
  'LocationDetails'
)
const EpisodeDetails = lazyNamed(
  import('../pages/Episodes/EpisodDetails'),
  'EpisodeDetails'
)
const Locations = lazyNamed(import('../pages/Locations/Locations'), 'Locations')
const Login = lazyNamed(import('../pages/Login/Login'), 'Login')

const Loading = () => <div>Loading...</div>

export const App = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.ts').then(
          (registration) => {
            console.log('ServiceWorker registration successful', registration)
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err)
          }
        )
      })
    }
  }, [])

  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <HomePage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/heroes"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <Heroes />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/heroes/:id"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <HeroDetails />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/locations"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <Locations />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/locations/:id"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <LocationDetails />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/episodes"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <Episodes />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/episodes/:id"
                element={
                  <ErrorBoundary fallback={<ErrorFallback />}>
                    <EpisodeDetails />
                  </ErrorBoundary>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  )
}
