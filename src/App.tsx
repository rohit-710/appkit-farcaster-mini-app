import { AppKitProvider } from './config/appkit'
import './App.css'

function App() {
  return (
    <AppKitProvider>
      <div className="app-container">
        <h1>Farcaster Mini App</h1>
        <div className="wallet-section">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <appkit-button />
          </div>
        </div>
      </div>
    </AppKitProvider>
  )
}

export default App
