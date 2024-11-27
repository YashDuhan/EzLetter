import { Request, Response } from "express";

// write route
export const writeRoute = (req: Request, res: Response) => {
  const {
    designation, // receiver's designation
    destination, // receiver's destination
    date, // sending date
    receiver_gender, // for salutation
    subject, // subject of application
    miscellaneous_info, // extra info
    your_name, // your name
    name_footer, // your rollno/your designation goes here
  } = req.body;

  // Check if any fields is missing
  if (
    !designation ||
    !destination ||
    !date ||
    !receiver_gender ||
    !subject ||
    !miscellaneous_info ||
    !your_name ||
    !name_footer
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  console.log("Received data:", req.body);

  // success message
  res.json({
    message: "Temp Logs",
    data: req.body,
  });
};
