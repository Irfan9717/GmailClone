import React from 'react'
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { Navigate, useNavigate } from 'react-router-dom'
import { BiArchiveIn } from "react-icons/bi";
import { MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from 'react-icons/md';

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-ceter justify-between px-4'>
        <div className='flex itmes-center gap-2 text-gray-700 py-2'>
          <div onClick={() => Navigate("/")} className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <IoMdArrowBack size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <BiArchiveIn size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdOutlineReport size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdDeleteOutline size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdOutlineMarkEmailUnread size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdOutlineWatchLater size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdOutlineAddTask size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <MdOutlineDriveFileMove size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <IoMdMore size={'20px'} />
          </div>

        </div>
        <div className='flex items-center gap-2'>
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size="24" />
          <MdKeyboardArrowRight size="24" />

        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className='flex justify-between bg-white items-center gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>Subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>

          </div>
          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>12 days ago</p>
          </div>

        </div>
        <div className='text-gray-500 text-sm'>
          <h1>aryansing@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className='my-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt quasi veritatis nemo hic fugiat itaque similique repellendus? Tempora fugit doloribus culpa quisquam quasi veritatis voluptatem possimus, eum aliquam impedit.</p>
        </div>

      </div>
    </div>
  )
}

export default Mail