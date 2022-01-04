const express = require("express");
const router = express.Router();
const {
  login,
  signup,

} = require("../controller/userController");
const { protect, adminProtect } = require("../middlewares/authMiddleware");


router.route("/login").post(login);
router.route("/register").post(signup);

module.exports = router;
