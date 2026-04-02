import { Router } from "express";
import { createListing, getListings } from "./listing.controller.js";

const router = Router();

router.post("/", createListing);
router.get("/", getListings);

export default router;
