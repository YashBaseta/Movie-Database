import React from "react";

const MovieCard = ({ movie }) => {
  
  
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      
      <img
        src={movie.images}
        alt={movie.movie}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />
      <h3>{movie.movie}</h3>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>IMDB URL</strong> {movie.imdb_url}</p>
    </div>
  );
};

export default MovieCard;
