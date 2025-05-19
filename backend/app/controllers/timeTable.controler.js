import Timetable from "../models/Timetable.js";

export const saveTimetable = async (req, res) => {
  try {
    const { userId, plan } = req.body;

    await Timetable.findOneAndDelete({ userId }); // Remove old timetable

    const newPlan = new Timetable({ userId, plan });
    await newPlan.save();

    res.status(200).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
