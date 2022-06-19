import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { Center, Title, Text, Stack } from '@mantine/core'
import { PostQuery } from './__generated__/PostQuery.graphql'

export type PostProps = {
  queries: {
    postQueryRef: PreloadedQuery<PostQuery>
  }
}

const Post: React.FC<PostProps> = ({ queries }) => {
  const data = usePreloadedQuery<PostQuery>(
    graphql`
      query PostQuery($id: ID!) @preloadable {
        node(id: $id) {
          ... on Post {
            id
            title
            body
          }
        }
      }
    `,
    queries.postQueryRef
  )


  return (
    <Stack>
      <Title order={1}>{data.node?.title}</Title>
      <Text>{data.node?.body}</Text>
    </Stack>
  )
}

export default Post
