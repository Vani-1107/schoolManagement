import React, { useState } from "react";
import CreateProduct from "../component/ProductRow";
import { FaRegCopy } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

const Product = () => {
  const [activeTab, setActiveTab] = useState("Product List");

  const products = [
    {
      id: 1,
      name: "Pen",
      code: "pen",
      category: "Study material",
      purchaseUnit: "Dozen",
      saleUnit: "Piece",
      unitRatio: 12,
      purchasePrice: 10.0,
      salesPrice: 1.0,
    },
    {
      id: 2,
      name: "Study Table",
      code: "st",
      category: "Furniture and Equipment",
      purchaseUnit: "Piece",
      saleUnit: "Piece",
      unitRatio: 1,
      purchasePrice: 55.0,
      salesPrice: 65.0,
    },
    // More products here...
  ];

  return (
    <div className="pt-16 pl-64 ">
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className=" border border-yellow-300 rounded shadow-inner "></div>
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
                onClick={() => setActiveTab("Product List")}
                className={`py-2 px-2 ${
                  activeTab === "Product List"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Product List
              </button>
                    </div>
                </div>
              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                <FaRegEdit />
                </div>
                <div>
                <button
                onClick={() => setActiveTab("Create Product")}
                className={`py-2 px-2 ${
                  activeTab === "Create Product"
                    ? "border-b-2 border-yellow-500 text-yellow-600"
                    : "text-gray-600 "
                }`}
              >
                Create Product
              </button>
                    </div>
              </div>
             
            </div>

            {/* Conditional Rendering */}
            {activeTab === "Product List" && (
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

                {/* Product Table */}
                <table className="min-w-full bg-white mt-4 shadow-lg rounded-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Sl
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Name
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Code
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Category
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Purchase Unit
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Sale Unit
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Unit Ratio
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Purchase Price
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Sales Price
                      </th>
                      <th className="px-4 py-2 border-r-2 border-gray-300 bg-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id} className="border-t">
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{product.name}</td>
                        <td className="px-4 py-2 border">{product.code}</td>
                        <td className="px-4 py-2 border">{product.category}</td>
                        <td className="px-4 py-2 border">
                          {product.purchaseUnit}
                        </td>
                        <td className="px-4 py-2 border">{product.saleUnit}</td>
                        <td className="px-4 py-2 border">
                          {product.unitRatio}
                        </td>
                        <td className="px-4 py-2 border">
                          ${product.purchasePrice.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 border">
                          ${product.salesPrice.toFixed(2)}
                        </td>
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

            {activeTab === "Create Product" && <CreateProduct />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
