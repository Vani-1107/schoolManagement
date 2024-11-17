import React from 'react';

function CreateCategory() {
  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        
        
        <form>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Category Name *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Code
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Code *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter product code"
            />
          </div>

          {/* Product Category */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Category *
            </label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
              <option>Select</option>
              <option>Accessories</option>
              <option>Study material</option>
              <option>Furniture and Equipment</option>
              <option>Dress</option>
              <option>Books and Stationary</option>
              {/* Add more categories as needed */}
            {/* </select>
          </div> */} 

          {/* Purchase Unit */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Purchase Unit *
            </label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
              <option>Select</option>
              <option>KG</option>
              <option>Piece</option>
              <option>Dozen</option>
              <option>Unit</option>
              {/* Add more units as needed */}
            {/* </select>
          </div> */} 

          {/* Sales Unit */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Sales Unit *
            </label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
              <option>Select</option>
              <option>KG</option>
              <option>Piece</option>
              <option>Dozen</option>
              <option>Unit</option>
              {/* Add more units as needed */}
            {/* </select>
          </div> */} 

          {/* Unit Ratio */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Unit Ratio
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Eg. Purchase Unit: KG & Sales Unit: Gram = Ratio : 1000"
            />
          </div> */}

          {/* Purchase Price */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Purchase Price *
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter purchase price"
            />
          </div> */}

          {/* Sales Price */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Sales Price *
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter sales price"
            />
          </div> */}

          {/* Remarks */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Remarks
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter remarks"
            />
          </div>  */}

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

export default CreateCategory;
