const Product = require("../models/product");

const productsController = {};

productsController.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};
productsController.createProduct = async (req, res, next) => {
  const data = req.body;

  const product = new Product({ ...data });
  await product.save();
  res.json({ error: false, datos: product, message: "Product created" });
};
productsController.getProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json({
    error: false,
    datos: product,
    message: "Product Found",
  });
};
productsController.editProduct = async (req, res, next) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ error: false, datos: [], message: "Product Updated" });
};
productsController.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ error: false, datos: [], message: "Product Deleted" });
};

module.exports = productsController;
