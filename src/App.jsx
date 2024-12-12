import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  return (
    <div className="container">
      <h1>Boolflix</h1>
      <SearchBar onMovies={setMovies} onTVShows={setTVShows} />
      <div className="results mt-4">
        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Film</h2>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.id} className="result-item">
                  <h3>{movie.title}</h3>
                  <h4>{movie.originalTitle}</h4>
                  <p>Lingua: {movie.language}</p>
                  <p>Voto: {movie.vote}</p>
                </div>
              ))
            ) : (
              <p>Nessun film trovato</p>
            )}
          </div>
          <div className="col-6">
            <h2 className="text-center">Serie TV</h2>
            {tvShows.length > 0 ? (
              tvShows.map((tv) => (
                <div key={tv.id} className="result-item">
                  <h3>{tv.title}</h3>
                  <h4>{tv.originalTitle}</h4>
                  <p>Lingua: {tv.language}</p>
                  <p>Voto: {tv.vote}</p>
                </div>
              ))
            ) : (
              <p>Nessuna serie TV trovata</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
