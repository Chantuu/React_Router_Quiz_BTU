import React, { useEffect, useState } from 'react';
import { default as axios } from 'axios';

function PhotoCards() {
    const [responseData, setResponseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(
                    'https://jsonplaceholder.typicode.com/photos?_limit=4'
                );
                setResponseData(response);
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="h-full flex flex-row justify-center items-center">
            {loading && (
                <div className="text-6xl mb-12 text-blue-600">Loading</div>
            )}
            {!loading && !error && <div></div>}
            {!loading && error && (
                <div className="text-6xl mb-12 text-red-600">Error</div>
            )}
        </div>
    );
}

export default PhotoCards;
