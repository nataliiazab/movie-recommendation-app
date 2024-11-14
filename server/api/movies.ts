import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Handle GET requests to fetch movies
  if (req.method === "GET") {
    try {
      const movies = await prisma.movie.findMany();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  } else {
    // If method is not GET, return 405 Method Not Allowed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
