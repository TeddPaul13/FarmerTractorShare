const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class address extends Model {}
//Sequelize will create this table if it doesn't exist on startup
address.init(
  {
    address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: { type: DataTypes.INTEGER, allowNull: false, required: true },
    postcode: { type: DataTypes.INTEGER, allowNull: false, required: true },
    suburb: { type: DataTypes.STRING, allowNull: false, required: true },
    state: { type: DataTypes.STRING, allowNull: false, required: true },
    country: { type: DataTypes.STRING, allowNull: false, required: true }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "address",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = address;