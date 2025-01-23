import React from 'react'
import * as config from "../utils/config"

const List = () => {
    return (
        <div className='px-3 py-3 lg:px-3 lg:py-3 border-b-[0.5px] border-[#565557]'>
            <ul className='flex items-center'>
                {config?.ListItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-1  px-2 py-2 rounded-md cursor-pointer"
                    >
                        <span className="text-[20px] text-[#a2a0a2]">{config.listIcons[item.icon]}</span>
                        <a href={item.href} className="text-[14px] font-light">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List