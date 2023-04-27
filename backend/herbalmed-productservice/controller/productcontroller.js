const Product = require("../model/productmodel");
const asyncHandler = require("express-async-handler");

// Get all products
const getproducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

// Get one product
const getoneproduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Failed !! Product not found");
  }
});

// Add product
const productadd = asyncHandler(async (req, res) => {
  const { productname, description, image, sellerId, productprice, status } = req.body;
  try {
    const product = new Product({
      productname,
      description,
      image,
      sellerId,
      productprice,
      status,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Update product
const productupdate = asyncHandler(async (req, res) => {
  const { productname, description, image, sellerId, productprice, status } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.productname = productname;
      product.description = description;
      product.image = image;
      product.sellerId = sellerId;
      product.productprice = productprice;
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

// Delete product
const productdelete = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedRecord = await Product.findByIdAndDelete(id);
    res.status(200);
  } catch (err) {
    res.json(err.message);
  }
};

// Search product
const productsearch = async (req, res) => {
  try {
    const query = req.params.text;
    const regex = new RegExp(query, "i");
    const products = await Product.find({ productName: { $regex: regex } });
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getproducts,
  getoneproduct,
  productadd,
  productupdate,
  productdelete,
  productsearch,
};
