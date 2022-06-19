import { graphql, useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

type PostListItemProps = {
  postRef: PostListItem_post$key
}

const PostListItem: React.FC<PostListItemProps> = ({ postRef }) => {
  const post = useFragment(
    graphql`
      fragment PostListItem_post on Post {
        title
      }
    `,
    postRef
  )

  return (
    <li>{post.title}</li>
  )
}

export default PostListItem
