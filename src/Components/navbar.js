import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({ SubNavbar, NameSubNavbar, LinkBack }) {
    return (
        <div>
            <div className={`bg-white border shadow-sm rounded-[6px] py-[16px] px-[25px] flex items-center justify-between`}>
                <div className={`${SubNavbar ? 'hidden' : 'block'} space-y-[5px]`}>
                    <h1 className='text-[#C1121F] text-sm font-semibold'>Selamat Datang Di Tokoku</h1>
                </div>
                <div className={`${SubNavbar ? 'block' : 'hidden'} flex items-center gap-[16px]`}>
                    <Link to={LinkBack}>
                        {/* <BsArrowLeftShort className='text-[#DC1717] text-2xl' /> */}
                    </Link>
                    <h1 className='text-[#DC1717] text-sm font-[500]'>{NameSubNavbar}</h1>
                </div>
            </div>
        </div >
    )
}

export default Navbar