const router = require('express').Router()

const userController = require('./user.controller')

router.get("/find-all", userController.GET.findAll)
router.post("/register", userController.POST.register)
router.post("/login", userController.POST.login)

module.exports = router