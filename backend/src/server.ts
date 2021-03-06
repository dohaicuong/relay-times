import fastify from 'fastify'
import cors from '@fastify/cors'
import mercurius from 'mercurius'
import { schema } from './schema'

export const server = fastify({
  logger: { level: 'info' }
})

server.register(cors, {})

server.register(mercurius, {
  graphiql: true,
  schema,
  // TODO: process for pushing persisted queries or just automatic persisted queries
  persistedQueryProvider: mercurius.persistedQueryDefaults.prepared({
    "a8db567e66704be8302458aa5ee2e4ab": "query PostListPaginationQuery(\n  $count: Int = 20\n  $cursor: String = null\n) {\n  ...PostList_query_1G22uz\n}\n\nfragment PostListItem_post on Post {\n  title\n}\n\nfragment PostList_query_1G22uz on Query {\n  posts(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...PostListItem_post\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "d073a2c4afcd3c93f73010bcc1f90f7c": "query PostsQuery {\n  ...PostList_query\n}\n\nfragment PostListItem_post on Post {\n  title\n}\n\nfragment PostList_query on Query {\n  posts(first: 20) {\n    edges {\n      node {\n        id\n        ...PostListItem_post\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  })
})
