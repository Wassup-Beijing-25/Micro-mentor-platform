import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user.model";

export const checkUserExistenceMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { phone } = req.body;

  try {
    const existingUser = await UserModel.findOne({ phone });
    if (existingUser) {
      return res.status(409).json({
        message: "User with this phone number already exists",
      });
    }

    next(); 
  } catch (err) {
    console.error("Error checking user existence:", err);
    return res.status(500).json({
      message: "Failed to check user existence",
      error: err,
    });
  }
};
