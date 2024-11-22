import React, { useState } from "react";

function AddIssues() {
  const [rows, setRows] = useState([{ category: "", product: "", quantity: 1 }]);

  // Add a new row
  const handleAddRow = () => {
    setRows([...rows, { category: "", product: "", quantity: 1 }]);
  };

  // Remove a specific row
  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  // Handle input change in rows
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = field === "quantity" ? parseInt(value) || 1 : value;
    setRows(newRows);
  };

  const [remarks, setRemarks] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-8">
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
          <form>
            {/* Role */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Role *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                <option>Select</option>
                <option>Admin</option>
                <option>Teacher</option>
                <option>Accountant</option>
                <option>Librarian</option>
                <option>Parent</option>
              </select>
            </div>

            {/* Sale To */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Sale To *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                <option>Select</option>
              </select>
            </div>

            {/* Date of Issue */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Date of Issue *
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Due Date *
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>

            {/* Remarks */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Remarks *
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto py-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Category*
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Product*
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Quantity*
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        <select
                          value={row.category}
                          onChange={(e) =>
                            handleInputChange(index, "category", e.target.value)
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Category 1">Category 1</option>
                          <option value="Category 2">Category 2</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 p-2">
                        <select
                          value={row.product}
                          onChange={(e) =>
                            handleInputChange(index, "product", e.target.value)
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        >
                          <option value="">First Select The Category</option>
                          <option value="Product 1">Product 1</option>
                          <option value="Product 2">Product 2</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={row.quantity}
                          min="1"
                          onChange={(e) =>
                            handleInputChange(index, "quantity", e.target.value)
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <button
                          type="button"
                          onClick={() => handleRemoveRow(index)}
                          className="px-2 py-1 text-red-600 border border-gray-300 rounded hover:bg-red-200"
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={handleAddRow}
                className="mt-4 px-4 py-1  text-md text-gray-500 border-2 bg-white font-semibold rounded shadow hover:bg-gray-300"
              >
                + Add Rows
              </button>
            </div>

            {/* Save Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-16 py-1 rounded-lg font-semibold hover:bg-gray-200 text-gray-500 border-2"
              >
                + Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddIssues;
