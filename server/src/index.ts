import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// API Endpoint to fetch movies
app.get("/movies", async (req, res) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

