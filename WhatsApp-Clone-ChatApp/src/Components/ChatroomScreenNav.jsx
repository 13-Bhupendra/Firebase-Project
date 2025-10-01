import React from 'react';
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatroomScreenNav = ({ name }) => {
  return (
    <nav className='p-3 d-flex justify-content-between align-items-center'>
      {/* Profile section */}
      <div className="profile d-flex align-items-center ">
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          className='rounded-circle me-4 bg-light'
          alt=""
          height={"50px"}
        />
        <section>
          <h5 className='p-0 m-0'>{name}</h5>
          <span style={{ fontSize: "13px", color: "whitesmoke" }}>Online</span>
        </section>
      </div>

      {/* Action buttons */}
      <div className="calling">
        <FaPhoneAlt style={{ fontSize: "24px", cursor: "pointer" }} /> &nbsp;&nbsp;&nbsp;
        <FaVideo style={{ fontSize: "24px", cursor: "pointer" }} /> &nbsp;&nbsp;&nbsp;
        <BsThreeDotsVertical style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
    </nav>
  )
}

export default ChatroomScreenNav;
