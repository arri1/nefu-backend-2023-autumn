import { useQuery, gql, useMutation } from "@apollo/client";
import { useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginRoute } from "./components/LoginRoute";
import Login from "./layouts/login";
import Reg from "./layouts/reg";
import { setUser } from "./redux/action";

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

  // useEffect(() => {
  //   if(localStorage.getItem('accessToken') !== null) {
  //     props.setUser(localStorage.getItem('login'))
  //   }
  // }, [])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/reg" element={<Reg/>} />
      </Routes>
    </Router>
  );
};

export default App;