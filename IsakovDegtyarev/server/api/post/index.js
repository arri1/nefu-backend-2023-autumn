const router = require('express').Router()

const postController = require('./post.controller')

router.get("/find-all", postController.GET.findAll)

router.post("/create", postController.POST.create)
router.post("/find-all-by-author-id", postController.POST.findAllByAuthorId)

module.exports = router