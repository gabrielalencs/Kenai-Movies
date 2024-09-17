import { useState, useEffect } from "react";

const useFetchData = (endpoint) => {
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMoviesList = async () => {
            setLoading(true);

            const data = await fetch(endpoint);
            const response = await data.json();

            setLoading(false);
            setMoviesList(response);
        };

        getMoviesList();
    }, [endpoint]);
    

    return { moviesList, loading };
};

export default useFetchData;