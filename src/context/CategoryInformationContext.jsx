import { createContext } from "react";

import useFetchData from "../hooks/useFetchData";

export const CategoryInformationContext = createContext();


export const CategoryInformationProvider = ({ children }) => {

    const fetchPopularMovies = () => {
        return useFetchData('https://api.themoviedb.org/3/movie/popular?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
    }

    const fetchNowPlayingMovies = () => {
        return useFetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
    }

    const fetchTopRatedMovies = () => {
        return useFetchData('https://api.themoviedb.org/3/movie/top_rated?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');
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