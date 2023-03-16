const { listOfDiaryEntries } = require("../models/index");
const user = require("../models/user");

const createDiary = async (data) => {
  const response = await listOfDiaryEntries.create({
    name: data.name,
  });
  return response;
};

const getDiary = async (name, userId) => {
  const response = await listOfDiaryEntries.findAll({
    where: {
      userId: userId,
      name: name,
    },
    include: [{ model: "listOfLogs" }],
  });
  return response;
};

module.exports = { createDiary, getDiary };
