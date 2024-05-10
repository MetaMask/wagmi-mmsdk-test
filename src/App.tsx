import { useConnect, useAccount } from 'wagmi'
import { metaMask } from 'wagmi/connectors'

function App() {
  const { connect } = useConnect()
  const { address } = useAccount()

  return (
    <div>
      <button onClick={() => 
        connect({ connector: metaMask(),
        })
      }>
          { address ? address : "Connect" }
      </button>
    </div>
  )
}

export default App
