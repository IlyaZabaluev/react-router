import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerServiceWorker } from './serviceWorker'
import { App } from './app'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (!import.meta.env.DEV) {
  window.addEventListener('load', registerServiceWorker)
} else {
  registerServiceWorker()
}
