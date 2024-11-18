import React, { useState } from "react";
import CreateSupplier from "../component/SupplierRow";
import { FaRegCopy } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { MdHome } from "react-icons/md";

const Supplier = () => {
  const [activeTab, setActiveTab] = useState("Supplier List");

  const suppliers = [
    {
      id: 1,
      name: "Innovatech Solutions",
      address: "68 Graham Road, CHEPSTOW",
      contactNumber: "4407805259043",
      email: "innovatech@ymail.com",
      companyName: "Innovatech Solutions",
      productList: "Computer, Laptop, Printer",
    },
    {
      id: 2,
      name: "KnowledgeKraft",
      address: "05 East Street, MANNINGS HEATH",
      contactNumber: "407027019921",
      email: "knowledgeKraft@gmail.com",
      companyName: "KnowledgeKraft",
      productList: "Study material, Bag and Etc",
    },
    {
      id: 3,
      name: "Mind-Body Sports Mart",
      address: "1126 Church Street, New York, NY 10017",
      contactNumber: "+17184876631",
      email: "sportsmart@gmail.com",
      companyName: "Mind-Body Sports Mart",
      productList: "Sports Equipment, Yoga Mats",
    },
  ];
  
  console.log(suppliers);
  
  

  return (
    <div className="pt-16 pl-64 ">
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className=" border border-yellow-300 rounded shadow-inner "></div>
        <div className=' border border-yellow-300 rounded shadow-inner p-1'><MdHome size={24} color='gray' /></div>
        <div className="text-xl font-semibold">Inventory</div>
      </div>
      <div className="bg-gray-100 h-[100vh]">
        <div className="p-4">
          {/* Tab Navigation */}
          <div className="bg-white shadow-md p-4">
            <div className="flex space-x-4 mt-4 border-b border-gray-300 ">
                <div className="flex flex-row items-center justify-start">
                    <div className="text-xl ">
                    <CiCircleList />
                    </div>
                    <div className="">
                    <button
                onClick={() => setActiveTab("Supplier List")}
                className={`py-2 px-2 ${
                  activeTab === "Store List"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Supplier List
              </button>
                    </div>
                </div>
              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                <FaRegEdit />
                </div>
                <div>
                <button
                onClick={() => setActiveTab("Create Supplier")}
                className={`py-2 px-2 ${
                  activeTab === "Create Supplier"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600 "
                }`}
              >
                Create Supplier
              </button>
                    </div>
              </div>
             
            </div>

            {/* Conditional Rendering */}
            {activeTab === "Supplier List" && (
              <div>
                {/* Toolbar and Search Bar */}
                <div className="flex flex-row justify-between mt-10 space-x-4">
                  <div className="flex space-x-1">
                    <button className="py-1 px-2 border rounded hover:bg-gray-300 bg-gray-200">
                      <FaRegCopy />
                    </button>
                    <button className="py-1 px-2 border rounded hover:bg-gray-300 bg-gray-200">
                      <FaRegFileExcel />
                    </button>
                    <button className="py-1 px-2 border rounded hover:bg-gray-300 bg-gray-200">
                      <IoDocumentTextOutline />
                    </button>
                    <button className="py-1 px-2 border rounded hover:bg-gray-300 bg-gray-200">
                      <AiOutlineFilePdf />
                    </button>
                    <button className="py-1 px-2 border rounded hover:bg-gray-300 bg-gray-200">
                      <RiPrinterLine />
                    </button>
                    {/* <button className="p-2 border rounded hover:bg-gray-200">💾</button> */}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="py-2 px-2 w-[16rem] border rounded"
                    />
                  </div>
                </div>

                {/* Supplier Table */}
                <table className="min-w-full bg-white mt-4 shadow-lg rounded-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Sl
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Supplier Name
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Address
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Contact Number
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Email
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Company Name
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Product List
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier, index) => (
                      <tr key={supplier.id} className="border-t">
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{supplier.name}</td>
                        <td className="px-4 py-2 border">{supplier.address}</td>
                        <td className="px-4 py-2 border">{supplier.contactNumber}</td>
                        <td className="px-4 py-2 border">
                          {supplier.email}
                        </td>
                        <td className="px-4 py-2 border">{supplier.companyName}</td>
                        <td className="px-4 py-2 border">{supplier.productList}</td>
                        <td className="px-4 py-2 border">
                          <button className="text-yellow-500 hover:text-yellow-600 mr-2">
                            ✏️
                          </button>
                          <button className="text-red-500 hover:text-red-600">
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-end mt-4 space-x-2">
                  <button className="p-2 border rounded hover:bg-gray-200">
                    1
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-200">
                    2
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-200">
                    3
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Create Supplier" && <CreateSupplier/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
