import { defineVilay } from 'vilay'
import { ThemeProvider } from './mantine'
import { initRelayEnvironment } from './RelayEnvironment'

export default defineVilay({
  initRelayEnvironment,
  head: {
    title: 'New Vilay App',
    meta: {
      description: 'Just created with create-vilay',
    },
  },
  PageLayout: ({ children }) => (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
})
