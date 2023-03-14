import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniquePost: (_parent, args, { prisma }) => {
      return prisma.post.findUnique(args)
    },
    findFirstPost: (_parent, args, { prisma }) => {
      return prisma.post.findFirst(args)
    },
    findManyPost: (_parent, args, { prisma }) => {
      return prisma.post.findMany(args)
    },
    findManyPostCount: (_parent, args, { prisma }) => {
      return prisma.post.count(args)
    },
    aggregatePost: (_parent, args, { prisma }) => {
      return prisma.post.aggregate(args)
    },
  },
  Mutation: {
    createOnePost: (_parent, args, { prisma }) => {
      return prisma.post.create(args)
    },
    updateOnePost: (_parent, args, { prisma }) => {
      return prisma.post.update(args)
    },
    deleteOnePost: async (_parent, args, { prisma }) => {
      return prisma.post.delete(args)
    },
    upsertOnePost: async (_parent, args, { prisma }) => {
      return prisma.post.upsert(args)
    },
    deleteManyPost: async (_parent, args, { prisma }) => {
      return prisma.post.deleteMany(args)
    },
    updateManyPost: (_parent, args, { prisma }) => {
      return prisma.post.updateMany(args)
    },
  },
}
export default resolvers
