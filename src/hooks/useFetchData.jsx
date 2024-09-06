import { useState, useEffect } from "react";

const useFetchData = (apiUrl) => {

    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
    const [loadingMovies, setLoadingMovies] = useState(false);

    useEffect(() => {

        setLoadingMovies(true);

        const getFavoriteMoviesList = async () => {
            const data = await fetch(apiUrl);
            const response = await data.json();

            setFavoriteMoviesList(response.results);
        };

        getFavoriteMoviesList();

    }, [apiUrl]);

    return { favoriteMoviesList, loadingMovies };

};

export default useFetchData;