const Farmer = require("./farmer")
const Tractor = require("./tractor")
const TractorOwner = require("./tractorOwner")
const Booking = require("./booking")

Tractor.hasOne(Booking);   // One to One association
Booking.belongsTo(Tractor); // One tractor can only be booked once

Farmer.hasMany(Booking); //One to Many ...One farmer can do many bookings
Booking.belongsTo(Farmer); 

TractorOwner.hasMany(Tractor); // One to Many ...One TractorOwner can have many tractors
Tractor.belongsTo(TractorOwner);


async function init () {
    await Farmer.sync();
    await Tractor.sync()
    await TractorOwner.sync()
    await Booking.sync()  
    };
    init();

module.exports = {

Farmer,
Tractor,
TractorOwner,
Booking
}; 