import React, { useState } from "react";
import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";

const LOGIN_USER = gql`
  query FindUniqueUser($where: UserWhereUniqueInput!) {
    findUniqueUser(where: $where) {
      email
      password
    }
}`;

const FIND_MANY_USER = gql`
  query FindManyUser {
    findManyUser {
      email
      id
      password
    }
}`;

export const Login = (props) => {

    const [
        loginUser,
        { loading: loginLoading, error: loginError, where: loginData },
    ] = useLazyQuery(LOGIN_USER);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ListActive, setListActive] = useState(false);
    const { loading, data } = useQuery(FIND_MANY_USER);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({
            variables: {
              where: {
                email: email,
              },
            },
          })
            .then((loginData) => {
              if (loginData.data.findUniqueUser.password === pass)
              {
                alert("User successfully logined");
              }
              else 
                alert("Invalid password");
            })
            .catch((e) => console.log(e)
        );
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}