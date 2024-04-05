import React from 'react'

function Card({ title, price, description, category, images }) {
    return (
        <div className="card">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={images[0]} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                    <p className="text-gray-700 text-base">
                        {price}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Card