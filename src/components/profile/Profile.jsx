import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";

const Profile = ({ user, logout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserInfoDropdownOpen, setIsUserInfoDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle main dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsUserInfoDropdownOpen(false); // Close user info dropdown when main dropdown is toggled
  };

  // Function to toggle user info dropdown visibility
  const toggleUserInfoDropdown = () => {
    setIsUserInfoDropdownOpen(!isUserInfoDropdownOpen);
  };

  return (
    <div className="relative cursor-pointer">
      <div
        className="flex items-center text-white font-medium text-md ml-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <MdAccountCircle className="ml-2 text-3xl mt-1"/>
        <span className="ml-1 text-xl mt-1">{user?.firstName}</span>
      </div>
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 text-black bg-white border border-gray-200 rounded-md shadow-md z-10">
          {user.role === "user" && (
          <li className="py-2 px-4 hover:bg-gray-100">
            <Link to={"/user-dashboard"} onClick={toggleDropdown}>
              Dashboard
            </Link>
          </li>
           )}
           {user.role === "admin" && (
            <li className="py-2 px-4 hover:bg-gray-100">
            <Link to={"/admin-dashboard"} onClick={toggleDropdown}>
              Dashboard
            </Link>
            </li>
           )}
          <li
            className="py-2 px-4 hover:bg-gray-100 relative"
            onClick={toggleUserInfoDropdown}
          >
            {user?.firstName} Info
            {isUserInfoDropdownOpen && (
              <ul className="absolute top-0 right-full text-black w-max bg-white border border-gray-200 rounded-md shadow-md z-10 pointer-events-none">
                <li className="py-2 px-4">{`First Name: ${user.firstName}`}</li>
                <li className="py-2 px-4">{`Last Name: ${user.lastName}`}</li>
                <li className="py-2 px-4">{`Date: ${user.date}`}</li>
                <li className="py-2 px-4">{`Contact Number: ${user.contactNumber}`}</li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 hover:bg-gray-100" onClick={logout}>
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
