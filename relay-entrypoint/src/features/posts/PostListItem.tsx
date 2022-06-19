import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router-dom'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

type PostListItemProps = {
  postRef: PostListItem_post$key
}

const PostListItem: React.FC<PostListItemProps> = ({ postRef }) => {
  const post = useFragment(
    graphql`
      fragment PostListItem_post on Post {
        id
        title
      }
    `,
    postRef
  )

  return (
    <li>
      <Link to={post.id}>
        {post.title}
      </Link>
    </li>
  )
}

export default PostListItem
