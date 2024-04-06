import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="main-container">
            <div className="main-header">
            <h1 className='HeaderLogoText' title=' Codecraft' >B.M.</h1>
                <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </button>
            </div>

            {menuOpen && (
                <div className="menu-overlay">
                <div className="menu">
                    <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    </ul>
                </div>
            </div>
            )}
        </div>
        );
    }

export default Header;
