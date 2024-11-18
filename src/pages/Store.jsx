import React, { useState } from "react";
import CreateStore from "../component/StoreRow";
import { FaRegCopy } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { MdHome } from "react-icons/md";

const Store = () => {
  const [activeTab, setActiveTab] = useState("Store List");

  const stores = [
    {
      id: 1,
      name: "Family Fashion Store",
      code: "FFS1",
      mobile: "7657475178",
      address: "3214 Winifred Way",
      description: "",
    },
    {
      id: 2,
      name: "Super Shop",
      code: "SPS",
      mobile: "+17275182416",
      address: "10443 Ulmerton Rd, Florida",
      description: "All kinds of school supplies are available here.",
    },
    {
      id: 3,
      name: "Smart Computer",
      code: "sc",
      mobile: "+911123675018",
      address: "10703, Manakpura Sabji Mandi, Delhi",
      description: "",
    },
    {
      id: 4,
      name: "Academic Essentials",
      code: "ae",
      mobile: "02224955562",
      address: "15 Goldfields Road, New South Wales",
      description: "",
    },
    {
      id: 5,
      name: "Sports Scholars",
      code: "SSC",
      mobile: "+16935301363",
      address: "1414 Jonathon Keys, East Devante",
      description: "",
    },
  ];
  
  console.log(stores);

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
                onClick={() => setActiveTab("Store List")}
                className={`py-2 px-2 ${
                  activeTab === "Store List"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Store List
              </button>
                    </div>
                </div>
              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                <FaRegEdit />
                </div>
                <div>
                <button
                onClick={() => setActiveTab("Create Store")}
                className={`py-2 px-2 ${
                  activeTab === "Create Store"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600 "
                }`}
              >
                Create Store
              </button>
                    </div>
              </div>
             
            </div>

            {/* Conditional Rendering */}
            {activeTab === "Store List" && (
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

                {/* Store Table */}
                <table className="min-w-full bg-white mt-4 shadow-lg rounded-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Sl
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Store Name
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Store Code
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Mobile Number
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Address
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Description
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map((store, index) => (
                      <tr key={store.id} className="border-t">
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{store.name}</td>
                        <td className="px-4 py-2 border">{store.code}</td>
                        <td className="px-4 py-2 border">{store.mobile}</td>
                        <td className="px-4 py-2 border">
                          {store.address}
                        </td>
                        <td className="px-4 py-2 border">{store.description}</td>
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

            {activeTab === "Create Store" && <CreateStore/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
