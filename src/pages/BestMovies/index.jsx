// React

import { useContext } from 'react'

// Context

import { CategoryInformationContext } from '../../context/CategoryInformationContext';

// Components

import ListFilms from '../../components/ListFilms';
import HeroSection from "../../components/HeroSection";


const BestMovies = () => {
    const { categoryInformation } = useContext(CategoryInformationContext);

    const titleBestMovies = categoryInformation[2].title;
    const listBestMovies = categoryInformation[2].fetchMovieList();
    

    return (
        <>
            <HeroSection />
            <ListFilms
                title={titleBestMovies}
                listFilms={listBestMovies}
            />
        </>
    )
}

export default BestMovies;