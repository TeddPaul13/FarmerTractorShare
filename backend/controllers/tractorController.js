"use strict";
const Models = require("../models");
const getTractors = (res) => {
  Models.Tractor.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createTractors = (data, res) => {
  Models.Tractor.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getTractors,
    createTractors
  };