const express = require('express')
const news = require('../Controllers/newsController.js')
const router = express.Router()

router.get('/', news.index)
router.get('/title/:title', news.showNewsArticle)

module.exports = router