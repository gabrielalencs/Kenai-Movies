// React

import { useEffect, useState, useContext } from 'react';

// Styles

import '../../styles/layout/movieInformation.scss';

// React Router

import { useLocation } from 'react-router-dom';

// Context

import { FavoriteListContext } from '../../context/FavoriteListContext';


const MovieInformation = () => {
    const { state } = useLocation();
    const movieInformation = state.infoMovie;

    const { favoriteMoviesList, setFavoriteMoviesList } = useContext(FavoriteListContext);
    const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);
    const [isAnimationFadeInUp, setIsAnimationFadeInUp] = useState(true);

    const filmDirection = movieInformation.credits.crew.slice(0, 6);
    const filmCast = movieInformation.credits.cast;
    const filmCastWithPoster = filmCast?.filter(cast => cast.profile_path && cast.profile_path.trim() !== '');
    const keyToMovieTrailer = movieInformation.videos.results[0];


    const formatDate = (unformattedDate) => {
        const partsDate = unformattedDate.split('-');
        return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`
    };

    const formatMovieLength = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const minutesRemaining = minutes % 60;
        return `${hours}h ${minutesRemaining}m`;
    };

    const handleFavoriteButton = (movie) => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites-movies')) || [];
        const isCurrentFavoriteMovie = storedFavorites.some(item => item.id === movie.id);

        toggleFavoriteFilm(movie, isCurrentFavoriteMovie);
    };

    const toggleFavoriteFilm = (movie, isCurrentFavoriteMovie) => {
        let updatedFavorites;

        if (isCurrentFavoriteMovie) {
            updatedFavorites = favoriteMoviesList.filter(fav => fav.id !== movie.id);
        } else {
            updatedFavorites = [...favoriteMoviesList, movie];
        }

        setFavoriteMoviesList(updatedFavorites);
        localStorage.setItem('favorites-movies', JSON.stringify(updatedFavorites));

        setIsFavoriteMovie(!isCurrentFavoriteMovie);
    };


    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites-movies')) || [];

        const isCurrentFavoriteMovie = storedFavorites?.some(item => item.id === movieInformation.id);

        if (isCurrentFavoriteMovie) {
            setIsFavoriteMovie(true);
        } else {
            setIsFavoriteMovie(false);
        }

    }, [movieInformation.id]);

    useEffect(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationFadeInUp(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [movieInformation]);


    useEffect(() => {
        setIsAnimationFadeInUp(true);
    }, [movieInformation]);


    return (
        <section className='movieInformationContainer'>
            <div
                className={`movieInformationHeader ${isAnimationFadeInUp ? 'fadeInUp' : ''}`}
                style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.664)), url(https://image.tmdb.org/t/p/w500${movieInformation.backdrop_path})` }}
            >
                <div className="container">
                    <div className='movieInformationImage'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieInformation.poster_path}`} alt="poster do filme" />
                    </div>

                    <div className='movieInformationMainInfos'>
                        <div className='movieTitle'>
                            <h3>{movieInformation.title}</h3>
                            <label className="heartContainer">
                                <input
                                    type="checkbox"
                                    checked={isFavoriteMovie}
                                    onChange={() => handleFavoriteButton(movieInformation)}
                                />
                                <div className="checkmark">
                                    <svg viewBox="0 0 256 256">
                                        <path
                                            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                            strokeWidth="20px"
                                            stroke="#fff"
                                            fill="none"></path>
                                    </svg>
                                </div>
                            </label>
                        </div>

                        <div className='movieOtherInformation'>
                            {
                                movieInformation.release_date.length > 0 && (
                                    <p>
                                        Data de Lançamento:
                                        <span> {formatDate(movieInformation.release_date)}</span>
                                    </p>
                                )
                            }
                            <p>
                                Duração:
                                <span> {formatMovieLength(movieInformation.runtime)}</span>
                            </p>
                            <p>
                                Avaliação dos Usuários:
                                <span> {movieInformation.vote_average}%</span>
                            </p>
                        </div>

                        {
                            movieInformation.genres.length > 0 && (
                                <div className='movieGenre'>
                                    <p>Gênero do Filme: </p>
                                    <ul>
                                        {
                                            movieInformation.genres.map(genre => (
                                                <li key={genre.id}>{genre.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                        <div className='movieSynopsis'>
                            <h4>Sinopse</h4>
                            <p>
                                {!movieInformation.overview ? 'Filme sem sinopse' : movieInformation.overview}
                            </p>
                        </div>

                        <div className='movieDirection'>
                            {
                                filmDirection.map(crewItem => (
                                    <div className='movieDirectionItem' key={crewItem.id + Math.random() * 10}>
                                        <h4>{crewItem.name}</h4>
                                        <span>{crewItem.known_for_department}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {
                filmCastWithPoster.length > 0 &&
                (<div className={`filmCastContainer container ${isAnimationFadeInUp ? 'fadeInUp' : ''}`} >
                    <h3 className='castTitle'>Elenco Original</h3>

                    <div className='castContainer'>
                        {
                            filmCastWithPoster.map(cast => (
                                <div className='cast' key={cast.id}>
                                    <div className='castImage'>
                                        <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt="imagem do ator" />
                                    </div>

                                    <div className='castContent'>
                                        <h3>{cast.name}</h3>
                                        <span>{cast.character}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>)
            }

            {
                keyToMovieTrailer &&
                (<div className={`trailerMovieContainer container ${isAnimationFadeInUp ? 'fadeInUp' : ''}`}>
                    <h3 className='trailerTitle'>Trailer</h3>

                    <div className='trailerContainer'>
                        <iframe src={`https://www.youtube.com/embed/${keyToMovieTrailer.key}?controls=0?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>)
            }
        </section>
    )
}

export default MovieInformation;