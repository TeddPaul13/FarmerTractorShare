const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Farmers = require("./farmers");
const Tractor = require("./tractor")
const sequelizeInstance = dbConnect.Sequelize;
class booking extends Model {}
//Sequelize will create this table if it doesn't exist on startup
booking.init(
  {
    bookings_id: {
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
    tractor_id:{
      type: DataTypes.INTEGER,
      references: {
        model: Tractor,
        key: 'id'
      }
    },
    bookingDate: { type: DataTypes.STRING, allowNull: false, required: true },
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