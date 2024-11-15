import React from 'react'
import { FaCakeCandles } from "react-icons/fa6";

function Birthday({title ,count,}) {
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className="text-4xl text-blue-500"><FaCakeCandles size={32}/></div>
                        <h2 className="text-md text-gray-400 font-semibold">{title}</h2>
                    </div>
                    <div className="text-2xl font-bold text-orange-300">{count}</div>
                </div>


                <hr className="w-full border-t-4 border-orange-300 " />
                <p className="text-sm font-medium text-gray-400 text-right uppercase">Today birthday</p>
            </div>
        </div>
    )
}

export default Birthday