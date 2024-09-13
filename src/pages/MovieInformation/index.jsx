// React

import { useEffect, useLayoutEffect, useState } from 'react';

// Styles

import '../../styles/layout/movieInformation.scss';

// React Router

import { useLocation } from 'react-router-dom';


const MovieInformation = () => {

    const [isAnimationFadeInUp, setIsAnimationFadeInUp] = useState(true);

    const location = useLocation();
    const movieInformation = location.state.infoMovie;

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
                style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.664)), url(https://image.tmdb.org/t/p/w500/${movieInformation.backdrop_path})` }}
            >
                <div className="container">
                    <div className='movieInformationImage'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieInformation.poster_path}`} alt="poster do filme" />
                    </div>

                    <div className='movieInformationMainInfos'>
                        <div className='movieTitle'>
                            <h3>{movieInformation.title}</h3>

                            {/* <span>coraçãozinho</span> */}
                        </div>

                        <div className='movieOtherInformation'>
                            <p>
                                Data de Lançamento:
                                <span> {formatDate(movieInformation.release_date)}</span>
                            </p>
                            <p>
                                Duração:
                                <span> {formatMovieLength(movieInformation.runtime)}</span>
                            </p>
                            <p>
                                Avaliação dos Usuários:
                                <span> {movieInformation.vote_average}%</span>
                            </p>
                        </div>

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

                        <div className='movieSynopsis'>
                            <h4>Sinopse</h4>
                            <p>
                                {!movieInformation.overview ? 'Filme sem sinopse' : movieInformation.overview}
                            </p>
                        </div>

                        <div className='movieDirection'>
                            {
                                filmDirection.map(crewItem => (
                                    <div className='movieDirectionItem' key={crewItem.id}>
                                        <h4>{crewItem.name}</h4>
                                        <span>{crewItem.known_for_department}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={`filmCastContainer container ${isAnimationFadeInUp ? 'fadeInUp' : ''}`} >
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
            </div>

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