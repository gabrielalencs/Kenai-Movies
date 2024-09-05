import { useEffect, useState } from 'react';

import '../../styles/layout/listFilms.scss';

import Image from '../../assets/images/image-4.png';

import { FaStar } from "react-icons/fa6";


const ListFilms = () => {

    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);


    useEffect(() => {

        const getFavoriteMoviesList = async () => {

            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');

            const response = await data.json();

            setFavoriteMoviesList(response.results);

        };

        getFavoriteMoviesList();

    }, [])



    return (
        <section className='listFilmsContainer container'>


            {
                favoriteMoviesList.map(favoriteMovie => (
                    <div className='filmContainer' key={favoriteMovie.id}>
                        <div className='filmContainerImage'>
                            <img src={`https://image.tmdb.org/t/p/w500/${favoriteMovie.poster_path}`} />
                        </div>

                        <div className='filmContainerMainTitle'>
                            <span className='mainTitle'>
                                {favoriteMovie.title}
                            </span>
                            <div className='containerStars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>

                        <div className='filmContainerMoreInformation'>
                            <span className='mainTitle'>
                                {favoriteMovie.title}
                            </span>
                            <div className='containerStars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className='moreInformationDescription'>
                                {favoriteMovie.overview}
                            </p>
                            <button className='btnSeeMore'>Ver Mais</button>
                        </div>

                        <div className='filmContainerBackdrop'></div>
                    </div>
                ))
            }


        </section>
    )
}

export default ListFilms;