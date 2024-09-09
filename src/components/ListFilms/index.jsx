import '../../styles/layout/listFilms.scss';

import { FaStar } from "react-icons/fa6";


const ListFilms = ({ title, listFilms }) => {

    const listFilmsResponse = listFilms.results;  
    
    return (
        <section className='listFilmsContainer container fadeInUp'>
            <h2 className='listFilmsTitle'>
                {title}
            </h2>

            <div className='listFilmsGrid '>
                {
                    listFilmsResponse && listFilmsResponse.map(favoriteMovie => (
                        <div className='filmContainer fade' key={favoriteMovie.id}>
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