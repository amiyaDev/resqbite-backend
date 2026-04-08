import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import listingRoutes from "../modules/listing/listing.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/listings", listingRoutes);

export default router;
