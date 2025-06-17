import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import React from 'react'
import { sdk } from '@farcaster/frame-sdk'

// Setup queryClient
const queryClient = new QueryClient()

// Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '9659f2ae0555a6b5d9ae8e232ebf9854' // Replace with your actual project ID

// Initialize Farcaster Mini App
sdk.actions.ready()
  .catch((error: unknown) => console.error('Failed to initialize Farcaster Mini App:', error))

// Create metadata object
const metadata = {
  name: 'Farcaster Mini App',
  description: 'A simple Farcaster mini app with wallet connection',
  url: 'https://example.com', // Replace with your actual domain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Set the networks
const networks = [mainnet, arbitrum]

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum], // Explicitly spread as tuple to satisfy type constraint
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return React.createElement(
    WagmiProvider,
    { config: wagmiAdapter.wagmiConfig },
    React.createElement(
      QueryClientProvider,
      { client: queryClient },
      children
    )
  )
} 