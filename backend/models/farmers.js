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
  },
  {
    sequelize: sequelizeInstance,
    modelName: "farmers",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = farmers;

// async function dropTable() {
//   try {
//     await farmer.drop(); // Drop tables defined in your Sequelize models
//     console.log('Table dropped successfully.');
//   } catch (error) {
//     console.error('Error dropping table:', error);
//   }
// }

// dropTable();