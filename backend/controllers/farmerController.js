"use strict";
const Models = require("../models");
const getFarmers = (res) => {
  Models.Farmers.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createFarmers = (data, res) => {
  Models.Farmers.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getFarmers,
    createFarmers
  };