// React

import { useContext } from 'react';

// Context

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

// Components

import ListFilms from '../../components/ListFilms';
import HeroSection from "../../components/HeroSection";


const MoviesNowShowing = () => {
    const { categoryInformation } = useContext(CategoryInformationContext);

    const titleMoviesNowShowing = categoryInformation[1].title;
    const listMoviesNowShowing = categoryInformation[1].fetchMovieList();


    return (
        <>
            <HeroSection />
            <ListFilms
                title={titleMoviesNowShowing}
                listFilms={listMoviesNowShowing}
            />
        </>

    )
}

export default MoviesNowShowing;