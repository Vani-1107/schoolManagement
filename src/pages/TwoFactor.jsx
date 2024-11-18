import React from "react";
import { MdHome } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

const TwoFactorAuthentication = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("F6JVXZQ6LBOJ7UA");
    alert("Code copied to clipboard!");
  };

  return (
    <div className="pt-16 pl-64">
      {/* Header */}
      <div className="flex items-center p-4 gap-3 w-full shadow-md bg-white">
        <div className="border border-yellow-300 p-1 rounded-lg"><MdHome size={24} color="gray" /></div>
        <h1 className="text-xl font-semibold text-gray-800">
          Two Factor Authentication
        </h1>
        <div className="ml-auto">
          <button className="border border-gray-400 rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <span>Saved Login</span>
            <i className="fas fa-shield-alt" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 h-[100vh] p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {/* Two Columns */}
          <div className="grid grid-cols-2 gap-6">
            {/* Two Factor Authentication (App) Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">
                Two Factor Authentication (APP)
              </h2>

              {/* QR Code Section */}
              <div className="flex flex-col items-center gap-4 border-2 p-4 rounded-lg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="QR Code"
                  className="border p-2"
                />

                {/* Authentication Code */}
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value="F6JVXZQ6LBOJ7UA"
                    readOnly
                    className="border rounded-lg px-4 py-2 w-full text-gray-800"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
                  >
                    <FaCopy size={20} color="gray" />
                  </button>
                </div>

                {/* Enable Button */}
                <button className="px-4 font-semibold text-gray-600 border-2 hover:bg-gray-200  py-2 rounded-lg">
                  Enable Two Factor Authentication
                </button>
                <div className="text-sm text-gray-600 mt-6">
                <ol className="list-decimal pl-4 space-y-2 font-semibold">
                  <li>
                    Download and install Authenticator App on your mobile. Download
                    URL: <a href="#" className="text-blue-500">Here</a>
                  </li>
                  <li>Scan the QR Code.</li>
                  <li>Enter the Verification Code.</li>
                </ol>
              </div>
              </div>

              {/* Instructions */}
             
            </div>

            {/* Two Factor Authentication (Email) Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">
                Two Factor Authentication (Email)
              </h2>

              {/* Email Input Section */}
              <div className="border-2 p-6 rounded-lg">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value="admin@ramom.com"
                  readOnly
                  className="border rounded-lg px-4 py-2 w-full mb-4 text-gray-800 bg-gray-200"
                />
                <div className="text-center">
                <button className="px-4 font-semibold text-gray-600 border-2 hover:bg-gray-200  py-2 rounded-lg">
                  Enable Two Factor Authentication
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
