import { createRoot } from 'react-dom/client'

import { RelayProvider } from './providers/relay'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <RelayProvider>
    <App />
  </RelayProvider>
)
