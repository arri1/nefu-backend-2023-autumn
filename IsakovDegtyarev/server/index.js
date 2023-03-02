const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();

const app = express();

const PORT = process.env.APP_PORT || 4000

app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))

const postRouter = require('./api/post')
const userRouter = require('./api/user')

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()