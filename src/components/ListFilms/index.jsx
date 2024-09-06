import { useEffect, useState } from 'react';

import '../../styles/layout/listFilms.scss';

import Image from '../../assets/images/image-4.png';

import { FaStar } from "react-icons/fa6";
import useFetchData from '../../hooks/useFetchData';



const ListFilms = () => {

    const { favoriteMoviesList } = useFetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=071bb306893009d6309f4184450837f3&language=pt-BR');

    return (
        <section className='listFilmsContainer container'>

            <h2 className='listFilmsTitle'>Filmes em Cartaz</h2>

            <div className='listFilmsGrid fadeInUp'>
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
                                
                                <span className='averageTitle'>
                                    <FaStar />
                                    {favoriteMovie.vote_average.toFixed(1)}
                                </span>
                            </div>
                            <div className='filmContainerMoreInformation'>
                                <span className='mainTitle'>
                                    {favoriteMovie.title}
                                </span>
                                <p className='moreInformationDescription'>
                                    {
                                        favoriteMovie.overview !== '' ? favoriteMovie.overview : 'Sem Sinopse'
                                    }
                                </p>
                                <button className='btnSeeMore'>Ver Mais</button>
                            </div>
                            <div className='filmContainerBackdrop'></div>
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default ListFilms;