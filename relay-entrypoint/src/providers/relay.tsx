import 'regenerator-runtime/runtime'
import { Environment, RecordSource, Store } from 'relay-runtime'
import {
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern'
import { RelayEnvironmentProvider } from 'react-relay'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve(import.meta.env.VITE_GRAPHQL_ENDPOINT),
    }),
    next => async req => {
      // patch for persisted queries with mercurius
      req.fetchOpts.body = JSON.stringify({
        query: req.id,
        persisted: true,
        variables: req.variables,
      })

      const res = await next(req)

      return res
    }
  ]
)

const source = new RecordSource()
const store = new Store(source)
export const environment = new Environment({ network, store });

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