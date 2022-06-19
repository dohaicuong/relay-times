import {
  Environment,
  Network,
  RecordSource,
  Store,
  type GraphQLResponse,
} from 'relay-runtime'
import type { InitRelayEnvironment } from 'vilay'

export const initRelayEnvironment: InitRelayEnvironment = ({
  isServer,
  pageContext: { fetch, relayInitialData },
}) => {
  const network = Network.create(async ({ text: query }, variables) => {
    await new Promise(resolve => setTimeout(() => resolve(undefined), 2000))

    // Replace this with your backend API URL
    const response = await fetch(`http://0.0.0.0:4000/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    if (response.status !== 200) {
      console.error(await response.text())
      throw new Error('Relay Network Error: Invalid response from server')
    }

    return (await response.json()) as GraphQLResponse
  })

  const source = new RecordSource(relayInitialData)
  const store = new Store(source, { gcReleaseBufferSize: 10 })

  return new Environment({
    configName: isServer ? 'server' : 'client',
    network,
    store,
  })
}