// React Router

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles

import './styles/base/reset.scss';

// Context

import { CategoryInformationProvider } from "./context/CategoryInformationContext";

// Components

import Header from './components/Header';

// Pages

import PopularMovies from "./pages/PopularMovies";
import BestMovies from "./pages/BestMovies";
import MoviesNowShowing from "./pages/MoviesNowShowing";


function App() {


    return (
        <>

            <BrowserRouter>
                <Header />
                <CategoryInformationProvider>
                    <Routes>
                        <Route path='/' element={<PopularMovies />} />
                        <Route path='/now-showing' element={<MoviesNowShowing />} />
                        <Route path='/top-rated' element={<BestMovies />} />
                    </Routes>
                </CategoryInformationProvider>
            </BrowserRouter>
        </>
    )
}

export default App
