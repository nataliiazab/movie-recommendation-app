import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A list of top IMDb movies (200 entries, for demonstration we add fewer)
// You can add more or fetch them from an API (OMDb API, for example)

const topImdbMovies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime, Drama" },
  { title: "The Dark Knight", genre: "Action, Crime, Drama" },
  { title: "The Godfather: Part II", genre: "Crime, Drama" },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Action, Adventure, Drama",
  },
  { title: "Pulp Fiction", genre: "Crime, Drama" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Action, Adventure, Drama",
  },
  { title: "Forrest Gump", genre: "Drama, Romance" },
  { title: "Inception", genre: "Action, Adventure, Sci-Fi" },
  { title: "The Empire Strikes Back", genre: "Action, Adventure, Fantasy" },
  { title: "The Matrix", genre: "Action, Sci-Fi" },
  { title: "The Silence of the Lambs", genre: "Crime, Drama, Thriller" },
  { title: "Schindler's List", genre: "Biography, Drama, History" },
  { title: "Se7en", genre: "Crime, Drama, Mystery" },
  { title: "The Usual Suspects", genre: "Crime, Drama, Thriller" },
  { title: "The Lion King", genre: "Animation, Adventure, Drama" },
  { title: "Goodfellas", genre: "Biography, Crime, Drama" },
  { title: "Casablanca", genre: "Drama, Romance, War" },
  { title: "Citizen Kane", genre: "Drama, Mystery" },
  { title: "It's a Wonderful Life", genre: "Drama, Family, Fantasy" },
  { title: "Star Wars: A New Hope", genre: "Action, Adventure, Fantasy" },
  { title: "The Departed", genre: "Crime, Drama, Thriller" },
  { title: "Whiplash", genre: "Drama, Music" },
  { title: "Gladiator", genre: "Action, Adventure, Drama" },
  { title: "The Prestige", genre: "Drama, Mystery, Sci-Fi" },
  { title: "The Green Mile", genre: "Crime, Drama, Fantasy" },
  { title: "The Shining", genre: "Drama, Horror" },
  { title: "The Dark Knight Rises", genre: "Action, Adventure, Thriller" },
  { title: "A Clockwork Orange", genre: "Crime, Drama, Sci-Fi" },
  { title: "Fight Club", genre: "Drama" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "The Great Dictator", genre: "Comedy, Drama" },
  { title: "Vertigo", genre: "Drama, Mystery, Thriller" },
  { title: "The Seventh Seal", genre: "Drama, Fantasy" },
  { title: "Citizen Kane", genre: "Drama, Mystery" }
];

async function main() {
  // Insert each movie from the list into the database
  for (const movie of topImdbMovies) {
    await prisma.movie.create({
      data: movie,
    });
  }

  console.log(
    `Successfully added ${topImdbMovies.length} movies to the database.`
  );
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
