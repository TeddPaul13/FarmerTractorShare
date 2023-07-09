const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
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
    tractorName: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorPowerRating: { type: DataTypes.INTEGER, allowNull: false, required: true },
    tractorAttatchments: {type: DataTypes.STRING, allowNull: false, required: true, unique: true},
    availabilty: { type: DataTypes.STRING, allowNull: false, required: true },
    delivery: { type: DataTypes.STRING, allowNull: true, required: true },
    tractorLocation: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorPostcode: { type: DataTypes.INTEGER, allowNull: false, required: true },
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
