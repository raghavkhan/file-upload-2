const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createProduct = async (req, res) => {
  console.log(req.body);
  const products = await Product.create(req.body);
  if (!products) {
    throw new CustomError.BadRequestError(`don't know what to write`);
  }
  res.status(StatusCodes.CREATED).json({ products });
  // res.status(StatusCodes.CREATED).send(`product created from file upload 2 `);
};
const getAllProducts = async (req, res) => {
  // res.status(StatusCodes.OK).send(`get all products from file upload 2`);
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ count: products.length, products });
};

module.exports = { getAllProducts, createProduct };
