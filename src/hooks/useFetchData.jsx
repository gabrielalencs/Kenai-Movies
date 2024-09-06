import { useState, useEffect } from "react";

const useFetchData = (apiUrl) => {

    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

    useEffect(() => {
        const getFavoriteMoviesList = async () => {
            const data = await fetch(apiUrl);
            const response = await data.json();

            setFavoriteMoviesList(response.results);
        };

        getFavoriteMoviesList();
    }, [apiUrl]);

    return favoriteMoviesList

};

export default useFetchData;