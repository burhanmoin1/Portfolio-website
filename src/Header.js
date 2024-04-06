import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [revealed, setRevealed] = useState(false);
    let interval;

    const revealText = () => {
        if (!revealed) {
            const text = "Codecraft";
            const header = document.querySelector('.HeaderLogoText');

            header.innerHTML = 'B.M. ';
            let index = 0;

            interval = setInterval(() => {
                header.textContent += text[index];
                index++;

                if (index === text.length) {
                    clearInterval(interval);
                    setRevealed(true);
                }
            }, 60);
        }
    };

    const resetText = () => {
        const header = document.querySelector('.HeaderLogoText');
        header.textContent = 'B.M. ';
        setRevealed(false);
    };

    const stopReveal = () => {
        clearInterval(interval);
        resetText();
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="main-container">
      <div className="main-header">
        <h1 className='HeaderLogoText' onMouseEnter={revealText} onMouseLeave={stopReveal}>B.M.</h1>
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
