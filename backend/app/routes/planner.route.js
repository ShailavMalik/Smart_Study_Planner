import express from "express";
import plannerController from "../controllers/planner.controller.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/generate", plannerController);

// router.get("/getAll", plannerController.getAll);

export default router;