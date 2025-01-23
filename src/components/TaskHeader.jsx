import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { BsMicrosoft } from "react-icons/bs";
import List from './List';


const TaskHeader = () => {
    return (
        <div className='px-3 py-3 lg:px-4 lg:py-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0'>
            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-3 text-[16px] font-bold' >
                    <p>Email Marketing</p>
                    <IoIosArrowDown className='text-[22px]' />
                </button>
                <div>
                    <CiStar className='text-[22px]' />
                </div>
                <button className='flex items-center gap-3'>
                    <FaRegCircle />
                    <p>Set status</p>
                </button>
            </div>
            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-1 bg-blue-400 px-1 py-1 text-center rounded'>
                    <IoBag className='text-white' />
                    <p>Share</p>
                </button>
                <button className='flex items-center gap-1 border border-black px-1 py-1 text-center rounded'>
                    <BsMicrosoft className='text-black' />
                    <p>Customize</p>
                </button>
            </div>
        </div>
    )
}

export default TaskHeader