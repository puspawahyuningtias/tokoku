import React, { useEffect, useState } from 'react'
import Navbar from '../Components/navbar'
import Card from '../Components/card'
import instance from '../Utils';
import Pagination from '../Components/pagination';
import { Link } from 'react-router-dom';

function Home() {
  const [refresh, setRefresh] = useState(false)
  const [offset, setOffset] = useState("1")
  const [limit, setLimit] = useState("10")
  const [data, setData] = useState([])
  const fetchProduct = async () => {
    try {
      const response = await instance.get(`products/?offset=${offset}&limit=${limit}`,
        {
          headers: {
            'Authorization': localStorage.getItem('tokoku')
          }
        }
      );
      setData(response.data)
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  const deleteProduct = () => {
    setRefresh(true)
  }
  const handlePageChange = (page) => {
    setOffset(page);
    setRefresh(true)
  };
  const [totalPages, setTotalPages] = useState('')
  const handlePrevChange = () => {
    if (offset === 1) {
      setOffset(1)
    } else {
      setOffset(offset - 1);
    }
    setRefresh(true)
  };

  const handleNextChange = () => {
    if (offset === totalPages) {
      setOffset(totalPages)
    } else {
      setOffset(offset + 1);
    }
    setRefresh(true)
  };
  useEffect(() => {
    fetchProduct()
    setRefresh(false)
  }, [refresh])
  return (
    <div className='m-5 space-y-3'>
      <Navbar SubNavbar={false} NameSubNavbar={'Home'} LinkBack={'/'} />
      <Link to={"/create"} className='bg-[#015995] py-2 px-4 rounded-[10px] flex items-center justify-center gap-[16px] w-[86px]'>
        <h1 className='text-[#EDEDED] text-sm font-[500]'>Tambah</h1>
      </Link>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {data && data.map((val, index) => (
          <div key={index}>
            <Card id={val.id} title={val.title} price={val.price} description={val.description} category={val.category} images={val.images} deleteProduct={deleteProduct} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={offset}
        totalPages={limit}
        lengthData={data?.length}
        onPageChange={handlePageChange}
        onPrevChange={handlePrevChange}
        onNextChange={handleNextChange}
      />
    </div >
  )
}

export default Home