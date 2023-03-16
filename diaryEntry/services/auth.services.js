const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (data) => {
  try {
    const user = await User.create({
      name: data.name,
      email: data.email,
      dateOfBirth: data.dateOfBirth,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserBySC = async (data) => {
  const response = await User.findOne({
    where: {
      secretCode: data.secretCode,
    },
  });
  return response;
};

const verifyToken = (token) => {
    try {
      const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return response;
    } catch (err) {
      console.log(err);
    }
  };



module.exports = { register, getUserBySC, verifyToken };
