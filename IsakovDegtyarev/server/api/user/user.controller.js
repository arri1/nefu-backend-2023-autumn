const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const GET = {
    findAll: async (req, res) => {
        const posts = await prisma.user.findMany({});
        res.json(posts);
    }
};

module.exports = {
    GET
};