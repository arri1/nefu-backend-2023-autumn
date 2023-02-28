const { PrismaClient } = require("@prisma/client");
const { makeExecutableSchema } = require("graphql-tools");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const express = require("express");

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

const schema = makeExecutableSchema({ resolvers, typeDefs });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/grapfql", graphqlHTTP({ schema }));

app.listen(4000);

// async function main() {
//     const allUsers = await prisma.user.findMany({});
//     console.dir(allUsers, { depth: null });
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

app.get("/all-users", async (req, res) => {
    const posts = await prisma.user.findMany({});
    res.json(posts);
});

app.get("/all-posts", async (req, res) => {
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.post("/create-post", async (req, res) => {
    const newPost = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            authorId: req.body.authorId,
        },
    });
    res.json(newPost);
});

app.post("/find-posts-by-author-id", async (req, res) => {
    const posts = await prisma.post.findMany({
        where: {
            authorId: req.body.authorId,
        },
    });
    res.json(posts);
});
