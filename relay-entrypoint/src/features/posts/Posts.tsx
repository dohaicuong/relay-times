import { Title } from '@mantine/core'
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay'
import PostList from './PostList'
import { PostsQuery } from './__generated__/PostsQuery.graphql'

export type PostsProps = {
  queries: {
    postsQueryRef: PreloadedQuery<PostsQuery>
  }
}

const Posts: React.FC<PostsProps> = ({ queries }) => {
  const data = usePreloadedQuery<PostsQuery>(
    graphql`
      query PostsQuery @preloadable {
        ...PostList_query
      }
    `,
    queries.postsQueryRef
  )

  return (
    <>
      <Title order={3}>
        Posts
      </Title>
      <PostList queryRef={data} />
    </>
  )
}

export default Posts
