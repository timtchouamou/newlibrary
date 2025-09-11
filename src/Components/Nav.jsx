import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // to import icons
import LibraryLogo from '../assets/Timsand-icon.png'

<assets />


const Nav = ({numberOfItem}) => {

    function openMenu() {
        document.body.classList += " menu--open"
    }

    function closeMenu() {
        document.body.classList.remove("menu--open")
    }



    return (
        <>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </a>

                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/books" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nal__link">
                        <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                       
                         {numberOfItem > 0 && <span className="cart__length">{numberOfItem}</span>}    
                                               
                    </li>
                   
                </ul>

                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="memu__list">
                            <a href="/" className="menu__link">Home</a>
                        </li>
                        <li className="memu__list">
                            <a href="/books" className="menu__link">Books</a>
                        </li>
                        <li className="memu__list">
                            <a href="/cart" className="menu__link">Cart</a>
                        </li>
                    </ul>
                    

                </div>
                
            </div>
        </>
    );
}
export default Nav;

// THIS const Nav = () => {}Nav() EGAL TO THIS function Nav() {}Nav()
// <div></div> EGAL href <></>