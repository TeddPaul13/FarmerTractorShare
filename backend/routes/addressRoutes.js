const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.addressController.getAddress(res);
});
router.post("/create", (req, res) => {
  Controllers.addressController.createAddress(req.body, res);
});
module.exports = router;