import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Email = ()=>{
  const navigate = useNavigate();
  const openMail = () =>{
    navigate("/mail/1234");

  }


  return (
    <div onClick={openMail}className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shodow-md'>
      <div className='flex items-center gap-3'>
      <div className='text-gray-400'>
        <MdCropSquare size={'20px'}/>
      </div>
      <div  className='text-gray-400'>
        <MdOutlineStarBorderPurple500 size={'20px'}/>
      </div>
      <div>
        <h1 className='font-semibold'>30dayscoding</h1>
      </div>
      </div>
      <div className='flex-1 ml-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero sit laborum!</p>
      </div>
      <div className='flex-none text-gray text-sm'>
        <p>12 days ago</p>
      </div>

    </div>
  )
}

export default Email