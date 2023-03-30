// import React from 'react'
// import { Route, Navigate, redirect, Routes } from 'react-router-dom'
// import Login from "../layouts/login";
// export const LoginRoute = ({ element: Component, ...rest }) => (
//   // <Route {...rest} render={props => (localStorage.getItem('accessToken') === null ? <Component {...props} /> : <Navigate to="/" />)} />
//   // <Route exact path={rest} element={props => (localStorage.getItem('accessToken') !== null ? <Component {...props} /> : <Navigate to="/" />)} />
//   // <Route exact path="/" element={<Login/>} />
//
//   <Route {...rest} render={props => (localStorage.getItem('accessToken') === null ? <Component {...props} /> : <redirect to="/" />)} />
//
// )

import React from "react";
import {Navigate} from "react-router-dom";
import Login from "../layouts/login";

const LoginA=()=>{
  const token=localStorage.getItem('accessToken')
  if (token){
    console.log("YES");
    return true
  } else{
    return false
  }
}

const LoginRoute=(props:any)=>{
  const auth = LoginA();
  // console.log(auth);
  return auth?<Navigate to="/main"/>:<Login/>
}

export default LoginRoute;

