// api/movies.ts
import { VercelRequest, VercelResponse } from "@vercel/node"; // Import for Vercel handler
import { PrismaClient } from "@prisma/client"; // Prisma client

const prisma = new PrismaClient();

// Movie route with pagination
export default async function movieHandler(
  req: VercelRequest,
  res: VercelResponse
) {
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
}
