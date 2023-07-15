const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Tractor = require("./tractor");
const Address = require("./address");
const sequelizeInstance = dbConnect.Sequelize;
class tractor_address extends Model {}
//Sequelize will create this table if it doesn't exist on startup
tractor_address.init(
  {
    tractor_address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tractor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tractor,
        key: "id",
      },
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Address,
          key: "address_id",
        },
      },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "tractor_address",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = tractor_address;
