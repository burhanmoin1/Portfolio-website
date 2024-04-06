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

    return (
        <div className="main-header">
            <h1 className='HeaderLogoText' onMouseEnter={revealText} onMouseLeave={stopReveal}>B.M.</h1>
        </div>
    );
}

export default Header;
