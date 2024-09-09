// React

import { useContext } from 'react';

// Context

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

// Component

import ListFilms from '../../components/ListFilms';


const PopularMovies = () => {

    const { categoryInformation } = useContext(CategoryInformationContext);

    const titlePopularMovies = categoryInformation[0].title;
    const listPopularMovies = categoryInformation[0].fetchMovieList();

    
    return (
        <ListFilms
            title={titlePopularMovies} 
            listFilms={listPopularMovies} 
        />
    )
}

export default PopularMovies;