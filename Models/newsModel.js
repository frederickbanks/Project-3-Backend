const mongoose = require('../db/connection');
const Schema = mongooseSchema;

const NewsSchema = new Schema({
	title: String,
	paragraph: String,
	image: String
});

let news = mongoose.model('News', NewsSchema);

module.export = news;
