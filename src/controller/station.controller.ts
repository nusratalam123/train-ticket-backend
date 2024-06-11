import { NextFunction, Request, Response } from "express";
import User from "./../model/station.model";

// create new stations
export const createStations = async (
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
      message: "User created Successfully",
      data: stations,
    });
  } catch (err) {
    next(err);
  }
};
