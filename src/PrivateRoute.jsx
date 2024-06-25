import React from "react";
import { Route, Navigate } from "react-router-dom";
import Navbar from "./NavBar";

const isAuthenticated = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token)
  return token && token !== null;
};

const PrivateRoute = ({ path,element:Element }) => {
    // console.log("privateRoute",Element,...rest)

    return  <Route  path='/dashboard' element={<Navbar />} />;
    //  <Route path={path} element={<Element />} />
//     debugger
//   return isAuthenticated() ? (
//     <Route {...rest} element={<Element />} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
};

export default PrivateRoute;
