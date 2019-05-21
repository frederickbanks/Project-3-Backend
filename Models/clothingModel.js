const mongoose = require('../db/connection');
const Schema = mongooseSchema;

const ClothingSchema = new Schema({
	name: String,
	description: String,
    image: String,
    brand: String,
    links: {
        cheap: String,
        mid: String,
        expensive: String
    },
    favorite: Boolean
});

let clothing = mongoose.model('Clothing', ClothingSchema);

module.export = clothing;