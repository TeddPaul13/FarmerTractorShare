const express = require("express");
const router = express.Router();
const { signupValidation, loginValidation } = require('../Validation'); // for JWT
const Controllers = require("../controllers");



//for JWT test
router.post('/register', signupValidation, Controllers.farmerController.registerUser);
router.post('/login', loginValidation, Controllers.farmerController.loginUser);
//router.post('/get-user', signupValidation, Controllers.farmerController.getUser);

//********JWT test End */

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