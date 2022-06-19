import { ListItem } from '@mantine/core'
import { graphql, useFragment } from 'react-relay'

import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

type Props = {
  postRef: PostListItem_post$key
}

const PostListItem: React.FC<Props> = ({ postRef }) => {
  const post = useFragment(
    graphql`
      fragment PostListItem_post on Post {
        title
      }
    `,
    postRef
  )

  return (
    <ListItem>
      {post.title}
    </ListItem>
  )
}

export default PostListItem
