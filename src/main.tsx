import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Buffer } from 'buffer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
// import { MetaMaskProvider } from '@metamask/sdk-react'

import App from './App.tsx'
import { config } from './wagmi.ts'

import './index.css'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MetaMaskProvider 
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: 'Wagmi',
          url: 'window.location.href',
        },
      }}> */}
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    {/* </MetaMaskProvider> */}
  </React.StrictMode>,
)
