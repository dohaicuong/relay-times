import { RelayEnvironmentProvider } from 'react-relay'
import { environment } from './environment'

type RelayProviderProps = {
  children: React.ReactNode
}
export const RelayProvider: React.FC<RelayProviderProps> = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
