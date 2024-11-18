import React from 'react'
import { MdHome } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { useState } from 'react';

function Unit() {
    const [unitName, setUnitName] = useState('');
    const [units, setUnits] = useState([
        { id: 1, branch: 'Icon School & College', name: 'KG' },
        { id: 2, branch: 'Icon School & College', name: 'Piece' },
        { id: 3, branch: 'Icon School & College', name: 'Dozen' },
        { id: 4, branch: 'Icon School & College', name: 'Unit' },
    ]);

    // Handle form submission to add a new unit
    const handleAddUnit = (e) => {
        e.preventDefault();
        if (unitName.trim() === '') return;

        const newUnit = {
            id: units.length + 1,
            branch: 'Icon School & College',
            name: unitName,
        };

        setUnits([...units, newUnit]);
        setUnitName('');
    };

    // Handle deleting a unit
    const handleDeleteUnit = (id) => {
        const updatedUnits = units.filter((unit) => unit.id !== id);
        setUnits(updatedUnits);
    };

    return (
        <div className="pt-16 pl-64 ">
            <div className="flex items-center p-4 gap-3 w-full shadow-lg">
                <div className=" border border-yellow-300 rounded shadow-inner "></div>
                <div className=' border border-yellow-300 rounded shadow-inner p-1'><MdHome size={24} color='gray' /></div>
                <div className="text-xl font-semibold">Inventory</div>
            </div>

            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="flex flex-row gap-5 rounded-lg">
                    {/* Add Unit Form */}
                    <div className="w-[45%] border-b h-fit bg-white shadow-lg">
                        <div className=' bg-gray-200 pl-4 p-2'>
                            <div className='flex items-center gap-2  '>
                                <FaRegEdit className='' />
                                <h2 className="text-xl font-bold">Add Unit</h2>
                            </div>
                        </div>
                        <div className='w-full h-[2px] bg-orange-200 '></div>
                        <form onSubmit={handleAddUnit} className='bg-gray-100 pt-4 p-3 pb-5'>
                            <label className="block mb-2 text-gray-700">
                                Unit Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={unitName}
                                onChange={(e) => setUnitName(e.target.value)}
                                className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter unit name"
                                required
                            />
                            {/* <div className='h-[2px] bg-black ' ></div> */}

                            <button
                                type="submit"
                                className="text-black py-1 px-4 rounded border border-black bg-white transition"
                            >

                                Save
                            </button>
                        </form>
                    </div>

                    {/* Unit List */}
                    <div className="w-[55%] h-fit bg-white shadow-lg">
                        <div className=' bg-gray-200 pl-4 p-2'>
                            <div className='flex items-center gap-2  '>
                                <CiCircleList className='' />
                                <h2 className="text-xl font-bold">Unit List</h2>
                            </div>
                        </div>
                        <div className='w-full h-[2px] bg-orange-200 '></div>
                        <div className='p-3 '>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="p-2 bg-gray-100">
                                        <th className="p-3 border">Sl</th>
                                        <th className="p-3 border">Branch</th>
                                        <th className="p-3 border">Name</th>
                                        <th className="p-3 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {units.map((unit, index) => (
                                        <tr key={unit.id} className="border-b">
                                            <td className="p-3 border">{index + 1}</td>
                                            <td className="p-3 border">{unit.branch}</td>
                                            <td className="p-3 border">{unit.name}</td>
                                            <td className="p-3 border">
                                                <button
                                                    onClick={() => handleDeleteUnit(unit.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    🗑
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Unit