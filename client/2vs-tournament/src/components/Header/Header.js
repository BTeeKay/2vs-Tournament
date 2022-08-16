import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
        <div >
            <Link to="/">
                <img className="header" 
                src="/images/header.jpeg" 
                alt="header" 
                />
            </Link>
        </div>
        </>
    )
}

export default Header;