const listOfDiaryEntriesController = require("../controllers/listDiaryEntry.controller");
const middlewares = require("../middlewares/authentication.validators");

const routes = (app) => {
  app.post(
    "/diary/api/v1/creatediary",
    middlewares.isAuthenticated,
    listOfDiaryEntriesController.createDiary
  );

  app.get("/diary/api/v1/diary/:userId", listOfDiaryEntriesController.getDiary);
};

module.exports = routes;
