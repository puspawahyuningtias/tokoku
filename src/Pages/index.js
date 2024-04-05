import React, { useEffect, useState } from 'react'
import Navbar from '../Components/navbar'
import Card from '../Components/card'
import instance from '../Utils';
import Pagination from '../Components/pagination';

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
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  const handlePageChange = (page) => {
    setOffset(page);
    setRefresh(true)
  };
  const [totalPages, setTotalPages] = useState('')
  const [totalCount, setTotalCount] = useState(1)
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
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {data && data.map((val, index) => (
          <div>
            <Card title={val.title} price={val.price} description={val.description} category={val.category} images={val.images} />
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