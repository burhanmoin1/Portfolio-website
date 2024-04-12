import React , { useState } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navContainer = {
        visible: {
          y: 0,
          transition: {
            duration: 0.25,
            type: 'tween'
          }
        },
        hidden: {
          y: -1200,
          transition: {
            duration: 0.2,
            type: 'tween'
          }
        }
      };

    return (
        <motion.div className="main-header">
            <motion.h1 initial={{y: -100}} animate={{y:0}} transition={{type: "tween", stiffness: 500, delay: 0.2}}
                className='HeaderLogoText' title=' Codecraft' >B.M. 
            </motion.h1>
            <motion.button initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.8}} className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <motion.div className="menu-icon">
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
                    <div className="menu-items">
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}}>Home</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}}>Portfolio</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.26}}>About</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}}>Blogs</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.38}}>Contact</motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>  
        );
    }

export default Header;
