import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { HiStatusOnline } from "react-icons/hi";
import { LiaWarehouseSolid } from "react-icons/lia";
import { AiOutlineSetting } from "react-icons/ai";
import { LuCircleUserRound } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sideBar d-flex flex-column justify-content-between align-items-center">
      {/* Upper Side */}
      <div className="uperSide">
        <ul className="nav flex-column text-center">
          <li className="nav-item my-2 mt-3">
            <button type="button" className="btn position-relative">
              <BsChatLeftDotsFill />
              <span className="position-absolute top-0 mt-2  start-90 translate-middle badge rounded-pill bg-success " style={{fontSize:"14px"}}>
                2
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>

          <li className="nav-item my-2"><HiStatusOnline /></li>
          <li className="nav-item my-2"><RiChatPrivateLine /></li>
          <li className="nav-item my-2"><PiUsersThree /></li>

          <hr className="w-100" />
          <li className="nav-item my-2"><LiaWarehouseSolid /></li>
        </ul>
      </div>

      {/* Bottom Side */}
      <div className="BottomSide">
        <ul className="nav flex-column text-center">
          <li className="nav-item my-2"><AiOutlineSetting /></li>
          <li className="nav-item my-2"><LuCircleUserRound /></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
