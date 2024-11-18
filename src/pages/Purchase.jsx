import React from 'react'
import { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import AddPurchase from '../component/PurchaseRow';

function Sales() {
    const [activeTab, setActiveTab] = useState("Purchase List");
    const sales= [
        {
            billNo: "0001",
            supplierName: "Innovatech Solutions",
            purchaseStatus: "Received",
            paymentStatus: "Total Paid",
            purchaseDate: "30.Jun.2024",
            netPayable: 35000.0,
            paid: 35000.0,
            due: 0.0,
            remarks: "",
        },
        {
            billNo: "0002",
            supplierName: "KnowledgeKraft",
            purchaseStatus: "Received",
            paymentStatus: "Total Paid",
            purchaseDate: "30.Jun.2024",
            netPayable: 1850.0,
            paid: 1850.0,
            due: 0.0, 
            remarks: "",
        },
        {
            billNo: "0003",
            supplierName: "KnowledgeKraft",
            purchaseStatus: "Received",
            paymentStatus: "Total Paid",
            purchaseDate: "30.Jun.2024",
            netPayable: 950.0,
            paid: 950.0,
            due: 0.0,
            remarks: "",
        },
        {
            billNo: "0004",
            supplierName: "Mind-Body Sports Mart",
            purchaseStatus: "Ordered",
            paymentStatus: "Partly Paid",
            purchaseDate: "30.Jun.2024",
            netPayable: 3100.0,
            paid: 1500.0,
            due: 1600.0,
            remarks: "",
        },
    ];
    return (
        <div className='pt-16 pl-64'>
            <div className="flex items-center p-4 gap-3 w-full shadow-lg">
                <div className=" border border-yellow-300 rounded shadow-inner "></div>
                <div className=' border border-yellow-300 rounded shadow-inner p-1'><MdHome size={24} color='gray' /></div>
                <div className="text-xl font-semibold">Inventory</div>
            </div>
            <div className="min-h-screen bg-gray-200">
            <div className="p-4">
            <div className="bg-white p-6 rounded shadow">
            <div className="flex space-x-4 mt-4 border-b border-gray-300 p pl-4 ">
                <div className="flex flex-row items-center justify-start">
                    <div className="text-xl ">
                    <CiCircleList />
                    </div>
                    <div className="">
                    <button
                onClick={() => setActiveTab("Purchase List")}
                className={`py-2 px-2 ${
                  activeTab === "Purchase List"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Purchase List
              </button>
                    </div>
                </div>
              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                <FaRegEdit />
                </div>
                <div>
                <button
                onClick={() => setActiveTab("Add Purchase")}
                className={`py-2 px-2 ${
                  activeTab === "Add Purchase"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600 "
                }`}
              >
                Add Purchase
              </button>
                    </div>
              </div>
             
            </div>

            {activeTab === "Purchase List" && (
            <div className="p-4">
                {/* Toolbar */}
                <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                        <button className="p-2 border rounded hover:bg-gray-200">
                            <FaRegCopy />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-200">
                            <FaRegFileExcel />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-200">
                            <IoDocumentTextOutline />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-200">
                            <AiOutlineFilePdf />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-200">
                            <RiPrinterLine />
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border rounded w-64"
                    />
                </div>

                {/* Table */}
                <table className="min-w-full border bg-white shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Bill No</th>
                            <th className="px-4 py-2 border">Supplier Name</th>
                            <th className="px-4 py-2 border">Purchase Status</th>
                            <th className="px-4 py-2 border">Payment Status</th>
                            <th className="px-4 py-2 border">Purchase Date</th>
                            <th className="px-4 py-2 border">Net Payable</th>
                            <th className="px-4 py-2 border">Paid</th>
                            <th className="px-4 py-2 border">Due</th>
                            <th className="px-4 py-2 border">Remarks</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sales, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border">{sales.billNo}</td>
                                <td className="px-4 py-2 border">{sales.supplierName}</td>
                                <td className="px-4 py-2 border">{sales.purchaseStatus}</td>
                                <td className="px-4 py-2 border">
                                    <span
                                        className={`px-2 py-1 rounded text-green ${sales.paymentStatus === "Total Paid"
                                            ? "border border-green-500 text-green-400 font-semibold"
                                            : "border border-blue-500 text-blue-600 font-semibold"
                                            }`}
                                    >
                                        {sales.paymentStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-2 border">{sales.purchaseDate}</td>
                                <td className="px-4 py-2 border">${sales.netPayable.toFixed(2)}</td>
                                <td className="px-4 py-2 border">${sales.paid.toFixed(2)}</td>
                                <td className="px-4 py-2 border">${sales.due.toFixed(2)}</td>
                                <td className="px-4 py-2 border">{sales.remarks}</td>
                                <td className="px-4 py-2 border">
                                    <button className="text-yellow-500 hover:text-yellow-600 mr-2">
                                        ✏️
                                    </button>
                                    <button className="text-red-500 hover:text-red-600">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-end mt-4">
                    <button className="p-2 border rounded hover:bg-gray-200">1</button>
                </div>
            </div>
            )}

            {activeTab === "Add Purchase" && <AddPurchase/>}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Sales;