// React Router

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles

import './styles/base/reset.scss';

// Components

import Header from './components/Header';

// Pages

import PopularMovies from "./pages/PopularMovies";
import BestMovies from "./pages/BestMovies";
import MoviesNowShowing from "./pages/MoviesNowShowing";
import MovieInformation from "./pages/MovieInformation";
import FavoritesList from "./pages/FavoritesList";


function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<PopularMovies />} />
                    <Route path='/now-showing' element={<MoviesNowShowing />} />
                    <Route path='/top-rated' element={<BestMovies />} />
                    <Route path='/movie/:id' element={<MovieInformation />} />
                    <Route path='/favorites-list' element={<FavoritesList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
