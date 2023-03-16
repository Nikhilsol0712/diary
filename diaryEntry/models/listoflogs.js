"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listOfLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.listOfDiaryEntries, { foreignKey: "diaryId" });
    }
  }
  listOfLogs.init(
    {
      diaryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listOfLogs",
    }
  );
  return listOfLogs;
};
