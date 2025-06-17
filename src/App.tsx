import React from 'react'
import { AppKitProvider } from './config/appkit'
import './App.css'

function App() {
  return (
    <AppKitProvider>
      <div className="app-container">
        <h1>Farcaster Mini App</h1>
        <div>
          <appkit-button />
        </div>
      </div>
    </AppKitProvider>
  )
}

export default App
