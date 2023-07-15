const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Farmers = require("./farmers")
const Address = require("./address");
const sequelizeInstance = dbConnect.Sequelize;
class farmer_address extends Model {}
//Sequelize will create this table if it doesn't exist on startup
farmer_address.init(
  {
    farmer_address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    farmer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Farmers,
        key: "id",
      },
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Address,
          key: "id",
        },
      },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "farmer_address",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = farmer_address;
