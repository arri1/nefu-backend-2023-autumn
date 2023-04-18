const router = require('express').Router()
const passport = require("passport");
const postController = require('./post.controller')

router.get("/find-all", passport.authenticate('jwt', {session: false}), postController.GET.findAll)

router.post("/create", postController.POST.create)
router.post("/find-all-by-author-id", postController.POST.findAllByAuthorId)

module.exports = router