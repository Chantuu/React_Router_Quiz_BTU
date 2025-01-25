import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-600 px-3 md:px-14 py-3.5 md:py-7 h-1/10">
            <p className="text-white text-center text-xs md:text-sm">
                This project is made by Giorgi Chanturia.{' '}
                <a
                    href="https://github.com/Chantuu/React_Router_Quiz_BTU"
                    className="underline transition-colors delay-100 ease-out hover:text-gray-300"
                >
                    Source Code is available here.
                </a>
            </p>
        </footer>
    );
}

export default Footer;
