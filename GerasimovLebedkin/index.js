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

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);


async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })

  const allUsers = await prisma.user.findMany({})
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })