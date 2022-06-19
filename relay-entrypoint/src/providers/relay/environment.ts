import 'regenerator-runtime/runtime'
import { Environment, RecordSource, Store } from 'relay-runtime'
import {
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern'
import { mercuriusPersistedQueriesMiddleware } from './mercuriusPersistedQueriesMiddleware'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve(import.meta.env.VITE_GRAPHQL_ENDPOINT),
    }),
    mercuriusPersistedQueriesMiddleware(),
  ]
)

const source = new RecordSource()
const store = new Store(source)
export const environment = new Environment({ network, store });
