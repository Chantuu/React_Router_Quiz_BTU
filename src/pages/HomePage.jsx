import React from 'react';
import HeroImage from '../assets/HeroImage.png';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const navigateToGalleryPage = () => navigate('/gallery');

    return (
        <div className="h-full flex flex-col items-center justify-center gap-5 pb-16">
            <img
                src={HeroImage}
                alt="iPhone 12 Ad Photo"
                className="w-full md:w-[670px] h-auto"
            />
            <button
                onClick={navigateToGalleryPage}
                className="bg-blue-400 rounded-md text-white px-3 py-1.5 cursor-pointer transition-colors delay-75 ease-in hover:bg-blue-600"
            >
                Go to Gallery
            </button>
        </div>
    );
}

export default HomePage;
