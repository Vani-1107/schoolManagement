import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";

const CustomDomainSettings = () => {
  const [type, setType] = useState("Subdomain");
  const [url, setUrl] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Instruction Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-row space-x-1">
        <div className="text-2xl py-1">  <FaCircleQuestion /></div>
        <div className="text-2xl font-semibold mb-4">Custom Domain Settings Instruction</div>
        </ div>
        <ul className="text-gray-600 list-disc pl-6 space-y-2 font-semibold">
          <li>
            You'll need to set up a DNS record to point to your store on our server. DNS records can be set up through your domain registrar's control panel. Since every registrar has a different setup, contact them for assistance if you're unsure.
          </li>
          <li>
            DNS changes may take up to 48-72 hours to take effect, although it's normally a lot faster than that. You will receive a reply when your custom domain has been activated. Please allow 1-2 business days for this process to complete.
          </li>
        </ul>
      </div>

      {/* DNS Records Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">Configure your DNS records</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Host</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <button className="bg-blue-500 rounded-lg text-white text-sm font-semibold p-1 px-4 ml-[20%] mt-2">CNAME Records</button>
              <td className="border border-gray-200 px-4 py-2">www</td>
              <td className="border border-gray-200 px-4 py-2">ramomcoder.com</td>
            </tr>
            <tr>
              <button className="bg-blue-500 rounded-lg text-white text-sm font-semibold p-1 px-4 ml-[20%] mt-2">A Records</button>
              <td className="border border-gray-200 px-4 py-2">@</td>
              <td className="border border-gray-200 px-4 py-2">130.155.155.55</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Request Form Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        
        <div className="space-y-4">
          {/* Type Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="type">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="Subdomain">Subdomain</option>
              <option value="Custom Domain">Custom Domain</option>
            </select>
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="url">
              URL <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <span className="bg-gray-200 px-4 py-2 rounded-l border border-r-0 border-gray-300">
                https://
              </span>
              <input
                id="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your domain"
                className="w-full border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => alert(`Request submitted for ${url}`)}
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDomainSettings;
