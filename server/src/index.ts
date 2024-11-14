import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic API route for getting movies
app.get("/movies", async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
