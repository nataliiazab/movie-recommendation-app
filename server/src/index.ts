import express from "express";
import { getMovies } from "./api/movies"; // Import the movie routes

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Movie Recommendation API");
});

// Use the movie route
app.get("/movies", getMovies); // Add the movie route to your server

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

