import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Movie Recommendation API");
});

// API endpoint to fetch movies
app.get("/movies", async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies); // Return the list of movies
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
