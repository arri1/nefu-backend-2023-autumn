import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";

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

  const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
  const [
    createUser,
    {
      data: dataCreateUser,
      loading: loadingCreateUser,
      error: errorCreateUser,
    },
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
      }}
    >
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
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
      />
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
