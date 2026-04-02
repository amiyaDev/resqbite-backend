import { Request, Response } from "express";
import * as listingService from "./listing.service.js";

export const createListing = async (req: Request, res: Response) => {
  try {
    const data = await listingService.create(req.body);
    res.status(201).json({
        success: true,
        data
    });
  } catch (error: any) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};

export const getListings = async (req: Request, res: Response) => {
    try {
        const data = await listingService.getAll();
        res.status(200).json({
            success: true,
            data
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
