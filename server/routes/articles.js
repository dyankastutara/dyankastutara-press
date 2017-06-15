const express = require('express')
const router = express.Router()
const controllerArticle = require('../controllers/articles')
const jwtHelpers = require('../helpers/jwtVerify')

router.get('/', controllerArticle.getAll)
router.post('/', jwtHelpers.jwtVerify, controllerArticle.create)
router.put('/:id', jwtHelpers.jwtVerify, controllerArticle.update)
router.delete('/:id', jwtHelpers.jwtVerify, controllerArticle.delete)

module.exports = router
