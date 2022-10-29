import { Router } from "express";
import authRoutes from "./authRoutes";
import nurseRoutes from "./nurseRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/nurse", nurseRoutes);

export default router;
