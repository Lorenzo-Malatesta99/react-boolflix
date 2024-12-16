import { useState, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setMovies, setTVShows } = useContext(MovieContext);

  const handleSearch = () => {
    const apiKey = "3d725ad3aab2666bf9d36ed549009736";
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&language=it-IT`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&language=it-IT`;

    axios
      .get(movieUrl)
      .then((movieResponse) => {
        const movies = movieResponse.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          language: movie.original_language,
          vote: movie.vote_average,
          posterPath: movie.poster_path,
        }));
        setMovies(movies);
      })
      .catch((error) => {
        console.error("Errore durante la ricerca dei film:", error);
      });

    axios
      .get(tvUrl)
      .then((tvResponse) => {
        const tvShows = tvResponse.data.results.map((tv) => ({
          id: tv.id,
          title: tv.name,
          originalTitle: tv.original_name,
          language: tv.original_language,
          vote: tv.vote_average,
          posterPath: tv.poster_path,
        }));
        setTVShows(tvShows);
      })
      .catch((error) => {
        console.error("Errore durante la ricerca delle serie TV:", error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Cerca..."
        className="form-control mx-3"
      />
      <button onClick={handleSearch} className="btn btn-danger">
        Cerca
      </button>
    </div>
  );
};

export default SearchBar;
