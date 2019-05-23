const mongoose = require('mongoose');
const express = require('express')

let mongoURI = '';

if(process.env.NODE_ENV == 'production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = 'mongodb://localhost/HypeBeastFavs_db'
}
mongoose.connect(mongoURI, {useNewUrlParser: true })
.then(inst => console.log(`Connected to database: ${inst.connections[0].name}`))
.catch(err => console.log('Connection failed!', err));

mongoose.Promise = Promise;

module.exports = mongoose;

//test//
// if (process.env.NODE_ENV == "production") {
//     mongoose.connect(process.env.DB_URL);
//   } else {
//     let url = {useNewUrlParser: true}
//     mongoose.connect("mongodb://localhost:27017/project-2", url)
//   }
  