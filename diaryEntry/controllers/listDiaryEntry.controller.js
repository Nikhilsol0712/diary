const listOfDiaryEntriesService = require("../services/listDiaryEntry.service");

const createDiary = async (req, res) => {
  const response = await listOfDiaryEntriesService.createDiary(req.body);
  if (response) {
    return res.json({
      message: "Successfully create a Diary",
      success: true,
      data: response,
      code: 200,
    });
  }
  return res.json({
    message: "Invalid Data",
    success: true,
    data: response,
    code: 400,
  });
};

const getDiary = async (req, res) => {
  const userId = req.user.userId;

  const response = await listOfDiaryEntriesService.getDiary(
    req.params.name,
    userId
  );
  if (response) {
    return res.json({
      message: "Successfully find Diary",
      success: true,
      data: response,
      code: 200,
    });
  }
  return res.json({
    message: "Diary not found",
    success: true,
    data: null,
    code: 400,
  });
};

module.exports = { createDiary, getDiary };
