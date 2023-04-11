const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const keys = require("../../config/keys");
const errorHandler = require("../../utils/errorHandler");

const prisma = new PrismaClient();

const GET = {
    findAll: async (req, res) => {
        const users = await prisma.user.findMany({});
        res.json(users);
        console.log(users);
    },
};

const POST = {
    register: async (req, res) => {
        const candidate = await prisma.user.findUnique({
            where: { email: req.body.email },
        });

        if (candidate) {
            res.status(409).json({
                message: "Пользователь с таким email уже существует",
            });
            console.log("Пользователь с таким email уже существует");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            try {
                const newUser = await prisma.user.create({
                    data: {
                        email: req.body.email,
                        name: req.body.name,
                        password: bcrypt.hashSync(password, salt),
                    },
                });

                res.status(201).json(newUser);
                console.log(
                    "Создан новый пользователь с email " + req.body.email
                );
            } catch (e) {
                errorHandler(res, e);
            }
        }
    },

    login: async (req, res) => {
        const candidate = await prisma.user.findUnique({
            where: { email: req.body.email },
        });

        if (candidate) {
            const passwordResult = bcrypt.compareSync(
                req.body.password,
                candidate.password
            );
            if (passwordResult) {
                const token = jwt.sign(
                    {
                        email: candidate.email,
                        userId: candidate.id,
                    },
                    keys.jwt,
                    { expiresIn: 60 * 60 }
                );

                res.status(200).json({
                    token: `Bearer ${token}`,
                });
            } else {
                res.status(401).json({
                    message: "Пароли не совпадают",
                });
            }
        } else {
            res.status(404).json({
                message: "Пользователь с таким email не найден",
            });
        }
    },
};

module.exports = {
    GET,
    POST,
};
