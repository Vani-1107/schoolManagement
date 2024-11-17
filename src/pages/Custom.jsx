import React, { useState } from "react";
import { FaRegCopy, FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import CreateProduct from "../component/ProductRow";
import CustomDomainSettings from "../component/CustomRow";

const CustomDomain = () => {
  const [activeTab, setActiveTab] = useState("Domain List");

  const domains = [
    {
      id: 1,
      schoolName: "Icon School & College",
      originUrl: "https://iconschool.ramomcoder.com/iconschool",
      customDomain: "iconschool.ramomcoder.com",
      domainType: "Sub Domain",
      requestDate: "01.Jun.2024",
      approvedDate: "01.Jun.2024",
      status: "Approved",
    },
    // Additional domain entries can be added here.
  ];

  return (
    <div className="pt-16 pl-64">
      {/* Header */}
      <div className="flex items-center p-4 gap-3 w-full shadow-xl bg-white">
        <div className="border border-yellow-300 rounded shadow-inner p-1">
          <MdHome size={24} color="gray" />
        </div>
        <div className="text-xl font-semibold">Custom Domain</div>
      </div>

      {/* Content */}
      <div className="bg-gray-100 h-[100vh] p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Tabs */}
          <div className="flex space-x-4 border-b pb-2">
            <button
              onClick={() => setActiveTab("Domain List")}
              className={`py-2 px-4 ${
                activeTab === "Domain List"
                  ? "border-b-2 border-yellow-500 text-yellow-600 font-medium"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              Domain List
            </button>
            <button
              onClick={() => setActiveTab("Send Request")}
              className={`py-2 px-4 ${
                activeTab === "Send Request"
                  ? "border-b-2 border-yellow-500 text-yellow-600 font-medium"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              Send Request
            </button>
          </div>

          {/* Conditional Rendering */}
          {activeTab === "Domain List" && (
            <div>
              {/* Toolbar */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button className="p-2 border rounded bg-gray-200 hover:bg-gray-300">
                    <FaRegCopy />
                  </button>
                  <button className="p-2 border rounded bg-gray-200 hover:bg-gray-300">
                    <FaRegFileExcel />
                  </button>
                  <button className="p-2 border rounded bg-gray-200 hover:bg-gray-300">
                    <IoDocumentTextOutline />
                  </button>
                  <button className="p-2 border rounded bg-gray-200 hover:bg-gray-300">
                    <AiOutlineFilePdf />
                  </button>
                  <button className="p-2 border rounded bg-gray-200 hover:bg-gray-300">
                    <RiPrinterLine />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 px-4 w-[16rem] border rounded"
                />
              </div>

              {/* Domain Table */}
              <table className="min-w-full bg-white mt-4 shadow-lg rounded-md border">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="px-4 py-2 border">Sl</th>
                    <th className="px-4 py-2 border">School Name</th>
                    <th className="px-4 py-2 border">Origin Url</th>
                    <th className="px-4 py-2 border">Custom Domain</th>
                    <th className="px-4 py-2 border">Domain Type</th>
                    <th className="px-4 py-2 border">Request Date</th>
                    <th className="px-4 py-2 border">Approved Date</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {domains.map((domain, index) => (
                    <tr key={domain.id} className="text-gray-700 border-t">
                      <td className="px-4 py-2 border text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 py-2 border">{domain.schoolName}</td>
                      <td className="px-4 py-2 border">
                        <a
                          href={domain.originUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {domain.originUrl}
                        </a>
                      </td>
                      <td className="px-4 py-2 border">
                        <a
                          href={`https://${domain.customDomain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {domain.customDomain}
                        </a>
                      </td>
                      <td className="px-4 py-2 border text-center">
                        {domain.domainType}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        {domain.requestDate}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        {domain.approvedDate}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <span
                          className={`px-2 py-1 rounded ${
                            domain.status === "Approved"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {domain.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <button className="text-yellow-500 hover:text-yellow-600">
                          ✏️
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

          {activeTab === "Send Request" && (
            <div>
              <CustomDomainSettings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
