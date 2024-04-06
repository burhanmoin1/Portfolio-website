import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <h1 className='HeaderLogoText' title='B.M. Codecraft' >B.M.</h1>
            <div className='header-items'>
                <p className='item'>Home</p>
                <p className='item'>Portfolio</p>
                <p className='item'>Blogs</p>
                <p className='item'>Contact</p>
            </div>
        </div>
    )
}

export default Header;