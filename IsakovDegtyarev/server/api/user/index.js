const router = require('express').Router()

const userController = require('./user.controller')

router.get("/find-all", userController.GET.findAll)

module.exports = router