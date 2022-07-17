import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// Here is your movie db key: 175fe5b1
const API_URL = "http://www.omdbapi.com/?apikey=175fe5b1";

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
		</div>
	);
};

export default App;
