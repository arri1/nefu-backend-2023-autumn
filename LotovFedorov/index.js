const { PrismaClient } = require("@prisma/client");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

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
        },
    },
};

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
    })
);

app.listen(4000);

async function main() {
    const allUsers = await prisma.user.findMany({});
    console.dir(allUsers, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

app.get("/allUsers", async (req, res) => {
    const users = await prisma.user.findMany({});
    res.json(users);
});

app.get("/addPost", async (req, res) => {
    const newPost = await prisma.post.create({
        data: {
            title: "asd",
            author: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    res.json(newPost);
});

app.get("/allPosts", async (req, res) => {
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.get("/addUser", async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: "Aytal",
            email: "Aytal@mail.com",
        },
    });
    console.log(user);
});