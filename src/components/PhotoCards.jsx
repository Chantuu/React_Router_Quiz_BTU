import React, { useEffect, useState } from 'react';
import { default as axios } from 'axios';
import PhotoCard from './PhotoCard';

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
        <div className="h-full md:h-[57%] flex flex-row flex-wrap md:flex-nowrap justify-center items-stretch gap-2.5 content-center">
            {loading && <p className="text-6xl mb-12 text-blue-600">Loading</p>}
            {!loading && !error && (
                <>
                    {responseData.map((data) => (
                        <PhotoCard
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            url={data.url}
                        />
                    ))}
                </>
            )}
            {!loading && error && (
                <p className="text-6xl mb-12 text-red-600">Error</p>
            )}
        </div>
    );
}

export default PhotoCards;
