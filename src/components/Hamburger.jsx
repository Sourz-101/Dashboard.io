import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { LiaChalkboardSolid } from "react-icons/lia";
import { IoWarningOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  return (
    <div>
      {hamburgerOpen ? (
        <div>
          <GiHamburgerMenu
            className="hover:shadow-lg cursor-pointer text-white"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            size={25}
          />
        </div>
      ) : (
        <div className="h-fit flex-col absolute bg-primary10 left-9 top-11 w-44 rounded-xl duration-300">
          <ImCross
            size={20}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className=""
          />
          <ul className="mt-5 ps-4 flex-col items-center">
            <li>
              <Link to="/overview" onClick={() => setHamburgerOpen(true)}>
                <div className="inline-flex">
                  <FaRegListAlt size={30} />
                  <span className="ms-4">Overview</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setHamburgerOpen(true)}>
                <div className="inline-flex">
                  <LiaChalkboardSolid size={30} />
                  <span className="ms-4">Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/alert" onClick={() => setHamburgerOpen(true)}>
                <div className="inline-flex">
                  <IoWarningOutline size={30} />
                  <span className="ms-4">Alerts</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/settings" onClick={() => setHamburgerOpen(true)}>
                <div className="inline-flex">
                  <CiSettings size={30} />
                  <span className="ms-4">Settings</span>
                </div>
              </Link>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
};

export default Hamburger;
