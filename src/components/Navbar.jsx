import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus, FaSearch } from "react-icons/fa";
import { RiQuestionMark } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { Sidebar } from './Sidebar';

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <div className="bg-[#2e2e30] px-2 py-2 flex justify-between items-center h-[50px] lg:px-3">
                <div className="flex gap-2 items-center md:gap-3">
                    <button onClick={toggleSidebar}>
                        <GiHamburgerMenu className="text-white text-[20px] md:text-[24px]" />
                    </button>
                    <button className="sm:flex sm:items-center sm:gap-1 sm:border sm:border-[#6a696a] sm:bg-[#3d3e40] sm:px-1 sm:py-1 sm:rounded-2xl md:px-3">
                        <FaPlus className="text-white text-[18px] bg-red-500 px-1 py-1 rounded-full" />
                        <p className="sm:text-white sm:text-[14px] md:text-[16px] hidden sm:block">Create</p>
                    </button>
                </div>
                <div className="relative">
                    <FaSearch className="absolute text-white text-[14px] font-light top-1/2 left-2 transform -translate-y-1/2" />
                    <input
                        placeholder="Search"
                        className="bg-[#565557] pl-7 py-1 rounded-[15px] text-white placeholder:text-[#f5f4f3] focus:outline-none sm:w-[280px] lg:w-[540px]"
                    />
                </div>
                <div className="flex items-center gap-1 lg:gap-3">
                    <div className="hidden lg:block text-white text-[14px]">
                        <p>30 days left in trial</p>
                    </div>
                    <div className="bg-[#f1bd6c] px-2 py-1 rounded-md hidden sm:block">
                        <p>ADD billing info</p>
                    </div>
                    <div className="px-1 py-1 rounded-full border-2 border-[#565557]">
                        <RiQuestionMark className="text-[#565557] text-[15px] font-bold" />
                    </div>
                    <div>
                        <BsStars className="text-[#e96b72] text-[20px] font-bold" />
                    </div>
                    <div className="bg-[#ce95ea] px-1 py-1 rounded-full text-[#1e1f21]">
                        <p>GR</p>
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};
