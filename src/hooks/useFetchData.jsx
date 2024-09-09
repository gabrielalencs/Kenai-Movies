import { useState, useEffect } from "react";

const useFetchData = (endpoint) => {

    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

    useEffect(() => {
        const getFavoriteMoviesList = async () => {
            const data = await fetch(endpoint);
            const response = await data.json();

            setFavoriteMoviesList(response);
        };

        getFavoriteMoviesList();
    }, [endpoint]);

    return favoriteMoviesList

};

export default useFetchData;