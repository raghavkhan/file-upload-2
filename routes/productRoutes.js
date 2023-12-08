const express = require('express');
const {
  getAllProducts,
  createProduct,
} = require('../controllers/productController');
const {
  uploadProductImage,
  uploadProductImageLocal,
} = require('../controllers/uploadsController');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
// router.route('/uploads').post(uploadProductImageLocal);
router.route('/uploads').post(uploadProductImage);
module.exports = router;
