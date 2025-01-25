import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
    const profileName = useParams().profileName;

    return (
        <div className="h-full px-20 flex flex-col mt-40">
            <h1 className="text-center text-5xl">
                Profile Name: {profileName || 'Giorgi Chanturia'}
            </h1>
            <p className="text-center mt-4">
                This project is made by me for React Quiz in BTU University.
                Source code is available <a>here.</a> Thank you very much for
                checking out my project. Don't forget to visit other projects{' '}
                <a href="https://github.com/">over here!</a>
            </p>
        </div>
    );
}

export default ProfilePage;
