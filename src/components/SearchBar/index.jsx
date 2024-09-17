// React

import { useEffect, useRef, useState } from "react";

// Styles

import '../../styles/layout/searchBar.scss';

// React Router

import { useNavigate } from "react-router-dom";

// React Icons

import { IoSearchSharp } from "react-icons/io5";
import { MdImageNotSupported } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Hook

import useFetchData from '../../hooks/useFetchData';


const SearchBar = () => {

    const navigate = useNavigate();

    const containerSearchBarRef = useRef(null);
    const searchInputRef = useRef(null);
    const containerListFilms = useRef(null);

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedMovieInformation, setSelectedMovieInformation] = useState(null);

    let { moviesList: searchedMovie, loading } = useFetchData(`https://api.themoviedb.org/3/search/movie?query=${!searchInputValue ? 'Vingadores' : searchInputValue}&api_key=071bb306893009d6309f4184450837f3&language=pt-BR`);
    let searchedMovieResults = searchedMovie.results;
    let moviesWithPoster = searchedMovieResults?.filter(movie => movie.poster_path && movie.poster_path.trim() !== '');


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


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (containerSearchBarRef.current && !containerSearchBarRef.current.contains(e.target)) {
                setOpenSearchBar(false);
                document.querySelector('body').classList.remove('openSearchBar');
                setSearchInputValue('');
            }
        });
    }, [openSearchBar]);


    const handleMovieClick = (movie) => {
        setSelectedMovieInformation(movie);
        setSearchInputValue(movie.title);
        
        searchInputRef.current.focus()
    };



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
                        type="search"
                        className="searchInput"
                        placeholder="Search"
                        ref={searchInputRef}
                        value={searchInputValue}
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                </div>

                <div className={`containerSearchBarFilms ${openSearchBar ? 'openSearchBar' : ''}`}>
                    <h3 className='mainTitle'>Filmes</h3>
                    <div className='containerFilms' ref={containerListFilms}>
                        {
                            loading && (<div className='containerLoadingIcon'><AiOutlineLoading3Quarters className='loadingIcon' /></div>)
                        }

                        {
                            moviesWithPoster && moviesWithPoster.length > 0 ? (
                                moviesWithPoster.map(movie => (
                                    <div
                                        className='film'
                                        onClick={() => handleMovieClick(movie)}
                                        key={movie.id}>
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
                                                {movie.release_date?.slice(0, 4)}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (<p className="movieNotFound">Filme Não Encontrado</p>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar