import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import axios from "axios";

//import "./styles.css";

const Movie =()=> {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filmsFiltered, setFilmsFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilmsFiltered(
      movies.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="App">
      <h1>Ghibli Studio Movies </h1>
 
      <input
        type="text"
        placeholder="look for films here"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filmsFiltered.map((title) => (
        <MovieDetails key={title} {...title} />
      ))}
    </div>
  );
}

const MovieDetails = (props) => {
  const { title } = props;

  return (
    <>
      <p>
       {title}
      </p>
    {/*  <p>
      Director:  {director} </p> */}
    </>
  );
};
export default Movie

