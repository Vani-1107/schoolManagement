import React from 'react'
import { useState } from 'react';

function AddPurchase() {
    return (
        <div className='flex flex-col'>
            <div className="flex justify-center py-8">
                <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
                    <form>
                        {/* Supplier Name */}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Supplier *
                            </label>
                            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                                <option>Select</option>
                                <option>Innovatech Solutions</option>
                                <option>KnowledgeKraft</option>
                                <option>Mind-body Sports Mart</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Store *
                            </label>
                            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                                <option>Select</option>
                                <option>Innovatech Solutions</option>
                                <option>KnowledgeKraft</option>
                                <option>Mind-body Sports Mart</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>

                        {/* Bill number */}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Bill Number *
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                placeholder="Enter Bill Number"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Purchase Status *
                            </label>
                            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                                <option>Select</option>
                                <option>Ordered</option>
                                <option>Received</option>
                                <option>Pending</option>
                            </select>
                        </div>

                        {/*  */}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Date *
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                placeholder="Enter Date"
                            />
                        </div>

                        {/* Remarks */}
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                placeholder="Enter remarks"
                            />
                        </div>

                        {/* Save Button */}
                        <div className="text-center mt-6 ">
                            <button
                                type="submit"
                                className="px-16 py-1 rounded-lg font-semibold hover:bg-blue-700 text-gray-500  border-2"
                            >
                                + Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>


    )
}

export default AddPurchase