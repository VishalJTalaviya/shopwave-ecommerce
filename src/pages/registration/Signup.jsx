// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, fireDB} from "../../firebase/FirebaseConfig";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import Loader from "../../components/loader/Loader";

// const Signup = () => {

//     const context = useContext(myContext)
//     const {loading, setLoading} = context

//     //navigate
//     const navigate = useNavigate();

//     //user signup state
//     const [userSignup, setUserSignup] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: "user",
//     })

//     //user signup function

//     const userSignupFunction = async () => {
//         // validation 
//         if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true);
//         try {
//             const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//             // create user object
//             const user = {
//                 name: userSignup.name,
//                 email: users.user.email,
//                 uid: users.user.uid,
//                 role: userSignup.role,
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString(
//                     "en-US",
//                     {
//                         month: "short",
//                         day: "2-digit",
//                         year: "numeric",
//                     }
//                 )
//             }

//             // create user Refrence
//             const userRefrence = collection(fireDB, "user")

//             // Add User Detail
//             addDoc(userRefrence, user);

//             setUserSignup({
//                 name: "",
//                 email: "",
//                 password: ""
//             })

//             toast.success("Signup Successfully");

//             setLoading(false);
//             navigate('/login')
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }

//     }


//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {/* loader component */}
//             {/* {loading && <Loader/>} */}
//             {/* Login Form  */}
//             <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

//                 {/* Top Heading  */}
//                 <div className="mb-5">
//                     <h2 className='text-center text-2xl font-bold text-pink-500 '>
//                         Signup
//                     </h2>
//                 </div>

//                 {/* Input One  */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Full Name'
//                         value = {userSignup.name}
//                         onChange={(e) => {
//                             setUserSignup({
//                                ...userSignup,
//                                 name : e.target.value
//                             })
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input Two  */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         placeholder='Email Address'
//                         value = {userSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                ...userSignup,
//                                 email : e.target.value
//                             })
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input Three  */}
//                 <div className="mb-5">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value = {userSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                ...userSignup,
//                                 password : e.target.value
//                             })
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Signup Button  */}
//                 <div className="mb-5">
//                     <button
//                         onClick={userSignupFunction}
//                         type='button'
//                         className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
//                     >
//                         Signup
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Signup;









// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import Loader from "../../components/loader/Loader";

// const Signup = () => {

//     const context = useContext(myContext);
//     const { loading, setLoading } = context;

//     // Navigate
//     const navigate = useNavigate();

//     // User signup state
//     const [userSignup, setUserSignup] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         rePassword: '',
//         contactNumber: '',
//         role: "user",
//     });

//     // User signup function
//     const userSignupFunction = async () => {
//         // Validation
//         if (userSignup.firstName === "" || userSignup.lastName === "" || userSignup.email === "" || userSignup.password === "" || userSignup.rePassword === "" || userSignup.contactNumber === "") {
//             toast.error("All Fields are required");
//             return;
//         }

//         if (userSignup.password !== userSignup.rePassword) {
//             toast.error("Passwords do not match");
//             return;
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(userSignup.email)) {
//             toast.error("Invalid email address");
//             return;
//         }

//         setLoading(true);
//         try {
//             const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//             // Create user object
//             const user = {
//                 firstName: userSignup.firstName,
//                 lastName: userSignup.lastName,
//                 email: users.user.email,
//                 contactNumber: userSignup.contactNumber,
//                 uid: users.user.uid,
//                 role: userSignup.role,
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString("en-US", {
//                     month: "short",
//                     day: "2-digit",
//                     year: "numeric",
//                 })
//             };

//             // Create user reference
//             const userRefrence = collection(fireDB, "user");

//             // Add user details
//             await addDoc(userRefrence, user);

//             // Send confirmation email
//             await users.user.sendEmailVerification();

//             setUserSignup({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 rePassword: '',
//                 contactNumber: ''
//             });

//             toast.success("Signup Successfully. Please verify your email.");

//             setLoading(false);
//             navigate('/login');
//         } catch (error) {
//             console.log(error);
//             toast.error("Signup Failed. Try again.");
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {/* loader component */}
//             {/* {loading && <Loader />} */}
//             {/* Login Form */}
//             <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

//                 {/* Top Heading */}
//                 <div className="mb-5">
//                     <h2 className='text-center text-2xl font-bold text-pink-500 '>
//                         Signup
//                     </h2>
//                 </div>

//                 {/* Input for First Name */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='First Name'
//                         value={userSignup.firstName}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 firstName: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Last Name */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Last Name'
//                         value={userSignup.lastName}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 lastName: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Email Address */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         placeholder='Email Address'
//                         value={userSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 email: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Password */}
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value={userSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 password: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Confirm Password */}
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         placeholder='Confirm Password'
//                         value={userSignup.rePassword}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 rePassword: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Contact Number */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Contact Number'
//                         value={userSignup.contactNumber}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 contactNumber: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Signup Button */}
//                 <div className="mb-5">
//                     <button
//                         onClick={userSignupFunction}
//                         type='button'
//                         className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
//                     >
//                         Signup
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Signup;





/*************************************************** Signup with google  ******************************************************/


// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast";
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import Loader from "../../components/loader/Loader";

// const Signup = () => {

//     const context = useContext(myContext);
//     const { loading, setLoading } = context;

//     // Navigate
//     const navigate = useNavigate();

//     // User signup state
//     const [userSignup, setUserSignup] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         rePassword: '',
//         contactNumber: '',
//         role: "user",
//     });

//     // Google Sign-In
//     const googleProvider = new GoogleAuthProvider();

//     const signInWithGoogle = async () => {
//         setLoading(true);
//         try {
//             const result = await signInWithPopup(auth, googleProvider);
//             const user = result.user;

//             const userDoc = {
//                 firstName: user.displayName.split(" ")[0],
//                 lastName: user.displayName.split(" ")[1],
//                 email: user.email,
//                 contactNumber: '',
//                 uid: user.uid,
//                 role: "user",
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString("en-US", {
//                     month: "short",
//                     day: "2-digit",
//                     year: "numeric",
//                 })
//             };

//             const userReference = collection(fireDB, "user");
//             await addDoc(userReference, userDoc);

//             toast.success("Signup Successful");
//             navigate('/login');
//         } catch (error) {
//             console.log(error);
//             toast.error("Signup Failed. Try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // User signup function
//     const userSignupFunction = async () => {
//         // Validation
//         if (userSignup.firstName === "" || userSignup.lastName === "" || userSignup.email === "" || userSignup.password === "" || userSignup.rePassword === "" || userSignup.contactNumber === "") {
//             toast.error("All Fields are required");
//             return;
//         }

//         if (userSignup.password !== userSignup.rePassword) {
//             toast.error("Passwords do not match");
//             return;
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(userSignup.email)) {
//             toast.error("Invalid email address");
//             return;
//         }

//         setLoading(true);
//         try {
//             const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//             // Create user object
//             const user = {
//                 firstName: userSignup.firstName,
//                 lastName: userSignup.lastName,
//                 email: users.user.email,
//                 contactNumber: userSignup.contactNumber,
//                 uid: users.user.uid,
//                 role: userSignup.role,
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString("en-US", {
//                     month: "short",
//                     day: "2-digit",
//                     year: "numeric",
//                 })
//             };

//             // Create user reference
//             const userRefrence = collection(fireDB, "user");

//             // Add user details
//             await addDoc(userRefrence, user);

//             // Send confirmation email
//             await users.user.sendEmailVerification();

//             setUserSignup({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 rePassword: '',
//                 contactNumber: ''
//             });

//             toast.success("Signup Successfully. Please verify your email.");

//             setLoading(false);
//             navigate('/login');
//         } catch (error) {
//             console.log(error);
//             toast.error("Signup Failed. Try again.");
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {/* loader component */}
//             {loading && <Loader />}
//             {/* Login Form */}
//             <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

//                 {/* Top Heading */}
//                 <div className="mb-5">
//                     <h2 className='text-center text-2xl font-bold text-pink-500 '>
//                         Signup
//                     </h2>
//                 </div>

//                 {/* Input for First Name */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='First Name'
//                         value={userSignup.firstName}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 firstName: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Last Name */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Last Name'
//                         value={userSignup.lastName}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 lastName: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Email Address */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         placeholder='Email Address'
//                         value={userSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 email: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Password */}
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value={userSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 password: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Confirm Password */}
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         placeholder='Confirm Password'
//                         value={userSignup.rePassword}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 rePassword: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Input for Contact Number */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Contact Number'
//                         value={userSignup.contactNumber}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 contactNumber: e.target.value
//                             });
//                         }}
//                         className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
//                     />
//                 </div>

//                 {/* Signup Button */}
//                 <div className="mb-5">
//                     <button
//                         onClick={userSignupFunction}
//                         type='button'
//                         className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
//                     >
//                         Signup
//                     </button>
//                 </div>

//                 {/* Google Signup Button */}
//                 <div className="mb-5">
//                     <button
//                         onClick={signInWithGoogle}
//                         type='button'
//                         className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md'
//                     >
//                         Sign Up with Google
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Signup;






















/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB} from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
// import Loader from "../../components/loader/Loader";

const Signup = () => {

    const context = useContext(myContext)
    const {loading, setLoading} = context

    //navigate
    const navigate = useNavigate();

    //user signup state
    const [userSignup, setUserSignup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        contactNumber: '',
        role: "user",
    })

    //user signup function

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.firstName === "" || userSignup.lastName === "" || userSignup.email === "" || userSignup.password === "" || userSignup.rePassword === "" || userSignup.contactNumber === "") {
            toast.error("All Fields are required");
            return;
        }

        if (userSignup.password !== userSignup.rePassword) {
            toast.error("Passwords do not match");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userSignup.email)) {
            toast.error("Invalid email address");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                firstName: userSignup.firstName,
                lastName: userSignup.lastName,
                email: users.user.email,
                contactNumber: userSignup.contactNumber,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                rePassword: '',
                contactNumber: ''
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            toast.error("Signup Failed. Try again.");
            setLoading(false);
        }

    }


    return (
        <div className='flex justify-center items-center h-screen'>
            {/* loader component */}
            {/* {loading && <Loader/>} */}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

            {/* Input for First Name */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='First Name'
                        value={userSignup.firstName}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                firstName: e.target.value
                            });
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>
            {/* Input for Last Name */}
            <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Last Name'
                        value={userSignup.lastName}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                lastName: e.target.value
                            });
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>


                {/* Input for Email Address */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value = {userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                               ...userSignup,
                                email : e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input for Password */}
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder='Password'
                        value = {userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                               ...userSignup,
                                password : e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>
                
                {/* Input for Confirm Password */}
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={userSignup.rePassword}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                rePassword: e.target.value
                            });
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input for Contact Number */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Contact Number'
                        value={userSignup.contactNumber}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                contactNumber: e.target.value
                            });
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        onClick={userSignupFunction}
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;