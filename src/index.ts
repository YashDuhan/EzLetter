import express, { Request, Response, RequestHandler } from "express";
import { welcomeRoute } from "./endpoints/welcome";
import { writeRoute } from "./endpoints/write";
import { docsRoute, swaggerJsonRoute } from "./endpoints/docs";

const app = express();
app.use(express.json()); // parse JSON
const PORT = 3000;

// The routes
app.get("/", welcomeRoute as RequestHandler); // Root endpoint
app.post("/write", writeRoute as RequestHandler); // Write endpoint
app.get("/docs", docsRoute as RequestHandler); // Docs endpoint
app.get("/swagger.json", swaggerJsonRoute as RequestHandler); // Swagger json endpoint

// Start the server locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// For Vercel
module.exports = app;
