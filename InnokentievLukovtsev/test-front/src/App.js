import { useQuery, gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import Modal from "./modal/Modal";
import "./styles.css";

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

  const [RegActive, setRegActive] = useState(false);
  const [ListActive, setListActive] = useState(false);
  const [SignActive, setSignActive] = useState(false);

  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const [createUser, {
    data: dataCreateUser, loading: loadingCreateUser, error: errorCreateUser
  }] = useMutation(CREATE_ONE_USER);
  console.log(data);
  return (<div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column",
      height: "100vh",
      background: "white"
    }}
  >

    <button className={"open-btn"} style={{ marginTop: 10 }} onClick={() => setRegActive(true)}> Registration</button>

    <Modal active={RegActive} setActive={setRegActive}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "grey"
      }}>
        <input placeholder={"Email"} style={{ marginTop: 10 }} value={email}
               onChange={(e) => setEmail(e.target.value)} />
        <input placeholder={"Name"} value={name} onChange={e => setName(e.target.value)} style={{ marginTop: 10 }} />
        <input placeholder={"Password"} type={"password"}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               style={{ marginTop: 10 }}
        />
        <button
          style={{ marginTop: 10, width: 100, height: 30, marginBottom: 10 }}
          onClick={() => {
            createUser({
              variables: {
                data: {
                  email, name, password
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
    </Modal>

    <button className={"open-btn"} style={{ marginTop: 10 }} onClick={() => setListActive(true)}> List of registered users </button>

    <Modal active={ListActive} setActive={setListActive}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "grey"
      }}>
        {!loading && data?.findManyUser?.map((item) => {
          return <div style={{
            marginTop: 10, marginBottom: 10
          }}
                      key={item.id}>{item.email}</div>;
        })}
      </div>
    </Modal>

    <button className={"open-btn"} style={{ marginTop: 10 }} onClick={() => setSignActive(true)}>Sign in</button>

    <Modal active={SignActive} setActive={setSignActive}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "grey"
      }}>
        <input placeholder={"Email"} style={{ marginTop: 10 }} value={email}
               onChange={(e) => setEmail(e.target.value)} />
        <input placeholder={"Password"} type={"password"}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               style={{ marginTop: 10 }}
        />
        <button style={{ marginTop: 10, marginBottom: 10 }}>Send</button>
      </div>
    </Modal>
  </div>);
};

export default App;