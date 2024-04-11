import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.div className="main-container" >
            <div className="main-header">
            <h1 className='HeaderLogoText' title=' Codecraft' >B.M.</h1>
                <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <motion.div className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
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
        </motion.div>
        );
    }

export default Header;
