// React

import { useEffect, useRef, useState } from "react";

// Styles

import '../../styles/layout/searchBar.scss';

// React Icons

import { IoSearchSharp } from "react-icons/io5";
import { MdImageNotSupported } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Hook

import useFetchData from '../../hooks/useFetchData';


const SearchBar = () => {

    const containerSearchBarRef = useRef(null);

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');

    let { moviesList: searchedMovie, loading } = useFetchData(`https://api.themoviedb.org/3/search/movie?query=${!searchInputValue ? 'Coringa' : searchInputValue}&api_key=071bb306893009d6309f4184450837f3&language=pt-BR`)
    let searchedMovieResults = searchedMovie.results;


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (containerSearchBarRef.current && !containerSearchBarRef.current.contains(e.target)) {
                setOpenSearchBar(false);
                document.querySelector('body').classList.remove('openSearchBar');
            }
        });
    }, [openSearchBar]);

    
    return (
        <>
            <div
                className='containerSearchBar'
                onClick={() => setOpenSearchBar(!openSearchBar)}
                ref={containerSearchBarRef}
            >
                <input
                    type="checkbox"
                    className="inputCheckbox"
                />
                <div className="mainBox">
                    <div className="iconContainer">
                        <IoSearchSharp className="searchIcon" />
                    </div>

                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search"
                        value={searchInputValue}
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                </div>

                <div className={`containerSearchBarFilms ${openSearchBar ? 'openSearchBar' : ''}`}>
                    <h3 className='mainTitle'>Filmes</h3>
                    <div className='containerFilms'>
                        {
                            loading && (<div className='containerLoadingIcon'><AiOutlineLoading3Quarters className='loadingIcon' /></div>)
                        }

                        {
                            searchedMovieResults && searchedMovieResults.map(movie => (
                                <div className='film' key={movie.id}>
                                    <div className='filmContent'>
                                        <div className='filmImage skeleton'>
                                            {
                                                movie.poster_path
                                                    ? (<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster filme" />)
                                                    : <MdImageNotSupported className='iconNoPoster' />
                                            }
                                        </div>
                                        <div className='filmTitle'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>

                                    <div className='releaseDate'>
                                        <span>
                                            {movie.release_date.slice(0, 4)}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar