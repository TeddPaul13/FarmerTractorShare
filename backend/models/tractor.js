const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Farmers = require("./farmers");
const sequelizeInstance = dbConnect.Sequelize;
class tractor extends Model {}
//Sequelize will create this table if it doesn't exist on startup
tractor.init(
  {
    tractor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    farmer_id:{
      type: DataTypes.INTEGER,
      references: {
        model: Farmers,
        key: 'id'
      }
    },
    tractorName: { type: DataTypes.STRING, allowNull: false, required: true },
    image: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorPowerRating: { type: DataTypes.INTEGER, allowNull: false, required: true },
    availabilty: { type: DataTypes.STRING, allowNull: false, required: true },
    deliveryOption: { type: DataTypes.STRING, allowNull: true, required: true },
    pricePerDay: { type: DataTypes.INTEGER, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "tractor",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = tractor;
