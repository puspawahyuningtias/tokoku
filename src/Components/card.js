import React from 'react'
import { Link } from 'react-router-dom';
import instance from '../Utils';

function Card({ id, title, price, description, category, images, deleteProduct }) {
    const delProduct = async () => {
        try {
            await instance.delete(`products/${id}`,
                {
                    headers: {
                        'Authorization': localStorage.getItem('tokoku')
                    }
                }
            ).then((response) => {
                console.log(response)
                deleteProduct(true)
            })
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
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
                        <button onClick={() => delProduct()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07A1.017 1.017 0 0 1 5 7H4a1 1 0 0 1 0-2zm-3.003 2H7.003l.928 13h8.138zM14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" /></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card