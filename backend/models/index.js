const Farmers = require("./farmers");
const Tractor = require("./tractor");
const Booking = require("./booking");


Farmers.hasMany(Tractor);

Farmers.hasMany(Booking);

Booking.hasOne(Tractor);

async function init() {
  await Promise.all([
    Farmers.sync(),
    Tractor.sync(),
    Booking.sync(),
  ]);
}
init();

module.exports = {
  Farmers,
  Tractor,
  Booking,
};
