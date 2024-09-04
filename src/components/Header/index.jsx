import { useCallback, useEffect, useState } from 'react';

// Styles

import '../../styles/layout/_header.scss';

// Icons

import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";


const Header = () => {


    const [openSearchBar, setOpenSearchBar] = useState(true);
    const [menuMobileActive, setMenuMobileActive] = useState(false);

    const handleClickButtonMobile = () => setMenuMobileActive(!menuMobileActive);


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

    return (
        <header className='header container'>
            <div className='headerBrand'>
                <span>Kenai</span>
            </div>

            <div className='headerContent'>
                <nav className={`headerNav ${menuMobileActive ? 'menuMobileActive' : ''}`}>
                    <ul>
                        <li>
                            Minha lista
                            <FaRegHeart />
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
        </header>
    )
}

export default Header;