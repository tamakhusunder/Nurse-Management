import { Router } from "express";
import * as nurseController from "../core/controllers/nurse.controller";

const router = Router();

router.get("/", nurseController.getAllNurses);

export default router;
