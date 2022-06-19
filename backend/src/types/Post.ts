import { builder } from '../builder'
import { prisma } from '../clients/prisma'

builder.prismaNode('Post', {
  id: { field: 'id' },
  fields: t => ({
    title: t.exposeString('title'),
    body: t.exposeString('body'),
  })
})

builder.queryField('posts', 
  t => t.prismaConnection({
    type: 'Post',
    cursor: 'id',
    resolve: query => prisma.post.findMany(query),
    totalCount: () => prisma.post.count(),
  })
)
