import { Request, Response } from "express";
import { generatePrompt } from "./helper/generate_prompt";
import { generateVerdict } from "./helper/generate_response";

// write route
export const writeRoute = async (req: Request, res: Response) => {
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

  // Check if any field is missing
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

  try {
    const finalPrompt: string = generatePrompt(
      designation,
      destination,
      date,
      receiver_gender,
      subject,
      miscellaneous_info,
      your_name,
      name_footer
    );

    const finalResponse: string = await generateVerdict(finalPrompt);

    // debug
    // console.log(finalPrompt);
    console.log(finalResponse);

    res.status(200).json({
      message: finalResponse,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Error",
    });
  }
};
