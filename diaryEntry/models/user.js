"use strict";
const { Sequelize, Model } = require("sequelize");
// const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.listOfDiaryEntries, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      secretCode: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true, //email should be unique
        validate: {
          isEmail: true, //to validate the email format is correct
        },
      },
      dateOfBirth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
