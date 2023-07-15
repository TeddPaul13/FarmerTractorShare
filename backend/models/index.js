const Farmers = require("./farmers");
const Tractor = require("./tractor");
const Booking = require("./booking");
const Address = require("./address");
const Farmer_address = require("./farmer_address");
const Tractor_address = require("./tractor_address");

Farmers.hasMany(Tractor);

Farmers.hasMany(Booking);

Booking.hasOne(Tractor);

// Farmer_address.hasOne(Address);

// Tractor_address.hasOne(Address);

Tractor_address.hasOne(Tractor);

Farmer_address.hasOne(Farmers);

async function init() {
  await Promise.all([
    Farmers.sync(),
    Tractor.sync(),
    Address.sync(),
    Tractor_address.sync(),
    Farmer_address.sync(),
    Booking.sync(),
  ]);
}
init();

module.exports = {
  Farmers,
  Tractor,
  Booking,
  Address,
  Farmer_address,
  Tractor_address,
};
