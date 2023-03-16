const authService = require("../services/auth.services");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const response = await authService.register(req.body);
  return res.json({
    message: "Successfully signed up",
    success: true,
    data: response,
    code: 200,
  });
};

const logIn = async (req, res) => {
  const response = await authService.getUserBySC(req.body);
  if (response) {
    console.log(process.env.JWT_SECRET_KEY, "==========================");
    var token = jwt.sign(
      {
        email: response.email,
        secretCode: response.secretCode,
      },
      process.env.JWT_SECRET_KEY
    );
    return res.json({
      message: "Signed in successfully",
      success: true,
      code: 200,
      token: token,
      data: response,
    });
  } else {
    return res.json({
      message: "SecretCode Incorrect",
      success: true,
      data: null,
      code: 400,
    });
  }
};

module.exports = { register, logIn };
