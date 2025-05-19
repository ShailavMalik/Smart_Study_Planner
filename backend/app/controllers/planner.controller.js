import generateStudyPlan from "../utils/studyPlanGenerator.js";
// import generateStudyPlanByOpenAI from "../services/openaiService.js";

const plannerController = async (req, res) => {
  const { subjects, availableHoursPerDay } = req.body;

  // validate input
  if (!subjects || !availableHoursPerDay) {
    return res
      .status(400)
      .json({ error: "Subjects and available hours per day are required" });
  }

  try {
    const studyPlan = generateStudyPlan(subjects, availableHoursPerDay);
    return res.status(200).json(studyPlan);
  } catch (error) {
    console.error("Error generating study plan:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while generating the study plan" });
  }
};

export default plannerController;
