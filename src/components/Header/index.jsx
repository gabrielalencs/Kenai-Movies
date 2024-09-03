import { useState } from 'react';

// Styles

import '../../styles/layout/_header.scss';

// Icons

import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart  } from "react-icons/fa6";


const Header = () => {

    const [openSearchBar, setOpenSearchBar] = useState(true);

    
    


    return (
        <header className='header container'>
            <div className='headerBrand'>
                <span>Kenai</span>
            </div>

            <div className='headerContent'>
                <div>
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
                </div>

                <nav className='headerNav'>
                    <ul>
                        <li>
                            Minha lista
                            <FaRegHeart />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;