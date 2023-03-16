"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listOfDiaryEntries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });

      this.hasMany(models.listOfLogs, { foreignKey: "diaryId" });
    }
  }
  listOfDiaryEntries.init(
    { userId: DataTypes.INTEGER, name: DataTypes.STRING },
    {
      sequelize,
      modelName: "listOfDiaryEntries",
    }
  );
  return listOfDiaryEntries;
};
