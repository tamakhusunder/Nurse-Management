import { Router } from "express";
import * as nurseController from "../core/controllers/nurse.controller";
import { authenticateToken } from "../middlewares/authenticateToken";

const router = Router();

router.get("/", authenticateToken, nurseController.getAllNurses);
router.post("/", authenticateToken, nurseController.createNurseInfo);

export default router;
