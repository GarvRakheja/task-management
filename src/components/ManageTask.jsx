import React from 'react'
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

const ManageTask = () => {
    return (
        <div className='px-2 py-2'>
            <div className='flex items-center gap-2'>
                <button className='flex items-center gap-1 border border-black  px-2 py-1 rounded-tl-md rounded-bl-md text-black font-light '>
                    <FaPlus />
                    <p>Add task</p>
                </button>
                <button>
                    <IoIosArrowDown />
                </button>
            </div>
            <div>
                <button>
                    <IoFilter />
                </button>
              
            </div>
        </div>
    )
}

export default ManageTask