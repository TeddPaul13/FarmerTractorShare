"use strict";
const Models = require("../models");
const getAddress = (res) => {
  Models.Address.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createAddress = (data, res) => {
  Models.Address.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getAddress,
    createAddress
  };