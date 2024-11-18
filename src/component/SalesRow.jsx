import React, { useState } from "react";

function SalesRow() {
  const [rows, setRows] = useState([
    { product: "", unitPrice: 0, quantity: 1, discount: 0, totalPrice: 0 },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      { product: "", unitPrice: 0, quantity: 1, discount: 0, totalPrice: 0 },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = field === "product" ? value : parseFloat(value);
    if (field === "unitPrice" || field === "quantity" || field === "discount") {
      const { unitPrice, quantity, discount } = newRows[index];
      newRows[index].totalPrice = (unitPrice * quantity - discount).toFixed(2);
    }
    setRows(newRows);
  };
  const [receivedAmount, setReceivedAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-8">
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
          <form>
            {/* Supplier Name */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Roles *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                <option>Select</option>
                <option>Admin</option>
                <option>Teacher</option>
                <option>Accountant</option>
                <option >Librarian</option>
                <option >Parent</option>
              </select>
            </div>

            {/* Other Fields */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Sale to *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none">
                <option>Select</option>
                
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Bill No. *
              </label>
              <input
                placeholder="Enter Bill No."
                type="text"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
           
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Date *
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
           

            {/* Table Section */}
            <div className="overflow-x-auto py-8" >
              <table className="w-full border-collapse border border-gray-300 text-sm ">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Product *
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Unit Price
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Quantity *
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Discount
                    </th>
                    <th className="border border-gray-300 p-2 font-semibold">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        <select
                          value={row.product}
                          onChange={(e) =>
                            handleInputChange(index, "product", e.target.value)
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Product 1">Product 1</option>
                          <option value="Product 2">Product 2</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={row.unitPrice}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "unitPrice",
                              e.target.value
                            )
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        />
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
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={row.discount}
                          onChange={(e) =>
                            handleInputChange(index, "discount", e.target.value)
                          }
                          className="w-full px-2 py-1 border rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.totalPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={handleAddRow}
                className="mt-4 px-4 py-1 text-gray-700 border-2  bg-white font-semibold rounded shadow hover:bg-gray-300"
              >
                + Add Rows
              </button>
            </div>

            <div className="w-[40vw] mx-auto p-8 bg-white border-2 rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Bill Summary</h2>
              <div className="space-y-4">
                {/* Sub Total */}
                <div className="flex justify-between items-center">
                  <label className="text-gray-600">Sub Total</label>
                  <div className="flex items-center">
                    <span className="text-gray-600">$</span>
                    <input
                      type="text"
                      value="0.00"
                      readOnly
                      className="ml-2 w-20 bg-gray-100 border border-gray-300 rounded-md text-right px-2 py-1"
                    />
                  </div>
                </div>

                {/* Discount */}
                <div className="flex justify-between items-center">
                  <label className="text-gray-600">Discount ( - )</label>
                  <div className="flex items-center">
                    <span className="text-gray-600">$</span>
                    <input
                      type="text"
                      value="0.00"
                      readOnly
                      className="ml-2 w-20 bg-gray-100 border border-gray-300 rounded-md text-right px-2 py-1"
                    />
                  </div>
                </div>

                {/* Net Payable */}
                <div className="flex justify-between items-center">
                  <label className="text-gray-600">Net Payable</label>
                  <div className="flex items-center">
                    <span className="text-gray-600">$</span>
                    <input
                      type="text"
                      value="0.00"
                      readOnly
                      className="ml-2 w-20 bg-gray-100 border border-gray-300 rounded-md text-right px-2 py-1"
                    />
                  </div>
                </div>

                {/* Received Amount */}
                <div className="flex justify-between items-center">
                  <label className="text-gray-600">Received Amount</label>
                  <input
                    type="number"
                    placeholder="Enter Payment Amount"
                    value={receivedAmount}
                    onChange={(e) => setReceivedAmount(e.target.value)}
                    className="w-58 border border-gray-300 rounded-md px-2 py-1"
                  />
                </div>

                {/* Payment Method */}
                <div className="flex justify-between items-center">
                  <label className="text-gray-600">Pay Via</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-36 border border-gray-300 rounded-md px-2 py-1"
                  >
                    <option value="">Select</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                {/* Remarks */}
                <div className="flex flex-col">
                  <label className="text-gray-600">Remarks</label>
                  <textarea
                    placeholder="Write Your Remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-16 py-1 rounded-lg font-semibold hover:bg-gray-200 text-gray-500  border-2"
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

export default SalesRow;
