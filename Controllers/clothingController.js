const clothing = require('../Models/clothingModel')

module.exports = {
    index: (req, res) => {
        clothing.find({}).then(results => {
          res.json(results);
        });
      },
      findByBrand: (req, res) => {
        let brand = req.params.brand
        coin.findOne({ "brand": brand }).then(results => {
          res.json(results);
        })
      },
      findByName: (req, res) => {
        let name = req.params.name
        coin.findOne({ "name": name }).then(results => {
          res.json(results);
        })
      },
      findByType: (req, res) => {
        let type = req.params.type
        coin.findOne({ "type": type }).then(results => {
          res.json(results);
        })
      },
      













}