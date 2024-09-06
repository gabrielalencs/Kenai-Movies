// React Router

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles

import './styles/base/reset.scss';

// Components

import Header from './components/Header';
import ListFilms from './components/ListFilms';

// Pages

import PopularMovies from "./pages/PopularMovies";
import BestMovies from "./pages/BestMovies";
import MoviesNowShowing from "./pages/MoviesNowShowing";


function App() {




    return (
        <>

            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<MoviesNowShowing />} />
                    <Route path='/popular-movies' element={<PopularMovies />} />
                    <Route path='/best-movies' element={<BestMovies />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
