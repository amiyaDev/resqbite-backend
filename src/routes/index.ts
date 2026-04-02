import { Router } from "express";
import listingRoutes from "../modules/listing/listing.routes.js";

const router = Router();

router.use("/listings", listingRoutes);

export default router;
