import React, { useEffect } from "react";
import "../style/profile.css";
import { FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser, fetchUserData } from "../Slices/usersSlices";
import { toast } from "react-toastify";
import Sidebar from "../Components/Sidebar";

const Profile = () => {

  const dispatch = useDispatch()
  const {currentUser , users} = useSelector((state)=> state.users)
  const userData = users.find((u)=> u.email === currentUser?.email)
  console.log(userData , users)

  const handleSignOut = ()=>{
    dispatch(clearCurrentUser())
  }

    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);
  

  return (
    <div className="ProfileCardContainer d-flex flex-column align-items-center">
      <Sidebar />

      {/* Heading Bar */}
      <div className="profile-header w-100 d-flex align-items-center">
        <h3 className="profile-heading m-0">Profile</h3>
      </div>

      {/* Profile Image */}
      <div className="profile-image">
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt="Profile"
          className="rounded-circle"
        />
      </div>

      {/* Details */}
      <div className="profile-details">
        <p className="detail-item">
          <FaUser className="me-2 icon" /> {userData?.name || "Guest User"}
        </p>
        <p className="detail-item">
          <FaPhone className="me-2 icon" />  {userData?.phone || "+1 98765 43210"}
        </p>
        <p className="detail-item">
          <FaEnvelope className="me-2 icon" /> {userData?.email}
        </p>
        <p className="detail-item">
          <FaInfoCircle className="me-2 icon" /> Living life, one chat at a time
        </p>
      </div>

      {/* Logout */}
      <div className="logout-btn">
        <FaSignOutAlt className="me-2 icon text-danger" /> 
        <span className="logout-text" onClick={handleSignOut}>Log Out</span>
      </div>
    </div>
  );
};

export default Profile;
