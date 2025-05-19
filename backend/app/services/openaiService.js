// import generateStudyPlan from "../utils/studyPlanGenerator";

const generateStudyPlanByOpenAI = (subjects, availableHoursPerDay) => {
  let plan = {};

  // Call OpenAI API to generate study plan
  // const response = await openai.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [
  //     {
  //       role: "user",
  //       content: JSON.stringify({ subjects, availableHoursPerDay }),
  //     },
  //   ],
  // });
  // return response.choices[0].message.content;

  // let plan = generateStudyPlan(subjects, availableHoursPerDay);
  
  return plan;
};

export default generateStudyPlanByOpenAI;
