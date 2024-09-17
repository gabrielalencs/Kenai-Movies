// React

import { useCallback, useEffect, useState, useRef } from 'react';

// Styles

import '../../styles/layout/header.scss';

// React Router

import { Link } from 'react-router-dom';

// Components

import SearchBar from '../SearchBar';


const Header = () => {
    const menuDropdownRef = useRef(null);
    const [menuDropdownActive, setMenuDropdownActive] = useState(false);

    const handleClickLinkMenuDropdown = () => {
        setMenuDropdownActive(!menuDropdownActive);

        document.querySelector('body').classList.toggle('menuDropdownActive');
    };

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (menuDropdownRef.current && !menuDropdownRef.current.contains(e.target)) {
                setMenuDropdownActive(false);
                document.querySelector('body').classList.remove('menuDropdownActive');
            }
        });
    }, []);


    return (
        <header className='header'>
            <div className="container">
                <div className='headerBrand'>
                    <Link to='/'>
                        <span>Kenai</span>
                    </Link>
                </div>

                <div className='headerContent'>
                    <nav className='headerNav'>
                        <ul className='headerList'>
                            <li className='listItem' ref={menuDropdownRef} onClick={handleClickLinkMenuDropdown}>
                                Filmes

                                <ul className={`headerMenuDropdown ${menuDropdownActive ? 'menuDropdownActive' : ''}`}>
                                    <Link to='/' className='dropdownItem'>Populares</Link>
                                    <Link to='/now-showing' className='dropdownItem'>Em cartaz</Link>
                                    <Link to='/top-rated' className='dropdownItem'>Mais bem avaliados</Link>
                                </ul>
                            </li>
                            <li className='listItem'>
                                <Link to='/favorites-list'>Minha lista</Link>
                            </li>
                        </ul>
                    </nav>

                    <SearchBar />
                </div>
            </div>
        </header>
    )
}

export default Header;