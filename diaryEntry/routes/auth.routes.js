// const { application } = require("express");
const authController = require("../controllers/auth.controller");
const middlewares = require("../middlewares/authentication.validators");

const routes = (app) => {
  app.post(
    "/diary/api/v1/register",
    authController.register
  );

  app.post("/diary/api/v1/login", authController.logIn);
};

module.exports = routes;
