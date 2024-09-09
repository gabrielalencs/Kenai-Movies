// React

import { useContext } from 'react'

// Context

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

// Component

import ListFilms from '../../components/ListFilms';


const BestMovies = () => {

    const { categoryInformation } = useContext(CategoryInformationContext);

    const titleBestMovies = categoryInformation[2].title;
    const listBestMovies = categoryInformation[2].fetchMovieList();

    
    return (
        <ListFilms
            title={titleBestMovies} 
            listFilms={listBestMovies}  
        />
    )
}

export default BestMovies;