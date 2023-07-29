const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Farmers = require("./farmers");
const sequelizeInstance = dbConnect.Sequelize;
class tractor extends Model {}
//Sequelize will create this table if it doesn't exist on startup
tractor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tractorImage: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorModel: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorDescription: { type: DataTypes.STRING, allowNull: false, required: true },
    availableFrom: { type: DataTypes.STRING, allowNull: false, required: true},
    availableUntil: { type: DataTypes.STRING, allowNull: false, required: true },
    deliveryOption: { type: DataTypes.STRING, allowNull: true, required: true },
    pricePerDay: { type: DataTypes.INTEGER, allowNull: true, required: true },
    address: { type: DataTypes.STRING, allowNull: false, required: true },
    postcode: { type: DataTypes.INTEGER, allowNull: false, required: true },
    suburb: { type: DataTypes.STRING, allowNull: false, required: true },
    state: { type: DataTypes.STRING, allowNull: false, required: true },
   },
  {
    sequelize: sequelizeInstance,
    modelName: "tractor",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = tractor;
