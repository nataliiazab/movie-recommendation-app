import { VercelRequest, VercelResponse } from "@vercel/node"; // Import for Vercel handler
import { PrismaClient } from "@prisma/client"; // Prisma client
import express, { Request, Response } from "express"; // Import for local server
import cors from "cors";

const prisma = new PrismaClient();

const app = express(); // Create Express app for local development

// Apply CORS middleware 
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? "https://movie-recommendation-app-client.vercel.app"  // Production
    : "http://localhost:3000",  // Development
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions)); 
// Root route
async function rootHandler(
  req: VercelRequest | Request,
  res: VercelResponse | Response
) {
  res.send(
    "Welcome to the Movie Recommendation API developed by Nataliia Zablotska for her Movie Finder project"
  );
}

// Movie route with pagination
async function movieHandler(
  req: VercelRequest | Request,
  res: VercelResponse | Response
) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const skip = (page - 1) * limit;
  console.log(`Fetching page ${page}, limit ${limit}, skip ${skip}`);

  try {
    const movies = await prisma.movie.findMany({
      skip,
      take: limit,
    });
    const totalMovies = await prisma.movie.count();
    const totalPages = Math.ceil(totalMovies / limit);

    console.log(`Total movies: ${totalMovies}, Total pages: ${totalPages}`);

    res.json({
      movies,
      totalMovies,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
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
