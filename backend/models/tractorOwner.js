const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class tractorOwner extends Model {}
//Sequelize will create this table if it doesn't exist on startup
tractorOwner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tractorOwnerFirstName: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorOwnerLastName: { type: DataTypes.STRING, allowNull: false, required: true },
    tractorOwnerEmailId: { type: DataTypes.STRING, allowNull: false,required: true,unique: true },
    tractorOwnerLocation: { type: DataTypes.STRING, allowNull: true, required: true },
    tractorOwnerPostcode: { type: DataTypes.INTEGER, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "tractorOwner",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = tractorOwner;