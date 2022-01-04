const express = require("express");
const router = express.Router();
const {
 
  getProducts,
 
} = require("../controller/productController");
const {
  protect,
 
 
} = require("../middlewares/authMiddleware");


router
  .route("/")
  .get(getProducts)
  .post(protect, sellerAndAdminProtect, createProduct);
module.exports = router;
