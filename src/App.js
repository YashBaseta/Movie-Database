import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        console.log("API Response:", response.data);
        setMovies(response.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Unable to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Database</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
