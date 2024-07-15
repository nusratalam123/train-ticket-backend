import { NextFunction, Request, Response } from "express";
import User from "./../model/train.model";

// create new stations
export const createTickets = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    if (Object.keys(data).length === 0) {
      res.status(400).json({
        message: "Data can't be empty",
      });
    }

    const stations = await User.create(data);

    res.status(201).json({
      message: "Station created Successfully",
      data: stations,
    });
  } catch (err) {
    next(err);
  }
};
