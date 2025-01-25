import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
    const profileName = useParams().profileName;
    const linkStyle =
        'text-blue-500 underline transition-colors delay-100 ease-out hover:text-blue-800';

    return (
        <div className="h-full px-20 flex flex-col mt-40">
            <h1 className="text-center text-5xl">
                Profile Name: {profileName || 'Giorgi Chanturia'}
            </h1>
            <p className="text-center mt-4">
                This project is made by me for React Quiz in BTU University.
                Source code is available{' '}
                <a
                    href="https://github.com/Chantuu/React_Router_Quiz_BTU"
                    className={linkStyle}
                >
                    here.
                </a>{' '}
                Thank you very much for checking out my project. Don't forget to
                visit other projects{' '}
                <a href="https://github.com/Chantuu" className={linkStyle}>
                    over here!
                </a>
            </p>
        </div>
    );
}

export default ProfilePage;
