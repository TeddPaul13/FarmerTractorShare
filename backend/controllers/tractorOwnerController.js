"use strict";
const Models = require("../models");
const getTractorOwner = (res) => {
  Models.TractorOwner.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createTractorOwner = (data, res) => {
  Models.TractorOwner.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getTractorOwner,
    createTractorOwner
  };