const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const GET = {
    findAll: async (req, res) => {
        const posts = await prisma.post.findMany({});
        res.json(posts);
    },
};

const POST = {
    create: async (req, res) => {
        const newPost = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                authorId: req.body.authorId,
            },
        });
        res.json(newPost);
    },
    findAllByAuthorId: async (req, res) => {
        const posts = await prisma.post.findMany({
            where: {
                authorId: req.body.authorId,
            },
        });
        res.json(posts);
    }
};

module.exports = {
    GET, POST
};
