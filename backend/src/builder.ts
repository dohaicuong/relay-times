import SchemaBuilder from '@pothos/core'

import RelayPlugin from '@pothos/plugin-relay'

import PrismaPlugin from '@pothos/plugin-prisma'
import PrismaTypes from '../prisma/pothos-types'
import { prisma } from './clients/prisma'

type SchemaBuilderProps = {
  PrismaTypes: PrismaTypes
}

export const builder = new SchemaBuilder<SchemaBuilderProps>({
  plugins: [RelayPlugin, PrismaPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },
  prisma: {
    client: prisma,
  },
})

builder.queryType({})
