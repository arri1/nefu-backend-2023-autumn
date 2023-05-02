import React, { useEffect, useState } from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const FIND_MANY_USER = gql`
    query FindManyUser {
        findManyUser {
            id,
            email
        }
    }
`;

const Main = () => {
  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const navigate = useNavigate();
  let names = [];

  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      navigate("/");
    }
  }, []);

  return (<div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column",
      height: "100vh"

    }}
  >

    <div className="mainbar">
      <p style={{ fontWeight: "500" }}>Добро пожаловать, {localStorage.getItem("email")}</p>

      <p
        style={{
          marginBottom: 5
        }}>Зарегистрированные пользователи:</p>
      {!loading && data?.findManyUser?.map((item) => {
        return (<p
          style={{
            marginTop: 5,
            marginBottom: 5
          }}
          key={item.id}>
          {item.email}
        </p>);
      })}
      <button className="textbox butExit" onClick={() => {
        localStorage.removeItem("email");
        localStorage.removeItem("accessToken");
        navigate("/");
      }}>Выход
      </button>
    </div>
  </div>);
};

export default Main;