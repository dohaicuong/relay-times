import { Col, Grid } from '@mantine/core'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EntryPointContainer, loadEntryPoint, PreloadedEntryPoint } from 'react-relay'
import { GetEntryPointComponentFromEntryPoint } from 'react-relay/relay-hooks/helpers'
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom'
import { environment } from '../providers/relay'
import PostsEntrypoint from './postsEntrypoint'

type LoaderData = PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<typeof PostsEntrypoint>>

export const PostsEntrypointLoader: LoaderFunction = ({ request, params, signal }): LoaderData => {
  return loadEntryPoint(
    { getEnvironment: () => environment },
    PostsEntrypoint,
    {}
  )
}

export const PostsEntrypointContainer = () => {
  const ref = useLoaderData() as LoaderData
  return (
    <Grid grow>
      <Col span={3}>
        <Suspense fallback='Loading posts...'>
          <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
            <EntryPointContainer entryPointReference={ref} props={{}} />
          </ErrorBoundary>
        </Suspense>
      </Col>
      <Col span={9}>
        <Outlet />
      </Col>
    </Grid>
  )
}
