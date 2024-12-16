import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { MovieContext } from "./context/MovieContext";
import "./App.css";

const App = () => {
  const { movies, tvShows } = useContext(MovieContext);

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="title-logo">Boolflix</h1>
        <SearchBar />
      </header>
      <div className="results mt-4">
        <div className="row">
          <h2 className="col-12 text-center second-title m-5">Films</h2>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <Card item={movie} type="movie" />
              </div>
            ))
          ) : (
            <p className="col-12">Nessun film trovato</p>
          )}
        </div>
        <div className="row">
          <h2 className="col-12 text-center second-title m-5">Serie TV</h2>
          {tvShows.length > 0 ? (
            tvShows.map((tv) => (
              <div
                key={tv.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <Card item={tv} type="tv" />
              </div>
            ))
          ) : (
            <p className="col-12 text-center">Nessuna serie TV trovata</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
