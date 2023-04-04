import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import UserService from "../services/UserService";

const Test = () => {
    const [arr, setArr] = useState([]);
    const res = UserService.findAll();
    res.then((result) => {
        setArr(result.data[0].name);
    });
    return <div className="App-header">{arr}</div>;
};

export default Test;
