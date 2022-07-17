import { useEffect } from "react";

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

	return <h1>App</h1>;
};

export default App;
