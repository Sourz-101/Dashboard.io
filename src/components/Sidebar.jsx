import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { LiaChalkboardSolid } from "react-icons/lia";
import { IoWarningOutline } from "react-icons/io5";
import { useGlobalState } from "../store/store";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const [sidebarPage, setSidebarPage] = useGlobalState();

  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-primary10 h-[87vh] rounded-2xl ms-4 me-4 relative shrink-0 ${open ? "w-64" : "w-20"} duration-300 flex flex-col min-h-96`}>

      <IoIosArrowDropleftCircle 
        className={`bg-white text-primary10 text-3xl rounded-full p-0.5 absolute -right-5 top-6 cursor-pointer duration-700  ${!open && "rotate-180"}`}
        size={40}
        onClick={() => setOpen(!open)}
      />

      {/* Welcome */}
      <p className={`text-white text-2xl mx-7 mt-7`}>
        <span className={`${!open && "hidden"} font-hind`}>Welcome</span>
      </p>

      {/* Horizontal Ruler */}
      <div className={`w-1/2 customHR ${open ? "ms-5" : "invisible mt-10"} rounded-full`}></div>

      {/* Menue Item List Start */}
      <ul className="text-white flex-grow">
        <Link to="/overview">
          <li
            className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary7 mt-6 h-14 ${sidebarPage === "overview" && "bg-primary7 border-s-4 border-white"}`}
            onClick={() => setSidebarPage("overview")}
          >
            <span className="text-2xl block float-left ms-5">
              <FaRegListAlt size={30} style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }} />
            </span>
            <span className={`text-xl font-medium flex-1 font-hind ${!open && "hidden"}`}>
              Overview
            </span>
          </li>
        </Link>

        <Link to="/">
          <li
            className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary7 mt-2 h-14 ${sidebarPage === "dashboard" && "bg-primary7 border-s-4 border-white"}`}
            onClick={() => setSidebarPage("dashboard")}
          >
            <span className="text-2xl block float-left ms-3">
              <LiaChalkboardSolid size={42} />
            </span>
            <span className={`text-xl font-medium flex-1 font-hind ${!open && "hidden"}`}>
              Dashboard
            </span>
          </li>
        </Link>

        <Link to="/alert">
          <li
            className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary7 mt-2 h-14 ${sidebarPage === "alert" && "bg-primary7 border-s-4 border-white" }`}
            onClick={() => setSidebarPage("alert")}
          >
            <span className="text-3xl block float-left ms-4">
              <IoWarningOutline size={38} />
            </span>
            <span className={`text-xl font-medium flex-1 font-hind ${!open && "hidden"}`}>
              Alert
            </span>
          </li>
        </Link>
      </ul>

      <div className="mt-auto">
        {/* Horizontal Ruler */}
        <div className={`w-full customHR2`}></div>

        <Link to="/settings">
          <div 
            className={`text-white flex items-center p-5 hover:bg-primary7 rounded-b-2xl ${sidebarPage === "settings" && "bg-primary7" }`}
            onClick={() => setSidebarPage("settings")}
          >
            <span className="text-2xl block float-left">
              <CiSettings size={40} />
            </span>
            <span className={`text-xl ms-3 font-medium flex-1 font-hind ${!open && "hidden"}`} >
              Settings
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;