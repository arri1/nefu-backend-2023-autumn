import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";

const FIND_MANY_USER = gql`
  query FindManyUser {
    findManyUser {
      email
      id
      password
    }
  }
`;
const CREATE_ONE_USER = gql`
  mutation SignupUser($data: UserCreateInput!) {
  signupUser(data: $data) {
    token
    user {
      id
      email
      password
    }
  }
}
`;

const LoginUser = gql`
  mutation LoginUser($data: UserLoginInput!) {
    loginUser(data: $data){
      user{
        email
        password
      }
    }
  }
`;

const Reg = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const [
    CreateUser,
    {
      data: dataCreateUser,
      loading: loadingCreateUser,
      error: errorCreateUser,
    },
  ] = useMutation(CREATE_ONE_USER);

  const navigate = useNavigate();
  const login = () =>{
    navigate('/');
  }
  console.log(data);
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
        {/*<div className="logo">АБЭ</div>*/}
        <p style={{fontWeight: "500"}}>Регистрация в соц. сети</p>
        <input
          className="textbox"
          placeholder="Почта"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className="textbox"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // style={{ marginTop: 10 }}
        />
        <button
          className="textbox butIn"
          // style={{ marginTop: 10, width: 100, height: 30 }}
          onClick={() => {
            CreateUser({
              variables: {
                data: {
                  email,
                  password,
                },
              },
            })
              .then((data) => {
                console.log(data);
                refetch();
                alert(email);
                login();
              })
              .catch((e) => {
                alert(e.message);
              });
          }}

        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default Reg;