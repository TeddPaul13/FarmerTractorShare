const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class booking extends Model {}
//Sequelize will create this table if it doesn't exist on startup
booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    farmerId: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorOwnerId: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorId: { type: DataTypes.DATE, allowNull: false, required: true },
    tractorName: { type: DataTypes.STRING, allowNull: false, required: true, unique: true },
    returnDate: { type: DataTypes.DATE, allowNull: false, required: true }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "booking",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = booking;