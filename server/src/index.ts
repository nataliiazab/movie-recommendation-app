// src/index.ts
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

// Apply CORS middleware globally for all routes (especially for Vercel deployment)
app.use(
  cors({
    origin: "*", // Allow all domains
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Root route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Movie Recommendation API developed by Nataliia Zablotska for her Movie Finder project"
  );
});

// Movie route with pagination
app.get("/movies", async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const skip = (page - 1) * limit;

  try {
    const movies = await prisma.movie.findMany({
      skip,
      take: limit,
    });
    const totalMovies = await prisma.movie.count(); // Get the total count of movies
    const totalPages = Math.ceil(totalMovies / limit);

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
});

// Start the server for local development
if (process.env.VERCEL === undefined) {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Local server running at http://localhost:${port}`);
  });
}
