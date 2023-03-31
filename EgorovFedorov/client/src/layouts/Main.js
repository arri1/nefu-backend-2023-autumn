import React, { useEffect, useState } from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const FIND_MANY_USER = gql`
  query FindManyUser {
    findManyUser {
      email
      id
      password
    }
  }
`;

const Main = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('accessToken') == null) {
      navigate("/");
    }
  }, [])

  return(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        height: "100vh",

      }}
    >

      <div className="mainbar">
        <p style={{fontWeight: "500"}}>Добро пожаловать, {localStorage.getItem('email')}</p>
      </div>
      <button onClick={()=>{
        localStorage.removeItem('accessToken');
        window.location.reload();}}>Выход</button>
    </div>
  );
};

export default Main;