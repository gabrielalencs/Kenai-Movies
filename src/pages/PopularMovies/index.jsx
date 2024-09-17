// React

import { useContext } from 'react';

// Context

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

// Components

import ListFilms from '../../components/ListFilms';
import HeroSection from '../../components/HeroSection';


const PopularMovies = () => {
    const { categoryInformation } = useContext(CategoryInformationContext);

    const titlePopularMovies = categoryInformation[0].title;
    const listPopularMovies = categoryInformation[0].fetchMovieList();

    
    return (
        <>
            <HeroSection />
            <ListFilms
                title={titlePopularMovies}
                listFilms={listPopularMovies}
            />
        </>

    )
}

export default PopularMovies;