const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.tractorController.getTractors(res);
});
router.post("/create", (req, res) => {
  Controllers.tractorController.createTractors(req.body, res);
});
module.exports = router;