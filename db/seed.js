const News = require('../models/newsModel')
const news = require('./news.json')
const Clothing = require('../Models/clothingModel')
const clothing = require('./clothing.json')

News.deleteMany({}).then(() => {
    News.create(news)
        .then(newNews => {
            console.log(newNews)
        })
        .catch(err => {
            console.log(err)
        })
})

Clothing.deleteMany({}).then(() => {
    Clothing.create(clothing)
        .then(newClothing => {
            console.log(newClothing)
        })
        .catch(err => {
            console.log(err)
        })
})
