import fs from "fs";
import path from "path";
import { Request, Response } from "express";

// Serve the OpenAPI JSON file at /swagger.json
export const swaggerJsonRoute = (req: Request, res: Response) => {
  const swaggerPath = path.join(__dirname, "swagger.json");
  const swaggerFile = fs.readFileSync(swaggerPath, "utf-8");
  res.json(JSON.parse(swaggerFile));
};

// Docs route to display the API reference UI
export const docsRoute = (req: Request, res: Response) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Scalar API Reference</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <script id="api-reference" data-url="/swagger.json"></script>
        <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
      </body>
    </html>
  `);
};
