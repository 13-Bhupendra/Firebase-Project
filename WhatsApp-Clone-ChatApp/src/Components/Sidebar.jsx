import React from "react";
import { RiMessage2Line } from "react-icons/ri";
import { RiChatPrivateLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { HiStatusOnline } from "react-icons/hi";
import { LiaWarehouseSolid } from "react-icons/lia";
import { AiOutlineSetting } from "react-icons/ai";
import { LuCircleUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar d-flex flex-column justify-content-between align-items-center">
      {/* Upper Side */}
      <div className="uperSide">
        <ul className="nav flex-column text-center">
          
 <NavLink
  to="/home"
  className={({ isActive }) =>
    `nav-item my-2 d-flex justify-content-center align-items-center rounded-circle p-2 ${
      isActive ? "active-link" : "inactive-link"
    }`
  }
>
  <RiMessage2Line className="sidebar-icon" />
</NavLink>

          <li className="nav-item my-2">
            <HiStatusOnline />
          </li>
          <li className="nav-item my-2">
            <RiChatPrivateLine />
          </li>
          <li className="nav-item my-2">
            <PiUsersThree />
          </li>

          <hr className="w-100" />
          <li className="nav-item my-2">
            <LiaWarehouseSolid />
          </li>
        </ul>
      </div>

      {/* Bottom Side */}
      <div className="BottomSide">
        <ul className="nav flex-column text-center">
          <li className="nav-item my-2">
            <AiOutlineSetting />
          </li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-item my-2 d-flex justify-content-center align-items-center rounded-circle p-2 ${
                isActive ? "active-link" : "inactive-link"
              }`
            }
          >
            <LuCircleUserRound className="sidebar-icon" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
