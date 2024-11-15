import React from 'react';

const StatisticCard = ({ icon, title,desc, count, roundedLeft, roundedRight }) => {
    return (
        <div className={`flex flex-col text-white p-6 shadow-md ${roundedLeft ? 'rounded-l-lg' : 'rounded-l-none'} ${roundedRight ? 'rounded-r-lg' : 'rounded-r-none'}`}>
            <div className='flex items-center justify-between'>
                <div>
                    <div className="text-4xl">{icon}</div>
                    <h2 className="text-xl font-semibold mt-2">{title}</h2>
                </div>
                <div className="text-3xl font-bold mt-1 text-orange-300">{count}</div>
            </div>


            <hr className="w-full border-t-4 border-orange-300 my-3" />
            <p className="text-sm font-medium text-right uppercase">{desc}</p>
        </div>
    );
};

export default StatisticCard;