const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
    })
);

app.listen(4000);

async function main() {
    // await prisma.user.create({
    //   data: {
    //      name: 'Alice',
    //      email: 'alice@prisma.io',
    //    },
//  })

    const allUsers = await prisma.user.findMany({});
    console.dir(allUsers, {depth: null});
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

app.get("/test", async (req, res) => {
    const users = await prisma.user.findMany({});
    res.json(users);
});

app.get("/allPosts", async (req, res) => {
    const posts = await prisma.post.findMany({});
    res.json(posts);
});

app.post("/addUser", async (req, res) => {
    const newUser = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
        },
    });
    res.json(newUser);
});

app.post("/addPost", async (req, res) => {
    const newPost = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            author: {
                connect: {
                    id: req.body.authorId,
                },
            },
        },
    });
    res.json(newPost);
});

app.get("/getPost/:id", async(req, res) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(post);
});

app.get("/getUser/:id", async(req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(user);
});

app.put("/updatePost", async(req, res) => {
    const updatedPost = await prisma.post.update({
        where: {
            id: parseInt(req.body.id)
        },
        data: {
            title: req.body.title,
            content: req.body.content
        }
    })
    res.json(updatedPost);
});

app.delete("/deletePost/:id", async(req, res) => {
    const deletedPost = await prisma.post.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(deletedPost);
});

app.delete("/deleteUser/:id", async(req, res) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(deletedUser);
});