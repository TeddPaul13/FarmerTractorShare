"use strict";
const Models = require("../models");
const getBookings = (res) => {
  Models.Booking.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createBookings = (data, res) => {
  Models.Booking.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getBookings,
    createBookings
  };