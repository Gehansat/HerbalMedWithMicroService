const roduct = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getallproducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

const getOneProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const addProduct = asyncHandler(async (req, res) => {
  const { productName, description, image, sellerId, price, status } = req.body;
  try {
    const product = new Product({
      productName,
      description,
      image,
      sellerId,
      price,
      status,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { productName, description, image, sellerId, price, status } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.productName = productName;
      product.description = description;
      product.image = image;
      product.sellerId = sellerId;
      product.price = price;
      product.status = status;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedRecord = await Product.findByIdAndDelete(id);
    res.status(200);
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
