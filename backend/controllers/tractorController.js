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
const updateTractorById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }

  //Update user
  const data = await Models.Tractor.update(req.body, {
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to update Tractor" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Tractor updated succesfully",
  });
};
const deleteTractorById = async (req, res) => {
  console.log(req);
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "Cannot Delete" });
  }

  //Update user
  const data = await Models.Tractor.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to delete Tractor",
    });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Tractor deleted succesfully",
  });
};
const findTractorById = async (req, res) => {
  const id = req.params.id;
  Models.Tractor.findByPk(id)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getTractors,
    createTractors,
    updateTractorById,
    deleteTractorById,
    findTractorById
  };