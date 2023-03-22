import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginRoute } from "./components/LoginRoute";
import Login from "./layouts/login";
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
      <Router>
        <Routes>
          <LoginRoute path="/login" component={Login} />
          {/*<ProtectedRoute path="/" component={Main} />*/}
        </Routes>
      </Router>
  );
};

export default App;