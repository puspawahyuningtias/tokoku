import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/navbar';
import instance from '../Utils';

function Update() {
    const navigate = useNavigate()
    const { id } = useParams()
    const fetchProduct = async () => {
        try {
            await instance.get(`products/${id}`,
                {
                    headers: {
                        'Authorization': localStorage.getItem('tokoku')
                    }
                }
            ).then((response) => {
                setProduct({
                    title: response.data.title,
                    price: response.data.price ,
                    description: response.data.description ,
                    categoryId: response.data.category.id ,
                    images: response.data.images.join(",") ,
                });
            })
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data ={
            title: product.title,
            price: product.price,
            description: product.description,
            categoryId: product.categoryId,
            images: product.images.split(",")
        }
        try {
            await instance.put(`products/${id}`, data,
                {
                    headers: {
                        'Authorization': localStorage.getItem('tokoku')
                    }
                }
            ).then((response) => {
                navigate("/home")
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div className='m-10'>
            <Navbar SubNavbar={true} NameSubNavbar={'Update'} LinkBack={'/home'} />
            <div className='m-5'>
                <label className='text-[13px] text-[#454545] font-medium mb-2'>Title</label>
                <input
                    type='text'
                    name='title'
                    value={product.title}
                    onChange={handleChange}
                    className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
                    placeholder='Title'
                />
                <label className='text-[13px] text-[#454545] font-medium mb-2'>Price</label>
                <input
                    type='number'
                    name='price'
                    value={product.price}
                    onChange={handleChange}
                    className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
                    placeholder='Price'
                />
                <label className='text-[13px] text-[#454545] font-medium mb-2'>Description</label>
                <input
                    type='text'
                    name='description'
                    value={product.description}
                    onChange={handleChange}
                    className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
                    placeholder='Description'
                />
                <label className='text-[13px] text-[#454545] font-medium mb-2'>Category</label>
                <input
                    type='number'
                    name='categoryId'
                    value={product.categoryId}
                    onChange={handleChange}
                    className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
                    placeholder='Category ID'
                />
                <label className='text-[13px] text-[#454545] font-medium mb-2'>Link Images</label>
                <input
                    type='text'
                    name='images'
                    value={product.images}
                    onChange={handleChange}
                    className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
                    placeholder='Image URL'
                />
                <button onClick={handleSubmit} className='bg-[#015995] py-2 px-4 rounded-[10px] flex items-center justify-center gap-[16px] w-[86px]'>
                    <h1 className='text-[#EDEDED] text-sm font-[500]'>Simpan</h1>
                </button>
            </div>
        </div>
    )
}

export default Update