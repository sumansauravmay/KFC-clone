import React from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {state}=React.useContext(AuthContext)
  if(!state.isAuth)
  {
    return <Navigate to="/login"/>
  }
  return children
};

export default PrivateRoute;