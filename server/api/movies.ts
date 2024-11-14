import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const movies = await prisma.movie.findMany(); // Prisma query
      res.status(200).json(movies); // Return movies as JSON
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" }); // Handle errors
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // Handle non-GET methods
  }
}
