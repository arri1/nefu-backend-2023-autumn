import { useQuery, gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const [
    createUser,
    {
      data: dataCreateUser,
      loading: loadingCreateUser,
      error: errorCreateUser
    }
  ] = useMutation(CREATE_ONE_USER);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        height: "100vh",
        background: "grey"
      }}
    >
      <Popup trigger={<button className="button"> Register </button>} position="right center">
        <div>
          <input placeholder={"Email"} style={{ marginTop: 10 }} value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <input placeholder={"Name"} value={name} onChange={e => setName(e.target.value)} style={{ marginTop: 10 }} />
          <input placeholder={"Password"} type={"password"}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 style={{ marginTop: 10 }}
          />
          <button
            style={{ marginTop: 10, width: 100, height: 30 }}
            onClick={() => {
              createUser({
                variables: {
                  data: {
                    email,
                    name,
                    password
                  }
                }
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
          >Send
          </button>
        </div>
      </Popup>

      <Popup trigger={<button style={{marginTop: 10}}> List of registered users </button>} position="right center">
        <div>
          {!loading &&
            data?.findManyUser?.map((item) => {
              return <div key={item.id}>{item.email}</div>;
            })}
        </div>
      </Popup>

      <button style={{ marginTop: 10 }}>Sign in</button>

    </div>
  );
};

export default App;