import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";

const CREATE_ONE_USER = gql`
    mutation SignupUser($data: UserCreateInput!) {
        signupUser(data: $data) {
            user {
                id
                email
                password
            }
        }
    }
`;


const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [CreateUser, {
    data: dataCreateUser, loading: loadingCreateUser, error: errorCreateUser
  }] = useMutation(CREATE_ONE_USER);

  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
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
        {/*<div className="logo">АБЭ</div>*/}
        <p style={{ fontWeight: "500" }}>Регистрация в соц. сети</p>
        <input
          className="textbox"
          placeholder="Почта"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          className="textbox"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="textbox butIn"
          onClick={() => {
            CreateUser({
              variables: {
                data: {
                  email, password
                }
              }
            })
              .then((data) => {
                console.log(data);
                alert(email);
                login();
              })
              .catch((e) => {
                alert(e.message);
              });
          }}>
          Зарегистрироваться
        </button>
      </div>
    </div>);
};

export default Reg;