import { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EntryPointContainer, useEntryPointLoader, useRelayEnvironment } from 'react-relay'
import PostsEntrypoint from './features/posts/PostsEntrypoint'

const App = () => {
  const environment = useRelayEnvironment()
  const [
    entrypointReference,
    loadEntryPoint,
    disposeEntryPoint,
  ] = useEntryPointLoader(
    { getEnvironment: () => environment },
    PostsEntrypoint
  )

  useEffect(() => {
    loadEntryPoint({})
    return disposeEntryPoint
  }, [])

  return (
    <>
      <p>App</p>
      <Suspense fallback='Loading posts...'>
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
          {entrypointReference && (
            <EntryPointContainer
              entryPointReference={entrypointReference}
              props={{}}
            />
          )}
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default App
