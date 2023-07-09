const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class farmer extends Model {}
//Sequelize will create this table if it doesn't exist on startup
farmer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    farmerFirstName: { type: DataTypes.STRING, allowNull: false, required: true },
    farmerLastName: { type: DataTypes.STRING, allowNull: false, required: true },
    // Change farmerDob Datatype to DATE and ask how to input date in Postman
    farmerDob: { type: DataTypes.DATE, allowNull: false, required: true },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
    farmerLocation: { type: DataTypes.STRING, allowNull: true, required: true },
    farmerPostcode: { type: DataTypes.INTEGER, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "farmer",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = farmer;