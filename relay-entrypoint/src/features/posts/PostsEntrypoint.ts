import { EntryPoint } from 'react-relay'
import JSResource from 'jsresource'
import PostsQuery from './__generated__/PostsQuery.graphql'

export type PostsEntrypointParams = {}

const PostsEntrypoint: EntryPoint<any, PostsEntrypointParams> = {
  root: JSResource('Posts', () => import(/* webpackPrefetch: true */ './Posts')) as any,
  getPreloadProps: params => {
    return {
      queries: {
        postsQueryRef: {
          parameters: {
            kind: 'PreloadableConcreteRequest',
            params: PostsQuery.params,
          },
          variables: params,
        }
      }
    }
  },
}

export default PostsEntrypoint
