import { AppKitProvider } from './config/appkit'
import './App.css'

function App() {
  return (
    <AppKitProvider>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        margin: '0 auto'
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          Farcaster Mini App
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <appkit-button />
        </div>
      </div>
    </AppKitProvider>
  )
}

export default App
