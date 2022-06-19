import { List } from '@mantine/core'
import { graphql, usePaginationFragment } from 'react-relay'
import { CircleCheck } from 'tabler-icons-react'

import PostListItem from './PostListItem'

import { PostListPaginationQuery } from './__generated__/PostListPaginationQuery.graphql'
import { PostList_query$key } from './__generated__/PostList_query.graphql'

type Props = {
  queryRef: PostList_query$key
}

const PostList: React.FC<Props> = ({ queryRef }) => {
  const { data } = usePaginationFragment<PostListPaginationQuery, PostList_query$key>(
    graphql`
      fragment PostList_query on Query
      @refetchable(queryName: "PostListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String", defaultValue: null }
      )
      {
        posts(
          first: $count
          after: $cursor
        )
        @connection(key: "PostList_query_posts")
        {
          edges {
            node {
              id
              ...PostListItem_post
            }
          }
        }
      }
    `,
    queryRef
  )

  return (
    <List center spacing='md' icon={<CircleCheck color='teal' size={16} />}>
      {data.posts.edges?.map(post => {
        if (!post?.node.id) return null

        return <PostListItem key={post.node.id} postRef={post.node} />
      })}
    </List>
  )
}

export default PostList
