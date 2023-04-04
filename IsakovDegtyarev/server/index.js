const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();

const cors = require('cors')
const app = express();

const PORT = process.env.APP_PORT || 4000

app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: ["http://127.0.0.1:3000", "http://localhost:3000", "http://127.0.0.1:4000", "http://localhost:4000"]
}))

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