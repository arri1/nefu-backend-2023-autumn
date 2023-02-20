const { PrismaClient } = require("@prisma/client");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const bodyParser = require('body-parser');

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

app.use(bodyParser.json())

app.listen(4000);

async function main() {
    // await prisma.user.create({
    //     data: {
    //         name: 'Alexey',
    //         email: 'Alexey@prisma.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like cakes' },
    //         },
    //     },
    // })
    //
    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true,
    //     },
    // })
    // console.dir(allUsers, { depth: null })
    //
    // const post = await prisma.post.update({
    //     where: { id: 1 },
    //     data: { published: true },
    // })
    //console.log(post)
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

app.get("/allUser", async (req, res) => {
    const users = await prisma.user.findMany({});
    res.json(users);
});

app.post("/addUser", async (req, res) => {
    const {email, name} = req.body
    const addUser = await prisma.user.create({
        data: {
            email,
            name
        }
    })
    res.json(addUser);
});

app.post("/addPost", async (req, res) => {
    const {title , content, published, authorId} = req.body
    const addPost = await prisma.post.create({
        data: {
            title,
            content,
            published,
            author: {
                connect: {
                    id: authorId,
                }
            },
        }
    })
    res.json(addPost);
});

app.get("/allPosts", async (req, res) => {
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.get("/getPost/:id", async(req, res) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(post);
});
app.post("/updatePost", async(req, res) => {
    const {postId, title, content, published, authorId} = req.body
    const updatePost = await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            title,
            content,
            published,
            author: {
                connect: {
                    id: authorId,
                }
            },
        }
    })
    res.json(updatePost);
});

app.post("/deletePost", async(req, res) => {
    const {postId} = req.body
    const deletePost = await prisma.post.delete({
        where: {
            id: parseInt(postId)
        },
    })
    res.json(deletePost);
});
//get post delete