import { Router } from "express";
import { createListing, getListings } from "./listing.controller.js";

const router = Router();
/**
 * @swagger
 * /api/listings:
 *   post:
 *     summary: Create a new listing
 *     tags: [Listing]
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Listing created successfully
 */
router.post("/", createListing);
router.get("/", getListings);

export default router;
