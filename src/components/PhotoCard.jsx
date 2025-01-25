import React from 'react';

function PhotoCard({ id, title, url }) {
    return (
        <div
            className="flex flex-col justify-baseline items-center gap-1 border-solid border-2 
        border-b-pink-800 rounded-lg basis-1/3 md:basis-1/4 p-2 max-h-[160px] md:max-h-none"
        >
            <div className="max-w-[168px] md:max-w-none">
                <img
                    src={url}
                    alt={`Photo #${id}`}
                    className="w-full h-full rounded-lg"
                />
            </div>
            <p className="text-center text-[8.5px] md:text-sm">{title}</p>
        </div>
    );
}

export default PhotoCard;
