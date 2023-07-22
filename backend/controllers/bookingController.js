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
const updateBookingById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }

  //Update user
  const data = await Models.Booking.update(req.body, {
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to update booking" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Booking updated succesfully",
  });
};
const deleteBookingById = async (req, res) => {
  console.log(req);
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "Cannot Delete" });
  }

  //Update user
  const data = await Models.Booking.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to delete Booking",
    });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Booking deleted succesfully",
  });
};
const findBookingById = async (req, res) => {
  const id = req.params.id;
  Models.Booking.findByPk(id)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
    getBookings,
    createBookings,
    updateBookingById,
    deleteBookingById,
    findBookingById
  };