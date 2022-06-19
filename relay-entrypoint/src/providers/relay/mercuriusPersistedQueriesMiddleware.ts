import { Middleware, RelayNetworkLayerRequestBatch } from 'react-relay-network-modern'

export const mercuriusPersistedQueriesMiddleware = (): Middleware => {
  return next => async req => {
    if (req instanceof RelayNetworkLayerRequestBatch) {
      throw new Error('Batched requests are not supported by current version.');
    }

    if (!req.id) return next(req)

    req.fetchOpts.body = JSON.stringify({
      query: req.id,
      persisted: true,
      variables: req.variables,
    })

    return next(req)
  }
}
