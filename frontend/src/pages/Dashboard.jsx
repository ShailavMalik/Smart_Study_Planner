import { useState } from "react";
import SubjectForm from "../components/Planner/SubjectForm";
import Footer from "../components/Reusable/Footer";
import Timetable from "../components/Planner/Timetable";
import useGeneratePlan from "../hooks/useGeneratePlan";
import Sidebar from "../components/Reusable/Sidebar";

function Dashboard() {
  const [studyPlan, setStudyPlan] = useState(null);
  const { loading, generatePlan } = useGeneratePlan();
  const handleGenerate = async (subjects, availableHours) => {
    const plan = await generatePlan(subjects, availableHours);
    setStudyPlan(plan);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <Sidebar />
      <div className="flex flex-col md:flex-row">
        <SubjectForm onGenerate={handleGenerate} />

        {loading && <div>Loading...</div>}
        {studyPlan && <Timetable plan={studyPlan} />}
      </div>

      <Footer />
    </div>
  );
}
export default Dashboard;
