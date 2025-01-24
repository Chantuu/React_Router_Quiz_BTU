import React from 'react';
import HeroImage from '../assets/HeroImage.png';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const navigateToGalleryPage = () => navigate('/gallery');

    return (
        <div>
            <img src={HeroImage} alt="iPhone 12 Ad Photo" />
            <button onClick={navigateToGalleryPage}>Go to Gallery</button>
        </div>
    );
}

export default HomePage;
