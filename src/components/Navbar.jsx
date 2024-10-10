import React from "react";
import { FiBell } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-2xl bg-primary10 h-[8vh] p-4 select-none m-4 min-h-20">
      <div className="xs:text-xm sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white cursor-pointer flex items-center">
        <div className="md:hidden">
          <Hamburger className="hover:shadow-lg"/>
        </div>
        <p className="ps-4 md:block hidden">DASHBOARD.IO</p>
      </div>
      <div className="flex items-center">
        <FiBell size={27} className="me-4 cursor-pointer text-white" />
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          alt="Profile Pic"
          className="w-10 h-10 rounded-lg object-cover me-2"
        />
        <p className="text-white font-lg xs:font-sm md:block hidden">User Name</p>
      </div>
    </div>
  );
};

export default Navbar;