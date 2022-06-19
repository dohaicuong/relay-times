import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EntryPointContainer, loadEntryPoint, PreloadedEntryPoint } from 'react-relay'
import { GetEntryPointComponentFromEntryPoint } from 'react-relay/relay-hooks/helpers'
import { LoaderFunction, useLoaderData, useParams } from 'react-router-dom'
import Post from '../features/post/Post'
import { environment } from '../providers/relay'
import PostEntrypoint from './postEntrypoint'

type LoaderData = PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<typeof PostEntrypoint>>

export const PostEntrypointLoader: LoaderFunction = ({ params }): LoaderData => {
  return loadEntryPoint(
    { getEnvironment: () => environment },
    PostEntrypoint,
    { id: params.id as any }
  )
}

export const PostEntrypointContainer = () => {
  const ref = useLoaderData() as LoaderData

  return (
    <Suspense fallback='Loading post...'>
      <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
        <EntryPointContainer entryPointReference={ref} props={{}} />
      </ErrorBoundary>
    </Suspense>
  )
}
