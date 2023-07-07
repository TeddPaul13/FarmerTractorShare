const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tractor = new Schema({
tractorName: { type: String, trim: true, required: true },
tractorLocation: { type: String, trim: true, required: true },
tractorPostcode: { type: String, trim: true, required: true},
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("tractor", tractor);
