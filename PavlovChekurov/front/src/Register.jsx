import React, { useState } from "react";
import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";

const CREATE_ONE_USER = gql`
        mutation CreateOneUser($data: UserCreateInput!) {
        createOneUser(data: $data) {
            id
        }
}`;

export const Register = (props) => {

    const [
        createUser,
        {
          data: dataCreateUser,
          loading: loadingCreateUser,
          error: errorCreateUser,
        },
    ] = useMutation(CREATE_ONE_USER);

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({
            variables: {
              data: {
                email,
                name,
                password,
              },
            },
          })
            .then((data) => {
              console.log(data);
              alert("User successfully registered");
            })
            .catch((e) => {
              console.log("Error")
              alert("Error");
        });
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="enteryouremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}