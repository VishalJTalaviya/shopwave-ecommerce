import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const category = [
    {
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
      name: "Fashion",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
      name: "Shirt",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
      name: "Jacket",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
      name: "Mobile",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
      name: "Laptop",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
      name: "Shoes",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
      name: "Home",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
      name: "Books",
    },
  ];

  const user = JSON.parse(localStorage.getItem("users"));
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <>
    <div className="sidebar  mt-16 w-64 h-screen flex flex-col justify-center items-center fixed  bg-pink-500 z-50 ">
      <h2 className="font-bold text-white text-2xl p-4 -mt-28">Categories</h2>
      {category.map((item, index) => (
        <Link key={index} to={`/category/${item.name}`} className="flex items-center space-x-4 p-2 hover:bg-pink-400 rounded-md">
          <img src={item.image} alt={item.name} className="w-10 h-10" />
          <span className="text-white font-medium text-lg">{item.name}</span>
        </Link>
      ))}

      {/* Account */}

      <div className="flex flex-col space-y-2 mt-4">
          <h2 className="font-bold mr-9 text-white text-2xl text-center">Account</h2>
          {!user ? (
            <>
              <Link
                to="/signup"
                className={`flex items-center space-x-4 p-2 hover:bg-pink-400 rounded-md ${
                  location.pathname === "/signup"
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                <span className="text-white hover:bg-pink-400 font-medium text-lg">
                  Login/Register
                </span>
              </Link>
            </>
          ) : (
            <>
              {user.role === "user" && (
                <Link
                  to="/user-dashboard"
                className="flex items-center space-x-4 p-2 hover:bg-pink-500 rounded-md cursor-pointer"
                
                >
                  <span className="text-white font-medium text-lg">
                    User Dashboard
                  </span>
                </Link>
              )}
              {user.role === "admin" && (
                <Link
                  to="/admin-dashboard"
                  className="flex items-center space-x-4 p-2 hover:bg-pink-500 rounded-md"
                >
                  <span className="text-white font-medium text-lg">
                    Admin Dashboard
                  </span>
                </Link>
              )}
              <div
                className="flex items-center space-x-4 p-2 hover:bg-pink-500 rounded-md cursor-pointer"
                onClick={logout}
              >
                <span className="text-white font-medium text-lg">Logout</span>
              </div>
            </>
          )}
        </div>
    </div>
    </>
  );
};

export default Sidebar;
