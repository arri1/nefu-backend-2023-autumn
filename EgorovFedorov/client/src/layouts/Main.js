import { useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
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
  const login = () =>{
    navigate('/');
  }
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
        <p style={{fontWeight: "500"}}>Главная страница</p>
        <p style={{paddingTop: 40}}>Пользователи</p>
        <div style={{ marginTop: 20}}>
          {!loading &&
            data?.findManyUser?.map((item) => {
              return <div key={item.id}>{item.email}</div>;
            })}
        </div>
      </div>
      <button onClick={()=>{localStorage.removeItem('accessToken')}}>Выход</button>
    </div>
  );
};

export default Main;