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
const updateFarmerById = async (req, res) => {
  const farmer_id = req.params.id;
  if (!farmer_id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }

  //Update user
  const data = await Models.Farmers.update(req.body, {
    where: {
      farmer_id: farmer_id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to update farmer" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Farmer updated succesfully",
  });
};
const deleteFarmerById = async (req, res) => {
  console.log(req);
  const farmer_id = req.params.id;
  if (!farmer_id) {
    res.send({ result: 400, stauts: false, message: "Cannot Delete" });
  }

  //Update user
  const data = await Models.Farmers.destroy({
    where: {
      farmer_id: farmer_id,
    },
  });

  if (!data) {
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to delete Farmer",
    });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Farmer deleted succesfully",
  });
};
const findFarmerById = async (req, res) => {
  const farmer_id = req.params.id;
  Models.Team.findByPk(farmer_id)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
    getFarmers,
    createFarmers,
    updateFarmerById,
    deleteFarmerById,
    findFarmerById
  };