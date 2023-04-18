import React, { useState } from "react";
import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";

export const List = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [userList, setUserList] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>LIST</h2>
    </div>
    )
}