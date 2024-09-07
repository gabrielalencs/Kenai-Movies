import { createContext } from "react";

import useFetchData from "../hooks/useFetchData";

export const CategoryInformationContext = createContext();


export const CategoryInformationProvider = ({ children }) => {


    const fetchPopularMovies = () => {
        return useFetchData('popular');
    }

    const fetchNowPlayingMovies = () => {
        return useFetchData('now_playing');
    }

    const fetchTopRatedMovies = () => {
        return useFetchData('top_rated');
    }

    const categoryInformation = [
        {
            title: 'Filmes mais Populares',
            fetchMovieList: fetchPopularMovies,
        },
        {
            title: 'Filmes em Cartaz',
            fetchMovieList: fetchNowPlayingMovies,
        },
        {
            title: 'Melhores Filmes',
            fetchMovieList: fetchTopRatedMovies,
        }
    ];

    return (
        <CategoryInformationContext.Provider value={{ categoryInformation }}>
            {children}
        </CategoryInformationContext.Provider>
    )
};