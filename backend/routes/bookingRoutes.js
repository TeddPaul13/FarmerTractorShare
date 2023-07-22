const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.bookingController.getBookings(res);
});
router.post("/create", (req, res) => {
  Controllers.bookingController.createBookings(req.body, res);
});
router.put("/update/:id", (req, res) => {
  Controllers.bookingController.updateBookingById(req, res);
});
router.delete("/delete/:id", (req, res) => {
  Controllers.bookingController.deleteBookingById(req, res);
});
router.get("/finduser/:id", (req, res) => {
  Controllers.bookingController.findBookingById(res);
});
module.exports = router;