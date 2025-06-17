import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { sdk } from '@farcaster/frame-sdk'

// Initialize Farcaster Mini App
sdk.actions.ready()
  .catch((error: unknown) => console.error('Failed to initialize Farcaster Mini App:', error))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
