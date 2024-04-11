import React , { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <motion.div className="main-header">
            <motion.h1 initial={{y: -100}} animate={{y:0}} transition={{type: "tween", stiffness: 500}}
                className='HeaderLogoText' title=' Codecraft' >B.M. 
            </motion.h1>
            <motion.button initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.8}} className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.4}} className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
            </motion.button>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5, ease: [0.74, 0, 0.19, 1.02] }}
                >
                    <div className="menu-items">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </div>
                </motion.div>
            )}
        </motion.div>  
        );
    }

export default Header;
