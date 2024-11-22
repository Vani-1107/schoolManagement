import React, { useState } from "react";
import { FaRegCopy, FaRegFileExcel, FaRegEdit } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import Addissues from "../component/Addissues";

function Issues() {
  const [activeTab, setActiveTab] = useState("Issues List"); // Default to "Issues List"
  const [searchTerm, setSearchTerm] = useState(""); // Search functionality

  const issuesData = [
    {
      id: 1,
      role: "Student",
      issueTo: "John Doe",
      mobileNo: "+91-9876543210",
      dateOfIssue: "01-Nov-2024",
      dueDate: "10-Nov-2024",
      returnDate: null, // Not returned
      issuedBy: "Admin",
    },
    {
      id: 2,
      role: "Teacher",
      issueTo: "Jane Smith",
      mobileNo: "+91-9123456789",
      dateOfIssue: "03-Nov-2024",
      dueDate: "12-Nov-2024",
      returnDate: "11-Nov-2024", // Returned
      issuedBy: "Admin",
    },
  ];

  // Filtered data based on search term
  const filteredIssues = issuesData.filter(
    (issue) =>
      issue.issueTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.mobileNo.includes(searchTerm)
  );

  return (
    <div className="pt-16 pl-64">
      {/* Inventory Header */}
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className="border border-yellow-300 rounded shadow-inner"></div>
        <div className="border border-yellow-300 rounded shadow-inner p-1">
          <MdHome size={24} color="gray" />
        </div>
        <div className="text-xl font-semibold">Inventory</div>
      </div>

      {/* Page Content */}
      <div className="min-h-screen bg-gray-200">
        <div className="p-4">
          <div className="bg-white p-6 rounded shadow">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mt-4 border-b border-gray-300 p-4">
              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                  <CiCircleList />
                </div>
                <div>
                  <button
                    onClick={() => setActiveTab("Issues List")}
                    className={`py-2 px-2 ${
                      activeTab === "Issues List"
                        ? "border-b-2 border-yellow-500 text-yellow-600"
                        : "text-gray-600"
                    }`}
                  >
                    Issues
                  </button>
                </div>
              </div>

              <div className="flex flex-row items-center justify-start">
                <div className="text-xl">
                  <FaRegEdit />
                </div>
                <div>
                  <button
                    onClick={() => setActiveTab("Add Issue")}
                    className={`py-2 px-2 ${
                      activeTab === "Add Issue"
                        ? "border-b-2 border-yellow-500 text-yellow-600"
                        : "text-gray-600"
                    }`}
                  >
                    Add Issue
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "Issues List" && (
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
                    placeholder="Search by name or mobile number"
                    className="p-2 border rounded w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Issues Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border bg-white shadow-md">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Sl</th>
                        <th className="px-4 py-2 border">Role</th>
                        <th className="px-4 py-2 border">Issue To</th>
                        <th className="px-4 py-2 border">Mobile No</th>
                        <th className="px-4 py-2 border">Date Of Issue</th>
                        <th className="px-4 py-2 border">Due Date</th>
                        <th className="px-4 py-2 border">Return Date</th>
                        <th className="px-4 py-2 border">Issued By</th>
                        <th className="px-4 py-2 border">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredIssues.length > 0 ? (
                        filteredIssues.map((issue, index) => (
                          <tr key={issue.id}>
                            <td className="px-4 py-2 border">{index + 1}</td>
                            <td className="px-4 py-2 border">{issue.role}</td>
                            <td className="px-4 py-2 border">{issue.issueTo}</td>
                            <td className="px-4 py-2 border">{issue.mobileNo}</td>
                            <td className="px-4 py-2 border">
                              {issue.dateOfIssue}
                            </td>
                            <td className="px-4 py-2 border">{issue.dueDate}</td>
                            <td
                              className={`px-4 py-2 border ${
                                issue.returnDate
                                  ? "text-green-500 font-semibold"
                                  : "text-red-500 font-semibold "
                              }`}
                            >
                              {issue.returnDate || "Not Returned"}
                            </td>
                            <td className="px-4 py-2 border">{issue.issuedBy}</td>
                            <td className="px-4 py-2 border">
                              <button className="text-blue-500 hover:text-blue-700 mr-2">
                                ✏️
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                🗑️
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            className="px-4 py-2 border text-center"
                            colSpan={9}
                          >
                            No matching records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Add Issue" && (
              <div className="p-4">
                {/* Add Issue Section */}
                <div className="bg-white p-6 rounded shadow">
                  
                  <Addissues />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issues;
