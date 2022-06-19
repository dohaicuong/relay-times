import { graphql, usePaginationFragment } from 'react-relay'
import PostListItem from './PostListItem'
import { PostListPaginationQuery } from './__generated__/PostListPaginationQuery.graphql'
import { PostList_query$key } from './__generated__/PostList_query.graphql'

type PostListProps = {
  queryRef: PostList_query$key
}

const PostList: React.FC<PostListProps> = ({ queryRef }) => {
  const {
    data,
    hasNext,
    isLoadingNext,
    loadNext,
  } = usePaginationFragment<PostListPaginationQuery, PostList_query$key>(
    graphql`
      fragment PostList_query on Query
      @refetchable(queryName: "PostListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 20 }
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
    <ul>
      {data.posts?.edges.map(edge => {
        if (!edge?.node?.id) return null
        return <PostListItem key={edge.node.id} postRef={edge.node} />
      })}
      {isLoadingNext && <p>Loading more posts...</p>}
      {hasNext && <button disabled={isLoadingNext} onClick={() => loadNext(10)}>Load more</button>}
    </ul>
  )
}

export default PostList
