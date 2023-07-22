const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class farmers extends Model {}
//Sequelize will create this table if it doesn't exist on startup
farmers.init(
  {
    farmer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false, required: true },
    lastName: { type: DataTypes.STRING, allowNull: false, required: true },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: { type: DataTypes.STRING, allowNull: false, required: true },

    address: { type: DataTypes.STRING, allowNull: true, required: false },
    postcode: { type: DataTypes.INTEGER, allowNull: true, required: false },
    suburb: { type: DataTypes.STRING, allowNull: true, required: false },
    state: { type: DataTypes.STRING, allowNull: true, required: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "farmers",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = farmers;
