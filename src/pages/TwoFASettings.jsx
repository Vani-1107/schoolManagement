import React from "react";
import { MdHome } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { useState } from "react";

function TwoFASetting() {
    const [formValues, setFormValues] = useState({
      twoFactorAuth: "Enable",
      showRememberBrowser: "Yes",
      cookieExpiry: "1 Month",
      emailInstruction: "A unique code has been sent to your email address. Please check your inbox for the 2FA verification code.",
      appInstruction: "Download Google Authenticator App in your mobile device.",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Saved Settings:", formValues);
      alert("Settings saved successfully!");
    };
  
    return (
      <div className="pt-16 pl-64">
        <div className="flex items-center p-4 gap-3 w-full shadow-md bg-white">
          <div className="border border-yellow-300 p-1 rounded-lg">
            <MdHome size={24} color="gray" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            Two Factor Authentication
          </h1>
        </div>
  
        <div className="bg-gray-100 h-[100vh] p-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex flex-row space-x-2 mb-6">
              <FaFingerprint size={28} />
              <div className="text-xl border-b-2 border-yellow-300 font-semibold">
                Two Factor Authentication Settings
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Form Container */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-2 w-full max-w-4xl mx-auto">
                {/* Two Factor Authentication */}
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="twoFactorAuth"
                >
                  Two Factor Authentication <span className="text-red-500">*</span>
                </label>
                <select
                  id="twoFactorAuth"
                  name="twoFactorAuth"
                  value={formValues.twoFactorAuth}
                  onChange={handleInputChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg "
                >
                  <option value="Enable">Enable</option>
                  <option value="Disable">Disable</option>
                </select>
  
                {/* Remember Browser */}
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="showRememberBrowser"
                >
                  2FA Show Remember Browser{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="showRememberBrowser"
                  name="showRememberBrowser"
                  value={formValues.showRememberBrowser}
                  onChange={handleInputChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
  
                {/* Cookie Expiry */}
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="cookieExpiry"
                >
                  2FA Cookie Expiry <span className="text-red-500">*</span>
                </label>
                <select
                  id="cookieExpiry"
                  name="cookieExpiry"
                  value={formValues.cookieExpiry}
                  onChange={handleInputChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg"
                >
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                </select>
  
                {/* Email Instruction */}
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="emailInstruction"
                >
                  Email Instruction
                </label>
                <textarea
                  id="emailInstruction"
                  name="emailInstruction"
                  value={formValues.emailInstruction}
                  onChange={handleInputChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg"
                  rows="3"
                />
  
                {/* App Instruction */}
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="appInstruction"
                >
                  App Instruction
                </label>
                <textarea
                  id="appInstruction"
                  name="appInstruction"
                  value={formValues.appInstruction}
                  onChange={handleInputChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg"
                  rows="2"
                />
              </div>
  
              {/* Save Button */}
              <div className="text-center mt-6 ">
            <button
              type="submit"
              className="px-16 py-1 rounded-lg font-semibold hover:bg-gray-200 text-gray-600  border-2"
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
  
  export default TwoFASetting;
  