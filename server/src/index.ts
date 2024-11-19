import { VercelRequest, VercelResponse } from "@vercel/node"; // Import for Vercel handler
import { PrismaClient } from "@prisma/client"; // Prisma client
import express, { Request, Response } from "express"; // Import for local server
import cors from "cors";

const prisma = new PrismaClient();

const app = express(); // Create Express app for local development

// Apply CORS middleware globally for all routes (especially for Vercel deployment)
app.use(
  cors({
    origin: "*", // Allow all domains (use specific domains in production for better security)
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Root route
async function rootHandler(
  req: VercelRequest | Request,
  res: VercelResponse | Response
) {
  res.send("Welcome to the Movie Recommendation API!");
}

// Movie route
async function movieHandler(
  req: VercelRequest | Request,
  res: VercelResponse | Response
) {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}

// Local development server (using Express)
if (process.env.VERCEL === undefined) {
  // If running locally, use Express
  app.get("/", rootHandler);
  app.get("/movies", movieHandler);

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Local server running at http://localhost:${port}`);
  });
}

// Default exported function to handle requests (for Vercel)
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Apply CORS here for Vercel deployment
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all domains for CORS
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow these HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow these headers

  if (req.url === "/") {
    return rootHandler(req, res); // Handle root route
  }

  if (req.url === "/movies") {
    return movieHandler(req, res); // Handle movies route
  }

  res.status(404).json({ error: "Route not found" }); // Handle other routes
}
