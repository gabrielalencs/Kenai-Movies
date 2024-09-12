// Styles

import '../../styles/layout/movieInformation.scss';

// React Router

import { useLocation } from 'react-router-dom';


const MovieInformation = () => {

    const location = useLocation();
    const movieInformation = location.state.infoMovie;



    const formatDate = (unformattedDate) => {
        const partsDate = unformattedDate.split('-');

        return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`
    };


    const formatMovieLength = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const minutesRemaining = minutes % 60;
        return `${hours}h ${minutesRemaining}m`;
    };


    return (
        <section className='movieInformationContainer'>
            <div
                className='movieInformationHeader fadeInUp'
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
                            <p>
                                Gênero do Filme:
                                <ul>
                                    {
                                        movieInformation.genres.map(genre => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))
                                    }
                                </ul>
                            </p>
                        </div>

                        <div className='movieSynopsis'>
                            <h4>Sinopse</h4>
                            <p>
                                {movieInformation.overview}
                            </p>
                        </div>

                        <div className='movieDirection'>
                            <div className='movieDirectionItem'>
                                <h4>Kelsey Mann</h4>
                                <span>Directing</span>
                            </div>

                            <div className='movieDirectionItem'>
                                <h4>Kelsey Mann</h4>
                                <span>Directing</span>
                            </div>
                            
                            <div className='movieDirectionItem'>
                                <h4>Kelsey Mann</h4>
                                <span>Directing</span>
                            </div>

                            <div className='movieDirectionItem'>
                                <h4>Kelsey Mann</h4>
                                <span>Directing</span>
                            </div>

                            <div className='movieDirectionItem'>
                                <h4>Kelsey Mann</h4>
                                <span>Directing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieInformation;