import React from 'react';
import logo from '../../assets/React_Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const navigationLinkStyling =
        'text-white transition-colors duration-200 ease-in-out hover:text-gray-200 active:text-gray-400';

    return (
        <div className="flex flex-row justify-between items-center bg-blue-600 px-3 md:px-14 py-3">
            <img src={logo} alt="React Logo" className="w-14" />
            <nav className="flex flex-row gap-3.5">
                <Link className={navigationLinkStyling} to="/">
                    Home
                </Link>
                <Link className={navigationLinkStyling} to="/gallery">
                    Gallery
                </Link>
                <Link className={navigationLinkStyling} to="/profile">
                    Profile
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
