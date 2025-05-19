import dayjs from "dayjs";

function generateStudyPlan(subjects, availableHoursPerDay) {
  const today = dayjs().startOf("day");
  let plan = {};

  // Prepare subjects and normalize exam dates
  let subjectList = subjects.map((sub) => ({
    ...sub,
    examDate: dayjs(sub.examDate).startOf("day"),
  }));

  // Find the last exam date
  const lastExamDate = subjectList.reduce(
    (latest, sub) => (sub.examDate.isAfter(latest) ? sub.examDate : latest),
    today
  );
  const totalDays = lastExamDate.diff(today, "day");

  // For each day until the day before the last exam, recalculate weights and distribute hours
  for (let d = 0; d < totalDays; d++) {
    const currentDate = today.add(d, "day");
    const dateStr = currentDate.format("DD-MMMM-YYYY");

    // Get subjects whose exams are still upcoming (not on exam day)
    const activeSubjects = subjectList.filter(
      (sub) => sub.examDate.diff(currentDate, "day") > 0
    );

    // Calculate weights for active subjects
    let weights = {};
    let totalWeight = 0;
    activeSubjects.forEach((sub) => {
      const daysLeft = sub.examDate.diff(currentDate, "day");
      weights[sub.name] = 1 / daysLeft;
      totalWeight += 1 / daysLeft;
    });

    // Distribute available hours for this day among active subjects
    plan[dateStr] = [];
    activeSubjects.forEach((sub) => {
      const daysLeft = sub.examDate.diff(currentDate, "day");
      const weightProportion = weights[sub.name] / totalWeight;
      const hours = parseFloat(
        (availableHoursPerDay * weightProportion).toFixed(2)
      );
      plan[dateStr].push({
        subject: sub.name,
        hours,
      });
    });
  }

  return plan;
}

export default generateStudyPlan;
