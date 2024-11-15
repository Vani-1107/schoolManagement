import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaRegCreditCard,
  FaUserShield,
  FaGlobe,
  FaReceipt,
  FaUserGraduate,
  FaUserFriends,
  FaIdCard,
  FaCertificate,
} from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaFingerprint } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { TiUserAdd } from "react-icons/ti";
import { IoClipboardOutline } from "react-icons/io5";
import { AiOutlineSpotify } from "react-icons/ai";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { VscBook } from "react-icons/vsc";
import { SlScreenDesktop } from "react-icons/sl";
import { CiWifiOn } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaQrcode } from "react-icons/fa";
import { BsJournalBookmark } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { CiCalculator2 } from "react-icons/ci";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdTab } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Sidebar = () => {
  // State to track open sections
  const [openSections, setOpenSections] = useState({});

  // Toggle function for opening/closing sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="fixed left-0 w-64 mt-16 bg-gray-50 h-screen p-4 overflow-y-auto">
      <div className="text-md mb-4">Main</div>

      <div className="space-y-2">
        {/* Dashboard */}
        <div
          onClick={() => toggleSection("dashboard")}
          className="flex items-center justify-between cursor-pointer  p-2 hover:bg-gray-200 border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FiGrid className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <Link to='/dashboard'><span className="text-md font-bold">Dashboard</span></Link>
          </div>
        </div>

        {/* Inventory */}
        <div
          onClick={() => toggleSection("inventory")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <MdRemoveShoppingCart className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Inventory</span>
          </div>
          <span className="text-gray-500">
            {openSections.inventory ? "-" : "+"}
          </span>
        </div>
        {openSections.inventory && (
          <div className="ml-8 text-sm space-y-1">
            <Link to='/product-list'><p className="hover:text-yellow-500 cursor-pointer">Product</p></Link>
            <p className="hover:text-yellow-500 cursor-pointer">Category</p>
          </div>
        )}

        {/* Subscription */}
        <div
          onClick={() => toggleSection("subscription")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaRegCreditCard className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Subscription</span>
          </div>
          <span className="text-gray-500">
            {openSections.subscription ? "-" : "+"}
          </span>
        </div>
        {openSections.subscription && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}

        {/* Custom Domain */}
        <div
          onClick={() => toggleSection("customDomain")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <TbWorldWww className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Custom Domain</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}

        {/* Add other sections here following the same structure */}
        <div
          onClick={() => toggleSection("2 FA Security")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaFingerprint className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">2 FA Security</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Frontend")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Frontend</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Reception")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaUsers className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Reception</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Admission")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaRegPenToSquare className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Admission</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Student Details")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-2">
            <GiGraduateCap className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Student Details</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Parents")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <TiUserAdd className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Parents</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Employee")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaUsers className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Employee</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Card Management")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <IoClipboardOutline className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Card Management</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Certificate")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <AiOutlineSpotify className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Certificate</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Human Resource")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <MdOutlineScreenshotMonitor className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Human Resource</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Academic")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <IoHomeOutline className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Academic</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Live Class Rooms")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <SlEarphonesAlt className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Live Class Rooms</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Attachments Book")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <IoCloudDownloadOutline className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Attachments Book</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Homework")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaRegPenToSquare className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Homework</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Exam Master")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <VscBook className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Exam Master</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Online Exam")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <SlScreenDesktop className="text-yellow-500" />
            <span className="text-md font-bold">Online Exam</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Supervision")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <CiWifiOn className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Supervision</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Attendance")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <VscGraph className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Attendance</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Qr Code Attendance")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaQrcode className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Qr Code Attendance</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Library")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <BsJournalBookmark className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Library</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Events")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaRegMessage className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Events</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Bulk Sms And Email")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <CiBellOn className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Bulk Sms And Email</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Student Accounting")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <CiCalculator2 className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Student Accounting</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Office Accounting")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <MdTab className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Office Accounting</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Message")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <FaRegEnvelopeOpen className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Message</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("Reports")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <IoPieChartOutline className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Reports</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("alumni")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <MdEmojiPeople className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Alumni</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
        <div
          onClick={() => toggleSection("settings")}
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 rounded border-b-2"
        >
          <div className="flex items-center space-x-4">
            <IoBagAddOutline className="text-yellow-500 bg-slate-100 shadow-md text-2xl" />
            <span className="text-md font-bold">Settings</span>
          </div>
          <span className="text-gray-500">
            {openSections.customDomain ? "-" : "+"}
          </span>
        </div>
        {openSections.customDomain && (
          <div className="ml-8 text-sm space-y-1">
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 1</p>
            <p className="hover:text-yellow-500 cursor-pointer">Sub-item 2</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
