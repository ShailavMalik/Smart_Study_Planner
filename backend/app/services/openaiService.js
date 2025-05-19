// import generateStudyPlan from "../utils/studyPlanGenerator";

const generateStudyPlanByOpenAI = async (subjects, availableHoursPerDay) => {
  let plan = {};

  // use OpenAI API to improve the plan
  // this includes considering the difficulty of the subjects, & user preferences

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: JSON.stringify({ subjects, availableHoursPerDay }),
      },
    ],
  });
  return response.choices[0].message.content;
};

export default generateStudyPlanByOpenAI;
