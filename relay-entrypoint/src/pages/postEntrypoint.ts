import { EntryPoint } from 'react-relay'
import JSResource from 'jsresource'
import PostQuery from '../features/post/__generated__/PostQuery.graphql'

export type PostEntrypointParams = {
  id: string
}

const PostEntrypoint: EntryPoint<any, PostEntrypointParams> = {
  root: JSResource('Post', () => import(/* webpackPrefetch: true */ '../features/post/Post')) as any,
  getPreloadProps: params => ({
    queries: {
      postQueryRef: {
        parameters: {
          kind: 'PreloadableConcreteRequest',
          params: PostQuery.params
        },
        variables: params
      }
    }
  })
}

export default PostEntrypoint
