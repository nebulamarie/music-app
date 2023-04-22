import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
//import Artist from "./routes/Artist";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
    
//   },
//   // {
//   //   path:"artist/:artistId",
//   //   element: <Artist/>
//   // }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  <App />
  </React.StrictMode>
);