// Styles

import '../../styles/layout/heroSection.scss';


const HeroSection = () => {
    return (
        <main className='heroContainer'>
            <div className="container">
                <h1 className='heroTitle'>
                    Descubra um <span>Mundo de Filmes</span> Incríveis.
                </h1>
                <h2 className='heroDescription'>
                    Bem-vindo ao Kenai. O seu portal para descobrir e explorar filmes. Sua jornada pelo mundo do cinema começa agora.
                </h2>
            </div>
        </main>
    )
}

export default HeroSection;