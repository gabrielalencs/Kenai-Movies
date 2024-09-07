import { useContext } from 'react'

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

import ListFilms from '../../components/ListFilms';



const MoviesNowShowing = () => {

    const { categoryInformation } = useContext(CategoryInformationContext);

    const titleMoviesNowShowing = categoryInformation[1].title;
    const listMoviesNowShowing = categoryInformation[1].fetchMovieList();
    
    return (
        <ListFilms 
            title={titleMoviesNowShowing} 
            listFilms={listMoviesNowShowing} 
        />
    )
}

export default MoviesNowShowing;