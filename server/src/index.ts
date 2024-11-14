import { VercelRequest, VercelResponse } from "@vercel/node"; // Import for Vercel handler
import { PrismaClient } from "@prisma/client"; // Prisma client

const prisma = new PrismaClient();

// Root route
async function rootHandler(req: VercelRequest, res: VercelResponse) {
  res.send("Welcome to the Movie Recommendation API");
}

// Movie route
async function movieHandler(req: VercelRequest, res: VercelResponse) {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}

// Default exported function to handle requests
export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.url === "/") {
    return rootHandler(req, res); // Handle root route
  }

  if (req.url === "/movies") {
    return movieHandler(req, res); // Handle movies route
  }

  res.status(404).json({ error: "Route not found" }); // Handle other routes
}
