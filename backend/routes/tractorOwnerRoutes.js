const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.tractorOwnerController.getTractorOwner(res);
});
router.post("/create", (req, res) => {
  Controllers.tractorOwnerController.createTractorOwner(req.body, res);
});
module.exports = router;