import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const seed = async () => {
  const getFakePost = () => ({ title: faker.internet.domainWord(), body: faker.lorem.paragraphs(1) })
  const fakePosts = Array(100).fill(undefined).map(getFakePost)

  const posts = await prisma.post.createMany({ data: fakePosts })

  console.log(`${posts.count} are seeded`)
}

seed()
