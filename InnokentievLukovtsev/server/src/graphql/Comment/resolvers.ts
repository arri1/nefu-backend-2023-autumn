import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueComment: (_parent, args, { prisma }) => {
      return prisma.comment.findUnique(args)
    },
    findFirstComment: (_parent, args, { prisma }) => {
      return prisma.comment.findFirst(args)
    },
    findManyComment: (_parent, args, { prisma }) => {
      return prisma.comment.findMany(args)
    },
    findManyCommentCount: (_parent, args, { prisma }) => {
      return prisma.comment.count(args)
    },
    aggregateComment: (_parent, args, { prisma }) => {
      return prisma.comment.aggregate(args)
    },
  },
  Mutation: {
    createOneComment: (_parent, args, { prisma }) => {
      return prisma.comment.create(args)
    },
    updateOneComment: (_parent, args, { prisma }) => {
      return prisma.comment.update(args)
    },
    deleteOneComment: async (_parent, args, { prisma }) => {
      return prisma.comment.delete(args)
    },
    upsertOneComment: async (_parent, args, { prisma }) => {
      return prisma.comment.upsert(args)
    },
    deleteManyComment: async (_parent, args, { prisma }) => {
      return prisma.comment.deleteMany(args)
    },
    updateManyComment: (_parent, args, { prisma }) => {
      return prisma.comment.updateMany(args)
    },
  },
}
export default resolvers
