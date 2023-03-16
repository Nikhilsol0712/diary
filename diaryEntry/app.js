const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/auth.routes");
const diaryroutes = require("./routes/listDiaryEntry.routes");

const { sequelize } = require("./models/index");
// const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

userRoutes(app);
diaryroutes(app);

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log("server is listning to PORT:", PORT);
});
