import { lazy, Suspense } from 'react'
import { defineVilay } from 'vilay'
import { graphql, usePreloadedQuery, type PreloadedQuery } from 'react-relay'
import { Center, Stack, Title, Text } from '@mantine/core'
import { pagesPageQuery } from './__generated__/pagesPageQuery.graphql'

const PostList = lazy(() => import('../components/PostList'))

export const query = graphql`
  query pagesPageQuery {
    ...PostList_query
  }
`

type Props = {
  queryRef: PreloadedQuery<pagesPageQuery>
}

export default defineVilay<{ PageProps: Props }>({ Page: ({ queryRef }) => {
  const data = usePreloadedQuery<pagesPageQuery>(query, queryRef)

  return (
    <Center>
      <Stack>
        <Title order={1} align='center'>New Vilay App</Title>
        <Text size='md'>Congratulations! You just successfully created a new Vilay app!</Text>
        <Suspense fallback={<div>Loading...</div>}>
          <Center>
            <PostList queryRef={data} />
          </Center>
        </Suspense>
      </Stack>
    </Center>
  )
}})
