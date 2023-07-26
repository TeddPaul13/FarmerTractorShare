const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.tractorController.getTractors(res);
});
router.post("/listatractor", (req, res) => {
  Controllers.tractorController.createTractors(req.body, res);
});
router.put("/update/:id", (req, res) => {
  Controllers.tractorController.updateTractorById(req, res);
});
router.delete("/delete/:id", (req, res) => {
  Controllers.tractorController.deleteTractorById(req, res);
});
router.get("/finduser/:id", (req, res) => {
  Controllers.tractorController.findTractorById(res);
});
module.exports = router;