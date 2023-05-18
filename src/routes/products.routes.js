const { Router } = require("express");
const router = Router();

const productsController = require("../controllers/products.controller.js");

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.get("/:id", productsController.getProduct);
router.put("/:id", productsController.editProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
