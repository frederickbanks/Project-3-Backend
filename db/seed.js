// require models 
// require json data
const mongoose = require('./connection')

const newsModel = require('../Models/newsModel')
const clothingModel = require('../Models/clothingModel')

const news = require('./news.json')
const clothing = require('./clothing.json')

//remove all existing data from model, and reinsert data from json file


newsModel.deleteMany({})
.then(() => {
    newsModel.create(news)
    .then(newNews => {
        console.log(newNews)
    })
    .catch(err => console.log(err))
})

clothingModel.deleteMany({})
.then(() => {
    clothingModel.create(clothing)
    .then(newClothing => {
        console.log(newClothing)
    })
    .catch(err => console.log(err))
})




