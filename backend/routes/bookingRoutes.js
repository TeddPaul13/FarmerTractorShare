const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.bookingController.getBookings(res);
});
router.post("/create", (req, res) => {
  Controllers.bookingController.createBookings(req.body, res);
});
module.exports = router;