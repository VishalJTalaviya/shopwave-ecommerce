// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import { PanelRightClose } from 'lucide-react';
// import Sidebar from "../sidebar/Sidebar";

// const Navbar = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const navList = (
//         <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
//             <li>
//                 <Link to={'/'}>Home</Link>
//             </li>
//             <li>
//                 <Link to={'/allproduct'}>All Product</Link>
//             </li>
//             <li>
//                 <Link to={'/signup'}>Signup</Link>
//             </li>
//             <li>
//                 <Link to={'/user-dashboard'}>Vishal</Link>
//             </li>
//             <li>
//                 <Link to={'/admin-dashboard'}>Admin</Link>
//             </li>
//             <li>
//                 <Link to={'/cart'}>
//                     Cart(0)
//                 </Link>
//             </li>
//         </ul>
//     );

//     return (
//         <>
//             <div className={`${sidebarOpen ? "block" : "hidden"} absolute left-0 top-0 w-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`}>
//                 <Sidebar />
//             </div>
//             <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sticky top-0">
//                 <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
//                     <div className="lg:flex items-center py-3 lg:py-0">
//                         <div className=" ml-auto">
//                             <button className="text-white focus:outline-none mr-5" onClick={toggleSidebar}>
//                                 <PanelRightClose size="24" />
//                             </button>
//                         </div>
//                         <div className="left py-3 lg:py-0">
//                             <Link to={'/'}>
//                                 <h2 className="font-bold text-white text-2xl text-center">ShopWave</h2>
//                             </Link>
//                         </div>
//                         <div className="right flex justify-center mb-4 lg:mb-0">
//                             {navList}
//                         </div>
//                     </div>
//                     <SearchBar />
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import { PanelRightClose, ShoppingCart } from 'lucide-react';
// import Sidebar from "../sidebar/Sidebar";
// import { useSelector } from "react-redux";

// const Navbar = () => {

//     const user = JSON.parse(localStorage.getItem('users'));
//     // console.log(user)

//     const navigate = useNavigate();
    
//     const logout = () => {
//         localStorage.clear('users');
//         navigate('/login');
//     }

//     // CartItems
//     const cartItems = useSelector((state) => state.cart) || [];

//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const navList = (
//         <ul className="flex space-x-3 text-white font-medium text-md px-5">

//             <li>
//                 <Link to={'/'}>Home</Link>
//             </li>

//             <li>
//                 <Link to={'/allproduct'}>All Product</Link>
//             </li>

//             { !user ? <li>
//                 <Link to={'/signup'}>Signup</Link>
//             </li> : "" }

//             { !user ? <li>
//                 <Link to={'/login'}>Login</Link>
//             </li> : "" }

//             {/* User */}
//             {user?.role === "user" && <li>
//                 <Link to={'/user-dashboard'}>{user?.name}</Link>
//             </li>}
//             {/* Admin */}
//             {user?.role === "admin" && <li>
//                 <Link to={'/admin-dashboard'}>{user?.name}</Link>
//             </li>}

//             {user && <li className=" cursor-pointer" onClick={logout}>
//                 Logout
//             </li>}

            
//         </ul>
//     );

//     return (
//         <>
//             <div className={`${sidebarOpen ? "block" : "hidden"} absolute left-0 top-0 w-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`}>
//                 <Sidebar />
//             </div>
//             <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sticky top-0 z-50">
//                 <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//                     <div className="lg:flex items-center w-full">
//                         <div className="ml-auto">
//                             <button className="text-white focus:outline-none mr-5" onClick={toggleSidebar}>
//                                 <PanelRightClose size="24" />
//                             </button>
//                         </div>
//                         <div className="flex-grow flex justify-center py-3 lg:py-0">
//                             <Link to={'/'}>
//                                 <h2 className="font-bold -ml-44 mb-1 text-white text-2xl">ShopWave</h2>
//                             </Link>
//                         </div>
//                         <div className="flex-grow flex justify-center lg:justify-center">
//                             {navList}
//                         </div>
//                     </div>
//                     <div className="flex justify-center lg:justify-end w-full lg:w-auto">
//                         <SearchBar />
//                         <li className="flex space-x-3 text-white font-medium text-md px-5">
//                             <Link to="/cart" className="flex items-center">
//                                 <ShoppingCart size={23} />
//                                 <span className="mr-2">Cart({cartItems.length || 0})</span>
//                             </Link>
//                         </li>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;






import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { PanelRightClose, ShoppingCart } from 'lucide-react';
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";
import Profile from "../profile/Profile";


const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // CartItems
    const cartItems = useSelector((state) => state.cart) || [];

    const logout = () => {
        localStorage.clear('users');
        navigate('/login');
    }

    return (
        <>
            <div className={`${sidebarOpen ? "block" : "hidden"} absolute left-0 top-0 w-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`}>
                <Sidebar />
            </div>
            <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sticky top-0 z-50">
                <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                    <div className="lg:flex items-center w-full">
                         <div className="left flex items-center py-3 lg:py-0">
                             <button className="text-white focus:outline-none mr-5 sm:ml-3 lg:flex sm:hidden" onClick={toggleSidebar}>
                                <PanelRightClose size="24" />
                            </button>
                         
                            <Link to={"/"}>
                            <h2 className="font-bold text-white text-2xl text-center lg:-ml-3 md:ml-80 sm:ml-44">
                                ShopWave
                            </h2>
                            </Link>
                        </div>
                        <div className="flex-grow flex justify-center lg:justify-center  md:mr-32 sm:mr-32">
                            <ul className="lg:ml-28 text-lg flex space-x-4 text-white font-medium text-md px-5 md:mb-1 sm:mb-1">
                                <button className="text-white focus:outline-none md:mr-1 lg:hidden " onClick={toggleSidebar}>
                                    <PanelRightClose size="24" />
                                </button>
                                <li className={`hover:text-gray-300 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className={`hover:text-gray-300 ${location.pathname === '/allproduct' ? 'border-b-2 border-white' : ''}`}>
                                    <Link to={'/allproduct'}>All Product</Link>
                                </li>
                                {!user && 
                                    <>
                                        <li>
                                            <Link to={'/signup'}>Signup</Link>
                                        </li>
                                        <li>
                                            <Link to={'/login'}>Login</Link>
                                        </li>
                                    </>
                                }
                                {/* {user?.role === "user" && 
                                    <li className={`hover:text-gray-300 ${location.pathname === '/user-dashboard' ? 'border-b-2 border-white' : ''}`}>
                                        <Link to={'/user-dashboard'}>{user?.firstName}</Link>
                                    </li>
                                }
                                {user?.role === "admin" && 
                                    <li className={`hover:text-gray-300 ${location.pathname === '/admin-dashboard' ? 'border-b-2 border-white' : ''}`}>
                                        <Link to={'/admin-dashboard'}>{user?.firstName}</Link>
                                    </li>
                                }
                                {user && 
                                    <li className="cursor-pointer" onClick={logout}>
                                        Logout
                                    </li>
                                } */}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                        <SearchBar />

                        {/* Profile Component */}
                        {user && <Profile user={user} logout={logout} />}

                        <li className="flex space-x-3 text-white font-medium text-md px-5 mr-2">
                            <Link to="/cart" className="flex items-center gap-1">
                                <ShoppingCart size={23} />
                                <span className={`hover:text-gray-300 ${location.pathname === '/cart' ? 'border-b-2 border-white' : ''}`}>Cart({cartItems.length || 0})</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;









// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import Sidebar from "../sidebar/Sidebar";
// import { PanelRightClose, ShoppingCart } from 'lucide-react';
// // import Sidebar from "../sidebar/SideBar";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   // Function to toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // get user from localStorage
//   const user = JSON.parse(localStorage.getItem("users"));

//   // navigate
//   const navigate = useNavigate();

//   // logout function
//   const logout = () => {
//     localStorage.clear("users");
//     navigate("/login");
//   };

//   // CartItems
//   const cartItems = useSelector((state) => state.cart);

//   // navList Data
//   const navList = (
//     <ul className="flex space-x-6 text-white font-medium text-md px-5 ">
//       {/* Home */}
//       <li
//         className={`hover:text-gray-300 ${
//           location.pathname === "/" ? "border-b-2 border-white" : ""
//         }`}
//       >
//         <Link to={"/"}>Home</Link>
//       </li>

//       {/* All Product */}
//       <li
//         className={`hover:text-gray-300 ${
//           location.pathname === "/allproduct" ? "border-b-2 border-white" : ""
//         }`}
//       >
//         <Link to={"/allproduct"}>All Product</Link>
//       </li>

//       {/* Signup */}
//       {!user ? (
//         <li className={`hover:text-gray-300 ${location.pathname === '/signup' ? 'border-b-2 border-white' : ''}`}>

//           <Link to={"/signup"}>Signup</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* Signup */}
//       {!user ? (
//         <li className={`hover:text-gray-300 ${location.pathname === '/login' ? 'border-b-2 border-white' : ''}`}>

//           <Link to={"/login"}>Login</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* User */}
//       {user?.role === "user" && (
//         <li className={`hover:text-gray-300 ${location.pathname === '/user-dashboard' ? 'border-b-2 border-white' : ''}`}>

//           <Link to={"/user-dashboard"}>{user?.name}</Link>
//         </li>
//       )}

//       {/* Admin */}
//       {user?.role === "admin" && (
//         <li>
//           <Link to={"/admin-dashboard"}>{user?.name}</Link>
//         </li>
//       )}

//       {/* logout */}
//       {user && (
//         <li className=" cursor-pointer" onClick={logout}>
//           logout
//         </li>
//       )}
//     </ul>
//   );

//   return (
//     <>
//       {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}{" "}
//       {/* Render Sidebar only if isSidebarOpen is true */}
//       <nav className="bg-pink-600 sticky top-0 z-10">
//         {/* main  */}
//         <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//           {/* left  */}
//           <div className="left flex items-center py-3 lg:py-0">
//             {/* Menu Icon */}
//             {/* <MenuIcon
//               className="mr-2 cursor-pointer text-white"
//               onClick={toggleSidebar}
//             /> */}
          
//                              <button className="text-white focus:outline-none mr-5 sm:ml-3 sm:" onClick={toggleSidebar}>
//                                 <PanelRightClose size="24" />
//                             </button>
                         
//             <Link to={"/"}>
//               <h2 className="font-bold text-white text-2xl text-center">
//                 ShopWave
//               </h2>
//             </Link>
//           </div>

//           {/* right  */}
//           <div className="right flex justify-center mb-4 lg:mb-0 ">
//             {navList}
//           </div>
//           <div className="flex items-center flex-col lg:flex-row lg:items-center">
//             <div className="mb-4 lg:mb-0 lg:mr-4">
//               <SearchBar />
//             </div>
//             <div>
//               <Link
//                 to={"/cart"}
//                 className="flex items-center text-white font-medium text-md"
//               >
//                 {/* <ShoppingCartIcon /> */}
//                 <span className="ml-1">{`Cart(${cartItems.length})`}</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;