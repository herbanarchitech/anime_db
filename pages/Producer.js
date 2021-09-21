import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import axios from "axios";

//import "./styles.css";

const Creators =()=> {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filmsFiltered, setFilmsFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
   {/*Willbe using this as a testing to see see whether fetch call shall return an error */}
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
      movies.filter((country) =>
        country.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="producers_filter">
      <h1>Producers </h1>
 
      <input
        type="text"
        placeholder="look for films here"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filmsFiltered.map((producer,id) => (
        <MovieDetails key={id} {...producer} />
      ))}
    </div>

  );
}

const MovieDetails = (props) => {
  const { producer,title} = props;

  return (
    <>
      <p>
       {producer}
      </p>
    {<p>
      Title: {title} </p>}
    </>
  );
};
export default Creators;
