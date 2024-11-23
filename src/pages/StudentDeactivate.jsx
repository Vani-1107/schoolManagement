import React from "react";
import { MdHome } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

function StudentDeactivate() {
  return (
    <div className="pt-16 pl-64">
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className="border border-yellow-300 rounded p-1 text-xl">
          <MdHome />
        </div>
        <div className="text-xl font-semibold">Deactivate Ground</div>
      </div>
      <div className="min-h-screen bg-gray-200">
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold border-b-2 border-yellow-600">
              Select Ground
            </div>
            <div className="grid grid-cols-2 gap-4 w-full py-8">
              <div className="flex flex-col justify-center">
                <label className="block text-lg font-medium text-gray-700" htmlFor="">
                  Class *
                </label>
                <select
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm py-2"
                  name=""
                  id=""
                >
                  <option value="">Select</option>
                </select>
              </div>

              <div className="flex flex-col justify-center">
                <label className="block text-lg font-medium text-gray-700" htmlFor="">
                  Section *
                </label>
                <select
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm py-2"
                  name=""
                  id=""
                >
                  <option value="">Select Class First</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="flex flex-row border-2 py-1 px-8 text-center rounded-lg hover:bg-gray-200 items-center">
                <div className="text-lg py-1">
                  <FaFilter />
                </div>
                <div className="text-md text-gray-700 font-semibold ml-2">
                  Filter
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDeactivate;
