import React, { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, tvShows, setTVShows }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
