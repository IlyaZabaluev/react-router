export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const swUrl = import.meta.env.DEV ? '/sw.ts' : '/sw.ts'

      const registration = await navigator.serviceWorker.register(swUrl, {
        scope: '/',
        type: import.meta.env.DEV ? 'module' : 'classic',
      })

      console.log('Service Worker registered:', registration)
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}
