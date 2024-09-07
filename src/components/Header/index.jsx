import { useCallback, useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';

import '../../styles/layout/header.scss';

import { IoSearchSharp } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";


const Header = () => {

    const menuDropdownRef = useRef(null);

    const [openSearchBar, setOpenSearchBar] = useState(true);
    const [menuMobileActive, setMenuMobileActive] = useState(false);
    const [menuDropdownActive, setMenuDropdownActive] = useState(false);


    const handleClickButtonMobile = () => setMenuMobileActive(!menuMobileActive);

    const handleClickLinkMenuDropdown = () => {
        setMenuDropdownActive(!menuDropdownActive);

        document.querySelector('body').classList.toggle('menuDropdownActive');
    };

    const handleResize = useCallback(() => {
        const buttonMenuMobile = document.querySelector('.headerButtonMobile input');

        if (window.innerWidth > 992) {
            setMenuMobileActive(false);
            buttonMenuMobile.checked = false;
        }
    }, []);


    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (menuDropdownRef.current && !menuDropdownRef.current.contains(e.target)) {
                setMenuDropdownActive(false);
                document.querySelector('body').classList.remove('menuDropdownActive');
            }
        });
    }, [menuMobileActive]);


    return (
        <header className='header'>
            <div className="container">
                <div className='headerBrand'>
                    <Link to='/'>
                        <span>Kenai</span>
                    </Link>
                </div>

                <div className='headerContent'>
                    <nav className={`headerNav ${menuMobileActive ? 'menuMobileActive' : ''}`}>
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
                                Minha lista
                            </li>
                        </ul>

                        <div className="containerSearchBar">
                            <input
                                type="checkbox"
                                className="inputCheckbox"
                                checked={openSearchBar}
                                onChange={() => setOpenSearchBar(!openSearchBar)}
                            />

                            <div className="mainBox">
                                <div className="iconContainer">
                                    <IoSearchSharp className="searchIcon" />
                                </div>
                                <input
                                    type="text"
                                    className="searchInput"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </nav>

                    <div className='headerButtonMobile'>
                        <label className="container">
                            <input
                                type="checkbox"
                                onChange={handleClickButtonMobile}
                            />

                            <div className="checkmark">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;