const express = require('express')
const clothing = require('../Controllers/clothingController.js')
const router = express.Router()
//index
router.get('/', clothing.index)
//find by name,brand,type
router.get('/name/:name', clothing.findByName)
router.get('/brand/:brand',clothing.findByBrand)
router.get('/type/:type',clothing.findByType)
//create clothing item
router.post('/', clothing.addItem)
// delete clothing item
router.delete('/:name', clothing.deleteItem)
//update item
router.put('/update/:name', clothing.updateSoldout)


module.exports = router