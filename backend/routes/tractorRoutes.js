let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");
router.get('/', (req, res) => {
Controllers.tractorController.getTractors(res);
})
router.post('/create', (req, res) => {
Controllers.tractorController.createTractor(req.body, res)
})
module.exports = router;