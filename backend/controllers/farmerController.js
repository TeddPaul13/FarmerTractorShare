"use strict";
const Models = require("../models");

//for JWT
const db = require("../dbConnect");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getFarmers = (res) => {
  Models.Farmers.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

// Test JWT Here
const registerUser = async (req, res, next) => {
  const newFarmer = await Models.Farmers.findOne({
    where: { emailId: req.body.email },
  });
  

  if (newFarmer) {
    return res.status(409).send({
      msg: "This user is already in use!",
      status: false
    });
  }

  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err,
        status: false
      });
    }
    const user = await Models.Farmers.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      password: hash,
    });
    return res.status(200).send({
      status: true,
      msg: "The user has been registered with us!",
    });
  });
  // 
};
const loginUser = async (req, res, next) => {
  const farmer = await Models.Farmers.findOne({
    where: { emailId: req.body.emailId}, 
  
  })
 if (!farmer) {
   return res.status(401).send({
     msg: "Email or password is incorrect!",
     status: false
   });
 }
  const checkPassword = await bcrypt.compare(req.body.password, farmer.password);
  if (!checkPassword) {
    return res.status(401).send({
      msg: "Email or password is incorrect!",
      status: false
    });
  }

  const token = jwt.sign({ id: farmer.farmer_id }, "the-super-strong-secret", {
    expiresIn: "1h",
  });
  return res.status(200).send({
    msg: "Logged in!",
    token,
    data: farmer,
    status: true
  });
  

}
//     db.query(
//       `SELECT * FROM farmers WHERE emailId = ${req.body.email};`,
//       (err, result) => {
//         if (err) {
//           throw err;
//           return res.status(400).send({
//             msg: err,
//           });
//         }
//         if (!result.length) {
//           return res.status(401).send({
//             msg: "Email or password is incorrect!",
//           });
//         }

//         bcrypt.compare(
//           req.body.password,
//           result[0]["password"],
//           (bErr, bResult) => {
//             if (bErr) {
//               throw bErr;
//               return res.status(401).send({
//                 msg: "Email or password is incorrect!",
//               });
//             }
//             if (bResult) {
//               const token = jwt.sign(
//                 { id: result[0].id },
//                 "the-super-strong-secret",
//                 {
//                   expiresIn: "1h",
//                 }
//               );
//               db.query(
//                 `UPDATE farmers SET last_login = now() WHERE id = '${result[0].id}'`
//               );
//               return res.status(200).send({
//                 msg: "Logged in!",
//                 token,
//                 user: result[0],
//               });
//             }
//             return res.status(401).send({
//               msg: "Username or password is incorrect!",
//             });
//           }
//         );
//       }
//     );
// };
const getUser = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer") ||
    !req.headers.authorization.split(" ")[1]
  ) {
    return res.status(422).json({
      message: "Please provide the token",
    });
  }

  const theToken = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(theToken, "the-super-strong-secret");

  await Models.Farmers.findAll({})
  db.query(
    "SELECT * FROM farmers where id=?",
    decoded.id,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "Fetch Successfully.",
      });
    }
  );
};
//******************************************End JWT Test ***************************************/

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
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to update farmer",
    });
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
  findFarmerById,
  registerUser,
  loginUser,
  getUser,
};
