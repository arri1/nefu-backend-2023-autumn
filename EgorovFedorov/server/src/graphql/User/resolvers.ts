import { Resolvers } from "../../resolversTypes";
import { APP_SECRET } from "../../auth";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers: Resolvers = {
  Query: {
    findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
    },
    findManyUser: (_parent, args, { prisma }) => {
      return prisma.user.findMany(args);
    },
    findManyUserCount: (_parent, args, { prisma }) => {
      return prisma.user.count(args);
    },
    aggregateUser: (_parent, args, { prisma }) => {
      return prisma.user.aggregate(args);
    },
  },
  Mutation: {
    signupUser: async (_parent, args, { prisma }) => {
      const {
        data: { email, name, password },
      } = args;
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password: bcrypt.hashSync(password, 3),
        },
      });
      return { token: jwt.sign(newUser, APP_SECRET), user: newUser };
    },
    loginUser: async (_parent, args, { prisma }) => {
      const {
        data: { email, password },
      } = args;
      const User = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (!User) throw new Error("User with this email not found");
      const isMatch = bcrypt.compareSync(password, User.password);
      if (!isMatch) throw new Error("Password is incorrect");
      return { token: jwt.sign(User, APP_SECRET), user: User };
    },
    createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    updateOneUser: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    deleteOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.delete(args);
    },
    upsertOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.upsert(args);
    },
    deleteManyUser: async (_parent, args, { prisma }) => {
      return prisma.user.deleteMany(args);
    },
    updateManyUser: (_parent, args, { prisma }) => {
      return prisma.user.updateMany(args);
    },
  },
};
export default resolvers;
