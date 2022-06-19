import { defineVilay } from 'vilay'

type Props = {}

export default defineVilay<{ PageProps: Props }>({
  Page: (props, context) => {
    return (
      <>
        post page
      </>
    )
  },
})
