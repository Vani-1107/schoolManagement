import React from "react";
import { MdHome } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

function MultiImport() {
  return (
    <div className="pt-16 pl-64">
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className="border border-yellow-300 rounded p-1 text-xl">
          <MdHome />
        </div>
        <div className="text-xl font-semibold">Multiple Import</div>
      </div>
      <div className="min-h-screen bg-gray-200">
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold border-b-2 border-yellow-600">
              Multiple Import
            </div>
            <div className="flex justify-end py-4">
              <button className="flex flex-row py-1 px-4 text-center space-x-1 border-2 rounded-lg ">
                <div className="text-2xl text-gray-700 ">
                  <IoIosDocument />
                </div>
                <div className="font-semibold text-gray-700">
                  Download Sample Import File
                </div>
              </button>
            </div>
            <div className="px-6 text-md font-semibold text-blue-500 border-2 rounded-lg py-4">
              <div className="text-blue-500 font-bold text-md col-span-4 px-2">
                Intructions:
              </div>
              <ul className="list-decimal px-4">
                <li>Download the first sample file.</li>
                <li>
                  Open the downloaded 'csv' file and carefully fill the details
                  of the student.
                </li>
                <li>
                  The date you are trying to enter the "Birthday" and
                  "AdmissionDate" column make sure the date format is Y-m-d
                  (2024-11-23).
                </li>
                <li>
                  Do not import the duplicate "Roll Number" And "Register No".
                </li>
                <li>For student "Gender" use Male, Female value.</li>
                <li>
                  If enable Automatically Generate login details, leave the
                  "username" and "password" columns blank.
                </li>
                <li>
                  The Category name comes from another table, so for the
                  "Category", enter Category ID (can be found on the Category
                  page).
                </li>
                <li>
                  If a parent is existing / if you want to use the same parent
                  information for multiple students only enter the
                  "GuardianUsername" and leave other columns blank.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-full space-y-8 py-8">
              {/* Class Section */}
              <div className="flex flex-row items-center w-full max-w-lg">
                <label
                  className="block text-lg font-medium text-gray-700 w-40 text-right pr-4"
                  htmlFor="class"
                >
                  Class *
                </label>
                <select
                  className="mt-1 border border-gray-300 rounded-md p-2 shadow-sm flex-1"
                  name="class"
                  id="class"
                >
                  <option value="">Select</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                </select>
              </div>

              {/* Section Section */}
              <div className="flex flex-row items-center w-full max-w-lg">
                <label
                  className="block text-lg font-medium text-gray-700 w-40 text-right pr-4"
                  htmlFor="section"
                >
                  Section *
                </label>
                <select
                  className="mt-1 border border-gray-300 rounded-md p-2 shadow-sm flex-1"
                  name="section"
                  id="section"
                >
                  <option value="">Select Class First</option>
                </select>
              </div>

              {/* File Upload Section */}
              <div className="flex flex-row items-center w-full max-w-lg">
                <label
                  className="block text-lg font-medium text-gray-700 w-40 text-right pr-4"
                  htmlFor="csvFile"
                >
                  Select CSV File <span className="text-red-500">*</span>
                </label>

                <div
                  className="flex justify-center items-center w-full border-2 border-dashed border-gray-300 rounded-md h-40 text-gray-500 cursor-pointer"
                  onDrop={(e) => {
                    e.preventDefault();
                    const files = e.dataTransfer.files;
                    console.log("Dropped files:", files); // Process the files
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept=".csv"
                    onChange={(e) =>
                      console.log("Selected file:", e.target.files[0])
                    } // Handle file selection
                  />
                  <div className="flex flex-col items-center space-y-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v-6.8a2 2 0 0 1 1.71-1.98l5.34-.67m0 0L9.41 4.09m.59-.09L12 2l2 .18m-.59 1.91L12.41 5.16M12 2v2m0 1h2.34c.37 0 .72.18.94.46l1.66 2.23m-5.94-2.7L12 5m0 0l.59 1.76M7.41 7.91m7.18 6.1h3.17m0 0a1.9 1.9 0 0 0 2.15-1.68l.84-5.34a2 2 0 0 0-1.87-2.24l-4.5-.57m0 0l-1.58-3.42M3 9.5L12 13m0 0l1.67 2.3M3 11l-.62.43L2 12l1 .5-.38.61"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">
                      Drag and drop a file here or click
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 ">
            <button
              type="submit"
              className="px-16 py-1 rounded-lg font-semibold hover:bg-gray-200 text-gray-600  border-2"
            >
              + Import
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MultiImport;
