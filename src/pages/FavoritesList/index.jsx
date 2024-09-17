// React

import { useContext } from 'react';

// Styles

import '../../styles/layout/favoriteList.scss';

// React Router

import { useNavigate } from 'react-router-dom';

// Context

import { FavoriteListContext } from '../../context/FavoriteListContext';


const FavoritesList = () => {
    const { favoriteMoviesList } = useContext(FavoriteListContext);
    const navigate = useNavigate();
    
    const openMovieInformation = async (favoriteMovie) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${favoriteMovie.id}?api_key=071bb306893009d6309f4184450837f3&append_to_response=credits,videos,release_dates&language=pt-BR`);
        const infoMovie = await data.json();

        navigate(`/movie/${favoriteMovie.id}`, { state: { infoMovie } });
    };

    
    return (
        <section className='favoriteListContainer container fadeInUp'>
            <h2 className='favoriteListTitle'>Filmes Favoritos</h2>

            <div className={`${favoriteMoviesList.length > 0 ? 'favoriteListGrid' : ''}`}>

                {
                    favoriteMoviesList.length > 0 ? (favoriteMoviesList.map(favoriteMovie => (
                        <div key={favoriteMovie.id} className="favoriteMovie">
                            <div className='favoriteMovieImage'>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${favoriteMovie.poster_path}`} 
                                    alt="poster do filme" 
                                    onClick={() => openMovieInformation(favoriteMovie)}
                                />
                            </div>

                            <div className='favoriteMovieTitles'>
                                <span className='mainTitle'>{favoriteMovie.title}</span>
                                <span className='releaseDate'>{favoriteMovie.release_date.slice(0, 4)}</span>
                            </div>
                        </div>
                    ))) : (<p className='favoriteMovieEmptyMessage'>Ops... não há nada por aqui.</p>)
                }
            </div>
        </section>
    )
}

export default FavoritesList;