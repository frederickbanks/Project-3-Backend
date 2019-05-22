const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

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
  favorite: Boolean,
  soldout: Boolean
});

module.exports = mongoose.model("Clothing", ClothingSchema);
