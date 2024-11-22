import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { useDropzone } from "react-dropzone";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
function Admission() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Convert the dropped files to image objects and add them to the state
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only images
  });

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const [isGuardianExisting, setIsGuardianExisting] = useState(false);

  return (
    <div className="pt-16 pl-64 ">
      <div className="flex items-center p-4 gap-3 w-full shadow-lg">
        <div className=" border border-yellow-300 rounded  p-1 text-xl ">
          <MdHome />
        </div>
        <div className="text-xl font-semibold"> Admission</div>
      </div>
      <div className="min-h-screen bg-gray-200">
        <div className="p-4">
          <div className="bg-white p-6 rounded shadow">
            <div className="flex flex-row space-x-2 border-b-2 border-yellow-500 py-4">
              <div className="text-xl border-2 border-yellow-400 p-1">
                <RiGraduationCapFill />
              </div>
              <div className="text-lg font-semibold">Student Admission</div>
            </div>
            <div className="flex flex-row space-x-2  py-2">
              <div className="text-2xl text-yellow-600 p-1">
                <FaSchool />
              </div>
              <div className="text-lg font-semibold pt-1 text-yellow-600">
                Acaedemic Details
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Academic Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Academic Year *
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>2024-2025</option>
                  </select>
                </div>

                {/* Register No */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Register No *
                  </label>
                  <input
                    type="text"
                    defaultValue="ISC-0001"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                    disabled
                  />
                </div>

                {/* Roll */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Roll
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Admission Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Admission Date *
                  </label>
                  <input
                    type="date"
                    defaultValue="2024-11-19"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Class *
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>Select</option>
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Section *
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>Select Class First</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>Select</option>
                  </select>
                </div>

                {/* Spacer for alignment */}
                <div className="col-span-4 flex flex-row space-x-2">
                  <div className="text-xl py-1 text-yellow-600">
                    <FaUserGraduate />{" "}
                  </div>{" "}
                  <div className="text-lg font-semibold text-yellow-600">
                    Student Details
                  </div>
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Blood Group
                  </label>
                  <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                    <option>Select</option>
                  </select>
                </div>

                {/* Mother Tongue */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mother Tongue
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Religion
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Caste */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Caste
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile No
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Present Address
                  </label>
                  <textarea
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Permanent Address
                  </label>
                  <textarea
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 pb-1">
                    Profile Picture
                  </label>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed p-6 text-center"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500">
                      Drag and drop images here, or click to select
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.preview}
                          alt={`uploaded-image-${index}`}
                          className="w-full h-auto rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-4 flex flex-row space-x-2">
                  <div className="text-xl py-1 font-semibold  text-yellow-600">
                    <FaUserLock />
                  </div>
                  <div className="text-lg text-yellow-600 font-semibold">
                    Login Details
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Retype Passoword
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>

                {/* Guardian Details Section */}
                <div className="col-span-4">
                  <div className="flex flex-row space-x-2">
                    <div className="text-xl text-yellow-600 py-1">
                      <FaUserTie />
                    </div>
                    <div className="text-yellow-600 text-lg font-semibold">
                      Guardian Details
                    </div>
                  </div>
                </div>

                {/* Guardian Already Exists Toggle */}
                <div className="col-span-4 flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="guardianExists"
                    className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                    checked={isGuardianExisting}
                    onChange={(e) => setIsGuardianExisting(e.target.checked)}
                  />
                  <label
                    htmlFor="guardianExists"
                    className="text-md font-medium text-gray-700"
                  >
                    Guardian Already Exists
                  </label>
                </div>

                {/* Grid layout for the guardian details */}
                <div className="col-span-4 grid grid-cols-3 gap-4">
                  {/* Show Dropdown if Guardian Exists */}
                  {isGuardianExisting ? (
                    <div className="col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Select Existing Guardian
                      </label>
                      <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                        <option>Select Guardian</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                      </select>
                    </div>
                  ) : (
                    <>
                      {/* Guardian Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Guardian Name *
                        </label>
                        <input
                          type="text"
                          className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                        />
                      </div>

                      {/* Relation */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Relation *
                        </label>
                        <select className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm">
                          <option>Select</option>
                          <option>Father</option>
                          <option>Mother</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Guardian Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Guardian Phone *
                        </label>
                        <input
                          type="text"
                          className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                        />
                      </div>

                      {/* Guardian Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Guardian Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                        />
                      </div>

                      {/* Guardian Occupation */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Guardian Occupation
                        </label>
                        <input
                          type="text"
                          className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                        />
                      </div>

                      {/* Address */}
                      <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <textarea className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 pb-1">
                          Profile Picture
                        </label>
                        <div
                          {...getRootProps()}
                          className="border-2 border-dashed p-6 text-center"
                        >
                          <input {...getInputProps()} />
                          <p className="text-gray-500">
                            Drag and drop images here, or click to select
                          </p>
                        </div>

                        <div className="col-span-3 py-2">
                          {images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={image.preview}
                                alt={`uploaded-image-${index}`}
                                className="w-full h-auto rounded-lg"
                              />
                              <button
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                              >
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-4 grid grid-cols-3 gap-4 w-full">
                        <div className="w-full">
                          <label className="block text-sm font-medium text-gray-700">
                            Username
                          </label>
                          <input
                            type="text"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input
                            type="text"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Retype Passoword
                          </label>
                          <input
                            type="text"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="col-span-4">
                  <div className="flex flex-row space-x-2">
                    <div className="text-xl text-yellow-600 py-1">
                      <FaBus />
                    </div>
                    <div className="text-yellow-600 text-lg font-semibold">
                      Transport Details
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 gap-4 w-full">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      Transport Route
                    </label>
                    <select
                      className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                      name=""
                      id=""
                    >
                      <option value="">Select</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle No.
                    </label>
                    <select
                      className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                      name=""
                      id=""
                    >
                      <option value="">First Select Transport Route</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-4 py-2">
                  <div className="flex flex-row space-x-2">
                    <div className="text-xl text-yellow-600 py-1">
                      <FaBuilding />
                    </div>
                    <div className="text-yellow-600 text-lg font-semibold">
                      Hostel Details
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 gap-4 w-full">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      Hostel Name
                    </label>
                    <select
                      className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                      name=""
                      id=""
                    >
                      <option value="">Select</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Room Name
                    </label>
                    <select
                      className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                      name=""
                      id=""
                    >
                      <option value="">First Select Transport Route</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-4 flex flex-row space-x-2">
                  <div className="text-xl py-1 font-semibold  text-yellow-600">
                  <FaSchool />
                  </div>
                  <div className="text-lg text-yellow-600 font-semibold">
                    Previous School Details
                  </div>
                  </div>
                  <div className="col-span-4 grid grid-cols-2 gap-4 w-full">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      School Name
                    </label>
                   <input className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm" type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Qualifications
                    </label>
                    <input
                      className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"
                      name=""
                      id=""
                    />
                      
                  </div>
                  <div>
                  <label className="block text-sm font-medium text-gray-700">
                      Remarks
                    </label>
                    <textarea className="mt-1 w-full border border-gray-300 rounded-md p-2 shadow-sm"  name="" id=""></textarea>
                  </div>
                </div>
                <div className="flex  mt-6 ">
            <button
              type="submit"
              className="px-20 py-1 rounded-lg font-semibold hover:bg-gray-200 text-gray-600  border-2 border-gray-500"
            >
              + Save
            </button>
          </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
