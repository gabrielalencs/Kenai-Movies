// React

import { createContext, useState, useEffect } from "react";


export const FavoriteListContext = createContext();

export const FavoriteListProvider = ({ children }) => {
    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites-movies')) || [];
      
        setFavoriteMoviesList(storedFavorites)
    }, []);

    
    return (
        <FavoriteListContext.Provider value={{ favoriteMoviesList, setFavoriteMoviesList }}>
            {children}
        </FavoriteListContext.Provider>
    )
};