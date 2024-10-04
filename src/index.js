import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { ThemeProvider } from "@material-tailwind/react";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import MyState from "./context/myState";  // Ensure the correct path

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider>
//         <MyState> {/* Ensure MyState wraps the App */}
//           <App />
//         </MyState>
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );
