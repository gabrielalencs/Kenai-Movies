// React

import { useEffect, useState } from 'react';

// React Router

import { Link, useNavigate } from 'react-router-dom';

// Styles

import '../../styles/layout/listFilms.scss';

// React Icons

import { FaStar } from "react-icons/fa6";


const ListFilms = ({ title, listFilms }) => {

    const [selectedMovieInformation, setSelectedMovieInformation] = useState(null);
    const navigate = useNavigate();

    const listFilmsResponse = listFilms.results;

    const handleMovieClick = (movie) => {
        setSelectedMovieInformation(movie);
    };

    useEffect(() => {
        if (selectedMovieInformation) {
            const fetchData = async () => {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieInformation.id}?api_key=071bb306893009d6309f4184450837f3&append_to_response=credits,videos,release_dates&language=pt-BR`);
                const infoMovie = await data.json();

                navigate(`/movie/${selectedMovieInformation.id}`, { state: { infoMovie } });
            };

            fetchData();
        }
    }, [selectedMovieInformation]);


    return (
        <section className='listFilmsContainer container fadeInUp'>
            <h2 className='listFilmsTitle'>
                {title}
            </h2>

            <div className='listFilmsGrid'>
                {
                    listFilmsResponse && listFilmsResponse.map(movie => (
                        <div className='filmContainer fade' key={movie.id}>
                            <div className='filmContainerImage'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            </div>

                            <div className='filmContainerMainTitle'>
                                <span className='mainTitle'>
                                    {movie.title}
                                </span>

                                <span className='averageTitle'>
                                    <FaStar />
                                    {movie.vote_average.toFixed(1)}
                                </span>
                            </div>

                            <div className='filmContainerMoreInformation'>
                                <span className='mainTitle'>
                                    {movie.title}
                                </span>

                                <p className='moreInformationDescription'>
                                    {
                                        movie.overview !== '' ? movie.overview : 'Sem Sinopse'
                                    }
                                </p>

                                <button className='btnSeeMore' onClick={() => handleMovieClick(movie)}>Ver Mais</button>
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