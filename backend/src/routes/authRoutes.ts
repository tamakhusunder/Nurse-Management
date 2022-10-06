import { Router } from "express";
import * as authController from "../core/controllers/auth.controllers";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
