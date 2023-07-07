let Models = require("../models"); //matches index.js

//finds all users
const getTractors = (res) => {
  Models.Tractor.find()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};

const createTractor = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  new Models.Tractor(data)
    .save()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};
module.exports = {
  getTractors,
  createTractor,
};
