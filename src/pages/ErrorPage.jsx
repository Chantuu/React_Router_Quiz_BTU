import React from 'react';

function ErrorPage() {
    return (
        <div className="h-full px-20 flex flex-col mt-40">
            <h1 className="text-center text-5xl text-red-500">Error 404</h1>
            <p className="text-center mt-2">
                Unfortunately, requested resource could not be found!
            </p>
        </div>
    );
}

export default ErrorPage;
