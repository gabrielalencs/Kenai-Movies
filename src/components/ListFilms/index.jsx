import '../../styles/layout/listFilms.scss';

import Image from '../../assets/images/image-4.png';

import { FaStar } from "react-icons/fa6";


const ListFilms = () => {
    return (
        <section className='listFilmsContainer container'>
            <div className='filmContainer'>
                <div className='filmContainerImage'>
                    <img src='https://image.tmdb.org/t/p/w500/qzyUeoCg6fh8nSQD1LFiUiiOs8P.jpg' />
                </div>

                <div className='filmContainerMainTitle'>
                    <span className='mainTitle'>
                        Por água abaixo
                    </span>
                    <div className='containerStars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div className='filmContainerMoreInformation'>
                    <span className='mainTitle'>
                        Por água abaixo
                    </span>
                    <div className='containerStars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className='moreInformationDescription'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis assumenda facilis molestias nostrum dicta hic cum fugiat tenetur veniam itaque modi non, voluptas officiis est mollitia reiciendis. Quisquam, tempore.
                    </p>
                    <button className='btnSeeMore'>Ver Mais</button>
                </div>

                <div className='filmContainerBackdrop'></div>
            </div>
        </section>
    )
}

export default ListFilms;