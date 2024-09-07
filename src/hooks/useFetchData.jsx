import { useState, useEffect } from "react";

const useFetchData = (endpoint) => {

    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

    useEffect(() => {
        const getFavoriteMoviesList = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/' + endpoint + '?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
            const response = await data.json();

            setFavoriteMoviesList(response.results);
        };

        getFavoriteMoviesList();
    }, [endpoint]);

    return favoriteMoviesList

};

export default useFetchData;