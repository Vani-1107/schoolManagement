import React from "react";
import { FaHome, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiPrinterLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";

const schoolDetails = {
  "School Name": "Icon School & College",
  Status: "Active",
  Email: "icon@gmail.com",
  "Mobile No": "+158 2045 0412",
  City: "New York",
  Address: "Chyakunjo, Moylapotha, New York",
  "Active Plan": "Premium",
  "Date Of Start": "27 Jul 2019",
  "Date Of Expiry": "Lifetime",
  "Last Upgrade": "N/A",
};

const paymentHistory = [
  {
    sl: 1,
    plan: "Premium",
    purchaseDate: "21.Apr.2024",
    expiryDate: "Lifetime",
    trxId: "e3f1f99a",
    paid: "$450.00",
    method: "Cash",
  },
];

const modulesPermission = [
  { isEnabled: true, moduleName: "Attachments Book" },
  { isEnabled: true, moduleName: "Attendance" },
  { isEnabled: true, moduleName: "Bulk Sms And Email" },
  { isEnabled: true, moduleName: "Card Management" },
  { isEnabled: true, moduleName: "Certificate" },
  { isEnabled: true, moduleName: "Custom Domain" },
  { isEnabled: true, moduleName: "Events" },
  { isEnabled: true, moduleName: "Homework" },
  { isEnabled: true, moduleName: "Hostel" },
  { isEnabled: true, moduleName: "Human Resource" },
  { isEnabled: true, moduleName: "Inventory" },
  { isEnabled: true, moduleName: "Library" },
  { isEnabled: true, moduleName: "Live Class" },
];

const SubscriptionPage = () => {
  return (
    <div>
    <div className="container ml-[15%] p-4 pt-20 w-[85vw] bg-gray-200">
      {/* Page Header */}
      
      <div className="flex items-center gap-2 text-gray-800 mb-4 px-4 bg-white pb-6 -mt-4 py-4 shadow-lg">
      <div className=' border border-yellow-300 rounded shadow-inner p-1'><MdHome size={24} color='gray' /></div>
        <h1 className="text-xl font-bold">School Subscription</h1>
      </div>
      

      {/* Details Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        {/* Card Header */}
        <h2 className="text-lg font-bold mb-4 border-b-2 border-orange-400 pb-2 flex items-center gap-2">
          <span className="text-gray-600 text-2xl">🏫</span> School Details
        </h2>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <tbody>
            {Object.entries(schoolDetails).map(([key, value]) => (
              <tr
                key={key}
                className="border-b last:border-none text-sm text-gray-800"
              >
                <td className="py-2 font-bold text-gray-700 w-1/3">{key}</td>
                <td className="py-2">
                  {key === "Status" ? (
                    <span className="text-green-700 bg-green-100 px-2 py-1 rounded text-sm font-medium">
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Renew Subscription Button */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2  px-4 py-2 rounded hover:bg-gray-400 border-2 border-gray-300">
            <FaShoppingCart />
            Renew Subscription
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 border-b-2 border-orange-400 pb-2">
          Payment History
        </h2>
        <div className="flex flex-row justify-between mt-6 space-x-4 mb-4">
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
        <table className="w-full border-collapse border border-gray-200 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Sl</th>
              <th className="border border-gray-300 px-4 py-2">Plan</th>
              <th className="border border-gray-300 px-4 py-2">Purchase Date</th>
              <th className="border border-gray-300 px-4 py-2">Date Of Expiry</th>
              <th className="border border-gray-300 px-4 py-2">Trx ID</th>
              <th className="border border-gray-300 px-4 py-2">Paid</th>
              <th className="border border-gray-300 px-4 py-2">Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2">{item.sl}</td>
                <td className="border px-4 py-2">{item.plan}</td>
                <td className="border px-4 py-2">{item.purchaseDate}</td>
                <td className="border px-4 py-2">{item.expiryDate}</td>
                <td className="border px-4 py-2">{item.trxId}</td>
                <td className="border px-4 py-2">{item.paid}</td>
                <td className="border px-4 py-2">{item.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modules Permission */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4 border-b-2 border-orange-400 pb-2">
          Modules Permission
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Is Enabled?</th>
              <th className="border border-gray-300 px-4 py-2">Modules Name</th>
            </tr>
          </thead>
          <tbody>
            {modulesPermission.map((module, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2 text-center">
                  {module.isEnabled ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    "✖"
                  )}
                </td>
                <td className="border px-4 py-2">{module.moduleName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionPage;
