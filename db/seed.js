// require models 
// require json data

const newsModel = require('../models/newsModel')
const news = require('./news.json')
const clothingModel = require('../Models/clothingModel')
const clothing = require('./clothing.json')



//remove all existing data from model, and reinsert data from json file
newsModel.find({}).remove({});
newsModel.collection
  .insert(news)
  .then(news => {
    console.log(news);
  })
  .catch(err => {
    console.log(err);
  });

clothingModel.find({}).remove({});
clothingModel.collection
  .insert(clothing)
  .then(clothing => {
    console.log(clothing);
  })
  .catch(err => {
    console.log(err);
  });


