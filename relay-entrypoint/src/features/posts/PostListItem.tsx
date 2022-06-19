import { ListItem, Text } from '@mantine/core'
import { graphql, useFragment } from 'react-relay'
import { Link, useNavigate } from 'react-router-dom'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

type PostListItemProps = {
  postRef: PostListItem_post$key
}

const PostListItem: React.FC<PostListItemProps> = ({ postRef }) => {
  const navigate = useNavigate()
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
    <Text
      variant='link'
      component={ListItem}
      onClick={() => navigate(post.id)}
      sx={{ cursor: 'pointer' }}
    >
      {post.title}
    </Text>
  )
}

export default PostListItem
