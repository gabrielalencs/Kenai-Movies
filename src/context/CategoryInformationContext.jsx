// React

import { createContext } from "react";

// Hook

import useFetchData from "../hooks/useFetchData";


export const CategoryInformationContext = createContext();

export const CategoryInformationProvider = ({ children }) => {
    const fetchPopularMovies = () => {
        let { moviesList } = useFetchData('https://api.themoviedb.org/3/movie/popular?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
        return moviesList;
    };

    const fetchNowPlayingMovies = () => {
        let { moviesList } = useFetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
        return moviesList;
    };

    const fetchTopRatedMovies = () => {
        let { moviesList } = useFetchData('https://api.themoviedb.org/3/movie/top_rated?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
        return moviesList;
    };

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