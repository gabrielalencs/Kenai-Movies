// Styles

import '../../styles/layout/movieInformation.scss';

// React Router

import { useLocation } from 'react-router-dom';


const MovieInformation = () => {

    // const location = useLocation();
    // const movieInformation = location.state.infoMovie;

    // console.log(movieInformation);


    return (
        <section className='movieInformationContainer'>
            <div className='movieInformationHeader'>
                <div className="container">
                    <div className='movieInformationImage'>
                        <img src="https://image.tmdb.org/t/p/w400/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg" alt="poster do filme" />
                    </div>

                    <div className='movieInformationMainInfos'>
                        <div className='movieTitle'>
                            <h3>Deadpool & Wolverine</h3>
                            {/* <span>coraçãozinho</span> */}
                        </div>

                        <div className='movieOtherInformation'>
                            <p>Data de Lançamento: <span>24/07/2024</span></p>
                            <p>Duração: <span>2h 8m</span></p>
                            <p>Avaliação dos Usuários: <span>6.294%</span></p>
                        </div>

                        <div className='movieGenre'>
                            <p>
                                Gênero do Filme:
                                <ul>
                                    <li>Ação</li>
                                    <li>Comédia</li>
                                    <li>Ficção científica</li>
                                </ul>
                            </p>
                        </div>

                        <div className='movieSynopsis'>
                            <h4>Sinopse</h4>
                            <p>
                                Um apático Wade Wilson trabalha duro na vida civil. Seus dias como mercenário moralmente flexível, Deadpool, ficou para trás. Quando seu planeta enfrenta uma ameaça, Wade deve relutantemente vestir-se novamente com um ainda mais relutante... relutante? Mais relutante? Ele deve convencer um Wolverine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieInformation;