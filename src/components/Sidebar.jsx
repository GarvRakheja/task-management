import React, { useState } from 'react';
import * as config from "../utils/config"
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-[50px] left-0 h-[calc(100vh-50px)] bg-[#2e2e30] w-[250px] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 py-3 border-t border-[#565557]`}
        >
            <div className="px-2 py-2 text-white border-b border-[#565557]">
                <ul>
                    {config?.sidebarItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-1 hover:bg-[#565557] px-2 py-2 rounded-md cursor-pointer"
                        >
                            <span className="text-[20px] text-[#a2a0a2]">{config.iconMap[item.icon]}</span>
                            <a href={item.href} className="text-[14px] font-light">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-2 py-3 text-white border-b border-[#565557] flex flex-col gap-2">
                <div className='flex justify-between items-center px-2'>
                    <p className='text-white font-medium text-[14px]'>Insights</p>
                    <button>
                        <FaPlus />
                    </button>
                </div>
                <ul>
                    {config?.insights.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-1 hover:bg-[#565557] px-2 py-2 rounded-md cursor-pointer"
                        >
                            <span className="text-[20px] text-[#a2a0a2]">{config.insightsicons[item.icon]}</span>
                            <a href={item.href} className="text-[14px] font-light">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-2 py-3 text-white flex flex-col gap-2">
                <div className='flex justify-between items-center px-2'>
                    <p className='text-white font-medium text-[14px]'>Projects</p>
                    <button>
                        <FaPlus />
                    </button>
                </div>
                <div className='flex items-center gap-2 px-2 py-2'>
                    <span className='bg-[#9ee7e3] rounded px-1 py-1 text-[#9ee7e3] text-[5px]'>.fv</span>
                    <p className="text-[14px] font-light">project</p>
                </div>
            </div>
            <div className="px-2 py-3 text-white flex flex-col gap-2 ">
                <div className='flex justify-between items-center px-2'>
                    <p className='text-white font-medium text-[14px]'>Team</p>
                </div>
                <div className='flex items-center justify-between px-2 py-2 hover:bg-[#565557] rounded-md cursor-pointer'>
                    <div className='flex items-center gap-2'>
                        <IoPerson className="text-[20px] text-[#a2a0a2]" />
                        <p className="text-[14px] font-light">My workspace</p>
                    </div>
                    <div>
                        <IoIosArrowForward className="text-[20px] text-[#a2a0a2]" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-3 left-0 w-full px-2 pt-5 border-t border-[#565557] ">
                <button
                    className="w-full border border-[#565557] rounded text-white py-2 hover:bg-[#565557] cursor-pointer text-[14px] font-medium flex items-center justify-center gap-2"
                    onClick={toggleSidebar}
                >
                    <div>
                        <CiMail className="text-[20px] text-[#a2a0a2]" />
                    </div>
                    <p className="text-[14px] font-light">Invite teammates</p>
                </button>
            </div>
        </div>
    );
};
