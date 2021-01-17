const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const { dir } = require('console');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-prodcut => POST
router.post('/add-product',productsController.postAddProduct);


module.exports = router;