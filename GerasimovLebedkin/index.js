const  { PrismaClient } =require( '@prisma/client')
const   express  = require('express')
const  { graphqlHTTP } =require ('express-graphql');
const  { makeExecutableSchema } =  require('@graphql-tools/schema');

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);