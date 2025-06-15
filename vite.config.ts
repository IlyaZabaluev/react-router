/// <reference types="vite-plugin-pwa/client" />

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      strategies: 'injectManifest',
      injectManifest: {
        swSrc: 'public/sw.ts',
        swDest: 'dist/sw.js',
        injectionPoint: undefined,
      },
      devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: 'index.html',
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
