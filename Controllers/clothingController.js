const clothing = require("../Models/clothingModel");

module.exports = {
  index: (req, res) => {
    clothing.find({}).then(results => {
      res.json(results);
    });
  },
  findByBrand: (req, res) => {
    let brand = req.params.brand;
    clothing.find({ brand: brand }).then(results => {
      res.json(results);
    });
  },
  findByName: (req, res) => {
    let name = req.params.name;
    clothing.find({ name: name }).then(results => {
      res.json(results);
    });
  },
  findByType: (req, res) => {
    let type = req.params.type;
    clothing.find({ type: type }).then(results => {
      res.json(results);
    });
  },
  updateSoldout: (req, res) => {
    let name = req.params.name;
    clothing.updateOne({ "name": name }, req.body).then(results => {
      res.json(results);
    });
  },
  deleteItem: (req, res) => {
    let name = req.params.name;
    clothing.findOneAndDelete({ name: name }).then(results => {
      res.json(results);
    });
  },

  addItem: (req, res) => {
    clothing.create(req.body).then(newClothing => res.json(newClothing));
  }
};
