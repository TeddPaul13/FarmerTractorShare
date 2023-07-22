const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.farmerController.getFarmers(res);
});
router.post("/create", (req, res) => {
  Controllers.farmerController.createFarmers(req.body, res);
});
router.put("/update/:id", (req, res) => {
  Controllers.farmerController.updateFarmerById(req, res);
});
router.delete("/delete/:id", (req, res) => {
  Controllers.farmerController.deleteFarmerById(req, res);
});
router.get("/finduser/:id", (req, res) => {
  Controllers.farmerController.findFarmerById(res);
});
module.exports = router;