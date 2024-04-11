import React , { useState } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navContainer = {
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            type: 'tween', stiffness: 500
          }
        },
        hidden: {
          y: -800,
          opacity: 0,
          transition: {
            duration: 0.3,
            type: 'tween', stiffness: 500
          }
        }
      };

    return (
        <motion.div className="main-header">
            <motion.h1 initial={{y: -100}} animate={{y:0}} transition={{type: "tween", stiffness: 500}}
                className='HeaderLogoText' title=' Codecraft' >B.M. 
            </motion.h1>
            <motion.button initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.8}} className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.4}} className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
            </motion.button>
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                >
                    <div menuOpen={menuOpen} className="menu-items">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>  
        );
    }

export default Header;
