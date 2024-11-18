import React from 'react';

function CreateSupplier() {
  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        
        
        <form>
          {/* Supplier Name */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Supplier Name *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter Store name"
            />
          </div>

          {/* Store Code */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Contact Number *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter Store code"
            />
          </div>

          {/*  */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Email *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter Store code"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Company Name *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter Store code"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product List *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter Store code"
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
  );
}

export default CreateSupplier;
