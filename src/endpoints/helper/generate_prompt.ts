import fs from "fs";
import path from "path";

export function generatePrompt(
  designation: string,
  destination: string,
  date: string,
  receiver_gender: string,
  subject: string,
  miscellaneous_info: string,
  your_name: string,
  name_footer: string
): string {
  try {
    const promptTemplate = fs.readFileSync(
      path.join(__dirname, "./prompt.txt"),
      "utf8"
    );

    return promptTemplate
      .replace(/{designation}/g, designation)
      .replace(/{destination}/g, destination)
      .replace(/{date}/g, date)
      .replace(/{receiver_gender}/g, receiver_gender)
      .replace(/{subject}/g, subject)
      .replace(/{miscellaneous_info}/g, miscellaneous_info)
      .replace(/{your_name}/g, your_name)
      .replace(/{name_footer}/g, name_footer);
  } catch (err) {
    throw new Error(`Error reading prompt.txt: ${(err as Error).message}`);
  }
}
