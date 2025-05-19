import { useState } from "react";

const useGeneratePlan = () => {
  const [loading, setLoading] = useState(false);

  const generatePlan = async (subjects, availableHoursPerDay) => {
    try {
      setLoading(true);

      // Defensive: ensure subjects is always an array
      const safeSubjects = Array.isArray(subjects) ? subjects : [];

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/planner/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjects: safeSubjects.map((s) => ({
              name: s.subject,
              examDate: s.examDate,
            })),
            availableHoursPerDay: Number(availableHoursPerDay), // ensure it's a number
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate study plan");
      }

      const data = await response.json();
      console.log("Generated study plan:", data);

      return data;
    } catch (error) {
      console.error("Error generating study plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, generatePlan };
};

export default useGeneratePlan;
