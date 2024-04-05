import React from 'react'
import { Link } from 'react-router-dom';

function Card({id, title, price, description, category, images }) {
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
                <div className='flex justify-between items-center px-6 pt-4 pb-2'>
                    <div className="">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category.name}</span>
                    </div>
                    <div className='flex gap-3'>
                        <Link to={`/update/${id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" /></g></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card