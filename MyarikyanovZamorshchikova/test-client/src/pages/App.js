import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import "./styles.css";
import Register from "./Register";
import { Users } from "./Users";

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
  mutation CreateOneUser($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
    }
  }
`;
const App = () => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenUsers, setIsOpenUsers] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const [
    createUser,
    {
      data: dataCreateUser,
      loading: loadingCreateUser,
      error: errorCreateUser,
    },
  ] = useMutation(CREATE_ONE_USER);

  const toggleRegister = () => {
    setIsOpenRegister(!isOpenRegister);
  }

  const toggleUsers = () => {
    setIsOpenUsers(!isOpenUsers);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        height: "100vh",
      }}>
      <div>
        <button
          class="button"
          onClick={toggleRegister}>
            <span>Register User</span>
        </button>
        {isOpenRegister && (
        <Register onClose={toggleRegister}>
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}>
          <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          </div>
          <div>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: 10 }}
        placeholder="Password"
        type="password"
      />
      </div>
      <div>
      <button
      class="btn"
        onClick={() => {
          createUser({
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
              alert("user create");
            })
            .catch((e) => {
              alert(e.message);
            });
        }}
      >OK</button>
      </div>
      </div>
        </Register>
      )}
      </div>
      <div>
        <button
          class="button"
          onClick={toggleUsers}>
            <span>Watch list of Users</span>
        </button>
        {isOpenUsers && (
        <Users onClose={toggleRegister}>
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
        }}>
          <h2 style={{ marginTop: 20 }}>Users list</h2>
      <div>
        {!loading &&
          data?.findManyUser?.map((item) => {
            return <div key={item.id}>{item.email}</div>;
          })}
      </div>
      </div>
        </Users>)}
      </div>
    </div>
  );
};

export default App;
