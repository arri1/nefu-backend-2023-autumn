import { useQuery, gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <button>Register</button>
      <button style={{ marginTop: 10 }}>Sign in</button>
      <input placeholder={"Email"} style={{ marginTop: 10 }} value={email} onChange={(e) => setEmail(e.target.value)} />
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
      <div style={{ marginTop: 10 }}>List of registered users</div>
      <div style={{ marginTop: 20 }}>
        {!loading &&
          data?.findManyUser?.map((item) => {
            return <div key={item.id}>{item.email}</div>;
          })}
      </div>
    </div>
  );
};

export default App;