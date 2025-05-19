import { useState } from "react";
import SubjectForm from "../components/Planner/SubjectForm";
import Footer from "../components/Reusable/Footer";
import Timetable from "../components/Planner/Timetable";
import useGeneratePlan from "../hooks/useGeneratePlan";
import Sidebar from "../components/Reusable/Sidebar";
import StudyCalendar from "../components/Planner/StudyCalendar";

function Dashboard() {
  const [studyPlan, setStudyPlan] = useState(null);
  const { loading, generatePlan } = useGeneratePlan();
  const handleGenerate = async (subjects, availableHours) => {
    const plan = await generatePlan(subjects, availableHours);
    setStudyPlan(plan);
  };

  return (
    <div className="min-h-screen flex flex-col place-items-stretch">
      <Sidebar />
      <div className="px-20">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
            PlanWise - Study Planner
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-gray-700 text-center max-w-2xl">
            Create your personalized study plan and stay organized with our
            intuitive planner.
          </p>
        </div>
      </div>

      <div className="flex items-stretch justify-stretch flex-col xl:items-start xl:flex-row">
        <div className="mt-8 pl-8 flex-1 flex-col items-center  flex">
          <SubjectForm onGenerate={handleGenerate} />
          <div className="hidden xl:flex">
            <StudyCalendar studyPlan={studyPlan} />
          </div>
        </div>
        <div className="flex flex-1 ">
          {loading && <div>Loading...</div>}
          {studyPlan && <Timetable plan={studyPlan} />}
        </div>
        <div className="flex xl:hidden">
          <StudyCalendar studyPlan={studyPlan} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashboard;
