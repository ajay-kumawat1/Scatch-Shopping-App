const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const { create } = require("../controllers/productController");

router.post("/create", upload.single('image'), create);

module.exports = router;