import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A list of top IMDb movies (200 entries, with year, rating, and genre)
const topImdbMovies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
  },
  { title: "The Godfather", genre: "Crime, Drama", year: 1972, rating: 9.2 },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    year: 1974,
    rating: 9.0,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Action, Adventure, Drama",
    year: 2003,
    rating: 8.9,
  },
  { title: "Pulp Fiction", genre: "Crime, Drama", year: 1994, rating: 8.9 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Action, Adventure, Drama",
    year: 2001,
    rating: 8.8,
  },
  { title: "Forrest Gump", genre: "Drama, Romance", year: 1994, rating: 8.8 },
  {
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Empire Strikes Back",
    genre: "Action, Adventure, Fantasy",
    year: 1980,
    rating: 8.7,
  },
  { title: "The Matrix", genre: "Action, Sci-Fi", year: 1999, rating: 8.7 },
  {
    title: "The Silence of the Lambs",
    genre: "Crime, Drama, Thriller",
    year: 1991,
    rating: 8.6,
  },
  {
    title: "Schindler's List",
    genre: "Biography, Drama, History",
    year: 1993,
    rating: 8.9,
  },
  { title: "Se7en", genre: "Crime, Drama, Mystery", year: 1995, rating: 8.6 },
  {
    title: "The Usual Suspects",
    genre: "Crime, Drama, Thriller",
    year: 1995,
    rating: 8.5,
  },
  {
    title: "The Lion King",
    genre: "Animation, Adventure, Drama",
    year: 1994,
    rating: 8.5,
  },
  {
    title: "Goodfellas",
    genre: "Biography, Crime, Drama",
    year: 1990,
    rating: 8.7,
  },
  {
    title: "Casablanca",
    genre: "Drama, Romance, War",
    year: 1942,
    rating: 8.5,
  },
  { title: "Citizen Kane", genre: "Drama, Mystery", year: 1941, rating: 8.3 },
  {
    title: "It's a Wonderful Life",
    genre: "Drama, Family, Fantasy",
    year: 1946,
    rating: 8.6,
  },
  {
    title: "Star Wars: A New Hope",
    genre: "Action, Adventure, Fantasy",
    year: 1977,
    rating: 8.6,
  },
  {
    title: "The Departed",
    genre: "Crime, Drama, Thriller",
    year: 2006,
    rating: 8.5,
  },
  { title: "Whiplash", genre: "Drama, Music", year: 2014, rating: 8.5 },
  {
    title: "Gladiator",
    genre: "Action, Adventure, Drama",
    year: 2000,
    rating: 8.5,
  },
  {
    title: "The Prestige",
    genre: "Drama, Mystery, Sci-Fi",
    year: 2006,
    rating: 8.5,
  },
  {
    title: "The Green Mile",
    genre: "Crime, Drama, Fantasy",
    year: 1999,
    rating: 8.6,
  },
  { title: "The Shining", genre: "Drama, Horror", year: 1980, rating: 8.4 },
  {
    title: "The Dark Knight Rises",
    genre: "Action, Adventure, Thriller",
    year: 2012,
    rating: 8.4,
  },
  {
    title: "A Clockwork Orange",
    genre: "Crime, Drama, Sci-Fi",
    year: 1971,
    rating: 8.3,
  },
  { title: "Fight Club", genre: "Drama", year: 1999, rating: 8.8 },
  {
    title: "One Flew Over the Cuckoo's Nest",
    genre: "Drama",
    year: 1975,
    rating: 8.7,
  },
  {
    title: "The Good, the Bad and the Ugly",
    genre: "Western",
    year: 1966,
    rating: 8.8,
  },
  {
    title: "The Great Dictator",
    genre: "Comedy, Drama",
    year: 1940,
    rating: 8.4,
  },
  {
    title: "Vertigo",
    genre: "Drama, Mystery, Thriller",
    year: 1958,
    rating: 8.3,
  },
  {
    title: "The Seventh Seal",
    genre: "Drama, Fantasy",
    year: 1957,
    rating: 8.1,
  },
  {
    title: "The Lives of Others",
    genre: "Drama, Thriller",
    year: 2006,
    rating: 8.4,
  },
  { title: "Memento", genre: "Mystery, Thriller", year: 2000, rating: 8.4 },
  { title: "American History X", genre: "Drama", year: 1998, rating: 8.5 },
  {
    title: "Saving Private Ryan",
    genre: "Drama, War",
    year: 1998,
    rating: 8.6,
  },
  {
    title: "Parasite",
    genre: "Comedy, Drama, Thriller",
    year: 2019,
    rating: 8.6,
  },
  {
    title: "Léon: The Professional",
    genre: "Crime, Drama, Thriller",
    year: 1994,
    rating: 8.5,
  },
  {
    title: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Pianist",
    genre: "Biography, Drama, Music",
    year: 2002,
    rating: 8.5,
  },
  { title: "City of God", genre: "Crime, Drama", year: 2002, rating: 8.6 },
  {
    title: "The Intouchables",
    genre: "Biography, Comedy, Drama",
    year: 2011,
    rating: 8.5,
  },
  {
    title: "Spirited Away",
    genre: "Animation, Adventure, Family",
    year: 2001,
    rating: 8.6,
  },
  {
    title: "The Green Book",
    genre: "Biography, Comedy, Drama",
    year: 2018,
    rating: 8.2,
  },
  {
    title: "The Wolf of Wall Street",
    genre: "Biography, Crime, Drama",
    year: 2013,
    rating: 8.2,
  },
  {
    title: "Django Unchained",
    genre: "Drama, Western",
    year: 2012,
    rating: 8.4,
  },
  {
    title: "WALL·E",
    genre: "Animation, Adventure, Family",
    year: 2008,
    rating: 8.4,
  },
  { title: "The Truman Show", genre: "Comedy, Drama", year: 1998, rating: 8.2 },
  {
    title: "V for Vendetta",
    genre: "Action, Drama, Sci-Fi",
    year: 2005,
    rating: 8.2,
  },
  { title: "Amélie", genre: "Comedy, Romance", year: 2001, rating: 8.3 },
  {
    title: "The Grand Budapest Hotel",
    genre: "Adventure, Comedy, Crime",
    year: 2014,
    rating: 8.1,
  },
  {
    title: "Braveheart",
    genre: "Biography, Drama, History",
    year: 1995,
    rating: 8.3,
  },
  { title: "Requiem for a Dream", genre: "Drama", year: 2000, rating: 8.3 },
  {
    title: "Blade Runner 2049",
    genre: "Action, Drama, Sci-Fi",
    year: 2017,
    rating: 8.0,
  },
  { title: "Oldboy", genre: "Action, Drama, Mystery", year: 2003, rating: 8.4 },
  {
    title: "Pan's Labyrinth",
    genre: "Drama, Fantasy, War",
    year: 2006,
    rating: 8.2,
  },
  { title: "The Hunt", genre: "Drama", year: 2012, rating: 8.3 },
  { title: "Logan", genre: "Action, Drama, Sci-Fi", year: 2017, rating: 8.1 },
  {
    title: "Shutter Island",
    genre: "Mystery, Thriller",
    year: 2010,
    rating: 8.2,
  },
  {
    title: "The Sixth Sense",
    genre: "Drama, Mystery, Thriller",
    year: 1999,
    rating: 8.1,
  },
  {
    title: "Prisoners",
    genre: "Crime, Drama, Mystery",
    year: 2013,
    rating: 8.1,
  },
  {
    title: "Gone Girl",
    genre: "Drama, Mystery, Thriller",
    year: 2014,
    rating: 8.1,
  },
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
