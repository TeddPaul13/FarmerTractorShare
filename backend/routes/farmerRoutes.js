const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.farmerController.getFarmers(res);
});
router.post("/create", (req, res) => {
  Controllers.farmerController.createFarmers(req.body, res);
});
module.exports = router;