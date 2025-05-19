import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";

// Define a solid color palette for subjects (FullCalendar does not support gradients)
const subjectColors = [
    "#a18cd1", // purple
    "#fbc2eb", // pink
    "#fad0c4", // peach
    "#ffecd2", // cream
    "#a1c4fd", // blue
    "#d4fc79", // green
    "#fcb69f", // orange
    "#ff9a9e", // light red
];

// Map subjects to colors
const getSubjectColor = (() => {
    const subjectMap = {};
    let colorIdx = 0;
    return (subject) => {
        if (!subjectMap[subject]) {
            subjectMap[subject] = subjectColors[colorIdx % subjectColors.length];
            colorIdx++;
        }
        return subjectMap[subject];
    };
})();

const convertPlanToEvents = (plan) => {
    const events = [];

    Object.entries(plan).forEach(([date, entries]) => {
        let currentTime = dayjs(date, "DD-MMM-YYYY").hour(8).minute(0).second(0); // Start at 8:00 AM

        entries.forEach((entry) => {
            const start = currentTime;
            const end = start.add(entry.hours, "hour");

            events.push({
                title: `${entry.subject} (${entry.hours} hrs)`,
                start: start.format("YYYY-MM-DDTHH:mm:ss"),
                end: end.format("YYYY-MM-DDTHH:mm:ss"),
                backgroundColor: getSubjectColor(entry.subject),
                borderColor: getSubjectColor(entry.subject),
                textColor: "#222", // dark text for readability
            });

            currentTime = end.add(15, "minute");
        });
    });

    return events;
};

export default function StudyCalendar({ studyPlan }) {
    if (!studyPlan) {
        return <p>No study plan available ...</p>;
    }
    const events = convertPlanToEvents(studyPlan);

    return (
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-100 via-white to-pink-100 rounded-2xl p-6 shadow-xl">
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                initialDate="2025-05-19"
                events={events}
                height="auto"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "timeGridWeek,timeGridDay",
                }}
                eventDisplay="block"
                eventBorderColor="#fff"
                dayHeaderFormat={{ weekday: 'short', day: 'numeric', month: 'short' }}
            />
        </div>
    );
}
