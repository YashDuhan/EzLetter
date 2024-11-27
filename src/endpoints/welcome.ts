import { Request, Response } from "express";

export const welcomeRoute = (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the backend API",
  });
};
