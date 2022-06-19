import { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EntryPointContainer, useEntryPointLoader } from 'react-relay'
import PostsEntrypoint from './features/posts/PostsEntrypoint'
import { environment } from './providers/relay'

const App = () => {
  const [
    entrypointReference,
    loadEntryPoint,
    disposeEntryPoint,
  ] = useEntryPointLoader(
    { getEnvironment: () => environment },
    PostsEntrypoint
  )

  useEffect(() => {
    loadEntryPoint({} as never)

    return () => {
      disposeEntryPoint()
    }
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
