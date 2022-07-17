import { useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

// Here is your movie db key: 175fe5b1
const API_URL = "https://www.omdbapi.com/?apikey=175fe5b1";

const movie1 = {
	Title: "Batman Begins",
	Year: "2005",
	imdbID: "tt0372784",
	Type: "movie",
	Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
	};

	useEffect(() => {
		searchMovies("Batman");
	}, []);

	return (
		<div className="app">
			<h1>MovieLand</h1>;
			<div className="search">
				<input placeholder="Search for movies" value="Superman" type="text" onChange={() => {}} />
				<img src={SearchIcon} alt="search icon" onClick={() => {}} />
			</div>
			<div className="container">
				<MovieCard movie1={movie1} />
			</div>
		</div>
	);
};

export default App;
