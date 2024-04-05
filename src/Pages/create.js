import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/navbar';
import instance from '../Utils';

function Create() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: []
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImagesChange = (e) => {
    const imagesArray = [];
    imagesArray.push(e.target.value)
    setProduct({ ...product, images: imagesArray });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Data produk yang dimasukkan:', product);
    try {
      await instance.post('products', product,
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
  return (
    <div className='m-10'>
      <Navbar SubNavbar={true} NameSubNavbar={'Home'} LinkBack={'/home'} />
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
          onChange={handleImagesChange}
          className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]"
          placeholder='Image URL'
        />
        <button onClick={handleSubmit} className='bg-[#015995] py-2 px-4 rounded-[10px] flex items-center justify-center gap-[16px] w-[86px]'>
          <h1 className='text-[#EDEDED] text-sm font-[500]'>Tambah</h1>
        </button>
      </div>
    </div>
  )
}

export default Create